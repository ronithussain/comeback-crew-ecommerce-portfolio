import Image from 'next/image';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';


const ProductCard = ({ image, text, price }) => {
    return (
        <div className='bg-white rounded-lg shadow-md overflow-visible flex flex-col h-[400px]'>
            <div className='relative w-full h-64'>
                <Image
                    src={image}
                    alt=''
                    fill
                    style={{ objectFit: "cover" }} />
            </div>

            <h3 className='text-lg font-semibold text-gray-800 px-4 py-3 m-0'>
                {text}
            </h3>

            <div className='flex items-center justify-between px-4 pt-0 pb-4 m-0'>
                <span className='text-xl font-bold text-gray-700'>{price}</span>
                <div className='flex space-x-3'>
                    <FaHeart className='text-gray-600 hover:text-red-500 cursor-pointer' />
                    <FaShoppingCart className='text-gray-600 hover:text-green-500 cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;