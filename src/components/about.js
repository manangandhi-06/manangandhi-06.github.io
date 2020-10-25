/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import Image from './shared/Image'
import Button from './shared/Button'

import { UList, ListItem } from './shared/List'
import {
  ContentContainer,
  SectionContainer,
  CenteredContainer,
} from './shared/Containers'

import AboutMeLeftSideBar from '../images/AboutMeLeftSideBar.svg'
import AboutMeRightSideBar from '../images/AboutMeRightSideBar.svg'
import manan from '../../content/assets/manan.png'
import manan2 from '../../content/assets/manan2.png'

import { Heading, Paragraph } from './shared/Typography'
import { COLORS, BORDER_RADIUS, MEDIA_QUERIES } from '../styles/constants'

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const AboutDescription = styled.div``

const IntroButton = styled(Button)`
  background-color: ${COLORS.darkBlue};
  padding: 20px 60px;
  letter-spacing: 2px;
`

const LargeImage = styled(Image)`
  @media (max-width: ${MEDIA_QUERIES['desktop']}px) {
    display: none;
  }
`

const SmallImage = styled(Image)`
  @media (min-width: ${MEDIA_QUERIES['mobile']}px) {
    display: none;
  }
`

const About = () => (
  <SectionContainer id="about">
    <Image
      src={AboutMeLeftSideBar}
      sx={{ position: 'absolute', left: 0, transform: 'translateY(-50px)' }}
      lighten
    />
    <Image
      src={AboutMeRightSideBar}
      sx={{ position: 'absolute', right: 0, transform: 'translateY(-50px)' }}
      lighten
    />
    <ContentContainer numColumns={2}>
      <AboutMeContainer>
        <Heading>About Me</Heading>
        <AboutDescription>
          <Paragraph>
            Hello! I’m a Full Stack Developer. I have a keen interest of exploring the different domains of Data Science. 
          </Paragraph>
          <Paragraph>Here are some things I'm experienced with:</Paragraph>
          <UList style={{ color: COLORS.black }}>
            <ListItem>Python</ListItem>
            <ListItem>C</ListItem>
            <ListItem>C++</ListItem>
            <ListItem>R</ListItem>
            <ListItem>SQL</ListItem>
            <ListItem>Tableau</ListItem>
            <ListItem>Keras</ListItem>
            <ListItem>Tensorflow</ListItem>
            <ListItem>PyTorch</ListItem>
            <ListItem>Javascript</ListItem>
            <ListItem>ReactJS</ListItem>
            <ListItem>Hasura</ListItem>
            <ListItem>NodeJS</ListItem>
            <ListItem>GraphQL</ListItem>
            <ListItem>BootStrap4</ListItem>
            <ListItem>Git</ListItem>
          </UList>
        </AboutDescription>
        {/* <div>
            <a href="">
              <IntroButton>Resume</IntroButton>
            </a>
        </div> */}
      </AboutMeContainer>
      <CenteredContainer>
        <LargeImage src={manan2}/>
      </CenteredContainer>
    </ContentContainer>
  </SectionContainer>
)

export default About
