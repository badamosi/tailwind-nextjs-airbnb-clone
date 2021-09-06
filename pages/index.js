import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({exploreData, liveAnywhere}) {
  return (
    <div className="">
      <Head>
        <title>AirBnB Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(dt => (
            <SmallCard key={dt.location} data = {dt} />
            ))}
          </div>
        </section>
        <section className="">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex items-center space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveAnywhere?.map(data => (
                <MediumCard key={data.location} data={data} />
            ))}
          </div>
        </section>
        <LargeCard img="https://links.papareact.com/4cj" title="Try hosting" desc="Earn extra income and unlock new opportunities by sharing your space." btnText="Learn more"/>
      </main>
      <Footer/>
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then((res) => res.json())
  
  const liveAnywhere = await fetch('https://links.papareact.com/zp1')
    .then((res) => res.json())
  
  return {
    props:{
      exploreData,
      liveAnywhere
    }
  }
}
