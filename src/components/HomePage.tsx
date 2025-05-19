import UserStats from "./UserStats";
function HomePage() {
  return (
    <div className="relative h-[85vh] w-[90vw]">
      <div className="inset-0 absolute bg-transparent h-full w-full z-20 border-4 border-blue-100 shadow-[0_0_10px_5px_rgba(59,130,246,0.7)]"></div>
      <div className="top-[2vh] bottom-[2vh] h-full w-full homepageContents inset-0 absolute flex flex-col justify-around items-center z-10">
        <h1 className="cursor-pointer">The System</h1>
        <div className="tasks w-full flex justify-evenly items-center">
          <img
            src="/assets/placeholder.png"
            alt=""
            className="h-[90px] w-[90px]  cursor-pointer rounded"
          />
          <img
            src="/assets/placeholder.png"
            alt=""
            className="h-[90px] w-[90px] cursor-pointer rounded"
          />
          <img
            src="/assets/placeholder.png "
            alt=""
            className="h-[90px] w-[90px] cursor-pointer rounded"
            onClick={() => console.log("Clicked!")}
          />
        </div>
        <UserStats />
      </div>
      <img className="absolute h-full w-full" src="/assets/bg.png" alt="bg" />
    </div>
  );
}
export default HomePage;
