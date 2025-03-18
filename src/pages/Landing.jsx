import './Landing.css';
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faJs } from "@fortawesome/free-brands-svg-icons";

function Landing() {
    const [navColor, setNavColor] = useState("black");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const projects = [
        {
            link: "https://github.com/AllinRoshya/EMS",
            img: "https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193226/employee_dbmggf.jpg",
            title: "Employee Management System",
            tooltip: "Java (OOPs)",
            category: "java",
        },
        {
            link: "https://github.com/AllinRoshya/RMS",
            img: "https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193227/maxresdefault_ete0km.jpg",
            title: "Restaurant Management System",
            tooltip: "Java (OOPs)",
            category: "java",
        },
        {
            link: "https://github.com/rajkumarkvr/GitGrove_backend",
            img: "https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193227/Git_Grove_ikbtq0.jpg",
            title: "Git Grove",
            tooltip: "Java (Advanced)",
            category: "java",
          },
          {
              link: "https://github.com/AllinRoshya/Thread",
              img: "https://res.cloudinary.com/dcqy9shzk/image/upload/v1742211265/download_3_f3sm2a.jpg",
              title: "Race",
              tooltip: "Java (Advanced)",
              category: "java",
          },
          {
              link: "https://github.com/AllinRoshya/Alarm",
              img: "https://res.cloudinary.com/dcqy9shzk/image/upload/v1742213064/flat-design-vector-icon-isolated-background-cartoon-alarm-clock-ringing-wake-up-morning-concept-cartoon-alarm-clock-ringing-91972142_ttqc3z.webp",
              title: "Alarm",
              tooltip: "Java (Advanced)",
              category: "java",
          },
          
        {
            link: "https://allink-5402-8443.zcodeusers.in/QUIZ%20MAKER/start.html",
            img: "https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193227/star_fs6hv6.png",
            title: "Quiz Maker",
            tooltip: "JavaScript",
            category: "js",
        },
        
        {
            link: "https://allink-7273-8443.zcodeusers.in/jsAssignment023/",
            img: "https://res.cloudinary.com/dcqy9shzk/image/upload/v1742212352/download_5_frc6dp.jpg",
            title: "Rock Paper Scissors Lizard Spock",
            tooltip: "JavaScript",
            category: "js",
        },
        {
            link: "https://allink-7273-8443.zcodeusers.in/MYPROJECT/Home.html",
            img: "https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193227/logo_zlqqod.png",
            title: "Royal Challengers Bangalore",
            tooltip: "HTML/CSS",
            category: "htmlcss",
        },
        {
            link: "https://allink-7273-8443.zcodeusers.in/Assignment019/index1.html",
            img: "https://res.cloudinary.com/dcqy9shzk/image/upload/v1742275281/Screenshot_from_2025-03-18_10-50-12_abqytj.png",
            title: "HyperSpace",
            tooltip: "HTML/CSS",
            category: "htmlcss",
        },
        {
            link: "https://scratch.mit.edu/projects/1041087381",
            img: "https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193230/bm_guco3x.svg",
            title: "Scratch Project",
            tooltip: "Scratch",
            category: "scratch",
        },
        {
            link: "https://scratch.mit.edu/projects/1030525521/",
            img: "https://res.cloudinary.com/dcqy9shzk/image/upload/v1742276102/b_cydbmu.avif",
            title: "Clock",
            tooltip: "Scratch",
            category: "scratch",
        }
    ];

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
                    setNavColor("black");
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

    const filteredProjects = selectedCategory === "all"
        ? projects
        : projects.filter((proj) => proj.category === selectedCategory);

    return (
        <>
            {/* Navigation Bar */}
            <nav className="navbar">
                <h1>My Portfolio</h1>
                <ul className="nav-links">
                    <li><Link to="aboutme" smooth={true} duration={600}>About</Link></li>
                    <li><Link to="skills" smooth={true} duration={600}>Skills</Link></li>
                    <li><Link to="projects" smooth={true} duration={600}>Projects</Link></li>
                </ul>
            </nav>

            {/* About Me */}
            <section id="aboutme">
                <div className="aboutme-content">
                    <h2 className="name">I am Allin Roshya</h2>
                    <h2 className="dev">Backend Developer</h2>
                    <p className='para'>I love solving problems and building efficient backend systems. Always eager to learn and improve, I enjoy making code faster and more reliable. Passionate about turning challenges into seamless solutions!</p>
                </div>
                <img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193230/img_mbjrfk.png" className="profile-image" alt="Profile" />
            </section>

            {/* Skills */}
            <section id="skills">
                <h2 className="name">Skills</h2>
                <div className="bar"></div>
                <div className="skills-wrapper">
                    <span className="skill"><FontAwesomeIcon icon={faJava} className="icon java-icon" /> Java</span>
                    <span className="skill"><FontAwesomeIcon icon={faJs} className="icon js-icon" /> JavaScript</span>
                    <span className="skill"><img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" className="icon" alt="MySQL" />MySQL</span>
                    <span className="skill"><FontAwesomeIcon icon={faReact} className="icon react-icon" /> React</span>
                  
                    
                    <span className="skill"><img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193227/htmlandcss_qfsxuz.svg" className="icon" alt="HTML/CSS" /> HTML/CSS</span>
                    <span className="skill"><img src="https://res.cloudinary.com/dcqy9shzk/image/upload/v1742193227/scratch_c9gfbj.png" className="icon" alt="Scratch" /> Scratch</span>
                </div>
            </section>

            {/* Projects */}
            <section id="projects">
                <h2 className="name">Projects</h2>
                <div className="project-filters">
  <button 
    onClick={() => setSelectedCategory('all')}
    className={selectedCategory === 'all' ? 'active' : ''}
  >
    All
  </button>
  <button 
    onClick={() => setSelectedCategory('java')}
    className={selectedCategory === 'java' ? 'active' : ''}
  >
    Java
  </button>
  <button 
    onClick={() => setSelectedCategory('js')}
    className={selectedCategory === 'js' ? 'active' : ''}
  >
    JavaScript
  </button>
  <button 
    onClick={() => setSelectedCategory('htmlcss')}
    className={selectedCategory === 'htmlcss' ? 'active' : ''}
  >
    HTML & CSS
  </button>
  <button 
    onClick={() => setSelectedCategory('scratch')}
    className={selectedCategory === 'scratch' ? 'active' : ''}
  >
    Scratch
  </button>
</div>


                <div className="projects-wrapper">
  {projects
    .filter(proj => selectedCategory === 'all' || proj.category === selectedCategory)
    .map((proj, index) => (
      <a key={index} href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
        <article className="project-card">
          <img src={proj.img} className="logo" alt={proj.title} />
          <h3>{proj.title}</h3>
          <span className="tooltip">{proj.tooltip}</span>
        </article>
      </a>
    ))}
</div>

            </section>
            <h5 className='contact'>Contact</h5>
<footer className="footer">
  <p>ZS ID: ZSTTK382</p>
  <p>Mail ID: allin.k@zohocorp.com</p>
  <p>Phone Number: 8072019379</p>
</footer>

        </>
    );
}

export default Landing;
