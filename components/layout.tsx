import AppBar from "./AppBar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <AppBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
