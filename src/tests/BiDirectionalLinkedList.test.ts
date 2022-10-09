import { BiDirectionalLinkedList } from '../LinkedLists/BiDirectionalLinkedList';
import { BiDirectionalNode } from '../Node/BiDirectionalNode';

describe('BiDirectional LinkedList test suite', () => {
	let node1: BiDirectionalNode<string>;
	let node2: BiDirectionalNode<string>;
	let linkedList: BiDirectionalLinkedList<string>;

	beforeEach(() => {
		node1 = new BiDirectionalNode<string>('Node 1');
		node2 = new BiDirectionalNode<string>('Node 2');
		linkedList = new BiDirectionalLinkedList<string>(node1);

	});

	test('ctor works', () => {
		expect(linkedList).toBeTruthy();
	});

	test('head getter returns _head', () => {
		expect(linkedList.head).toBe(node1);
	});

	test('tail getter returns _tail', () => {
		expect(linkedList.tail).toBe(node1);
	});

	test('head setter sets _head', () => {
		linkedList.head = node2;
		expect(linkedList._head).toBe(node2);
		expect(node1.prev).toBe(node2);
		expect(node2.next).toBe(node1);

	});

	test('head setter updates tail if they are same node', () => {
		linkedList.head = node2;
		expect(linkedList.tail).toBe(node1);
	});

	test('tail setter sets _tail', () => {
		linkedList.tail = node2;
		expect(linkedList.head).toBe(node1);
		expect(linkedList._tail).toBe(node2);
		expect(node2.prev).toBe(node1);
		expect(node1.next).toBe(node2);
	});

	test('popHead() removes and returns head if head != tail', () => {
		linkedList.tail = node2;
		const poppedHead = linkedList.popHead();
		expect(poppedHead).toBe(node1);
		expect(linkedList.head).toBe(node2);
		expect(node2.prev).toBeNull();
		
	});

	test('popHead() sets tail = head if only head and tail in list', () => {
		linkedList.tail = node2;
		linkedList.popHead();
		expect(linkedList.tail).toBe(linkedList.head);
	});

	test('popHead() returns undefined if popping empties list', () => {
		expect(linkedList.popHead()).toBeUndefined();
	});

	test('popTail() removes and returns tail if tail != head', () => {
		linkedList.tail = node2;
		const poppedTail = linkedList.popTail();
		expect(poppedTail).toBe(node2);
		expect(linkedList.tail).toBe(node1);
		expect(node1.next).toBeNull();
	});

	test('popTail() sets head = tail if only tail and head in list', () => {
		linkedList.tail = node2;
		linkedList.popTail();
		expect(linkedList.head).toBe(linkedList.tail);
	});

	test('popTail() returns undefined if popping empties list', () => {
		expect(linkedList.popTail()).toBeUndefined();
	});

	test('popByData() returns, removes and properly sets pointers when = head', () => {
		linkedList.tail = node2;
		const poppedHead = linkedList.popByData('Node 1');
		expect(poppedHead).toBe(node1);
		expect(linkedList.head).toBe(node2);
	});

	test('popByData() returns, removes and properly sets pointers when = tail', () => {
		linkedList.tail = node2;
		const poppedTail = linkedList.popByData('Node 2');
		expect(poppedTail).toBe(node2);
		expect(linkedList.tail).toBe(node1);
	});

	test('popByData() returns, removes and properly sets pointers when between head/tail', () => {
		linkedList.tail = node2;
		const node3 = new BiDirectionalNode<string>('Node 3');
		linkedList.tail = node3;
		const poppedNode = linkedList.popByData('Node 2');
		expect(poppedNode).toBe(node2);
		expect(node1.next).toBe(node3);
		expect(node3.prev).toBe(node1);
	});

	test('popByData() returns undefined when the node not in list', () => {
		expect(linkedList.popByData('Node 2')).toBeUndefined();
	});


});