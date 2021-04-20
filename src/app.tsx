import React from 'react';
import './app.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import theme from "./theme";
import { CssBaseline } from "@material-ui/core";
import { Router } from "./router";
import { SideNav } from "./components/side-nav/side-nav";

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <SideNav/>
        <div className="App">
          <Router/>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

export default App;
