const Skill = ({icon, name, upFade, index}) => {
    return (
        <>
            <div className="skill" style={upFade}>
                <div className="skill-icon">
                    {icon}
                </div>
                <div className="skill-name">
                    <p className={index % 2 ? "selc-red" : "selc-blue"}>{name}</p>
                </div>
            </div>
        </>
    )
}

export default Skill
