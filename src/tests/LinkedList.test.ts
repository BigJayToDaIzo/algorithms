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

	test('swapElements() swaps elements and updates pointers if elem is head', () => {
		const node3 = new SingleDirectionalNode<string>('Node 3');
		const node4 = new SingleDirectionalNode<string>('Node 4');
		linkedList1.addToTail(node2);
		linkedList1.addToTail(node3);
		linkedList1.addToTail(node4);
		linkedList1.swapElements('Node 2', 'Node 1');
		expect(linkedList1.head).toBe(node2);
		expect(node2.next).toBe(node1);
	});

	test('swapElements() swaps elements and updates pointers if elems are non-adjacent', () => {
		const node3 = new SingleDirectionalNode<string>('Node 3');
		const node4 = new SingleDirectionalNode<string>('Node 4');
		const node5 = new SingleDirectionalNode<string>('Node 5');
		linkedList1.addToTail(node2);
		linkedList1.addToTail(node3);
		linkedList1.addToTail(node4);
		linkedList1.addToTail(node5);
		linkedList1.swapElements('Node 2', 'Node 4');
		expect(node1.next).toBe(node4);
		expect(node2.next).toBe(node5);

	});

	test('swapElements() swaps elems and updates pointers if elem at end of list', () => {
		const node3 = new SingleDirectionalNode<string>('Node 3');
		const node4 = new SingleDirectionalNode<string>('Node 4');
		linkedList1.addToTail(node2);
		linkedList1.addToTail(node3);
		linkedList1.addToTail(node4);
		linkedList1.swapElements('Node 2', 'Node 4');
		expect(node2.next).toBeNull();
		expect(node4.next).toBe(node3);
	});

	test('swapElements() swaps elems and updates pointers if elems are adjacent', () => {
		const node3 = new SingleDirectionalNode<string>('Node 3');
		const node4 = new SingleDirectionalNode<string>('Node 4');
		linkedList1.addToTail(node2);
		linkedList1.addToTail(node3);
		linkedList1.addToTail(node4);
		linkedList1.swapElements('Node 2', 'Node 3');
		expect(node1.next).toBe(node3);
		expect(node3.next).toBe(node2);
		expect(node2.next).toBe(node4);
	});

	test('swapElements() does nothing & logs console if elems are the same', () =>{
		const logSpy = jest.spyOn(console, 'log');
		linkedList1.addToTail(node2);
		linkedList1.swapElements('Node 2', 'Node 2');
		expect(node1.next).toBe(node2);
		expect(node2.next).toBeNull();
		expect(logSpy).toHaveBeenCalledWith('Elements are identical, no swap executed.');
	});

	test('swapElements() does nothing & logs console if both elems not found', () => {
		const logSpy = jest.spyOn(console, 'log');
		linkedList1.addToTail(node2);
		linkedList1.swapElements('Node 2', 'Node 3');
		expect(node2.next).toBeNull();
		expect(logSpy).toHaveBeenCalledWith('Both elements not found, no swap executed.');
	});

	test('nthLastNode() returns the node n steps before the tail', () => {
		const node3 = new SingleDirectionalNode<string>('Node 3');
		const node4 = new SingleDirectionalNode<string>('Node 4');
		linkedList1.addToTail(node2);
		linkedList1.addToTail(node3);
		linkedList1.addToTail(node4);		
		expect(linkedList1.nthLastNode(1)).toBe(node4);
		expect(linkedList1.nthLastNode(2)).toBe(node3);
		expect(linkedList1.nthLastNode(3)).toBe(node2);
		expect(linkedList1.nthLastNode(4)).toBe(node1); 

	});

	test('nthLastNode() returns null and logs console if n overflows list', () => {
		const logSpy = jest.spyOn(console, 'log');
		const node3 = new SingleDirectionalNode<string>('Node 3');
		linkedList1.addToTail(node2);
		linkedList1.addToTail(node3);
		expect(linkedList1.nthLastNode(4)).toBeNull();
		expect(logSpy).toHaveBeenCalledWith('n exceeds length of list');
	});

	test('findMiddle() returns middle node in an odd length list', () => {
		const node3 = new SingleDirectionalNode<string>('Node 3');
		const node4 = new SingleDirectionalNode<string>('Node 4');
		const node5 = new SingleDirectionalNode<string>('Node 5');
		linkedList1.addToTail(node2);
		linkedList1.addToTail(node3);
		linkedList1.addToTail(node4);
		linkedList1.addToTail(node5);
		expect(linkedList1.findMiddle()).toBe(node3);

	});

	test('findMiddle() returns right weighted middle in even length list', () => {
		const node3 = new SingleDirectionalNode<string>('Node 3');
		const node4 = new SingleDirectionalNode<string>('Node 4');
		linkedList1.addToTail(node2);
		linkedList1.addToTail(node3);
		linkedList1.addToTail(node4);
		expect(linkedList1.findMiddle()).toBe(node3);
	});

});