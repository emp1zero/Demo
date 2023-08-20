import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import{FaFacebook,FaTwitter,FaInstagram,
FaLinkedin,FaYoutube} from 'react-icons/fa'
import {
    FooterContainer,
    FooterLinksWrapper,
    FooterLink,
    FooterLinkTitle,
    FooterWrap,
    FooterLinkItems,
    FooterLinksContainer,
    SocialIconLink,
    SocialIcons,
    SocialLogo,SocialMediaWrap,
    SocialMedia,WebsiteRights
} from './FooterStyles'

const Footer = () => {

  const toggleHome=()=>{
    scroll.scrollToTop();
  }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>How it Works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink> 
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'>Destinations</FooterLink>
                            <FooterLink to='/'>Sponsorship</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Business</FooterLinkTitle>
                            <FooterLink to='/'>Provision</FooterLink>
                            <FooterLink to='/'>Invest</FooterLink>
                            <FooterLink to='/'>Procurement</FooterLink>
                            <FooterLink to='/'>Research</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/'>Submit Video</FooterLink>
                            <FooterLink to='/'>Ambassadors</FooterLink>
                            <FooterLink to='/'>Agency</FooterLink>
                            <FooterLink to='/'>Influencer</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'
                    onClick={toggleHome}>Pulse</SocialLogo>
                    <WebsiteRights>Pulse (C) {new Date().getFullYear()}
                       All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' 
                        aria-label='Facebook'>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/'  
                        aria-label='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/'  
                        aria-label='Youtube'>
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href='/'  
                        aria-label='Twitter'>
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='/' 
                        aria-label='Linkedin'>
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            </FooterWrap>
            </FooterContainer>
  )
}

export default Footer