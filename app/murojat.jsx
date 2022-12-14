function Murojat() {
  return (
    <main className="mt-10 ml-52 bg-white mb-28">
      <div>
        <h1 className="font-bold text-4xl">Мурожаат қилиш</h1>
      </div>
      <div className="flex justify-between">
        <form className="mt-10 max-w-md space-y-5">
          <div className="space-x-4">
            <input
              className="border p-4 rounded-md border-slate-400 outline-none shadow-sm focus:shadow-blue-500 bg-gray-100"
              type="text"
              placeholder="Ф.И.Ш *"
              name=""
              id=""
            />
            <input
              className="border p-4 rounded-md border-slate-400 outline-none shadow-sm focus:shadow-blue-500 bg-gray-100"
              type="text"
              placeholder="Телефон *"
              name=""
              id=""
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Мавзу *"
              className="col-12 form-control w-full border p-4 rounded-md border-slate-400 outline-none shadow-sm focus:shadow-blue-500 bg-gray-100"
            />
          </div>
          <div className="space-y-5">
            <textarea
              name=""
              placeholder="Хабар матни"
              id=""
              cols="50"
              rows="6"
              className="col-12 form-control w-full border p-4 rounded-md border-slate-400 outline-none shadow-sm focus:shadow-blue-500 bg-gray-100"
            ></textarea>
            <input
              type="submit"
              value="Жўнатиш"
              className="text-center cursor-pointer transition-all duration-300 ease-in-out bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-blue-600 rounded-3xl py-5 px-[75px]"
            />
          </div>
        </form>
        <div className="relative">
          <div className="mr-40">
            <img
              className="w-[600px]"
              src="https://online-mahalla.uz/media/store/img/map.png"
              alt="gerb"
            />
          </div>
          <div className="absolute top-40 left-20 maw-w-md space-y-8">
            <span className="text-md space-x-2 font-semibold indent-96 opacity-70 tracking-[0.4em] font-[Montserrat]">
              МУРОЖААТ УЧУН
            </span>
            <div className="flex items-end">
              <img
                className="w-8 h-8"
                src="https://online-mahalla.uz/media/store/img/svg/Phone.svg"
                alt="phone"
              />
              <span className="text-4xl font-bold text-blue-600/95">
                +998 (78) 777-84-84
              </span>
            </div>
            <p className="mr-60 opacity-70">
              Ўзингизни қизиқтирган саволлар бўлса бизнинг операторларга
              мурожаат қилинг
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Murojat;
