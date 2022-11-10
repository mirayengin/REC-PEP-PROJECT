import React from 'react'
import { Image } from 'react-bootstrap'
import NavbarComp from '../../components/nav/Navbar'
import constPhoto from "../../assets/const.png";
import { AboutDiv, ContainertDiv } from './About.style';

const About = () => {
  return (
    <ContainertDiv>
      <NavbarComp />
      <AboutDiv>
        <div>
          <Image style={{width:"25%"}} src={constPhoto} alt=""/>
        </div>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reprehenderit error ad porro, labore tenetur.</p>
      </AboutDiv>
    </ContainertDiv>
  )
}

export default About