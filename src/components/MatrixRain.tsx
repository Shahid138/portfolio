import React, { useEffect, useState } from 'react';

const MatrixRain: React.FC = () => {
  const [columns, setColumns] = useState<number>(0);

  useEffect(() => {
    const calculateColumns = () => {
      setColumns(Math.floor(window.innerWidth / 20));
    };
    
    calculateColumns();
    window.addEventListener('resize', calculateColumns);
    
    return () => window.removeEventListener('resize', calculateColumns);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-5">
      <div className="flex h-full">
        {Array.from({ length: columns }).map((_, i) => (
          <div
            key={i}
            className="flex-1 relative"
            style={{
              animation: `matrixFall ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <div className="absolute top-0 w-full text-center font-mono text-xs text-black">
              {Array.from({ length: 30 }).map((_, j) => (
                <div key={j}>
                  {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes matrixFall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
};

export default MatrixRain;
