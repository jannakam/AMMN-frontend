import { PrimeReactProvider } from "primereact/api";
import { ThemeProvider } from "@/components/ThemeProvider.js";
import "primereact/resources/themes/arya-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Button } from "primereact/button";
import CTA from "@/components/Carousel";
import Login from "@/components/Login";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex">
        <MainContent />
      </div>
    </ThemeProvider>
  );
}
