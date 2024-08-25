import Image from "next/image";
import fruit from "@/../../public/fruit.png";
export default function Fruit() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mb-10">
      <Image src={fruit} alt="fruit" className="w-48 h-48" />
      <p className="text-xl font-semibold">로또 1등 당첨!</p>
    </div>
  );
}
