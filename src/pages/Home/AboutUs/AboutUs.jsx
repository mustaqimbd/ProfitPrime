
const AboutUs = () => {
    return (
        <div className="flex justify-center items-center py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <img
                        src="./src/assets/AboutUs/revenue.webp"
                        alt="About Us Image"
                        className="w-full h-auto md:max-w-lg mx-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 md:ml-10 mt-5 md:mt-0">
                    <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                    <p className="text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ante ut ex volutpat finibus. Sed non tortor vitae nisi dignissim lacinia.
                    </p>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Learn More</button>
                        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;