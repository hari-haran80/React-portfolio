import React from "react";

const PageFooter = () => {
    return (
        <>
            <div className="Footer">
                <div className="Icons">
                    <a href="https://www.instagram.com/heart_stoler_hari/" className="Links" target="black"><i className="fa-brands fa-instagram" style={{ color: '#e50bab'}}></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100009078732441" className="Links" target="black"><i class="fa-brands fa-facebook-f" style={{ color: 'blue'}}></i></a>
                    <a href="https://github.com/hari-haran80" className="Links" target="black"><i class="fa-brands fa-github" id="fa-github" style={{ color: 'black'}}></i></a>
                    <a href="https://www.linkedin.com/in/hari-haran-8281351a8/" className="Links" target="black"><i class="fa-brands fa-linkedin-in" style={{ color: 'blue'}}></i></a>
                </div>
                <div className="List">
                    <ul>
                        <li><a href="#about">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                    </ul>
                </div>
                <div className="CopyRights">
                    <p>&copy; Time to Programe | Happy Coding </p>
                </div>
            </div>
        </>
    )
}

export default PageFooter;