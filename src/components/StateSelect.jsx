import Form from 'react-bootstrap/Form';

export default function StateSelect() {

    const states = ["california", "nevada", "utah"];

    return (
        <div className="container">
            <div className="select-element-style row">
                <div className="col-6"></div>
                <div className="col-6">
                    <h5 className="choice-header">Twój wybór:</h5>
                </div>
            </div>
            <div className="select-element-style row">
                <Form.Select aria-label="Default select example" className="select-element col-12 col-md-6">
                    {states.map((single, index) => (
                        <option key={index} value={single}>{single}</option>
                    ))}
                </Form.Select>
                <div className="state-choice col-12 col-md-6">
                    <div className="choice-container">
                        <ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}