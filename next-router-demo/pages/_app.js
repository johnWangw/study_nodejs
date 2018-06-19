import App, {Container} from 'next/app'
import React from 'react'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'

class MyApp extends App {
  componentWillMount(){
    const Router = this.props.router
    console.log('Myapp componentWillMount---------->', Router.asPath)    
    console.log(Router)
    const obj = Object.assign({},Router.router)
    console.log(obj.asPath)
    console.log('Myapp componentWillMount----------<', Router.asPath)   
  }
  render () {
    console.log('MyApp render*********')
    // console.dir(Container)
    // console.dir(ApolloProvider)
    ApolloProvider.prototype.shouldComponentUpdate=function(nextprops,nextstate){
      console.log(this.props.router.asPath, nextprops.router.asPath)
      return true
    }
    const {Component, pageProps, apolloClient,router } = this.props
    return <Container>
      <ApolloProvider client={apolloClient} router={router}>
        <Component {...pageProps} router={router}  />
      </ApolloProvider>
    </Container>
  }
}
const A = withApolloClient(MyApp)
const render = A.prototype.render
A.prototype.render = function(){
  // console.log()
  console.log('--------A---------render', this.props.router.route)
  return render.apply(this,arguments)
}
console.dir(A)
export default A