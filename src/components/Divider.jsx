const Divider = ({anim}) => {
    return (
        <>
            <div className="divider-container">
                <div className="divider" style={anim.growWidth(75, 500, 100, 0, "%")}></div>
            </div>
        </>
    )
}

export default Divider
