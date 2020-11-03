import React from 'react';

import './App.css';
import CountsInputPanel from "./components/CountsInputPanel";
import {Her2FishResults} from "./model/Her2FishResults"


interface Props {
    samples:[Her2FishResults];
}
const className = 'HER2';

const TwoStep1Panel : React.FC<Props> = ({samples}) => {

    const [index, set_index] = React.useState(-1);

    const [specimen, set_specimen] = React.useState('');
    const [tissue_id, set_tissue_id] = React.useState('');
    const [source, set_source] = React.useState('');
    const [ordered_date, set_ordered_date] = React.useState('');
    const [num_nuclei, set_num_nuclei] = React.useState(0);
    const [num_her2, set_num_her2] = React.useState(0);
    const [num_cep17, set_num_cep17] = React.useState(0);

    const [saveSuccess, set_saveSuccess] = React.useState('');

    const initialize = () => {
        set_specimen('')
        set_source('')
        set_tissue_id('')
        set_ordered_date('')
        set_num_nuclei(0)
        set_num_her2(0)
        set_num_cep17(0)
    }

    const select = (i:number) => {
        set_index(i)
        set_specimen(samples[i].specimen)
        set_source(samples[i].source)
        set_tissue_id(samples[i].tissue_id)
        set_ordered_date(samples[i].ordered_date)
        set_num_nuclei(samples[i].num_nuclei)
        set_num_her2(samples[i].num_her2)
        set_num_cep17(samples[i].num_cep17)

    }

    const reset = () => {

    }
    const noop = () => {

    }
    const save = () => {
        samples[index].specimen = specimen
        samples[index].source = source
        samples[index].num_nuclei = num_nuclei;
        samples[index].num_her2 = num_her2
        samples[index].num_cep17 = num_cep17
        samples[index].completed = true
        samples[index].completed_by = 'J Smith'
        let d = new Date();
        samples[index].completed_datetime = d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
        initialize();
        set_saveSuccess('Saved ' + tissue_id)
        setTimeout(function () {
             set_saveSuccess('')
        }, 2000);

    }
    return (
        <div className={className}>
            <h2 className={`${className}__title`}>Her2 IHC / Dual Probe ISH Assay</h2>

            <div className="Table">
                <div className="Title">
                    <p>Samples</p>
                </div>
                <div className="Heading">
                    <div className="Cell">
                        <p>Tissue ID</p>
                    </div>
                    <div className="Cell">
                        <p>Order ID</p>
                    </div>
                    <div className="Cell">
                        <p>Ordered Date</p>
                    </div>
                    <div className="WideCell">
                        <p>Completed</p>
                    </div>
                    <div className="Cell">
                        <p></p>
                    </div>
                </div>

                {samples.map(
                    (one_Sample, i:number) => !!one_Sample && (
                        <div className="Row">
                            <div className="Cell">
                                <p>{one_Sample.tissue_id}</p>
                            </div>
                            <div className="Cell">
                                <p>{one_Sample.order_id}</p>
                            </div>
                            <div className="Cell">
                                <p>{one_Sample.ordered_date}</p>
                            </div>
                            <div className="WideCell">
                                <p>{one_Sample.completed ? 'Yes (' + one_Sample.completed_by + ', ' + one_Sample.completed_datetime + ')' : 'No'}</p>
                            </div>
                            <div className="Cell">
                                <p>{!one_Sample.completed && <button className="btn btn-primary my-1" onClick={() => select(i)}>Select</button>}</p>
                            </div>
                        </div>
                    )
                )}

             </div>

            <div className={`${className}__Wrapper`}>
                <div>Tissue ID</div>
                <div>
                    <textarea className={`${className}__LongTextarea`} name="tissue" placeholder="" value={tissue_id} onChange={(e) => {noop()}}/>
                </div>
                <div>Ordered Date</div>
                <div>
                    <textarea className={`${className}__LongTextarea`} name="ordered_date" placeholder="" value={ordered_date} onChange={(e) => {noop()}}/>
                </div>
                <div >Specimen</div>
                <div>
                    <textarea className={`${className}__LongTextarea`} name="specimen" placeholder="" value={specimen} onChange={(e) => {set_specimen(e.target.value)}}/>
                </div>
                <div>Source</div>
                <div>
                    <textarea className={`${className}__LongTextarea`} name="source" placeholder="" value={source} onChange={(e) => {set_source(e.target.value)}}/>
                </div>
                <CountsInputPanel num_nuclei={num_nuclei} set_num_nuclei={set_num_nuclei} num_her2={num_her2} set_num_her2={set_num_her2} num_cep17={num_cep17} set_num_cep17={set_num_cep17} reset={reset}/>
                <div></div>
                <div>
                    <button className="btn btn-primary my-1" onClick={() => save()}>Save</button>
                    <button className="btn btn-primary my-1" onClick={() => initialize()}>Reset</button>

                    {saveSuccess}
                </div>
            </div>
        </div>
    )
}

export default TwoStep1Panel;
