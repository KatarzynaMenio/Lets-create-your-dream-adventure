import Form from 'react-bootstrap/Form';

export default function CheckboxArea({
                                         regionList,
                                         setCheckboxRegionList
                                     }) {

    const handleChange = (e) => {
        // Nazwa kliknietego regionu
        const regionName = e.target.id;
        console.log(regionName)
        // Flaga czy zostal zaznaczoy czy nie
        const checked = e.target.checked;
        console.log(checked)
        // Jezeli zostalzaznaczony to dodaj go do listy za pomoca setCheckboxRegionList
        // Jezeli zostal odznaczony usun go z listy za pomoca setCheckboxRegionList
        if (checked) {
            setCheckboxRegionList((prevState) => [...prevState, regionName])
        } else if (!checked){
            // setCheckboxRegionList((prevState) => prevState.filter(item => item !== regionName))
            setCheckboxRegionList((prevState) =>  {
                const copyState = [...prevState];
                const index = copyState.indexOf(regionName);
                copyState.splice(index, 1);
                return copyState;
            })
        }
    }

    return (
        <div className="checkbox-style">
            {regionList.map((single) => (
                <div key={single.NAME} className="mb-3">
                    <Form.Check className="checkbox"
                                type={"checkbox"}
                                id={single.NAME}
                                label={single.DESCRIPTION}
                                onChange={handleChange}
                    />
                </div>
            ))}
        </div>
    )
}