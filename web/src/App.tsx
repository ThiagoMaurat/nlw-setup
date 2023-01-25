import "./styles/global.css";
import logoImage from "./assets/logoImage.svg";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Header />
    </div>
  );
}
