import About from "@/components/About";
import BookForm from "@/components/BookForm";
import Headers from "@/components/Header";
import { Hero } from "@/components/Hero";
import Rooms from "@/components/Rooms";

export default function Home() {
  return (
    <>
      <Headers />
      <Hero />
      <BookForm />
      <About />
      <Rooms />
    </>
  );
}
