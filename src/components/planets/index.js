import React, { Fragment } from "react";
import Planet from "./planet";

const clickOnPlanet = (name) => {
    console.log(`Clicked on planet ${name}`);
}

const Planets = () => {
    return (
        <Fragment>
            <h3>Planets List</h3>
            <hr></hr>
            <Planet
                title="Earth"
                img_url="https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg?auto_optimize=low"
                description="Planeta Terra habitado por 7,9bilhoes de humanos"
                link="https://pt.wikipedia.org/wiki/Terra"
                clickOnPlanet={clickOnPlanet}
                gray={true}
            />
            <Planet
                title_with_underline="Mars"
                img_url="https://img.olhardigital.com.br/wp-content/uploads/2022/04/shutterstock_1041249343-1024x576.jpg"
                description="Tem Agua"
                link="https://pt.wikipedia.org/wiki/Marte"
                clickOnPlanet={clickOnPlanet}
            />
        </Fragment>
    )
}

export default Planets;