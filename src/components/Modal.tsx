import { useState } from "react";
import remove from "../icons/remove.png";

type Props = {
  view: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFolders: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
      }[]
    >
  >;
};

export default function Modal({ view, setModal, setFolders }: Props) {
  const [title, setTitle] = useState("");

  const closeModal = () => {
    setModal((m) => !m);
  };

  const addFolder = () => {
    console.log(title);
    if (title.trim() === "") {
      return;
    } else {
      setFolders((f) => [...f, { name: title }]);
      closeModal();
    }
  };

  if (!view) {
    return null;
  }

  return (
    <>
      <div className="bg-opacity-30 backdrop-blur-lg fixed inset-0 flex justify-center z-20 py-10">
        <div className="max-w-2xl rounded-xl p-10 relative shad h-max">
          <h1 className="text-2xl font-bold mb-10">Create a new Folder</h1>
          <button
            className=" text-red-500 absolute top-2 right-2 bg-red-200 p-2 rounded-full hover:bg-red-300"
            onClick={closeModal}
          >
            <img src={remove} alt="remove" className="h-5 w-5 cursor-pointer" />
          </button>
          <div>
            <form>
              <input
                type="text"
                placeholder="Title"
                className="p-2 bg-slate-200 w-96"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <br />
              <button
                className="bg-blue-500 px-10 text-white p-2 w-96 rounded my-5"
                onClick={addFolder}
                type="submit"
              >
                Create Folder
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
