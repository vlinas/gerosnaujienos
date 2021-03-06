import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import SitePost from '../../components/SitePost'

class circuits extends React.Component {
  render() {
    const pageLinks = []
    const site = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.remark.posts')


    const sortedPosts = sortBy(posts, post =>
      get(post, 'post.frontmatter.date')
    ).reverse()

    sortedPosts.forEach((data, i) => {
      const layout = get(data, 'post.frontmatter.layout')
      const path = get(data, 'post.path')
      if (layout === 'post' && path !== '/404/') {
        pageLinks.push(
          <LazyLoad height={500} offset={500} once={true} key={i}>
            <SitePost data={data.post} site={site} isIndex={true} key={i} />
          </LazyLoad>
        )
      }
    })

    return (
      <div>
        <Helmet
          title={get(site, 'title')}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: `@${get(site, 'twitter')}` },
            { property: 'og:title', content: get(site, 'title') },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: get(site, 'description') },
            { property: 'og:url', content: get(site, 'url') },
            {
              property: 'og:image',
              content: `${get(site, 'url')}/img/profile.jpg`,
            },
          ]}
        />
        <section className="text-center form-section">
          <div className="container">
            <div className="col-lg-8 about-col">
            <h1 className="top-title">Apie Projektą</h1>
            <p className="margin-top about-text">Šis internetinis puslapis buvo sukurtas norint atkreipti žmonių dėmesį tik į geras ir teigiamas dienos naujienas. Jokių kriminalų, vagysčių ar kitokių nereikšmingų nesamonių, kurias skaitytojams ir žiūrovams pateikia Lietuviški naujienų portalai bei televizija.</p>
            <p className="about-text"><strong>Puslapis atnaujinamas kiekvieną dieną.</strong></p>

            <p className="about-text">Susisiekite el.paštu <a href="mailto:info@gerosnaujienos.lt" className="link"> info@gerosnaujienos.lt</a></p>

            </div>
            
          </div>
        </section>

        {pageLinks}
      </div>


    )
  }
}

export default circuits
