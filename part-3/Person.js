const Person = ({ name, age, hobbies }) => {
  let voteText = age >= 18 ? "Go vote!" : "Go study!";

  let hobbyMap = hobbies.map(hobby => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <ul>
          Hobbies
          {hobbyMap}
        </ul>
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
};
