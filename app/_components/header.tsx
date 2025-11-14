import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-5 py-6">
      <Image src="/logo.svg" alt="BarberApp Logo" width={100} height={26.09} />
    </header>
  );
}

export default Header;
