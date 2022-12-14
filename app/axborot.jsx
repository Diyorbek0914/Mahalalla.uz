function Axborot() {
    return ( 
        <main>
            <div className="py-12">
                <h1 className='text-center font-bold text-4xl'>Онлайн ахборотнома</h1>
            </div>
            <div className="flex px-52 space-x-10">
                <div className="border p-3 rounded-md cursor-pointer">
                    <img className="rounded-md" src="https://i1.ytimg.com/vi/HFn9Ul_z6CY/hqdefault.jpg" alt="vid" />
                    <div className="flex">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <span>26.03.2022</span>
                    </div>
                    <p className="text-xl font-semibold">Ҳоким ёрдамчиси билан бир кун: Қашқадарё вилояти, Миришкор тумани, Бори маҳалласи</p>
                </div>
                <div className="border p-3 rounded-md cursor-pointer">
                    <img className="rounded-md" src="https://i1.ytimg.com/vi/mB7DdBWB7aw/hqdefault.jpg" alt="vid" />
                    <div className="flex">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span><span>25.04.2022</span>
                    </div>
                    <p className="text-xl font-semibold">Маҳаллабай ишлаш тизими: энди ҳар бир маҳалла ихтисослашуви бўйича қўллаб-қувватланади </p>
                </div>
                <div className="border p-3 rounded-md cursor-pointer">
                    <img className="w-[930px] h-[240px] rounded-md" src="https://i1.ytimg.com/vi/SWPzqzsybvY/hqdefault.jpg" alt="vid" />
                    <div className="flex">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span><span>14.04.2022</span>
                    </div>
                    <p className="text-xl font-semibold">Бухоро вилояти Ғиждувон тумани Чағдари МФЙ ҳоким ёрдамчисининг фаолияти</p>
                </div>
            </div><div className="flex items-center justify-center py-12">
            <button className="text-center bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-blue-600 rounded-3xl py-5 px-7">Барча видеолавхалар</button>
            </div>
        </main>
     );
}

export default Axborot;