import React, { Component } from 'react'
import news_banner from '../assets/blogs/blog6/banner.jpg'
import './Blog.css'
import img1 from '../assets/blogs/blog6/img1.jpeg'
import img2 from '../assets/blogs/blog6/img2.jpg'
import img3 from '../assets/blogs/blog6/img3.jpeg'
import img4 from '../assets/blogs/blog6/img4.jpg'
import img5 from '../assets/blogs/blog6/img5.jpg'
import img6 from '../assets/blogs/blog6/img6.jpg'
import img7 from '../assets/blogs/blog6/img7.jpg'
import img8 from '../assets/blogs/blog6/img8.jpg'
import img9 from '../assets/blogs/blog6/img9.jpg'
import img10 from '../assets/blogs/blog6/img10.jpg'
import img11 from '../assets/blogs/blog6/img11.jpg'

 
import BlogDetail from './BlogDetail'

const blog ={
    datePosted:'12 November 2021',
    heading:' Importance of Mobile Phone Accessories',
    banner: news_banner,
    imgText:[
        {
            heading:'Fast Charger: ',
            des:"You should have a turbo or dash charger on hand. Whereas standard chargers provide a gradual trickle of juice, fast chargers increase the current to quickly fill your cell. However, take in mind that your phone may become a little hot in the process. If you're a power user or frequent flier, it should be an essential part of your kit.",
            img:img1
        },
        {
            heading:'Car Charger:',
            des:"Car chargers are very essential these days because charging is required while you are traveling a long distance.",
            img:img2,
            imgLeft:true
        },
        {
            heading:'Wireless Charger: ',
            des:"You haven't experienced convenient phone charging until you've used a wireless charging pad. Instead of fumbling around in the dark with a micro USB wire, simply place your phone on a surface near your bed or a pad at work. Of course, this is only applicable if your phone supports it. Though it's not the most effective or quick way to give your phone a mid-day boost, it's unquestionably the most painless. It's also a good practice to develop for the sake of durability, as it's the simplest method to extend the life of your vulnerable little USB port.",
            img:img3
        },
        {
            heading:'Protective Phone Cases:',
            des:"This may sound obvious, but a good case will protect your phone from drops, spills, and children—assuming you pick a good one. You must make your own decisions on which case to purchase. Only the most popular flagships receive substantial consideration from case makers. Waterproofing, a kickstand, a wallet, and even pepper spray may be added to your phone with a case. We don't condone that last one, but it just goes to show that if you're willing to look, you can find almost anything you want in a case.",
            img:img4,
            imgLeft:true
        },
        {
            heading:'Good Headphones/Earphones:',
            des:"If you want to listen to podcasts, rock out to music, or even view videos while commuting, headphones are a must-have piece of technology. The earphones that come with most cellphones are often substandard and break easily (if they come at all). Solution? Purchase a serious pair of headphones that will do the job. Just make sure you pick a sturdy set, and you'll have years of pleasant listening.",
            img:img5
        },
        {
            heading:'Screen Guard:  ',
            des:"Another item that helps mobile phone owners protect their phone's screens from scratches is a screen guard. Scratches are typically the consequence of your phone's normal handling. These screen guards will not only protect your units from scratches but will also retain their visual appeal and resale value. While it won't turn your phone into mithril, it is a solid first line of defense against keys, drops, and dirt.",
            img:img6,
            imgLeft:true
        },
        {
            heading:'Power Banks: ',
            des:"Another essential thing for mobile phone owners is a power bank. They can use this device to charge and power their units even if they fail to carry their battery chargers with them. It’s great to carry a power bank when you are on a road trip or traveling anywhere.",
            img:img7,
        },
        {
            heading:'Bluetooth:',
            des:"This is a device that can provide more functionality to your cell phone. A cell phone equipped with a BlueTooth device can create a wireless connection with other devices that have the same capability. Hence, it eliminates the need to use physical cables.",
            img:img8,
            imgLeft:true
        },
        {
            heading:'Smart Watches:',
            des:"Because of their multi-purpose usage, smartwatches have become a must-have accessory for smartphones. You can control your notifications, answer calls, ask voice assistants questions, and do other things. But wait, there's more. Smartwatches can now function as both a fitness tracker and a medical instrument. ",
            img:img9,
        },
        {
            heading:'Pop Sockets: ',
            des:"Having a Pop Socket on your phone improves your grip, making it easier to hold your phone and take selfies without worrying about dropping the device. Pop Sockets can also double as a kickstand for your smartphone, allowing it to stand upright.",
            img:img10,
            imgLeft:true
        },
        {
            heading:'Selfie Sticks: ',
            des:"Selfies are popular these days, particularly if you enjoy taking them. A selfie stick for taking stunning photos of yourself and your loved ones on your special festivities or occasions.",
            img:img11,
        },
        {

            des:"Mobile phones are part of luxury these days and all these accessories are very helpful and support in communication with mobile and make our life easier. Smartphones, on the other hand, are merely a platform that may be expanded with fantastic accessories. While some attachments are intended exclusively for certain cellphones, others are compatible with practically all devices. Having it all said, almost every other smartphone accessory is not a want but now a need of this generation.  ",
            img:img2,
            imgLeft:true
        },
        
      

    ]
}

const FirstBlog = () => {




    return (



        <section>
            <BlogDetail blog={blog}>

                <p>
                    We cannot deny that cell phones are essential devices in today's environment. Most of us cannot function without this piece of technology these days. You may forget about a lot of stuff, but not your smartphones, right? Mobile phones not only allow us to take images of ourselves and other things that interest us, but they also serve as an effective communication tool, allowing users to stay in touch with their friends and loved ones. Because of the importance of this gadget, it is appropriate to take care of it. Buying high-quality mobile phone accessories is one of the most effective ways to accomplish this. Mobile phone accessories are always high in demand and very popular in almost every country. If you look around in malls and specialty stores, you may find all sorts of accessories and items that can be used in connection with your mobile phones. These accessories are designed to enhance the look and functionality of your smartphone.
                </p>
                <br />
                <p>
                    Nowadays, there are numerous accessories to choose from.
                    Following are some of the mobile phone accessories we cannot cope with within our daily lives.

                </p>
            </BlogDetail>



        </section>

    )
}

export default FirstBlog
