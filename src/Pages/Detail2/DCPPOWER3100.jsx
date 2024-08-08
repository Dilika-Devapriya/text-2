import React from 'react'
import Banner3 from '../../Componets/DCP UPS/Banner3'
import UPS4 from '../../Componets/DCP UPS/USP4/UPS4'
import UPS4Spec from '../../Componets/DCP UPS/USP4/UPS4Spec'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'


const DCPPOWER3100 = () => {
  return (
    <div>
      <>
        <Helmet>
          <link rel="icon" href={Facicon} />
        </Helmet>
        <Banner3 />
        <UPS4 />
        <UPS4Spec />
      </>
    </div>
  )
}

export default DCPPOWER3100
