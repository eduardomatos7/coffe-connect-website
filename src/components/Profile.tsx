"use client";
import React from "react";
import { useAuth } from "./providers/AuthProvider";

function Profile() {
  const { user } = useAuth();
  if (!user || !user.name) return null;
  const firstLetter = user.name.charAt(0).toUpperCase();

  return (
    <div className="flex flex-col gap-1">
      <div className="text-md flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#e8d6c0] font-semibold text-[#8b5e3c] md:mr-3 md:h-10 md:w-10">
        {firstLetter}
      </div>
      <span className="text-[#8b5e3c] font-medium text-base md:hidden">{user.name}</span>
    </div>
  );
}

export default Profile;
