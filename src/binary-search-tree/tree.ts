import { Node } from './node'

/**
 * wrapper for root node
 */
export class Tree {
    public root: Node

    constructor() {
        this.root = null
    }

    /**
     *
     * @param {number} value
     */
    public addNode(value: number): void {

        const node = new Node({value})

        if (this.root == null) {
            // set up first node
            this.root = node
        } else {
            this.root.addNode(node)
        }
    }

    traverse() {
        this.root.visit()
    }

    search(value: number): Node {

        // console.log(`search for : ${value} : root node`)

        return this.root.search(value)
    }
}