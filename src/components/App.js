import React from "react";
// Removed the import for format as it's no longer needed
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";  // Import TestComponent

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>Now</h1>  {/* Changed to 'Now' */}
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
      <TestComponent />  {/* Added TestComponent */}
    </div>
  );
}

export default App;
