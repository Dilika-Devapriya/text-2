import React from 'react'
import Banner4 from '../../Componets/DCP CCTV/Banner4'
import Camera4 from '../../Componets/DCP CCTV/Camera4/Camera4'
import Cam4Spec from '../../Componets/DCP CCTV/Camera4/Came4Spec'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'

const DCPXVR2116S = () => {
  return (
    <div>
      <>
    <Helmet>
      <link rel="icon" href={Facicon} />
    </Helmet>
    <Banner4 /><Camera4 /><Cam4Spec/></>
    </div>
  )
}

export default DCPXVR2116S
