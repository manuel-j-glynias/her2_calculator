import React from 'react';

import './App.css';
import CountsInputPanel from "./components/CountsInputPanel";
import {Her2FishResults} from "./model/Her2FishResults"


interface Props {
    userName: string;
    set_results: (results:Her2FishResults) => void;
}
const className = 'HER2';

const TwoStep1Panel : React.FC<Props> = ({userName,set_results}) => {
    const [specimen, set_specimen] = React.useState('Tissue, Slides, Formalin');
    const [tissue_id, set_tissue_id] = React.useState('');
    const [source, set_source] = React.useState('Breast');
    const [num_nuclei, set_num_nuclei] = React.useState(20);
    const [num_her2, set_num_her2] = React.useState(0);
    const [num_cep17, set_num_cep17] = React.useState(0);

    const [saveSuccess, set_saveSuccess] = React.useState('');

    const get_her2_fish_results = ():Her2FishResults => {
        const variables : Her2FishResults= {
            specimen : specimen,
            source : source,
            tissue_id : tissue_id,
            num_nuclei : num_nuclei,
            num_her2 : num_her2,
            num_cep17 : num_cep17
        }
        return variables;
    }

    const reset = () => {}
    const save = () => {
        set_saveSuccess('Saved ' + tissue_id)
        setTimeout(function () {
            set_results(get_her2_fish_results())
            set_saveSuccess('')
            set_specimen('Tissue, Slides, Formalin')
            set_source('Breast')
            set_tissue_id('')
            set_num_nuclei(20)
            set_num_her2(0)
            set_num_cep17(0)
        }, 2000);

    }
    return (
        <div className={className}>
            <h2 className={`${className}__title`}>Her2 IHC / Dual Probe ISH Assay</h2>
            <div className={`${className}__Wrapper`}>
                <div >Specimen</div>
                <div>
                    <textarea className={`${className}__LongTextarea`} name="specimen" placeholder="" value={specimen} onChange={(e) => {set_specimen(e.target.value)}}/>
                </div>
                <div>Source</div>
                <div>
                    <textarea className={`${className}__LongTextarea`} name="source" placeholder="" value={source} onChange={(e) => {set_source(e.target.value)}}/>
                </div>
                <div>Tissue ID</div>
                <div>
                    <textarea className={`${className}__LongTextarea`} name="tissue" placeholder="" value={tissue_id} onChange={(e) => {set_tissue_id(e.target.value)}}/>
                </div>
                <CountsInputPanel num_nuclei={num_nuclei} set_num_nuclei={set_num_nuclei} num_her2={num_her2} set_num_her2={set_num_her2} num_cep17={num_cep17} set_num_cep17={set_num_cep17} reset={reset}/>
                <div></div>
                <div>
                    <button className="btn btn-primary my-1" onClick={() => save()}>Save</button>
                    {saveSuccess}
                </div>
            </div>
        </div>
    )
}

export default TwoStep1Panel;
