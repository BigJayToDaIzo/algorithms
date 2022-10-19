import { KVPair, KVPairSingleDirectionalNode } from "../Node/KVPairSingleDirectionalNode";

describe("KVPairSingleDirectionalNode<KVPair> unit tests", () => {
	const node1Data: KVPair = {key: 'Node 1', value: 'Node1Value'};
	const node2Data: KVPair = {key: 'Node 2', value: 'Node2Value'};
	let node1: KVPairSingleDirectionalNode<KVPair>;
	let node2: KVPairSingleDirectionalNode<KVPair>;

	beforeEach(() => {
		node1 = new KVPairSingleDirectionalNode<KVPair>(node1Data);
		node2 = new KVPairSingleDirectionalNode<KVPair>();

	});

	test('KVPairSingleDirectionalNode ctor works', () => {
		expect(node1).toBeTruthy();
	});

	test('KVPairSingleDirectionalNode key/value accessors work', () => {
		expect(node1._data?.key).toBe('Node 1');
		expect(node1._data?.value).toBe('Node1Value');
		expect(node2.data).toBeNull();
	});

	test('data getter returns _data', () => {
		expect(node1.data).toBe(node1._data);
	});

	test('data setter sets _data field', () => {
		expect(node2.data).toBeNull();
		node2.data = node2Data;
		expect(node2._data).toBeTruthy();
		expect(node2._data?.key).toBe('Node 2');
		expect(node2._data?.value).toBe('Node2Value');
	});

	test('next getter returns _next', () => {
		expect(node1.next).toBe(node1._next);
	});

	test('next setter sets _next field', () => {
		expect(node1._next).toBeNull();
		node1.next = node2;
		expect(node1._next).toBe(node2);
	});




});