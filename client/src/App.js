import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/homePage'
import Login from './pages/Login';
import SignUp from './pages/signup';
import MiniGame from './pages/MiniGames';
import Profile from './pages/Profile';
import Hangman from './pages/Hang-Man/Hangman';
import Quiz from './pages/Math-Quiz/Quiz';
import { QuizProvider } from './pages/Math-Quiz/context/quiz';
const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>

          <Route path='/'
          element={<Home/>}
          />
          <Route path='/minigame'
          element={<MiniGame/>}
          />
          <Route path='/hangman'
          element={<Hangman/>}
          />
          <Route path='/mathquiz'
          element={<QuizProvider><Quiz/></QuizProvider>}
          />
          
          <Route path='/login'
          element={<Login/>}
          />

          <Route path='/signup'
          element={<SignUp/>}
          />
          <Route path='/profile'
          element={<Profile/>}
          />
          
        </Routes>

      </Router>
  </ApolloProvider>
  );
    
}

export default App;
