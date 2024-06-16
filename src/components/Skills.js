import React, { useState } from "react";
import { SKILLS } from "../utils/skills";
import SkillCard from './SkillCard';
import SkillInfoCard from "./SkillInfoCard";

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
    
    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };

    return (
        <div className="SectionContainerDiv" id="skills">
            <section className="Skill-container">
                <h3>Technical Proficiency</h3>
                <div className="skill-content">
                    <div className="skills">
                        {SKILLS.map((item) => (
                            <SkillCard 
                                key={item.title}
                                iconUrl={item.icon}
                                title={item.title}
                                isActive={selectedSkill.title === item.title}
                                onClick={() => handleSelectSkill(item)}
                            />
                        ))}
                    </div>
                    <div className="skills-info">
                        <SkillInfoCard
                            heading={selectedSkill.title}
                            skills={selectedSkill.skills}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
