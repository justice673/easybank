import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ArticlesSection from "./components/ArticlesSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
    <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900">
      <Navbar/>
      <HeroSection/>
      <FeaturesSection/>
      <ArticlesSection/>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}
