"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputLabel from "../../../components/InputLabel";
import PrimaryButton from "../../../components/PrimaryButton";
import TextInput from "../../../components/TextInput";
import InputError from "../../../components/InputError";

export default function Login() {
  const router = useRouter();
  const { auth } = FirebaseConfig();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Authenticate user with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the user is the admin (example condition)
      if (email === "admin123@gmail.com" && password === "admin12345") {
        // Redirect to admin dashboard
        router.push('/admin/dashboard');
      } else {
        // Redirect to regular dashboard
        router.push('/dashboard');
      }
    } catch (error) {
      // Handle error messages
      setErrors({ general: error.message });
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white">
      <div className="font-bold text-2xl mb-6">Login</div>
      <form onSubmit={handleSignIn} className="w-full sm:max-w-md px-6 py-4 overflow-hidden sm:rounded-lg">

        <div className="mt-4">
          <InputLabel htmlFor="email" value="Email" />
          <TextInput
            type="email"
            name="email"
            value={email}
            className="mt-1 block w-full"
            style={{ border: '1px solid #ccc', padding: '7px' }}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <InputError message={errors.email} />}
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />
          <TextInput
            type="password"
            name="password"
            value={password}
            className="mt-1 block w-full"
            style={{ border: '1px solid #ccc', padding: '7px' }}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <InputError message={errors.password} />}
        </div>

        {errors.general && <InputError message={errors.general} />}

        <div className="flex items-center justify-end mt-4">
          <PrimaryButton style={{ backgroundColor: "#D3F8C9" }} className="font-bold">
            Log in
          </PrimaryButton>
        </div>

      </form>
    </div>
  );
}
