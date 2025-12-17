import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectsListPage } from "@/pages/projects";
import { ProjectDetailsPage } from "@/pages/projects/[slug]";
import { InvoicePage } from "@/pages/invoice";
import { InvoiceAppendixPage } from "@/pages/invoice-appendix";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { CartProvider } from "@/contexts/CartContext";
import { useOverlayScrollbars } from "@/hooks/useOverlayScrollbars";

function App() {
  useOverlayScrollbars();
  
  return (
    <BrowserRouter>
      <CurrencyProvider>
        <CartProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<ProjectsListPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
            <Route path="/invoice" element={<InvoicePage />} />
            <Route path="/invoice/appendix" element={<InvoiceAppendixPage />} />
          </Routes>
        </CartProvider>
      </CurrencyProvider>
    </BrowserRouter>
  );
}

export default App;