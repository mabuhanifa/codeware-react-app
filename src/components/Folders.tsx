import { useState } from "react";
import Folder from "./Folder";

export default function Folders() {
  const [folders, setFolders] = useState([
    {
      name: "Folder 1",
    },
  ]);
  return (
    <div>
      <h1>Folders</h1>
      {folders.map((folder, i) => (
        <Folder folder={folder} key={i} />
      ))}
    </div>
  );
}
