// export function readFromCache(key: string, value:string){
//   if (key in localStorage) {
//     return localStorage.getItem(key)
//   } else {
//      localStorage.setItem(key, value);
//   }
// }

import React from "react";

// function DllNode(key: string, data: string) {
//   this.key = key;
//   this.data = data;

//   this.next = null;
//   this.prev = null;
// }

// function LruCache(capacity) {
//   this.keys = {};
//   this.capacity = capacity;

//   this.head = new DllNode("", null);
//   this.tail = new DllNode("", null);

//   this.head.next = this.tail;
//   this.tail.prev = this.head;
// }

// LruCache.prototype.removeNode = function (node) {
//   const prev = node.prev;
//   const next = node.next;
//   prev.next = next;
//   next.prev = prev;
// };

// LruCache.prototype.addNode = function (node) {
//   const realTail = this.tail.prev;
//   realTail.next = node;

//   this.tail.prev = node;
//   node.prev = realTail;
//   node.next = this.tail;
// };

// //////////////////////////////////////////////////////////
// LruCache.prototype.get = function (key: string) {
//   const node = this.keys[key];
//   if (node === undefined) return null;

//   this.removeNode(node);
//   this.addNode(node);
//   return node.data;
// };

// LruCache.prototype.set = function (key: string, value: string) {
//   // remove node from 'old' position
//   const node = this.keys[key];
//   if (node) this.removeNode(node);

//   // create new node and add at tail
//   const newNode = new DllNode(key, value);
//   this.addNode(newNode);
//   this.keys[key] = newNode;

//   // if we are over capacity then remove oldest node - its at the head
//   if (Object.keys(this.keys).length > this.capacity) {
//     const realHead = this.head.next;
//     this.removeNode(realHead);
//     delete this.keys[realHead.key];
//   }
// };
