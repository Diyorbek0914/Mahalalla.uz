import "./globals.css";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="text-cyan-800">
          {/* <div className="flex bg-gray-200 md:px-52 space-x-8 py-2">
            <div className="flex items-center space-x-2">
              <img
                className="w-5 h-5"
                src="https://online-mahalla.uz/media/store/img/oilakredit-logo.png"
                alt="logo"
              />
              <a href="https://oilakredit.uz/">Oilakredit.uz</a>
            </div>
            <div className="flex items-center space-x-2">
              <img
                className="w-5 h-5"
                src="https://online-mahalla.uz/media/store/img/smartmarket-logo.png"
                alt="logo"
              />
              <a href="https://smart-market.uz/">Smart-market.uz</a>
            </div>
          </div> */}
          <div className="flex items-center justify-between md:px-52 py-2 pb-12 bg-neutral-100/90">
            <div className="flex items-center space-x-8">
              <div className="flex items-end space-x-2">
                <img className="w-5 h-5" src="/Phone.svg" alt="phone" />
                <a href="tel:+998787778484">+998 (78) 777-84-84</a>
              </div>
              <div className="flex items-end space-x-2">
                <img
                  className="w-5 h-5"
                  src="https://online-mahalla.uz/media/store/img/svg-users.svg"
                  alt="people"
                />
                <a href="https://t.me/onlinemahalla">Rasmiy kanal</a>
              </div>
              <div className="flex items-end space-x-2">
                <img
                  className="w-5 h-5"
                  src="https://online-mahalla.uz/media/store/img/email.svg"
                  alt="message"
                />
                <a href="info@online-mahalla.uz">info@online-mahalla.uz</a>
              </div>
            </div>
            <div className="flex space-x-5">
              <span>Ўзбек</span>
              <a href="https://t.me/onlinemahalla">
                <img
                  src="https://online-mahalla.uz/media/store/img/facebook_black.svg"
                  alt="facebook"
                />
              </a>
              <a href="https://t.me/onlinemahalla">
                <img
                  src="https://online-mahalla.uz/media/store/img/telegram_black.svg"
                  alt="telegram"
                />
              </a>
              <a href="https://www.instagram.com/onlinemahalla">
                <img
                  src="https://online-mahalla.uz/media/store/img/instagram_black.svg"
                  alt="instagram"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between md:px-52">
            <div className="py-4">
              <a href="/">
                <img
                  className="w-36"
                  src="https://online-mahalla.uz/media/store/img/header-logo.svg"
                  alt="moonLogotip"
                />
              </a>
            </div>
            <div className="flex items-center space-x-5 text-sm transition-all">
              <a className="hover:font-semibold" href="/">
                Бош саҳифа
              </a>
              <a className="hover:font-semibold" href="/">
                Тизим ҳақида
              </a>
              <a className="hover:font-semibold" href="/">
                Онлайн ахборотнома
              </a>
              <a className="hover:font-semibold" href="/">
                Савол-жавоб
              </a>
              <a className="hover:font-semibold" href="/">
                Боғланиш
              </a>
              <a
                className="flex text-md space-x-4 font-semibold transition-all duration-300 ease-in-out py-3 px-6 rounded-full border border-blue-600 bg-blue-600 hover:bg-white hover:text-blue-600 text-white"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 fill-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
                <span>Тизимга кириш</span>
              </a>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-gray-100 mx-auto px-52 py-9 font-medium h-[63vh] text-sm text-gray-600">
          <div className="flex justify-between">
            <div className="flex flex-col space-y-5">
              <a href="/">
                <img
                  className="w-56 my-2"
                  src="https://online-mahalla.uz/media/store/img/header-logo.svg"
                  alt="moonLogotip"
                />
              </a>
              <p>Юнусобод тумани, Амир Темур шох кўчаси, 107-Б уй</p>
              <span>info@online-mahalla.uz</span>
              <a className="text-blue-600" href="https:online-mahalla.uz">
                www.online-mahalla.uz
              </a>
            </div>
            <div className="flex flex-col space-y-8">
              <span className="text-2xl text-black font-bold">Менюлар</span>
              <a href="/">Бош саҳифа</a>
              <a href="/">Тизим ҳақида</a>
              <a href="/">Янгиликлар</a>
              <a href="/">Савол-жавоб</a>
              <a href="/">Боғланиш</a>
            </div>
            <div className="space-y-8 mr-36">
              <span className="text-2xl text-black font-bold">
                Мобил иловалар
              </span>
              <div className="space-y-2">
                <button className="flex items-center justify-center text-md space-x-4 font-semibold transition-all duration-300 ease-in-out  w-[200px] h-[50px] rounded-full border border-blue-600 bg-blue-600 hover:bg-white hover:text-blue-600 text-white">
                  Online Mahalla
                  <span className="pl-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </span>
                </button>
                <button className="flex items-center justify-center text-md space-x-4 font-semibold transition-all duration-300 ease-in-out w-[200px] h-[50px] rounded-full border border-blue-600 bg-blue-600 hover:bg-white hover:text-blue-600 text-white">
                  RS Imzo
                  <span className="pl-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-20">
            <span className="text-md">
              © «Онлайн Маҳалла». Барча ҳуқуқлар ҳимояланган
            </span>
            <div className="flex space-x-5 mr-36">
              <a href="https://t.me/onlinemahalla">
                <img
                  src="https://online-mahalla.uz/media/store/img/telegram_black.svg"
                  alt="telegram"
                />
              </a>
              <a href="https://www.instagram.com/onlinemahalla">
                <img
                  src="https://online-mahalla.uz/media/store/img/instagram_black.svg"
                  alt="instagram"
                />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
