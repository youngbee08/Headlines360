import CategoryNews from "./CategoryNews"
import TrendingNews from "./TrendingNews"

const News = () => {
  return (
    <section className="flex lg:flex-row sm:flex-row flex-col-reverse w-full justify-between sticky px-5 lg:w-[90%] sm:w-[80%] right-0">
      <CategoryNews/>
      <TrendingNews/>
    </section>
  )
}

export default News