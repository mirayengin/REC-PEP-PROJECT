import React from 'react'
import { Image } from 'react-bootstrap'
import NavbarComp from '../../components/nav/Navbar'
import karisik from "../../assets/karışık-kebap.jpg";
import { AboutDiv, ContainertDiv } from './About.style';

const About = () => {
  return (
    <ContainertDiv>
      <NavbarComp />
      <AboutDiv>
        <div>
          <Image style={{width:"50%"}} src={karisik} alt=""/>
        </div>
        <p className='mt-5 mx-4'>Kebap, mangalda meşe kömüründe veya odun fırınında, ayrıca günümüzde fırınlarda da pişirilerek yenen et yemeklerine verilen isimdir. Doğrudan doğruya ateşin üzerinde tutularak ya da bir kap içinde susuz olarak pişirilir.Bu yemeklerin çoğu ızgarada pişirilmiş olsa da, tas kebabı gibi sulu yemeklere de kebap denir. Böyle yemekleri yapan lokantalara kebapçı denir. Et olarak çoğunlukla koyun veya dana eti kullanılır.</p>
      </AboutDiv>
    </ContainertDiv>
  )
}

export default About