import { LinkedList } from '../LinkedLists/LinkedList';
import { SingleDirectionalNode } from '../Node/SingleDirectionalNode';

describe('LinkedList<string> test suite', () => {
	let linkedList1: LinkedList<string>;
	let node1: SingleDirectionalNode<string>;
	let node2: SingleDirectionalNode<string>;

	beforeEach(() => {
		node1 = new SingleDirectionalNode<string>('Node 1');
		node2 = new SingleDirectionalNode<string>('Node 2');
		linkedList1 = new LinkedList<string>(node1);
	});

	test('ctor works', () => {
		expect(linkedList1).toBeTruthy();
	});

	test('_head getter returns the head', () => {
		expect(linkedList1.head).toBe(node1);
	});

	test('addToHead() updates the head', () =>{
		expect(linkedList1.head).toBe(node1);
		linkedList1.addToHead(node2);
		expect(linkedList1.head).toBe(node2);
		expect(node2.next).toBe(node1);
	});

	test('removeFromHead() updates head', () => {
		linkedList1.addToHead(node2);
		const removedHead = linkedList1.removeFromHead();
		expect(removedHead).toBe(node2);
		expect(linkedList1.head).toBe(node1);
	});

	test('addToTail() adds node to end of list', () => {
		linkedList1.addToTail(node2);
		expect(node1.next).toBe(node2);
		expect(node2.next).toBeNull();
	});

	test('removeTail() removes node from end of list', () => {
		const node3 = new SingleDirectionalNode<string>('Node 3');
		linkedList1.addToTail(node2);
		expect(node1.next).toBe(node2);
		linkedList1.addToTail(node3);
		expect(node2.next).toBe(node3);

	});

});