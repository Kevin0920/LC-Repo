class Node { // double linked list implement with node setting
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.pre = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) { // cache self capacity
        this.capacity = capacity;
        this.size = 0;
        this.map = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.head.pre = null;
        this.tail.pre = this.head;
        this.tail.next = null;
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        let node = this.map.get(key);
        this.remove(node);
        this.addToHead(node);
        return node.val;
    }

    put(key, val) {
        let node = this.map.get(key);
        if (node) {
            // 更新值
            node.val = val;
            // 更新缓存队列
            this.remove(node);
            this.addToHead(node);
        } else {
            // 新节点
            let newNode = new Node(key, val);
            this.map.set(key, newNode);
            if (this.size < this.capacity) {
                this.size++;
                this.addToHead(newNode);
            }
            // 容量不足
            else {
                // 删除最后一个节点：tail前一个才是最后节点。
                this.map.delete(this.tail.pre.key);
                this.remove(this.tail.pre);
                this.addToHead(newNode);
            }
        }
    }

    remove(node) {
        let cur = node, // the node want to remove 
            next = cur.next,
            pre = cur.pre;
        pre.next = next;
        next.pre = pre;
    }

    addToHead(newNode) {
        let cur = newNode,
            next = cur.next,
            pre = cur.pre;
        cur.next = this.head.next;
        cur.next.pre = newNode;
        cur.pre = this.head;
        this.head.next = cur;

        // node.next = this.head.next;
        // node.next.pre = node;
        // // 修改插入节点的左边指针
        // node.pre = this.head;
        // this.head.next = node;
    }

}

// test
let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);

console.log('new => ', cache)
    // console.log(cache.get(1)); // returns 1
    // cache.put(3, 3); // evicts key 2
    // console.log(cache.get(2)); // returns -1 (not found)
    // cache.put(4, 4); // evicts key 1
    // console.log(cache.get(1)); // returns -1 (not found)
    // console.log(cache.get(3)); // returns 3
    // console.log(cache.get(4)); // returns 4