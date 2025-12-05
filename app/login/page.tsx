import { HeroSection, AuthCard, FormLogin } from "@/components/auth";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Hero Section - Desktop Left Side */}
      <div className="hidden lg:flex lg:w-1/2">
        <HeroSection
          headline="AI-Powered Employee Feedback That Actually Gets Used"
          subheadline="60-second surveys. 85% response rates."
        />
      </div>

      {/* Form Section - Right Side */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-100">
        <AuthCard
          title="Welcome back"
          description="Sign in to your account"
        >
          <FormLogin />
        </AuthCard>
      </div>
    </div>
  );
}
