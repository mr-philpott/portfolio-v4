const Project = ({thumbnail, desc, name, link, fadeSlide}) => {
    return (
        <>
            <div className="project" style={fadeSlide}>
                <a href={link} target="_blank">
                    <div className="project-thumbnail">
                        {thumbnail}
                    </div>
                    <div className="project-details">
                        <div className="project-name">
                            {name}    
                        </div>   
                        <div className="project-desc">
                            {desc}    
                        </div> 
                    </div>    
                </a>
            </div>   
        </>
    )
}

export default Project
