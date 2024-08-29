"use client";
import Image from "next/image";
import admin from "../../../public/admin.png";
export default function AdminBtn() {
  const handleClickBtn = () => {
    console.log("11111");
    if (localStorage.getItem("mode")) {
      localStorage.clear();
    } else {
      localStorage.setItem("mode", "t");
    }
  };
  return (
    <div className="relative">
      <Image
        src={admin}
        alt="admin"
        className="fixed right-1 bottom-1 z-20"
        onClick={handleClickBtn}
      />
    </div>
  );
}
