import CheckboxArea from "./CheckboxArea.jsx";
import StateSelect from "./StateSelect.jsx";
import FormBootstrap from 'react-bootstrap/Form';
import CheckboxTransport from "./CheckboxTransport.jsx";
import TripDatePicker from "./TripDatePicker.jsx";
import Preferences from "./Preferences.jsx";
import PersonalData from "./PersonalData.jsx";
import {Button} from "react-bootstrap";

export default function Form () {
    return (
        <FormBootstrap className="form-container">
            <div className="col-12 col-xl-10 justify-content-start">
                <h3>Wybierz obszar:</h3><br/>
                <CheckboxArea/><br/>
                <h3>Wybierz Stany USA:</h3><br/>
                <StateSelect/><br/>
                <h3>Wybierz preferowany sposób poruszania się między stanami:</h3><br/>
                <CheckboxTransport/><br/>
                <h3>Wybierz datę podróży:</h3><br/>
                <TripDatePicker /><br/>
                <h3>Opisz swoje preferencje:</h3><br/>
                <Preferences /><br/>
                <h3>Wypełnij swoje dane:</h3><br/>
                <PersonalData/>
                <div className="submit-element">
                    <span>Success/error message</span>
                    <Button className="button-style" variant="outline-primary">Wyślij</Button>
                </div>
            </div>
        </FormBootstrap>
    )
}