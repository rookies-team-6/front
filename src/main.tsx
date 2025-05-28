import { createRoot } from "react-dom/client";
import App from "@app/App.tsx";


if (import.meta.env.DEV) {
    const { worker } = await import('@shared/mock/browser');
    await worker.start();
}

createRoot(document.getElementById("root")!).render(<App />);
