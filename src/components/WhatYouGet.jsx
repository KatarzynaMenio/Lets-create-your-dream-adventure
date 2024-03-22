export default function WhatYouGet() {

    const elements = ["Plan wycieczki, adekwatny do podanych przez Ciebie kryteriów,", "Uwzględnienie ilości kilometrów przejechanych w ciągu poszczególnych dni, trasy podane w Google Maps,", "Uwzględnienie ilości kilometrów do przejścia w ciągu poszczególnych dni, trasy podane w Google Maps,", "Informacje na temat transportu publicznego danego miasta,", "Informacje o możliwości darmowego zwiedzania w danym mieście,", "Informacje na temat wybranych przez Ciebie atrakcji, na temat kosztu danej atrakcji oraz linki do kupna biletów/passów z autoryzowanych stron,", "Proponowane miejsca na nocleg tj. miejscowości niedaleko miejsc turystycznych,", "W razie wyboru opcji podróży lotniczej między Stanami -  polecenie tanich Amerykańskich Linii Lotniczych, oraz proponowane połączenia,", "Przydatne informacje, niezbędne gdy wybierasz się na Road Trip,", "Informacje o miejscach gdzie warto zjeść,", "Informacje jak i gdzie aplikować o wniosek Esta lub wizę turystyczną,", "Informacje jak przygotować się do swojej pierwszej podróży do USA (przydatne rzeczy do wzięcia ze sobą i tipy, które pozwolą usprawnić Twoją podróż),", "Informacje, jak przygotować się do kontroli granicznej już w USA oraz przykładowe pytania jakie możesz otrzymać na kontroli celnej + podstawowe odpowiedzi po angielsku,", "I wiele innych..."]

    return (
        <div className="what-you-get-section">
            <h2 className="item-header">Co otrzymasz?</h2>
            <ul>
                {elements.map((element, index) =>
                    <li key={index} className="item">{element}</li>)}
            </ul>
        </div>
    )
}