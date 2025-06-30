import Image from 'next/image';

export default function AboutPage() {
  const imageUrl = '/images/painting-tanjore-24-carat-gold-2.png';
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 text-center">About the Artist</h1>
      <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto items-center">
        <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <div className="mb-4">
            <Image src={imageUrl} alt="sample artwork" width={400} height={600} className="rounded-md" />
          </div>
        </div>
        <div className="md:w-1/2 p-6 md:p-10">
          <p>
            The artist behinds <span className="font-bold">Unique Handcrafted Gifting Solutions</span> is originally from Jaipur, where her artistic journey began.
            She currently resides in Delhi with her family.
          </p>

          <p className='mt-5'>Her intricate creations, inspired by
            nature&#39;s beauty, were initially cherished gifts for family and friends. Now, she shares her lifelong
            dedication to Tanjore artistry with a wider audience.
          </p>
        </div>
      </div>
    </div>
  );
}
