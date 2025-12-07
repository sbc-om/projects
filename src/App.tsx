import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { ProjectsListPage } from "@/pages/projects";
import { ProjectDetailsPage } from "@/pages/projects/[slug]";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { useOverlayScrollbars } from "@/hooks/useOverlayScrollbars";

function App() {
  useOverlayScrollbars();
  
  return (
    <BrowserRouter>
      <CurrencyProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsListPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        </Routes>
      </CurrencyProvider>
    </BrowserRouter>
  );
}

export default App;