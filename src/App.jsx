import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";

export default function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,var(--grad-start),var(--grad-end))] text-text">

      <Header />

      {/* Espaciador para evitar solapamiento */}
      <div className="header-spacer"></div>

      <main>
        <AppRouter />
      </main>

      <Footer />
    </div>
  );
}
