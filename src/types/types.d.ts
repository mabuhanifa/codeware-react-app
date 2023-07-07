type Folder = {
  id: number;
  name: string;
  parent: number | null;
  children?: Folder[] | null;
};
