import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";
import {MeshReflectorMaterial, OrbitControls, PerspectiveCamera} from "@react-three/drei";
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
                        <Canvas shadows={"soft"} camera={{position: [-8,12,12], fov:15}}>
                            {/*<PerspectiveCamera makeDefault position={[0,5,7]}/>*/}
                            <hemisphereLight intensity={0.15} groundColor="black" />
                            <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
                            <ambientLight intensity={0.25}/>
                            {/*<spotLight color={'#ffffff'}*/}
                            {/*           intensity={100}*/}
                            {/*           castShadow*/}
                            {/*           position={[0,5,7]}*/}
                            {/*           angle={0.5}*/}
                            {/*           penubra={1}/>*/}
                            <directionalLight position={[10,10,10]} intensity={1}/>
                            <OrbitControls enableZoom={true} maxPolarAngle={Math.PI/2} />
                            <Suspense fallback={<CanvasLoader />}>
                                <Developer position-y={-2} scale={2}/>
                            </Suspense>
                            <mesh position-y={-2} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                                <planeGeometry args={[50,50]} />
                                <MeshReflectorMaterial
                                    blur={[300, 30]}
                                    resolution={2048}
                                    mixBlur={1}
                                    mixStrength={180}
                                    roughness={1}
                                    depthScale={1.2}
                                    minDepthThreshold={0.4}
                                    maxDepthThreshold={1.4}
                                    color="#202020"
                                    metalness={0.8}
                                />
                            </mesh>
                        </Canvas>
                    </div>
                        <div className="work-content">
                            <div className="sm:py-10 py-5 sm:px-5 px2.5">
                                {workExperiences.map((item) => (
                                    <div key={item.id} className="work-content_container group">
                                        <div className="flex flex-col h-full justify-start items-center py-2">
                                            <div className="work-content_logo">
                                                {item.id == 3 ? <img src={item.icon} alt="logo" className="w-fit h-fit mt-4"/> : <img src={item.icon} alt="logo" className="w-fit h-fit"/>}
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
