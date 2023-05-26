import Link from "next/link";
import { useRouter } from "next/router";


const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className}  relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-white
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
    <header className="w-full h-full flex justify-between p-2 px-32 bg-slate-950 text-white">

      <div className="LOGO flex items-center">
        <img src="/images/logo.png" width={90} alt="logo" />
        <h2 className="text-xl p-2 w-[7rem] ml-1 border-solid border-l-2">JCYTF CHURCH</h2>
      </div>
     
        <nav className="flex gap-8 text-lg font-medium items-center uppercase ">
            <CustomLink href="/visit" title="Visit" className=""/>
            <CustomLink href="/connect" title="Connect" className=""/>
            <CustomLink href="/events" title="Events" className=""/>
            <CustomLink href="/partners" title="Partners" className=""/>
        </nav>
    </header>
  )
}

export default Header