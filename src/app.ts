// imports of various algorithm classes
import { LinkedList } from "./LinkedLists/LinkedList";
import { SingleDirectionalNode } from "./Node/SingleDirectionalNode";

// manipulation of the algorithms take place here
const node1 = new SingleDirectionalNode<string>('Node 1');
const node2 = new SingleDirectionalNode<string>('Node 2');
const linkedList = new LinkedList(node1);
linkedList.addToTail(node2);
console.log(linkedList.toString());

// eventually build front end for webapp