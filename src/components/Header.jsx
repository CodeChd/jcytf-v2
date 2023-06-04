import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className}  relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-amber-400
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="w-full h-full flex justify-between p-2 px-32 bg-white text-gray-950">
      <Link href='/' className="LOGO flex items-center ">
        <img src="/images/logo.png" width={80} alt="logo" />
        <h2 className=" uppercase text-lg px-2  font-medium w-[5rem] ml-1 border-solid border-gray-800 border-l-2">
          JCYTF CHURCH
        </h2>
      </Link>

      <nav className="flex gap-8 text-lg font-medium items-center uppercase ">
        <CustomLink href="/about" title="About" className="" />
        <CustomLink href="/connect" title="Connect" className="" />
        <CustomLink href="/events" title="Events" className="" />
        <CustomLink href="/devotional" title="Devotional" className="" />
        <CustomLink href="/partners" title="Partners" className="" />
        <CustomLink href="/give" title="Give" className="" />
      </nav>
    </header>
  );
};

export default Header;
