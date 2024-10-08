import DarkToggle from "../utils/Dark-toggle";

function Header() {
  return (
    <>
      <header className="bg-transparent p-6 ">
        <nav className="flex justify-around items-center">
          <h1 className="dark:text-white font-bold text-4xl">
            Quiz
            <span className="dark:text-orangeAccent font-normal text-violet-600">
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
