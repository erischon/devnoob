import Link from "next/link";
import Logo from "./Logo";

/**
 * @description Navbar component
 */
export default function Navbar() {
  return (
    <nav className="px-4 py-2 top-0 border-b-1 border-stone-300">
      <div className="flex justify-between flex-col sm:flex-row">
        <Link
          href="/"
          className="no-underline hover:text-stone-500/90 flex w-full items-center justify-start gap-2"
        >
          <Logo />

          <h1 className="text-xl font-bold">Eri Schön</h1>
        </Link>
      </div>
    </nav>
  );
}
