import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import ExteriorLocks from "./pages/ExteriorLocks";
import InteriorLocks from "./pages/InteriorLocks";
import Deadlocks from "./pages/Deadlocks";
import BathroomLocks from "./pages/BathroomLocks";
import KitchenAccessories from "./pages/KitchenAccessories";
import WardrobeAccessories from "./pages/WardrobeAccessories";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/exterior-locks" element={<ExteriorLocks />} />
          <Route path="/category/interior-locks" element={<InteriorLocks />} />
          <Route path="/category/deadlocks" element={<Deadlocks />} />
          <Route path="/category/bathroom-locks" element={<BathroomLocks />} />
          <Route path="/category/kitchen-accessories" element={<KitchenAccessories />} />
          <Route path="/category/wardrobe-accessories" element={<WardrobeAccessories />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
