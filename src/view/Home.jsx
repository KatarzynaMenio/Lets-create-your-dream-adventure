import LandingPage from "../components/LandingPage.jsx";
import MapUSA from "../components/MapUSA.jsx";
import Form from "../components/FormSection.jsx";

export default function Home() {
    return (<div className="container">
        <LandingPage/>
        <MapUSA/>
        <Form/>
    </div>)
}