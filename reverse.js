function reverse(llist) {
    let prev = null;
    let current = llist;

    while (current !== null) {
        let nextNode = current.next; 
        current.next = prev;         
        prev = current;              
        current = nextNode;          
    }

    return prev; 
}
