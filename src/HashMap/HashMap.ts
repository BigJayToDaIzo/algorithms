import { SingleDirectionalNode } from "../Node/SingleDirectionalNode";
import { NullableLinkedList } from "../LinkedLists/NullableLinkedList";

import { Hasher } from "inthash";

export class HashMap<T>{
	_hashmap: Array<NullableLinkedList<T>>;
	constructor(size = 0){
		this._hashmap = new Array(size)
			.fill(null)
			.map(() => new NullableLinkedList<T>());
	}

	_hasher = new Hasher({
		bits: 53, // JS, Number.MAX_SAFE_INTEGER
		prime: "6456111708547433",
		inverse: "3688000043513561",
		xor: "969402349590075",
	});

	hash(key: T){
		if(typeof key === "string"){
			const hash = Number(this._hasher.encode(key));
			return hash;
			// return hash % this._hashmap.length;
		}
		if(typeof key === "number"){
			const hash = Number(this._hasher.encode(key));
			return hash;
		}
	}

}