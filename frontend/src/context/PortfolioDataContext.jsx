import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import portfolioDataService from '../services/portfolioDataService';
import { useToast } from '../hooks/use-toast';

const PortfolioDataContext = createContext();

export const usePortfolioData = () => {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error('usePortfolioData must be used within PortfolioDataProvider');
  }
  return context;
};

export const PortfolioDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const { toast } = useToast();

  const loadData = useCallback(async (forceRefresh = false) => {
    try {
      if (forceRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      
      setError(null);
      
      const result = await portfolioDataService.fetchPortfolioData(forceRefresh);
      
      const parsedData = {
        personalInfo: result.personalInfo,
        projects: portfolioDataService.parseProjects(result.projects || []),
        experience: portfolioDataService.parseExperience(result.experience || []),
        skills: portfolioDataService.parseSkills(result.skills || []),
        education: portfolioDataService.parseEducation(result.education || [])
      };
      
      setData(parsedData);
      setMeta(result._meta);
      
      if (forceRefresh) {
        toast({
          title: 'Content Refreshed',
          description: 'Portfolio data has been updated successfully.',
        });
      }
    } catch (err) {
      console.error('Error loading portfolio data:', err);
      setError(err.message);
      
      toast({
        title: 'Error Loading Data',
        description: err.message || 'Failed to load portfolio data. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [toast]);

  const refreshData = useCallback(() => {
    loadData(true);
  }, [loadData]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      loadData(false); // Silent refresh
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, [loadData]);

  const value = {
    data,
    loading,
    error,
    meta,
    refreshing,
    refreshData
  };

  return (
    <PortfolioDataContext.Provider value={value}>
      {children}
    </PortfolioDataContext.Provider>
  );
};
