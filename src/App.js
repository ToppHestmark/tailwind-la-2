import "./tailwind.css";

function App() {
  return (
    <>
      <nav className="font-sans flex  text-center sm:text-left justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a
            href="/home"
            className="font-semibold text-2xl no-underline text-grey-darkest hover:text-blue-dark"
          >
            Logo
          </a>
        </div>
        <img
          style={{ maxWidth: "70px" }}
          className="flex align-end sm:hidden"
          src="./images/menu.svg"
          alt="menu"
        />

        <div className="hidden sm:block">
          <a
            href="/one"
            className="text-lg p-6 no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Register
          </a>
          <a
            href="/two"
            className="text-lg p-6 no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Login
          </a>
        </div>
      </nav>
    </>
  );
}

export default App;
