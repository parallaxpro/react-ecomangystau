import React, { Component } from 'react'
import { Helmet } from "react-helmet";

class SEO extends Component {
    render() {
        return(
            <Helmet>
                <title>{ this.props.data.title }</title>
                <meta name="fragment" content="!" />
                <meta name="author"                 content={ this.props.data.author } />
                <meta name="keywords"               content={ this.props.data.tags } />
                <meta property="og:type"            content="website" />
                <meta property="og:url"             content={ window.location.href } />
                <meta property="og:title"           content={ this.props.data.title } />
                <meta property="og:description"     content={ this.props.data.desc } />

                <meta property="og:image"           content={ this.props.data.image } />
                <meta property="og:image:width"     content="1200" />
                <meta property="og:image:height"    content="630" />
            </Helmet>
        )
    }
}

export default SEO