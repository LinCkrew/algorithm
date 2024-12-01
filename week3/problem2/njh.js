function game(games, people) {
  const need = { Y: 1, F: 2, O: 3 };
  const need2 = need[games];
  const unique = new Set(people);
  const max = Math.floor(unique.size / need2);
  return max;
}
