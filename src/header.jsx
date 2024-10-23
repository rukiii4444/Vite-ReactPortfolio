import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>
                <nav>
                    <ul className="header-list">
                        <li><Link to="/" className='header-logo'>Haru</Link></li>           
                        <li><Link to="/blogs/Blog">Blog</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li className="header-github">
                            <a href="https://github.com/rukiii4444"><i className="fa-brands fa-github"></i>GitHub</a>
                        </li>
                    </ul>
                </nav>
        </header>
    );
}