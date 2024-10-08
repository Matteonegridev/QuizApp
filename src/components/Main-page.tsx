import Button from "../utils/ButtonNext";
import Header from "./Header";
import Image from "./Image";

function MainPage() {
  return (
    <>
      <Header />
      <section
        className="bg-[#dee4e7] dark:bg-[#37474f] rounded-2xl grid 
        grid-cols-[1fr_39rem] gap-5 "
      >
        <div className="p-8 [&>*]:text-balance">
          <h1 className="text-black dark:text-white text-7xl font-black mb-10 font-headers">
            Quizs
          </h1>
          <p className="text-black dark:text-white text-lg  font-black mb-8 font-paragr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            dolore qui voluptatem aut tenetur quod unde vel, veritatis est iste
            ipsam modi amet dignissimos saepe fugiat rem laudantium soluta?
            Dicta praesentium quis soluta quisquam adipisci aperiam rem eius,
            vel voluptates?
          </p>
          <hr />
          <p className="text-black dark:text-white text-lg font-black my-10 font-paragr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            dolore qui voluptatem aut tenetur quod unde vel, veritatis est iste
            ipsam modi amet dignissimos saepe fugiat rem laudantium soluta?
            Dicta praesentium quis soluta quisquam adipisci aperiam rem eius,
            vel voluptates?
          </p>
          <hr />
          <div className="my-10">
            <Button currentStep={0} text="Start!" />
          </div>
        </div>
        <div className="p-8">
          <Image />
        </div>
      </section>
    </>
  );
}

export default MainPage;
