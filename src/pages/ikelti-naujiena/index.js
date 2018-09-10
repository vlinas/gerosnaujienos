import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { siteMetadata } from '../../../gatsby-config'

class Home extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'Įkelti Naujieną'
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

        <section className="top-section form-section">
          <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <h1 className="top-title">Įkelti Naujieną</h1>
              <div className="naujienos-forma">
                <form name="naujiena" method="post" data-netlify="true" action="/">
                  <div class="form-group">
                    <label for="formGroupExampleInput">Vardas</label>
                    <input type="text" class="form-control" name="name" placeholder="Vardenis"></input>
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">El. Paštas</label>
                    <input type="email" class="form-control" name="email" placeholder="vardenis@gmail.com"></input>
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Nuoroda į straipsnį</label>
                    <input type="text" class="form-control" name="url" placeholder="https://portalas.lt/..."></input>
                    <input type="hidden" name="form-name" value="naujiena" />
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Pranešimas</label>
                    <textarea class="form-control" rows="3" name="message" placeholder="Jūsų žinutė mums"></textarea>
                  </div>
                  <div class="form-group">
                    <button type="submit" className="btn btn-primary formos-btn">Siųsti naujieną</button>
                  </div>
                </form>
              </div>
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
