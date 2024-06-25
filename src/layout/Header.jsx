function Header () {
    return (
        <nav className="light-blue darken-3">
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">React Movies Database</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
        </ul>
        </div>
        </nav>
    );
}

export { Header }