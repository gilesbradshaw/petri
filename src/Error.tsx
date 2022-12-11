import React, { useEffect, useState } from 'react';
import { Exception } from './Exception'
import { useRouteError } from "react-router-dom";
import './Error.css';


export default () => {
  const error = useRouteError() as Exception;
  return <>
    <h1>{error.statusText || error.message}</h1>
    <nav>
      <a href={`/`}>go home</a>
    </nav>
  </>
}
