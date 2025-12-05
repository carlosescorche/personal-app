import { HeroSection, AuthCard, FormSignup } from "@/components/auth";
import { Check } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Hero Section - Desktop Left Side */}
      <div className="hidden lg:flex lg:w-1/2">
        <HeroSection
          headline="Join 500+ Companies"
          subheadline="Transform your employee engagement today"
        >
          <div className="space-y-4 text-left max-w-md mx-auto mt-8">
            {[
              "AI-powered survey creation",
              "Real-time insights",
              "85% response rates",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </HeroSection>
      </div>

      {/* Form Section - Right Side */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white">
        <AuthCard
          title="Create your account"
          description="Get started with Formelia"
          logoMargin="mb-6"
          headerMargin="mb-6"
        >
          <FormSignup />
        </AuthCard>
      </div>
    </div>
  );
}
