"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { useClerk } from "@clerk/clerk-react";
import Logo from "../public/quotify.png";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";
import { useAuth } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  let isSignedIn = false;
  if (!isLoaded || !userId) {
    isSignedIn = false;
  } else {
    isSignedIn = true;
  }
  console.log(isSignedIn);
  const router = useRouter()
  const { signOut } = useClerk();

  return (
    <nav className="navbar flex justify-between items-center mx-8 mt-4  ">
      <div className="navcontainer">
        <Link href="/">
          <Image src={Logo} alt="logo" height={50} width={150} />
        </Link>
      </div>
      <NavigationMenu.Root className="relative z-[1] flex  justify-center">
        <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] bg-white p-1 ">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-0 left-0  ">
              <ul className="mt-4 list-none pt-[30px]">
                {isSignedIn ? (
                  <>
                    <li className="mb-2 mr-2 hover:underline">
                      <Link href="/home">Home</Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <Link href="/create">New</Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <Link href="/profile">Profile</Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <Link href="/explore">Explore</Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <button className="hover:underline" onClick={() => signOut(() => router.push("/"))}>
                        Signout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="mb-2 hover:underline">
                      <Link href="/explore">Explore</Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <Link href="/signup">Signup</Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <Link href="/signin">Login</Link>
                    </li>
                  </>
                )}
              </ul>
              <NavigationMenu.Sub>
                <NavigationMenu.List />
                <NavigationMenu.Viewport />
              </NavigationMenu.Sub>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator />
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </nav>
  );
};

export default Navbar;
