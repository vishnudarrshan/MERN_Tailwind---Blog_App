import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 sticky">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          VD's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          className="max-lg:hidden "
          type="text"
          placeholder="search"
          rightIcon={AiOutlineSearch}
        />
      </form>
      <Button className="max-lg:block hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className=" max-sm:block hidden" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to={"/sign-in"}>
          <Button outline gradientDuoTone={"purpleToBlue"}>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle color="gray" />
      </div>{" "}
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"/about"}>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as="div">
          <Link to={"/projects"}>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
