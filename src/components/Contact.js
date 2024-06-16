import React from "react";

const Contact = () =>{
    return (
        <>
            <div className="ContactMain" id="contact" >
                <div className="HeadingContact">
                    <h2>Contact Me</h2>
                </div>
                <div className="ContactSub" >
                    <div className="ContactOne" >
                        <div className="MainDIv">
                            <div className="MailDIv">
                                <a href="hariharan.a69@gmail.com" className="ContactLink"><i class="fa-regular fa-envelope"></i></a>
                                <h6>hariharan.a69@gmail.com</h6>
                            </div>
                            <div className="GitDiv">
                                <a href="https://github.com/hari-haran80" className="ContactLink"><i class="fa-brands fa-github" id="github"></i></a>
                                <h6>https://github.com/hari-haran80</h6>
                            </div>
                        </div>
                    </div>
                    <div className="COntactTwo">
                        <form className="ContactForm">
                            <div className="NamesDiv common">
                                <input type="text" placeholder="First Name" className="FirstName inputs" />
                                <input type="text" placeholder="Last Name" className="LastName inputs" />
                            </div>
                            <div className="EmailDiv common">
                                <input type="email" placeholder="Email" className="Email inputs" />
                            </div>
                            <div className="MessageDiv common">
                                <textarea className="Message  inputs" placeholder="Enter Messages"></textarea>
                            </div>
                            <div className="ButtonDiv common">
                                <button className="SendButton inputs">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;