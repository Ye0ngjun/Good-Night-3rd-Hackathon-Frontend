import Link from "next/link";

export default function Navbar() {
  return (
    <div className="relative bg-greensek h-14 w-full z-1 flex justify-between items-center px-6 text-white font-semibold">
      <Link href="/" className="text-3xl ">
        Techeer Tree
      </Link>
      <Link href="makefruit" className="text-lg">
        소원 벌레 달기
      </Link>
    </div>
  );
}
