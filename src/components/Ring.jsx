import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useEffect, useRef, useState } from 'react';

const Ring = ({ position }) => {
    const refList = useRef([]);
    const [ready, setReady] = useState(false);

    const getRef = useCallback((mesh) => {
        if (mesh && !refList.current.includes(mesh)) {
            refList.current.push(mesh);
        }
    }, []);

    const texture = useTexture('textures/rings.png');


    useEffect(() => {
        if (refList.current.length === 4) {
            setReady(true);
        }
    }, []);

    useGSAP(
        () => {
            if (!ready) return;

            refList.current.forEach((r) => {
                r.position.set(...position);
            });

            gsap
                .timeline({ repeat: -1, repeatDelay: 0.5 })
                .to(
                    refList.current.map((r) => r.rotation),
                    {
                        y: `+=${Math.PI * 2}`,
                        x: `-=${Math.PI * 2}`,
                        duration: 2.5,
                        stagger: { each: 0.15 },
                    },
                );
        },
        { dependencies: [ready, position] },
    );

    return (
        <Center>
            <group scale={0.8}>
                {Array.from({ length: 4 }, (_, index) => (
                    <mesh key={index} ref={getRef}>
                        <torusGeometry args={[(index + 1) * 0.5, 0.1, 16, 100]} />
                        <meshMatcapMaterial matcap={texture} toneMapped={false} />
                    </mesh>
                ))}
            </group>
        </Center>
    );
};

export default Ring;
