import logo from "../images/newlogo.png";

const NavbarItems = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-20 cursor-pointer" />
      </div>

      <ul className="text-white md:flex  list-none flex-row justify-between items-center flex-initial">
      {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Mint
        </li> */}

        {["Markets", "Exchanges", "Tutorials", "Wallets"].map((item, index) => (
          <NavbarItems
            key={item + index}
            title={item}
            classProps="my-2 text-lg"
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
