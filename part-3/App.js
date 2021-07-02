const App = () => {
  return (
    <div>
      <Person
        name="Cody Brown"
        age={32}
        hobbies={["Sleeping", "Shoplifting", "Drinking"]}
      />
      <Person
        name="Alex Iankov"
        age={21}
        hobbies={["Meats", "Vodka"]}
      />
      <Person
        name="Justin Jager"
        age={25}
        hobbies={["Reading", "Being alone", "Hoarding"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"))