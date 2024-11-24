import './Skills.css';

const Skills = () => {
    const skills = ['React.js', 'MongoDB', 'DBMS', 'HTML', 'CSS', 'JavaScript', 'Postman API', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'Python'];

    return (
        <div id="skills" className="skills">
            <h2>My Skills</h2>
            <div className="skills-list">
                {skills.map(skill => (
                    <div className="skill" key={skill}>{skill}</div>
                ))}
            </div>
        </div>
    );
};

export default Skills;