import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Pagination } from "../components/Pagination"



import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location ,pageContext}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.edges


  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle} PostTitle={"Blog"} >
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} PostTitle={"Blog"} >
      <SEO title="All posts" />
      
        <div className="grid-container">
        {posts.map(post => {
          const title = post.node.frontmatter.title || post.node.fields.slug
          const PostImage = getImage(post.node.frontmatter.image)

          return (
            <div className="column" key={post.node.fields.slug}>
                  
                  <div className="gallery-image-hover" ><a target="_blank "> <Link to ={post.node.fields.slug} itemProp="url">
                  <GatsbyImage image = {PostImage} alt = "is not working" />
                  </Link>
                </a></div>
               
                   
                  <p className="date" >{post.node.frontmatter.date}</p>
                   <header><h2 className="title">
                      {title}
                  </h2></header>

                <section>
                  <p className="description"dangerouslySetInnerHTML={{
                      __html: post.node.excerpt,
                    }}
                    itemProp="description"/>
                 
                </section>
                
                 
                 </div>
              
              
          )
        })}
                    <Pagination
            countPages={pageContext.numPages}
            currentPage={pageContext.page}
            root={`/`}
            
            />
        </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query AllPostsQuery  ( $skip:Int!, $limit:Int! ){
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(skip: $skip, limit: $limit, sort: { fields: [frontmatter___date], order: ASC }) {
     edges{
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          image {
              childImageSharp {
            gatsbyImageData(
            width:250
            height:200
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
              )
           }
          }
        }
      }
     }
    }
  }
`