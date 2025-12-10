import React, {useRef, } from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";


const About = () => {
    // Gen random data
    const globeMethods = useRef(null);
    const [hasCopied, setHasCopied] = React.useState(false);

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="./assets/grid1.png" alt="mini-me" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Andre</p>
                            <p className="grid-subtext">
                                I am a Technical SEO Specialist & Web Developer who builds high-performance websites that rank. I bridge the gap between clean code and search engine visibility.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="knowledge specifics" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in Web framework and languages, primarily JavaScript/Typescript with react and next.js. Also dabbles on programming languages like Python and Java for an objected oriented learnings.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                ref={globeMethods}
                                onGlobeReady={() => globeMethods.current?.pointOfView({lng: 121.7740, lat: 12})}
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 12.8797, lng: 121.7740, text: 'Philippines', color: 'white' }]}
                                labelSize={4}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely and can adjust to any Timezones</p>
                            <p className="grid-subtext">I am based in the Philippines, can work remotely or on site depending on the opportunity provided.</p>
                            <a href="#contact"><Button name="Lets Work together" isBeam containerClass="w-full mt-10"/></a>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3"
                        className="w-full sm:h-[266px] h-fit object-contain"/>
                        <p className="grid-headtext">My Passion for Knowledge, Creation, and Coding</p>
                        <p className="grid-subtext">My Passion for Performance & Structure. I don't just write code; I architect Silo Structures, optimize Core Web Vitals, and implement Schema Markup to drive organic growth.</p>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About
