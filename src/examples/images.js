import React from "react"
import "../components/layout.css"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-2.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-2.jpeg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    fluid: file(
      relativePath: { eq: "antelope-canyon-lower-canyon-arizona.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

function Images() {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} width="100%" />
        <br />
        <h2>~Content~</h2>
      </article>

      <article className="single-image">
        <h3>Fixed Image / Blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <br />
        <h2>~Content~</h2>
      </article>

      <article className="single-image">
        <h3>Fluid Image / SVG</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <br />
        <h2>~Content~</h2>
      </article>
    </section>
  )
}

export default Images
