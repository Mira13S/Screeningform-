"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RESET_PASSWORD_MUTATION = gql(`
  mutation ResetPasswordMutation(
    $email: String!
    $newPassword: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      email: $email
      newPassword: $newPassword
      confirmPassword: $confirmPassword
    ) {
      success
    }
  }
`);

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [resetPassword] = useMutation(RESET_PASSWORD_MUTATION);
  const navigation = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, newPassword, confirmPassword } = formData;

    let isValid = true;
    const newErrors = {
      email: "",
      newPassword: "",
      confirmPassword: "",
    };

    // Password validation
    if (newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters.";
      isValid = false;
    } else if (!/[A-Z]/.test(newPassword)) {
      newErrors.newPassword =
        "Password must contain at least one uppercase letter.";
      isValid = false;
    } else if (!/[a-z]/.test(newPassword)) {
      newErrors.newPassword =
        "Password must contain at least one lowercase letter.";
      isValid = false;
    } else if (!/[0-9]/.test(newPassword)) {
      newErrors.newPassword = "Password must contain at least one number.";
      isValid = false;
    } else if (!/[@_]/.test(newPassword)) {
      newErrors.newPassword =
        "Password must contain at least one special character (@ or _).";
      isValid = false;
    } else if (/[^a-zA-Z0-9@_]/.test(newPassword)) {
      newErrors.newPassword =
        "Password can only contain letters, numbers, @, or _.";
      isValid = false;
    }

    // Confirm password validation
    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);
      const res = await resetPassword({
        variables: { email, newPassword, confirmPassword },
      });
      if (res.data.resetPassword.success) {
        toast({
          title: "Password Reset Successful",
          variant: "default",
        });
        navigation("/login");
      } else {
        toast({
          title: "Error resetting password",
          variant: "default",
        });
      }
    } catch (e: any) {
      let errorMessage = "An error occurred during singup";
      // console.log("Erros:");
      // console.log(e.graphQLErrors);
      // console.log(e.graphQLErrors[0]);

      if (e.graphQLErrors && e.graphQLErrors[0]) {
        const errorDetails = e.graphQLErrors[0].extensions?.originalError || {};

        console.log(errorDetails);

        if (errorDetails.message === "Wrong Email") {
          errorMessage =
            "This email does not exist! Please enter a valid email ID";
        } else {
          errorMessage = e.graphQLErrors[0].message || errorMessage;
        }
      }
      toast({
        title: errorMessage,
        variant: "default",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>
            Enter your new password and confirm it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  name="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="********"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  aria-invalid={errors.newPassword ? "true" : "false"}
                  aria-describedby={
                    errors.newPassword ? "new-password-error" : undefined
                  }
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={toggleNewPasswordVisibility}
                  aria-label={
                    showNewPassword ? "Hide password" : "Show password"
                  }
                >
                  {showNewPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {errors.newPassword && (
                <p id="new-password-error" className="text-sm text-red-500">
                  {errors.newPassword}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="********"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                  aria-describedby={
                    errors.confirmPassword
                      ? "confirm-password-error"
                      : undefined
                  }
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={toggleConfirmPasswordVisibility}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {errors.confirmPassword && (
                <p id="confirm-password-error" className="text-sm text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2 w-full">
          <p className="text-sm text-gray-600">
            Remembered your password?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
