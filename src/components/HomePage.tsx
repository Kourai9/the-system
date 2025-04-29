function HomePage() {
  return (
    <div className="relative h-[85vh] w-[90vw]">
      <div className="inset-0 absolute bg-transparent h-full w-full z-20 border-4 border-blue-100 shadow-[0_0_10px_5px_rgba(59,130,246,0.7)]"></div>
      <div className="top-[2vh] bottom-[2vh] homepageContents inset-0 absolute flex align-center justify-center z-10">
        <h1 className="">The System</h1>
      </div>
      <img className="absolute h-full w-full" src="/assets/bg.png" alt="bg" />
    </div>
  );
}
export default HomePage;
