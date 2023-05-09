/**
 * @description Footer component
 */
export default function Footer() {
  return (
    <footer className="px-4 py-4 bottom-0">
      <div className="text-xs">
        &copy; 2023-{new Date().getFullYear()} Eri Schön All rights reserved
      </div>
    </footer>
  );
}
