import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (<>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </>)
}