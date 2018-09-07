import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { siteMetadata } from '../../../gatsby-config'

class Home extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'Krissy'
    return (
      <div>
        <Helmet
          title={`${title} | ${get(siteMetadata, 'title')}`}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:site',
              content: `@${get(siteMetadata, 'twitter')}`,
            },
            { property: 'og:title', content: title },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:description',
              content: get(siteMetadata, 'description'),
            },
            {
              property: 'og:url',
              content: `${get(siteMetadata, 'siteUrl')}/`,
            },
            {
              property: 'og:image',
              content: `${get(siteMetadata, 'siteUrl')}/img/profile.jpg`,
            },
          ]}
        />

        <section className="top-section">
          <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
            <h1>Jau greitai!</h1>
            </div>
          </div>
          </div>
        </section>


        {/* <section id="features">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                <p>All rights reserved © Copyright 2018</p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    )
  }
}

export default Home
