import LeftMenu from "./HeaderLeftMenu";
import SearchBar from "./HeaderSearchBar";

function Header() {
  return (
    <header className="header">
      <LeftMenu />
      <SearchBar />
    </header>
  );
}
export default Header;
