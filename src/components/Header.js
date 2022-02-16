import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-8 Header-left">
          <h1>Daniel PRUD'HOMME</h1>
          <h3>Développeur web fullstack</h3>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 Header-right">
          <p>daniel.prudhomme.pro@gmail.com</p>
          <p>06 71 14 45 66</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
