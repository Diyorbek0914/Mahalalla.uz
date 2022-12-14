function HomePage() {
  return (
    <section className="py-9 text-white px-52 mx-auto relative block">
      <img
        className="absolute top-0 left-0 w-full h-[480px]"
        src="/online-mahlla-main.jpeg"
        alt="business"
      />
      <div className="bg-[#10044887] absolute top-0 left-0 w-full h-[480px]"></div>
      <div className="space-y-5 absolute">
        <h1 className="font-bold text-xl md:text-6xl">«Онлайн Маҳалла» - </h1>
        <h2 className="font-bold text-xl md:text-6xl">электрон платформаси</h2>
        <p>
          Маҳаллабай ишлаш маркази ва маҳалла фуқаролар йиғини фаолиятини ўзаро
          боғлиқ ҳолда <br />
          рақамлаштиришни назарда тутувчи электрон платформа
        </p>
      </div>
      <div className="xl:grid xl:grid-cols-4 gap-7 text-sm absolute top-20 lg:top-72 left-24 lg:left-52 transition-all">
        <button className="py-3 transition-all duration-300 ease-in-out px-12 w-64 rounded-3xl border border-blue-600 bg-blue-700 hover:bg-white hover:text-blue-600 hover:font-semibold">
          Қўлланма
        </button>
        <button className="py-3 transition-all duration-300 ease-in-out px-12 w-64 rounded-3xl border border-blue-600 bg-blue-700 hover:bg-white hover:text-blue-600 hover:font-semibold">
          Ишга жойлаштириш
        </button>
        <button className="py-3 transition-all duration-300 ease-in-out px-12 w-64 rounded-3xl border border-blue-600 bg-blue-700 hover:bg-white hover:text-blue-600 hover:font-semibold">
          Ишга жойлаштириш (ЯММТ)
        </button>
        <button className="py-3 transition-all duration-300 ease-in-out px-12 w-64 rounded-3xl border border-blue-600 bg-blue-700 hover:bg-white hover:text-blue-600 hover:font-semibold">
          Ўқишга йўналтириш (мономарказ)
        </button>
        <button className="py-3 transition-all duration-300 ease-in-out px-12 w-64 rounded-3xl border border-blue-600 bg-blue-700 hover:bg-white hover:text-blue-600 hover:font-semibold">
          Ўқишга йўналтириш (ННТ/НТТ)
        </button>
        <button className="py-3 transition-all duration-300 ease-in-out px-12 w-64 rounded-3xl border border-blue-600 bg-blue-700 hover:bg-white hover:text-blue-600 hover:font-semibold">
          Субсидияга ариза
        </button>
        <button className="py-3 transition-all duration-300 ease-in-out px-12 w-64 rounded-3xl border border-blue-600 bg-blue-700 hover:bg-white hover:text-blue-600 hover:font-semibold">
          Онлайн мурожатнома
        </button>
      </div>
    </section>
  );
}

export default HomePage;
