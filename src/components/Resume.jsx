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
                    
                </div>
            </div>
        </>
    )
}

export default Resume
