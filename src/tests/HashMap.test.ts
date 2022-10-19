import { HashMap } from "../HashMap/HashMap";
import { KVPair } from "../Node/KVPairSingleDirectionalNode";

describe('HashMap test suite', () => {
	let emptyHM: HashMap<KVPair>;
	let hMSize100: HashMap<KVPair>;
	beforeEach(() => {
		emptyHM = new HashMap<KVPair>();
		hMSize100 = new HashMap<KVPair>(100);
	});

	test('HashMap ctor works with no params', () => {
		expect(emptyHM).toBeTruthy();
	});

	test('HashMap ctor works with size param', () => {
		expect(hMSize100).toBeTruthy();
	});

	test('hash() with string key returns an index within range', () => {
		// will write this when it has been implemented 
		const hash = hMSize100.hash("eightsixsevenfivethreeohnine");
		expect(hash).toBeGreaterThanOrEqual(0);
		expect(hash).toBeLessThan(hMSize100._hashmap.length);
	});

	test('hash() with number key returns an index within range', () => {
		const hash = hMSize100.hash(8675309);
		expect(hash).toBeGreaterThanOrEqual(0);
		expect(hash).toBeLessThan(hMSize100._hashmap.length);
	});

	test('assign() places node in hashmap', () => {
		const spy = jest.spyOn(console, 'log');
		hMSize100.assign('Node 1', 'Node1Value');
		expect(spy).toHaveBeenCalled();
		expect(hMSize100._hashmap[11]).toBe({key: 'Node 1', value: 'Node1Value'});
	});


});