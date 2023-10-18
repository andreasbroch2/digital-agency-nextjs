import { images } from '../../constants';
import Image from 'next/image';
import './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Image src={images.ATOnlineBig.src} alt="logo" width="150" height="150" priority />
      </div>
    </nav>
  );
};

export default Navbar;
