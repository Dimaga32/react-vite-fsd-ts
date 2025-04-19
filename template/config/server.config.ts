import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(),"config", ".dev.env") });
export const serverConfig={
  server: {
    proxy: {
      "/api": {
        target: `${process.env.backendurl}${process.env.backend_port}`,
        changeOrigin: true,
        secure: false,
      },
    },
  }
};
