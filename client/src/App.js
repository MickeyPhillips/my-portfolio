import "./App.css";
import * as THREE from 'three'
import { Canvas, useLoader, useThree, useFrame, extend } from "@react-three/fiber";
import { Environment, OrbitControls, Stars, Sky, Plane, useTexture, Stats, MapControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { Suspense, useRef, useMemo, useEffect, useState } from "react";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Overlay from "./Overlay";
import {Model} from './Desk_mickey_in_chair_typing'
import { Monitor } from "./Monitor_with_video";
import { LangPC } from "./Lang_pc";
import { MousePadOne } from "./Mouse_pad_one"; 
import { Mouse } from "./Mouse";
import { Logo } from "./Logo";
import { BrowserRouter } from "react-router-dom";


export default function App() {
  const [size, setWindowSize] = useState({})
   useEffect(() => { 

     updateDimensions();
    //  console.log(width)
     window.addEventListener('resize', updateDimensions);
     return () => 
       window.removeEventListener('resize',updateDimensions);
    }, [size.width, size.height])
    const updateDimensions = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setWindowSize({width: width, height: height})
      
    }
    console.log("Width: " +size.width+ " Height: "+size.height)
  return (
    <div className="App">
      <BrowserRouter>
      <Overlay size={size}/>
      <Canvas 
      // camera={{ fov: 45, position: [2, 2, -4] }}
      
      camera={size.width > 800 ? { fov: 45, position: [3, 1.5, 4]} : { fov: 45, position: [2, 2, -4] }}
      >
      
        <Suspense fallback={null}>
          <Model 
          position={[0,-0.5,0]}
          />
          <Logo scale={0.001} position={[-1, .953,.9]} rotation={[0, Math.PI / 1.4, 0]}/>
          <LangPC position={[-1.02, .2415,.9]} scale={0.03} rotation={[0, -Math.PI / 1.9, 0]}/>
          <Monitor position={[0,.2,1]} />
          <MousePadOne scale={0.002} position={[-.62,.20,.69]}/>
          <Mouse scale={1} position={[-.52,.20,.69]} rotation={[0, -Math.PI / 1.1, 0]}/>
          <ambientLight intensity={0.5} />
          <pointLight color="white" intensity={1.5} position={[10, 10, 10]} />
          {size.width > 800 ? (
            <OrbitControls 
            minDistance={3.15} 
            maxDistance={3.15}
            
            enablePan={false} 
            enableZoom={false}
            // autoRotate={true}
            
            />
          ) :
          (
            <OrbitControls 
            minDistance={3.15} 
            maxDistance={7}
            
            enablePan={false} 
            // enableZoom={false}
            // autoRotate={true}
            
            />
          )
          }
          
          
          {/* <Stats /> */}
          
        </Suspense>

      </Canvas>
      </BrowserRouter>
    </div>
  );
}
