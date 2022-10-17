import { BiDirectionalNode } from '../Node/BiDirectionalNode';
import { Stack } from '../Stack/Stack';

describe('Stack class test suite', () => {
	let n1: BiDirectionalNode<string>;
	let n2: BiDirectionalNode<string>;
	let s: Stack<string>;
	let emptyS: Stack<string>;
	let stackMaxSize2: Stack<string>;
	
	beforeEach(() => {
		n1 = new BiDirectionalNode<string>('Node 1');
		n2 = new BiDirectionalNode<string>('Node 2');
		emptyS = new Stack<string>();
		s = new Stack<string>(n1);
		stackMaxSize2 = new Stack<string>(null, 2);

	});

	test('Stack ctor works', () => {
		expect(s).toBeTruthy();
	});

	test('head getter returns _head', () => {
		expect(s.head).toBe(n1);
	});

	test('head getter throws error when stack empty', () => {
		expect(() => {
			emptyS.head;
		}).toThrowError('Stack is empty');
	});

	test('tail getter returns _tail', () => {
		expect(s.tail).toBe(n1);
	});

	test('tail getter throws error when stack empty', () => {
		expect(() => {
			emptyS.tail;
		}).toThrowError('Stack is empty');
	});

	test('size getter returns _size', () => {
		expect(s.size).toBe(1);
		expect(emptyS.size).toBe(0);
	});

	test('maxSize accessor returns maxSize', () => {
		expect(s.maxSize).toBe(Infinity);
		expect(stackMaxSize2.maxSize).toBe(2);
	});

	test('maxSize accessor updates maxSize', () => {
		stackMaxSize2.maxSize = 3;
		expect(stackMaxSize2.maxSize).toBe(3);
	});

	test('push() adds node to top of stack', () => {
		s.push(n2);
		expect(s.tail).toBe(n2);
		expect(n2.prev).toBe(n1);
		expect(n1.next).toBe(n2);
	});

	test('push() throws error if stack is full', () => {
		stackMaxSize2.push(n1);
		stackMaxSize2.push(n2);
		const n3 = new BiDirectionalNode<string>('Node 3');
		expect(() => {
			stackMaxSize2.push(n3);
		}).toThrowError('Stack is full');
		expect(stackMaxSize2.head).toBe(n1);
		expect(stackMaxSize2.tail).toBe(n2);
	});

	test('peek() returns top of stack but does not remove it', () => {
		expect(s.peek()).toBe(n1);
		expect(s.head).toBe(n1);
	});

	test('peek() throws error if stack is empty', () => {
		expect(() => {
			emptyS.peek();
		}).toThrowError('Stack is empty');
	});

	test('pop() returns and removes top of stack', () => {
		s.push(n2);
		expect(s.pop()).toBe(n2);
		expect(s.head).toBe(n1);
		expect(s.tail).toBe(n1);
	});

	test('pop() throws error if stack is empty', () => {
		expect(() => {
			emptyS.pop();
		}).toThrowError('Stack is empty');
	});

});