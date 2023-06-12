import { Link } from "react-scroll";

const SmoothScroll = ({id, title,offset, icon = null , className = ""}) => {
    return (
        <Link
          activeClass="active"
          to={id}
          spy={true}
          smooth={true}
          offset={offset}
          duration={500}
          
          className={`${className} cursor-pointer font-gil text-center`}
        >
          {title}
          {icon}
        </Link>
    );
  };
  
  export default SmoothScroll;