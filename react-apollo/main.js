// import { compuse } from 'react-apollo';
import React from 'react';
import { render } from 'react-dom';
import gql from 'graphql-tag';
import { compose, graphql, ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';


// var client = new ApolloClient({
//   link: new HttpLink({
//     credentials: 'include', // Additional fetch() options like `credentials` or `headers`
//     uri: 'http:://127.0.0.1:8888', // Server URL (must be absolute)
//   }),
//   ssrMode: !1, // Disables forceFetch on the server (so queries are only run once)
// });

const client = new ApolloClient({
  uri: 'http:://127.0.0.1:8888'
})
// const { Provider } = React.createContext({
//   client
// })
class T extends React.Component{
  render(){
    console.log(this.props)
    const C = this.props.children[0]
    return <C  text={'asdasdas'+Object.keys(this.props).join(',')} />
  }
}

const query = gql`
  query TodoAppQuery{
    todo {
      id
      text
    }
  }
`;
// console.log(Provider)
// return 
// const Te = compose(graphql(query))(T)

render(<T>{
  ({text})=>{
    console.log(text)
    return (<div>{text}</div>)
  }
}{
  ()=>{}
}</T> ,document.getElementById('root'))