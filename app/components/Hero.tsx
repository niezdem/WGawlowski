const Hero = () => {
  // const t = useTranslations("Hero");

  return (
    <section>
      <div className="relative isolate -z-10">
        {/* Background pattern */}
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={80}
              height={120}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        {/* Background pattern */}
        <div
          aria-hidden="true"
          className="absolute top-50 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-[8rem] lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
            className="w-[40rem] h-[40rem] bg-gradient-to-r from-[#FFE53B] via-[#FF2525] to-[#4B0082] to-[#002BDC] opacity-10 animate-[pulse_8s_ease-in-out_infinite]"
          />
        </div>

        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                  Od precyzyjnego spawu po trwałe ciepło
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                  Nazywam się Wojciech Gawłowski i od lat doskonalę sztukę
                  precyzyjnego spawania. Specjalizuję się w kompleksowych
                  usługach instalacyjnych, łącząc doświadczenie z
                  niezawodnością. Zadbam o Twój komfort na lata.
                </p>
              </div>
              {/* Hero images */}
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      alt="Welding"
                      src="/img/hero/01.jpg"
                      className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      alt="Welding"
                      src="/img/hero/02.jpg"
                      className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div className="relative">
                    <img
                      alt="Welding"
                      src="/img/hero/03.jpg"
                      className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      alt="Welding"
                      src="/img/hero/04.jpg"
                      className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div className="relative">
                    <img
                      alt="Welding"
                      src="/img/hero/05.jpg"
                      className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
