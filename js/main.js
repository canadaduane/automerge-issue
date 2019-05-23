import Automerge from "automerge";

const inspect = document => {
  const inspectHistory = Automerge.getHistory(document).map(state => [
    state.change.message,
    state.snapshot.records.length
  ]);

  console.log("inspect", inspectHistory);
};

let doc1 = Automerge.change(Automerge.init(), "Init", doc => {
  doc.records = [];
});

doc1 = Automerge.change(doc1, "Add Record", doc => {
  doc.records.push({
    index: 1,
    isOnline: true
  });
});

let delta1 = Automerge.getChanges(Automerge.init(), doc1);
console.log("doc1:");
inspect(doc1);

// FORK EVENT

let doc2 = Automerge.change(Automerge.init(), "Init", doc => {
  doc.records = [];
});

doc2 = Automerge.applyChanges(doc2, delta1);
console.log("doc2:");
inspect(doc2);

console.log("records", doc2.records);
