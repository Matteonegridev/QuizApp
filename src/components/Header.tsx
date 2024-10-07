import DarkToggle from "../utils/Dark-toggle";

function Header() {
  return (
    <>
      <header className="bg-transparent p-6 ">
        <nav className="flex justify-around items-center">
          <h1 className="dark:text-white font-bold text-4xl">
            Quiz
            <span className="dark:text-orange-400 font-normal">
              <em>2Impact</em>
            </span>
          </h1>
          <DarkToggle />
        </nav>
      </header>
    </>
  );
}
export default Header;
