import Fruit from "./_componenets/Bug";

export default function Home() {
  return (
    <div className="relative">
      <div className="bg-tree h-[calc(100vh-56px)] bg-cover flex flex-col justify-start items-center">
        <div className="grid grid-cols-3 gap-4 w-[900px] mt-10">
          <Fruit />
          <Fruit />
          <Fruit />
          <Fruit />
          <Fruit />
          <Fruit />
        </div>
      </div>
    </div>
  );
}
