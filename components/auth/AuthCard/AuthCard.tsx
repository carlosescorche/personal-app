"use client";

import { ReactNode } from "react";
import { Logo } from "@/components/common/Logo";
import { Card } from "@/components/common/Card";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
  logoMargin?: string;
  headerMargin?: string;
}

export function AuthCard({
  title,
  description,
  children,
  logoMargin = "mb-8",
  headerMargin = "mb-8",
}: AuthCardProps) {
  return (
    <Card className="w-full max-w-[440px] p-6 md:p-8 animate-fade-in">
      {/* Logo */}
      <div className={logoMargin}>
        <Logo size="sm" />
      </div>

      {/* Header */}
      <div className={headerMargin}>
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-base text-gray-700">{description}</p>
      </div>

      {children}
    </Card>
  );
}

