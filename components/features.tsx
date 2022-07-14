"use client";

import classNames from "classnames";
import { Container } from "./container";
import { useInView } from "react-intersection-observer";
import { cn } from "../src/lib/utils";

type FeaturesProps = {
  children: React.ReactNode;
  color: string;
  colorDark: string;
};

export const Features = ({ children, color, colorDark }: FeaturesProps) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      ref={ref}
      className={classNames(
        "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0",
        inView &&
          "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
        !inView && "before:rotate-180 before:opacity-40"
      )}
      style={
        {
          "--feature-color": color,
          "--feature-color-dark": colorDark,
        } as React.CSSProperties
      }
    >
      <div className="mt-[12.8rem] mb-16 w-full md:mt-[25.2rem] md:mb-[12.8rem]">
        {children}
      </div>
    </section>
  );
};


type MainFeatureProps = {
  image: string;
  text: string;
  title: React.ReactNode;
  imageSize?: "small" | "large";
  featureColor?: string; // Added for more customization
};

const MainFeature = ({
  image,
  text,
  title,
  imageSize = "small",
  featureColor = "120, 120, 255", // Default purple-ish color
}: MainFeatureProps) => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background glow */}
      <div 
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          background: `radial-gradient(ellipse at center, rgba(${featureColor}, 0.4) 0%, transparent 70%)`,
        }}
      />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 -z-20 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      
      <div className="relative">
        <div className={classNames(
          "mx-auto text-center",
          imageSize === "small" ? "mx-auto max-w-[120rem] px-8" : "mx-auto max-w-[120rem] px-8"
          // imageSize === "small" ? "max-w-6xl" : "max-w-7xl"
        )}>
          {/* Animated title */}
          <h2 className="text-gradient mb-16 translate-y-[40%] pt-12 text-center text-5xl font-bold tracking-tight transition-all duration-1000 ease-[cubic-bezier(0.3,1.17,0.55,0.99)] md:pt-0 md:text-7xl lg:text-8xl [.is-visible_&]:translate-y-0">
            {title}
          </h2>
          
          {/* Enhanced image container with border animation */}
          <div className="group relative z-10 mx-2 overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_-5px_rgba(var(--feature-color),0.3)] md:mx-0 md:rounded-3xl">
            {/* Animated border */}
            <div 
              className="absolute inset-0 rounded-2xl p-[2px] md:rounded-3xl"
              style={{
                background: `linear-gradient(135deg, rgba(${featureColor}, 0.8), rgba(${featureColor}, 0.2))`,
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
              }}
            />
            
            {/* Glass morphism effect */}
            <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-md md:rounded-3xl" />
            
            {/* Shine effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100 md:rounded-3xl" 
              style={{
                background: `radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, transparent 70%)`,
              }}
            />
            
            <img 
              src={image} 
              className="h-auto w-full scale-[1.01] transform rounded-2xl object-cover transition-transform duration-500 group-hover:scale-100 md:rounded-3xl" 
              alt="Feature showcase"
            />
          </div>
        </div>
        
        {/* Text content */}
        <div className="mx-auto mt-20 max-w-7xl px-6 text-center md:px-0">
          <p className="mx-auto text-xl pt-10 leading-relaxed text-white/80 md:text-3xl md:leading-relaxed">
            {text} 
          </p>
          
          {/* Animated separator */}
          <div className="relative my-16 h-px overflow-hidden">
            <div 
              className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{
                animation: 'shine 2s infinite',
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};



export default MainFeature;

type FeatureGridProps = {
  features: {
    icon: React.FC;
    title: string;
    text: string;
  }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <Container>
      <div className="mb-16 grid w-full grid-cols-2 place-items-center gap-y-9 text-sm text-primary-text md:mb-[14rem] md:grid-cols-3 md:text-md">
        {features.map(({ title, text, icon: Icon }) => (
          <div
            className="max-w-[25.6rem] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline"
            key={title}
          >
            <Icon />
            <span className="block text-white md:inline">{title}</span> {text}
          </div>
        ))}
      </div>
    </Container>
  );
};





Features.Main = MainFeature;
Features.Grid = FeatureGrid;
