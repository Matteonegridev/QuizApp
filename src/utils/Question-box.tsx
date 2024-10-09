type QuestionBoxProp = {
  children: React.ReactNode;
  step: number;
};

function QuestionBox({ children, step }: QuestionBoxProp) {
  return (
    <section className="p-5 mt-5 shadow-xl w-3/5 m-auto flex flex-col gap-5 items-center sm:w-full md:w-[80%]">
      <h1 className="text-4xl font-headers font-bold dark:text-white sm:text-2xl ">
        Domanda numero {step} !
      </h1>
      {children}
    </section>
  );
}

export default QuestionBox;
