export default function page() {
  return (
    <div className="w-full h-[calc(100vh-96px)] mt-10 flex flex-col items-center ">
      <div className="flex flex-col w-[850px] text-xl font-bold gap-6">
        <div className="flex">
          <span className="w-40">소원 제목</span>
          <input
            type="text"
            className="border-2 w-4/5 outline-none border-gray-400 p-1"
          ></input>
        </div>
        <div className="flex">
          <span className="w-40">소원 카테고리</span>
          <select
            name="category"
            className="outline-none w-2/5 border-2 border-gray-400"
          >
            <option value="진로">진로</option>
            <option value="건강">건강</option>
            <option value="인간 관계">인간 관계</option>
            <option value="돈">돈</option>
            <option value="목표">목표</option>
            <option value="학업/성적">학업/성적</option>
            <option value="기타">기타</option>
          </select>
        </div>
        <div className="flex">
          <span className="w-40">소원 본문</span>
          <textarea className="border-2 outline-none w-4/5 h-96 flex border-gray-400 items-center border-gray p-1"></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-greensek w-28 h-12 rounded-md text-white font-medium hover:bg-green-600"
          >
            소원 등록
          </button>
        </div>
      </div>
    </div>
  );
}
