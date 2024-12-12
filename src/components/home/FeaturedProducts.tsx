import ProductCard from "../ProductCard";


const FeaturedProducts = () => {
    return (
        <div>
            <section className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </section>
        </div>
    );
};

export default FeaturedProducts;