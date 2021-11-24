import React, { Component } from 'react'
import news_banner from '../assets/blogs/blog2/banner.webp'
import './Blog.css'
import img1 from '../assets/blogs/blog2/img1.jpg'
import img2 from '../assets/blogs/blog2/img2.jpg'
import img3 from '../assets/blogs/blog2/img3.png'
import img4 from '../assets/blogs/blog2/img4.jpg'
import img5 from '../assets/blogs/blog2/img5.jpg'
import img6 from '../assets/blogs/blog2/img6.jpg'

 
import BlogDetail from './BlogDetail'

const blog ={
    datePosted:'16 November 2021',
    heading:' AirPods VS AirPods Pro',
    banner: news_banner,
    imgText:[
        {
            heading:'Difference # 1: Noise Cancellation:',
           des:"The first distinction is that the AirPods Pro offers noise canceling. The most obvious distinction is that the AirPods Pro uses active noise cancellation rather than passive noise reduction from the eartips. The level of noise cancellation on the Pro can be customized, and it can even be set to Transparency Mode, which allows you to hear what's going on around you without having to remove your headphones. There are virtually no disadvantages to having it. Unfortunately, the ordinary AirPods do not provide any level of active noise cancellation and merely provide a noise reduction effect due to their tight seal.",
            img:img1
        },
        {
            heading:'Difference #2: Water Resistant:',
           des:"The second distinction is that the AirPods Pro is water-resistant. If you're going to the gym with your Apple earphones, you should probably get the more expensive AirPods Pro, which is water-resistant IPX4 i.e. sweat- and water-resistant as opposed to the non-water-resistant AirPods.That doesn't imply you should dive into the water with your new high-end AirPods Pro, if they fall out or stay submerged for too long, they'll be wrecked. If you want to take something into the pool with you, you'll need a pair of swimming headphones.",
            img:img2,
            imgLeft:true
        },
        {
            heading:'Difference #3: Custom Airtips:',
           des:"In terms of finding the right fit, the AirPods Pro will be more customizable than the one-size-fits-all Apple AirPods: Inside the box are a variety of eartips, and if you're unsure which to use, Apple will even help you find the correct fit with a quick audio test and can tailor the sound to suit your ear structure.Because the AirPods' eartips are plastic, you're stuck with them – though some people find them more comfortable than silicone eartips, which must be pushed into your ear.",
            img:img3
        },
        {
            heading:'Difference #4: Adaptive EQ:',
           des:"Internal microphones that can measure volume are also housed within the earbuds. These are critical for effective noise cancellation, but they can also be used for features like Adaptive EQ, which optimizes sound quality for your physiology.What is the mechanism behind it? According to Apple, the AirPods Pro uses a unique high dynamic range amplifier that 'produces pure, extraordinarily clear sound while simultaneously prolonging battery life,' and 'automatically tunes the low- and mid-frequencies.' Nifty! ",
            img:img4,
            imgLeft:true
        },
        {
            heading:'Difference #5: Shorter and Stouter: ',
           des:"Okay, that's more of an aesthetic difference than a functional one, but the AirPods Pro is a bit shorter and sturdier than regular AirPods. The iconic ear tips of the earbuds don't reach that far into the Pro's ears, but they cover the ear more thanks to their larger housing.Both have a somewhat futuristic look that some find unappealing and some love. Either way, both models are unmistakable 'Apple.'",
            img:img5
        },
        {
            heading:'Difference #6: Pressure Valve:',
           des:"If you've ever been uncomfortable wearing in-ear headphones, it's because a small, bothersome, but not life-threatening pressure builds up in your ear. To counter this, the AirPods Pro uses a very small pressure valve to reduce pressure in the ear, a feature that Apple replaced with the Powerbeats Pro. This is a minor benefit of the Pro series of headphones, but worth considering.Both the AirPods and AirPods Pro feature faultless wireless performance and lightning-fast pairing thanks to Apple's excellent H1 processor and Bluetooth 5.0.We haven't had any dropouts with either, and we find Apple's automated pairing (insert an earphone, and it connects to your phone quickly) to be reliable and quick.",
            img:img6,
            imgLeft:true
        },
        {
            heading:'Similarities:',
           des:"So far we've focused on the differences, but the two true wireless earbuds also have a lot in common. On the one hand, they are both true wireless earbuds with similarly sized cases and a battery life of around 3.5 hours per charge and more than 24 hours with the battery case. The T also has a fairly similar sound quality with only minor differences in stage/sound clarity. Both use the new Apple H1 wireless chip, which enables the 'Hey Siri' hands-free function and works seamlessly with iOS.",
            img:img1
        },
        {
            heading:'Which one should you buy?',
           des:"If there is outside noise at work or on the go, need gym waterproofing, or are sensitive to pressure build-up in your ears, the Apple AirPods Pro is probably worth paying a bit more. But if your Main concerns are sound quality or battery life, you can save yourself a ton of money by using basic AirPods. ",
            img:img3,
            imgLeft:true
        },
        {
            heading:'Final verdict:',
           des:"First, you should know that both pairs of AirPods offer a great user experience, especially if you are already an iPhone user. You must also take into account the large price difference. If your budget allows, we would go for the AirPods Pro, but if you can expand to the standard AirPods (and are satisfied with the fit), they will still serve you amazingly well.",
            img:img4,
        },
      

    ]
}

const FirstBlog = () => {




    return (



        <section>
            <BlogDetail blog={blog}>

                <p>
                    Do you have a hard time deciding between the Apple AirPods and the AirPods Pro? We understand why you're drawn to Apple headphones, but there are a few things you should be aware of. Although the wireless earbuds appear to be similar, there are significant variances between these two versions. The original Apple AirPods are instantly identifiable and incredibly popular, but the AirPods Pro is the conclusion of years of development on true wireless technology, which means they're a higher-end version of the Apple earbuds and they come at a premium price.

                </p>
                <br />
                <p>
                    The AirPods Pro is not only extremely simple to set up, but they are also significantly more comfortable and come with several intriguing features, like adaptive EQ, active noise cancellation, and support for Spatial Audio. That's how; they made our list of the best true wireless earbuds of 2021.

                </p>
                <br />
                <p>
                    The choice may vary people to person. However, to assist you in determining which AirPods model is best for you, we've broken out the important distinctions below.
                </p>
            </BlogDetail>



        </section>

    )
}

export default FirstBlog
