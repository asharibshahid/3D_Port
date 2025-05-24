"use client"
import React, { useEffect, useRef, useState } from 'react';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  description: string;
  client?: string;
  year: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
}

const PortfolioWorkShowcase: React.FC = () => {
  
  const heroRef = useRef<HTMLDivElement>(null);
  const workRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [animationStarted, setAnimationStarted] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  useEffect(() => {
    if (animationStarted) {
      console.log("Animation started!");
    }
  }, [animationStarted]);

  const workItems: WorkItem[] = [
    {
      id: 1,
      title: "Social Media Campaign",
      category: "Social Media Creative",
      description: "Creative social media posts and campaigns for various brands, focusing on engagement and visual impact.",
      client: "Multiple Clients",
      year: "2024",
      tags: ["Instagram", "Facebook", "Branding", "Creative"],
      imageUrl: "/img1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "iMax Jersey Branding",
      category: "Branding",
      description: "Complete branding solution for iMax jersey including logo design, color scheme, and brand guidelines.",
      client: "iMax Sports",
      year: "2023",
      tags: ["Logo Design", "Branding", "Sports", "Identity"],
      imageUrl: "/img3.jpg",
      featured: true
    },
    {
      id: 3,
      title: "EXIBINE LTD 3D Signage",
      category: "Branding",
      description: "Professional 3D signage design for EXIBINE LTD, creating modern and impactful visual identity.",
      client: "EXIBINE LTD",
      year: "2023",
      tags: ["3D Design", "Signage", "Corporate", "Visual Identity"],
      imageUrl: "/img4.jpg"
    },
    {
      id: 4,
      title: "Restaurant Logo Collection",
      category: "Logofolio",
      description: "Logo designs for DI FOOD Catering Services, GET IT RESTO, and ANGE FOOD - focusing on food industry branding.",
      client: "Food Industry",
      year: "2023-2024",
      tags: ["Logo Design", "Food", "Restaurant", "Catering"],
      imageUrl: "/img9"
    },
    {
      id: 5,
      title: "Female First Initiative",
      category: "Logofolio",
      description: "Empowering logo design for Female First Initiative EST. 2019, representing women empowerment and leadership.",
      client: "Female First Initiative",
      year: "2023",
      tags: ["NGO", "Empowerment", "Social", "Logo Design"],
      imageUrl: "img7"
    },
  
    {
      id: 6,
      title: "iMax Jersey Branding",
      category: "Branding",
      description: "Complete branding solution for iMax jersey including logo design, color scheme, and brand guidelines.",
      client: "iMax Sports",
      year: "2023",
      tags: ["Logo Design", "Branding", "Sports", "Identity"],
      imageUrl: "/img2.jpg",
      featured: true
    },
     {
      id: 7,
      title: "Social Media Posts",
      category: "Social Media Creative",
      description: "Creative social media posts and campaigns for various brands, focusing on engagement and visual impact.",
      client: "Multiple Clients",
      year: "2024",
      tags: ["Instagram", "Facebook", "Branding", "Creative"],
      imageUrl: "/img6.jpg",
      featured: true
     },
     {
      id: 8,
      title: "Female First Initiative",
      category: "Logofolio",
      description: "Empowering logo design for Female First Initiative EST. 2019, representing women empowerment and leadership.",
      client: "Female First Initiative",
      year: "2023",
      tags: ["NGO", "Empowerment", "Social", "Logo Design"],
      imageUrl: "img8"
    },
  ];

  const categories = ['All', 'Social Media Creative', 'Branding', 'Logofolio', 'Computer & Smart Phone'];

  const filteredWorks = selectedCategory === 'All' 
    ? workItems 
    : workItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    const animateElements = () => {
      // Animate hero section
      if (heroRef.current) {
        heroRef.current.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
        heroRef.current.style.opacity = '1';
        heroRef.current.style.transform = 'translateY(0)';
      }

      // Animate work items
      workRefs.current.forEach((ref, index) => {
        if (ref) {
          setTimeout(() => {
            ref.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            ref.style.opacity = '1';
            ref.style.transform = 'translateY(0) scale(1)';
          }, 800 + index * 150);
        }
      });
    };

    const timer = setTimeout(() => {
      setAnimationStarted(true);
      animateElements();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.3) 0%, transparent 25%),
                           radial-gradient(circle at 75% 75%, rgba(255, 107, 107, 0.3) 0%, transparent 25%),
                           radial-gradient(circle at 50% 50%, rgba(78, 205, 196, 0.2) 0%, transparent 25%)`
        }} />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div 
          ref={heroRef}
          className="text-center mb-20 opacity-0 transform translate-y-16"
        >
            <br />
<br />
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                CREATIVE
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-white">HAVUGIMANA Claude</span>  Graphic Designer
            <br />
            <span className="text-lg">4+ Years of Creative Excellence</span>
          </p>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>We make it better than it is</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <div
              key={work.id}
              ref={el => { workRefs.current[index] = el; }}
              className={`group relative opacity-0 transform translate-y-12 scale-95 cursor-pointer ${
                work.featured ? 'md:col-span-2 xl:col-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredItem(work.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Featured Badge */}
                  {work.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        ⭐ Featured
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-purple-600/90 to-pink-600/90 flex items-center justify-center transition-all duration-500 ${
                    hoveredItem === work.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <div className="text-6xl mb-4">🎨</div>
                      <p className="text-lg font-semibold">View Project</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                      {work.category}
                    </span>
                    <span className="text-gray-400 text-sm">{work.year}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {work.title}
                  </h3>

                  {work.client && (
                    <p className="text-sm text-gray-400 mb-3">
                      <span className="text-purple-400">Client:</span> {work.client}
                    </p>
                  )}

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {work.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 text-gray-300 rounded-lg text-xs hover:bg-white/20 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6">
              Lets create something amazing that makes it better than it is.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span>max308406@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span>+250 788 689 522</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-10px) translateX(-5px) rotate(180deg); 
            opacity: 0.6;
          }
          75% { 
            transform: translateY(-30px) translateX(15px) rotate(270deg); 
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioWorkShowcase;