// imports of various algorithm classes
import { NullableLinkedList } from "./LinkedLists/NullableLinkedList";
import { SingleDirectionalNode } from "./Node/SingleDirectionalNode";


// eventually build front end for webapp
const n1 = new SingleDirectionalNode<string>('Node 1');
const n2 = new SingleDirectionalNode<string>('Node 2');
const n3 = new SingleDirectionalNode<string>('Node 3');
const ll = new NullableLinkedList<string>(n1);
ll.pushTail(n2);
ll.pushTail(n3);
const output = ll.toString();
console.log(output);