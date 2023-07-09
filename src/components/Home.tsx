import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="m-20 ">
      <ul className="flex gap-x-20 text-lg font-bold">
        <li className="p-5 bg-gray-300 rounded-lg cursor-pointer">
          Problem Solving
        </li>
        <li className="p-5 bg-gray-300 rounded-lg cursor-pointer">
          <Link to="/folders">Folders</Link>
        </li>
        <li className="p-5 bg-gray-300 rounded-lg cursor-pointer">Cart</li>
      </ul>
    </div>
  );
}
