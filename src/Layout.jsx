import React from "react"
// import { LandingPage } from "./pages/login/LandingPage";
// import { Header } from "./components/Features/Header";
import {Header} from "./components/Features/Header"
import { Hero } from "./components/Features/Hero";
import { Map } from "./components/Features/Map";
import { Location } from "./components/Features/Locations";
import { Services } from "./components/Features/Services";
import { Book } from "./components/Features/Book";
import { Footer } from "./components/Features/Footer";
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