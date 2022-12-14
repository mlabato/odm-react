const MainWrapper = () => {
  return (
    <section className="flex flex-col md:flex-row w-full lg:justify-center  mx-auto">
      {/*LEFT WRAPPER */}
      <article className="w-full md:w-1/2  flex flex-col  ">
        <div className=" text-red-900 my-auto flex items-center  h-[75px] md:h-1/3 mx-auto  text-xl md:text-xl lg:text-4xl font-bold">
          <div className=""> NUESTRAS CATEGORIAS </div>
        </div>

        <div className="bg-red-200 h-[75px] md:h-full  group relative flex items-center justify-center  overflow-hidden   shadow-xl      ">
          <img
            src="/images/card-mate.jpg"
            alt=""
            className=" w-full h-full opacity-70  group-hover:scale-125   duration-[4000ms] object-cover"
          />
          <div className="absolute  p-4 text-black place-items-center content-center ">
            <a
              href="/mates"
              className=" text-2xl sm:text-4xl transition-all relative  font-bold text-white "
            >
              Mates
            </a>
          </div>
        </div>
      </article>

      {/*RIGHT WRAPPER */}
      <article className="flex flex-col w-full md:w-1/2 ">
        <div className="bg-red-200 relative flex group items-center justify-center  overflow-hidden shadow-xl h-[75px] md:h-2/3 w-full  ">
          <img
            src="/images/card-termo.jpg"
            alt=""
            className=" w-full h-full opacity-70  group-hover:scale-125   duration-[4000ms] object-cover"
          />
          <div className="absolute opacity-100  p-4 text-black place-items-center content-center ">
            <a
              href="/termos"
              className=" text-2xl sm:text-4xl transition-all relative  font-bold text-white "
            >
              Termos
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  ">
          <div className="bg-red-200 relative flex group items-center justify-center  overflow-hidden shadow-xl  w-full md:w-1/2  h-[75px] md:h-full    ">
            <img
              src="/images/card-matera.jpg"
              alt=""
              className=" w-full h-full opacity-70  group-hover:scale-125   duration-[4000ms] object-cover"
            />
            <div className="absolute opacity-100  p-4 text-black place-items-center content-center ">
              <a
                href="/materas"
                className=" text-xl md:text-2xl lg:text-4xl transition-all relative font-bold  text-white "
              >
                Materas
              </a>
            </div>
          </div>

          <div className="bg-red-200 relative flex group  items-center justify-center  overflow-hidden shadow-xl   h-[75px] md:h-full  w-full md:w-1/2   ">
            <img
              src="/images/card-bombilla.jpg"
              alt=""
              className=" w-full h-full opacity-70  group-hover:scale-125   duration-[4000ms] object-cover"
            />
            <div className="absolute opacity-100  p-4 text-black place-items-center content-center ">
              <a
                href="/bombillas"
                className=" text-xl md:text-2xl lg:text-4xl  transition-all relative font-bold  text-white "
              >
                Bombillas
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default MainWrapper;
