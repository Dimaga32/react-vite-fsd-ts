import { JSX } from "react"
import SubmittedPageContent from "./SubmittedPage"
export default function SubmittedPage({
  serverDataAfterSubmit,
}: {
  serverDataAfterSubmit: string | null
}): JSX.Element {
  return <SubmittedPageContent serverDataAfterSubmit={serverDataAfterSubmit} />
}
