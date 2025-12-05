"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/common/Input";
import { Checkbox } from "@/components/common/Checkbox/Checkbox";
import { Separator } from "@/components/common/Separator/Separator";
import { Button } from "@/components/common/Button";
import { SocialButtons } from "../SocialButtons";

export function FormSignup() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<
    "weak" | "medium" | "strong" | null
  >(null);
  const router = useRouter();

  const calculatePasswordStrength = (password: string) => {
    if (!password) return null;
    if (password.length < 6) return "weak";
    if (password.length < 10) return "medium";
    return "strong";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
    setPasswordStrength(calculatePasswordStrength(newPassword));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  const strengthColors = {
    weak: "bg-coral",
    medium: "bg-amber-500",
    strong: "bg-mint",
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full name"
          type="text"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          required
        />

        <Input
          label="Company name"
          type="text"
          placeholder="Acme Inc."
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          required
        />

        <Input
          label="Work email"
          type="email"
          placeholder="you@company.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />

        <div>
          <Input
            label="Password"
            type="password"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handlePasswordChange}
            required
          />
          {/* Password Strength Indicator */}
          {passwordStrength && (
            <div className="mt-2 space-y-1">
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <div  
                  className={`h-full transition-all duration-300 ${strengthColors[passwordStrength]}`}
                  style={{
                    width:
                      passwordStrength === "weak"
                        ? "33%"
                        : passwordStrength === "medium"
                        ? "66%"
                        : "100%",
                  }}
                />
              </div>
              <p className="text-xs text-secondary-foreground capitalize">
                Password strength: {passwordStrength}
              </p>
            </div>
          )}
        </div>

        <Input
          label="Confirm password"
          type="password"
          placeholder="Re-enter your password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          error={
            formData.confirmPassword &&
            formData.password !== formData.confirmPassword
              ? "Passwords don't match"
              : undefined
          }
          required
        />

        {/* Terms Checkbox */}
        <div className="flex items-start gap-2 pt-2">
          <Checkbox
            id="terms"
            checked={acceptTerms}
            onCheckedChange={(checked) =>
              setAcceptTerms(checked as boolean)
            }
            className="mt-0.5"
          />
          <label
            htmlFor="terms"
            className="text-sm text-gray-700 cursor-pointer select-none leading-relaxed"
          >
            I agree to the{" "}
            <a
              href="#"
              className="text-primary-600 hover:text-primary-700 hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-primary-600 hover:text-primary-700 hover:underline"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <Button
          variant="primary"
          size="md"
          isLoading={isLoading}
          className="mt-6 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          disabled={!acceptTerms}
          type="submit"
        >
          Create account
        </Button>
      </form>

      {/* Divider */}
      <div className="relative my-4">
        <Separator />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-gray-600">
          or continue with
        </span>
      </div>

      {/* Social Login */}
      <SocialButtons />

      {/* Sign In Link */}
      <p className="mt-6 text-center text-sm text-gray-700">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary-600 hover:text-primary-700 hover:underline transition-colors"
        >
          Sign in
        </Link>
      </p>
    </>
  );
}

