import React from "react";
import myImage from '../assets/myImage.png';
import Typical from "react-typical";
import DownloadButton from "./DownloadButton";


const About = () => {
    return (
        <>
            <div className="MainContainer" id="about">
                <div className="SubCOntainer2">
                    <img src={myImage} alt="Profile" className="ImageProfile" />
                </div>
                <div className="SubContainer">
                    <div className="Content">
                        <h5 className="Hi">HI THERE! I'M</h5>
                        <h1 className="Name">Hari <span className="SecondName"> <Typical steps={['', 100 ,'Haran.', 1500]} loop={Infinity} wrapper="b"/></span></h1>
                        <p className="Description">I'm a passionate and dedicated React developer with a strong background in building dynamic and responsive web applications. With a keen eye for detail and a drive for perfection, I take pride in crafting seamless user experiences through clean and efficient code.</p>
                        <div className="Btn">
                            <DownloadButton />
                            <a href="https://www.instagram.com/heart_stoler_hari/" className="Links" target="black"><i className="fa-brands fa-instagram" style={{ color: '#e50bab'}}></i></a>
                            <a href="https://www.facebook.com/profile.php?id=100009078732441" className="Links" target="black"><i class="fa-brands fa-facebook-f" style={{ color: 'blue'}}></i></a>
                            <a href="https://github.com/hari-haran80" className="Links" target="black"><i class="fa-brands fa-github" id="fa-github" style={{ color: 'black'}}></i></a>
                            <a href="https://www.linkedin.com/in/hari-haran-8281351a8/" className="Links" target="black"><i class="fa-brands fa-linkedin-in" style={{ color: 'blue'}}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;