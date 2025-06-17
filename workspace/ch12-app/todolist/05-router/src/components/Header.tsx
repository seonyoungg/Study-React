import { Link } from 'react-router';

function Header() {
  return (
    <>
      <header>
        <h1>Todo List</h1>
        <nav>
          <div>
            <ul>
              <li>
                <Link to='/home'>home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/todoList'>TodoList</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
