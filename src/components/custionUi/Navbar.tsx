"use client";
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="p-4 md:p-3 shadow-md fixed top-0 left-0 right-0 bg-white">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
          <Link href={"/"} className="text-xl font-bold mb-4 md:mb-0">
            <Image src="/SplitGo.svg" alt="logo" width={100} height={100}></Image>
          </Link>

          <Link href={"/ride"} className="text-base font-bold mb-4 md:mb-0">
            Ride
          </Link>
          <Link href={"/about-us"} className="text-base font-bold mb-4 md:mb-0">
            About
          </Link>
          <Link href={"/help"} className="text-base font-bold mb-4 md:mb-0">
            Help
          </Link>
        </div>

        {session ? (
          <Button className="w-auto" onClick={() => signOut()}>
            Sign Out
          </Button>
        ) : (
          <div>
            <Link href={"/sign-in"}>
              <Button variant={"ghost"} className="w-auto">Sign In</Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button className="w-auto rounded-lg">Sign Up</Button>
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
