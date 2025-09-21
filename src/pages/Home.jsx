import React, { useContext } from "react";
import { DarkModeContext } from "../App";
import Header from "../components/Mheader";
import Greeting from "../components/Greeting";
import UploadSection from "../components/Hcard";
 

export default function Home() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
        <Header storedUser={storedUser} />
        <div className="pt-44 pl-8">
          <Greeting storedUser={storedUser} />
        </div>
        <div className="mt-16 flex pl-8">
          <UploadSection />
        </div>
      </div>
    </div>
  );
}
