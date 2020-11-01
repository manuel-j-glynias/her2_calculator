import React from 'react';

import './App.css';
import IHCInputPanel from "./components/IHCInputPanel";
import CountsInputPanel from "./components/CountsInputPanel";
import ReportResults from "./components/ReportResults";
import InterpretationPanel from "./components/InterpretationPanel";
import ReportFooter from "./components/ReportFooter";
import useClippy from 'use-clippy';
import ReportRecountedResults from "./components/ReportRecountedResults";


const className = 'HER2';
const positive_result = 'Positive'
const negative_result = 'Negative'
const additional = 'Additional work-up required'

interface Props {
    userName: string;
}

const OneStepPanel : React.FC<Props> = ({userName}) => {
    const [specimen, set_specimen] = React.useState<string>('Tissue, Slides, Formalin');
    const [tissue_id, set_tissue_id] = React.useState<string>('');
    const [source, set_source] = React.useState<string>('Breast');
    const [ihc,set_ihc] = React.useState<string>('0');
    const [num_nuclei, set_num_nuclei] = React.useState< number >(20);
    const [num_her2, set_num_her2] = React.useState< number >(0);
    const [num_cep17, set_num_cep17] = React.useState< number >(0);

    const [calculated, set_calculated] = React.useState<boolean>(false);
    const [ratio, set_ratio] = React.useState< number >(0.0);
    const [group, set_group] = React.useState< number >(0);
    const [result, set_result] = React.useState<string>('Indeterminate');
    const [recount, set_recount] = React.useState<boolean>(false);


    const [num_recount_nuclei, set_num_recount_nuclei] = React.useState(20);
    const [num_recount_her2, set_num_recount_her2] = React.useState(0);
    const [num_recount_cep17, set_num_recount_cep17] = React.useState(0);

    const [recount_ratio, set_recount_ratio] = React.useState(0.0);
    const [recalculated, set_recalculated] = React.useState<boolean>(false);

    const [report_generate, set_report_generate] = React.useState<boolean>(false);

    const [copySuccess, set_copySuccess] = React.useState<string>('');


    const [ clipboard, setClipboard ] = useClippy();


    const reset = () => {
        set_report_generate(false)
        set_calculated(false)
        set_recalculated(false)
    }
    const fake_reset = () => {}

    const initialize = () => {
        set_specimen('Tissue, Slides, Formalin')
        set_source('Breast')
        set_tissue_id('')
        set_ihc('0')
        set_num_nuclei(20)
        set_num_her2(0)
        set_num_cep17(0)
        reset()
    }


    const handle_ihc_Change = async (event:any) => {
        const value : string = event.target.value as string;
        set_ihc(value)
        reset()
    }

    const handle_indeterminate = () => {
        if (ihc  === '3+'){
            set_result(positive_result)
        }
        else if (ihc === '2+'){
            set_result(additional)
            set_recount(true)
        }
        else {
            set_result(negative_result)
        }
    }

    const recalc = () => {
        let her2 = isNaN(num_recount_her2) ? 0 : num_recount_her2
        let cep17 = isNaN(num_recount_cep17) ? 0 : num_recount_cep17
        let nuclei = isNaN(num_recount_nuclei) ? 0 : num_recount_nuclei
        let r : number = (cep17===0) ? 0 : (her2/cep17)
        set_recount_ratio(r)
        if ((r >= 2.0) && (her2 >= (4.0 * nuclei))){
            set_result(positive_result)
        }
        else {
            set_result(negative_result)
        }
        set_recalculated(true)
    }


    const calc = () => {
        if (!recalculated) {
            set_recount(false)
            let her2 = isNaN(num_her2) ? 0 : num_her2
            let cep17 = isNaN(num_cep17) ? 0 : num_cep17
            let nuclei = isNaN(num_nuclei) ? 0 : num_nuclei
            let r : number = (cep17===0) ? 0 : (her2/cep17)
            set_ratio(r)
            if (r >= 2.0) {
                if (her2 >= (4.0 * nuclei)){
                    set_group(1)
                    set_result(positive_result)

                }
                else {
                    set_group(2)
                    handle_indeterminate()
                }
            }
            else {
                if (her2 >= (6.0 * nuclei)){
                    set_group(3)
                    handle_indeterminate()

                }
                else if (her2 >= (4.0 * nuclei)){
                    set_group(4)
                    handle_indeterminate()
                }
                else {
                    set_group(5)
                    if (ihc  === '3+'){
                        set_result(positive_result)
                    }
                    else {
                        set_result(negative_result)
                    }
                }
            }
            set_calculated(true)
        }
    }

    const generate_report = () => {
        calc()
        set_report_generate(true)
    }


    const handle_copy = () => {
        const copyText = document.getElementById("report");
        // var ua = window.navigator.userAgent;
        //
        // var msie = ua.indexOf('MSIE ');
        // const isIE: boolean = msie > 0

        if (copyText != null) {
            let textToCopy = copyText.innerText;
            textToCopy = textToCopy.replace(/(\r\n|\n|\r)/gm, "\r");
            setClipboard(textToCopy)
            set_copySuccess('Copied!')
            setTimeout(function () {
                set_copySuccess('')
            }, 2000);
        }
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
    <IHCInputPanel ihc={ihc} handle_ihc_Change={handle_ihc_Change}/>
    <CountsInputPanel num_nuclei={num_nuclei} set_num_nuclei={set_num_nuclei} num_her2={num_her2} set_num_her2={set_num_her2} num_cep17={num_cep17} set_num_cep17={set_num_cep17} reset={reset}/>

    <div></div>
    <div>
    <button className="btn btn-primary my-1" onClick={() => calc()}>Calculate</button>
    <button className="btn btn-primary my-1" onClick={() => initialize()}>Reset</button>

    </div>
    </div>
    <div>
    {calculated &&
    <div>
        <span>Ratio = {ratio.toFixed(2)}</span>
    <span> Group = {group}</span>
    <span> Result = {result}</span>

    </div>}
    </div>
    <div>

    {calculated && recount &&
    <div className={`${className}__Wrapper`}>
    <div>Recount</div>
    <div></div>
    <CountsInputPanel num_nuclei={num_recount_nuclei} set_num_nuclei={set_num_recount_nuclei} num_her2={num_recount_her2} set_num_her2={set_num_recount_her2} num_cep17={num_recount_cep17} set_num_cep17={set_num_recount_cep17} reset={fake_reset}/>
    <div></div>
    <div>
    <button className="btn btn-primary my-1" onClick={() => recalc()}>Recalculate</button>
    </div>


    </div>}
    <div>
    {recalculated &&
    <div>
        <span>Recount Ratio = {recount_ratio.toFixed(2)}</span>
        </div>
}


    </div>
    </div>
    <div>
    {calculated && (result!==additional) && <span>
        <button className="btn btn-primary my-1" onClick={() => generate_report()}>Generate Report</button>
    </span>}
    </div>
    <div>
    {
        calculated && report_generate && <div>
        <div>
            <button className="btn btn-primary my-1" onClick={() => handle_copy()}>Copy</button>
    {copySuccess}
    </div>

    <div id={'report'} className={'report'}>
    <InterpretationPanel  ihc={ihc} num_cep17={num_cep17} num_her2={num_her2} num_nuclei={num_nuclei} ratio={ratio} result={result} group={group}/>
    {recalculated ?
        <ReportRecountedResults ihc={ihc} num_cep17={num_cep17} num_her2={num_her2} num_nuclei={num_nuclei} ratio={ratio}
                                    num_recounted_cep17={num_recount_cep17} num_recounted_her2={num_recount_her2} num_recounted_nuclei={num_recount_nuclei} recount_ratio={recount_ratio}/> :
        <ReportResults ihc={ihc} num_cep17={num_cep17} num_her2={num_her2} num_nuclei={num_nuclei} ratio={ratio}/>
    }

    <ReportFooter specimen={specimen} source={source} tissue_id={tissue_id}/>
    </div>
    </div>
}
    </div>
    </div>

);

}

export default OneStepPanel;