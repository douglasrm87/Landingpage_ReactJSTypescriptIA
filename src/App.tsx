/**
 * Main application component that sets up global providers and routing.
 * 
 * - Wraps the app with React Query's `QueryClientProvider` for data fetching and caching.
 * - Provides tooltip functionality via `TooltipProvider`.
 * - Renders two toaster components for notifications: `Toaster` and `Sonner`.
 * - Uses React Router's `BrowserRouter` and `Routes` for client-side routing.
 * - Defines the main route (`/`) and a catch-all route for 404 pages.
 * Para rodar 

npm install    
npm install -g vite
npm run dev


 * 
 */
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
