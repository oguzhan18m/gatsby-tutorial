import React from "react"
import { graphql } from "gatsby"

const SectionalSofa = ({ data }) => {
  return (
    <div>
      <h2> {data.product.title} </h2>
      <h2> ${data.product.price} </h2>
    </div>
  )
}

export const query = graphql`
  {
    product: contentfulProduct(slug: { eq: "sectional-sofa" }) {
      id
      title
      price
      image {
        title
        fluid {
          src
        }
      }
    }
  }
`

export default SectionalSofa
