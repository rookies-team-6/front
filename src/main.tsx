import { createRoot } from "react-dom/client";
import App from "@app/App.tsx";
// import DevApp from "@app/DevApp.tsx"

if (import.meta.env.DEV) {
    const { worker } = await import("@shared/mock/browser");
    await worker.start();
}

// if (import.meta.env.DEV){
//     createRoot(document.getElementById("root")!).render(<DevApp />);
// }else{
createRoot(document.getElementById("root")!).render(<App />);
// }
