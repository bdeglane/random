import { Tree } from './tree'

const tree = new Tree()

// tree.addNode(new Node({value: 5}))
// tree.addNode(5)
// tree.addNode(3)
// tree.addNode(9)
// tree.addNode(7)
// tree.addNode(4)

for (let ii = 0; ii < 50; ii++) {
    tree.addNode(Math.floor(Math.random() * Math.floor(50)))
}

console.log(tree)

tree.traverse();

const int = Math.floor(Math.random() * Math.floor(5))
console.log(`search for : ${int}`)
const res = tree.search(int)
console.log(res)

