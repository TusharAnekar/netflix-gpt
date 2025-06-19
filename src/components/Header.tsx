import { Link } from "react-router-dom";

const Header = (): React.JSX.Element => (
  <header className="flex items-center justify-between p-4 opacity-80 bg-black">
    <Link to="/">
      <img
        alt="Netflix"
        className="h-18 w-auto"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
    </Link>

    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <Link
            className="text-white hover:text-gray-300 bg-red-700 px-4 py-2 rounded"
            to="/login"
          >
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
