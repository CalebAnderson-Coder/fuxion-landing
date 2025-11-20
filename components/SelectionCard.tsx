import React, { useState } from 'react';
import { X } from 'lucide-react';

const SelectionCard: React.FC = () => {
  const [activeInfo, setActiveInfo] = useState<'vendedora' | 'emprendedor' | null>(null);

  const infoContent = {
    vendedora: "Unete a nuestro grupo de mas de 40 vendedoras y gana el 20% de tus Ventas. Nostros nos encargamos de todo y tu solo de vender. Tenemos Bonos de mas de 60$ para nuestras Vendedoras.",
    emprendedor: "Empieza a construir tu negocio en Fuxion con el codigo Directo , nosotros nos encargamos de todo el Proceso de Logistica para que tengas tu codigo Fuxion , y te enseñamos el Sistema que te permitira ganar mas de 400$ en menos de 30 dias."
  };

  const handleWhatsAppClick = (type: 'vendedora' | 'emprendedor') => {
    const phoneNumber = "584143094070";
    let message = "";

    if (type === 'vendedora') {
      message = "Hola Estoy Interesada en Vender los productos Fuxion , me das mas Informacion por favor.";
    } else {
      message = "Hola Estoy Interesada en tener mi codigo personal de  Fuxion , me das mas Informacion por favor.";
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-[800px] overflow-hidden relative z-20 mx-4">
        
        {/* Card Header / Logo Area */}
        <div className="bg-[#009FE3] py-6 flex justify-center items-center">
          <h2 className="text-white text-4xl font-bold tracking-[0.2em] uppercase">
            FUXION
          </h2>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-10 text-center">
          <p className="text-gray-600 text-lg mb-8 font-light">
            Elige la opción de tu preferencia para continuar el proceso:
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-2">
            
            {/* Option 1: Vendedora */}
            <div className="flex items-center gap-3 w-full md:w-1/2">
              <button 
                onClick={() => handleWhatsAppClick('vendedora')}
                className="flex-1 bg-[#0085CA] hover:bg-[#0071ad] transition-colors text-white font-bold py-4 px-4 rounded text-sm md:text-base leading-tight shadow-md h-full flex items-center justify-center text-center"
              >
                QUIERO SER <br/> VENDEDORA
              </button>
              <div 
                className="text-gray-400 hover:text-[#0085CA] cursor-pointer transition-colors"
                onClick={() => setActiveInfo('vendedora')}
                aria-label="Más información sobre ser vendedora"
              >
                <div className="border-2 border-current rounded-full w-8 h-8 flex items-center justify-center">
                   <span className="font-serif font-bold italic text-lg">i</span>
                </div>
              </div>
            </div>

            {/* Option 2: Emprendedor */}
            <div className="flex items-center gap-3 w-full md:w-1/2">
              <button 
                onClick={() => handleWhatsAppClick('emprendedor')}
                className="flex-1 bg-[#0085CA] hover:bg-[#0071ad] transition-colors text-white font-bold py-4 px-4 rounded text-sm md:text-base leading-tight shadow-md h-full flex items-center justify-center text-center"
              >
                QUIERO SER <br/> EMPRENDEDOR
              </button>
              <div 
                className="text-gray-400 hover:text-[#0085CA] cursor-pointer transition-colors"
                onClick={() => setActiveInfo('emprendedor')}
                aria-label="Más información sobre ser emprendedor"
              >
                <div className="border-2 border-current rounded-full w-8 h-8 flex items-center justify-center">
                   <span className="font-serif font-bold italic text-lg">i</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Popup Modal */}
      {activeInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all" onClick={() => setActiveInfo(null)}>
          <div 
            className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden animate-in fade-in zoom-in duration-200" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#009FE3] p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                {activeInfo === 'vendedora' ? 'Información Vendedora' : 'Información Emprendedor'}
              </h3>
              <button 
                onClick={() => setActiveInfo(null)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                {infoContent[activeInfo]}
              </p>
              
              <button 
                onClick={() => setActiveInfo(null)}
                className="mt-6 w-full bg-[#0085CA] hover:bg-[#0071ad] text-white font-bold py-3 px-4 rounded shadow-md transition-colors"
              >
                ENTENDIDO
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectionCard;