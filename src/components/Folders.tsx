import { useState } from "react";
import Folder from "./Folder";

export default function Folders() {
  const id = new Date().valueOf();

  const [folders, setFolders] = useState<Folder[]>([
    {
      id: id,
      name: "Folder 1",
      parent: id,
      children: [
        {
          id: id + 1,
          name: "Folder 1.1",
          parent: id,
        },
      ],
    },
  ]);
  return (
    <div>
      <h1>Folders</h1>
      {folders.map((folder, i) => (
        <Folder folder={folder} key={i} setFolders={setFolders} />
      ))}
    </div>
  );
}
