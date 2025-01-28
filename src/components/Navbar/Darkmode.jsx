import React from 'react';
import LightButton from "../../assets/website/Lightmode.png";
import DarkButton from "../../assets/website/Darkmode.png";

const Darkmode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light" );

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  };
  const element = document.documentElement;//access to html element
  
  //set theme to localStorage and html element

  React.useEffect( ()=> {
    localStorage.setItem("theme", theme);

    if(theme == "dark"){
      element.classList.add("dark");
      element.classList.add("dark");

    }else{
      element.classList.remove("light");
      element.classList.remove("dark");
    }

  }) 
  return (
    <div className="relative">
      <div>
        <img 
          src={LightButton} 
          alt="Light Mode Button" 
          className={`w-6 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`} 
          onClick={toggleTheme}
        />
      </div>
      <div>
        <img 
          src={DarkButton} 
          alt="Dark Mode Button" 
          className={`w-6 cursor-pointer ${theme === "light" ? "opacity-0" : "opacity-100"}`} 
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
};

export default Darkmode;
