import classes from "./form.module.scss"
import Footer from "../../3_widgets/footer"
import Header from "../../3_widgets/header"
import { useState, FormEvent, JSX } from "react"
import axios from "axios"
import SubmitPage from "../../3_widgets/submitPageWidget"
import SubmittedPage from "../../3_widgets/submittedPageWidget"

export default function HistologyContent(): JSX.Element {
  const [formError, setFormError] = useState("")
  const [formSuccess, setFormSuccess] = useState<"" | "Data has been sent!">("")
  const [serverDataAfterSubmit, setServerDataAfterSubmit] = useState<
    string | null
  >(null)
  const validation = (name: string, email: string, message: string) => {
    if (!name) {
      setFormError("please enter name")
      return false
    }
    if (!email) {
      setFormError("please enter email")
      return false
    }
    if (!email.includes("@")) {
      setFormError("email is invalid")
      return false
    }
    if (!message) {
      setFormError("please enter message")
      return false
    }
    setFormError("")
    return true
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string
    if (!validation(name, email, message)) return
    try {
      setFormSuccess("Data has been sent!")
      const res = await axios.post(
        `${import.meta.env.SERVER_URL}/api/user/form`,
        {
          name,
          email,
          message,
        }
      )

      setServerDataAfterSubmit(res.data as string)
    } catch (error) {
      setFormSuccess("")
      console.error("Ошибка при отправке формы:", error)
      setFormError("Something went wrong. Please try again later.")
    }
  }

  return (
    <div className={classes.mainBlock}>
      <Header />
      {serverDataAfterSubmit !== null && serverDataAfterSubmit !== "" ? (
        <SubmittedPage serverDataAfterSubmit={serverDataAfterSubmit} />
      ) : (
        <SubmitPage
          formError={formError}
          handleSubmit={handleSubmit}
          formSuccess={formSuccess}
        />
      )}
      <Footer />
    </div>
  )
}
