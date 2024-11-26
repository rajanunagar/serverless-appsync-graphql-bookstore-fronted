import './App.css';
import { Authenticator ,withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from 'aws-amplify/api';
import { listBooks,getBookById } from './graphql/queries';
import { onCreateBook } from './graphql/subscriptions';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const client = generateClient();

function App() {
 const getBookByDetails = async ()=>{
 
 //get one book using bookId
 const {data} =  await client.graphql({
    query: getBookById,
    variables: 
      { bookId:'d9f48a07-adcc-4b7b-adca-a840c591e6a5'}
  });
  console.log(data.getBookById);

  //get list of books
  await client.graphql({
    query: listBooks,
    variables: 
      {limit:10,nextToken:null}
  });
 }

 useEffect(()=>{
  const sub = client
  .graphql({ query: onCreateBook })
  .subscribe({
    next: ({ data }) => {
      console.log(data.onCreateBook);
      toast.success("new book added");
    },
    error: (error) => console.warn(error)
  });
 },[]);

 return ( <Authenticator>
  {({ signOut, user }) => (
    <main>
 <ToastContainer/>

      <h1>Hello {user?.username}{process.env.PORT}  </h1>
      <button onClick={signOut}>Sign out</button>
      <button onClick={getBookByDetails}>Get Book Details</button>
    </main>
  )}
</Authenticator>
 )
}

export default App;
