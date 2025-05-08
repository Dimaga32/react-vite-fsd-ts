//import classes from "./form.module.scss"
import { FormEvent, JSX } from "react"
import { Button, TextField } from "@mui/material"
export default function FormContent({
  formError,
  handleSubmit,
  formSuccess,
}: {
  formError: string
  formSuccess: string
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}): JSX.Element {
  return (
    <form
      className="w-full max-w-md lg:max-w-lg p-6 lg:p-8 rounded-md border bg-white border-gray-200 shadow-sm space-y-6 text-base lg:text-lg mb-30 "
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block mb-1 font-medium text-gray-700">Name</label>
        <TextField
          placeholder="Value"
          variant="outlined"
          type="text"
          fullWidth
          size="medium"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
          name="name"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Email</label>
        <TextField
          placeholder="Value"
          variant="outlined"
          type="email"
          fullWidth
          size="medium"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
          name="email"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Message</label>
        <TextField
          placeholder="Value"
          variant="outlined"
          type="text"
          fullWidth
          multiline
          minRows={4}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
          name="message"
        />
      </div>
      {formError && (
        <span className="text-red-600 text-lg font-normal block text-center">
          {formError}
        </span>
      )}
      {formSuccess && (
        <span className="text-green-600 text-lg font-normal block text-center">
          {formSuccess}
        </span>
      )}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#2c2c2c",
          borderRadius: "8px",
          textTransform: "none",
          paddingTop: "12px",
          paddingBottom: "12px",
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "#1e1e1e",
            boxShadow: "none",
          },
        }}
      >
        Submit
      </Button>
    </form>
  )
}
