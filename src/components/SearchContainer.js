import React, {Component} from "react"
import * as JsSearch from "js-search"
import {StaticImage} from "gatsby-plugin-image";

class Search extends Component {

    state = {
        databaseList: this.props.data.allDatabaseCsv.nodes,
        search: [],
        searchResults: [],
        isLoading: true,
        isError: false,
        searchQuery: "",
        selectedCity: null
    }


    componentDidMount() {
        this.rebuildIndex()
    }

    rebuildIndex = () => {
        const {databaseList} = this.state
        const dataToSearch = new JsSearch.Search("field2")

        dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()

        dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()

        dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("field2")

        dataToSearch.addIndex("field1") // sets the index attribute for the data
        dataToSearch.addIndex("field2") // sets the index attribute for the data

        dataToSearch.addDocuments(databaseList) // adds the data to be searched
        this.setState({search: dataToSearch, isLoading: false})
    }

    searchData = e => {
        const {search} = this.state
        const queryResult = search.search(e.target.value)
        this.setState({searchQuery: e.target.value, searchResults: queryResult})
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    setCity = (item) => {
        console.log('city')
        console.log(item)
        this.setState({
            selectedCity: item,
            searchQuery: item.field1,
            searchResults: [],
        })
    }

    render() {
        const {databaseList, searchResults, searchQuery, selectedCity} = this.state
        const queryResults = searchResults

        return (
            <div>
                <div className="container block">
                    <h2 className="center">Rechercher votre commune</h2>
                    <div>
                        <div style={{margin: "0 auto"}}>
                            <form onSubmit={this.handleSubmit}>

                                <div className="search">
                                    <input
                                        id="Search"
                                        value={searchQuery}
                                        onChange={this.searchData}
                                        placeholder="Entrez votre recherche"
                                        className="searchTerm"
                                    />

                                    <button type="submit" className="searchButton">
                                        <StaticImage
                                            src="../images/search-icon.svg"
                                            height={100}
                                            quality={95}
                                        />
                                    </button>
                                </div>

                            </form>
                            {searchResults.length > 0 &&
                                <div id="table-search" className="box-light-anomalies">
                                    {/*Nombre de résultats : {queryResults.length}*/}
                                    <table
                                        style={{
                                            width: "100%",
                                            border: "none",
                                        }}
                                    >
                                        <thead style={{border: "1px solid #808080"}}>
                                        <tr>
                                            <th
                                                style={{
                                                    padding: "5px 0 5px 5px",
                                                }}
                                            >
                                                Code Iris
                                            </th>
                                            <th
                                                style={{
                                                    padding: "5px 5px 5px 0",
                                                }}
                                            >
                                                Commune
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {queryResults.map((item, key) => {
                                            return (
                                                <tr key={`row_${key}`}>
                                                    <td
                                                        style={{
                                                            border: "none",
                                                        }}
                                                    >
                                                        {item.field2}
                                                    </td>
                                                    <td className="btn" onClick={() => this.setCity(item)}
                                                    >
                                                        {item.field1}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            }

                        </div>
                    </div>
                </div>

                {selectedCity &&
                    <div className="container">
                        <div className="box-light-anomalies help-box">
                            <p className="center">Un indice élevé indique une fragilité numérique plus grande.
                                Le calcul des indicateurs étant relatif par rapport aux autres communes, la moyenne de
                                chaque
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
                                            <span className="box-title">{selectedCity.field22}</span>
                                            <span className="box-value">{Math.round(selectedCity.field23)}</span>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="box-light-anomalies box-light-green-middle">
                                            <span className="box-title">{selectedCity.field1}</span>
                                            <span className="box-value">{Math.round(selectedCity.field6)}</span>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="box-light-anomalies box-light-green-light">
                                            <span className="box-title">{selectedCity.field14}</span>
                                            <span className="box-value">{Math.round(selectedCity.field15)}</span>
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
                            <p className="center description-container block-para">Identifier des territoires mal
                                couverts
                                par
                                une offre de service d'information ou des populations qui auront des difficultés à
                                comprendre
                                l'information.</p>
                            <div className="grid-container block reverse-row">
                                <div className="grid-content">
                                    <div className="grid-item">
                                        <div className="box-light-anomalies box-light-green-dark">
                                            <span className="box-title">{selectedCity.field22}</span>
                                            <span className="box-value">{Math.round(selectedCity.field25)}</span>
                                        </div>
                                        <div className="box-light-anomalies box-light-green-middle">
                                            <span className="box-title">{selectedCity.field1}</span>
                                            <span className="box-value">{Math.round(selectedCity.field8)}</span>
                                        </div>
                                        <div className="box-light-anomalies box-light-green-light">
                                            <span className="box-title">{selectedCity.field14}</span>
                                            <span className="box-value">{Math.round(selectedCity.field17)}</span>
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
                            <p className="center description-container block-para">Capacité d'usage des interfaces
                                numériques :
                                Identifier des populations
                                parmi lesquelles s'observe une fréquence d'illectronisme ou difficulté à utiliser
                                internet.</p>
                            <div className="grid-container block">
                                <div className="grid-content">
                                    <div className="grid-item">
                                        <div className="box-light-anomalies box-light-green-dark">
                                            <span className="box-title">{selectedCity.field22}</span>
                                            <span className="box-value">{Math.round(selectedCity.field24)}</span>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="box-light-anomalies box-light-green-middle">
                                            <span className="box-title">{selectedCity.field1}</span>
                                            <span className="box-value">{Math.round(selectedCity.field7)}</span>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="box-light-anomalies box-light-green-light">
                                            <span className="box-title">{selectedCity.field14}</span>
                                            <span className="box-value">{Math.round(selectedCity.field16)}</span>
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
                            <p className="center description-container block-para">Identifier des populations parmi
                                lesquelles
                                s'observent des difficultés à accomplir des procédures administratives</p>
                            <div className="grid-container block reverse-row">
                                <div className="grid-content">
                                    <div className="grid-item">
                                        <div className="box-light-anomalies box-light-green-dark">
                                            <span className="box-title">{selectedCity.field22}</span>
                                            <span className="box-value">{Math.round(selectedCity.field27)}</span>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="box-light-anomalies box-light-green-middle">
                                            <span className="box-title">{selectedCity.field1}</span>
                                            <span className="box-value">{Math.round(selectedCity.field10)}</span>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="box-light-anomalies box-light-green-light">
                                            <span className="box-title">{selectedCity.field14}</span>
                                            <span className="box-value">{Math.round(selectedCity.field19)}</span>
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
                            <p className="center description-container block-para">Identifier des territoires mal
                                couverts par une offre de service d'information ou des populations qui auront des
                                difficultés à comprendre
                                l'information.</p>
                            <div className="grid-container block">
                                <div className="grid-content">
                                    <div className="grid-item">
                                        <div className="box-light-anomalies box-light-green-dark">
                                            <span className="box-title">{selectedCity.field22}</span>
                                            <span className="box-value">{Math.round(selectedCity.field26)}</span>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="box-light-anomalies box-light-green-middle">
                                            <span className="box-title">{selectedCity.field1}</span>
                                            <span className="box-value">{Math.round(selectedCity.field9)}</span>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="box-light-anomalies box-light-green-light">
                                            <span className="box-title">{selectedCity.field14}</span>
                                            <span className="box-value">{Math.round(selectedCity.field18)}</span>
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
                }


            </div>
        )
    }
}

export default Search
