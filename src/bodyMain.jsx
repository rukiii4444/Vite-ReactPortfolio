export default function Main() {
    return(
        <main>
            <p className="main-title">creat design.</p>
            <p className="sub-title">My portfolio</p>
            <div className="contents">
                <p className="contents-title">Contents list</p>
                <div className="contents-item-list">
                <div className="contents-item">
                    <img 
                    src="/my-portfolio-repo/my-portfolio/portfolio-contents/calclator-Javascript/スクリーンショット 2023-10-27 20.09.39.jpeg" 
                    alt="" 
                    className="contents-thumbnail" 
                    />
                    <a href="https://rukiii4444.github.io/calc.js/" className="contents-text">
                    Calc JavaScript
                    </a>
                </div>
                <div className="clear"></div>
                </div>
            </div>
        </main>
    );

}