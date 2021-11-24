import React, { Component } from 'react'
import news_banner from '../assets/blogs/blog1/blog1_banner.jpeg'
import './Blog.css'
import img1 from '../assets/blogs/blog1/blog1_1.jpeg'
import img2 from '../assets/blogs/blog1/blog1_2.jpeg'
import img3 from '../assets/blogs/blog1/blog1_3.jpeg'
import img4 from '../assets/blogs/blog1/blog1_4.jpeg'
import img5 from '../assets/blogs/blog1/blog1_5.jpeg'
import img6 from '../assets/blogs/blog1/blog1_6.jpeg'
import img7 from '../assets/blogs/blog1/blog1_7.jpeg'
import img8 from '../assets/blogs/blog1/blog1_8.jpeg'
 

 

class FirstBlog extends Component  {

    constructor(props) {
        super(props)
        this.state = {
            state1: "state1",
            blog: true,
            headerDot: false,
            servicesDot: false,
            testimonialDot: false,
            workDot: false,
            joinDot: false,
            numbersDot: false,
            contactDot: false
        }
        this.header = React.createRef()
        this.services = React.createRef()
        this.work = React.createRef()
        this.numbers = React.createRef()
        this.testimonial = React.createRef()
        this.join = React.createRef()
        this.contact = React.createRef()
    }


    componentDidMount() {

        const state2 = window.pageYOffset > 10 ? "state2" : "state1";

        this.setState({
            state1: state2
        });

     
    }


