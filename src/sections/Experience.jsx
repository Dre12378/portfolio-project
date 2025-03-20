import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import CanvasLoader from "../components/Loading.jsx";
import Developer from "../components/Developer.jsx";

const Experience = () => {

    //My Avatar
    //GLB https://models.readyplayer.me/67dc54aa7f65c63ac7021cd6.glb

    return (
        <section className="c-space my-20" id="work">
            <div className="w-full text-white-600">
                <p className="head-text">My Experiences</p>
                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <PerspectiveCamera makeDefault position={[0,5,7]}/>
                            <ambientLight intensity={2}/>
                            <spotLight position={[0,0,30]} angle={0.15} penubra={1}/>
                            <directionalLight position={[10,10,10]} intensity={1}/>
                            <OrbitControls enableZoom={true} maxPolarAngle={Math.PI/2} />
                            <Suspense fallback={<CanvasLoader />}>
                                <Developer position-y={-3} scale={3}/>
                            </Suspense>
                        </Canvas>
                    </div>
                        <div className="work-content">
                            <div className="sm:py-10 py-5 sm:px-5 px2.5">
                                {workExperiences.map((item) => (
                                    <div key={item.id} className="work-content_container group">
                                        <div className="flex flex-col h-full justify-start items-center py-2">
                                            <div className="work-content_logo">
                                                {item.id == 3 ? <img src={item.icon} alt="logo" className="w-fit h-fit mt-4"/> : <img src={item.icon} alt="logo" className="w-fit h-fit mt-2.5"/>}
                                            </div>
                                            <div className="work-content_bar"/>
                                        </div>
                                        <div className="sm:p-5 px-2.5 py-5">
                                            <p className="font-bold text-white-800">{item.name}</p>
                                            <p className="text-sm mb-5">{item.pos}</p>
                                            <p className="group-hover:text-white transition ease-in-out duration-500">{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                </div>
            </div>
        </section>
    )
}
export default Experience
