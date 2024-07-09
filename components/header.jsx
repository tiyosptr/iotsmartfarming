"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import ResponsiveNavLink from "./ResponsiveNavLink";
import { onAuthStateChanged, signOut } from "firebase/auth";
import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import { useRouter } from "next/navigation";

const Header = () => {
  const auth = FirebaseConfig().auth;
  const router = useRouter();
  let unsubscribeFirestore = null; // Variable untuk menyimpan unsubscribe function

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Hentikan listener Firestore jika masih berjalan
      if (unsubscribeFirestore) {
        unsubscribeFirestore();
        unsubscribeFirestore = null; // Reset variable unsubscribeFirestore
      }
      router.push("/auth/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Failed to log out", error);
      // Handle logout error
    }
  };

  // Menghentikan listener Firestore saat komponen unmount
  useEffect(() => {
    return () => {
      if (unsubscribeFirestore) {
        unsubscribeFirestore();
        unsubscribeFirestore = null;
      }
    };
  }, []);

  return (
    <div>
      <nav
        style={{ backgroundColor: "#8EDF78" }}
        className="border-b border-gray-100"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0"></div>
            </div>
            <div className="space-x-5 text-white sm:-my-px sm:ml-5 sm:flex text-center">
              <NavLink href="/dashboard" className="">
                Dashboard
              </NavLink>
              <NavLink href="/profile">Profile</NavLink>
            </div>
            <div>
              <button
                onClick={handleLogout}
                style={{ backgroundColor: "#D3F8C9" }}
                className="py-3 rounded-2xl text-black  px-4 ml-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
