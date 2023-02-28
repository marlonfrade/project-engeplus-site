import Logo from "./assets/logo/logo-blue.svg";
import InstagramIcon from "./assets/instagram-icon.svg";
import FacebookIcon from "./assets/facebook-icon.svg";
import LinkedinIcon from "./assets/linkedin-icon.svg";

export default function MobileNavbar({ menu, setMenu }) {
  return (
    <nav className="lg:hidden relative z-50">
      <div className="flex py-2 justify-between items-center px-4">
        <div>
          <img src={Logo} alt="Engeplus Logo" />
        </div>
        <div className="visible flex items-center">
          <button
            id="open"
            onClick={() => setMenu(!menu)}
            className={` ${
              menu ? "hidden" : ""
            } focus:outline-none focus:ring-2 focus:ring-black`}
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg2.svg"
              alt="menu"
            />
          </button>
          {/* <ul
            id="list"
            className={` ${
              menu ? "" : "hidden"
            } p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24`}
          >
            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-custom-blue focus:text-custom-blue focus:outline-none">
              <a className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                <span className="font-bold">Home</span>
              </a>
            </li>
            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-custom-blue focus:text-custom-blue focus:outline-none">
              <a className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                <span className="font-bold">Sobre a Engeplus</span>
              </a>
            </li>

            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-custom-blue focus:text-custom-blue focus:outline-none">
              <a className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                <span className="font-bold">Social</span>
              </a>
            </li>
            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-custom-blue focus:text-custom-blue focus:outline-green-500">
              <a className="ml-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <span className="font-bold">Entrar em contato</span>
              </a>
            </li>
          </ul> */}
          <ul
            id="list"
            className={` ${
              menu ? "" : "hidden"
            } p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24`}
          >
            <li className="cursor-pointer hover:text-gray-300 ease-in">
              <a
                href="https://www.instagram.com/enge.plus/"
                className="focus:outline-none focus:ring-2 focus:ring-white"
              >
                <img src={InstagramIcon} />
              </a>
            </li>
            <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
              <a
                href="https://www.facebook.com/engeplus"
                className="focus:outline-none focus:ring-2 focus:ring-white"
              >
                <img src={FacebookIcon} />
              </a>
            </li>
            <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
              <a
                href="https://www.linkedin.com/company/enge-plus/"
                className="focus:outline-none focus:ring-2 focus:ring-white"
              >
                <img src={LinkedinIcon} />
              </a>
            </li>
          </ul>
          <div className="xl:hidden">
            <button
              id="close"
              className={` ${
                menu ? "" : "hidden"
              } close-m-menu focus:ring-2 focus:ring-black focus:outline-none`}
              onClick={() => setMenu(!menu)}
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg3.svg"
                alt="close"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
