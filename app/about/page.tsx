import Image from "next/image";

export default function AboutPage() {
    const imageUrl = "/images/painting-tanjore-24-carat-gold-2.png"
    return (
      <div>
        <h1 className="text-3xl font-bold mb-10 text-center">About the Artist</h1>
        <div className="flex w-full max-w-4xl mx-auto flex-grow items-center">
            <div className="w-1/2 flex justify-center items-center">
            <div className="mb-4">
                <Image src={imageUrl} alt="sample artwork" width={400} height={600} className="rounded-md" />
            </div>
            </div>
            <div className="w-1/2 text-justify p-10">
            <p>Kusum Kala, a Tanjore artist with 35 years of experience, brings the golden elegance of this traditional art form to Delhi through her business, "Unique Handcrafted Gifting Solutions.</p>
            <p className="mt-5">Originally from Jaipur, where her artistic journey began, Kusum Kala's intricate creations, inspired by nature's beauty, were initially cherished gifts for family and friends. Now, she shares her lifelong dedication to Tanjore artistry with a wider audience.</p>
            </div>
        </div>
    </div>
    );

    }