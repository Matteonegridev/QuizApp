type QuestionBoxProp = {
  children: React.ReactNode;
  step: number;
};

function QuestionBox({ children, step }: QuestionBoxProp) {
  return (
    <section className="p-5">
      <h1 className="text-3xl font-headers font-medium dark:text-white">
        Domanda numero {step} !
      </h1>
      {children}
    </section>
  );
}

export default QuestionBox;
