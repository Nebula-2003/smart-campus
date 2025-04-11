"use client";

/* eslint-disable no-unused-vars */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useCallback } from "react";
import {
  Loader2,
  Mail,
  Lock,
  User,
  ArrowRight,
  EyeOff,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FcGoogle } from "react-icons/fc";

// Validation constants
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = {
  upper: /[A-Z]/,
  lower: /[a-z]/,
  number: /[0-9]/,
};

// Form field components to reduce duplication
const FormField = ({
  icon: Icon,
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  disabled,
}) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <div className="relative">
      <Icon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`pl-10 ${error ? "border-red-500" : ""}`}
        disabled={disabled}
      />
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const SubmitButton = ({ loading, children, loadingText }) => (
  <Button type="submit" className="w-full" disabled={loading}>
    {loading ? (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        {loadingText}
      </>
    ) : (
      <>
        {children}
        <ArrowRight className="ml-2 h-4 w-4" />
      </>
    )}
  </Button>
);

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  // Form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Validation state
  const [errors, setErrors] = useState({
    login: { email: "", password: "" },
    signup: { name: "", email: "", password: "" },
  });

  // Memoized validation functions
  const validateEmail = useCallback((email) => {
    if (!email) return "Email is required";
    if (!EMAIL_REGEX.test(email)) return "Please enter a valid email address";
    return "";
  }, []);

  const validatePassword = useCallback((password) => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";

    if (
      !PASSWORD_REGEX.upper.test(password) ||
      !PASSWORD_REGEX.lower.test(password) ||
      !PASSWORD_REGEX.number.test(password)
    ) {
      return "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }
    return "";
  }, []);

  const validateName = useCallback((name) => {
    if (!name) return "Name is required";
    if (name.length < 2) return "Name must be at least 2 characters";
    return "";
  }, []);

  // Handle form changes with dynamic validation
  const handleFormChange = useCallback(
    (formType, e) => {
      const { name, value } = e.target;

      const updater = formType === "login" ? setLoginData : setSignupData;
      updater((prev) => ({ ...prev, [name]: value }));

      // Validate on change
      let errorMessage = "";
      if (name === "email") {
        errorMessage = validateEmail(value);
      } else if (name === "password") {
        errorMessage = validatePassword(value);
      } else if (name === "name") {
        errorMessage = validateName(value);
      }

      setErrors((prev) => ({
        ...prev,
        [formType]: {
          ...prev[formType],
          [name]: errorMessage,
        },
      }));
    },
    [validateEmail, validatePassword, validateName]
  );

  // Handle form submission with validation
  const handleSubmit = useCallback(
    async (formType, e) => {
      e.preventDefault();

      const formData = formType === "login" ? loginData : signupData;
      const newErrors = { ...errors[formType] };

      // Validate all fields
      if (formType === "login") {
        newErrors.email = validateEmail(formData.email);
        newErrors.password = validatePassword(formData.password);
      } else {
        newErrors.name = validateName(formData.name);
        newErrors.email = validateEmail(formData.email);
        newErrors.password = validatePassword(formData.password);
      }

      setErrors((prev) => ({ ...prev, [formType]: newErrors }));

      // Check if there are any validation errors
      if (Object.values(newErrors).some((error) => error)) {
        return;
      }

      // Proceed with submission
      setIsLoading(true);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`${formType} data:`, formData);
        // Handle success (e.g., redirect, show success message)
      } finally {
        setIsLoading(false);
      }
    },
    [loginData, signupData, validateEmail, validatePassword, validateName]
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-md shadow-lg border border-slate-200 dark:border-slate-700 rounded-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Admin Login
          </CardTitle>
          <CardDescription className="text-center">
            Enter your details to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>

            <div>
              <form onSubmit={(e) => handleSubmit("login", e)}>
                <div className="space-y-4">
                  <FormField
                    icon={Mail}
                    label="Email"
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={(e) => handleFormChange("login", e)}
                    placeholder="name@example.com"
                    error={errors.login.email}
                    disabled={isLoading}
                  />
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={loginData.password}
                        onChange={(e) => handleFormChange("login", e)}
                        placeholder="••••••••"
                        className={`pl-10 ${
                          errors.login.password ? "border-red-500" : ""
                        }`}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {errors.login.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.login.password}
                      </p>
                    )}
                  </div>

                  <SubmitButton loading={isLoading} loadingText="Logging in...">
                    Login
                  </SubmitButton>
                </div>
              </form>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200 dark:border-slate-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              variant="outline"
              type="button"
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <FcGoogle className="h-4 w-4" />
              Google
            </Button>
            <Button
              variant="outline"
              type="button"
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <GitHubLogoIcon className="h-4 w-4" />
              GitHub
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
