"use client"
import { useState, useEffect, useRef } from 'react';
import { 
  User, Briefcase, Award,  Trophy, 
  Calendar,  Mail, Phone, Instagram,
   Target, Heart, Coffee
} from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const aboutRef = useRef<HTMLDivElement>(null);

  // Experience data
  const experiences = [
    {
      period: '2023 - Present',
      title: 'Freelance Graphic Designer',
      company: 'Ndabaga Freelancing',
      description: 'Independent creative solutions for diverse clients',
      icon: <User className="w-5 h-5" />
    },
    {
      period: '2021 - 2023',
      title: 'Official Graphic Designer',
      company: 'Maran Design Ltd',
      description: 'Brand identity and digital asset creation',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      period: '2018 - 2021',
      title: 'Graphic Designer',
      company: 'SMART DESIGN LTD',
      description: 'Digital graphics and interface design',
      icon: <Award className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible) return;
      
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);
    
    return <span>{count}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div 
          className="absolute w-64 h-64 rounded-full opacity-20 blur-3xl animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, #00ffed 0%, transparent 70%)',
            left: `${mousePosition.x * 0.01}px`,
            top: `${mousePosition.y * 0.01}px`,
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full opacity-15 blur-3xl animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, #7b61ff 0%, transparent 70%)',
            right: `${mousePosition.x * -0.005}px`,
            bottom: `${mousePosition.y * -0.005}px`,
            animationDelay: '3s'
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,237,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,237,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div ref={aboutRef} className="relative z-10 container mx-auto px-6 py-20">
        <br />
<br />
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
              About Me
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full animate-pulse-glow" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Bio & Image */}
          <div className={`transform transition-all duration-2000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            
            {/* Profile Image Placeholder */}
           <div className="relative mb-12 group">
  <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border-2 border-cyan-400/30 backdrop-blur-sm overflow-hidden hover:scale-105 transition-all duration-500">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 animate-pulse" />
    
    {/* Image Section - Replace src with your image path */}
    <img
      src="/pfp.jpg"  // 👈 Update this path
      alt="Claude Havugimana - Graphic Designer"
      className="w-full h-full object-cover rounded-[28px] p-1 border border-cyan-400/20 animate-fade-in"
    />

    {/* Animated Border */}
    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
         style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
  </div>
</div>

            {/* Bio Section */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300 flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-red-400 animate-pulse" />
                  My Story
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Im <span className="text-white font-bold">HAVUGIMANA Claude</span>, a passionate graphic designer with 
                  <span className="text-cyan-400 font-semibold"> more than 4 years</span> of experience creating and maintaining 
                  digital assets, graphics, interface design, and software installation.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  As a graphic designer, I <span className="text-purple-400 font-semibold">visually communicate</span> messages, ideas, 
                  and concepts through the creative use of <span className="text-cyan-400">typography</span>, 
                  <span className="text-green-400"> imagery</span>, <span className="text-yellow-400">color</span>, 
                  and <span className="text-pink-400"> layout</span>.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/20">
                <h3 className="text-2xl font-bold mb-4 text-purple-300 flex items-center">
                  <Target className="w-7 h-7 mr-3 animate-spin-slow" />
                  My Mission
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I transform <span className="text-white font-semibold">abstract ideas</span> into compelling 
                  <span className="text-cyan-400 font-semibold"> visual assets</span>, ranging from logos and branding 
                  materials to advertisements, websites, and packaging.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Experience */}
          <div className={`transform transition-all duration-2000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-6 border border-cyan-400/30 text-center hover:scale-105 transition-all duration-300">
                <Coffee className="w-8 h-8 text-cyan-400 mx-auto mb-3 animate-bounce" />
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={4} />+
                </div>
                <p className="text-cyan-300 font-medium">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl p-6 border border-purple-400/30 text-center hover:scale-105 transition-all duration-300">
                <Trophy className="w-8 h-8 text-purple-400 mx-auto mb-3 animate-pulse" />
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={100} />+
                </div>
                <p className="text-purple-300 font-medium">Projects Done</p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                <Calendar className="w-8 h-8 mr-3 text-green-400 animate-pulse" />
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-102 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ animationDelay: `${index * 200 + 800}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full p-3 flex-shrink-0">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                          <span className="text-cyan-400 font-medium text-sm bg-cyan-400/10 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-purple-300 font-semibold mb-2">{exp.company}</p>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className={`mt-20 text-center transform transition-all duration-2000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold mb-6 text-white">Lets Connect</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+250788689522" className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+250 788 689 522</span>
              </a>
              <a href="mailto:max308406@gmail.com" className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>max308406@gmail.com</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span>imax_best</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0,255,237,0.5); }
          50% { box-shadow: 0 0 40px rgba(0,255,237,0.8); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-gradient-shift { 
          background-size: 200% 200%; 
          animation: gradient-shift 4s ease infinite; 
        }
        .animate-pulse-glow { animation: pulse-glow 2s infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 6s linear infinite; }
        .hover\\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </div>
  );
};

export default AboutPage;