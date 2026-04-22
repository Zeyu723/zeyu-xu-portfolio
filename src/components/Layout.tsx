import type { ReactNode } from "react";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <CustomCursor />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
