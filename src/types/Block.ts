export default class Block {
  title: string;
  children?: Block[];

  constructor(title: string, children?: Block[]) {
    this.title = title;
    this.children = children;
  }
}
