import { useState } from "react";
import down from "../icons/down.png";
import folderIcon from "../icons/folder.png";
import plus from "../icons/plus.png";
import right from "../icons/right.png";
import DeleteModal from "./DeleteModal";
import Modal from "./Modal";

type Props = {
  folder: Folder;
  setFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
};

export default function ChildFolder({ folder, setFolders }: Props) {
  const [collapse, setCollapse] = useState(false);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <div>
      {modal && (
        <Modal view={modal} setModal={setModal} setFolders={setFolders} />
      )}
      {
        <DeleteModal
          view={deleteModal}
          setDeleteModal={setDeleteModal}
          setFolders={setFolders}
          folder={folder}
        />
      }
      <div className="flex items-center gap-x-2">
        <img
          src={collapse ? down : right}
          alt="collapse"
          className="h-5 w-5 cursor-pointer"
          onClick={() => {
            setCollapse((m) => !m);
          }}
        />

        <img src={folderIcon} alt="folder" className="h-5 w-5 cursor-pointer" />
        <h1>{folder.name}</h1>
        <img
          src={plus}
          alt="plus"
          className="h-5 w-5 cursor-pointer"
          onClick={() => setModal(true)}
        />
      </div>
    </div>
  );
}
