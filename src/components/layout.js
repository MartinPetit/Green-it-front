import * as React from "react"
import background from "../images/image.webp";

const Layout = ({children}) => {
    return (
        <>
            <div className="height-adaptative block" style={{backgroundImage: `url(${background}`}}>
                <div className="container-large" style={{height: "100%"}}>
                    <div className="ext-box">
                        <div className="int-box">
                            <h1 className="center white-text">Indice national de Fragilité numérique</h1>
                            <p className="center white-text">
                                L'indice de fragilité numérique, par sa représentation graphique, révèle les zones
                                d'exclusion numérique sur un territoire donné. Cet outil permet, que vous soyez une
                                commune, un département ou une région de comparer votre indice de fragilité numérique
                                avec les autres territoires.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </>
    )
}

export default Layout
