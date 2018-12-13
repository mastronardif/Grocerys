

var items = [
  { tags: ["111", "222","333", "444" ], name: 'Edward', value: 121 },
  { tags: ["111", "222","aaa", "444" ], name: 'Sharpe', value: 27 },
  { tags: ["111", "222","333", "444" ], name: 'And', value: 35 },
  { tags: ["aaa", "ddd","333", "444" ], name: 'The', value: -42 },
  {                                     name: 'Magnetic', value: 53 },
  { tags: ["111", "ddd","333", "444" ], name: 'Zeros', value: 67 }
];



// sort by value
// items.sort(function (a, b) {
  // return a.value - b.value;
// });


// sort by includes
items.sort(dynamicSort("aaa"));
console.log(`items= ${JSON.stringify(items, null, 2)}`);
process.exit(1);

function dynamicSort(property) {
	return function (a,b) {
		var ba = a.tags ? a.tags.includes(property) : false;		
		var bb = b.tags ? b.tags.includes(property) : false;
		console.log(`ba= ${ba}`);
		console.log(`(ba && bb)= ${(ba && bb)}`)
		return (ba);
	}
}
function cmpTags(a, b) {
  //a.tags.includes()
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});


function createArray(x, y) {
    return Array.apply(null, Array(x)).map(e => Array(y));
}

//You can easily turn this function into an ES5 function as well.

function createArray(x, y) {
    return Array.apply(null, Array(x)).map(function(e) {
        return Array(y);
    });
}