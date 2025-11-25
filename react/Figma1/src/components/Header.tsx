export function Header() {
  return (
    <header className="ml-80 bg-gray-900 text-white">
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex gap-8">
          <a href="#" className="text-sm hover:text-gray-300 transition-colors">WORK</a>
          <a href="#" className="text-sm hover:text-gray-300 transition-colors">ABOUT</a>
          <a href="#" className="text-sm hover:text-gray-300 transition-colors">CONTACT</a>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-sm hover:text-gray-300 transition-colors">INSTAGRAM</a>
          <a href="#" className="text-sm hover:text-gray-300 transition-colors">BEHANCE</a>
          <a href="#" className="text-sm hover:text-gray-300 transition-colors">DRIBBBLE</a>
        </div>
      </nav>
    </header>
  );
}
