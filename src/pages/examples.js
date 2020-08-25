import React from "react"
import Layout from "../components/layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

function examples({ data }) {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <div>
      <Layout>
        <h1>EXAMPLES</h1>
        <Header />
        <HeaderStatic />
        <h2> Author : {author} </h2>
      </Layout>
    </div>
  )
}

//get data from graphql === page query yani

export const data = graphql`
  query MyQuery {
    site(siteMetadata: { author: {} }) {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

export default examples
