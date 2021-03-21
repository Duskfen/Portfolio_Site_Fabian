import React, { Suspense } from "react";



function Loader() {
  return (
     <div>LOADING...</div>
 );
}
/**
* It take react component as children and using suspense api to show fallback component
* for lazy loading component using React.lazy https://reactjs.org/docs/code-splitting.html
* @param props children i.e React Component
*/
export default function SuspenseContainer(props) {
 return <Suspense fallback={<Loader />}>{props.children}</Suspense>;
}