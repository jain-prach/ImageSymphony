import React from "react";

function HeaderSection() {
return (
    <header className="flex flex-col justify-center py-px w-full bg-stone-950 max-md:max-w-full">
    <section className="flex overflow-hidden relative flex-col items-center px-20 py-12 w-full min-h-[868px] stroke-[1px] stroke-white stroke-opacity-10 max-md:px-5 max-md:max-w-full">
        <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5444fcb7ff94c80ae095a2c937fde728ce45265a5c60e7628ec5394bb301ad2c?apiKey=5c5bbdb311544c309a8d7b12ecde2b20&" 
        alt="" 
        className="object-cover absolute inset-0 size-full"
        />
        <h1 className="relative mt-56 text-8xl text-white leading-[90px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Image Symphony
        </h1>
        <p className="relative mt-6 text-base tracking-wide leading-6 text-white text-opacity-60 max-md:max-w-full">
        Degrading to learn better
        </p>
        <button
        className="relative justify-center px-6 py-3 mt-10 mb-44 text-sm italic text-black uppercase whitespace-nowrap bg-stone-300 rounded-full cursor-pointer max-md:px-5 max-md:my-10"
        tabIndex="0"
        >
        Explore
        </button>
    </section>
    </header>
);
}

function InfoCard({ src, title, description }) {
return (
    <div className="flex flex-col w-6/12 max-md:w-full">
    <div className="flex flex-col grow self-stretch p-5 w-full rounded border border-solid border-slate-400 max-md:mt-8 max-md:max-w-full">
        <img loading="lazy" src={src} alt={title} className="w-12 aspect-square" />
        <h2 className="mt-3 text-3xl italic leading-9 text-white max-md:max-w-full">{title}</h2>
        <p className="mt-3 text-sm tracking-wide leading-5 text-white text-opacity-60 max-md:max-w-full">{description}</p>
    </div>
    </div>
);
}

function InfoSection() {
const cards = [
    { 
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5103d0e95bace13f4ed03c626a900cc3e8c999c211cf29fdc307fcb98655c86c?apiKey=5c5bbdb311544c309a8d7b12ecde2b20&", 
    title: "Model Noise of a Particular Type", 
    description: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
    },
    { 
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/63cf0654253b7b58bc288abc9c856d1754ec462382a47f2535be7751439d6ef3?apiKey=5c5bbdb311544c309a8d7b12ecde2b20&", 
    title: "Model Noise from an Image", 
    description: "Integer ante non nunc, eget est justo vel semper nunc. Lacus"
    },
    { 
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bbb9b7fa72cec0e022a6be307f837e462809752c5018b60efdce7263608738f?apiKey=5c5bbdb311544c309a8d7b12ecde2b20&", 
    title: "Generate Modeled Noise on an Image", 
    description: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
    },
    { 
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/737ab797b338c27a81367f945d924d68bd06a3194b62ce5ee943221a5c28f1bf?apiKey=5c5bbdb311544c309a8d7b12ecde2b20&", 
    title: "Generate Noise on an Image", 
    description: "Integer ante non nunc, eget est justo vel semper nunc. Lacus"
    }
];

return (
    <section className="flex flex-col justify-center px-16 py-12 w-full bg-stone-950 max-md:px-5 max-md:max-w-full">
    <div className="flex justify-center items-center px-16 mx-2.5 mt-8 mb-24 max-md:px-5 max-md:mb-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1078px] max-md:max-w-full">
        <h2 className="self-center text-4xl italic text-center text-white leading-[56px] max-md:max-w-full">
            We Offer
        </h2>
        <p className="self-center mt-6 text-base tracking-wide leading-6 text-center text-neutral-200 text-opacity-60 w-[634px] max-md:max-w-full">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
        </p>
        <div className="mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {cards.map((card, index) => (
                <InfoCard key={index} src={card.src} title={card.title} description={card.description} />
            ))}
            </div>
        </div>
        </div>
    </div>
    </section>
);
}

function Landing() {
return (
    <main>
    <HeaderSection />
    <InfoSection />
    </main>
);
}

export default Landing;