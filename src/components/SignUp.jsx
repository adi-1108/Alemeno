import React, { useRef, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom"; // Ensure correct import paths for ShadCN components

const SignUp = () => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const nameInput = useRef(null);
  const usernameInput = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("sign up  with:", email, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <p className="text-center text-2xl font-bold">
            Sign up
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Full Name
              </label>
              <Input
                ref={nameInput}
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Username
              </label>
              <Input
                ref={usernameInput}
                id="username"
                type="text"
                placeholder="Enter your username"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                ref={emailInput}
                required
                className="w-full"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                ref={passwordInput}
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p variant="body2" className="text-gray-500">
            Already have a account{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
