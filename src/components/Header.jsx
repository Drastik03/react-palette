import Logo from "../assets/color-palette.png";
export function Header() {
  return (
    <div className="mb-12">
      <nav className="bg-white fixed dark:bg-gray-900 w-full h-16 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between max-sm:mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img className="h-8" src={Logo} alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Palette
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}
