import { NullableLinkedList } from "../LinkedLists/NullableLinkedList";
import { KVPair, KVPairSingleDirectionalNode } from "../Node/KVPairSingleDirectionalNode";

import { Hasher } from "inthash";

export class HashMap<KVPair>{
	_hashmap: Array<NullableLinkedList<KVPair>>;
	constructor(size = 0){
		this._hashmap = new Array(size)
			.fill(null)
			.map(() => new NullableLinkedList<KVPair>());
	}

	_hasher = new Hasher({
		bits: 53, // JS, Number.MAX_SAFE_INTEGER
		prime: "6456111708547433",
		inverse: "3688000043513561",
		xor: "969402349590075",
	});

	hash(key: string | number): number {
		let hash = 0;
		if(typeof key === "string"){
			hash = this.stringHash(key) % this._hashmap.length;
			
		}
		if(typeof key === "number"){
			hash = this._hasher.encode(key) % this._hashmap.length;
		}
		return hash;
	}

	// landed this algorithm on GeeksForGeeks
	stringHash(key: string){
		let hash = 0;
		if(key.length === 0) return hash;
		for(let i = 0; i < key.length; i++){
			const char = key.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash = (hash & hash) >>> 0;
		}
		return hash;
	}

	assign(key: string | number, value: string | number){
		const arrayIndex = this.hash(key);
		const linkedList = this._hashmap[arrayIndex];
		console.log(`Storing ${value} at index ${arrayIndex}`);
	}

}