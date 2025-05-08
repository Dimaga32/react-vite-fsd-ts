import SubmitPageContent from "./SubmitPage"
import { FormEvent, JSX } from "react"
export default function SubmitPage({
  formError,
  handleSubmit,
  formSuccess,
}: {
  formError: string
  formSuccess: string
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}): JSX.Element {
  return (
    <SubmitPageContent
      formError={formError}
      handleSubmit={handleSubmit}
      formSuccess={formSuccess}
    />
  )
}
