import * as React from "react"
import {useStaticQuery, graphql} from 'gatsby'
import {StaticImage} from "gatsby-plugin-image"
import "../style/style.css"

import Layout from "../components/layout"
import Search from "../components/SearchContainer";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allDatabaseCsv {
            nodes {
              field1
              field10
              field11
              field12
              field2
              field3
              field4
              field5
              field6
              field7
              field9
              field8
            }
          }
    }
  `)

    return (
        <Layout>

            <div className="container block">
                <h2 className="center">Rechercher votre commune</h2>
                <div>
                    <Search data={data}/>
                </div>
            </div>

            <div className="container">
                <div className="box-light-anomalies help-box">
                    <p className="center">Un indice élevé indique une fragilité numérique plus grande.
                        Le calcul des indicateurs étant relatif par rapport aux autres communes, la moyenne de chaque
                        indicateur est de 100.</p>
                    <StaticImage
                        src="../images/light.svg"
                        width={100}
                        quality={95}
                    />
                </div>
                <div>
                    <h2 className="center uppercase spacer-container">Score global
                        <span style={{
                            display: 'block',
                            height: '6px',
                            backgroundColor: '#17D3BA',
                            width: '165px',
                            position: 'relative',
                            left: '47%',
                            marginTop: '5px',
                            borderRadius: '5px'
                        }}/>
                    </h2>

                    <div className="grid-container">
                        <div className="grid-content">
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-dark">
                                    <span className="box-title">Valeur 1</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-middle">
                                    <span className="box-title">Valeur 2</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-light">
                                    <span className="box-title">Valeur 3</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-width">
                            <StaticImage
                                src="../images/score.svg"
                                quality={95}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="center uppercase spacer-container">Accès à l'information
                        <span style={{
                            display: 'block',
                            height: '6px',
                            backgroundColor: '#17D3BA',
                            width: '165px',
                            position: 'relative',
                            left: '51%',
                            marginTop: '5px',
                            borderRadius: '5px'
                        }}/>
                    </h2>
                    <p className="center description-container block-para">Identifier des territoires mal couverts par
                        une offre de service d'information ou des populations qui auront des difficultés à comprendre
                        l'information.</p>
                    <div className="grid-container block reverse-row">
                        <div className="grid-content">
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-dark">
                                    <span className="box-title">Valeur 1</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-middle">
                                    <span className="box-title">Valeur 2</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-light">
                                    <span className="box-title">Valeur 3</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-width">
                            <StaticImage
                                src="../images/read.svg"
                                quality={95}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="center uppercase spacer-container">Accès aux interfaces numériques
                        <span style={{
                            display: 'block',
                            height: '6px',
                            backgroundColor: '#17D3BA',
                            width: '300px',
                            position: 'relative',
                            left: '48%',
                            marginTop: '5px',
                            borderRadius: '5px'
                        }}/>
                    </h2>
                    <p className="center description-container block-para">Capacité d'usage des interfaces numériques :
                        Identifier des populations
                        parmi lesquelles s'observe une fréquence d'illectronisme ou difficulté à utiliser
                        internet.</p>
                    <div className="grid-container block">
                        <div className="grid-content">
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-dark">
                                    <span className="box-title">Valeur 1</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-middle">
                                    <span className="box-title">Valeur 2</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-light">
                                    <span className="box-title">Valeur 3</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-width">
                            <StaticImage
                                src="../images/computer.svg"
                                quality={95}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="center uppercase spacer-container">Compétences numériques
                        <span
                            style={{
                                display: 'block',
                                height: '6px',
                                backgroundColor: '#17D3BA',
                                width: '200px',
                                position: 'relative',
                                left: '51%',
                                marginTop: '5px',
                                borderRadius: '5px'
                            }}/>
                    </h2>
                    <p className="center description-container block-para">Identifier des populations parmi lesquelles
                        s'observent des difficultés à accomplir des procédures administratives</p>
                    <div className="grid-container block reverse-row">
                        <div className="grid-content">
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-dark">
                                    <span className="box-title">Valeur 1</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-middle">
                                    <span className="box-title">Valeur 2</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-light">
                                    <span className="box-title">Valeur 3</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-width">
                            <StaticImage
                                src="../images/numerics.svg"
                                quality={95}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="center uppercase spacer-container">Compétences administratives
                        <span
                            style={{
                                display: 'block',
                                height: '6px',
                                backgroundColor: '#17D3BA',
                                width: '220px',
                                position: 'relative',
                                left: '52%',
                                marginTop: '5px',
                                borderRadius: '5px'
                            }}/>
                    </h2>
                    <p className="center description-container block-para">Identifier des territoires mal couverts par
                        une offre de
                        service d'information ou des populations qui auront des difficultés à comprendre
                        l'information.</p>
                    <div className="grid-container block">
                        <div className="grid-content">
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-dark">
                                    <span className="box-title">Valeur 1</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-middle">
                                    <span className="box-title">Valeur 2</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="box-light-anomalies box-light-green-light">
                                    <span className="box-title">Valeur 3</span>
                                    <span className="box-value">10</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-width">
                            <StaticImage
                                src="../images/photocopie.svg"
                                quality={95}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </Layout>
    )
}


export default IndexPage
