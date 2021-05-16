const Skill = ({icon, name}) => {
    return (
        <>
            <div className="skill">
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
