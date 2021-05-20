import React, { useState } from 'react'

import Nav from "./components/Nav";
import Title from "./components/Title"
import Scroll from "./components/Scroll"
import Skills from "./components/Skills";
import Divider from "./components/Divider";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
    const [scroll, setScroll] = useState(0)

    window.addEventListener("scroll", () => {
        setScroll(window.scrollY)
    })

    const scrollAnimations = {
        slide: (start, end, amt, inital, units, callback=undefined) => {
            if (scroll >= start && scroll <= end) {
                return {
                    transform: `translateX(${((1 - ((end - scroll) / (end - start))) * (amt - inital)) + inital}${units})`
                }
            } else if (callback) {
                return callback
            } else {
                if (scroll <= start) {
                    return {
                        transform: `translateX(${inital}${units})`
                    }
                } else {
                    return {
                        transform: `translateX(${amt}${units})`
                    }
                }
            }
        },
        scroll: (start, end, amt, inital, units, callback=undefined) => {
            if (scroll >= start && scroll <= end) {
                return {
                    transform: `translateY(${(1 - ((end - scroll) / (end - start))) * (amt - inital) + inital}${units})`
                }
            } else if (callback) {
                return callback
            } else {
                if (scroll <= start) {
                    return {
                        transform: `translateY(${inital}${units})`
                    }
                } else {
                    return {
                        transform: `translateY(${amt}${units})`
                    }
                }
            }
        },
        fade: (start, end, amt, inital, callback=undefined) => {
            if (scroll >= start && scroll <= end) {
                return {
                    opacity: `${inital + (amt - inital) * (1 - ((end - scroll) / (end - start)))}`
                }
            } else if (callback) {
                return callback
            } else {
                if (scroll <= start) {
                    return {
                        opacity: `${inital}`
                    }
                } else {
                    return {
                        opacity: `${amt}`
                    }
                }
            }
        },
        grow: (start, end, amt, inital, units, callback=undefined) => {
            if (scroll >= start && scroll <= end) {
                return {
                    width: `${inital + ((amt - inital) * (1 - ((end - scroll) / (end - start))))}${units}`
                }
            } else if (callback) {
                return callback
            } else {
                if (scroll <= start) {
                    return {
                        width: `${inital}${units}`
                    }
                } else {
                    return {
                        width: `${amt}${units}`
                    }
                }
            }
        },
        spin: (start, end, amt, inital, units, callback=undefined) => {
            if (scroll >= start && scroll <= end) {
                return {
                    transform: `rotateZ(${inital + ((amt - inital) * (1 - ((end - scroll) / (end - start))))}${units})`
                }
            } else if (callback) {
                return callback
            } else {
                if (scroll <= start) {
                    return {
                        transform: `rotateZ(${inital}${units})`
                    }
                } else {
                    return {
                        transform: `rotateZ(${amt}${units})`
                    }
                }
            }
        }
    }

    return (
        <div className="App"
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    console.log(scroll)
                }    
            }
        >
            <h6>&lt; body &gt;</h6>
            <div className="opening">
                <Nav />
                <Title 
                    anim={scrollAnimations}
                />
                <Scroll 
                    anim={scrollAnimations}
                />
            </div>

            <Divider 
                grow={scrollAnimations.grow(75, 500, 100, 0, "%")}
            />
            
            <main>
                <h6>&lt; main &gt;</h6>
                <article>
                    <h6>&lt; article &gt;</h6>
                    <section>
                        <h6>&lt; section &gt;</h6>
                        <Skills 
                            anim={scrollAnimations}
                        />
                        <h6>&lt; /section &gt;</h6>
                    </section>
                    <Divider 
                        grow={scrollAnimations.grow(1350, 1775, 100, 0, "%")}
                    />
                    <section>
                        <h6>&lt; section &gt;</h6>
                        <Projects 
                            anim={scrollAnimations}
                        />
                        <h6>&lt; /section &gt;</h6>
                    </section>
                    <Divider 
                        grow={scrollAnimations.grow(2800, 3425, 100, 0, "%")}
                    />
                    <section>
                        <h6>&lt; section &gt;</h6>
                        <Resume 
                            anim={scrollAnimations}
                        />
                        <h6>&lt; /section &gt;</h6>
                    </section>
                    <Divider 
                        grow={scrollAnimations.grow(5000, 5625, 100, 0, "%")}
                    />
                    <section>
                        <h6>&lt; section &gt;</h6>
                        <Contact 
                            anim={scrollAnimations}
                        />
                        <h6>&lt; /section &gt;</h6>
                    </section>
                    <h6>&lt; /article &gt;</h6>
                </article>
                <h6>&lt; /main &gt;</h6>
            </main>
            <h6>&lt; /body &gt;</h6>
        </div>
    );
}

export default App;
