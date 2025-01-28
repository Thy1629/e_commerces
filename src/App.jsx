import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/Navbar/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import headphone from "./assets/Category/headphone.png";
import Products from './components/Products/Products';
import Smartwatch from "./assets/Category/Smartwatch.png"
import Blogs from './components/Blogs/Blogs';
import Partner from './components/Partner/Partner.jsx';
import Footer from './components/Footer/Footer.jsx';
import Popup from './components/Popup/Popup.jsx';
import AOS from "aos";
import "aos/dist/aos.css";




const BannerData = {
  discount: "30% OFF",
  title: "Surround Sound",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "description here description here description here",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 Jan to 28 Jan",
  image: Smartwatch,
  title2: "Smart Solo",
  title3: "chinese new year sale",
  title4: "description here description here description here",
  bgColor: "#2dcc6f",
};


const App = () => {
  const [RegisterPopup, AccountPopup] = React.useState(false);

  const handleRegisterPopup = () => {
    AccountPopup(!RegisterPopup);
  };

  React.useEffect(() => {
    AOS.init(
      {
        duration:800,
        easing: "ease-in-sine",
        delay:100,
        offset:100,
      });
      AOS.refresh();
  }, []);


  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleRegisterPopup={handleRegisterPopup}/>
      <Hero handleRegisterPopup={handleRegisterPopup}/>
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partner />
      <Footer />
      <Popup RegisterPopup={RegisterPopup}
      handleRegisterPopup={handleRegisterPopup}/>
    </div>
  )
}

export default App
