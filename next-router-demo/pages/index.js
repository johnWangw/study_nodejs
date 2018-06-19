import Router from 'next/router'
import Link from 'next/link';

export default (props) =>{
  return (
    <div>
      <Link href='/about'><a>goto about</a></Link>
      <div onClick={()=>{
        Router.replace({
          pathname: '/about'
        })
      }}>Welcome to next.js!</div>
    </div>
  );
} 