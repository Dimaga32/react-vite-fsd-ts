import classes from "./form.module.scss"
import Footer from "../../3_widgets/footer"
import Header from "../../3_widgets/header"
import { useState, FormEvent, JSX } from "react"
import axios from "axios"
import SubmitPage from "../../3_widgets/submitPageWidget"
import SubmittedPage from "../../3_widgets/submittedPageWidget"
import { Helmet } from "react-helmet-async"

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
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="SomeCompany.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Fill out the form to learn more about Some Company—our team, values, and how we can help you"
        />
        <title>About Some Company</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://158.160.116.75:3000/form" />
        <meta property="og:title" content="About Some Company" />
        <meta
          property="og:description"
          content="Fill out the form to learn more about Some Company—our team, values, and how we can help you."
        />
        <meta
          property="og:image"
          content="https://sun9-78.userapi.com/impf/aiodcAim-DiE-S2-aIqnZii-m23brlVxK9VDOw/SnYzepEmVng.jpg?size=1000x999&quality=95&sign=104d415d3ea58f0e1c9bac3577a5622b&c_uniq_tag=oRC774u3x7vmNtBHzt7TPOTgeb0sA8GYhLZJJszmHmw&type=album"
        />
        <meta property="og:site_name" content="Some Company" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SomeCompany" />
        <meta name="twitter:title" content="About Some Company" />
        <meta
          name="twitter:description"
          content="Fill out the form to learn more about Some Company—our team, values, and how we can help you"
        />
        <meta
          name="twitter:image"
          content="https://sun9-78.userapi.com/impf/aiodcAim-DiE-S2-aIqnZii-m23brlVxK9VDOw/SnYzepEmVng.jpg?size=1000x999&quality=95&sign=104d415d3ea58f0e1c9bac3577a5622b&c_uniq_tag=oRC774u3x7vmNtBHzt7TPOTgeb0sA8GYhLZJJszmHmw&type=album"
        />
      </Helmet>
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
    </>
  )
}
