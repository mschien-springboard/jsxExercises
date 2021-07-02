const App = () => {
  return (
    <div>
      <Tweet 
      username='yowderman123' 
      name='Cody Brown' 
      date={new Date().toDateString()} 
      message='yowderhead!'/>
      <Tweet 
      username='bulgarianmeatz' 
      name='Alex Iankov' 
      date={new Date().toDateString()}
      message='If I could I would...'/>
      <Tweet 
      username='Joostimane' 
      name='Justin Jager' 
      date={new Date().toDateString()} 
      message='Sometimes you rack sometimes you bone.'/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"))