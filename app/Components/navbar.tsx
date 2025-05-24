"use client"
import { useLayoutEffect, useRef, useState } from 'react';

const PremiumNavbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const logoTextRef = useRef<HTMLSpanElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Safe animation handler
  const safeAnimate = (callback: () => void) => {
    try {
      if (!isAnimating) {
        setIsAnimating(true);
        callback();
        setTimeout(() => setIsAnimating(false), 50);
      }
    } catch (error) {
      console.warn('Animation error:', error);
      setIsAnimating(false);
    }
  };

  useLayoutEffect(() => {
    try {
      // Initial entrance animations
      if (navRef.current) {
        navRef.current.style.transform = 'translateY(0)';
        navRef.current.style.opacity = '1';
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
    }
  }, []);

  // Hover animations
  const handleLinkHover = (index: number) => {
    safeAnimate(() => {
      const link = linksRef.current[index];
      if (link) {
        link.style.color = '#fff';
        link.style.transform = 'scale(1.05)';
        
        const underline = link.querySelector('.link-underline') as HTMLElement;
        if (underline) {
          underline.style.width = '100%';
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
        
        const underline = link.querySelector('.link-underline') as HTMLElement;
        if (underline) {
          underline.style.width = '0%';
        }
      }
    });
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed w-full px-4 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center z-50 transition-all duration-1000 ease-out backdrop-blur-lg"
        style={{
          background: 'rgba(15, 15, 15, 0.6)',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          transform: 'translateY(-100px)',
          opacity: '0',
        }}
      >
        {/* Logo Container */}
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400/50">
            <img
              src="/img.jpg"
              alt="Logo"
              className="w-full h-full object-cover"
              width="40"
              height="40"
            />
          </div>
          <span 
            ref={logoTextRef}
            className="text-white text-lg sm:text-xl font-medium transition-all duration-800 ease-out"
            style={{
              transform: 'translateY(20px)',
              opacity: '0',
            }}
          >
            Graphic Designer
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-10">
          {['Home', 'Skills', 'Work', 'About', 'Contact'].map((item, index) => (
            <a
              key={item}
              ref={(el) => { 
                linksRef.current[index] = el; 
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
                className="link-underline absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-400 ease-out bg-gradient-to-r from-cyan-400 to-purple-500"
              />
            </a>
          ))}
        </div>
      </nav>

      {/* Global Styles */}
      <style jsx global>{`
        /* Backdrop filter support */
        nav {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        /* Enhanced hover effect */
        @media (min-width: 768px) {
          nav:hover {
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
        }

        /* Accessibility - Respect user preferences */
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

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default PremiumNavbar;
