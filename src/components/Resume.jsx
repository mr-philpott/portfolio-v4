import { FaUser, FaSchool, FaMicrosoft, FaHardHat } from "react-icons/fa"

const Resume = ({anim}) => {
    const fadeIn = anim.fade(3000, 3450, 1, 0)
    const slideIn = anim.slide(3000, 3450, 0, -5, "rem")
    const growText = anim.grow(3350, 3750, 100, 0, "%")

    return (
        <>
            <div className="resume">
                <div className="resume-title" style={fadeIn}>
                    <h6>&lt; h3 &gt;</h6>
                    <h3 className="selc-red" style={slideIn}><span className="txt-red selc-red">R</span>esume</h3>
                    <h6>&lt; /h3 &gt;</h6>
                </div>
                <div className="resume-desc">
                    <h6>&lt; p &gt;</h6>
                    <p style={growText}>All of my qualifications gathered in one place</p>
                    <h6>&lt; /p &gt;</h6>
                </div>
                <div className="resume-children">
                    <div className="about" >
                        <div className="card" style={{
                        ...anim.fade(3300, 3800, 1, 0),
                        ...anim.slide(3300, 3800, 0, -10, "rem")
                        }}>
                            <div className="about-title">
                                <h6>&lt; h4 &gt;</h6>
                                <h4 className="selc-blue"><span className="txt-blue selc-blue">A</span>bout</h4>
                                <h6>&lt; /h4 &gt;</h6>
                            </div>
                            <div className="about-info">
                                <h6>&lt; /p &gt;</h6>
                                <p className="selc-alt">
                                    My name is <span className="und-blue selc-blue">Ethan Philpott</span>. 
                                    I am an aspiring programmer based in Arizona who works well with both <span className="und-blue selc-blue">front-end</span> and <span className="und-blue selc-blue">back-end</span> development.
                                    I enjoy making highly-unquine, interactive websites which visiters love.
                                    I am a detail-oreineted person who makes everything to the best of my ability no matter the task.
                                    Furthermore, I consider myself an avid problem solver who wont give up even in face of a difficult challenge.
                                </p>
                                <h6>&lt; /p &gt;</h6>
                            </div>
                        </div>
                        <div className="icons" style={{
                            ...anim.fade(3350, 3850, 1, 0),
                            ...anim.spin(3350, 3850, 0, -45, "deg")
                        }}>
                            <FaUser />
                        </div>
                    </div>

                    <div className="edu" >
                        <div className="icons" style={{
                            ...anim.fade(3900, 4400, 1, 0),
                            ...anim.spin(3900, 4400, 0, 45, "deg")
                        }}>
                            <FaSchool />
                        </div>
                        <div className="card" style={{
                        ...anim.fade(3850, 4350, 1, 0),
                        ...anim.slide(3850, 4350, 0, 10, "rem")
                        }}>
                            <div className="edu-title">
                                <h6>&lt; h4 &gt;</h6>
                                <h4 className="selc-red"><span className="txt-red selc-red">E</span>ducation</h4>
                                <h6>&lt; /h4 &gt;</h6>
                            </div>
                            <div className="edu-info">
                                <h6>&lt; /p &gt;</h6>
                                <p className="selc-alt">
                                    As a highschooler, I currently don't have much in terms of educational degrees. 
                                    However, for what I lack in degrees, I make up for in lots of <span className="selc-red und-red">hard work</span> and <span className="selc-red und-red">practice</span>.
                                    Furthermore, I am part of the coding CTE program at <span className="selc-red und-red">West-Mec</span>; 
                                    by the following school year, I will have graduated with a pletora of certifications.
                                </p>
                                <h6>&lt; /p &gt;</h6>
                            </div>
                       </div>
                        
                    </div>

                    <div className="cert">
                        <div className="card" style={{
                        ...anim.fade(4350, 4900, 1, 0),
                        ...anim.slide(4350, 4900, 0, -10, "rem")
                        }}>
                            <div className="cert-title">
                                <h6>&lt; h4 &gt;</h6>
                                <h4 className="selc-blue"><span className="txt-blue selc-blue">C</span>ertifications</h4>
                                <h6>&lt; /h4 &gt;</h6>
                            </div>
                            <div className="cert-info">
                                <h6>&lt; ul &gt;</h6>
                                <ul className="selc-alt">
                                    <li>
                                        <h6>&lt; li &gt;</h6>
                                        ???<span className="und-blue selc-blue">OSHA</span> General Industry - 2020
                                        <h6>&lt; /li &gt;</h6>
                                    </li>
                                    <li>
                                        <h6>&lt; li &gt;</h6>
                                        Microsoft Technology Associate <span className="und-blue selc-blue">(MTA)</span> - 2021
                                        <h6>&lt; /li &gt;</h6>
                                    </li>
                                </ul>
                                <h6>&lt; /ul &gt;</h6>
                            </div>
                        </div>
                        <div className="icons" style={{
                            ...anim.fade(4400, 4950, 1, 0),
                            ...anim.spin(4400, 4950, 0, -45, "deg")
                        }}>
                            <FaMicrosoft />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume
