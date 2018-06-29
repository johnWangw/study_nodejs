import * as React from 'react';
import styled, { keyframes, ServerStyleSheet } from 'styled-components';
import { render } from 'react-dom';

const Titles = styled.h1.withConfig({
  displayName: 'main__Titles',
  componentId: 'hxq85t-0'
})(['font-size:1.5em;text-align:center;color:palevioletred;']);
console.dir(styled)
// var index=1


const C= styled.div`
  font-size: 8px;
  background: url(${()=>'/12.png'});
`;

const D= styled(C)`
  font-size: 1rem;
`;

class Index extends React.Component{
  render(){
    return (
      <Titles style={{
        color: `red`
      }} onClick={()=>{
        alert('asdas')
      }}>
        <D>asd</D>
      </Titles>
    );
  }
}

render(<Index/>,document.getElementById('root'))