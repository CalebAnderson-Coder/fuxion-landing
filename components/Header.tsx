import React from 'react';
import { Sponsor } from '../types';

interface HeaderProps {
  sponsor: Sponsor;
}

const Header: React.FC<HeaderProps> = ({ sponsor }) => {
  return (
    <header className="bg-white w-full py-2 px-4 md:px-12 shadow-sm relative z-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-6">
        
        {/* Left Text */}
        <div className="text-center md:text-right">
          <h1 className="text-fuxion text-xl md:text-2xl font-medium tracking-tight leading-tight">
            Hola, Tu patrocinador es <br className="hidden md:block" />
            <span className="font-bold">{sponsor.name}</span>
          </h1>
        </div>

        {/* Profile Image */}
        <div className="relative">
          <img 
            src={sponsor.imageUrl} 
            alt={sponsor.name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
          />
        </div>

        {/* Right Text */}
        <div className="text-center md:text-left">
          <p className="text-fuxion text-sm font-bold leading-tight">
            Distribuidor(a) Fuxion
          </p>
          <p className="text-fuxion text-sm font-bold leading-tight">
            Código: {sponsor.code}
          </p>
        </div>

      </div>
    </header>
  );
};

export default Header;