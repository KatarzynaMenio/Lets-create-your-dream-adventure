import Form from 'react-bootstrap/Form';

export default function CheckboxTransport() {

    const data = ["Wypożyczone auto", "Samolot", "Pociąg"];

    return (
        <div className="checkbox-style checkbox-transport">
            {data.map((single, index) => (
                <div key={index} className="mb-3">
                    <Form.Check className="checkbox"
                                type={"checkbox"}
                                id={single}
                                label={single}
                    />
                </div>
            ))}
        </div>
    )
}