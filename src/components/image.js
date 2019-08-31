import { useStaticQuery, graphql } from "gatsby"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  return useStaticQuery(graphql`
    query {
      square: file(relativePath: { eq: "img_square.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headerMainPage: file(relativePath: { eq: "header_index.png" }) {
        childImageSharp {
          fluid(maxWidth: 2140) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headerCatalogPage: file(relativePath: { eq: "header-catalog.png" }) {
        childImageSharp {
          fluid(maxWidth: 2140) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bottomCatalogPage: file(relativePath: { eq: "bottom-catalog.png" }) {
        childImageSharp {
          fluid(maxWidth: 2140) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
}
export default Image
