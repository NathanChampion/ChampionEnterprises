// Copyright © 2024 Champion Estates LLC.
// SEL Confidential
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          return '[name][extname]';
        },
        // We group similar dependencies together to break apart the bundle into manageable chunks
        manualChunks: {
          reactDeps: [
            "react",
            "react-beautiful-dnd",
            "react-cookie",
            "react-dom",
            "react-router-bootstrap",
            "react-router-dom",
            "react-select"
          ],
          emotion: [
            "@emotion/css",
            "@emotion/react",
            "@emotion/styled"
          ],
          auth: [
            "@azure/msal-browser",
            "@azure/msal-react"
          ],
          swagger: ["swagger-ui"],
          mui: ["@mui/material"],
          componentLib: ["@infrastructure/react"],
          bluex: [
            "@bluex/react",
            "@bluex/react-icons"
          ]
        }
      }
    }
  },
  server: {
    host: '127.0.0.1',
    open: true,
    port: 8080
  },
})