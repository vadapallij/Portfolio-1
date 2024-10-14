import { useEffect } from 'react';

function About() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h1 className="mt-4 p-3" style={{ backgroundColor: 'navy', color: 'white' }}>Jagadeesh Vadapalli</h1>
          <p className="lead">
            Hi, I am Jagadeesh Vadapalli, a passionate data analyst with experience in data visualization, 
            machine learning, and deriving insights from complex datasets. I am seeking a challenging 
            position to apply my skills in a dynamic team environment.
          </p>

          {/* Moving Skills */}
          <div className="moving-skills">
            <SkillItem text="React" link="/projects/react" />
            <SkillItem text="PHP" link="/projects/php" />
            <SkillItem text="Django" link="/projects/django" />
            <SkillItem text="Python" link="/projects/python" />
            <SkillItem text="SQL" link="/projects/sql" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillItem({ text, link }) {
  // Function to generate random motion
  useEffect(() => {
    const skillElement = document.getElementById(text);
    let interval = null;
    
    const randomMotion = () => {
      const randomX = Math.floor(Math.random() * 10) - 5; // Random left-right movement
      const randomY = Math.floor(Math.random() * 10) - 5; // Random up-down movement
      skillElement.style.transform = `translate(${randomX}px, ${randomY}px)`;
    };

    interval = setInterval(randomMotion, 100); // Move every 100ms

    // Stop motion on hover
    skillElement.addEventListener('mouseenter', () => clearInterval(interval));
    skillElement.addEventListener('mouseleave', () => {
      interval = setInterval(randomMotion, 100);
    });

    return () => clearInterval(interval); // Cleanup on unmount
  }, [text]);

  return (
    <a
      id={text}
      href={link}
      className="skill-item"
      style={{
        position: 'relative',
        margin: '20px',
        padding: '10px',
        border: '1px solid #000',
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      {text}
    </a>
  );
}

export default About;
