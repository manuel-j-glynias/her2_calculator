import React, { Fragment } from 'react'
import {Link} from "react-router-dom";

import './App.css';

interface Props {
    userName: string;
}

const Navbar: React.FC<Props> = ({userName} : Props) => {


    return (
        <nav className="navbar bg-dark">

            <Fragment>
                <ul>
                    <li><Link to="/">
                        One Step</Link>
                    </li>
                    <li><Link to="/step1">
                        Two Step Part 1</Link>
                    </li>
                    <li><Link to="/step2">
                        Two Step Part 2</Link>
                    </li>

                </ul>
            </Fragment>
        </nav>
    )
}

export default Navbar