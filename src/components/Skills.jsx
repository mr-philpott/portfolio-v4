import React, { useState } from 'react'

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaGithub } from "react-icons/fa"
import { SiJquery } from "react-icons/si"

import Skill from "./Skill"

const Skills = ({anim}) => {
    const fadeIn = anim.fade(250, 700, 1, 0)
    const slideIn = anim.slide(250, 700, 0, -5, "rem")

    const allSkills = {
        HTML: <FaHtml5 />,
        CSS: <FaCss3Alt />,
        JS: <FaJs />,
        React: <FaReact />,
        Github: <FaGithub />,
        SASS: <FaSass />,
        jQuery: <SiJquery />
    };

    return (
        <>
            <div className="skills">
                <div className="skills-title" style={fadeIn}>
                    <h6>&lt; h3 &gt;</h6>
                    <h3 className="selc-red" style={slideIn}><span className="txt-red selc-red">S</span>kills</h3>
                    <h6>&lt; /h3 &gt;</h6>
                </div>
                {
                    Object.keys(allSkills).map((skill, index) => (
                        <Skill 
                            name={skill}
                            icon={allSkills[skill]}
                            key={index}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Skills
