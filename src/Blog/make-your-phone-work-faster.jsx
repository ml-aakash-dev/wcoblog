import React, { Component } from 'react'
import news_banner from '../assets/blogs/blog4/img4.jpg'
import './Blog.css'
import img1 from '../assets/blogs/blog4/img1.jpg'
import img2 from '../assets/blogs/blog4/img2.jpg'
import img3 from '../assets/blogs/blog4/img3.jpg'
import img4 from '../assets/blogs/blog4/img4.jpg'
import img5 from '../assets/blogs/blog4/img5.jpg'
import img6 from '../assets/blogs/blog4/img6.jpg'

 
import BlogDetail from './BlogDetail'

const blog ={
    datePosted:'14 November 2021',
    heading:' Amazing Hacks To Make Your Phone Work Faster',
    banner: news_banner,
    imgText:[
        {
            heading:'Factory reset time to time: ',
           des:"You can reset your phone from time to time. It's a quick hack to clean out your gadget and get rid of any clutter that's gathered, but it means deleting all data and settings. If you decide to give it a shot, make a backup of anything essential to you first so that you don’t regret it later.",
            img:img1
        },
        {
            heading:'Simple Restart:',
           des:"Another way is restarting your phone. Sometimes all your smartphone need is a simple restart. Restarting smartphones, like restarting computers, can help them from hanging or being stuck. When you reboot your device, it deletes all open temporary files and cleans up the RAM and this is how it boosts the performance of your phone.",
            img:img2,
            imgLeft:true
        },
        {
            heading:'Phone’s Display',
           des:"Although live wallpaper on your home screen with widgets looks nice, it adds extra load and has an impact on the performance of your smartphone. It is preferable to replace your live wallpaper with a static image and to delete all unneeded icons and widgets. The less clutter on your home screen, the better your device's performance.",
            img:img3
        },
        {
            heading:'Free Up Internal Memory:',
           des:" You can now save or backup all of your data in iCloud or Google Drive. You can even save your photos and long videos to Google Photos. This makes your data available on all devices and frees your internal memory. That memory can be used by another app on your device and will also assist to improve its performance. This particular hack saves a lot of space on your mobile phone. ",
            img:img4,
            imgLeft:true
        },
        {
            heading:'Use Lite Versions of Apps:',
           des:"Many social media applications, such as Facebook, Messenger and Twitter, etc. provide a lite version of their apps. Using light versions of apps improves device speed while also lowering data usage. If you have a smartphone with limited capacity and low-end hardware, lite version apps are ideal. The more free memory you have, the faster your Phone will probably run.",
            img:img5
        },
        {
            heading:'Clean Up Applications',
           des:"There are some amazing apps available to help you clean your phone. Deactivate Automatic Downloads and Background App Refresh. This is a method that can increase phone performance and battery life, because both of these functions operate in the background, turning them off means that there is less going on in the background that could be slowing down your device.   ",
            img:img6,
            imgLeft:true
        },
        {
            heading:'Deleting extra data:',
           des:"Deleting music, pictures, and apps will help as well. You can easily manage this by opening Settings and selecting General. Then choose Storage & iCloud Usage. Under Storage, choose Manage Storage. You’ll see how much space you have available on your iPhone and how much space your apps are taking up. If an app uses a large amount of space, it’s probably using a lot of memory too. So delete any apps you don’t need. I’ve also read that deleting apps such as Spotify and Twitter then re-downloading them helps clear their caches and instantly takes up less memory. You can do the same in Android as well by deleting extra files and cache.",
            img:img1
        },
        {
            heading:'Turn on the Low Power Mode',
           des:"To increase your iPhone battery life, the Low Power Mode will disable a few capabilities and sluggish down a few tasks for your device. When your iPhone runs slow, you need to test whether or not you've got enabled this mode. Don’t put your phone on charging while this mode is on for good battery health.",
            img:img2,
            imgLeft:true
        },
        {
            heading:'Update your phone software',
           des:"The latest software will often contain bug fixes and general improvements and it can help your device to run better. A newer version of IOS or android generally has fixed known bugs found in previous versions and has been improved in quality and efficiency. If there is a new version of IOS or Android available and it is compatible with your iPhone or Android model, you can update to the latest version of the, to make your mobile phone faster.    ",
            img:img3
        },
        {
            heading:'. Replace your phone battery:                    ',
           des:"Of course, the most obvious point that you may require a cell phone battery replacement is significantly reduced battery life. Consider replacing your phone if it only lasts 10 hours and you don't do anything strenuous like streaming or playing games. Replacing the battery will improve your phone's performance.",
            img:img4,
            imgLeft:true
        },
        {
            heading:'Keep the applications you use:',
           des:"Various apps on our smartphones are constantly running and require an internet connection to function. And if these apps aren't useful to us, they'll just add to the hardware load and raise our data expenses. Getting rid of such apps is a good first step toward speeding up your phone. Do try this.",
            img:img5
        },
        {
            heading:'Activate airplane mode:',
           des:"Your phone's network settings can become jumbled at times, causing your internet connection to suffering. This could be the cause of your problems if your phone is capable of 4G but appears to be stuck on 3G or even 2G. As a quick fix for increasing download speed on your Android or IOS smartphone, try a network-settings reset. It would work for sure.",
            img:img6,
            imgLeft:true
        },

    ]
}

const  FirstBlog   =()=> {
    
    return (



        
            <section>
                <BlogDetail blog={blog}>

                  <p>
                  There was a time when phones were meant to make calls and send messages only but now whether it’s IOS or Android, smartphones have grown so much in power. So powerful that they can now do quick video or photo editing and play online lit games with high-quality visuals and much more to do. Do you want to get rid of the bugs that cause your mobile phones to slow down? If you want to keep your smartphone in tip-top condition, here are some wonderful hacks that you might be interested in. 
                        </p>
                </BlogDetail>
              

          
            </section>
          
    )
}

export default FirstBlog
