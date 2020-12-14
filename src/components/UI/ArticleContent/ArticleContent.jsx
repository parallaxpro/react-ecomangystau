import React, { Component } from 'react'
import Image                from "react-modal-image";
import classes              from './ArticleContent.module.sass'

class ArticleContent extends Component {
    render() {
        // console.log(this.props.article);
        return(
            <div className={classes.body}>

                { this.props.article.map((block, index) => {
                    
                    if (block.type === 'paragraph') {
                        return <div className={'col-md-10 m-auto'} key={index}><p dangerouslySetInnerHTML={{__html: block.data.text}}></p></div>
                    }
                    
                    if (block.type === 'list') {
                        var tag;
                        if (block.data.style === 'ordered') {tag = `ol`
                        } else {tag = `ul`}

                        return (
                            <div className={'col-md-10 m-auto'} key={index}>
                                <tag>
                                    { block.data.items.map((item, index) => {
                                        return <li dangerouslySetInnerHTML={{__html: item}} key={index}></li> 
                                    }) }
                                </tag>
                            </div>
                        )
                    }

                    if (block.type === 'image') {

                        var Class;

                        if (block.data.stretched) Class = 'col-md-12'
                        else                      Class = 'col-md-10 m-auto'

                        return (
                            <div className={ Class }>
                                <figure className={classes.figure}>
                                    <p className={classes.image}><Image small={ '//storage.ecomangystau.kz' + block.data.file.url } large={ '//storage.ecomangystau.kz' + block.data.file.url } alt={ block.data.caption } /></p>
                                    <p className={classes.image_caption} dangerouslySetInnerHTML={{__html: block.data.caption}}></p>
                                </figure>
                            </div>
                        )
                    }

                    if (block.type === 'header') {
                        const Tag = `h${block.data.level}`
                        return (
                            <div className={'col-md-10 m-auto'}>
                                <Tag dangerouslySetInnerHTML={{__html: block.data.text}} className={classes.heading}></Tag>
                            </div>
                        )
                    }

                }) }
            </div>
        )
    }
}

export default ArticleContent