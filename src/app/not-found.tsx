"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";

const PageNotFound = (): React.JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const redirectInterval = setInterval(() => {
      if (timeLeft === 0) {
        router.push("/");
      } else {
        setTimeLeft((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(redirectInterval);
  });

  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <p className="hover:font-bold underline">Go back to homepage</p>
      </Link>
      <p>404 - You ll be redirected in {timeLeft}s</p>
    </div>
  );
};

export default PageNotFound;
