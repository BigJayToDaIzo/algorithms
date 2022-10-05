// imports of various algorithm classes
import { SingleDirectionalNode } from "./Node/SingleDirectionalNode";

// manipulation of all the algorithms take place here
const node1 = new SingleDirectionalNode<number>();
node1.setData(1);
const node2 = new SingleDirectionalNode<number>();
node2.setData(2);
node1.setNext(node2);
console.log(node1.toString());
console.log(node2.toString());
