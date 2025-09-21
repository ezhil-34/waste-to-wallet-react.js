

export default function Hero() {
    return(
        <section className="px-4 sm:px-10 pt-20  text-center">
            <h3 className="text-4xl mt-32 sm:text-6xl font-bold dark:text-white mb-6">
                Transform waste into{" "}
                <span className="bg-clip-text text-transparent dark:text-white bg-gradient-to-r from-green-400 to-blue-500">
                    Rewards
                </span>
            </h3>
            <p className="max-w-3xl mt-4 mx-auto text-gray-600 dark:text-gray-200 text-lg sm:text-2xl">
                  Join our sustainable platform where your recycling efforts are rewarded.
                    Upload photos of your waste, get verified, and earn points you can redeem.
            </p>
            <button className="mt-16 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-md font-bold shadow-md hover:to-green-600">
                Start Earning Today
            </button>
        </section>
    );
}