import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Home } from "../components/Home";
import "../styles/index.css";

export function HomePage() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}
