import './Landing.css';
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";





function Landing() {
    const [navColor, setNavColor] = useState("black"); // Initial Navbar Color

    useEffect(() => {
        const changeNavbarColor = () => {
            const skillsSection = document.getElementById("skills");
            const projectsSection = document.getElementById("projects");
            const navbar = document.querySelector(".navbar");
    
            if (skillsSection && projectsSection) {
                const skillsPosition = skillsSection.offsetTop;
                const projectsPosition = projectsSection.offsetTop;
                const scrollPosition = window.scrollY + 100; 
    
                if (scrollPosition >= skillsPosition || scrollPosition >= projectsPosition) {
                    setNavColor("black");  // Set text color state
                    navbar.classList.add("light-navbar");
                } else {
                    setNavColor("white");
                    navbar.classList.remove("light-navbar");
                }
            }
        };
    
        window.addEventListener("scroll", changeNavbarColor);
        return () => window.removeEventListener("scroll", changeNavbarColor);
    }, []);
    
    return (
        <>
            {/* Navigation Bar */}
            <nav className="navbar">
                <h1>MyPortFolio</h1>
                <ul className="nav-links" >
                    <li><Link to="aboutme" smooth={true} duration={600}>About</Link></li>
                    <li><Link to="skills" smooth={true} duration={600}>Skills</Link></li>
                    <li><Link to="projects" smooth={true} duration={600}>Projects</Link></li>
                </ul>
            </nav>

          {/* About Me */}
<section id="aboutme">
    <div className="aboutme-content">
        <h2 className="name">I am Allin Roshya</h2>
        <h2 className="dev">Backend Trainee </h2>
        
    </div>
    <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193230/img_mbjrfk.png" className="profile-image" alt="Profile" />
</section>


            {/* Skills */}
            <section id="skills">
    <h2 className="name">Skills</h2>
    <div className="bar"></div>
    <div className="skills-wrapper">
        <span className="skill">
            <FontAwesomeIcon icon={faJava} className="icon java-icon" />
            Java
        </span>
        <span className="skill">
            <FontAwesomeIcon icon={faReact} className="icon react-icon" />
            React
        </span>
        <span className="skill">
            <FontAwesomeIcon icon={faJs} className="icon js-icon" />
            JavaScript
        </span>
        <span className="skill">
            <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193227/htmlandcss_qfsxuz.svg" 
            className="icon" alt="HTML/CSS" />
            HTML/CSS
        </span>
        <span className="skill">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" className="icon" alt="MySQL" />
            MySQL
        </span>
        <span className="skill">
            <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193227/scratch_c9gfbj.png" 
            className="icon" alt="Scratch" />
            Scratch
        </span>
    </div>
</section>
            {/* Projects */}
            <section id="projects">
    <h2 className="name">Projects</h2>
    <div className="projects-wrapper">
        
        <a href="https://github.com/AllinRoshya/EMS" target="_blank" rel="noopener noreferrer" className="project-link">
            <article className="project-card">
                <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193226/employee_dbmggf.jpg" className="logo" />
                <h3>Employee Management System</h3>
                <span className="tooltip">Java (OOPs)</span>
            </article>
        </a>

        <a href="https://github.com/AllinRoshya/RMS" target="_blank" rel="noopener noreferrer" className="project-link">
            <article className="project-card">
                <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193227/maxresdefault_ete0km.jpg" className="logo" />
                <h3>Restaurant Management System</h3> 
                <span className="tooltip">Data Structure</span>
            </article>
        </a>

        <a href="https://allink-5402-8443.zcodeusers.in/QUIZ%20MAKER/start.html" target="_blank" rel="noopener noreferrer" className="project-link">
            <article className="project-card">
                <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193227/star_fs6hv6.png" className="logo1" />
                <h3>Quiz Maker</h3>
                <span className="tooltip">JavaScript</span>
            </article>
        </a>

        <a href="https://allink-7273-8443.zcodeusers.in/MYPROJECT/Home.html" target="_blank" rel="noopener noreferrer" className="project-link">
            <article className="project-card">
                <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193227/logo_zlqqod.png" className="logo1" />
                <h3>Royal Challengers Bangalore</h3>
                <span className="tooltip">HTML/CSS</span>
            </article>
        </a>

        <a href="https://github.com/rajkumarkvr/GitGrove_backend" target="_blank" rel="noopener noreferrer" className="project-link">
            <article className="project-card">
                <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193227/Git_Grove_ikbtq0.jpg" className="logo1" />
                <h3>Git Grove</h3>
                <span className="tooltip">Java (Advanced)</span>
            </article>
        </a>

        <a href="https://scratch.mit.edu/projects/1041087381" target="_blank" rel="noopener noreferrer" className="project-link">
            <article className="project-card">
                <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193230/bm_guco3x.svg" className="logo" />
                <h3 className="proname">Scratch Project</h3>
                <span className="tooltip">Scratch</span>
            </article>
        </a>

         {/* Projects(6-12) */}

         <a href="https://github.com/AllinRoshya/Thread" target="_blank" rel="noopener noreferrer" className="project-link">
            <article className="project-card">
                <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742211265/download_3_f3sm2a.jpg" className="logo2" />
                <h3>Race</h3>
                <span className="tooltip">Java (Advanced)</span>
            </article>
        </a>

        <a href="https://github.com/AllinRoshya/Alarm" target="_blank" rel="noopener noreferrer" className="project-link">
            <article className="project-card">
                <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742213064/flat-design-vector-icon-isolated-background-cartoon-alarm-clock-ringing-wake-up-morning-concept-cartoon-alarm-clock-ringing-91972142_ttqc3z.webp" className="logo2" />
                <h3>Alarm</h3>
                <span className="tooltip">Java (Advanced)</span>
            </article>
        </a>
        

        <a href="https://allink-7273-8443.zcodeusers.in/jsAssignment023/" target="_blank" rel="noopener noreferrer" className="project-link">
            <article className="project-card">
                <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742212352/download_5_frc6dp.jpg" className="logo2" />
                <h3>Rock Paper Scissor Lizard Spock</h3> 
                <span className="tooltip">JavaScript</span>
            </article>
        </a>

       


    </div>
</section>


<div className="footer">CORP ID: allin.k@zohocorp.com</div>
        </>
    );
}

export default Landing;
