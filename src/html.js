import React from 'react'
import Helmet from 'react-helmet'

let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

export default class HTML extends React.Component {
  render() {
    const head = Helmet.rewind()
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {css}
          {/* <link
            href="/img/fav/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link href="/img/favicon.ico" rel="icon" type="image/x-icon" /> */}

          <link rel="apple-touch-icon" sizes="57x57" href="/img/fav/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/img/fav/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/img/fav/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/img/fav/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/img/fav/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/img/fav/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/img/fav/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/img/fav/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/fav/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/img/fav/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/fav/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/img/fav/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/fav/favicon-16x16.png" />
          <link rel="manifest" href="/img/fav/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/img/fav/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async="" />

          <meta name="google-site-verification" content="gSAhUk-bsQxUmFnsOpIfGkP23JHUgc3LtjqZGno855U" />
          <script type="text/javascript" src="https://unpkg.com/microlinkjs@latest/umd/microlink.min.js"></script>
          
          <script
              dangerouslySetInnerHTML={{
                __html: `
                var OneSignal = window.OneSignal || [];
                OneSignal.push(function() {
                  OneSignal.init({
                    appId: "e4c5a1d0-2455-4b93-b8ed-c4b4a1d52e7c",
                  });
                });
                    `,
              }}
            />

        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />

          {this.props.postBodyComponents}

          <script
              dangerouslySetInnerHTML={{
                __html: `
                document.addEventListener('DOMContentLoaded', function (event) {
                microlink('.mcl', { 
                  reverse: true
                })
                })
                    `,
              }}
            /> 
          

        </body>
      </html>
    )
  }
}
