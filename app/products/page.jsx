"use client"
import ProductCard from "@/components/ProductCard";
import data from "../../public/data/data.json"
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ProductsPage = () => {

    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    // sort functionality start here:
    const [sortOrder, setSortOrder] = useState("default");

    let products = data.products

    if (sortOrder === "price-low") {
        products = [...products].sort((a, b) => a.price - b.price)
    } else if (sortOrder === "price-high") {
        products = [...products].sort((a, b) => b.price - a.price)
    } else if (sortOrder === "name") {
        products = [...products].sort((a, b) => a.text.localeCompare(b.text))
    }

    const handleSort = (order) => {
        setSortOrder(order)
    }
    // sort functionality ends here:
    return (
        <div className="w-full max-w-7xl mx-auto my-12 px-4 max-[774px]:my-8 max-[774px]:px-3">
            {/* page title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6 max-[774px]:text-xl max-[774px]:mb-4 max-[774px]:top-0 max-[774px]:z-10 max-[774px]:pt-4 ">Products</h1>

            <div className="flex flex-col md:flex-row gap-6 max-[774px]:gap-4">
                {/* filter section */}
                <div className=" hidden min-[774px]:block w-full md:w-1/4 bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Filter Options
                    </h3>
                    <div className="space-y-6">
                        {/* type 1 */}
                        <div>
                            <h4 className="text-lg font-medium text-gray-700">
                                Category
                            </h4>
                            {["Furniture", "Lighting", "Decor"].map((cat) => (
                                <label key={cat} className="block mt-2">
                                    <input type="checkbox" className="mr-2" />
                                    {cat}
                                </label>
                            ))}
                        </div>
                        {/* type 2 */}
                        <div>
                            <h4 className="text-lg font-medium text-gray-700">
                                Price Range
                            </h4>
                            {["$0 - $100", "$100 - $300", "$300+"].map((range) => (
                                <label key={range} className="block mt-2">
                                    <input type="checkbox" className="mr-2" />
                                    {range}
                                </label>
                            ))}
                        </div>
                        {/* type 3 */}
                        <div>
                            <h4 className="text-lg font-medium text-gray-700">
                                Availability
                            </h4>
                            {["In Stock", "Out of stock"].map((avail) => (
                                <label key={avail} className="block mt-2">
                                    <input type="checkbox" className="mr-2" />
                                    {avail}
                                </label>
                            ))}
                        </div>
                        {/* type 4 */}
                        <div>
                            <h4 className="text-lg font-medium text-gray-700">
                                Material
                            </h4>
                            {["Wood", "Metal", "Fabric", "Leather", "Glass", "Rattan"].map((mat) => (
                                <label key={mat} className="block mt-2">
                                    <input type="checkbox" className="mr-2" />
                                    {mat}
                                </label>
                            ))}
                        </div>
                        {/* type 5 */}
                        <div>
                            <h4 className="text-lg font-medium text-gray-700">
                                Room Type
                            </h4>
                            {["Living Room",
                                "Bedroom",
                                "Dining Room",
                                "Office",
                                "Kids Room",
                                "Kitchen"
                            ].map((type) => (
                                <label key={type} className="block mt-2">
                                    <input type="checkbox" className="mr-2" />
                                    {type}
                                </label>
                            ))}
                        </div>
                        {/* type 6 */}
                        <div>
                            <h4 className="text-lg font-medium text-gray-700">
                                Style
                            </h4>
                            {["Modern",
                                "Traditional",
                                "Mid-Century",
                                "Bohemian",
                                "Rustic",
                                "Minimalist",
                                "Industrial",
                                "Scandinavian",
                            ].map((sty) => (
                                <label key={sty} className="block mt-2">
                                    <input type="checkbox" className="mr-2" />
                                    {sty}
                                </label>
                            ))}
                        </div>
                    </div>

                </div>

                {/* products list title & sort by button */}
                <div className="w-full md:w-3/4">
                    <div className="flex justify-between items-center mb-6 max-[774px]:mb-4">
                        <h2 className="text-xl font-semibold text-gray-800 max-[774]:text-base">
                            Products List (12)
                        </h2>
                        <div className="hidden min-[774px]:flex items-center gap-3">
                            <span className="text-gray-700 font-medium">Sort By:</span>
                            <select
                                className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a91f64]"
                                value={sortOrder}
                                onChange={(e) => handleSort(e.target.value)}
                            >
                                <option value="default">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="name">Name: A to Z</option>
                            </select>
                        </div>
                    </div>

                    {/* mobile design for sort by & filter buttons */}
                    <div className="min-[774px]:hidden sticky top-8 bg-transparent z-10 py-2">
                        <div className="flex items-center justify-between gap-2">
                            <button
                                className="bg-[#a91f64] text-white px-4 py-2 rounded-md text-sm font-medium flex-1 cursor-pointer"
                                onClick={() => setIsFilterModalOpen(true)}
                            >
                                Filters
                            </button>
                            <select
                                className="border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a91f64] flex-1 cursor-pointer"
                                value={sortOrder}
                                onChange={(e) => handleSort(e.target.value)}
                            >
                                <option value="default">Newest</option>
                                <option value="price-low">Price: Low</option>
                                <option value="price-high">Price: High</option>
                                <option value="name">Name: A-Z</option>
                            </select>
                        </div>
                    </div>

                    {/* filter modal */}
                    {isFilterModalOpen && (
                        <div className="max-[774px]:fixed max-[774px]:inset-0 max-[774px]:bg-gray-900 max-[774px]:bg-opacity-30 max-[774px]:z-20 max-[774px]:flex max-[774px]:justify-center max-[774px]:items-center max-[774px]:p-4 min-[774px]:hidden"
                            onClick={() => setIsFilterModalOpen(false)}
                        >
                            <div className="bg-white rounded-lg p-4 w-full max-w-md max-h-[80vh] overflow-y-auto shadow-lg z-30"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-semibold text-gray-800 max-[774px]:text-lg">Filter</h3>
                                    <button
                                        className="text-gray-600 hover:text-[#a91f64 text-lg cursor-pointer]"
                                        onClick={() => setIsFilterModalOpen(false)}
                                    >
                                        <FaTimes />
                                    </button>
                                </div>

                                {/* category */}
                                <div className="space-y-6 max-[774px]:space-y-3">
                                    {/* type 1 */}
                                    <div>
                                        <h4 className="text-base font-medium text-gray-700 max-[774px]:text-sm">
                                            Category
                                        </h4>
                                        {["Furniture", "Lighting"].map((cat) => (
                                            <label key={cat} className="flex items-center text-base max-[774px]:text-sm mt-2">
                                                <input type="checkbox" className="mr-2 w-4 h-4 max-[774px]:h-5" />
                                                {cat}
                                            </label>
                                        ))}
                                    </div>
                                    {/* type 2 */}
                                    <div>
                                        <h4 className="text-base font-medium text-gray-700 max-[774px]:text-sm">
                                            Price Range
                                        </h4>
                                        {["$0 - $100", "$100 - $300", "$300+"].map((range) => (
                                            <label key={range} className="flex items-center text-base max-[774px]:text-sm mt-2">
                                                <input type="checkbox" className="mr-2 w-4 h-4 max-[774px]:h-5" />
                                                {range}
                                            </label>
                                        ))}
                                    </div>
                                    {/* type 3 */}
                                    <div>
                                        <h4 className="text-base font-medium text-gray-700 max-[774px]:text-sm">
                                            Availability
                                        </h4>
                                        {["In Stock", "Out of stock"].map((avail) => (
                                            <label key={avail} className="flex items-center text-base max-[774px]:text-sm mt-2">
                                                <input type="checkbox" className="mr-2 w-4 h-4 max-[774px]:h-5" />
                                                {avail}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    className="mt-6 w-full bg-[#a91f64] text-white px-4 py-2 rounded-md text-base font-medium max-[774px]:text-sm cursor-pointer"
                                    onClick={() => setIsFilterModalOpen(false)}
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    )}

                    {/* products cards section */}
                    <div className="grid grid-cols-1 gap-6 max-[774px]:gap-3 min-[774px]:grid-cols-2 md:grid-cols-3">
                        {products.map((product) => (
                            <div key={product.id}>
                                <ProductCard
                                    id={product.id}
                                    image={product.image}
                                    text={product.text}
                                    price={`$${product.price}`}
                                    category={product.category}
                                    inStock={product.inStock}
                                />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ProductsPage;