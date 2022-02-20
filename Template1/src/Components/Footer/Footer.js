import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import {FaFacebook,
        FaInstagram,
        FaTwitter,
        
        } from 'react-icons/fa'
import {FooterContainer, 
    FooterWrap, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    SocialIcon, 
    SocialIconLink
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>Burger</SocialLogo>
                    <SocialIcon>
                        <SocialIconLink href='/' target='-blank' aria-label='Facebook' rel='noopener noreferrer'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='-blank' aria-label='Instagram' rel='noopener noreferrer'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='-blank' aria-label='Twitter' rel='noopener noreferrer'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='-blank' aria-label='Facebook' rel='noopener noreferrer'>
                            <FaFacebook />
                        </SocialIconLink>
                    </SocialIcon>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;