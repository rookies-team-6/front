import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),svgr()],
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "src") },
            { find: "@app", replacement: path.resolve(__dirname, "src/app") },
            {
                find: "@shared",
                replacement: path.resolve(__dirname, "src/shared"),
            },
            {
                find: "@widgets",
                replacement: path.resolve(__dirname, "src/widgets"),
            },
                        {
                find: "@pages",
                replacement: path.resolve(__dirname, "src/pages"),
            }
        ],
    },
});
