// import React from 'react'
// import { ReactComponent as JavaScriptSVG } from '../Pictures/js.svg'
// import { ReactComponent as PythonSVG } from '../Pictures/python.svg'
// const Javascript = (props) => {
//   return <JavaScriptSVG {...props } />
// }
// const Python = (props) => {
//     return <PythonSVG {...props } />
//   }

// export  {Javascript,Python};

import React from 'react';
import JavaScriptSVG from '../Pictures/js.svg';
import PythonSVG from '../Pictures/python.svg';

const Javascript = (props) => {
  return <img src={JavaScriptSVG} alt="JavaScript" {...props} />
}

const Python = (props) => {
  return <img src={PythonSVG} alt="Python" {...props} />
}

export  { Javascript, Python };

