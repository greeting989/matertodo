
import './App.css';
import {useEffect} from 'react'
import TodoForm from './components/TodoForm/TodoForm';
import GhostContentAPI from "@tryghost/content-api";


function App() {
  useEffect(()=>{
    const api = new GhostContentAPI({
      url: 'https://demo.ghost.io',
      key: '22444f78447824223cefc48062',
      version: "v3"
    });
    
    // fetch 5 posts, including related tags and authors
    api.posts
        .browse({limit: 5, include: 'tags,authors'})
        .then((posts) => {
           console.log(posts);
        })
        .catch((err) => {
            console.error(err);
        });
  },[])
  return (
    <div className="App">
      <TodoForm/>
    </div>
  );
}

export default App;
