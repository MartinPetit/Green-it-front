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
              field2
              field3
              field4
              field5
              field6
              field7
              field8
              field9
              field10
              field11
              field12
              field13
              field14
              field15
              field17
              field17
              field18
              field19
              field20
              field21
              field22
              field23
              field24
              field25
              field26
              field27
              field28
            }
          }
    }
  `)

    return (
        <Layout>
            <Search data={data}/>
        </Layout>
    )
}


export default IndexPage
