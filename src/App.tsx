import ListGroup from './components/ListGroup';
import Message from './components/ListGroup';
// import { Fragment } from 'react/jsx-runtime';

function App() {

  let items = [
    'New York',
    'San Francisco',
    'TOkyo',
    'London',
    'Paris'
  ];
  items = [];

 

  const getMessage = () => {
    return ;;
  }

  if(items.length === 0)

    return <><h1>List</h1><p>No item found!</p></>;

  return (

    
  <>
    <h1>List</h1>
    {items.length === 0 ? <p>No Item Found</p> : null}
    <ul className="list-group">
        {items.map(item => (
          <li key={item}>{item}</li>
          ))}
    </ul>
  </>
  
  );
};

export default App;