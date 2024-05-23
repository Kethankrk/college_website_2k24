import Navbar from "./components/homepage/navbar";
import Topsection from "./components/homepage/topsection";

export default function Home() {
  return (
    <main className="flex min flex-col">
      <Topsection />
      <Navbar />
    </main>
  );
}
