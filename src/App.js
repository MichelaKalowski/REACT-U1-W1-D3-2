import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import Fantasy from './Assets/fantasy.json';

function App() {
  return (
    <><div className="App">
      <header className="App-header">
        <SingleBook title="The Last Wish: Introducing the Witcher" img="https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg"/>
        <BookList book={Fantasy}/>
      </header>
    </div></>
  );
}

export default App;
