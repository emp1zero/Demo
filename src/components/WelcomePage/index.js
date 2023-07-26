import React,{useState} from "react"
import { Button } from '../ButtonElement';
import video from '../../videos/video2.mp4'
import { WelcomeBg,
    WelcomeBtnWrapper,
    WelcomeContainer,
    ArrowForward,
    ArrowRight,
    WelcomeContent,
    WelcomeH1,
    WelcomeP,VideoBg } from "./WelcomeStyles"

const WelcomePage = () => {
    const [hover,setHover]=useState(false)
    const onHover=()=>{
        setHover(!hover)
    }
      return (
        <WelcomeContainer>
            <WelcomeBg>
    <VideoBg autoPlay  muted  src={video} type='video/mp4'/>
            </WelcomeBg>
            <WelcomeContent>
                <WelcomeH1>Build up and Suit Up</WelcomeH1>
                <WelcomeP>
                    Become a member today and 
                    receive free membership for a month
                </WelcomeP>
                <WelcomeBtnWrapper>
                    <Button to='signup' 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>Get Started{hover ? <ArrowRight/>:<ArrowForward/>}
                    </Button>
                </WelcomeBtnWrapper>
            </WelcomeContent>
            </WelcomeContainer>
      )
    }
    
    export default WelcomePage