import Form from "./Form.jsx";
import {Link} from "react-router-dom";

export default function FormSection() {
    return (
        <div>
            <h2 className="form-header" id="form-section">Formularz podróżnika</h2>
            <div className="paragraph-section">
                <p className="paragraph">&emsp;Bardzo serdecznie witam Cię na tej stronie. Aplikacja powstała, żeby pomóc Ci zaplanować swoją wymarzoną podróż do USA. Poniżej znajduje się formularz gdzie możesz określić swoje preferencje podróży. Wypełniając pola określ jaką część Stanów Zjednoczonych planujesz zobaczyć. Istnieje możliwość połączenia zwiedzania np. zachodnia oraz południowa część USA itp. Podaj duże miasta, oraz parki narodowe które chcesz odwiedzić. Podaj długość pobytu oraz twój planowany sposób poruszania się podczas podróży. Napisz kilka zdań, czego oczekujesz od planu wyjazdu. Jakie miejsca Cię najbardziej interesują lub jakie aktywności. Pamiętaj, że Stany Zjednoczone to kraj mniej więcej powierzchni Europy i odległości między miastami/atrakcjami mogą okazać się bardzo duże. </p>
                <p className="paragraph">&emsp;Z mojej strony postaram się zaplanować Twój American Dream najlepiej jak tylko potrafię, żeby była to Twoja niezapomniana przygoda życia. Polecam zaglądnąć do zakładki <Link to="/inspiration" >Inspiracje</Link>, gdzie znajdują się propozycje miejsc lub aktywności, które mogą Cię zaciekawić oraz podpowiedzieć jakie miejsca byłyby dla Ciebie najbardziej interesujące.</p>
            </div>
            <Form/>
        </div>)
}