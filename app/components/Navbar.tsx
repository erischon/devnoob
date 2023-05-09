import Link from "next/link";

/**
 * @description Navbar component
 */
export default function Navbar() {
  return (
    <nav className="px-4 py-2 top-0 border-b-1 border-stone-300">
      <div className="flex justify-between flex-col sm:flex-row">
        <h1 className="text-xl font-bold mb-2 md:mb-0">
          <Link href="/" className="no-underline hover:text-stone-500/90">
            Eri Schön
          </Link>
        </h1>
      </div>
    </nav>
  );
}
