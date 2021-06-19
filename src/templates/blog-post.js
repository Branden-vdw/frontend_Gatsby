import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const HeroImage = getImage(data.markdownRemark.frontmatter.image)/** Add code to get image from query here **/
  const siteTitle = data.site.siteMetadata?.title || `Title`
 

  return (
    <Layout location={location} title={siteTitle} PostTitle={post.frontmatter.title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      /><div className="container-item-BlogPicture">
 
        <header>
        <GatsbyImage image={HeroImage} alt = "this is a picture" />
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </div>
      
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String
    
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            gatsbyImageData(
         layout: CONSTRAINED         
         placeholder: BLURRED
         formats: [AUTO, WEBP, AVIF]
       )
        }            
      }
    }
    }
    
  }
`
