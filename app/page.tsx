import Navbar from './components/Navbar'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <main>
          <Header />
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard />
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  )
}
