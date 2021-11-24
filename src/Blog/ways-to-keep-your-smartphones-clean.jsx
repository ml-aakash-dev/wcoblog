import React, { Component } from 'react'
import news_banner from '../assets/blogs/blog1/blog1_banner.jpeg'
import './Blog.css'
import img1 from '../assets/blogs/blog1/blog1_1.jpeg'
import img2 from '../assets/blogs/blog1/blog1_2.jpeg'
import img3 from '../assets/blogs/blog1/blog1_3.jpeg'
import img4 from '../assets/blogs/blog1/blog1_4.jpeg'
import img5 from '../assets/blogs/blog1/blog1_5.jpeg'
import img6 from '../assets/blogs/blog1/blog1_6.jpeg'
// import img7 from '../assets/blogs/blog1/blog1_7.jpeg'
// import img8 from '../assets/blogs/blog1/blog1_8.jpeg'
  
import BlogDetail from './BlogDetail'

const blog ={
    datePosted:'11 November 2021',
    heading:' Ways to keep your smartphone clean',
    banner: news_banner,
    imgText:[
        {
            heading:'Gallery Clean Up: ',
            des:'You wish to save your old pictures and clips for the future. However, you may do so without their clogging up your phone. Download the Google Photos app (Android | iOS) to back up your photos and videos to the cloud. Check out our Google Photos review to learn more about this free use tool. With your images and videos safely stored up, Google Photos may even intelligently delete photos from your phone that have already been backed up, potentially saving up a lot of space. If you have an iPhone, you can do the same thing with the iOS Photos app.                    ',
            img:img1
        },
        {
            heading:'Get rid of useless apps:',
            des:"We've all downloaded apps that we only use once or twice before deleting. It's not a shame to do so, yet the disappointment is to keep them. The unused apps will take up space, slow you down, and drain your battery. Take a look at the apps you've installed on your device. Delete any apps that you don't recognize at first glance Tap and hold an app on Android, then drag it to the top of the screen to the Uninstall button and drop it. Tap and hold the offending app on the iPhone's home screen. Tap Remove App, then Delete App in the pop-up menu that appears. If you're using an older version of iOS, tap and hold the screen until the apps begin to wiggle, then tap the 'x' in the top right corner of any apps you don't need.",
            img:img2,
            imgLeft:true
        },
        {
            heading:'Permissions that last permanently: ',
            des:'One major battery drainage problem is a result of location tracking. When you install an app on Android, you get to choose which permissions you want to give it. You can add or remove permissions by going to Settings > Apps. Tap an app, then Permissions, and turn on or off the options as needed. In an iPhone, navigate to Settings > Privacy > Location Services and select the apps for which you want location access.',
            img:img3
        },
        {
            heading:'Clear the Cache:',
            des:"Is it safe to delete app data from my phone? you might wonder. Yes, get used to knowing what to delete and when. Because you aren't constantly pulling down the same resources, cached data is useful and can save you money on mobile data. Even so, it can act as a catalyst to the point that slows down the phone. Clearing your cache clears the website data stored locally on your phone, preventing you from having to download it each time you visit. The data in your cache accumulates over time and, if it becomes too large, it can slow things down. Go to Settings > Storage > Cached data on an Android phone. You can clear Safari browser data on an iPhone by opening the Settings app, selecting Safari, and tapping Clear History and Website Data. While Safari is the most common offender, look into other apps to see if they have a cache or other data you can clear. Try deleting and reinstalling an app if it continues to be problematic. This will clear the cache as well as all settings, resolving the issues (hopefully).",
            img:img4,
            imgLeft:true
        },
        {
            heading:'Try Resetting your Phone:',
            des:'Whether it’s IOS or Android you can always reset your phone back to its original state if it feels hopelessly bogged down to the point where drastic measures are required. It may be time for a factory reset if the system freezes for no apparent reason, apps refuse to launch, or your phone restarts unexpectedly. This will give you the real feeling of cleaning the house. Go to Settings > Backup & reset, then Factory data reset on Android. Go to Settings > General > Reset > Erase All Content and Settings on your iPhone.                    ',
            img:img5
        },
        {
            heading:'Stop storing messages: ',
            des:"Your smartphone automatically saves all text messages you send and receive to anyone. This is useful if you need to search up a 15-month-old chat, but it's not so useful if you need that storage space back. Delete your old texts to stop your phone from lagging. In iPhone open the Settings app and select Messages from the drop-down menu. Keep Messages by scrolling down until you find Message History. Change the duration of Forever to 30 days or a year. If you want to delete older messages, a pop-up will appear; tap Delete to proceed. ",
            img:img6,
            imgLeft:true
        },
        {
            heading:'Germ-Free Phone: ',
           des:
           "Following are Six Steps to clean your phone and make it germ-free.Take off your phone case and turn off your device.Using a microfiber cloth, polish the surface.Then, grab a Lysol disinfecting wipe and clean your phone from front and back.Allow your phone to air dry for at least 5 minutes.Take out a fresh paper towel or microfiber cloth and clean with it.Finally, sanitize your phone case as well. It is simple to keep your phone clean and sanitary. Along with the phone, you should clean all of the other devices you use, such as the iPad, watches, desktop computers, and so on. ",
            img:img2,
        },
    ]
}



const FirstBlog =()=>  {

  
    return (



     
            <section>
                <BlogDetail blog={blog}>

                  <p>
                            Your once-shiny, flashy smartphone has slowed down. It doesn't have the same feel as when you first took it out of the box. It's not a figment of your imagination: smartphone lag is real. Phones accumulate a lot of junk through downloads, apps, pictures, videos, music, and so on, all of which contribute to the slowdown. While you may never be able to recreate the feeling you had on day one, a few spring cleaning tips can help you combat smartphone slowdown. A phone's performance might deteriorate months (or even weeks) after its use. As you use mobile applications regularly, the software slows down, and storage space fills up. The user experiences delay switching between apps and background operations. With these solutions to the question "how do I clean my phone storage and memory?" you can get rid of the junk and give your smartphone a operate as new, be it's IOS or Android.

                        </p>
                </BlogDetail>
              

          
            </section>
        
    )
}

export default FirstBlog
