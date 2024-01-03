import React from 'react'
import { Canvas } from '@react-three/fiber'

const Cube = ({position, color, size}) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color}/>
    </mesh>
  )
}

function Home() {
  return (
    <div className='home-bg lg:text-9xl font-bold flex flex-col justify-center text-8xl'>
      <div className='pl-20 lg:pl-40'>
        <p>Hello,</p>
        <p>I am Gael Cruz</p>
      </div>
      <div id='cnavas-container'>
        <Canvas>
        <directionalLight position={[0, 0, 2]}/>
        <ambientLight />
        <Cube position={[3,0,0]} size={[4, 4, 2]} color={'green'}/>
        </Canvas>
      </div>
    </div>
  )
}

export default Home