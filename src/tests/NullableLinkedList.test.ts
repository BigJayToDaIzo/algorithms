import { NullableLinkedList } from '../LinkedLists/NullableLinkedList';
import { KVPair, KVPairSingleDirectionalNode } from '../Node/KVPairSingleDirectionalNode';

describe('NullableLinkedList test suite', () => {
	let nll: NullableLinkedList<KVPair>;
	let ll: NullableLinkedList<KVPair>;
	let node1: KVPairSingleDirectionalNode<KVPair>;
	let node2: KVPairSingleDirectionalNode<KVPair>;
	let node3: KVPairSingleDirectionalNode<KVPair>;

	beforeEach(() => {
		node1 = new KVPairSingleDirectionalNode<KVPair>({key: 'Node 1', value: 'Node1Value'});
		node2 = new KVPairSingleDirectionalNode<KVPair>({key: 'Node 2', value: 'Node2Value'});
		node3 = new KVPairSingleDirectionalNode<KVPair>({key: 'Node 3', value: 'Node3Value'});

		nll = new NullableLinkedList<KVPair>();
		ll = new NullableLinkedList<KVPair>(node1);
	});


	test('NullableLinkedList ctor works', () => {
		expect(nll).toBeTruthy();

	});

	test('head getter returns _head', () => {
		expect(ll.head).toBe(node1);
	});

	test('pushHead() sets head when list is empty', () => {
		nll.pushHead(node1);
		expect(nll.head).toBe(node1);
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

	test('findNodeByKey() returns node in list that contains node', () => {
		ll.pushHead(node2);
		expect(ll.findNodeByKey('Node 1')).toBe(node1);
		expect(ll.findNodeByKey('Node 2')).toBe(node2);
		expect(ll.findNodeByKey('Node 5')).toBeNull();


	});

});