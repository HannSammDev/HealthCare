import React from "react"
// import { LandingPage } from "./pages/login/LandingPage";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Map } from "./components/Map";
import { Location } from "./components/Locations";
import { Services } from "./components/Services";
import { Book } from "./components/Book";
import { Footer } from "./components/Footer";

const Layout = () => {
    return (
        <>
            {/* <LandingPage/> */}
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