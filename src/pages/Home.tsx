import BookForm from "@/components/BookForm";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Rooms from "@/components/Rooms";

export default function Home() {
  return (
    <>
      <Hero />
      <BookForm />
      <Rooms />
      <Footer />
    </>
  );
}
