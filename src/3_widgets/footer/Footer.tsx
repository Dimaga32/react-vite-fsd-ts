import classes from "./footer.module.scss"
import { JSX } from "react"
export default function FooterContent(): JSX.Element {
  return (
    <footer className={`${classes.footer} text-white`}>
      <article className=" flex justify-around wrap-anywhere">
        <div className="items-center flex flex-col w-[25%]">
          <h5 className="text-center mb-2 ">Направления</h5>
          <hr className="w-[75%]  align-middle mx-auto border-t border-white border-[2px] opacity-40 mb-2" />
          <div className="flex wrap-anywhere justify-around w-full pr-8 pl-8">
            <a href="">Анатомия</a>
            <a href="">Гистология</a>
          </div>
        </div>
        <div className="items-center flex flex-col text-white w-[25%]">
          <h5 className="text-center mb-2">О нас</h5>
          <hr className="w-[75%] align-middle mx-auto border-t border-white border-[2px] opacity-40 mb-2" />
          <a href="" className="w-[60%] text-center">
            Раздел находится в разработке
          </a>
        </div>
        <div className="items-center flex flex-col text-white w-[25%]">
          <h5 className="text-center mb-2 ">Проекты</h5>
          <hr className="w-[75%]  align-middle mx-auto border-t border-white border-[2px] opacity-40 mb-2" />
          <a href="">Отзывы</a>
        </div>
        <div className="items-center flex flex-col text-white w-[25%]">
          <h5 className="text-center mb-2 ">Сотрудничество</h5>
          <hr className="w-[75%]  align-middle mx-auto border-t border-white border-[2px] opacity-40 mb-2" />
          <a href="">Контакты</a>
        </div>
      </article>
      <article className="ml-[3.125%]">
        <pre>
          {`Есть вопросы или предложения?
Напишите нам на почту:
samedov_n_sh@staff.sechenov.ru`}
        </pre>
      </article>
      <hr className="w-[93.75%]  align-middle mx-auto border-t border-white border-[2px] opacity-40 mt-8 mb-8" />
      <article className="ml-[3.125%]">1</article>
    </footer>
  )
}
