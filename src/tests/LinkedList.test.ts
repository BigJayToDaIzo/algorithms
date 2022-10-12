import { SingleDirectionalNode } from '../Node/SingleDirectionalNode';
import { generateTestLinkedList } from './helpers/generateTestLinkedList';

describe('LinkedList<string> test suite', () => {
	test('ctor works', () => {
		const ll = generateTestLinkedList(1);
		expect(ll).toBeTruthy();
	});

	test('head getter returns the _head', () => {
		const ll = generateTestLinkedList(1);
		expect(ll.head.data).toBe('Node 1');
	});

	test('pushHead() updates the head', () =>{
		const ll = generateTestLinkedList(1);
		const node2 = new SingleDirectionalNode<string>('Node 2');
		ll.pushHead(node2);
		expect(ll.head).toBe(node2);
		expect(node2.next?.data).toBe('Node 1');
	});

	test('popHead() removes and returns head', () => {
		const ll = generateTestLinkedList(2);
		const poppedHead = ll.popHead();
		expect(poppedHead.data).toBe('Node 1');
		expect(ll.head.data).toBe('Node 2');
	});

	test('pushTail() adds node to end of list', () => {
		const ll = generateTestLinkedList(1);
		const node2 = new SingleDirectionalNode<string>('Node 2');
		ll.pushTail(node2);
		expect(ll.head.next).toBe(node2);
	});

	test('popTail() removes and returns node from end of list', () => {
		const ll = generateTestLinkedList(2);
		const poppedTail = ll.removeTail();
		expect(ll.head.next).toBeNull();
		expect(poppedTail.data).toBe('Node 2');		

	});

	test('findElement() finds and returns element', () => {
		const ll = generateTestLinkedList(5);
		const elem = ll.findElement('Node 3');
		expect(elem?.data).toBe('Node 3');
		const elemIsHead = ll.findElement('Node 1');
		expect(elemIsHead?.data).toBe('Node 1');
		const elemIsTail = ll.findElement('Node 5');
		expect(elemIsTail?.data).toBe('Node 5');
	});

	test('findElement() returns null if element does not exist', () => {
		const ll = generateTestLinkedList(3);
		expect(ll.findElement('Node 99')).toBeNull();
	});

	test('swapElements() swaps elements and updates pointers if elem is head', () => {
		const ll = generateTestLinkedList(3);
		ll.swapElements('Node 2', 'Node 1');
		expect(ll.head.data).toBe('Node 2');
		const node2 = ll.findElement('Node 2');
		expect(node2?.next).toBe(ll.findElement('Node 1'));
	});

	test('swapElements() swaps elements and updates pointers if elems are non-adjacent', () => {
		const ll = generateTestLinkedList(5);
		ll.swapElements('Node 2', 'Node 4');
		expect(ll.findElement('Node 1')?.next).toBe(ll.findElement('Node 4'));
		expect(ll.findElement('Node 3')?.next).toBe(ll.findElement('Node 2'));

	});

	test('swapElements() swaps elems and updates pointers if elem at end of list', () => {
		const ll = generateTestLinkedList(4);
		ll.swapElements('Node 2', 'Node 4');
		expect(ll.findElement('Node 1')?.next).toBe(ll.findElement('Node 4'));
		expect(ll.findElement('Node 2')?.next).toBeNull();
	});

	test('swapElements() swaps elems and updates pointers if elems are adjacent', () => {
		const ll = generateTestLinkedList(4);
		ll.swapElements('Node 2', 'Node 3');
		expect(ll.findElement('Node 1')?.next).toBe(ll.findElement('Node 3'));
		expect(ll.findElement('Node 3')?.next).toBe(ll.findElement('Node 2'));
		expect(ll.findElement('Node 2')?.next).toBe(ll.findElement('Node 4'));
	});

	test('swapElements() does nothing & logs console if elems are the same', () =>{
		const ll = generateTestLinkedList(2);
		const logSpy = jest.spyOn(console, 'log');
		ll.swapElements('Node 2', 'Node 2');
		expect(ll.findElement('Node 1')?.next).toBe(ll.findElement('Node 2'));
		expect(ll.findElement('Node 2')?.next).toBeNull;
		expect(logSpy).toHaveBeenCalledWith('Elements are identical, no swap executed.');
	});

	test('swapElements() does nothing & logs console if both elems not found', () => {
		const ll = generateTestLinkedList(2);
		const logSpy = jest.spyOn(console, 'log');
		ll.swapElements('Node 2', 'Node 3');
		expect(ll.findElement('Node 2')?.next).toBeNull();
		expect(logSpy).toHaveBeenCalledWith('Both elements not found, no swap executed.');
	});

	test('nthLastNode() returns the node n steps before the tail', () => {
		const ll = generateTestLinkedList(4);
		expect(ll.nthLastNode(1)).toBe(ll.findElement('Node 4'));
		expect(ll.nthLastNode(2)).toBe(ll.findElement('Node 3'));
		expect(ll.nthLastNode(3)).toBe(ll.findElement('Node 2'));
		expect(ll.nthLastNode(4)).toBe(ll.findElement('Node 1')); 
	});

	test('nthLastNode() returns null and logs console if n overflows list', () => {
		const logSpy = jest.spyOn(console, 'log');
		const ll = generateTestLinkedList(3);
		expect(ll.nthLastNode(4)).toBeNull();
		expect(logSpy).toHaveBeenCalledWith('n exceeds length of list');
	});

	test('findMiddle() returns middle node in an odd length list', () => {
		const ll = generateTestLinkedList(5);
		expect(ll.findMiddle()).toBe(ll.findElement('Node 3'));
	});

	test('findMiddle() returns right weighted middle in even length list', () => {
		const ll = generateTestLinkedList(4);
		expect(ll.findMiddle()).toBe(ll.findElement('Node 3'));
	});

});