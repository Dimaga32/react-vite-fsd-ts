import { JSX } from "react"
import classes from "./header.module.scss"
import Icon from "../../7_shared/UI/icon"
import MyButton from "../../7_shared/UI/button"
import MyHideBlock from "../../7_shared/UI/MyHideBlock"
import { FaBars } from "react-icons/fa"

export default function HeaderContent(): JSX.Element {
  return (
    <header
      className={`${classes.header} text-2xl text-white bg-[#1356a5] pr-[2vw] pl-[2vw] fixed w-[100vw]`}
    >
      <div className="text-center">
        <Icon
          className={`bg-[#1356a5] h-[12vh] ${classes.logo}`}
          href="https://www.sechenov.ru/"
          src="/images/Logo_sechenov.jpg"
        />
      </div>
      <MyHideBlock
        className={`text-center flex justify-between`}
        id="nav-header"
        dataFoldingSize="lg"
      >
        <span>Главная</span>
        <span>Гистология</span>
        <span>Анатомия</span>
        <span>Биология</span>
      </MyHideBlock>
      <div className="flex justify-center items-center ">
        <MyButton
          href="https://id.isu.sechenov.ru/auth/realms/sechenov/protocol/openid-connect/auth?response_type=code&display=page&client_id=morphology&scope=email%20profile%20openid%20roles%20phone%20microprofile-jwt%20web-origins%20address%20offline_access&redirect_uri=https://morphology.sechenov.ru/api/auth/morpho&state=https://morphology.sechenov.ru/"
          className="text-white text-center w-32 h-14 border-6 justify-self-center text-2xl rounded-4xl"
        >
          Вход
        </MyButton>

        <MyHideBlock.BurgerButton
          className={`w-[30px] h-[30px]`}
          id="nav-header"
          dataFoldingSize="lg"
        >
          <FaBars size={30} />
        </MyHideBlock.BurgerButton>
      </div>
    </header>
  )
}
