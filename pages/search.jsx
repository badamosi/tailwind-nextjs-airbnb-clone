import { format } from "date-fns";
import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";


function Search({searchResult}) {

    const router = useRouter()
    const { location, guests, start_date, end_date } = router.query;
 
    const formatedStartDate = format(new Date(start_date), "dd MMM yy")
    const formatedEndDate = format(new Date(end_date), "dd MMM yy")
    const dateRange = `${formatedStartDate} - ${formatedEndDate}`;
    return (
        <div>
            <Header placeholder={`${location.toUpperCase()} | ${dateRange} | ${guests + (guests > 1 ? ' guests' : ' guest')}`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ stays - {dateRange} for {guests + (guests > 1 ? ' guests' : ' guest')}</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="search-filter-btn">Canellation Flexibility</p>
                        <p className="search-filter-btn">Type of places</p>
                        <p className="search-filter-btn">Price</p>
                        <p className="search-filter-btn">Rooms and Bed</p>
                        <p className="search-filter-btn">More filters</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResult.map(result => (
                            <InfoCard key={result.img} info={result} />
                        ))}
                    </div>
                </section>
                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map searchResult={searchResult} />
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResult = await fetch('https://links.papareact.com/isz').then(res => res.json())

    return {
        props: {
           searchResult 
        }
    }
}
