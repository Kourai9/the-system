import { useState } from "react";
import HomePage from "./components/HomePage";
import DailyTask from "./components/DailyTask";
import Stats from "./components/stats";
import "./App.css";

function App() {
  return (
    <section className="flex items-center justify-center h-[100vh] bg-[#202137]">
      <HomePage />
    </section>
  );
}

export default App;
