// layouts/RootLayout.jsx
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-100 text-neutral-900">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" expand={false}  closeButton />
    </div>
  );
}
