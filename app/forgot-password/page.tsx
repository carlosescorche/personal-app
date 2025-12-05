import { Card } from "@/components/common/Card";
import { FormForgotPassword } from "@/components/auth";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <Card className="w-full max-w-[440px] p-6 md:p-8 animate-fade-in">
        <FormForgotPassword />
      </Card>
    </div>
  );
}
