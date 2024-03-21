import InputText from "./InputText.jsx";
import Form from 'react-bootstrap/Form';

export default function PersonalData() {

    const customStyle = {marginBottom: "15px", fontWeight: 700};

    return (
        <div>
            <InputText placeholder="Wpisz imię"/>
            <InputText placeholder="Wpisz nazwisko"/>
            <Form.Group className="mb-3 className=data-style">
                <Form.Control type="email" placeholder="Wpisz adres e-mail np: name@example.com" style={customStyle}/>
            </Form.Group>
            <InputText placeholder="Wpisz numer telefonu"/>
        </div>
    )
}