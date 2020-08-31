// https://repl.it/@sadeghbayan/Linked-List

class LinkedList {
	constructor () {
		this.head = this.tail = null
		this._length = 0
	}

	//add to end of the value/tail
	append (value) {
		// if list is empty
		if(!this.tail) {
			this.tail = this.head = new Node(value);
		}
		// if linkedlist has more than one node
		else {
			let oldTail = this.tail;
			this.tail = new Node(value);
			oldTail.next = this.tail;
			this.tail.prev = oldTail;
		}
		this._length++;
	}

	//add to beginning of list/head
	prepend (value) {
		// if list is empty
		if(!this.head) {
			this.head = this.tail = new Node(value);
		}
		// if linkedlist has more than one node
		else {
			let oldHead = this.head;
			this.head = new Node(value);
			this.head.next = oldHead;
			oldHead.prev = this.head;
		}
		this._length++;
	}

	deleteHead () {
		// if list is empty (no head)
		if(!this.head) {
			return null;
		}
		// if linkedlist has >= one node
		else {
			let removedHead = this.head;
			// if list has only 1 node left
			if (this.tail === this.head) {
				return null;
			}
			// if list has more 1 node
			else {
				this.head = this.head.next;
				this.head.prev = null;
				this._length--;
			}
			return removedHead.value;
		}
	}

	deleteTail () {
		//if list is empty (no tail)
		if (!this.tail) {
			return null;
		}
		// if list has >= one node
		else {
			let removedTail = this.tail;
			// if list has only 1 node left
			if (this.tail === this.head) {
				return null;
			}
			// if list has more than 1 node
			else {
				this.tail = this.tail.prev;
				this.tail.next = null;
				this._length--;
			}
			return removedTail.value;
		}
	}

	search (value) {
		let currentNode = this.head;
		while(currentNode) {
			if (currentNode.value === value) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}
		return null;
	}

}

class Node {
	constructor (value, next, prev) {
		this.value = value
		this.prev = prev || null
		this.next = next || null
	}
}

const linked = new LinkedList();

linked.append(2);
linked.append(3);
linked.append(10);
linked.append(110);
linked.append(101);
linked.append(1000);

linked.prepend(100);

linked.deleteHead();
linked.deleteTail();
linked.search(101); // null
//console.log(linked)
