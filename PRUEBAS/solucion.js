var list = ["Bob", undefined, "Louis"];

/**
 * Add people in the list
 * @param {string} name Somebody's name
 * @return {boolean} success or not 
 */

function add(name) {
    if (name && typeof(name) === "string" && list.indexOf(name) === -1) {
        var emptyPosition = list.indexOf(undefined);
        emptyPosition === -1 ? list.push(name) : list[emptyPosition] = name;
        return true;
    } else {
        return false;
    }


}

/**
 * Remove people in the list
 * @param {string} name Somebody's name
 * @return {boolean} success or not 
 */

function remove(name) {
    // validacion por undefined??
    var namePosition = list.indexOf(name);
    if (name && typeof(name) === "string" && namePosition !== -1) {
        list[namePosition] = undefined;
        return true;
    } else {
        return false;
    }
}


/* ------ TEST -----*/

// Scene Validation
console.assert(list.length === 3, "List - Wrong elements in Array");
console.assert(list[1] === undefined, "List - no undefined element");
console.assert(list[0] === "Bob", "List - Bob is first");

// -- Test add()

// Case: No argument
console.assert(add() === false, "add() - Wrong return");
console.assert(list.length === 3, "add() - Wrong length");

// Case: Replace undefined
console.assert(add("me") === true, "add('me') - Wrong return");
console.assert(list.length === 3, "add('me') - Wrong length");
console.assert(list[1] === "me", "add('me') - Wrong undefined replacement");

// Case: Add to the end (push)
console.assert(add("me2") === true, "add('me2') - Wrong return");
console.assert(list.length === 4, "add('me2') - Wrong length");
console.assert(list[3] === "me2", "add('me2') - Wrong new element");

// Case: Exist Name
console.assert(add("Bob") === false, "add('Bob') - Wrong return");
console.assert(list.length === 4, "add('Bob') - Wrong length");

// -- Test remove()

// Case: No argument
console.assert(remove() === false, "remove() - Wrong return");
console.assert(list.length === 4, "remove() - Wrong length");

// Case: Name match
console.assert(remove("me2") === true, "remove('me2') - Wrong return");
console.assert(list.length === 4, "remove('me2') - Wrong length");
console.assert(list[3] === undefined, "remove('me2') - Wrong replacement");

// Case: NO Name match
console.assert(remove("nothing") === false, "remove('me2') - Wrong return");
console.assert(list.length === 4, "remove('me2') - Wrong length");