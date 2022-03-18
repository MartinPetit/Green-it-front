import React, {Component} from "react"
import * as JsSearch from "js-search"

class Search extends Component {
    state = {
        databaseList: this.props.data.allDatabaseCsv.nodes,
        search: [],
        searchResults: [],
        isLoading: true,
        isError: false,
        searchQuery: "",
    }

    componentDidMount() {
        this.rebuildIndex()
    }

    rebuildIndex = () => {
        const {databaseList} = this.state
        console.log("rebuildIndex")
        console.log(databaseList)
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

    render() {
        const {databaseList, searchResults, searchQuery} = this.state
        const queryResults = searchQuery === "" ? databaseList : searchResults
        return (
            <div>
                <div style={{margin: "0 auto"}}>
                    <form onSubmit={this.handleSubmit}>
                        <div style={{margin: "0 auto"}}>
                            <label htmlFor="Search" style={{paddingRight: "10px"}}>
                                Enter your search here
                            </label>
                            <input
                                id="Search"
                                value={searchQuery}
                                onChange={this.searchData}
                                placeholder="Enter your search here"
                                style={{margin: "0 auto", width: "400px"}}
                            />
                        </div>
                    </form>
                    <div>
                        Number of items:
                        {queryResults.length}
                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                borderRadius: "4px",
                                border: "1px solid #d3d3d3",
                            }}
                        >
                            <thead style={{border: "1px solid #808080"}}>
                            <tr>
                                <th
                                    style={{
                                        textAlign: "left",
                                        padding: "5px",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        borderBottom: "2px solid #d3d3d3",
                                        cursor: "pointer",
                                    }}
                                >
                                    Code Iris
                                </th>
                                <th
                                    style={{
                                        textAlign: "left",
                                        padding: "5px",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        borderBottom: "2px solid #d3d3d3",
                                        cursor: "pointer",
                                    }}
                                >
                                    Nom Com
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {queryResults.map((item, key) => {
                                return (
                                    <tr key={`row_${key}`}>
                                        <td
                                            style={{
                                                fontSize: "14px",
                                                border: "1px solid #d3d3d3",
                                            }}
                                        >
                                            {item.field2}
                                        </td>
                                        <td
                                            style={{
                                                fontSize: "14px",
                                                border: "1px solid #d3d3d3",
                                            }}
                                        >
                                            {item.field1}
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
