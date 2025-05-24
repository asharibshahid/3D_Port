"use client"
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Zap, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PortfolioLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Initial loading animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Mouse tracking for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Scroll tracking
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Floating particles animation
  const FloatingParticle = ({ delay, size, duration }: { delay: number; size: number; duration: number }) => (
    <div
      className="absolute rounded-full opacity-20 animate-float"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: 'linear-gradient(45deg, #00ffed, #7b61ff)',
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );

  // Glitch text effect
  const GlitchText = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 text-cyan-400 opacity-70 animate-glitch-1" aria-hidden="true">
        {children}
      </span>
      <span className="absolute top-0 left-0 text-purple-400 opacity-70 animate-glitch-2" aria-hidden="true">
        {children}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, #00ffed 0%, transparent 70%)',
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
            transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.001})`,
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-25 blur-3xl animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, #7b61ff 0%, transparent 70%)',
            right: `${15 + mousePosition.x * -0.01}%`,
            bottom: `${20 + mousePosition.y * -0.01}%`,
            animationDelay: '2s',
            transform: `translate(50%, 50%) scale(${1 + scrollY * 0.0015})`,
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.5} 
            size={Math.random() * 8 + 4}
            duration={Math.random() * 10 + 15}
          />
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,237,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,237,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div 
        ref={heroRef}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 text-center"
      >
        {/* Status Badge */}
        <div 
          className={`mb-8 px-6 py-3 rounded-full border border-cyan-400/30 backdrop-blur-sm transform transition-all duration-1500 ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-center space-x-2 text-cyan-300">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Available for Projects</span>
            <Sparkles className="w-4 h-4 animate-spin-slow" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-6">
          <div
            className={`transform transition-all duration-2000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <h1 
              ref={nameRef}
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-4"
            ><br />
<br />
              <GlitchText className="bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
                HAVUGIMANA
              </GlitchText>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-300 animate-pulse-glow">
              Claude
            </h2>
          </div>

          {/* Title with Animation */}
          <div
            className={`transform transition-all duration-2000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ animationDelay: '0.8s' }}
          >
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
                Creative
              </h3>
              <div className="text-4xl md:text-5xl font-bold text-white relative">
                <span className="relative z-10">Graphic Designer</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-lg opacity-30 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div
            className={`transform transition-all duration-2000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ animationDelay: '1.2s' }}
          >
            <p 
              ref={taglineRef}
              className="text-2xl md:text-3xl text-cyan-200 font-light italic mb-8 animate-float"
            >
              We make it <span className="text-white font-bold">better</span> than it is
            </p>
          </div>

          {/* Experience Badge */}
          <div
            className={`transform transition-all duration-2000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ animationDelay: '1.6s' }}
          >
            <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-400 animate-spin-slow" />
                <span className="text-xl font-bold text-white">4+</span>
              </div>
              <div className="text-gray-300">
                <p className="text-lg font-medium">Years of Experience</p>
                <p className="text-sm opacity-75">Creating Digital Magic</p>
              </div>
              <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 transform transition-all duration-2000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ animationDelay: '2s' }}
          >
            <Link href="/work" >
            <button  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 flex items-center space-x-2 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span>View My Work</span>
            
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button></Link>
            <Link href="/contact">
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-12 animate-bounce transform transition-all duration-2000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ animationDelay: '2.4s' }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400 animate-pulse" />
          <p className="text-cyan-300 text-sm mt-2">Scroll to explore</p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(0,255,237,0.5); }
          50% { text-shadow: 0 0 40px rgba(0,255,237,0.8), 0 0 60px rgba(123,97,255,0.5); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glitch-1 { animation: glitch-1 0.3s infinite; }
        .animate-glitch-2 { animation: glitch-2 0.3s infinite; }
        .animate-gradient-shift { 
          background-size: 200% 200%; 
          animation: gradient-shift 4s ease infinite; 
        }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </div>
  );
};

export default PortfolioLanding;