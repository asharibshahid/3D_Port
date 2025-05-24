"use client"
import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
  color: string[];
}

const VIPSkillsShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [animationStarted, setAnimationStarted] = useState(false);

  const skills: Skill[] = [
    { name: 'Photoshop', percentage: 95, icon: '🎨', color: ['#ff6b6b', '#ff8e8e'] },
    { name: 'Illustrator', percentage: 95, icon: '✨', color: ['#4ecdc4', '#7ed6cc'] },
    { name: 'InDesign', percentage: 80, icon: '📐', color: ['#45b7d1', '#74c5e0'] },
    { name: 'Canva', percentage: 80, icon: '🎯', color: ['#f9ca24', '#fbd460'] },
    { name: 'Word', percentage: 80, icon: '📝', color: ['#6c5ce7', '#a084e8'] },
    { name: 'Excel', percentage: 75, icon: '📊', color: ['#00b894', '#55c99a'] },
    { name: 'Publisher', percentage: 70, icon: '📰', color: ['#e84393', '#ed6ba7'] },
    { name: 'PowerPoint', percentage: 65, icon: '🖼️', color: ['#fd79a8', '#fe92b8'] }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
      animateElements();
    }, 500);

    return () => clearTimeout(timer);
  }, []);
useEffect(() => {
  const timer = setTimeout(() => {
    setAnimationStarted(true);
    animateElements(); // ✅ calling function is fine
  }, 300);

  return () => clearTimeout(timer);
}, []);

  const animateElements = () => {
    // Animate title
    if (titleRef.current) {
      titleRef.current.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
      titleRef.current.style.opacity = '1';
      titleRef.current.style.transform = 'translateY(0)';
    }

    // Animate subtitle
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        subtitleRef.current.style.opacity = '1';
        subtitleRef.current.style.transform = 'translateY(0)';
      }
    }, 300);

    // Animate skill bars
    skillRefs.current.forEach((ref, index) => {
      if (ref) {
        setTimeout(() => {
          ref.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          ref.style.opacity = '1';
          ref.style.transform = 'translateY(0) scale(1)';
          
          // Animate progress bar
          const progressBar = ref.querySelector('.skill-bar') as HTMLElement;
          if (progressBar) {
            setTimeout(() => {
              progressBar.style.width = `${skills[index].percentage}%`;
            }, 200);
          }
        }, 600 + index * 150);
      }
    });

    // Animate circular skills
    circleRefs.current.forEach((ref, index) => {
      if (ref) {
        setTimeout(() => {
          ref.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
          ref.style.opacity = '1';
          ref.style.transform = 'scale(1) rotate(0deg)';
        }, 1200 + index * 200);
      }
    });
  };

  return (
    <div className="min-h-screen overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)'
    }}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-8 py-20 relative z-10">
        {/* Main Title */}
        <br />
<br />
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-black text-center mb-6 opacity-0 transform translate-y-12"
          style={{
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: animationStarted ? 'gradientShift 3s ease-in-out infinite' : 'none'
          }}
        >
          SKILLS
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl text-gray-300 text-center mb-20 opacity-0 transform translate-y-8"
        >
          Mastering the Art of Digital Design & Productivity
        </p>

        {/* Horizontal Skill Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={el => { skillRefs.current[index] = el; }}
              className="bg-white bg-opacity-5 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-10 relative overflow-hidden opacity-0 transform translate-y-12 scale-95 hover:scale-105 transition-all duration-500 group"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
              
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                </div>
                <div
                  className="text-3xl font-black"
                  style={{
                    background: `linear-gradient(45deg, ${skill.color[0]}, ${skill.color[1]})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {skill.percentage}%
                </div>
              </div>

              <div className="w-full h-4 bg-white bg-opacity-10 rounded-full overflow-hidden relative">
                <div
                  className="skill-bar h-full rounded-full relative overflow-hidden transition-all duration-2000 ease-out"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color[0]}, ${skill.color[1]})`,
                    width: '0%'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Circular Skills */}
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Expertise Overview
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {skills.slice(0, 4).map((skill, index) => (
            <div
              key={`circle-${skill.name}`}
              ref={el => { circleRefs.current[index] = el; }}
              className="flex flex-col items-center text-center opacity-0 transform scale-50 rotate-180"
            >
              <div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full p-2 mb-6 relative overflow-hidden"
                style={{
                  background: `conic-gradient(from 0deg, ${skill.color[0]} 0%, ${skill.color[1]} ${skill.percentage}%, rgba(255,255,255,0.1) ${skill.percentage}%)`
                }}
              >
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center flex-col relative z-10">
                  <span className="text-4xl mb-2">{skill.icon}</span>
                  <span
                    className="text-2xl font-bold"
                    style={{
                      background: `linear-gradient(45deg, ${skill.color[0]}, ${skill.color[1]})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {skill.percentage}%
                  </span>
                </div>
                
                {/* Rotating Border Effect */}
                <div className="absolute inset-0 rounded-full opacity-50 animate-spin" style={{
                  background: `conic-gradient(from 0deg, transparent 0%, ${skill.color[0]} 50%, transparent 100%)`,
                  animationDuration: '3s'
                }} />
              </div>
              
              <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        .skill-bar {
          position: relative;
        }
        
        .skill-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: barShine 2s ease-in-out infinite;
        }
        
        @keyframes barShine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default VIPSkillsShowcase;