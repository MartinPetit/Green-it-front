import * as React from "react"
import {Link, useStaticQuery, graphql} from 'gatsby'
import {StaticImage} from "gatsby-plugin-image"
import "../style/style.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
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
            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{marginBottom: `1.45rem`}}
            />
            <div>
                <h1 style={{marginTop: `3em`, textAlign: `center`}}>
                    Search data using JS Search
                </h1>
                <div>
                    <Search data={data}/>
                </div>
            </div>
            <p>
                <Link to="/page-2/">Go to page 2</Link> <br/>
                <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br/>
                <Link to="/using-ssr">Go to "Using SSR"</Link> <br/>
                <Link to="/using-dsg">Go to "Using DSG"</Link>
            </p>
        </Layout>
    )
}


export default IndexPage
