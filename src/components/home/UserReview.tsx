import ReviewCard from "../ReviewCard";

const UserReview = () => {
    return (
        <section className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </section>
    );
};

export default UserReview;