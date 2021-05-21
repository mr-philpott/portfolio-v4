const Contact = ({ anim }) => {
    const fadeIn = anim.fade(5200, 5700, 1, 0)
    const slideIn = anim.slide(5200, 5700, 0, -5, "rem")
    const growText = anim.grow(5500, 5800, 100, 0, "%")

    return (
        <>
            <div className="contact">
                <div className="contact-title" style={fadeIn}>
                    <h6>&lt; h3 &gt;</h6>
                    <h3 className="selc-blue" style={slideIn}><span className="txt-blue selc-blue">C</span>ontact</h3>
                    <h6>&lt; /h3 &gt;</h6>
                </div>
                <div className="contact-desc">
                    <h6>&lt; p &gt;</h6>
                    <p style={growText}>Feel free to talk to me anytime</p>
                    <h6>&lt; /p &gt;</h6>
                </div>
                <div className="contact-children">
                    <div className="phone und-red">0000-000-000</div>
                    <div className="email und-blue">fight-me@tim.com</div>
                </div>
            </div>
        </>
    )
}

export default Contact
