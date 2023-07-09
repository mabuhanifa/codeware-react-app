import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="m-20 ">
      <ul className="flex gap-x-20 text-lg font-bold">
        <li className="p-5 bg-gray-300 rounded-lg cursor-pointer">
          <a
            href="https://github.com/mabuhanifa/codeware-node-app/blob/main/problem1.ts"
            target="_blank"
            rel="noreferrer"
          >
            Problem 1
          </a>
        </li>
        <li className="p-5 bg-gray-300 rounded-lg cursor-pointer">
          <Link to="/folders">Folders</Link>
        </li>
        <li className="p-5 bg-gray-300 rounded-lg cursor-pointer">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}
