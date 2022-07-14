import { useInView } from "react-intersection-observer";
import classNames from "classnames";

type FeaturesProps = {
  children: React.ReactNode;
  color: string;
  colorDark: string;
};

export const FeaturesSection = ({
  children,
  color,
  colorDark,
}: FeaturesProps) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      ref={ref}
      className={classNames(
        "relative flex flex-col items-center overflow-x-clip",
        "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent)]",
        "before:pointer-events-none before:absolute before:h-[40rem] before:w-full",
        "before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)]",
        "before:bg-no-repeat before:transition-all before:duration-1000 before:ease-in-out",
        "before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)]",
        "before:[background-position:1%_0%,99%_0%] before:[background-size:50%_100%,50%_100%]",
        "after:pointer-events-none after:absolute after:inset-0 after:transition-opacity after:duration-1000",
        "hover:before:[transform:rotate(185deg)_scale(2.1)] hover:after:opacity-90", // Hover effect
        inView
          ? "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)] after:opacity-100"
          : "before:rotate-180 before:opacity-40 after:opacity-0"
      )}
      style={
        {
          "--feature-color": color,
          "--feature-color-dark": colorDark,
        } as React.CSSProperties
      }
    >
      <div
        className={classNames(
          "mb-16 mt-[12.8rem] w-full md:mb-[12.8rem] md:mt-[25.2rem]",
          "transition-all duration-700 ease-out",
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        {children}
      </div>

      {/* Adding animated dots in the background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={classNames(
              "absolute rounded-full bg-[rgba(var(--feature-color),0.4)]",
              "transition-all duration-1000 ease-in-out",
              inView ? "opacity-100" : "opacity-0",
              `w-${Math.floor(Math.random() * 4) + 1} h-${
                Math.floor(Math.random() * 4) + 1
              }`, // Random size
              `top-[${Math.floor(Math.random() * 100)}%]`,
              `left-[${Math.floor(Math.random() * 100)}%]`,
              `animate-float-${Math.floor(Math.random() * 4) + 1}` // Random floating animation
            )}
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

// ------------------------------------


export const Features2 = ({ children, color, colorDark }: FeaturesProps) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      ref={ref}
      className={classNames(
        "relative flex flex-col items-center overflow-x-hidden", // Changed to overflow-x-hidden
        "before:pointer-events-none before:absolute before:h-[40rem] before:w-full",
        "before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)]",
        "before:bg-no-repeat before:transition-all before:duration-1000 before:ease-in-out",
        "before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)]",
        "before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%]",
        inView
          ? "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]"
          : "before:rotate-180 before:opacity-40"
      )}
      style={
        {
          "--feature-color": color,
          "--feature-color-dark": colorDark,
        } as React.CSSProperties
      }
    >
      {/* Horizontal light sweep */}
      <div className={classNames(
        "absolute inset-0 pointer-events-none z-0 overflow-hidden",
        "after:absolute after:top-0 after:left-0 after:h-full after:w-[120%]",
        "after:bg-[linear-gradient(90deg,transparent_0%,rgba(var(--feature-color),0.15)_50%,transparent_100%)]",
        "after:transition-transform after:duration-1000 after:ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "after:translate-x-0" : "after:-translate-x-full"
      )} />

      {/* Glow edge effect */}
      <div className={classNames(
        "absolute top-0 bottom-0 left-0 w-1 z-10",
        "bg-gradient-to-b from-transparent via-[rgba(var(--feature-color),0.8)] to-transparent",
        "transition-opacity duration-500 delay-300",
        inView ? "opacity-100" : "opacity-0"
      )} />

      {/* Content container with staggered animation */}
      <div className={classNames(
        "mt-[12.8rem] mb-16 w-full md:mt-[25.2rem] md:mb-[12.8rem] relative z-10",
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        {children}
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={classNames(
              "absolute h-px bg-[rgba(var(--feature-color),0.6)]",
              "transition-all duration-1000 ease-out",
              inView ? "opacity-100 w-16" : "opacity-0 w-0",
              `top-[${Math.floor(Math.random() * 100)}%]`,
              `left-[${Math.floor(Math.random() * 100)}%]`,
              inView ? "animate-float-horizontal" : ""
            )}
            style={{
              animationDelay: `${i * 0.15}s`,
              transform: `rotate(${Math.floor(Math.random() * 30) - 15}deg)`
            }}
          />
        ))}
      </div>
    </section>
  );
};