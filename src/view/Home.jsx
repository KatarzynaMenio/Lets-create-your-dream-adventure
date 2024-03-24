import LandingPage from "../components/LandingPage.jsx";
import MapUSA from "../components/MapUSA.jsx";
import Form from "../components/FormSection.jsx";
import WhatYouGet from "../components/WhatYouGet.jsx";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function Home() {

    const { state } = useLocation();
    const { targetId } = state || {};

    useEffect(() => {
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView();
        }
        console.log(targetId)
    }, [targetId]);

    return (<div className="container">
        <LandingPage/>
        <MapUSA/>
        <Form/>
        <WhatYouGet/>
    </div>)
}