    scrollToHeader = () => {
        //.current is verification that your element has rendered
        if (this.header.current) {
            this.header.current.scrollIntoView({
                behavior: "smooth"
            })
        }
        if (window.pageYOffset < 10) {
            this.setState({
                state1: "state1"
            })
        }
        document.getElementById('nav-ham-icon').style.display = "block"
        document.getElementById('nav-cross-icon').style.display = "none"
        document.getElementById('ham-menu').style.display = "none"
        document.getElementById('mobile-ham-menu').style.display = "none"
        document.getElementById('nav-logo-bottom').style.display = "block"
        document.body.style.overflow = "auto"
    }
    scrollToServices = () => {
        const store = document.getElementById('tabs').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store - 40, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
        });
        document.getElementById('nav-ham-icon').style.display = "block"
        document.getElementById('nav-cross-icon').style.display = "none"
        document.getElementById('ham-menu').style.display = "none"
        document.getElementById('mobile-ham-menu').style.display = "none"
        document.getElementById('nav-logo-bottom').style.display = "block"
        document.body.style.overflow = "auto"
    }
    scrollToAccessories = () => {
        const store = document.getElementById('accessories').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store - 0, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
        });
    }
    scrollToRepair = () => {
        const store = document.getElementById('repair').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store - 0, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
        });
    }
    scrollToActivation = () => {
        const store = document.getElementById('activation').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: store - 0, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
        });
    }
    scrollToTestimonial = () => {
        //.current is verification that your element has rendered
        if (this.testimonial.current) {
            this.testimonial.current.scrollIntoView({
                behavior: "smooth"
            })
        }
        document.getElementById('nav-ham-icon').style.display = "block"
        document.getElementById('nav-cross-icon').style.display = "none"
        document.getElementById('ham-menu').style.display = "none"
        document.getElementById('mobile-ham-menu').style.display = "none"
        document.getElementById('nav-logo-bottom').style.display = "block"
        document.body.style.overflow = "auto"
    }
    scrollToWork = () => {
        //.current is verification that your element has rendered
        if (this.work.current) {
            this.work.current.scrollIntoView({
                behavior: "smooth"
            })
        }
        document.getElementById('nav-ham-icon').style.display = "block"
        document.getElementById('nav-cross-icon').style.display = "none"
        document.getElementById('ham-menu').style.display = "none"
        document.getElementById('mobile-ham-menu').style.display = "none"
        document.getElementById('nav-logo-bottom').style.display = "block"
        document.body.style.overflow = "auto"
    }
    scrollToJoin = () => {
        if (this.join.current) {
            this.join.current.scrollIntoView({
                behavior: "smooth"
            })
        }
        document.getElementById('nav-ham-icon').style.display = "block"
        document.getElementById('nav-cross-icon').style.display = "none"
        document.getElementById('ham-menu').style.display = "none"
        document.getElementById('mobile-ham-menu').style.display = "none"
        document.getElementById('nav-logo-bottom').style.display = "block"
        document.body.style.overflow = "auto"
    }
    scrollToNumbers = () => {
        const store = document.getElementById('numbers').offsetTop
        // store.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.innerWidth > 576) {
            window.scrollTo({
                top: store - 130, //add your necessary value
                behavior: "smooth"  //Smooth transition to roll
            });
        }
        if (window.innerWidth <= 576) {
            window.scrollTo({
                top: store, //add your necessary value
                behavior: "smooth"  //Smooth transition to roll
            });
        }
        document.getElementById('nav-ham-icon').style.display = "block"
        document.getElementById('nav-cross-icon').style.display = "none"
        document.getElementById('ham-menu').style.display = "none"
        document.getElementById('mobile-ham-menu').style.display = "none"
        document.getElementById('nav-logo-bottom').style.display = "block"
        document.body.style.overflow = "auto"
    }
    scrollToContact = () => {
        //.current is verification that your element has rendered
        if (this.contact.current) {
            this.contact.current.scrollIntoView({
                behavior: "smooth"
            })
        }
        document.getElementById('nav-ham-icon').style.display = "block"
        document.getElementById('nav-cross-icon').style.display = "none"
        document.getElementById('ham-menu').style.display = "none"
        document.getElementById('mobile-ham-menu').style.display = "none"
        document.getElementById('nav-logo-bottom').style.display = "block"
        document.body.style.overflow = "auto"
    }



    state1Handler = () => {
        this.setState({
            state1: "state1"
        })
    }

    state2Handler = () => {
        this.setState({
            state1: "state2"
        })
    }

    render() {
    return (



        <div>
            <section ref={this.header}>
                <Header
                    state1Handler={this.state1Handler}
                    state2Handler={this.state2Handler}
                    scrollToHeader={this.scrollToHeader}
                    scrollToServices={this.scrollToServices}
                    scrollToTestimonial={this.scrollToTestimonial}
                    scrollToWork={this.scrollToWork}
                    scrollToJoin={this.scrollToJoin}
                    scrollToNumbers={this.scrollToNumbers}
                    scrollToContact={this.scrollToContact}
                    state={this.state.state1}
                    blog={this.state.blog}
                    headerDot={this.state.headerDot}
                    servicesDot={this.state.servicesDot}
                    testimonialDot={this.state.testimonialDot}
                    workDot={this.state.workDot}
                    joinDot={this.state.joinDot}
                    numbersDot={this.state.numbersDot}
                    contactDot={this.state.contactDot}
                    height="auto"
                />
            </section>
            <section>
                <div className="news_banner">
                    <img src={news_banner} alt="" />
                    {/* <img src="data:image/jpeg;base64,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" alt="" /> */}
                </div>
                <div className="news_container">
                    <h1 className="news_heading">
                        Ways to keep your smartphone clean
                    </h1>
                    <span className="news_sub_heading">
                        11 November 2021
                    </span>
                    {/* <span className='source_text'>Inspired By  <a href='https://www.dailyherald.com/submitted/20211011/all-stars-team-takes-championship-at-1st-chicago-open-t20-night-cricket-tournament-2021' target='_blank'><img src={herald} alt="" /></a></span> */}
                    <div className="news_text">
                        <p>
                            Your once-shiny, flashy smartphone has slowed down. It doesn't have the same feel as when you first took it out of the box. It's not a figment of your imagination: smartphone lag is real. Phones accumulate a lot of junk through downloads, apps, pictures, videos, music, and so on, all of which contribute to the slowdown. While you may never be able to recreate the feeling you had on day one, a few spring cleaning tips can help you combat smartphone slowdown. A phone's performance might deteriorate months (or even weeks) after its use. As you use mobile applications regularly, the software slows down, and storage space fills up. The user experiences delay switching between apps and background operations. With these solutions to the question "how do I clean my phone storage and memory?" you can get rid of the junk and give your smartphone a operate as new, be it's IOS or Android.

                        </p>
                    </div>

                    <div className="news_text_img_right">
                        <div className="news_text_half">
                            <h4>Gallery Cleanup</h4>
                            <br />
                            <p>
                                You wish to save your old pictures and clips for the future. However, you may do so without their clogging up your phone. Download the Google Photos app (Android | iOS) to back up your photos and videos to the cloud. Check out our Google Photos review to learn more about this free use tool. With your images and videos safely stored up, Google Photos may even intelligently delete photos from your phone that have already been backed up, potentially saving up a lot of space. If you have an iPhone, you can do the same thing with the iOS Photos app.  </p>
                        </div>
                        <div className="news_img_half">
                            <img src={img1} alt="" />
                        </div>

                    </div>
                    <div className="news_text_img_left">
                        <div className="news_text_half">
                            <h4>Get rid of useless apps:

                            </h4><br />
                            <p>
                                We've all downloaded apps that we only use once or twice before deleting. It's not a shame to do so, yet the disappointment is to keep them. The unused apps will take up space, slow you down, and drain your battery. Take a look at the apps you've installed on your device. Delete any apps that you don't recognize at first glance.

                            </p><br />
                            <p>
                                Tap and hold an app on Android, then drag it to the top of the screen to the Uninstall button and drop it.

                            </p>
                            <br />
                            <p>
                                Tap and hold the offending app on the iPhone's home screen. Tap Remove App, then Delete App in the pop-up menu that appears. If you're using an older version of iOS, tap and hold the screen until the apps begin to wiggle, then tap the "x" in the top right corner of any apps you don't need.
                            </p>
                        </div>
                        <div className="news_img_half">
                            <img src={img6} alt="" />
                        </div>

                    </div>
                    <div className="news_text_img_right">
                        <div className="news_text_half">
                            <h4>Permissions that last permanently:
                            </h4>
                            <br />
                            <p>
                                One major battery drainage problem is a result of location tracking. When you install an app on Android, you get to choose which permissions you want to give it. You can add or remove permissions by going to Settings	&#62; Apps. Tap an app, then Permissions, and turn on or off the options as needed. In an iPhone, navigate to Settings	&#62; Privacy	&#62; Location Services and select the apps for which you want location access.
                            </p>
                        </div>
                        <div className="news_img_half">
                            <img src={img3} alt="" />
                        </div>

                    </div>
                    <div className="news_text_img_left">
                        <div className="news_text_half">
                            <h4>Clear the Cache:


                            </h4><br />
                            <p>
                                Is it safe to delete app data from my phone?" you might wonder. Yes, get used to knowing what to delete and when. Because you aren't constantly pulling down the same resources, cached data is useful and can save you money on mobile data. Even so, it can act as a catalyst to the point that slows down the phone. Clearing your cache clears the website data stored locally on your phone, preventing you from having to download it each time you visit. The data in your cache accumulates over time and, if it becomes too large, it can slow things down. Go to Settings	&#62; Storage	&#62; Cached data on an Android phone. You can clear Safari browser data on an iPhone by opening the Settings app, selecting Safari, and tapping Clear History and Website Data. While Safari is the most common offender, look into other apps to see if they have a cache or other data you can clear. Try deleting and reinstalling an app if it continues to be problematic. This will clear the cache as well as all settings, resolving the issues (hopefully).

                            </p><br />


                        </div>
                        <div className="news_img_half">
                            <img src={img4} alt="" />
                        </div>

                    </div>
                    <div className="news_text_img_right">
                        <div className="news_text_half">
                            <h4>Try Resetting your Phone
                            </h4>
                            <br />
                            <p>
                                Whether it’s IOS or Android you can always reset your phone back to its original state if it feels hopelessly bogged down to the point where drastic measures are required. It may be time for a factory reset if the system freezes for no apparent reason, apps refuse to launch, or your phone restarts unexpectedly. This will give you the real feeling of cleaning the house. Go to Settings	&#62; Backup & reset, then Factory data reset on Android. Go to Settings	&#62; General	&#62; Reset	&#62; Erase All Content and Settings on your iPhone.
                            </p>
                        </div>
                        <div className="news_img_half">
                            <img src={img5} alt="" />
                        </div>

                    </div>
                    <div className="news_text_img_left">
                        <div className="news_text_half">
                            <h4>Stop storing messages


                            </h4><br />
                            <p>
                                Your smartphone automatically saves all text messages you send and receive to anyone. This is useful if you need to search up a 15-month-old chat, but it's not so useful if you need that storage space back. Delete your old texts to stop your phone from lagging. In iPhone open the Settings app and select Messages from the drop-down menu. Keep Messages by scrolling down until you find Message History. Change the duration of Forever to 30 days or a year. If you want to delete older messages, a pop-up will appear; tap Delete to proceed. </p><br />


                        </div>
                        <div className="news_img_half">
                            <img src={img7} alt="" />
                        </div>

                    </div>
                    <div className="news_text">
                        <h4 style={{ textAlign: 'center' }}>Germ-Free Phone:</h4>
                        <br />
                        <p>
                            Following are Six Steps to clean your phone and make it germ-free.

                        </p><br />
                        <ul>
                            <li>Take off your phone case and turn off your device.</li>
                            <li>Using a microfiber cloth, polish the surface.</li>
                            <li>Then, grab a Lysol disinfecting wipe and clean your phone from front and back.
                            </li>
                            <li>Allow your phone to air dry for at least 5 minutes.
                            </li>
                            <li>Take out a fresh paper towel or microfiber cloth and clean with it.
                            </li>
                            <li>Finally, sanitize your phone case as well.</li>
                        </ul>
                        <br />
                        <p>
                            It is simple to keep your phone clean and sanitary. Along with the phone, you should clean all of the other devices you use, such as the iPad, watches, desktop computers, and so on.  </p>
                    </div>
                    {/* <div className="news_text">
                    <p className='text_lg'>Same Covered By <a href='https://www.dailyherald.com/submitted/20211011/all-stars-team-takes-championship-at-1st-chicago-open-t20-night-cricket-tournament-2021'><em>
                        Heralds
                    </em>
                    </a>
                    </p>
                </div> */}
                </div>
            </section>
            <Footer
                scrollToServices={this.scrollToServices}
                scrollToAccessories={this.scrollToAccessories}
                scrollToRepair={this.scrollToRepair}
                scrollToActivation={this.scrollToActivation}
                scrollToWork={this.scrollToWork}
                scrollToNumbers={this.scrollToNumbers}
                scrollToContact={this.scrollToContact}
            />
        </div>
    )
}
}
export default FirstBlog
