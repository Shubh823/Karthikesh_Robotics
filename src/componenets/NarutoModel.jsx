import React from 'react';
import { Float, useGLTF } from '@react-three/drei';

const NarutoModel = (props) => {
    const { scene } = useGLTF('/models/cute_robot.glb'); // Ensure the path is correct

    return(

            <primitive object={scene} {...props} />
        
    );
};

export default NarutoModel;
