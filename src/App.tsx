import { useState } from "react";

function App() {

  let items = [
    'New York',
    'San Francisco',
    'TOkyo',
    'London',
    'Paris'
  ];


  
   const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
  <>
    <h1>List</h1>
    {items.length === 0 && <p>No Item Found</p> }
    <ul className="list-group">
        {items.map((item, index) => (
          <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
          key={item} 
          onClick={() => { setSelectedIndex(index);}}
        >
          {item}
        </li>
      ))}
    </ul>
  </>
  
  );
};

export default App;