import React, { Component } from 'react'

import './Blog.css'
 

 

const BlogDetail =(props)=> {


        return (



          
                <section>
                    <div className="news_banner">
                        <img src={props.blog.banner} alt="" />
                    </div>
                    <div className="news_container">
                        <h1 className="news_heading">
                            {props.blog.heading}
                        </h1>
                        <span className="news_sub_heading">
                            {props.blog.datePosted}
                        </span>
                        <div className="news_text">
                            {props.children}
                        </div>
                        {props.blog.imgText.map(item =>
                            <div className="news_text_img_right">
                                {item.imgLeft && <div className="news_img_half">
                                    <img src={item.img} alt="" />
                                </div>}
                                <div className="news_text_half">
                                    {item.heading && <>     <h4>{item.heading}</h4>
                                        <br /></>
                                    }                           <p>
                                        {item.des}
                                    </p>
                                </div>
                                {item.imgLeft || <div className="news_img_half">
                                    <img src={item.img} alt="" />
                                </div>}

                            </div>


                        )}

                      
                    </div>
                </section>
           
        )
    }

export default BlogDetail