import React, { useState } from 'react'

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaGithub } from "react-icons/fa"
import { SiJquery } from "react-icons/si"

import Skill from "./Skill"

const Skills = ({anim}) => {
    const fadeIn = anim.fade(250, 700, 1, 0)
    const slideIn = anim.slide(250, 700, 0, -5, "rem")
    const skillsSlide = anim.slide(1100, 1350, 15, -15, "%")
    const growText = anim.grow(600, 1000, 100, 0, "%")

    const skills = {
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
                <div className="skills-desc">
                    <h6>&lt; p &gt;</h6>
                    <p style={growText}>Some of the skills I have acquired over my years of learning</p>
                    <h6>&lt; /p &gt;</h6>
                </div>
                <div className="skills-children" style={skillsSlide}>
                    {
                        Object.keys(skills).map((skill, index) => (
                            <Skill 
                                name={skill}
                                icon={skills[skill]}
                                upFade={
                                    {
                                        ...anim.scroll(1500 + index * 75, 1750 + index * 75, -10, 0, "rem"),
                                        ...anim.fade(1500 + index * 75, 1750 + index * 75, 0, 1)
                                    }
                                }
                                key={index}
                                index={index}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Skills
