"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/common/Input";
import { Checkbox } from "@/components/common/Checkbox/Checkbox";
import { Separator } from "@/components/common/Separator/Separator";
import { Button } from "@/components/common/Button";
import { SocialButtons } from "../SocialButtons";

export function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email address"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) =>
                setRememberMe(checked as boolean)
              }
            />
            <label
              htmlFor="remember"
              className="text-sm text-gray-700 cursor-pointer select-none"
            >
              Remember me
            </label>
          </div>

          <Link
            href="/forgot-password"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <Button
          variant="primary"
          size="md"
          isLoading={isLoading}
          className="mt-6 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          type="submit"
        >
          Sign in
        </Button>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <Separator />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-gray-600">
          or continue with
        </span>
      </div>

      {/* Social Login */}
      <SocialButtons />

      {/* Sign Up Link */}
      <p className="mt-6 text-center text-sm text-gray-700">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-primary-600 hover:text-primary-700 hover:underline transition-colors"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}

