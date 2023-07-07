import folderIcon from "../icons/folder.png";

export default function Folder({ folder }: { folder: { name: string } }) {
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <img src={folderIcon} alt="" className="h-5 w-5" />
        <h1>Folder</h1>
      </div>
    </div>
  );
}
