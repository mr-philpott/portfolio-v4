const Title = ({scroll, anim}) => {
    const slideAnim = anim.slide(0, window.innerHeight, -20, 0, "rem")
    const fadeAnim = anim.fade(0, window.innerHeight / 1.30, 0, 1)

    return (
        <>
            <header style={fadeAnim}>
                <h6>&lt; header &gt;</h6>
                <div className="title" >
                    <h6>&lt; h1 &gt;</h6>
                    <h1 style={slideAnim}>
                        <div className="selc-blue"><span className="txt-blue selc-blue">E</span>than</div> 
                        <div className="push-right selc-red"><span className="txt-red selc-red">P</span>hilpott</div>
                    </h1>
                    <h6>&lt; /h1 &gt;</h6>
                </div>
                <div className="subheading">
                    <h6>&lt; h2 &gt;</h6>
                    <h2>A Young <span className="selc-blue und-blue">Programmer</span> Infatuated With <span className="selc-red und-red">Code</span></h2>
                    <h6>&lt; /h2 &gt;</h6>
                </div>
                <h6>&lt; /header &gt;</h6>
            </header>  
        </>
    )
}

export default Title
