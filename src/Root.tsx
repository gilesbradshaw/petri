import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Root.css';

export default () =>
  <>
    <h1>Petri nets</h1>
    <nav>
      <ul>
        <li>
          <Link to="dining">
            dining
          </Link>
        </li>
        <li>
          <Link to="dining-2">
            dining 2
          </Link>
        </li>
        <li>
          <Link to="philosophical">
            philosophical
          </Link>
        </li>
        <li>
          <Link to="traffic-lights">
            traffic lights
          </Link>
        </li>
        <li>
          <Link to="404">
            404
          </Link>
        </li>
      </ul>
    </nav>
  </>
