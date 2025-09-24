import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
        <h1 className="text-4xl font-bold">Welcome to Lovable Clone</h1>
      </section>
    </main>
  );
}
