const people = [
  "aadi",
  "asil",
  "alexandra",
  "alessandro",
  "connor",
  "chris",
  "david",
  "davit",
  "emily",
  "fatima",
  "francesca",
  "fred",
  "gamithra",
  "huda",
  "jamie",
  "martina",
  "nick",
  "tuna",
];

function App() {
  return (
    <>
      <h1>Rethinking Chat Checklist</h1>
      <div>
        {people.map((person) => (
          <p key={person}>{person}</p>
        ))}
      </div>
    </>
  );
}

export default App;
