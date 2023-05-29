import { Link } from "react-scroll";

const SmoothScroll = ({id, title,offset}) => {
    return (
        <Link
          activeClass="active"
          to={id}
          spy={true}
          smooth={true}
          offset={offset}
          duration={500}
          
          className="cursor-pointer"
        >
          {title}
        </Link>
    );
  };
  
  export default SmoothScroll;