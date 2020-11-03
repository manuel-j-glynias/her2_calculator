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
            tissue_id : 'A-123456',
            order_id: 'O-10001',
            ordered_date: new Date().toISOString().slice(0, 10),
            ihc: '3+',
            num_nuclei : 20,
            num_her2 : 0,
            num_cep17 : 0,
            completed:false,
            completed_by:'',
            completed_datetime:'',
            finalized:false,
            finalized_by:'',
            finalized_datetime:''
        }
        return variables;
    }
    const create_samples = () : [Her2FishResults] => {
        let sample_list:[Her2FishResults]  = [get_default_her2_fish_results()]
        let item2 = get_default_her2_fish_results();
        item2.tissue_id = 'A-234567'
        item2.order_id = 'O-10002'
        item2.ihc = '2+'
        sample_list.push(item2)
        let item3 = get_default_her2_fish_results();
        item3.tissue_id = 'A-345678'
        item3.order_id = 'O-10003'
        item3.ihc = '1+'
        sample_list.push(item3)
        return sample_list
    }


    const [samples, set_samples] = React.useState<[Her2FishResults]>(create_samples());

    return (
        <Router>
            <Navbar userName={"mglynias"}/>
            <section className='container'>
            <Switch>
                <Route exact path='/' render={() => <OneStepPanel userName={"mglynias"}/>}/>
                <Route exact path='/step1' render={() => <TwoStep1Panel samples={samples} />} />
                <Route exact path="/step2" render={() => <TwoStep2Panel samples={samples} />}/>
            </Switch>
            </section>
        </Router>

  );
}

export default App;
