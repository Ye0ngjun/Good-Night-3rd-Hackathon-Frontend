import Image from "next/image";
import bug from "@/../../public/bug.png";
import Link from "next/link";
export default function Fruit() {
  return (
    <Link
      className="flex flex-col items-center justify-center gap-3 mb-10"
      href="/openbug"
    >
      <Image src={bug} alt="bug" className="w-48 h-48" />
      <p className="text-xl font-semibold">로또 1등 당첨!</p>
    </Link>
  );
}
