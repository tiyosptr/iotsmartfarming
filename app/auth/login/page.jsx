"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import GuestLayout from "../../Layouts/GuestLayout";
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

    // Check if the user is the admin
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
    <GuestLayout>
      <form onSubmit={handleSignIn}>
        <div>
          <InputLabel htmlFor="email" value="Email" />
          <TextInput
            type="email"
            name="email"
            value={email}
            className="mt-1 block w-full"
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <InputError message={errors.password} />}
        </div>

        {errors.general && <InputError message={errors.general} />}

        <div className="flex items-center justify-end mt-4">
          <PrimaryButton type="submit" className="ms-4">
            Log in
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
