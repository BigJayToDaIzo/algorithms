// imports of various algorithm classes
import { SingleDirectionalNode } from "./Node/SingleDirectionalNode";
import { LinkedList } from "./LinkedLists/LinkedList";


// eventually build front end for webapp
const node1 = new SingleDirectionalNode<string>('Node 1');
const node2 = new SingleDirectionalNode<string>('Node 2');
const node3 = new SingleDirectionalNode<string>('Node 3');
const node4 = new SingleDirectionalNode<string>('Node 4');
const ll = new LinkedList(node1);
ll.addToTail(node2);
ll.addToTail(node3);
ll.addToTail(node4);
console.log(ll.nthLastNode(5));