import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div className="layout">
            <div className="content">
                <Navigation/>
                <Outlet/>
            </div>
            <div className="footer-wrapper">
                <Footer/>
            </div>
        </div>
    )
}