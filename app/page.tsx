import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Falling hearts */}
      <div className="falling-hearts">
        {Array.from({ length: 15 }, (_, i) => (
          <svg
            key={i}
            width="20"
            height="18"
            viewBox="0 0 300 270"
            className={`falling-heart heart-${i + 1}`}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <path
              d="M150,250 C150,250 25,160 25,100 C25,60 55,30 95,30 C115,30 135,40 150,60 C165,40 185,30 205,30 C245,30 275,60 275,100 C275,160 150,250 150,250 Z"
              fill="#ff69b4"
              opacity="0.7"
            />
          </svg>
        ))}
      </div>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start relative z-10">
        <div className="relative flex items-center justify-center">
          <svg width="300" height="270" viewBox="0 0 300 270" className="max-w-full h-auto">
            {/* Heart shape */}
            <path
              d="M150,250 C150,250 25,160 25,100 C25,60 55,30 95,30 C115,30 135,40 150,60 C165,40 185,30 205,30 C245,30 275,60 275,100 C275,160 150,250 150,250 Z"
              fill="#e74c3c"
              stroke="none"
            />
            
            {/* Text inside heart */}
            <text
              x="150"
              y="130"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="20"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              <tspan x="150" dy="0">Lauren and Andrew</tspan>
              <tspan x="150" dy="25">Forever</tspan>
            </text>
          </svg>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
          .falling-hearts {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
          }
          
          .falling-heart {
            animation: fall linear infinite;
          }
          
          @keyframes fall {
            0% {
              transform: translateY(-100px) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(calc(100vh + 100px)) rotate(360deg);
              opacity: 0;
            }
          }
          
          /* Different sizes and colors for variety */
          .heart-1, .heart-6, .heart-11 { 
            width: 15px; 
            height: 13px; 
          }
          .heart-2, .heart-7, .heart-12 { 
            width: 25px; 
            height: 22px; 
          }
          .heart-3, .heart-8, .heart-13 { 
            width: 18px; 
            height: 16px; 
          }
          .heart-4, .heart-9, .heart-14 { 
            width: 22px; 
            height: 20px; 
          }
          .heart-5, .heart-10, .heart-15 { 
            width: 16px; 
            height: 14px; 
          }
          
          .heart-1 path, .heart-4 path, .heart-7 path, .heart-10 path, .heart-13 path {
            fill: #ff1493;
          }
          .heart-2 path, .heart-5 path, .heart-8 path, .heart-11 path, .heart-14 path {
            fill: #ff69b4;
          }
          .heart-3 path, .heart-6 path, .heart-9 path, .heart-12 path, .heart-15 path {
            fill: #ffb6c1;
          }
        `
      }} />
    </div>
  );
}
