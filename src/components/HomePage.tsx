import UserStats from "./UserStats";
import DailyTask from "./DailyTask";
function HomePage() {
  return (
    <div className="homePage bg-black h-[85%] w-[90%] rounded flex flex-col justify-around">
      <div className="title flex items-center justify-center w-[100%]">
        <h1 className="text-[1.5rem]">The-System</h1>
        <br></br>
      </div>
      <div className="homepageContent flex flex-col items-center justify-around h-[80%]">
        <div className="tasks flex items-center justify-around">
          <img
            src="assets/placeholder.png"
            alt=""
            className="aspect-square w-[25%] rounded"
          />
          <img
            src="assets/placeholder.png"
            alt=""
            className="aspect-square w-[25%] rounded"
          />
          <img
            src="assets/placeholder.png"
            alt=""
            className="aspect-square w-[25%] rounded"
          />
        </div>
        <UserStats />
        <div className="message w-[80%]">
          <h1 className="text-center">Quote of the Day</h1>
          <br></br>
          <p className="text-center">
            All dreams are within reach. All you have to do is keep moving
            towards them
          </p>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
