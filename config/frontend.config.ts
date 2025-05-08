import react from "@vitejs/plugin-react"
import dotenv from "dotenv"
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import dts from "vite-plugin-sass-dts"
dotenv.config({ path: path.resolve(process.cwd(), "config", ".dev.env") })

export const frontEndConfig = {
  server: {
    port: Number(process.env.frontend_port),
    open: true,
    proxy: {
      "/api": {
        target: process.env.backendurl,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    dts({
      enabledMode: ["development", "production"],
    }),
  ],
}
