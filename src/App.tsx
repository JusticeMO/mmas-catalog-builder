import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Locks from "./pages/categories/Locks";
import ExteriorLocks from "./pages/categories/ExteriorLocks";
import InteriorLocks from "./pages/categories/InteriorLocks";
import Deadlocks from "./pages/categories/Deadlocks";
import BathroomLocks from "./pages/categories/BathroomLocks";
import WardrobeAccessories from "./pages/categories/WardrobeAccessories";
import BathroomAccessories from "./pages/categories/BathroomAccessories";
import KitchenAccessories from "./pages/categories/KitchenAccessories";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories/locks" element={<Locks />} />
          <Route
            path="/categories/exterior-locks"
            element={<ExteriorLocks />}
          />
          <Route
            path="/categories/interior-locks"
            element={<InteriorLocks />}
          />
          <Route path="/categories/deadlocks" element={<Deadlocks />} />
          <Route
            path="/categories/bathroom-locks"
            element={<BathroomLocks />}
          />
          <Route
            path="/categories/wardrobe-accessories"
            element={<WardrobeAccessories />}
          />
          <Route
            path="/categories/bathroom-accessories"
            element={<BathroomAccessories />}
          />
          <Route
            path="/categories/kitchen-accessories"
            element={<KitchenAccessories />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
