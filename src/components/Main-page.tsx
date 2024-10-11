import ButtonNext from "../utils/ButtonNext";
import Header from "./Header";
import Image from "./Image";

function MainPage() {
  return (
    <>
      <Header />
      <section
        className="bg-gradient-to-r from-slate-50 to-indigo-200 dark:bg-gradient-to-l dark:from-stone-500 dark:to-stone-700 rounded-2xl grid 
        grid-cols-[1fr_39rem] gap-5 sm:flex sm:flex-col sm:mt-8 md:grid-cols-[1fr_15rem] md:items-center "
      >
        <div className="p-8 [&>*]:text-pretty flex flex-col gap-12 sm:gap-16">
          <h1 className="text-black dark:text-white text-7xl font-black  font-headers">
            Quizs
          </h1>
          <div>
            <p className="text-black dark:text-white text-xl font-normal font-paragr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            </p>
          </div>
          <div>
            <p className="text-black dark:text-white text-xl font-normal  font-paragr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dolore qui voluptatem aut tenetur quod unde vel, veritatis est
              iste ipsam
            </p>
          </div>
          <div className="2xl:pt-24 sm:flex sm:justify-center sm:items-center sm:text-center ">
            <ButtonNext currentStep={0} text="Start!" />
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
