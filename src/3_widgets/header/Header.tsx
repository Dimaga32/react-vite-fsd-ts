import { JSX } from "react"
import classes from "./header.module.scss"
import Icon from "../../6_shared/UI/icon"
import MyButton from "../../6_shared/UI/button"
import MyHideBlock from "../../6_shared/UI/MyHideBlock"
import { FaBars } from "react-icons/fa"
import { useMockIsRegistered } from "../../6_shared/hooks/useMockIsRegistered"

export default function HeaderContent(): JSX.Element {
  const isRegistered = !useMockIsRegistered()
  return (
    <header
      className={`${classes.header} text-2xl text-white bg-[#1356a5] pr-[2vw] pl-[2vw] fixed w-[100vw]`}
    >
      <div>test</div>
      <div className="text-center ml-6">
        <Icon
          className={`bg-[#1356a5] h-[12vh] ${classes.logo}`}
          href="https://www.sechenov.ru/"
          src="/images/Logo_sechenov.jpg"
        />
      </div>
      <MyHideBlock
        className={`text-center flex justify-between relative h-[100%] mr-12 ${classes.hider}`}
        id="nav-header"
        dataFoldingSize="lg"
      >
        <a
          href={
            import.meta.env.FRONTEND_URL +
            import.meta.env.FRONTEND_PORT +
            `/main`
          }
          className="flex justify-center items-center w-[22%] h-[100%] hover:bg-blue-900"
        >
          Главная
        </a>
        <a
          href={
            import.meta.env.FRONTEND_URL +
            import.meta.env.FRONTEND_PORT +
            `/histology`
          }
          className="flex justify-center items-center w-[22%] h-[100%] hover:bg-blue-900"
        >
          Гистология
        </a>
        <a
          href={
            import.meta.env.FRONTEND_URL +
            import.meta.env.FRONTEND_PORT +
            `/anatomy`
          }
          className="flex justify-center items-center w-[22%] h-[100%] hover:bg-blue-900"
        >
          Анатомия
        </a>
        <a
          href={
            import.meta.env.FRONTEND_URL +
            import.meta.env.FRONTEND_PORT +
            `/biology`
          }
          className="flex justify-center items-center w-[22%] h-[100%] hover:bg-blue-900"
        >
          Биология
        </a>
      </MyHideBlock>
      <div className="flex justify-around items-center relative h-[100%]">
        {isRegistered ? (
          <>
            <Icon className={`w-[40%] block`}>1</Icon>
            <Icon className={`w-[40%] block`}>2</Icon>
          </>
        ) : (
          <MyButton
            href="https://id.isu.sechenov.ru/auth/realms/sechenov/protocol/openid-connect/auth?response_type=code&display=page&client_id=morphology&scope=email%20profile%20openid%20roles%20phone%20microprofile-jwt%20web-origins%20address%20offline_access&redirect_uri=https://morphology.sechenov.ru/api/auth/morpho&state=https://morphology.sechenov.ru/"
            className="text-white text-center w-32 h-12 border-6 justify-self-center text-2xl rounded-4xl hover:border-gray-300 hover:text-gray-300"
          >
            Вход
          </MyButton>
        )}

        <MyHideBlock.BurgerButton
          className={`w-[30px] h-[30px] ml-[30vw] hover: `}
          id="nav-header"
          dataFoldingSize="lg"
        >
          <FaBars size={30} />
        </MyHideBlock.BurgerButton>
      </div>
    </header>
  )
}
