import Form from 'react-bootstrap/Form';

export default function InputText({placeholder}) {

    const customStyle = {marginBottom: "15px", fontWeight: 700};

    return (
        <Form.Control type="text" placeholder={placeholder} style={customStyle}/>
    )
}