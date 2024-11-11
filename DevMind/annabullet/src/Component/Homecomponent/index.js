import React from 'react'
import Upperheader from "../Upperheader/index";
import Desktopheader from "../Desktopheader/index"
import CategoriesNavbar from "../CategoriesNavbar/index"
import Carasoulfunction from "../Carasoulfunction/index"
import Carddesign from "../Carddesign/index"
import Productcard from "../Productcard/index"
import Newarrival from "../Newarrival/index"
import ShopByCategory from "../ShopByCategory/index"
import Slickslider from "../SliderNewarival/index"
import Upperfooter from "../Upperfooter/index"
import Slidershopbybrand from "../Shopbybrandslider/index"
import Lowerfooter from "../Lowerfooter/index"
import FooterNewsletter from "../FooterNewsletter/index"
// import Dealofday from "../DealofDay/index"
import Mobileheader from "../Mobileheader/index"
import ScrollingHeader from "../ScrollingHeader/index"

const Home = () => {
  return (
    <div>
      <ScrollingHeader />
      <Mobileheader />
      <Upperheader />
      <Desktopheader />
      <CategoriesNavbar />
      <Carasoulfunction />
      <Carddesign />
      <Productcard />
      {/* <Dealofday /> */}
      <ShopByCategory />
      <Slickslider />
      <Newarrival />
      <Slidershopbybrand />
      <Upperfooter />
      <Lowerfooter />
      <FooterNewsletter />
    </div>
  )
}

export default Home
