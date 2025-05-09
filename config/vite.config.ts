import { defineConfig } from "vite"
import { serverConfig } from "./server.config"
import { frontEndConfig } from "./frontend.config"
import path from "path"
import dotenv from "dotenv"
dotenv.config({ path: path.resolve(process.cwd(), "config", ".dev.env") })
import merge from "lodash.merge"
export default defineConfig(
  merge({}, frontEndConfig, serverConfig, {
    root: "src",
    publicDir: "../public",
    define: {
      "import.meta.env.SERVER_PORT": JSON.stringify(process.env.server_port),
      "import.meta.env.SERVER_URL": JSON.stringify(process.env.server_url),
      "import.meta.env.FRONTEND_PORT": JSON.stringify(
        process.env.frontend_port
      ),
      "import.meta.env.FRONTEND_URL": JSON.stringify(process.env.frontend_url),
    },
  })
)
