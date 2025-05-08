import { Request, Response } from "express"

export function addFormController(req: Request, res: Response) {
  try {
    const { name } = req.body as { name: string }
    console.log(JSON.stringify(req.body))
    res.json(`Thank you for your interest, ${name}!`)
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message)
    } else {
      console.error("Unknown error", e)
    }
    res.status(500).send("Server error")
  }
}
