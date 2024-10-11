import ButtonNext from "../utils/ButtonNext";
import Header from "./Header";
import Image from "./Image";

function MainPage() {
  return (
    <>
      <Header />
      <section
        className="bg-gradient-to-r from-slate-50 to-indigo-200 dark:bg-gradient-to-l dark:from-stone-500 dark:to-stone-700 rounded-2xl grid 
        grid-cols-[1fr_39rem] gap-5 sm:flex sm:flex-col sm:mt-8 md:grid-cols-[1fr_15rem] md:items-center sm:text-balance "
      >
        <div className="p-8 [&>*]:text-pretty flex flex-col gap-12 sm:gap-16">
          <h1 className="text-black dark:text-white text-7xl font-black  font-headers">
            Quizs
          </h1>
          <div>
            <p className="text-black dark:text-white text-xl font-normal font-paragr ">
              Benvenuti al nostro quiz sull’
              <b>economia circolare e il riciclo</b>! Scopri quanto ne sai su
              come possiamo ridurre, riutilizzare e riciclare per un futuro più
              <b>sostenibile</b>.
            </p>
            <div className="sm:border-b-2 sm:dark:border-stone-400 sm:border-black pt-10"></div>
          </div>
          <div>
            <p className="text-black dark:text-white text-xl font-normal sm:-mt-6  font-paragr">
              Metti alla prova le tue <b>conoscenze</b> sull’economia circolare
              e il riciclo con il nostro quiz interattivo! Che aspetti a
              cominciare?
            </p>
          </div>
          <div className="2xl:pt-24 sm:flex sm:justify-center sm:items-center sm:text-center ">
            <ButtonNext currentStep={0} text="Comincia!" />
          </div>
        </div>
        <div className="p-8 sm:hidden ">
          <Image />
        </div>
      </section>
    </>
  );
}

export default MainPage;
