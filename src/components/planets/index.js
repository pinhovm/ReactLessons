import React, {Fragment} from "react";
import Planet from "./planet";
const Planets = () =>{
    return(
        <Fragment>
            <h3>Planets List</h3>
            <Planet
            name="Earth"
            description = "Planeta Terra habitado por 7,9bilhoes de filhos dap uta"
            img_url = "https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg?auto_optimize=low"
            />
            <Planet
            name="Mars"
            description = "Tem Agua"
            img_url = "https://img.olhardigital.com.br/wp-content/uploads/2022/04/shutterstock_1041249343-1024x576.jpg"
            />
        </Fragment>
    )
}

export default Planets;