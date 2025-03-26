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
const UPDATE_BOOK = gql`

                 mutation UpdateBook($title: String!, $id: ID!, $author: String) {
                  updateBook(title: $title, id: $id, author: $author) {
                    title
                    author
                    id
                  }
                } `;
const  CREATE_BOOK =gql`
              mutation CreateBook($title: String!, $author: String) {
              createBook(title: $title, author: $author) {
                title
                author
                id
  }
}
`;                  
const DELETE_BOOK = gql`
              mutation DeketeBook($deleteBookId: ID!) {
              deleteBook(id: $deleteBookId) {
              title
              author
              id
            }
          }
`;
function App() {

  const {loading, error, data, refetch} = useQuery(GET_BOOKS)
  const [addBookFn] = useMutation(CREATE_BOOK)
  const [deleteBookFn] = useMutation(DELETE_BOOK)
  const [updateBookFn] = useMutation(UPDATE_BOOK)
  var [editBook, setEditBook] = useState(null)
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
      refetch()
    })
  }
  function updateBook(){
    updateBookFn({
      variables:editBook
    }).then(()=>{
      refetch();
    })
  }
  function deleteBook(id){
    deleteBookFn({
      variables:{"deleteBookId":id}
    }).then(()=>{console.log("tesesale")
      refetch()
    })
  }
  function toeditBook(book){
      setEditBook({...book})
  }


  return (
    <div>
      <h1 className='bg-success'>Register here</h1>
      {/*Add book*/} 
      { !editBook && ( <>
      <input type="text" onChange={(e)=>{setNewBook({...newBook,author:e.target.value})}} placeholder='author name' />
      <br />
      <input type="text" onChange={(e)=>{setNewBook({...newBook,title:e.target.value})}} placeholder='author title' />
      <br /> </>
       )}
      {/*editbook*/} 
       {
       editBook && (  
        <>
      <input type="text" onChange={(e)=>{setEditBook({...editBook,author:e.target.value})}} value={editBook.author} placeholder='author name' />
      <br />
      <input type="text" onChange={(e)=>{setEditBook({...editBook,title:e.target.value})}} value={editBook.title} placeholder='author title' />
      <br />  </> 
     ) }
      {!editBook && <button onClick={addBook}>Add Book</button>}
      {editBook && <button onClick={updateBook}>Update</button>}
      <ul>
        
      { 
       loading && <b>Loading...</b>
      }
      {
        !loading && data?.getAllBooks.map((book)=>{
          return ( <div>
              <li> {`${book.id} . ${book.title}`} <br /> 
              <button onClick={()=>(deleteBook(book.id))}>Delete</button>
              <br /> <button onClick={()=>toeditBook(book)}>Edit</button></li>          
          </div> 
        )})
         
      } 
      </ul>
    </div>
  );
}

export default App;
