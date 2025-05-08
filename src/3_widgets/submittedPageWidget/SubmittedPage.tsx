//import classes from "./form.module.scss"
import { JSX } from "react"
export default function SubmittedPageContent({
  serverDataAfterSubmit,
}: {
  serverDataAfterSubmit: string | null
}): JSX.Element {
  return (
    <div className="w-full min-h-1 pt-30 mt-[70px] flex flex-col justify-center items-center bg-[rgb(245,245,245)] border-b border-gray-300 font-serif font-bold text-6xl">
      <div className="w-full max-w-[488px] lg:max-w-[660px] p-6 lg:p-8 rounded-md space-y-6 mb-30 text-center overflow-hidden">
        {serverDataAfterSubmit}
      </div>
    </div>
  )
}
