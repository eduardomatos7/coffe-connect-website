"use client";
import React from "react";
import { useAuth } from "./providers/AuthProvider";

function Profile() {
  const { user } = useAuth();
  if (!user || !user.name) return null;
  const firstLetter = user.name.charAt(0).toUpperCase();
  return (
    <div className="text-md flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#e8d6c0] font-semibold text-[#8b5e3c] md:mr-3 md:h-[40px] md:w-[40px]">
      {firstLetter}
    </div>
  );
}

export default Profile;
