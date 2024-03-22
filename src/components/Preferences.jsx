import Form from 'react-bootstrap/Form';

export default function Preferences() {
    return (
        <div>
            <p className="paragraph-form-style">Napisz kilka słów o swoich preferencjach podróżowania, na jakie miejsca
                chcesz poświęcić najwięcj czasu. Czy to będą wielkie miasta czy parki narodowe? A może lubisz czuć
                dreszczyk emocji i uprawiać parasailing na Florydzie? Wszystko zależy od Ciebie i Twojej wyobraźni.
            </p>
            <Form.Group className="mb-3 textarea-style">
                <Form.Control as="textarea" rows={6}/>
            </Form.Group>
        </div>
    )
}