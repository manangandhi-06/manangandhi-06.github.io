/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import Image from './shared/Image'
import { Heading, Paragraph } from './shared/Typography'
import { SectionContainer, ContentContainer } from './shared/Containers'

import { BORDER_RADIUS, SHADOW, TRANSITION, COLORS } from '../styles/constants'
import Link from './shared/Link'

import GithubLogo from '../images/logos/github.png'
import InstagramLogo from '../images/logos/instagram.png'
import LinkedinLogo from '../images/logos/linkedin.png'
import TwitterLogo from '../images/logos/twitter.png'


const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const ContactCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 30px;
  align-items: center;
  justify-items: center;
`
const ContactCard = styled.div`
  box-shadow: ${SHADOW};
  border-radius: ${BORDER_RADIUS.card};
  padding: 20px;
  max-height: 100px;
  max-width: 100px;
  transition: ${TRANSITION};
  &:hover {
    transform: scale(1.06);
    cursor: pointer;
  }
`
const ContactCardImage = styled(Image)`
  height: 60px;
  width: 60px;
  background-color: ${COLORS.lightGray};
  border-radius: 8px;
`

const contactLinks = [
  { profile: 'https://github.com/manangandhi-06', logo: GithubLogo },
  { profile: 'https://www.linkedin.com/in/manan-gandhi-b85a48174/', logo: LinkedinLogo },
  { profile: 'https://www.instagram.com/gandhi_manan/', logo: InstagramLogo },
  { profile: 'https://twitter.com/Mannaaannn', logo: TwitterLogo },
]

const Contact = () => {
  const openLink = link => {
    let newPage = window.open(link, '_blank')
    newPage.focus()
  }

  return (
    <SectionContainer id="contact">
      <ContentContainer sx={{ gridGap: 30 }} numColumns={1}>
        <Description>
          <Heading>Contact</Heading>
          <Paragraph size="xlarge" weight="bold">
            Get in contact via{' '}
            <Link
              sx={{ color: COLORS.black }}
              href="mailto:gmanan724@gmail.com"
            >
              email
            </Link>{' '}
            or find me online
          </Paragraph>
        </Description>
        <ContactCards>
          {contactLinks.map(node => (
            <ContactCard onClick={() => openLink(node.profile)}>
              <ContactCardImage src={node.logo} />
            </ContactCard>
          ))}
        </ContactCards>
      </ContentContainer>
    </SectionContainer>
  )
}

export default Contact
