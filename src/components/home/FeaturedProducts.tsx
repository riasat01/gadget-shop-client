import ProductCard from "../ProductCard";


const FeaturedProducts = () => {
    return (
        <div>
            <h1 className="text-2xl text-center py-6 font-bold">Featured Products</h1>
            <section className="my-16 flex items-center justify-between gap-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </section>
        </div>
    );
};

export default FeaturedProducts;