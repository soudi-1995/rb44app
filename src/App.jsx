import logo from './logo.svg';
import './App.css';
import { useQuery, gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const GET_BOOKS = gql`

                    query GetAllBooks {
                          getAllBooks {                           
                            author
                            id
                            title
                            }
                          }
                            `;
const  CREATE_BOOK =gql`
              mutation CreateBook($title: String!, $author: String) {
              createBook(title: $title, author: $author) {
                title
                author
                id
  }
}
`                      

function App() {

  const {loading, error, data} = useQuery(GET_BOOKS)
  const [addBookFn] = useMutation(CREATE_BOOK)
  var [newBook, setNewBook] = useState({
    author:"",
    title:"",
    id:""
  })
  function addBook(){
    addBookFn({
      variables:newBook
    }).then((res)=>{
      console.log(res)
    })
  }

  return (
    <div>
      <h1 className='bg-success'>Register here</h1>
      <input type="text" onChange={(e)=>{setNewBook({...newBook,author:e.target.value})}} placeholder='author name' />
      <br />
      <input type="text" onChange={(e)=>{setNewBook({...newBook,title:e.target.value})}} placeholder='author title' />
      <br />
      <button onClick={addBook}>Add Book</button>
      <ul>
        
      { 
       loading && <b>Loading...</b>
      }
      {
        !loading && data?.getAllBooks.map((book)=>{
          return ( <div>
              <li> {`${book.id} . ${book.title}`}</li>
             
          </div> 
        )})
         
      } 
      </ul>
    </div>
  );
}

export default App;
