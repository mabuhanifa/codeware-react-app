import { useState } from "react";
import down from "../icons/down.png";
import folderIcon from "../icons/folder.png";
import plus from "../icons/plus.png";
import right from "../icons/right.png";

export default function Folder({ folder }: { folder: { name: string } }) {
  const [collapse, setCollapse] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <img
          src={collapse ? down : right}
          alt="collapse"
          className="h-5 w-5 cursor-pointer"
        />

        <img src={folderIcon} alt="folder" className="h-5 w-5 cursor-pointer" />
        <h1>Folder</h1>
        <img src={plus} alt="plus" className="h-5 w-5 cursor-pointer" />
      </div>
    </div>
  );
}
