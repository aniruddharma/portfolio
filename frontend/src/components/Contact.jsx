import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Using FormSubmit.co - free form submission service
    const form = e.target;
    const formData = new FormData(form);
    
    // Send to FormSubmit.co (replace with your email)
    fetch('https://formsubmit.co/aniruddharma@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. I will get back to you soon.',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    })
    .catch(error => {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please email me directly at aniruddharma@gmail.com',
        variant: 'destructive',
      });
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'aniruddharma@gmail.com',
      link: 'mailto:aniruddharma@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 7830933059',
      link: 'tel:+917830933059'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/aniruddharma',
      link: 'https://www.linkedin.com/in/aniruddharma'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Interested in collaboration or have a question? Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.title === 'LinkedIn' ? '_blank' : undefined}
                rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <Card className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-blue-600 mb-3 flex justify-center">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-slate-600 break-words">
                      {info.value}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <Card className="border-slate-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="border-slate-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                    className="border-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    rows={6}
                    className="border-slate-300"
                  />
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                    data-testid="contact-submit-btn"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;