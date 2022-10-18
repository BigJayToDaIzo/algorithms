import { HashMap } from "../HashMap/HashMap";

describe('HashMap test suite', () => {
	let hm: HashMap<string>;
	beforeEach(() => {
		hm = new HashMap<string>();
	});

	test('HashMap ctor works', () => {
		expect(hm).toBeTruthy();
	});

	test('hash() (before modding to fit array) encodes/decodes', () => {
		// will write this when it has been implemented 
		expect(hm.hash("100")).toBe(6432533451586367);
	});


});