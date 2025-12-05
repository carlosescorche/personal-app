"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/common/Input";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/common/Button";

export function FormForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <>
        {/* Success State */}
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-mint/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-mint" strokeWidth={2} />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Check your email
          </h2>
          <p className="text-base text-gray-700 max-w-xs mx-auto">
            We sent a password reset link to{" "}
            <span className="font-medium text-gray-900">{email}</span>
          </p>
        </div>

        {/* Back to login button */}
        <Button
          variant="primary"
          size="md"
          onClick={() => router.push("/login")}
          className="w-full"
        >
          Back to login
        </Button>

        {/* Resend link */}
        <p className="mt-6 text-center text-sm text-gray-700">
          Didn&apos;t receive the email?{" "}
          <button
            onClick={() => setIsSubmitted(false)}
            className="font-medium text-primary-600 hover:text-primary-700 hover:underline transition-colors"
          >
            Click to resend
          </button>
        </p>
      </>
    );
  }

  return (
    <>
      {/* Back Button */}
      <Link
        href="/login"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to login
      </Link>

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center">
          <Mail className="w-12 h-12 text-primary-600" strokeWidth={2} />
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-3">
          Forgot password?
        </h2>
        <p className="text-base text-gray-700 max-w-xs mx-auto">
          No worries, we&apos;ll send you reset instructions.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email address"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={isLoading}
          className="w-full"
        >
          Send reset link
        </Button>
      </form>

      {/* Back to login link */}
      <div className="mt-6 text-center">
        <Link
          href="/login"
          className="text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline transition-colors"
        >
          Back to login
        </Link>
      </div>
    </>
  );
}

