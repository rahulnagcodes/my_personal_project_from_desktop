// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import {fetchData} from "../redux/userSlice"
import { fetchData2 } from '../redux/dataSlice';
import {useDispatch} from "react-redux"

function Header() {
  const dispatch =useDispatch();
  return (
    <div className="header">
      <div className="logo">My App</div>
      <nav>
        <ul>
          <li>
            <Link to="/"><button>Page1</button>
              </Link>
          </li>
          <li>
            <Link to="/Page2"><button>Page2</button> </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
