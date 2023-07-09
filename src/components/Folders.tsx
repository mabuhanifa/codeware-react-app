import { useState } from "react";
import Folder from "./Folder";

export default function Folders() {
  const id = new Date().valueOf();

  const [folders, setFolders] = useState<Folder[]>([
    {
      name: "Root",
      id: 1111,
      parent: null,
      children: [
        {
          id: 544311134,
          name: "Folder 1",
          parent: 1111,
          children: [
            {
              id: 5443115134,
              name: "Folder 1.1",
              parent: 544311134,
              children: [{ id: 5443115134, name: "Folder 1.2", parent: id }],
            },
          ],
        },
        {
          id: 257875741,
          name: "Folder 1.3",
          parent: 1111,
          children: [
            {
              id: 2578757411,
              name: "Folder 1.1",
              parent: 257875741,
              children: [
                { id: 25787574115, name: "Folder 1.2", parent: 2578757411 },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="p-20">
      <h1>Folders</h1>
      {folders.map((folder, i) => (
        <Folder folder={folder} key={i} setFolders={setFolders} />
      ))}
    </div>
  );
}
