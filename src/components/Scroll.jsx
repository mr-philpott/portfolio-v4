const Scroll = ({anim}) => {
    return (
        <>
            <div className="scroll" style={anim.fade(0, window.innerHeight / 1.30, 0)}>
                <div className="arrow">
                    <div className="sharp"></div>
                    <div className="sharp"></div>
                </div>
            </div>
        </>
    )
}

export default Scroll
