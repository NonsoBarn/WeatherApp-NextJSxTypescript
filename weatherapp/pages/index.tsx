import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import Weathercard from "@/components/Weathercard";

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="flex flex-col justify-center items-center pt-32">
          <div>
            <h1 className="text-2xl font-bold text-start"> Weather Update</h1>
          </div>
          <div>
            <SearchBar />
            <Weathercard />
          </div>
        </div>
      </main>
    </Layout>
  );
}
