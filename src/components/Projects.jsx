import espadaThumbnail from "./../assets/images/thumbnails/espada-thumbnail.PNG"
import svgThumbnail from "./../assets/images/thumbnails/svg-thumbnail.PNG"
import dinoThumbnail from "./../assets/images/thumbnails/dino-thumbnail.PNG"

import Project from "./Project"

const Projects = ({anim}) => {
    const fadeIn = anim.fade(1500, 1750, 1, 0)
    const slideIn = anim.slide(1500, 1750, 0, -5, "rem")
    const growText = anim.grow(1850, 2250, 100, 0, "%")

    const projects = {
        Espada: {
            thumbnail: <img src={espadaThumbnail} alt="A Samurai Website"/>,
            link: "https://ethanphilpott.github.io/Espada/",
            text: "A commissioned website for a fake security company; I served as lead designer among my three other teammates",
        },
        "SVG-Path-Editor": {
            thumbnail: <img src={svgThumbnail} alt="A SVG Path"/>,
            link: "https://ethanphilpott.github.io/SVG-Path-Editor/",
            text: "The SVG Path editor was a passion project because I found a distict lack of SVG editors solely for paths",
        },
        "Dino Dash": {
            thumbnail: <img src={dinoThumbnail} alt="A chrome dino extension"/>,
            link: "https://chrome-dino.ethanphilpott.repl.co/",
            text: "An extension to the orginal, offline chrome dino game made entirely in vanilla javascript",
        },
        "Harmony WIP": {
            thumbnail: <img src={dinoThumbnail} alt="A chrome dino extension"/>,
            link: "https://chrome-dino.ethanphilpott.repl.co/",
            text: "A music playing app using spodify's music library API",
        },
        "WeatherBro WIP": {
            thumbnail: <img src={dinoThumbnail} alt="A chrome dino extension"/>,
            link: "https://chrome-dino.ethanphilpott.repl.co/",
            text: "A weather app made using react",
        },
        "Filler": {
            thumbnail: <img src={dinoThumbnail} alt="A chrome dino extension"/>,
            link: "https://chrome-dino.ethanphilpott.repl.co/",
            text: "Ethan doesn't complete enough things",
        }

    }
    return (
        <>
            <div className="projects">
                <div className="projects-title" style={fadeIn}>
                    <h6>&lt; h3 &gt;</h6>
                    <h3 className="selc-blue" style={slideIn}><span className="txt-blue selc-blue">P</span>rojects</h3>
                    <h6>&lt; /h3 &gt;</h6>
                </div>
                <div className="projects-desc">
                    <h6>&lt; p &gt;</h6>
                    <p style={growText}>Personal and collaborative projects I have worked on</p>
                    <h6>&lt; /p &gt;</h6>
                </div>
                <div className="projects-children">
                    {
                        [Object.keys(projects).slice(0, 3), Object.keys(projects).slice(3, 6)].map((set, setIndex) => (
                            <div className="projects-children-row">
                                {
                                    set.map((proj, index) => (
                                        <Project 
                                            name={proj}
                                            desc={projects[proj].text}
                                            thumbnail={projects[proj].thumbnail}
                                            link={projects[proj].link}
                                            key={index}
                                            fadeSlide={
                                                setIndex === 0 ? {
                                                    ...anim.fade(1750 + index * 150, 2100 + index * 100, 1, 0),
                                                    ...anim.slide(1750 + index * 100, 2100 + index * 100, 0, -7.5, "rem")
                                                } : {
                                                    ...anim.fade(2200 + index * 150, 2550 + index * 100, 1, 0),
                                                    ...anim.slide(2200 + index * 100, 2550 + index * 100, 0, 7.5, "rem")
                                                }
                                            }
                                        />
                                    ))
                                }
                            </div>
                        ))
                        
                    }
                </div>
            </div>   
        </>
    )
}

export default Projects
