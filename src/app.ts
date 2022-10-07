// imports of various algorithm classes
import { BiDirectionalNode } from "./Node/BiDirectionalNode";

// manipulation of the algorithms take place here
const node1 = new BiDirectionalNode<string>('Node 1');
const node2 = new BiDirectionalNode<string>('Node 2');
node1.next = node2;
node2.prev = node1;
console.log(node2.toString());
console.log(node1.toString());
node1.prev = node2;
node2.next = node1;
console.log(node1.toString());
console.log(node2.toString());

// eventually build front end for webapp