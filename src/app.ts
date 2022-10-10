// imports of various algorithm classes
import { SingleDirectionalNode } from "./Node/SingleDirectionalNode";
import { LinkedList } from "./LinkedLists/LinkedList";

// manipulation of the algorithms take place here
const node1 = new SingleDirectionalNode<string>('Node 1');
const node2 = new SingleDirectionalNode<string>('Node 2');
const node3 = new SingleDirectionalNode<string>('Node 3');
const node4 = new SingleDirectionalNode<string>('Node 4');
const linkedList = new LinkedList(node1);
linkedList.addToTail(node2);
linkedList.addToTail(node3);
linkedList.addToTail(node4);
linkedList.swapElements('Node 2', 'Node 4');
console.log(linkedList.toString());


// eventually build front end for webapp