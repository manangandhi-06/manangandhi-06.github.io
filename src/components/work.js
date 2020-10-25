/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import Image from './shared/Image'
import Text from './shared/Text'
import Button from './shared/Button'
import { Heading, Paragraph } from './shared/Typography'
import {
  SectionContainer,
  ContentContainer,
  CardGrid,
} from './shared/Containers'
import ProjectCard from './ProjectCard'

import { COLORS } from '../styles/constants'

import HeroLeftSideBar from '../images/HeroLeftSideBar.svg'
import HeroRightSideBar from '../images/HeroRightSideBar.svg'


import SyntheticIcon from '../images/SyntheticIcon.svg'
import MoreIcon from '../images/MoreIcon.svg'


const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const IntroButton = styled(Button)`
  background-color: ${COLORS.darkBlue};
  padding: 20px 60px;
  letter-spacing: 2px;
`

const Hero = () => (
  <SectionContainer id="projects" backgroundFilled>
    <Image
      src={HeroLeftSideBar}
      sx={{ position: 'absolute', left: 0 }}
      lighten
    />
    <Image
      src={HeroRightSideBar}
      sx={{ position: 'absolute', right: 0 }}
      lighten
    />
    <ContentContainer style={{ gridGap: 30 }} numColumns={1}>
      <Description>
      <Text color="white" style={{ fontSize: 60 }} weight="bold">Projects</Text>
        <Paragraph color="white" size="xlarge" weight="bold">
          Some things I've built
        </Paragraph>
      </Description>
      <CardGrid>
        <ProjectCard
          icon={SyntheticIcon}
          title="Covid-19 Analysis"
          desc="The Project comprised of Exploratory Data Analysis with respect to the Covid situation in India. Then, analysis on the decisions that were taken by the government was carried out e.g. the effect was the 5-phased lockdown. Also, forecasting was performed using algorithms such as ARIMA and RNN."
        />
        <ProjectCard
          icon={MoreIcon}
          title="Touchless Interfaces using Depth-Sensing camera and Gesture Recognition."
          desc="We are trying to build an end-to-end data-driven deep-learning model to address the problem of gesture recognition, composed of an encoder network to encode germane hand features, and a classification model to decode the gestures from a string of encodings. Our approach aims to implement a hand pose estimation model to estimate 21 key hand-point coordinates in the image. With the added leverage of a depth map in RGBD images, a magnitude estimation module can also be developed to approximate the intensity of actions such as pinch-to-zoom."
        />
        <ProjectCard
          icon={SyntheticIcon}
          title="Hand-pose estimation and Gesture recognition"
          desc="Automatic detection and classification of dynamic hand gestures using Recurrent- CNN that help in preserving the spatio-temporal features across a large volume of frames. We used the 20bn-Jester dataset. This project was made as a part of the Machine learning course during the 6th Semester."
        />
        <ProjectCard
          icon={MoreIcon}
          title="Attention Span Detection"
          desc="A Project made during the Internal Hackathon for SIH. It tracks whether the student is attentive during the live session. It 
          gives a real-time update if the student is not attentive i.e he/she is yawning, feeling drowsy. Various features such as EyeBall       
          Tracking, Face detection, Drowsiness Detection have been implemented."
        /> 
        <ProjectCard
          icon={SyntheticIcon}
          title="HackInteract"
          desc="WebApp which allows students to interact with seniors and professors by contributing to projects and being a part of project teams using: ReactJS, Hasura and GraphQL. Students can also maintain their Own profile which comprises of the projects they have done and can list the skills they have. Professors can also maintain his/her profile and can list a new project which the students can view and apply for."  
        />
        <ProjectCard
          icon={MoreIcon}
          title="Healthify"
          desc="Webapp which connects the user to a particular dietician. The user connects with a dietician and the dietician then recommends a diet plan according to the user’s profile. The tech stack used was NodeJS, HTML, CSS and MySql."
        />     
        <ProjectCard
        icon={SyntheticIcon}
        title="E-yantra Robot"
        desc="Our team made a path-following robot for the competition E-Yantra organised by IIT-Bombay. We had to use Python, Embedded C and Atmega 2560."
        />
      </CardGrid>
       <Paragraph color="white" size="xlarge" weight="bold">
          To refer the code for the above projects, click on the button below. There, you can also find other projects made by me.
        </Paragraph>
          <div>
            <a href="https://github.com/manangandhi-06">
              <IntroButton>More</IntroButton>
            </a>
          </div>
    </ContentContainer>
  </SectionContainer>
)

export default Hero
