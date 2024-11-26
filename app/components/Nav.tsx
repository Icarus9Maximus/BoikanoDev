const Nav = () => {
  return (
    <div className="navbar bg-success">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Boikano.dev</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href="#about">About</a></li>
      <li>
        <details>
          <summary>More</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Nav;