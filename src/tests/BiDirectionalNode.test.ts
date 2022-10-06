import { BiDirectionalNode } from '../Node/BiDirectionalNode';

describe('BiDirectionalNode test suite', () => {
	let node1: BiDirectionalNode<string>;
	let node2: BiDirectionalNode<string>;

	beforeEach(() => {
		node1 = new BiDirectionalNode<string>('Node 1');
		node2 = new BiDirectionalNode<string>('Node 2');
		node1.prev = node2;
	});

	test('ctor works', () => {
		expect(node1).toBeTruthy();
	});

	test('_prev setter sets previous node', () => {
		expect(node1._prev).toBe(node2);
	});

	test('_prev getter returns prev node', () => {
		expect(node1.prev).toBe(node2);
	});

});
