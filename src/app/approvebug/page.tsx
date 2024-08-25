export default function page() {
  return (
    <div className="w-full h-screen mt-10 flex flex-col items-center ">
      <div className="flex flex-col w-[850px] text-xl font-bold gap-6">
        <span className="w-52 text-4xl">소원 열매 승인</span>
        <div className="flex gap-4">
          <div className="border-2 border-gray-400 w-4/5 p-1 flex items-center">
            돈 잘 벌게 해 주세요~
          </div>
          <button className="rounded-md bg-greensek w-12 h-12"></button>
          <button className="rounded-md bg-red-700 w-12 h-12"></button>
        </div>
        <div className="flex gap-4">
          <div className="border-2 border-gray-400 w-4/5 p-1 flex items-center">
            내일 면접 잘 보게 해 주세요!
          </div>
          <button className="rounded-md bg-greensek w-12 h-12"></button>
          <button className="rounded-md bg-red-700 w-12 h-12"></button>
        </div>
        <div className="flex gap-4">
          <div className="border-2 border-gray-400 w-4/5 p-1 flex items-center">
            우리 가족 항상 건강!
          </div>
          <button className="rounded-md bg-greensek w-12 h-12"></button>
          <button className="rounded-md bg-red-700 w-12 h-12"></button>
        </div>
      </div>
    </div>
  );
}
