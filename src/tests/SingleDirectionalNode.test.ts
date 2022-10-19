import { SingleDirectionalNode } from '../Node/SingleDirectionalNode';

describe('SingleDirectionalNode<string> test suite', () => {
	let node1: SingleDirectionalNode<string>;
	let node2: SingleDirectionalNode<string>;

	beforeEach(() => {
		node1 = new SingleDirectionalNode<string>('Node 1');
	});

	test('ctor works', () => {
		expect(node1).toBeTruthy();
		expect(node2).toBeFalsy();
	});

	// No need to test typing of args in ctor or functions thanks to TypeScript
	// type safety

	test('data getter returns _data', () => {
		expect(node1.data).toBe('Node 1');
	});

	test('data setter sets _data field', () => {
		node1.data = 'Node 2';
		expect(node1._data).toBe('Node 2');
	});

	test('next getter returns _next', () => {
		expect(node1._next).toBeNull();
		node2 = new SingleDirectionalNode<string>('Node 2');
		node1.next = node2;
		expect(node1.next).toBe(node2);
	});

	test('next setter sets _next', () => {
		node2 = new SingleDirectionalNode<string>('Node 2');
		node1.next = node2;
		expect(node1._next).toBe(node2);
	});

});

// No need to test other types thanks to generic typesafety in TypeScript
