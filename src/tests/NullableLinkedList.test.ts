import { NullableLinkedList } from '../LinkedLists/NullableLinkedList';
import { SingleDirectionalNode } from '../Node/SingleDirectionalNode';

describe('NullableLinkedList test suite', () => {
	let nll: NullableLinkedList<string>;
	let ll: NullableLinkedList<string>;
	let node1: SingleDirectionalNode<string>;
	let node2: SingleDirectionalNode<string>;
	let node3: SingleDirectionalNode<string>;

	beforeEach(() => {
		node1 = new SingleDirectionalNode<string>('Node 1');
		node2 = new SingleDirectionalNode<string>('Node 2');
		node3 = new SingleDirectionalNode<string>('Node 3');

		nll = new NullableLinkedList<string>();
		ll = new NullableLinkedList<string>(node1);
	});


	test('NullableLinkedList ctor works', () => {
		expect(nll).toBeTruthy();

	});

	test('head getter returns _head', () => {
		expect(ll.head?.data).toBe('Node 1');
	});

	test('pushHead() sets head when list is empty', () => {
		nll.pushHead(node1);
		expect(nll.head?.data).toBe('Node 1');
	});

	test('pushHead() sets head and updates pointers of old head', () => {
		ll.pushHead(node2);
		expect(ll.head).toBe(node2);
		expect(ll.head?.next).toBe(node1);
		ll.pushHead(node3);
		expect(ll.head).toBe(node3);
		expect(ll.head?.next).toBe(node2);
	});

	test('pushTail() sets head when list is empty', () => {
		nll.pushTail(node1);
		expect(nll.head).toBe(node1);
		expect(nll.head?.next).toBeNull();
	});

	test('pushTail() appends node to end of list and updates pointers of old tail', () => {
		ll.pushTail(node2);
		expect(node1.next).toBe(node2);
		ll.pushTail(node3);
		expect(node2.next).toBe(node3);
		expect(node3.next).toBeNull();
	});

	test('findNode() returns node in list that contains node', () => {
		ll.pushHead(node2);
		expect(ll.findNode('Node 1')).toBe(node1);
		expect(ll.findNode('Node 2')).toBe(node2);

	});

	test('findNode() returns null when the node is not in the list', () => {
		expect(ll.findNode('Node 1')).toBe(node1);
		expect(ll.findNode('Node 5')).toBeNull();
		
	});


});