import about_foto from '../assets/About/about_pic.jpg'

export default function About() {
    return (
        <div className="container about-section">
            <h2 className="about-header">O mnie</h2>
            <div className="about-intro">
                <img src={about_foto} alt="my_photo"/>
                <span>
                  <p>&emsp;Cześć! Z tej strony Kasia. Jest mi bardzo miło, że mogę Cię gościć na tej stronie. Powstała ona z miłości do poróży jaką odkryłam planując swoje wyjazdy. Chciałabym się z Tobą podzielić projektem, który stworzyłam aby ułatwić Ci zaplanowanie swojej wymarzonej podróży do USA. Planowanie wyjazdu na inny kontynent to spore wyzwanie i sama wiem ile rzeczy trzeba sprawdzić i ogarnąć aby taki plan miał swoje powodzenie. Swoją pierwszą podróż do USA, która trwała prawie 2 miesiące planowałam rok. W tym czasie pozyskałam wiele informacji na temat podróżowania, tego gdzie i co warto zobaczyć, jak funkcjonuje życie w Stanach Zjednoczonych, a teraz dzięki tej wiedzy chciałabym podzielić się nią z Tobą. Planowanie podróży to moja pasja, która sprawia mi wiele satysfakcji i przyjemności, a dodatkowo w jego trakcie mogę powrócić do tych pięknych miejsc, które udało mi się zobaczyć na własne oczy. Prywatnie jestem inżynierem instalatorem oraz mam najcudowniejszego narzeczonego na świecie, który podziela moją pasję do podróżowania. Dodatkowo jestem właścicielką dwóch „Psotnych Klusek” kotów, które lubią psocić i siedzieć na kolanach w trakcie planowania wycieczek.</p>
                </span>
            </div>
        </div>)
}