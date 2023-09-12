"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { onAuthStateChangedHelper } from "../utils/firebase/firebase";
import { User } from "firebase/auth";
import SignIn from "./SignIn";

const Navbar = () => {
  // Initialize use state
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  return (
    <nav className="flex justify-between items-center p-[1em]">
      <Link href="/">
        <Image
          width={90}
          height={20}
          src="/youtube-logo.svg"
          alt="YouTube Logo"
        />
      </Link>
      <SignIn user={user} />
    </nav>
  );
};

export default Navbar;
