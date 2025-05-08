import styled from "@emotion/styled"
import { JSX } from "react"
import MyButton from "../../6_shared/UI/button"

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  height: 70px;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #d1d5db;

  @media (min-width: 640px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`

const Brand = styled.span`
  font-family: serif;
  font-weight: 700;
  font-size: 1.125rem; /* text-lg */

  @media (min-width: 640px) {
    font-size: 1.25rem; /* text-xl */
  }
  @media (min-width: 768px) {
    font-size: 1.5rem; /* text-2xl */
  }
  @media (min-width: 1024px) {
    font-size: 1.875rem; /* text-3xl */
  }
`

export default function MyHeader(): JSX.Element {
  return (
    <Header>
      <Brand>Some Company</Brand>
      <MyButton />
    </Header>
  )
}
