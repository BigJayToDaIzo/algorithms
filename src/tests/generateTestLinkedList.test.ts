import { generateTestLinkedList } from "./helpers/generateTestLinkedList";

describe('generateTestLinkedList() test suite', () => {
	test('generateTestLinkedList() returns a list of appropriate size', () => {
		const ll = generateTestLinkedList(7);
		expect(ll.head.data).toBe('Node 1');
		ll.removeFromHead();
		expect(ll.head.data).toBe('Node 2');
		ll.removeFromHead();
		expect(ll.head.data).toBe('Node 3');
		ll.removeFromHead();
		expect(ll.head.data).toBe('Node 4');
		ll.removeFromHead();
		ll.removeFromHead();
		ll.removeFromHead();
		expect(ll.head.data).toBe('Node 7');
		expect(ll.head.next).toBeNull();
	});

	describe('generateTestLinkedList(1) returns a list with only a head', () => {
		const ll = generateTestLinkedList(1);
		expect(ll.head.data).toBe('Node 1');
		expect(ll.head.next).toBeNull();
	});

});
