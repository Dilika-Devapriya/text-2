import React from 'react'
import Banner3 from '../../Componets/DCP UPS/Banner3'
import UPS3 from '../../Componets/DCP UPS/UPS3/UPS3'
import UPS3Spec from '../../Componets/DCP UPS/UPS3/UPS3Spec'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'
const DCPPOWERRT = () => {
  return (
    <div>
       <>
        <Helmet>
          <link rel="icon" href={Facicon} />
        </Helmet>
        <Banner3 />
        <UPS3 />
        <UPS3Spec />
      </>
    </div>
  )
}

export default DCPPOWERRT
