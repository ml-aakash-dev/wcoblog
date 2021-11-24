import React from 'react'
import { Link } from 'react-router-dom'



const BlogCard = ({blog}) => {
    return (
        <Link to={"/blog/" + blog.slug }>
        <div className="BlogCard">
            <div className="BlogImage">
                <img src={blog.img} alt="" />
            </div>
            <div className="BlogContent">
                <h3 className="BlotTitle">{blog.title}</h3>
                <p className="BlogDes">{blog.subTitle}</p>
                <div className="BlogPostingDetails">
                    <span className="DatePosted">Date Posted: <strong>{blog.datePosted}</strong></span>
                    <span className="AuthourPosted">Posted By: <strong>Tensor Solutions</strong></span>
                </div>
            </div>
        </div>
    </Link>
 
    )
}

export default BlogCard
