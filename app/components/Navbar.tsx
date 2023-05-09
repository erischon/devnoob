import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-md z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-xl font-bold dark:text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="dark:text-white/90 no-underline hover:text-gray-600 dark:hover:text-white"
          >
            Dev Noob
          </Link>
        </h1>

        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 dark:text-white text-xl lg:text-2xl">
          <Link className="text-white/90 hover:text-white" href="">
            <FaYoutube />
          </Link>

          <Link className="text-white/90 hover:text-white" href="">
            <FaLaptop />
          </Link>

          <Link className="text-white/90 hover:text-white" href="">
            <FaGithub />
          </Link>

          <Link className="text-white/90 hover:text-white" href="">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
}
