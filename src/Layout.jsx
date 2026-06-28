import React from "react"
// import { LandingPage } from "./pages/login/LandingPage";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Map } from "./components/Map";
import { Location } from "./components/Locations";
import { Services } from "./components/Services";
import { Book } from "./components/Book";
import { Footer } from "./components/Footer";
import { ScrollTop } from "primereact/scrolltop";

const Layout = () => {
    return (
        <> 
            {/* <LandingPage/> */}
            <ScrollTop  className="rounded-lg bg-blue-700 font-bold " style={{backgroundColor:'blue', padding:'10px' , color:'#ffff',borderRadius:'rounded'}}/>
            <Header />
            <Hero />
            <Map />
            <Location />
            <Services />
            <Book />
            <Footer/>
        </>
    )
}
export default Layout;