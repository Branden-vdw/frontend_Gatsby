import * as React from "react"
import img from "gatsby-plugin-image" 
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements"

export const FeatureImage = ({ Fixed }) => {
    const data = useStaticQuery(graphql`
        query {
            imageSharp(fixed:{originalName: {eq: "gatsby-icon.png"}}){
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }    
    `)
    
    return (
        <FeatureImageWrapper>
            <img fixed={Fixed? Fixed: data.imageSharp.fixed} style = {{
                position: "absolute",
                left : 0 ,
                top : 0,
                width: "100%",
                height : "100%"
            }}
         />   
        </FeatureImageWrapper>
    )
}