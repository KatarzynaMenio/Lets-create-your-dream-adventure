import CheckboxArea from "./CheckboxArea.jsx";
import StateSelect from "./StateSelect.jsx";
import FormBootstrap from 'react-bootstrap/Form';
import CheckboxTransport from "./CheckboxTransport.jsx";
import TripDatePicker from "./TripDatePicker.jsx";
import Preferences from "./Preferences.jsx";
import PersonalData from "./PersonalData.jsx";
import {Button} from "react-bootstrap";
import supabase from "../configuration/supabaseClient.js";
import {useEffect, useState} from "react";

export default function Form() {

    //dane z supabase
    const [stateList, setStateList] = useState([]);
    const [regionList, setRegionList] = useState([]);

    //sekcja wybierz obszar CheckboxArea
    const [checkboxRegionList, setCheckboxRegionList] = useState([]);

    useEffect(() => {
        supabase
            .from('USA_STATE')
            .select('*')
            .then((response) => {
                if (response.error) {
                    throw new Error("Unable to get USA_STATE data " + response.error)
                }
                setStateList(response.data)
            })
    }, []);

    useEffect(() => {
        supabase
            .from('USA_REGION')
            .select('*')
            .then((response) => {
                if (response.error) {
                    throw new Error("Unable to get USA_REGION data " + response.error)
                }
                setRegionList(response.data)
            })
    }, []);

    return (
        <FormBootstrap className="form-container">
            <div className="col-12 col-xl-10 justify-content-start">
                <h3>Wybierz obszar:</h3><br/>
                <CheckboxArea regionList={regionList} setRegionList={setRegionList} setCheckboxRegionList={setCheckboxRegionList} checkboxRegionList={checkboxRegionList}/><br/>
                <h3>Wybierz Stany USA:</h3><br/>
                <StateSelect/><br/>
                <h3>Wybierz preferowany sposób poruszania się między stanami:</h3><br/>
                <CheckboxTransport/><br/>
                <h3>Wybierz datę podróży:</h3><br/>
                <TripDatePicker/><br/>
                <h3>Opisz swoje preferencje:</h3><br/>
                <Preferences/><br/>
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