"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Metadata } from "next";
import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Checkbox from "@/components/Checkbox";
import GuestLayout from "../../Layouts/GuestLayout";
import InputError from "../../../components/InputError";
import InputLabel from "../../../components/InputLabel";
import PrimaryButton from "../../../components/PrimaryButton";
import TextInput from "../../../components/TextInput";

export default function Login({ status, canResetPassword }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSignIn = async () => {
        try {
          const auth = FirebaseConfig().auth;
    
          if (!email || !password) {
            setError("Harap isi email dan password");
            return;
          }
    
          if (password.length < 8) {
            setError("Password minimal 8 karakter");
            return;
          }
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;
          console.log("User signed in:", user.uid);
          router.push("/auth/register");
          // Redirect atau tindakan lain setelah berhasil masuk
        } catch (error) {
          console.error("Error signing in:", error);
          setError("Invalid email or password");
        }
      };
    

    return (
        <GuestLayout>

            <form >
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        type="email"
                        name="email"
                        value={email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                     {/*  <InputError message={errors.email} className="mt-2" /> */}
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        type="password"
                        name="password"
                        value={password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                  {/*  <InputError message={errors.password} className="mt-2" /> */}
                </div>

                <div className="block mt-4">
                    {/* <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label> */}
                </div>

                <div className="flex items-center justify-end mt-4">
                    {/* {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )} */}

                    <PrimaryButton
                        style={{ backgroundColor: "#D3F8C9" }}
                        className="mb-5 font-bold"
                        onClick={handleSignIn}
                    >
                        Log in
                        
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
