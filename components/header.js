const Header = () => (
  <div className="header_background">
    <div className="container">
      <h1 className="header_heading text-light">Cześć,</h1>
      <h2 className="header_second-heading text-light">
        nazywam się Wojciech Gawłowski i jestem spawaczem z wieloletnim
        doświadczeniem. Zajmuję się usługami instylacyjnymi.
      </h2>
      <div className="contact-container">
        <i className="contact-icon fas fa-phone-alt"></i>
        <span className="contact-text">602 673 464</span>
      </div>
      <div className="contact-container">
        <i className="contact-icon fas fa-envelope-open"></i>
        <a className="contact-text" href="mailto:wgawlowski@op.pl">
          wgawlowski@op.pl
        </a>
      </div>
    </div>
  </div>
);

export default Header;
