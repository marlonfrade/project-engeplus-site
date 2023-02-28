import Logo from "./assets/logo/logo-blue.svg";
import InstagramIcon from "./assets/instagram-icon.svg";
import FacebookIcon from "./assets/facebook-icon.svg";
import LinkedinIcon from "./assets/linkedin-icon.svg";

export default function Navbar() {
  return (
    <nav className="f-f-l relative z-10">
      <div className="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
        <div>
          <img src={Logo} alt="Engeplus Logo" className="w-[400px]" />
        </div>
        <div className="flex items-center text-white text-base font-medium">
          {/* <ul className="flex items-center pr-3 xl:pr-12">
            <li className="cursor-pointer hover:text-gray-300 ease-in">
              <a className="focus:outline-none focus:ring-2 focus:ring-white">
                Home
              </a>
            </li>
            <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
              <a className="focus:outline-none focus:ring-2 focus:ring-white">
                Sobre a Engeplus
              </a>
            </li>
            <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
              <a className="focus:outline-none focus:ring-2 focus:ring-white">
                Social
              </a>
            </li>
          </ul> */}
          <ul className="flex items-center pr-3 xl:pr-12">
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
          {/* <button className="px-6 py-3 bg-green-500 hover:opacity-90 text-white text-base font-medium rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue">
            Entrar em Contato
            <img
              className="ml-4"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg5.svg"
              alt="arrow"
            />
          </button> */}
        </div>
      </div>
    </nav>
  );
}
