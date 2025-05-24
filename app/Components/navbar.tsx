"use client"
import { useLayoutEffect, useRef, useState } from 'react';

const PremiumNavbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const logoCircleRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLSpanElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Error boundary for animations
  const safeAnimate = (callback: () => void) => {
    try {
      if (!isAnimating) {
        setIsAnimating(true);
        callback();
        setTimeout(() => setIsAnimating(false), 50);
      }
    } catch (error) {
      console.warn('Animation error:', error);
      setHasError(true);
      setIsAnimating(false);
    }
  };

  useLayoutEffect(() => {
    try {
      // Initial entrance animations using CSS transitions
      if (navRef.current) {
        navRef.current.style.transform = 'translateY(0)';
        navRef.current.style.opacity = '1';
      }

      if (logoCircleRef.current) {
        setTimeout(() => {
          if (logoCircleRef.current) {
            logoCircleRef.current.style.transform = 'scale(1) rotate(0deg)';
            logoCircleRef.current.style.opacity = '1';
          }
        }, 200);
      }

      if (logoTextRef.current) {
        setTimeout(() => {
          if (logoTextRef.current) {
            logoTextRef.current.style.transform = 'translateY(0)';
            logoTextRef.current.style.opacity = '1';
          }
        }, 400);
      }

      // Animate links
      linksRef.current.forEach((link, index) => {
        if (link) {
          setTimeout(() => {
            if (link) {
              link.style.transform = 'translateY(0)';
              link.style.opacity = '1';
            }
          }, 500 + index * 150);
        }
      });

    } catch (error) {
      console.error('Animation setup error:', error);
      setHasError(true);
    }
  }, []);

  // Safe hover animations
  const handleLinkHover = (index: number) => {
    safeAnimate(() => {
      const link = linksRef.current[index];
      if (link) {
        link.style.color = '#fff';
        link.style.transform = 'scale(1.05)';
        link.style.transition = 'all 0.3s ease';
        
        const underline = link.querySelector('.link-underline') as HTMLElement;
        if (underline) {
          underline.style.width = '100%';
          underline.style.background = 'linear-gradient(90deg, #00ffed, #7b61ff)';
          underline.style.transition = 'all 0.4s ease';
        }
      }
    });
  };

  const handleLinkHoverOut = (index: number) => {
    safeAnimate(() => {
      const link = linksRef.current[index];
      if (link) {
        link.style.color = '#a0a0a0';
        link.style.transform = 'scale(1)';
        link.style.transition = 'all 0.3s ease';
        
        const underline = link.querySelector('.link-underline') as HTMLElement;
        if (underline) {
          underline.style.width = '0%';
          underline.style.transition = 'all 0.4s ease';
        }
      }
    });
  };

  // Error fallback UI
  if (hasError) {
    return (
      <nav className="fixed w-full px-12 py-6 flex justify-between items-center z-50 bg-black bg-opacity-80">
  <div className="flex items-center space-x-3">
    <div className="w-14 h-14 rounded-full border-2 border-cyan-400 flex items-center justify-center">
      <span className="text-2xl font-bold text-cyan-400">HU</span>
    </div>
    <span className="text-white text-xl font-medium">Graphic Designer</span>
  </div>
  <div className="flex space-x-10">
    {['Home', 'Skills', 'Work', 'About', 'Contact'].map((item) => (
      <a
        key={item}
        href={`/Components${item === 'Home' ? '' : item.toLowerCase()}`}
        className="text-lg text-gray-400 hover:text-white transition-colors duration-300"
      >
        {item}
      </a>
    ))}
  </div>
</nav>
    );
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed w-full px-4 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center z-50 transition-all duration-1200 ease-out"
        style={{
          background: 'rgba(15, 15, 15, 0.6)',
          backdropFilter: 'blur(8px)',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          transform: 'translateY(-100px)',
          opacity: '0',
        }}
      >
        {/* Logo Container */}
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <div
            ref={logoCircleRef}
            className="w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-1000 ease-out hover:animate-spin overflow-hidden"
            style={{
              borderImage: 'linear-gradient(45deg, #00ffed, #7b61ff) 1',
              transform: 'scale(0) rotate(-180deg)',
              opacity: '0',
            }}
          >
            <img
              src="/img.jpg" // Replace with your image path
              alt="Logo"
              className="w-10 h-10 object-cover transition-all duration-800 ease-out"
              style={{
                transform: 'translateY(20px)',
                opacity: '0',
              }}
              onError={(e) => {
                // Fallback to text if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = document.createElement('span');
                fallback.textContent = 'HU';
                fallback.className = 'text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent transition-all duration-800 ease-out';
                fallback.style.transform = 'translateY(20px)';
                fallback.style.opacity = '0';
                target.parentNode?.appendChild(fallback);
              }}
            />
          </div>
          <span className="text-white text-lg sm:text-xl font-medium">
            Graphic Designer
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-10">
          {['Home', 'Skills', 'Work', 'About', 'Contact'].map((item, index) => (
            <a
              key={item}
              ref={(el) => { 
                if (el) linksRef.current[index] = el; 
              }}
              href={`/Components/${item.toLowerCase()}`}
              className="text-base sm:text-lg relative overflow-hidden transition-all duration-300 ease-out"
              style={{ 
                color: '#a0a0a0',
                transform: 'translateY(30px)',
                opacity: '0',
              }}
              onMouseEnter={() => handleLinkHover(index)}
              onMouseLeave={() => handleLinkHoverOut(index)}
              aria-label={`Navigate to ${item} section`}
            >
              {item}
              <div 
                className="link-underline absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-400 ease-out" 
                style={{
                  background: 'linear-gradient(90deg, #00ffed, #7b61ff)',
                }}
              />
            </a>
          ))}
        </div>
      </nav>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        nav {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        /* Enhanced scroll effect */
        @media (min-width: 768px) {
          nav:hover {
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          nav,
          nav *,
          .link-underline {
            animation: none !important;
            transition: none !important;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          nav {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default PremiumNavbar;