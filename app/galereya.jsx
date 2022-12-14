function Galereya() {
  return (
    <main className="bg-gray-100">
      <div className="text-center py-12 space-y-7">
        <h1 className="font-bold text-4xl">Галерея</h1>
        <p className="text-md">
          «Ҳоким ёрдамчи»лари фаолиятидан фото ва видео лавҳалар
        </p>
      </div>
      <div className="grid grid-cols-2 gap-7 px-52">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <img
              src="https://online-mahalla.uz/media/store/img/gallery/image15.jpg"
              alt="photo"
            />
          </div>
          <div className="grid grid-cols-2 gap-7">
            <img
              src="https://online-mahalla.uz/media/store/img/gallery/image34.jpg"
              alt="photo"
            />
            <img
              src="https://online-mahalla.uz/media/store/img/gallery/image96.jpg"
              alt="photo"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 gap-7">
            <img
              src="https://online-mahalla.uz/media/store/img/gallery/image43.jpg"
              alt="photo"
            />
            <img
              src="https://online-mahalla.uz/media/store/img/gallery/image38.jpg"
              alt="photo"
            />
          </div>
          <div>
            <img
              src="https://online-mahalla.uz/media/store/img/gallery/image18.jpg"
              alt="photo"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <button className="text-center transition-all duration-300 ease-in-out bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-blue-600 rounded-3xl py-5 px-7">
          Кўпроқ юклаш
        </button>
      </div>
    </main>
  );
}

export default Galereya;
