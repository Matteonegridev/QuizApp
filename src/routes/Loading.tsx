function LoadingPage() {
  return (
    <div className="flex  items-center justify-center min-h-screen [&>*]:dark:text-white sm:text-left sm:py-5 sm:px-3 ">
      <h1 className="text-5xl font-headers font-black mr-3">
        <span className="mr-3">Stiamo calcolando il tuo risultato</span>
        <span className="animate-bounce inline-block [animation-delay:-0.3s]">
          .
        </span>
        <span className="animate-bounce inline-block [animation-delay:-0.15s]">
          .
        </span>
        <span className="animate-bounce inline-block">.</span>
      </h1>
    </div>
  );
}
export default LoadingPage;
