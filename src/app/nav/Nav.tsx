import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav className="flex justify-center space-x-4">
      {["SSG", "ISR", "SSR", "CSR"].map((strategy) => (
        <Link key={strategy} href={`/${strategy.toLowerCase()}`}>
          <a className="text-blue-500 hover:text-blue-700">{strategy}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
