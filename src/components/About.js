import React, { useState } from 'react'

export default function About(props) {

    let myStyle={
        color: props.mode==='dark' ? 'white' :'black',
        backgroundColor: props.mode ==='dark' ? '#072c65' :'white',
    }

    return (
        <div className='container' style={{color: props.mode==='dark' ? 'white' :'#042743'}}>
            <h1 className='my-3' >About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}         >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Founder of this app mr. Pratap Karmakar</strong> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Hi, my name is <strong> Tony Stark</strong> but sometimes people call me <strong>Pratap Karmakar</strong>, i'm glad to announce that finally i made this revolutionary app called TextUtils which offers you to analyze your confidential texts in just blink of an eye and by that analyzed text you actually can do nothing, but as sir Albert Einstein pleased me to build this app, i don't know why he wants me to build this app but then i received a mail from Stephen Hawking for the same. so for these dramatic reasons i made this app. hope this revolutionary app will help you with nothing. thanks!   
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        <strong> About this revolutionary app</strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you the way to ananlyze your text quickly and efficiently.it is a free tool that provides instant character count & word count statistics for a given text. and also some functionalities such as to set yor entire text to UpperCase or LowerCase, to Remove extra Spaces from your text, to Copy or to Clear your text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        <strong>Browser ompatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This revolutionary app works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. Also seamlessly works in your android phone as it works in a borolok's iphone coz i'm not a Racist, o mah god Emotional Damage.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={myStyle}>
                        <strong>User Specific</strong>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            I can simplly make this app user specific, means i can add things or functionalities in this revolutionary app as you want but for that you need to pay me <strong>1.5cr</strong> which is non negotiable. to do so please contact my manager Jarvis.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}











