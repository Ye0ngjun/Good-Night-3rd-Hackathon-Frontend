import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
export default function page() {
  return (
    <div className="w-full h-screen mt-10 flex flex-col items-center ">
      <div className="flex flex-col w-[850px] text-xl font-bold gap-6">
        <div className="flex">
          <span className="w-40">소원 제목</span>
          <input
            type="text"
            className="border-2 w-4/5 border-gray-400 p-1"
          ></input>
        </div>
        <div className="flex">
          <span className="w-40">소원 카테고리</span>
          <div className="border-2 border-gray-400 w-2/5 p-1 flex justify-between">
            <span>진로</span>
            <FaAngleDown />
          </div>
        </div>
        <div className="flex">
          <span className="w-40">소원 본문</span>
          <textarea className="border-2 w-4/5 h-96 flex border-gray-400 items-center border-gray p-1"></textarea>
        </div>
        <div className="flex justify-end">
          <button className="bg-greensek w-28 h-12 rounded-md text-white font-medium hover:bg-green-600">
            소원 등록
          </button>
        </div>
      </div>
    </div>
  );
}
