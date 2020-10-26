import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import OneStepPanel from "./OneStepPanel";
import TwoStep1Panel from "./TwoStep1Panel";
import TwoStep2Panel from "./TwoStep2Panel";
import Navbar from "./NavBar";
import {Her2FishResults} from "./model/Her2FishResults"


function App() {

    const get_default_her2_fish_results = ():Her2FishResults => {
        const variables : Her2FishResults= {
            specimen : 'Tissue, Slides, Formalin',
            source : 'Breast',
            tissue_id : '',
            num_nuclei : 20,
            num_her2 : 0,
            num_cep17 : 0
        }
        return variables;
    }
    const [results, set_results] = React.useState(get_default_her2_fish_results());

    return (
        <Router>
            <Navbar userName={"mglynias"}/>
            <section className='container'>
            <Switch>
                <Route exact path='/' render={() => <OneStepPanel userName={"mglynias"}/>}/>
                <Route exact path='/step1' render={() => <TwoStep1Panel userName={"mglynias"}  set_results={set_results}/>} />
                <Route exact path="/step2" render={() => <TwoStep2Panel userName={"mglynias"} results={results}/>}/>
            </Switch>
            </section>
        </Router>

  );
}

export default App;
