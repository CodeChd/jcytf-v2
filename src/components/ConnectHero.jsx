import React from 'react'
import HeroComponent from './HeroComponent'

const ConnectHero = ({dataImg}) => {
  return (
    <header>
        <HeroComponent
         title="Get Connected"
         desc="No matter where you are in life, there is a place for you here"
         btnName="Join Us"
         href="ministry"
         className={dataImg}
        />
    </header>
  )
}

export default ConnectHero