import React from 'react';
import './PoetryList.css'

import PoetryCard from './PoetryCard'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck"

const PoetryList = (props) => {

  const { allPoetry, theme } = props;

  allPoetry.sort(() => Math.random() - 0.5) 

  const allPoetryFiltered = allPoetry.filter((elm) => elm.tags === theme);


  return (
    <Container className="list-container">
      {allPoetryFiltered.length < 1 || theme === "Escoja un tema" ? (
        <Row>
          <CardDeck className="list">
            {allPoetry.map((elm) => (
              <PoetryCard key={elm._id} {...elm} {...props}/>
            ))}
          </CardDeck>
        </Row>
      ) : (
        <Row>
          <CardDeck className="list">
            {allPoetryFiltered.map((elm) => (
              <PoetryCard key={elm._id} {...elm} {...props}/>
            ))}
          </CardDeck>
        </Row>
      )}

    </Container>
  );
}
 
export default PoetryList;



// INTENTO DE INCORPORAR SPINNER

// import React from "react";
// import "./PoetryList.css";

// import PoetryCard from "./PoetryCard";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import CardDeck from "react-bootstrap/CardDeck";

// const PoetryList = (props) => {
//   const { allPoetry, theme } = props;

//   allPoetry.sort(() => Math.random() - 0.5);

//   const allPoetryFiltered = allPoetry.filter((elm) => elm.tags === theme);

//   return (
  
//   <>

//     {allPoetry ?

//       <Container className="list-container">
//         {allPoetryFiltered.length < 1 || theme === "Escoja un tema" ? (
//           <Row>
//             <CardDeck className="list">
//               {allPoetry.map((elm) => (
//                 <PoetryCard key={elm._id} {...elm} />
//               ))}
//             </CardDeck>
//           </Row>
//         ) : (
//             <Row>
//               <CardDeck className="list">
//                 {allPoetryFiltered.map((elm) => (
//                   <PoetryCard key={elm._id} {...elm} />
//                 ))}
//               </CardDeck>
//             </Row>
//           )}
//       </Container>
      
//       :

//       <Container className="list-container">
//           <h1>Hola</h1>
//           {console.log('Hola')}
//       </Container>
  
//       }
      
//       </>


//   );
// };

// export default PoetryList;

