import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';

const ServicesDetailsPage = async ({ params }) => {
  const p = await params;

  const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });

  return (
    <div>
        <p> {p.id} </p>
      {/* <section className="flex justify-center">
        <figure className="relative">
          <Image
            src="/assets/images/checkout/checkout.png"
            width={1137}
            height={300}
            alt="Service Banner"
          />
          <div className="transparent-layer overlay-bg absolute w-full h-full border-2 border-[#a91f64] top-0">
            <div className="w-full h-full font-bold text-2xl flex items-center ps-16">
              <div>
                <h1 className="text-white">{data?.text}</h1>
              </div>
            </div>
          </div>
        </figure>
      </section> */}

      <section className=" mx-auto grid  grid-cols-1 sm:grid-cols-12 gap-4 mt-4">
        {/* Left Side */}
        <div className="col-span-9 space-y-4">
          <Image
            className="w-full"
            src={data?.image || "/assets/images/default.jpg"}
            width={400}
            height={280}
            alt={data?.title || "Service image"}
          />
          <h1 className="font-bold text-3xl">{data?.text}</h1>
          <p className="text-justify">{data?.description}</p>
        </div>

        {/* Right Side */}
        <div className="col-span-3 space-y-4">
          <Link  href={`/checkout/${data?._id}`}>
            <button className="w-full text-white h-9 bg-[#a91f64]">Checkout</button>
          </Link>
          <p className="text-center text-xl font-bold">
            Price: ${data?.price}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetailsPage;
