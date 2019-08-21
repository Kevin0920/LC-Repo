/*******************
 * LRU Cache = two data structures to manage the elements. 
 * Map: used to store elements in the list
 * Double Linked List: used to keep track of the ordering when performing operations
 * A doubly-linked list and a map gives us the following:
 * Time complexity: O(1)
 * Space complexity: O(n)
 * This is achieved by having the doubly-linked list manage when we have to rearrange the elements while the map gives us direct 
 * access to the resource. Look-up in a map is O(1) by providing the key. 
 * We introduce the concept of 
 * - the “head”, which is the least recently used entry, 
 * - the “tail”, which is the most recently used entry, 
 * to keep track of the order when elements are retrieved or added. 
 * There are two pointers per node which is relatively low cost to manage the ordering.
 *******************/
class Node {
    constructor(key, val) {
        this.key = key; //用于从节点拿到key，删除散列表中的某一项。
        this.val = val;
        this.pre = null;
        this.next = null;
    }
}

// 简单点说就是：缓存对象有：一个数组（散列表），数组的元素不仅仅是一个整数，
// 而是一个对象，有前后指针，可以方便的插入和删除操作。
class LRUCache {
    constructor(limit) {
        // 缓存容量
        this.limit = limit;
        this.size = 0;
        // 散列表
        this.map = new Map();
        // 双向链表。有头尾节点。便于插入操作代码编写
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.head.pre = null;
        this.tail.pre = this.head;
        this.tail.next = null;
    }
    deleteNode(node) {
        let cur = node,
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

    get(key) {
        let node = this.map.get(key);
        if (node) {
            // 删除节点
            this.deleteNode(node);
            // 插入到头部
            this.addToHead(node);
            return node.val;
        }
        return -1;
    }
    put(key, val) {
        let node = this.map.get(key);
        if (node) {
            // 更新值
            node.val = val;
            // 更新缓存队列
            this.deleteNode(node);
            this.addToHead(node);
        } else {
            // 新节点
            let newNode = new Node(key, val);
            this.map.set(key, newNode);
            if (this.size < this.limit) {
                this.size++;
                this.addToHead(newNode);
            }
            // 容量不足
            else {
                // 删除最后一个节点：tail前一个才是最后节点。
                this.map.delete(this.tail.pre.key);
                this.deleteNode(this.tail.pre);
                this.addToHead(newNode);
            }
        }
    }
}