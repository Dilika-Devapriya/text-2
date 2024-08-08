import React from 'react'
import Banner4 from '../../Componets/DCP CCTV/Banner4'
import Camera1 from '../../Componets/DCP CCTV/Camera1/Camera1'
import Cam1Spec from '../../Componets/DCP CCTV/Camera1/Cam1Spec'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'


const DCPB1200P = () => {
  return (
    <>
    <Helmet>
      <link rel="icon" href={Facicon} />
    </Helmet>
    <Banner4 /><Camera1 /><Cam1Spec/></>
  )
}

export default DCPB1200P