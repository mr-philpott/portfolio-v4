const Skill = ({icon, name, upFade}) => {
    return (
        <>
            <div className="skill" style={upFade}>
                <div className="skill-icon">
                    {icon}
                </div>
                <div className="skill-name">
                    <p>{name}</p>
                </div>
            </div>
        </>
    )
}

export default Skill
