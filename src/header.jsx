export default function Header() {
    return(
        <header>
            <div className="header-logo">            
                <a href="/my-portfolio-repo/my-portfolio/index.html" className="header-logo">haru</a>
            </div>
            <div className="header-list">
                <div className="header-left">
                    <a href="/my-portfolio-repo/my-portfolio/blogs/blog.html">Blog</a>
                    <a href="/my-portfolio-repo/my-portfolio/contact/contact.html">Contact</a>
                </div> 
                <a href="https://github.com/rukiii4444" className="header-right"><i className="fa-brands fa-github"></i>GitHub</a>
            </div>
        </header>
    );
}