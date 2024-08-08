import React from 'react'
import Banner4 from '../../Componets/DCP CCTV/Banner4'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'
import Camera2 from '../../Componets/DCP CCTV/Camera2/Camera2'
import Came2Spec from '../../Componets/DCP CCTV/Camera2/Came2Spec'

const DCPB1200M = () => {
  return (
    <div>
      <>
    <Helmet>
      <link rel="icon" href={Facicon} />
    </Helmet>
    <Banner4 />
    <Camera2/>
    <Came2Spec/></>
    </div>
  )
}

export default DCPB1200M
