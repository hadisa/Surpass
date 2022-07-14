"use client";

import { cn } from "../src/lib/utils";
import { Container } from "./container";

type FeatureCardsProps = {
  features: {
    image: string;
    imageClassName?: string;
    title: string;
    text: string;
    gradient?: string; // Optional gradient for extra customization
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <Container>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {features.map(({ title, text, image, imageClassName, gradient }) => (
          <div
            key={title}
            className={cn(
              "hover:shadow-xl hover:shadow-purple-500/10 md:rounded-4xl group relative aspect-[1.1/1] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br p-8 transition-all duration-500 hover:scale-[1.02] md:p-10",
              // gradient || "from-[#1a1a2e] to-[#2A495F]" // Fallback gradient
              gradient || "bg-transparent" // Fallback gradient
            )}
          >
            {/* Glow effect on hover */}
            <div className="from-purple-500/10 absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative z-10 h-full">
              <h3 className="mb-3 text-2xl font-semibold text-white transition-transform duration-300 group-hover:translate-x-2">
                {title}
              </h3>
              <p className="text-gray-300 max-w-[28rem] text-grey text-md transition-transform duration-500 group-hover:translate-x-1">
                {text}
              </p>

              {/* Floating image with hover effect */}
              <img
                className={cn(
                  "absolute bottom-0 right-0 max-w-none opacity-80 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:opacity-100",
                  imageClassName
                )}
                src={image}
                alt={title}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeatureCards;
