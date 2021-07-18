import Brand from './Brand';
import Menu from './Menu';

function Header() {
  return (
    <header className="header px-5">
      <Brand />
      <Menu />
      <nav>
        <ul>
          <li>
            <i className="fa fa-search"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
