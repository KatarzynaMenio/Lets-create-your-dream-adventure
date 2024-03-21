import Form from 'react-bootstrap/Form';
export default function CheckboxArea () {

    const data = [
        {name: "MIDWEST", description: "Środkowy zachód/Midwest"},
        {name: "SOUTH", description: "Południe/South"},
        {name: "WEST", description: "Zachód/West"},
        {name: "NORTHEAST", description: "Północny wschód/Northeast"},
    ]
    return (
            <div className="checkbox-style">
                {data.map((single) => (
                    <div key={single.name} className="mb-3">
                        <Form.Check className="checkbox"
                            type={"checkbox"}
                            id={single.name}
                            label={single.description}
                        />
                    </div>
                ))}
            </div>
    )
}