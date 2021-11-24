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

const FirstBlog = () => {

    const blog = {
        datePosted: '18 November 2021',
        heading: ' Apple Airpods, Best Wireless Earbuds.',
        banner: news_banner,
        imgText: [
            {
                heading: 'What devices are AirPods compatible with?',
               des:"AirPods are compatible with all iOS 10 and later iPhone, iPad, and iPod touch devices. This covers the iPhone 5 and newer, iPad mini 2 and newer, fourth-generation iPad and newer, iPad Air models, all iPad Pro models, and the iPod touch 6th generation. All Apple Watch devices running watchOS 3 or later, including the original Apple Watch and future Apple Watch releases, are compatible with AirPods. All Mac models that run macOS Sierra or later, including the late 2009 or newer MacBook, the mid-2010 or newer MacBook Pro, the late 2010 or newer MacBook Air, the mid-2010 or newer Mac mini, the late-2009 or newer iMac, or the mid-2010 or newer Mac Pro, are compatible with AirPods.",
                img: img1
            },
            {
                heading: 'Non Apple Devices:',
                des:" The AirPods can also be paired with non-Apple devices via the small and flush button on the back of the charging case. Put the wireless earphones back in the case and keep the lid open to connect them to a device you haven't paired them with before. Then open the lid and press down on the case's button until the LED begins to flicker white. The AirPods should then show up in the Bluetooth settings of the device you're trying to pair them with. If the AirPods are associated with a non-Apple device, functions like automatic disconnection after removing the headphones or double-tapping will not work.",
                 img: img2,
                imgLeft: true
            },
            {
                heading: 'Battery and Charger:',
               des:"When it comes to the battery life of the AirPods, you'll be surprised to learn that it can last up to 4.5 hours on a single charge. You can listen to music without having to charge the device. If you turn off the transparency and active cancellation mode, you can use it for up to 5 hours. Furthermore, it provides 11 hours of conversation time. Airpods pro, on the other hand, can last up to 24 hours with numerous additional charges in the case. Because the Airpods case supports wireless charging, you can always go with the flow. The AirPods case provides wireless charging, allowing you to stay connected while on the go. Furthermore, Qi-certified chargers are compatible with AirPods pro.",
                img: img3
            },
            {
                heading: 'Water/Sweat Resistant:',
                des:"Water and sweat resistance is provided by Applecare AirPods, but you cannot charge wet AirPods using a wireless charging case because the cover does not provide resistance. While sweat and water resistance is not permanent, it does vary and frequently decreases with normal use.",
                 img: img4,
                imgLeft: true
            },
            {
                heading: 'Transperancy: ',
               des:"Transparency mode is also available on the Airpods pro. The term 'transparency mode' refers to the ability to listen only to what you want while ignoring the background noise. You can enter transparency mode by pressing and holding the sensor. This will allow you to engage with the world by allowing outside noises in. ",
                img: img5
            },
            {
                heading: 'Customization: ',
                des:"Soft silicone tips come in three sizes: small, medium, and big. They provide a secure fit. These various tapered silicone tips deliver equal pressure to both sides of the AirPods and may be customized to fit your needs.",
                 img: img6,
                imgLeft: true
            },
            {
                heading: 'Conclusion: ',
                des:"It is one of the most popular wireless earphones. Their soft silicone tips securely fit in your ear canal. Additionally, if properly cared for, they can be used for a long time. Customer evaluations claim that AirPods pro helped them a lot and that they had a great experience with it. AppleCare AirPods are the highest-quality wireless earbuds available. They are 100 percent genuine and original.",
                 img: img1,
            },
            


        ]
    }
    return (





        <section>
            <BlogDetail blog={blog}>

                <p>
                    Headphones are an essential part of our life, whether it's for a marathon run, a long train journey, or a day at the office. However, the first step is to identify the proper model, which isn't always easy. Apple never ceases to wow its customers with new, fantastic, and one-of-a-kind products. Apple has introduced its wireless earbuds, which have captured the hearts of Apple fans. Who doesn't want to have the most up-to-date technology to make their lives easier? Everyone expects speedy solutions in today's fast-paced world. In 2019, Apple released the Apple AirPods Pro, which is the best wireless earbuds. If you have a lot of meetings, a lot of work to do, and you need to be in touch with your coworkers all the time, AirPods pro is the way to go. They offer innovative features and a lengthy battery life that will always be beneficial to you.   </p>
                <br />
                <p>
                    AirPods have several distinctive features. These are all features that other headphone manufacturers have tried to replicate but haven't quite nailed it yet. AirPods continue to outperform the competition, and they are pretty much universally adored by Apple enthusiasts.

                </p>
                <br /><br />
                <h2>
                    Functions and features:

                </h2>
                <br />
                <p>Let's get started with the AirPods pro pricing, features, and functionalities, as well as other noteworthy details. AirPods Pro features an outstanding battery life, mobility, easy charging, simple connectivity, and an unrivaled Bluetooth range.
                </p><br />
                <ul>
                    <li>There are no wires and the fit is quite comfortable.
                    </li>
                    <li>Battery life of 5 hours</li>
                    <li>The overall battery life is 24 hours with the charging case</li>
                    <li>Charging the Airpods for just In 15 minutes will give you battery life, you can charge the case for 3 hours.
                    </li>
                    <li>Apple devices can be configured with a single tap.
                    </li>
                    <li>The connection to iPhone, iPad, Mac, or Apple Watch is instant.
                    </li>
                    <li>Switching between iOS and Mac devices is straightforward.
                    </li>
                    <li>With iOS 14, you can switch between devices automatically.</li>
                    <li>When you need to charge your iPhone, you will receive notifications.
                    </li>
                    <li>When you place the AirPods in your ears, the accelerometer starts playing music straight away</li>
                    <li>Taking out an AirPod causes music to pause.</li>
                </ul>

                <br /><br />
                <h4>Pros:
                </h4>
                <ul>
                    <li>Minimalistic and compact.</li>
                    <li>AirPods pro can be charged with charger cords.
                    </li>
                    <li>They can withstand splashes of water.
                    </li>
                    <li>Earbuds are the comfiest.</li>
                    <li>Any Bluetooth-enabled device can be associated with them. For example, Android phones, televisions, and so on.
                    </li>
                    <li>Siri is supported.
                    </li>
                </ul>
                <br /><br />
                <h4>Cons:
                </h4>
                <ul>
                    <li>Small and minor noises such as people conversing, air conditioning running, and other common noises are ignored by active sound cancellation. It can't cancel loud noises like a lawnmower because that would be dangerous.
                    </li>
                    <li>Because the AirPods pro are water-resistant and have an IPX4 rating, you cannot submerge them in water or sweat.
                    </li>
                </ul>

            </BlogDetail>



        </section>


    )
}

export default FirstBlog
