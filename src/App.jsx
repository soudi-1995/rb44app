import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`

                    query GetAllBooks {
                          getAllBooks {
                            title
                            author
                            id
                            }
                          }`

function App() {
  const {loading, error, data:{getAllBooks:books}} = useQuery(GET_BOOKS)
   
  return (
    <div>
      <h1 className='bg-success'>Register here</h1>
      <h2>hello</h2>
    
      <ul>
      { 
       loading && <b>Loading...</b>
      }
      {
        !loading && books?.map((book)=>{
          return <li>{book.title}</li>
        })
         
} 
      </ul>
    </div>
  );
}

export default App;
