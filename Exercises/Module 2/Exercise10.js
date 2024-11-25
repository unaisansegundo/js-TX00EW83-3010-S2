let n_candidates = parseInt(prompt("Enter the number of candidates: "));
let candidates = [];
let candidate;
for (let i = 0; i < n_candidates; i++) {
  var candidateName = prompt(`Name of candidate ${i + 1}`);
  candidate = { name: candidateName, votes: 0 };
  candidates.push(candidate);
}

let n_voters = parseInt(prompt("Enter the number of voters: "));
for (let i = 0; i < n_voters; i++) {
  let vote = prompt(`Voter ${i + 1}/${n_voters} place your vote: `);
  let foundCandidate = candidates.find(c => c.name === vote);
  if (!foundCandidate) {
    console.log(`Empty vote`);
    continue;
  }
  foundCandidate.votes += 1;
}

candidates.sort((a, b) => b.votes - a.votes);
let votes = candidates[0].votes;
winner = candidates.filter((candidate) => candidate.votes === votes);

console.log(`${winner[0].name} is the winner`);
for (const candidate of candidates) {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
}
