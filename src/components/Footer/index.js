import React from 'react'
import {
    FooterContainer,
    FooterLinksWrapper,
    FooterLink,
    FooterLinkTitle,
    FooterWrap,
    FooterLinkItems,
    FooterLinksContainer
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it Works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink> 
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it Works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink> 
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it Works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink> 
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it Works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink> 
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            </FooterWrap>
            </FooterContainer>
  )
}

export default Footer