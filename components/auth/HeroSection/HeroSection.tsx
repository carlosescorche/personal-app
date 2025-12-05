"use client";

import { ReactNode } from 'react';

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  children?: ReactNode;
}

export function HeroSection({ headline, subheadline, children }: HeroSectionProps) {
  return (
    <div className="relative w-full h-full bg-primary-900 overflow-hidden">
      {/* Noise texture overlay */}
      <div className="noise-texture" />
      
      {/* Organic blob shapes background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-700 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary-300 rounded-[50%_50%_50%_50%/60%_40%_60%_40%] blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 max-w-2xl leading-tight tracking-tight">
          {headline}
        </h1>
        <p className="text-lg text-primary-foreground max-w-xl">
          {subheadline}
        </p>
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

