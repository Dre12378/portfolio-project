import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";

const HeroCamera = ({children, isMobile,isTablet, isSmall}) => {
    const groupRef= useRef();

    useFrame((state,delta) =>{
        if(isMobile || isTablet || isSmall){
            easing.damp3(groupRef.current.rotation, [state.pointer.y / 3, -state.pointer.x / 5, 18.85], 0.25, delta);
            easing.damp3(state.camera.position,[0,0,27], 1, delta);
        }else{
            easing.damp3(groupRef.current.rotation, [state.pointer.y / 3, -state.pointer.x / 5, 18.85], 0.1, delta);
            easing.damp3(state.camera.position,[0,0,33], 1, delta);
        }
    });


    return (
        <group ref={groupRef}>
            {children}
        </group>
    )
}
export default HeroCamera
