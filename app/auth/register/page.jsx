"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import InputError from "../../../components/InputError";
import InputLabel from "../../../components/InputLabel";
import PrimaryButton from "../../../components/PrimaryButton";
import TextInput from "../../../components/TextInput";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import { hash } from "bcryptjs";

export default function Register() {
  const router = useRouter();
  const auth = FirebaseConfig().auth;
  const firestore = FirebaseConfig().firestore;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setErrors({ passwordConfirmation: "Passwords do not match" });
      return;
    }

    try {
      // Hash the password
      const hashedPassword = await hash(password, 10);

      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save additional user data to Firestore, including hashed password
      const userDocRef = doc(firestore, "users", user.uid);
      await setDoc(userDocRef, {
        email: user.email,
        name: name,
        password: hashedPassword,
      });

      setMessage("User registered successfully!");
      router.push("/dashboard"); // Redirect to dashboard after successful registration
    } catch (error) {
      setErrors({ general: error.message });
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white">
      <div className="font-bold text-2xl mb-6">Register</div>
      <form onSubmit={handleSubmit} className="w-full sm:max-w-md px-6 py-4 overflow-hidden sm:rounded-lg">
        <div className="mt-4">
          <InputLabel htmlFor="name" value="Name" />
          <TextInput
            name="name"
            value={name}
            className="mt-1 block w-full"
            style={{ border: "1px solid #ccc", padding: "7px" }}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <InputError message={errors.name} />}
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="email" value="Email" />
          <TextInput
            type="email"
            name="email"
            value={email}
            className="mt-1 block w-full"
            style={{ border: "1px solid #ccc", padding: "7px" }}
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
            style={{ border: "1px solid #ccc", padding: "7px" }}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <InputError message={errors.password} />}
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
          <TextInput
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            className="mt-1 block w-full"
            style={{ border: "1px solid #ccc", padding: "7px" }}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
          {errors.passwordConfirmation && <InputError message={errors.passwordConfirmation} />}
        </div>

        {errors.general && <InputError message={errors.general} />}

        <div className="flex items-center justify-end mt-4">
          <Link href="" className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Already registered?
          </Link>
          <PrimaryButton style={{ backgroundColor: "#D3F8C9" }} className="ml-2 font-bold">
            Register
          </PrimaryButton>
        </div>

        {message && <p className="mt-4 text-green-600">{message}</p>}
      </form>
    </div>
  );
}
