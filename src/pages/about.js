import { Link, graphql } from 'gatsby';
import React from 'react'
import { Seo } from '../components/seo'
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
    query CocktailQuery {
      file(name: { eq: "cocktail" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  `;


function AboutPage({ data }) {
    return (
        <>
            <Layout title='About this site' >
                <GatsbyImage
                    image={getImage(data.file)}
                    alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling out and around it"
                />
                <h1>About Page</h1>
                <Link to='/'>&larr; Home</Link>
            </Layout>
        </>
    );
}

export default AboutPage;