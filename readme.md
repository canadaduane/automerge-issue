
## Inconsistent Results

The `records` array shows inconsistent results.

$ node build/main.bundle.js
doc1:
inspect [ [ 'Init', 0 ], [ 'Add Record', 1 ] ]
doc2:
inspect [ [ 'Init', 0 ], [ 'Init', 0 ], [ 'Add Record', 1 ] ]
records [ { index: 1, isOnline: true } ]

$ node build/main.bundle.js
doc1:
inspect [ [ 'Init', 0 ], [ 'Add Record', 1 ] ]
doc2:
inspect [ [ 'Init', 0 ], [ 'Init', 0 ], [ 'Add Record', 0 ] ]
records []

$ node build/main.bundle.js
doc1:
inspect [ [ 'Init', 0 ], [ 'Add Record', 1 ] ]
doc2:
inspect [ [ 'Init', 0 ], [ 'Init', 0 ], [ 'Add Record', 0 ] ]
records []

$ node build/main.bundle.js
doc1:
inspect [ [ 'Init', 0 ], [ 'Add Record', 1 ] ]
doc2:
inspect [ [ 'Init', 0 ], [ 'Init', 0 ], [ 'Add Record', 0 ] ]
records []

$ node build/main.bundle.js
doc1:
inspect [ [ 'Init', 0 ], [ 'Add Record', 1 ] ]
doc2:
inspect [ [ 'Init', 0 ], [ 'Init', 0 ], [ 'Add Record', 0 ] ]
records []

$ node build/main.bundle.js
doc1:
inspect [ [ 'Init', 0 ], [ 'Add Record', 1 ] ]
doc2:
inspect [ [ 'Init', 0 ], [ 'Init', 0 ], [ 'Add Record', 0 ] ]
records []

$ node build/main.bundle.js
doc1:
inspect [ [ 'Init', 0 ], [ 'Add Record', 1 ] ]
doc2:
inspect [ [ 'Init', 0 ], [ 'Init', 0 ], [ 'Add Record', 0 ] ]
records []

$ node build/main.bundle.js
doc1:
inspect [ [ 'Init', 0 ], [ 'Add Record', 1 ] ]
doc2:
inspect [ [ 'Init', 0 ], [ 'Init', 0 ], [ 'Add Record', 1 ] ]
records [ { index: 1, isOnline: true } ]