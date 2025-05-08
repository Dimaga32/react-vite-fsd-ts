//import classes from "./form.module.scss"
import { FormEvent, JSX } from "react"
import Form from "../../4_features/form"
export default function SubmitPageContent({
  formError,
  handleSubmit,
  formSuccess,
}: {
  formError: string
  formSuccess: string
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}): JSX.Element {
  return (
    <div className="w-[100%] min-h-1 pt-30 mt-[70px] flex flex-col justify-center items-center bg-[rgb(245,245,245)] border-b border-gray-300">
      <h1 className="font-serif font-bold text-6xl mb-15 text-center">
        Only CTA on the page
      </h1>
      <Form
        formError={formError}
        handleSubmit={handleSubmit}
        formSuccess={formSuccess}
      />
    </div>
  )
}
