import { BiDirectionalNode } from "../Node/BiDirectionalNode";
import { Queue } from "../Queue/Queue";

describe('Queue test suite', () => {

	let n1: BiDirectionalNode<string>;
	let n2: BiDirectionalNode<string>;
	let q: Queue<string>;
	let emptyQ: Queue<string>;
	beforeEach(() => {
		n1 = new BiDirectionalNode<string>('Node 1');
		n2 = new BiDirectionalNode<string>('Node 2');
		q = new Queue<string>(n1);
		emptyQ = new Queue<string>();
	});

	test('Queue ctor works', () => {
		expect(q).toBeTruthy();
	});

	test('tail getter throws error on empty queue', () => {
		expect(() => {
			emptyQ.tail;
		}).toThrowError('Queue is empty');
	});

	test('tail getter returns tail', () => {
		expect(q.tail).toBe(n1);
	});

	test('size getter returns queue size', () => {
		expect(q.size).toBe(1);
		expect(emptyQ.size).toBe(0);
	});

	test('maxSize accessor returns maxSize', () => {
		expect(q.maxSize).toBe(Infinity);
		const size2Q = new Queue(null, 2);
		expect(size2Q.maxSize).toBe(2);
	});

	test('peek() returns head and leaves queue unchanged', () => {
		expect(q.peek()).toBe(n1);
		expect(n1.next).toBeNull();
		expect(n1.prev).toBeNull();
	});

	test('peek() on emtpy queue throws error', () => {
		expect(() => {
			emptyQ.peek();
		}).toThrowError('Queue is empty');
	});

	test('enqueue() pushes node onto tail of queue', () => {
		q.enqueue(n2);
		expect(q.tail).toBe(n2);
		expect(n1.next).toBe(n2);
		expect(n2.prev).toBe(n1);
	});

	test('enqueue() on a full bounded queue throws error', () => {
		const boundQ = new Queue<string>(n1, 1);
		expect(() => {
			boundQ.enqueue(n2);
		}).toThrowError('Queue is full');
	});

	test('dequeue() pops head and resets to next in queue', () => {
		const n3 = new BiDirectionalNode<string>('Node 3');
		q.enqueue(n2);
		q.enqueue(n3);
		expect(q.dequeue()).toBe(n1);
		expect(q.peek()).toBe(n2);
		expect(n2.prev).toBeNull();
		expect(n2.next).toBe(n3);
		expect(n3.prev).toBe(n2);
		expect(n3.next).toBeNull();
		expect(q.tail).toBe(n3);
	});

	test('dequeue() throws error if queue is empty', () => {
		expect(() => {
			emptyQ.dequeue();
		}).toThrowError('Queue is empty');
	});

});