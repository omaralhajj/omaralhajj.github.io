export type BaseNode = {
    name: string;
    parent?: DirectoryNode;
};

export type FileNode = BaseNode & {
    type: "file";
    content: string | (() => string);
};

export type DirectoryNode = BaseNode & {
    type: "directory";
    children: VFSNode[];
};

export type VFSNode = FileNode | DirectoryNode;

export class VirtualFileTree {
    root: DirectoryNode;
    current: DirectoryNode;

    constructor(root: DirectoryNode) {
        this.root = root;
        this.current = root;
    }

    getPath(): string {
        const parts: string[] = [];
        let node: DirectoryNode | undefined = this.current;
        while (node && node !== this.root) {
            parts.unshift(node.name);
            node = node.parent;
        }
        return parts.length === 0 ? "~" : "~/" + parts.join("/");
    }
}