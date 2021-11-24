import React, { Component } from 'react'


// import Tabs from './services/Tabs'
// import Accessories from './services/Accessories'
// import Repair from './services/Repair'
// import Blog from './blog/Blog'
// import Activation from './services/Activation'
// import Testimonials from './testimonials/Testimonials'
// import OurWork from './OurWork'
// import JoinUs from './join/JoinUs'
// import Numbers from './Numbers'
// import Contact from './Contact'

import blog1_img from '../assets/blogs/blog1/blog1_1.jpeg'
import blog2_img from '../assets/blogs/blog2/img1.jpg'
import blog3_img from '../assets/blogs/blog2/img6.jpg'
import blog4_img from '../assets/blogs/blog4/img1.jpg'
import blog5_img from '../assets/blogs/blog5/img1.jpeg'
import blog6_img from '../assets/blogs/blog6/img1.jpeg'
import './Blog.css'
import BlogCard from './BlogCard'


const Blog= ()=> {
   
const blogs =[
    {
        slug: "ways-to-keep-your-smartphones-clean",
        title: "Ways to Keep Your Phone Clean",
        subTitle: "Your once-shiny, flashy smartphone has slowed down. It doesn't have the same feel as when you first took...",
        datePosted: "11/20/2021",
        img: blog1_img,
    },
    {
        slug: "apple-airpods-best-wireless-earbuds",
        title: "Best Wireless Earbuds.",
        subTitle: "Headphones are an essential part of our life, whether it's for a marathon run, a long train travel, or a day...",
        datePosted: "11/18/2021",
        img: blog2_img,
    },
    {
        slug: "airpods-vs-airpods-pro",
        title: "AirPods VS AirPods Pro",
        subTitle: "Do you have a hard time deciding between the Apple AirPods and the AirPods Pro...",
        datePosted: "11/16/2021",
        img: blog3_img,
    },
    {
        slug: "make-your-phone-work-faster",
        title: "Make Your Phone Work Faster",
        subTitle: "There was a time when phones were meant to make calls and send messages only but now ...",
        datePosted: "11/14/2021",
        img: blog4_img,
    },
    {
        slug: "iphone-11-heavy-duty-defender-case",
        title: "IPHONE 11 DEFENDER CASE",
        subTitle: "People never know when their pricey smartphones drop. Smartphone lovers can ...",
        datePosted: "11/14/2021",
        img: blog5_img,
    },
    {
        slug: "importance-of-mobile-phone-accessories",
        title: "Mobile Phone Accessories",
        subTitle: "We cannot deny that cellphones are essential devices in today's environment. In fact, the...",
        datePosted: "11/12/2021",
        img: blog6_img,
    },
]


        return (
         
                <section className='container'>
                    <div className="be-the-boss blogpage">
                        <div className="bgimg">
                            <div className="image-wrapper">
                                <div className="content">
                                    <h1>Blog</h1>
                                    <div className="BlogWrapper">

                                        {blogs.map(blog => <BlogCard blog={blog} />)}

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            
        )
    }


export default Blog
