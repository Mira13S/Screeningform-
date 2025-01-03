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

const LOGIN_MUTATION = gql(`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    loginUser(
      email: $email
      password: $password
    ) {
      token
      user {
        id
        name
        email
      }
    }
  }
`);

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [loginUser, { loading, error }] = useMutation(LOGIN_MUTATION);
  const navigation = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    try {
      const { email, password } = formData;
      setIsLoading(true);
      const res = await loginUser({ variables: { email, password } });

      console.log("Loading" + loading);
      console.log("Error" + error);
      console.log(res);

      console.log("authtoken", res.data.loginUser.token || "");
      localStorage.setItem("userID", res.data.loginUser.user.id || "");
      localStorage.setItem("authToken", res.data.loginUser.token || "");

      toast({
        title: "Login Successfull",
        variant: "default",
      });

      navigation("/dashboard");
    } catch (e: any) {
      let errorMessage = "An error occurred during login";
      // console.log("Erros:");
      // console.log(e.graphQLErrors);
      // console.log(e.graphQLErrors[0]);

      if (e.graphQLErrors && e.graphQLErrors[0]) {
        const errorDetails = e.graphQLErrors[0].extensions?.originalError || {};

        console.log(errorDetails);

        if (errorDetails.message === "User not found") {
          errorMessage = "No account found with this email. Please register.";
        } else if (errorDetails.message === "Invalid password") {
          errorMessage = "Incorrect password. Please try again.";
        } else {
          errorMessage = e.graphQLErrors[0].message || errorMessage;
        }
      }

      toast({
        title: errorMessage,
        variant: "default",
      });
      // console.log(error);
      // console.log(e);
      // // toast({
      //   title: "Invalid credentials",
      //   variant: "default",
      // });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
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
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="****"
                  value={formData.password}
                  onChange={handleInputChange}
                  aria-invalid={errors.password ? "true" : "false"}
                  aria-describedby={
                    errors.password ? "password-error" : undefined
                  }
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {errors.password && (
                <p id="password-error" className="text-sm text-red-500">
                  {errors.password}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2 w-full">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
          <p className="text-sm ml-5 text-gray-600">
            Forgot Password?{" "}
            <a href="/resetpassword" className="text-blue-600 hover:underline">
              Reset Password
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
