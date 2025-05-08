//import classes from "./form.module.scss"
import { JSX } from "react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import MyButton from "../../6_shared/UI/button"
export default function MainWidgetContent(): JSX.Element {
  return (
    <>
      <div className=" flex-wrap w-full min-h-1 pt-12 mt-[70px] flex flex-col justify-center items-center md:flex-row xl:justify-between pb-16 pl-2 pr-2 sm:pl-16 sm:pr-16 bg-[rgb(245,245,245)] border-b border-gray-300 font-serif font-bold">
        <div className="mr-10 mb-10 mt-10  flex flex-col justify-center items-center max-w-[500px]   ">
          <p className="text-gray-700 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum ultricies, sem urna convallis metus, vel
            suscipit nibh lacus tincidunt ant
          </p>
        </div>
        <div className="ml-10 mr-10 w-[80vw] max-w-120 h-60 md:w-120 md:h-60">
          <LiteYouTubeEmbed
            id="dQw4w9WgXcQ"
            title="Rick Astley - Never Gonna Give You Up"
            poster="maxresdefault"
            noCookie={true}
          />
        </div>
      </div>
      <div className="text-6xl text font-bold mt-10 flex flex-col justify-center items-center ">
        <h2 className="w-full p-6 lg:p-8 rounded-md space-y-6 text-center overflow-hidden leading-tight">
          Also very important title
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm p-6">
          <div className="p-2 sm:p-3 md:p-16">
            <h4 className="text-xl">Title</h4>
            <p className="text-gray-500 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </p>
          </div>
          <div className="p-2 sm:p-3 md:p-16">
            <h4 className="text-xl">{` Title`}</h4>
            <p className="text-gray-500 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </p>
          </div>
          <div className="p-2 sm:p-3 md:p-16">
            <h4 className="text-xl">{` Title`}</h4>
            <p className="text-gray-500 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </p>
          </div>
          <div className="p-2 sm:p-3 md:p-16">
            <h4 className="text-xl">{` Title`}</h4>
            <p className="text-gray-500 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </p>
          </div>
          <div className="p-2 sm:p-3 md:p-16">
            <h4 className="text-xl ">{` Title`}</h4>
            <p className="text-gray-500 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </p>
          </div>
          <div className="p-2 sm:p-3 md:p-16">
            <h4 className="text-xl">{` Title`}</h4>
            <p className="text-gray-500 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </p>
          </div>
        </div>
        <div className="mt-10">
          <MyButton />
        </div>
      </div>

      <div className="w-full min-h-1 pt-10 mt-20 flex flex-col justify-center items-center bg-[rgb(245,245,245)] border-b border-gray-300 font-serif font-bold text-5xl">
        <h3 className="w-full p-6 lg:p-8 rounded-md space-y-6 text-center overflow-hidden leading-tight">
          Less important title
        </h3>
        <div className="mb-20">
          <MyButton />
        </div>
      </div>
    </>
  )
}
