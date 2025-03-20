import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import Room from "../components/Room.jsx";
import CanvasLoad from "../components/CanvasLoad.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactModel from "../components/ReactModel.jsx";
import Cube from "../components/Cube.jsx";
import Ring from "../components/Ring.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {

    //useMediaQuery hook to allow models to be responsive
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    //creates function to manually calculate sizes and positions depending on the size
    const sizes = calculateSizes(isSmall,isMobile,isTablet);

    return (
      <div>
          <section className="min-h-screen w-full flex flex-col relative" id="home">
              <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                  <p className="sm:text-3xl text-xl text-white font-medium text-center font-generalsans">Hi, my name is Andre!</p>
                  <p className="hero_tag text-gray_gradient">Welcome to my portfolio</p>
              </div>
              <div className="w-full h-full absolute inset-0">
                  {//Create  a canvas to load a space where we create a scene to position our models
                      //
                      }
                  <Canvas className="w-full h-full">
                      <Suspense fallback={<CanvasLoad/>}>
                          {
                              // Create a camera which allow to view the 3D Models we create
                          }

                      <PerspectiveCamera makeDefault position={[0,0,30]}/>
                          {
                              //HeroCamera to allow configurations to the camera itself so it would be interactive
                          }
                           <HeroCamera isSmall={isSmall} isMobile={isMobile} isTablet={isTablet}>
                              <Room scale={sizes.deskScale}
                                    position={sizes.deskPosition}
                                    rotation={[0.4, 0,0]}
                                    />
                           </HeroCamera>
                          {
                              //Create a group to customize the positions of the models
                          }
                          <group>
                              <Target scale={sizes.targetScale} position={sizes.targetPosition}/>
                              <ReactModel position={sizes.reactLogoPosition}/>
                              <Ring position={sizes.ringPosition}/>
                              <Cube position={sizes.cubePosition} />
                          </group>
                          <ambientLight intensity={1}/>
                          <directionalLight position={[10,2,10]} intensity={2}/>
                      </Suspense>
                  </Canvas>
              </div>
              <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                  <a href="#contact" className="w-fit">
                      <Button name="Lets Work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96">

                      </Button>
                  </a>
              </div>
          </section>
      </div>
    )
}
export default Hero
