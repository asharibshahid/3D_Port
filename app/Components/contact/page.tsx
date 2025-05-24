"use client"
import React, { useEffect, useRef, useState } from 'react';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
  color: string[];
}

const ContactPage: React.FC = () => {
  
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
useEffect(() => {
  if (animationStarted) {
    console.log("Animation started!");
  }
}, [animationStarted]);

  const contactInfo: ContactInfo[] = [
    {
      icon: '📧',
      label: 'Email',
      value: 'max308406@gmail.com',
      link: 'mailto:max308406@gmail.com',
      color: ['#ff6b6b', '#ee5a52']
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+250 788 689 522',
      link: 'tel:+250788689522',
      color: ['#4ecdc4', '#44a08d']
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Rwanda, Kigali',
      color: ['#45b7d1', '#3498db']
    },
    {
      icon: '🌐',
      label: 'Instagram',
      value: '@imax_best',
      link: 'https://instagram.com/imax_best',
      color: ['#fd79a8', '#e84393']
    },
    {
      icon: '💼',
      label: 'Experience',
      value: '4+ Years in Design',
      color: ['#6c5ce7', '#a29bfe']
    },
    {
      icon: '🎯',
      label: 'Specialization',
      value: 'Graphic Design & Branding',
      color: ['#00b894', '#00cec9']
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
      animateElements();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const animateElements = () => {
    // Animate hero
    if (heroRef.current) {
      heroRef.current.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
      heroRef.current.style.opacity = '1';
      heroRef.current.style.transform = 'translateY(0)';
    }

    // Animate form
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        formRef.current.style.opacity = '1';
        formRef.current.style.transform = 'translateX(0) scale(1)';
      }
    }, 600);

    // Animate contact cards
    contactRefs.current.forEach((ref, index) => {
      if (ref) {
        setTimeout(() => {
          ref.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          ref.style.opacity = '1';
          ref.style.transform = 'translateY(0) scale(1)';
        }, 900 + index * 150);
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! HAVUGIMANA Claude will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/40 to-pink-900/30" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(78, 205, 196, 0.3) 0%, transparent 50%)
          `
        }} />
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-20 ${
              i % 3 === 0 ? 'bg-purple-400' : i % 3 === 1 ? 'bg-pink-400' : 'bg-blue-400'
            }`}
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatElement ${6 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div 
          ref={heroRef}
          className="text-center mb-16 opacity-0 transform translate-y-20"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <br />
<br />
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              GET IN
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              TOUCH
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your creative vision to life? Lets collaborate and 
            <span className="block mt-2 font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Make it better than it is
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className="opacity-0 transform -translate-x-12 scale-95"
          >
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 relative overflow-hidden">
              {/* Form Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Send Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                      placeholder="Your Message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message 🚀
                      </span>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                ref={el => { contactRefs.current[index] = el; }}
                className="opacity-0 transform translate-y-12 scale-95"
                onMouseEnter={() => setHoveredContact(index)}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden group">
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500`} 
                       style={{ background: `linear-gradient(135deg, ${contact.color[0]}, ${contact.color[1]})` }} />
                  
                  <div className="relative z-10 flex items-center gap-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                      style={{ 
                        background: `linear-gradient(135deg, ${contact.color[0]}20, ${contact.color[1]}20)`,
                        border: `1px solid ${contact.color[0]}40`
                      }}
                    >
                      {contact.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-300 mb-1">
                        {contact.label}
                      </h3>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className="text-xl font-bold text-white hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text transition-all duration-300"
                          style={{ 
                            '--tw-gradient-from': contact.color[0],
                            '--tw-gradient-to': contact.color[1]
                          } as React.CSSProperties}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-xl font-bold text-white">
                          {contact.value}
                        </p>
                      )}
                    </div>

                    {contact.link && (
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <span className="text-sm">→</span>
                      </div>
                    )}
                  </div>

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                    hoveredContact === index ? 'opacity-100' : 'opacity-0'
                  }`} style={{
                    background: `linear-gradient(45deg, ${contact.color[0]}, ${contact.color[1]})`,
                    padding: '2px',
                    zIndex: -1
                  }}>
                    <div className="w-full h-full bg-gray-900/90 backdrop-blur-xl rounded-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lets Create Something Amazing Together
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With over 4 years of experience in graphic design, branding, and digital creativity, 
              Im here to help bring your vision to life. Whether its social media campaigns, 
              logo design, or complete brand identity  lets make it better than it is!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Available for Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>Quick Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>Professional Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatElement {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.2;
          }
          25% { 
            transform: translateY(-30px) translateX(20px) rotate(90deg); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-20px) translateX(-15px) rotate(180deg); 
            opacity: 0.5;
          }
          75% { 
            transform: translateY(-40px) translateX(25px) rotate(270deg); 
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;