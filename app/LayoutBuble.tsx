"use client";

const LayoutBuble = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 animate-fade-in-">
        {/* Floating Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float-"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-6 animate-slide-up-">
        {children}
      </div>
    </div>
  );
};

export default LayoutBuble;