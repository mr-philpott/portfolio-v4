const Divider = ({grow}) => {
    return (
        <>
            <div className="divider-container">
                <h6>&lt; hr/ &gt;</h6>
                <div className="divider" style={grow}></div>
            </div>
        </>
    )
}

export default Divider
