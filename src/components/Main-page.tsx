import Button from "../utils/ButtonNext";
import Header from "./Header";
import Image from "./Image";

function MainPage() {
  return (
    <>
      <Header />
      <section
        className="bg-[#dee4e7] dark:bg-[#37474f] rounded-2xl grid 
        grid-cols-[1fr_39rem] gap-5 sm:flex sm:flex-col sm:mt-8 md:grid-cols-[1fr_15rem] md:items-center "
      >
        <div className="p-8 [&>*]:text-pretty">
          <h1 className="text-black dark:text-white text-7xl font-black mb-10 font-headers">
            Quizs
          </h1>
          <p className="text-black dark:text-white text-lg  font-black mb-8 sm:mb-4 font-paragr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          </p>
          <hr />
          <p className="text-black dark:text-white text-lg font-black my-8 sm:my-4 font-paragr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            dolore qui voluptatem aut tenetur quod unde vel, veritatis est iste
            ipsam
          </p>
          <hr />
          <div className="my-10 sm:mt-10 sm:flex smjustify-center sm:items-center sm:text-center ">
            <Button currentStep={0} text="Start!" />
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
