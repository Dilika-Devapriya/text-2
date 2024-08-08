import React from 'react'
import Banner3 from '../../Componets/DCP UPS/Banner3'
import UPS1 from '../../Componets/DCP UPS/UPS1/UPS1'
import UPS1Spec from '../../Componets/DCP UPS/UPS1/UPS1Spec'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'

const DCPVersion20 = () => {
  return (
    <>
    <Helmet>
      <link rel="icon" href={Facicon} />
    </Helmet>
    <Banner3 />
    <UPS1/>
    <UPS1Spec/>
    </>
  )
}

export default DCPVersion20

