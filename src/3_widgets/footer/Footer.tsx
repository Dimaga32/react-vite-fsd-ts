import styled from "@emotion/styled"
import { JSX } from "react"

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
`

const FooterText = styled.span`
  font-family: serif;
  font-weight: 700;
  font-size: 1.25rem; /* text-xl */
  margin-bottom: 5rem;

  @media (min-width: 640px) {
    font-size: 1.5rem; /* sm:text-2xl */
  }
`

const DownDiv = styled.div`
  width: 100%;
  height: 7.5rem; /* h-30 */
  background-color: rgb(44, 44, 44);
`

export default function FooterContent({
  IsDownDiv = true,
}: {
  IsDownDiv?: boolean
}): JSX.Element {
  return (
    <Footer>
      <FooterText>Some Company 2024</FooterText>
      {IsDownDiv && <DownDiv />}
    </Footer>
  )
}
