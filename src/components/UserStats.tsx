export default function UserStats() {
  return (
    <div className="statsSection h-[20%] w-[90%] bg-slate-50 flex rounded">
      <div className="userImage w-[45%] h-full bg-red-400 flex items-center justify-center">
        <div className="imageContainer w-[80%] aspect-square rounded-full overflow-hidden">
          <img src="/assets/placeholder.png" className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="userStats h-full w-[55%] bg-red-700 flex flex-col justify-around items-center">
        <img
          src="/assets/green.png"
          alt="healthPlaceholder"
          className="h-[5%] w-[90%] rounded"
        />
        <img
          src="/assets/blue.png"
          alt="healthPlaceholder"
          className="h-[5%] w-[90%] rounded"
        />
        <img
          src="/assets/grey.jpg"
          alt="healthPlaceholder"
          className="h-[5%] w-[90%] rounded"
        />
        <h1 className="self-start">Level: 0</h1>
        <p className="self-start">Title: Beginner</p>
      </div>
    </div>
  );
}
