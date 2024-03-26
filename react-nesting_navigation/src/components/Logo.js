import { Image } from "./Image";
import logo from "../img/logo.jpg";

function Logo() {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
}
export { Logo };
