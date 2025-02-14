import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import Header from "@/Components/Main/Header/header";
import Benefits from "@/Components/Main/BenefitsSection/benefitsSection";
import HowItWorks from "@/Components/Main/HowItWorksSection/howItWorks";
import Faq from "@/Components/Main/FAQ/faq";
import Price from "@/Components/Main/PricingTable/priceTable";
import Footer from "@/Components/Main/Footer/footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Header></Header>
     <Benefits></Benefits>
     <HowItWorks></HowItWorks>
     <Faq></Faq>
     <Price></Price>
     <Footer></Footer>
  </StrictMode>
);
