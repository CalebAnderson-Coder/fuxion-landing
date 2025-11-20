import React from 'react';
import Header from './components/Header';
import SelectionCard from './components/SelectionCard';
import { Sponsor } from './types';

// Updated background image: Luxury lifestyle, modern interior, implying wealth and success
const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"; 

const App: React.FC = () => {
  const sponsorData: Sponsor = {
    name: "Elizabeth Rodríguez",
    code: "2912006",
    // Updated profile image: Professional woman
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", 
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100 overflow-x-hidden">
      <Header sponsor={sponsorData} />
      
      {/* Main Content Area with Background */}
      <main className="flex-1 relative flex items-center justify-center p-4">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10"></div> {/* Slightly darker overlay for better text contrast against the bright luxury interior */}
          <img 
            src={BACKGROUND_IMAGE} 
            alt="Luxury Lifestyle Background" 
            className="w-full h-full object-cover object-center"
          />
          
          {/* Geometric Overlays to match the design (Diagonal white shapes) */}
          
          {/* Top Left Diagonal Line/Shape */}
          <div 
            className="absolute -top-[100px] -left-[100px] w-[300px] h-[600px] bg-transparent border-r-2 border-white/30 transform rotate-[30deg] pointer-events-none hidden lg:block"
          ></div>
           <div 
            className="absolute top-0 left-0 w-[30vw] h-full bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 pointer-events-none"
          ></div>

           {/* The white diagonal slice on the bottom right - strictly CSS for the shape */}
           <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-transparent border-l-2 border-white/50 transform -rotate-45 z-10 pointer-events-none"></div>
           
           {/* Faint diagonal grid lines overlay simulation */}
           <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)'
                }}>
           </div>
        </div>

        {/* The Main Card */}
        <SelectionCard />
        
        {/* Bottom Right Corner Diagonal Decoration (White triangle corner) */}
         <div className="absolute bottom-0 right-0 w-0 h-0 
            border-b-[100px] border-b-white 
            border-l-[100px] border-l-transparent z-10 opacity-50 md:opacity-100">
        </div>

         {/* Middle Left Diagonal Line Decoration */}
         <div className="absolute top-1/4 left-0 w-[300px] h-[2px] bg-white/50 rotate-45 transform origin-left hidden md:block z-10"></div>

      </main>
    </div>
  );
};

export default App;