import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
      <h6 className="text-3xl">
        Next <span className="text-cyan-700">Hero</span>
      </h6>
      <ul className="flex justify-between items-center space-x-4">
        <li>
          <Link href='/posts'>post</Link>
        </li>
      </ul>
    </nav>
  );
}
