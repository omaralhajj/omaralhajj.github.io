import type { DirectoryNode, FileNode, VFSNode } from "./VirtualFileTree";

function file(name: string, content: string): FileNode {
  return { type: "file", name, content };
}

function dir(name: string, children: VFSNode[]): DirectoryNode {
  return { type: "directory", name, children };
}

function setParents(node: DirectoryNode): void {
  for (const child of node.children) {
    child.parent = node;
    if (child.type === "directory") setParents(child);
  }
}

export function buildTree(): DirectoryNode {
  const root = dir("~", [
    file("about.txt", "Omar Alhajj — Software Engineer\nBuilding things. Based in Denmark."),
    dir("experience", [
      file("experience.txt", "TODO: populate from site data"),
    ]),
    dir("projects", [
      file("projects.txt", "TODO: populate from site data"),
    ]),
    file(
      "contact.txt",
      "Email:    omar@alhajj.dev\nGitHub:   github.com/omaralhajj\nLinkedIn: linkedin.com/in/omaralhajj",
    ),
  ]);
  setParents(root);
  return root;
}
