import React, { Component } from 'react'
import news_banner from '../assets/blogs/blog5/banner.jpg'
import './Blog.css'
import img1 from '../assets/blogs/blog5/img1.jpeg'
import img2 from '../assets/blogs/blog5/img2.jpg'

 
import BlogDetail from './BlogDetail'

const blog ={
    datePosted:'14 November 2021',
    heading:' IPHONE 11 HEAVY DUTY DEFENDER CASE',
    banner: news_banner,
    imgText:[
        {
            heading:'INSTALLING AND REMOVING THE CASE: ',
            des:"When you pull the case out of the package, you'll notice that it's already constructed, so you'll need to disassemble it before you begin. The Defender is made up of three parts: a flexible rubbery outer shell and a two-part interlocking inner-frame. Taking off the outer shell necessitates peeling away the borders to access the frame underneath. There is a seam that runs the length of the screen. Pry the outer layer off with your fingernail or a tiny tool, beginning at the bottom and working your way to the top. If you can't find an appropriate tool, you can remove the rubber cover over the lightning port and pull on the outer shell until it separates from the inner casing. You must now separate the two halves of the inner shell after removing the outer covering. A set of clips and notches along the edges hold the two together. Unclip the latches and begin pulling each catch apart, working your way around the edges, until the top layer comes away, beginning with the side. The indication arrows engraved on the back will tell you how many there are. This is the same procedure for taking the case from the phone, so simply follow these steps when it's time to take the case off. The phone can now be inserted into the case. Insert your note into the bottom section and place the top section over the top of the phone. Check that the phone is oriented correctly by comparing the cutouts on the phone with the lightning port on the bottom.Gently press down on the top of the frame to reposition the clips. Work your way around the edges, pushing each clip down to ensure it’s secure.Then, taking the rubber outer cover, place the phone inside the end first. Simply push the edges back into place, pushing up from the rear before pressing in from the sides, to complete the installation. Your iPhone 11 Pro Max is now completely safe from whatever life throws at it. Although the case is rather thick, the extra weight is well worth it for the peace of mind it provides.",
            img:img1,
            imgLeft:true
        },
        {
            heading:'FINAL VERDICT:',
          des:"This case is ideal for protecting your IPhone whether working on a construction site, going on a hike or bike trip, or simply being a cautious phone user. It is one of the best protective phone cases in the market, and it is still the best choice for keeping your phone in good condition over its lifetime. You can get your hands on this case through whole-cell accessories."
           , img:img2,
            
        },
      
        
      

    ]
}

const FirstBlog = () => {


    return (



        <section>
            <BlogDetail blog={blog}>

                <p>
                    People never know when their pricey smartphones drop. Smartphone lovers can acquire a protective case for your phone to avoid negative outcomes in such situations. To get the most out of this, do your homework and figure out whether cell phone cases are necessary and which ones provide the most protection.
                    The smartphone covers can also make a significant contribution to the aesthetic attractiveness of your gadget.  The market has a wide variety of phone cases to choose from.  The iPhone 11 features a stunning and timeless design; however, its glass sandwich structure necessitates caution while handling it. You'll almost certainly need a case if you want to keep the phone looking nice. Fortunately, there are a plethora of options available, each with its unique style and functionality.
                    In this article we are going through the specs and features of IPhone 11 heavy duty defender case, and also about how to install and remove the case. So let’s begin.
                </p>
                <br />
                <br />
                <h3>IMPACT-RESISTANT: </h3>
                <p>The impact-resistant casing provides dependable, excellent protection against scratches, scrapes, bumps, and falls.</p>
                <br /><br />
                <h3>PERFECT DESIGN: </h3>
                <p>The perfect design allows you to combine it with your favorite outfits and accessories.</p>
                <br /><br />
                <h3>PROTECTION:</h3>
                <p>The camera and screen bezel raised provides further protection; accurate cuts make all functions and buttons accessible easily.</p>
                <br /><br />
                <h3>ACCESSIBILITY: </h3>
                <p>All connectors, controllers, and sensors are accessible.
                </p>
                <br /><br />
                <h3>DESIGN:</h3>
                <p>Outer design gently rises over the screen to protect your iPhone screen or camera from being dropped or placed face down on a surface.</p>
                <br /><br />
                <h3>DUST-FREE:</h3>
                <p>The case fits perfectly so that dust does not penetrate and damage your phone's body to keep it safe.</p>
                <br /><br />
                <h3>PORTABILITY:
                </h3>
                <p>The fantastic cellphone case offers you more portability and firmness, and no bulk, and no sliding.</p>
                <br /><br />
                <h3>
                    SCRATCH-RESISTANT:
                </h3>
                <p>The material will effectively minimize fingerprints and bring the case with tenderness, making it more scratch-resistant than other materials and assisting in fingerprint reduction.</p>
                <br /><br />
                <h4>FEATURES:
                </h4>
                <ul>
                    <li>Multi-layer defense is provided by the inner hard shell, outer slipcover, and holster.</li>
                    <li>Touch response is superb thanks to the screen-less design.</li>
                    <li>Port covers keep dirt, dust, and lint out of jacks and ports.</li>
                    <li>The included holster serves as a swiveling belt clip as well as a hands-free kickstand.</li>
                </ul>
                <br /><br />
                <h4>
                    MATERIALS USED:
                </h4>
                <ul>
                    <li>Polycarbonate shell</li>
                    <li>Synthetic rubber slipcover</li>
                    <li>Polycarbonate holster
                    </li>
                </ul>
            </BlogDetail>



        </section>
    )
}

export default FirstBlog
