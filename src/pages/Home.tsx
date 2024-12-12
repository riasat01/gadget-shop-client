import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import FeaturedProducts from "../components/home/FeaturedProducts";
import UserReview from "../components/home/UserReview";


const Home = () => {
    return (
        <section>
            <Banner />
            <section className="px-4 md:px-8 lg:px-12 text-center">
                <section className="my-16">
                    <h1 className="text-2xl text-center py-6 font-bold">Featured Products</h1>
                    <FeaturedProducts />
                </section>
                <section className="my-16">
                    <h1 className="text-2xl text-center py-6 font-bold">User Reviews</h1>
                    <UserReview />
                </section>
                <section className="my-16">
                    <h1 className="text-2xl text-center py-6 font-bold">Frequently Asked Question</h1>
                    <Accordion />
                </section>
            </section>
        </section>
    );
};

export default Home;