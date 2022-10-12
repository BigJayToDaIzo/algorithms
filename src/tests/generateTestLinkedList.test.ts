import { generateTestLinkedList } from "./helpers/generateTestLinkedList";

describe('generateTestLinkedList() test suite', () => {
	test('generateTestLinkedList() returns a list of appropriate size', () => {
		const ll = generateTestLinkedList(7);
		expect(ll.head.data).toBe('Node 1');
		ll.popHead();
		expect(ll.head.data).toBe('Node 2');
		ll.popHead();
		ll.popHead();
		ll.popHead();
		ll.popHead();
		ll.popHead();
		expect(ll.head.data).toBe('Node 7');
		expect(ll.head.next).toBeNull();
	});

	describe('generateTestLinkedList(1) returns a list with only a head', () => {
		const ll = generateTestLinkedList(1);
		expect(ll.head.data).toBe('Node 1');
		expect(ll.head.next).toBeNull();
	});

});
