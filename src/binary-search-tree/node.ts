interface NodeParams {
    left?: Node;
    rigth?: Node;
    value: number;
}


export class Node {
    public left: Node = null;
    public rigth: Node = null;
    public value: number;

    constructor(params: NodeParams) {
        this.left = params.left || null;
        this.rigth = params.rigth || null;
        this.value = params.value;
    }

    /**
     * Sort number value
     * 
     * @param {Node} node 
     */
    addNode(node: Node): void {
        if (node.value < this.value) {
            this.left == null
                ? this.left = node
                : this.left.addNode(node)
        }

        if (node.value > this.value) {
            this.rigth == null
                ? this.rigth = node
                : this.rigth.addNode(node)
        }
    }

    visit(): void {
        // first, visite lower value
        this.left != null && this.left.visit()

        // log current value
        console.log(this.value)

        // then, visit higher value
        this.rigth != null && this.rigth.visit()
    }

    search(value: number): Node {

        // console.log(`search for : ${value} : node value ${this.value}`)

        if (value === this.value) {
            console.log(`FOUND ${this.value}`)

            return this

        } else {
            return this.left != null && this.value > value
                // search on lower value
                ? this.left.search(value)
                : this.rigth != null && this.value < value
                    // search on higher value
                    ? this.rigth.search(value)
                    : null
        }
    }
}
