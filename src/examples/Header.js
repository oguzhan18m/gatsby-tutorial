//-------------1.METHOD-------------
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query OguzFirstQuery {
    site {
      info: siteMetadata {
        person {
          name
          age
        }
        author
        data
        description
        title
      }
    }
  }
`

const Header = () => {
  //destructring
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>title : {title}</h1>
      <h1>name : {name}</h1>
    </div>
  )
}

export default Header

//------------2.METHOD-------------
// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const Header = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site(siteMetadata: { author: {} }) {
//         siteMetadata {
//           author
//           data
//           description
//           title
//           person {
//             age
//             name
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div>
//       <h2>{data.site.siteMetadata.title}</h2>
//       <h2>{data.site.siteMetadata.person.name}</h2>
//     </div>
//   )
// }

// export default Header
