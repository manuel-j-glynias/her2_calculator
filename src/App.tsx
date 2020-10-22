import React from 'react';

import './App.css';


const className = 'HER2';
const positive_result = 'Positive'
const negative_result = 'Negative'


function App() {
    const [specimen, set_specimen] = React.useState('Tissue, Slides, Formalin');
    const [tissue_id, set_tissue_id] = React.useState('');
    const [source, set_source] = React.useState('Breast');

    const [num_nuclei, set_num_nuclei] = React.useState(20);
    const num_nuclei_string = React.useRef(num_nuclei.toString());
    const [num_her2, set_num_her2] = React.useState(0);
    const num_her2_string = React.useRef(num_her2.toString());
    const [num_cep17, set_num_cep17] = React.useState(0);
    const num_cep17_string = React.useRef(num_her2.toString());

    const [calculated, set_calculated] = React.useState(false);
    const [ratio, set_ratio] = React.useState(0.0);
    // const [amplified, set_amplified] = React.useState('False');
    const [group, set_group] = React.useState(0);
    const [result, set_result] = React.useState('Indeterminate');
    const [recount, set_recount] = React.useState(false);

    const [ihc,set_ihc] = React.useState('0');

    const [num_recount_nuclei, set_num_recount_nuclei] = React.useState(20);
    const num_recount_nuclei_string = React.useRef(num_recount_nuclei.toString());
    const [num_recount_her2, set_num_recount_her2] = React.useState(0);
    const num_recount_her2_string = React.useRef(num_recount_her2.toString());
    const [num_recount_cep17, set_num_recount_cep17] = React.useState(0);
    const num_recount_cep17_string = React.useRef(num_recount_cep17.toString());
    const [recount_ratio, set_recount_ratio] = React.useState(0.0);
    const [recalculated, set_recalculated] = React.useState(false);

    const [report_generate, set_report_generate] = React.useState(false);
    const [interpretation_header, set_interpretation_header] = React.useState('');
    const [interpretation_body, set_interpretation_body] = React.useState('');

    const [copySuccess, set_copySuccess] = React.useState('');

    const evidence = 'There is evidence of HER2 (ERBB2) gene amplification in this tumor sample.'
    const no_evidence = 'There is no evidence of HER2 (ERBB2) gene amplification in this tumor sample.'

    const group1 = 'According to current ASCO/CAP guidelines for HER2 testing in breast cancer, dual-probe in situ hybridization (ISH) results indicating a HER2/centromere ration greater than or equal to 2.0 and an average HER2 copy number greater than 4.0 signals per cell are interpreted as ISH positive (Group 1) (1)';
    const group2_3plus = 'According to current ASCO/CAP guidelines for HER2 testing in breast cancer, dual-probe in situ hybridization (ISH) results indicating a HER2/centromere ration greater than or equal to 2.0 but with an average HER2 copy number less than 4.0 signals per cell and a HER2 IHC of 3+ are interpreted as ISH positive (Group 2) (1)'
    const group3_3plus = 'According to current ASCO/CAP guidelines for HER2 testing in breast cancer, dual-probe in situ hybridization (ISH) results indicating a HER2/centromere ration less than 2.0 but with an average HER2 copy number greater than 6.0 signals per cell and a HER2 IHC of 3+ are interpreted as ISH positive (Group 3) (1)'
    const group4_3plus = 'According to current ASCO/CAP guidelines for HER2 testing in breast cancer, dual-probe in situ hybridization (ISH) results indicating a HER2/centromere ration less than 2.0 but with an average HER2 copy number greater than 4.0 and less than 6.0 signals per cell and a HER2 IHC of 3+ are interpreted as ISH positive (Group 4) (1)'

    const group2_lowIHC = 'According to current ASCO/CAP guidelines for HER2 testing in breast cancer, dual-probe in situ hybridization (ISH) results indicating a HER2/centromere ration greater than or equal to 2.0 but with an average HER2 copy number less than 4.0 signals per cell and a HER2 IHC of 0 or 1+ are interpreted as ISH negative (Group 2) (1)'
    const group3_lowIHC = 'According to current ASCO/CAP guidelines for HER2 testing in breast cancer, dual-probe in situ hybridization (ISH) results indicating a HER2/centromere ration less than 2.0 but with an average HER2 copy number greater than 6.0 signals per cell and a HER2 IHC of 0 or 1+ are interpreted as ISH negative (Group 3) (1)'
    const group4_lowIHC = 'According to current ASCO/CAP guidelines for HER2 testing in breast cancer, dual-probe in situ hybridization (ISH) results indicating a HER2/centromere ration less than 2.0 but with an average HER2 copy number greater than 4.0 and less than 6.0 signals per cell and a HER2 IHC of 0 or 1+ are interpreted as ISH negative (Group 4) (1)'


    const group5 = 'According to current ASCO/CAP guidelines for HER2 testing in breast cancer, dual-probe in situ hybridization (ISH) results indicating a HER2/centromere ration less than 2.0 and an average HER2 copy number less than 4.0 signals per cell are interpreted as ISH negative (Group 5) (1)';



    const get_num_recount_nuclei_value = (): string => {
        return num_recount_nuclei_string.current
    }

    const handle_recount_change = async (targetValue:string) => {
        num_recount_nuclei_string.current = targetValue.replace(/\D/g,'');
        set_num_recount_nuclei(parseInt(targetValue))
    }

    const get_num_recount_her2_value = (): string => {
        return num_recount_her2_string.current
    }

    const handle_recount_her2_change = async (targetValue:string) => {
        num_recount_her2_string.current = targetValue.replace(/\D/g,'');
        set_num_recount_her2(parseInt(targetValue))
    }

    const get_num_recount_cep17_value = (): string => {
        return num_recount_cep17_string.current
    }

    const handle_recount_cep17_change = async (targetValue:string) => {
        num_recount_cep17_string.current = targetValue.replace(/\D/g,'');
        set_num_recount_cep17(parseInt(targetValue))
    }

    const get_num_nuclei_value = (): string => {
        return num_nuclei_string.current
    }

    const handle_change = async (targetValue:string) => {
        num_nuclei_string.current = targetValue.replace(/\D/g,'');
        set_num_nuclei(parseInt(targetValue))
        set_report_generate(false)
        set_calculated(false)
    }

    const get_num_her2_value = (): string => {
        return num_her2_string.current
    }

    const handle_her2_change = async (targetValue:string) => {
        num_her2_string.current = targetValue.replace(/\D/g,'');
        set_num_her2(parseInt(targetValue))
        set_report_generate(false)
        set_calculated(false)
    }

    const get_num_cep17_value = (): string => {
        return num_cep17_string.current
    }

    const handle_cep17_change = async (targetValue:string) => {
        num_cep17_string.current = targetValue.replace(/\D/g,'');
        set_num_cep17(parseInt(targetValue))
        set_report_generate(false)
        set_calculated(false)
    }

    const handle_ihc_Change = async (event:any) => {
        const value : string = event.target.value as string;
        set_ihc(value)
        set_report_generate(false)
        set_calculated(false)
    }

     const handle_indeterminate = () => {
        if (ihc  === '3+'){
            set_result(positive_result)
        }
        else if (ihc === '2+'){
            set_result('Additional work-up required')
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
        add_interpretation()
        set_recalculated(true)
    }

    const add_interpretation = () => {
        switch (group){
            case 1: {
                set_interpretation_header(evidence);
                set_interpretation_body(group1);
                break;
            }
            case 2: {
                if (result===positive_result){
                    set_interpretation_header(evidence)
                    set_interpretation_body(group2_3plus)
                }
                else if (result==='negative_result'){
                    set_interpretation_header(no_evidence)
                    set_interpretation_body(group2_lowIHC)
                }
                break;
            }
            case 3: {
                if (result===positive_result){
                    set_interpretation_header(evidence)
                    set_interpretation_body(group3_3plus)
                }
                else if (result===negative_result){
                    set_interpretation_header(no_evidence)
                    set_interpretation_body(group3_lowIHC)
                }
                break;
            }
            case 4: {
                if (result===positive_result){
                    set_interpretation_header(evidence)
                    set_interpretation_body(group4_3plus)

                }
                else if (result===negative_result){
                    set_interpretation_header(no_evidence)
                    set_interpretation_body(group4_lowIHC)
                }
                break;
            }
            case 5: {
                set_interpretation_header(no_evidence)
                set_interpretation_body(group5)
                break;
            }
        }
    }

    const calc = () => {
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
                set_result(negative_result)
             }
        }
        add_interpretation()
        set_calculated(true)
    }

    const generate_report = () => {
        calc()
        set_report_generate(true)
    }


    const handle_copy = () => {
        // @ts-ignore
        // var srcObj = document.getElementById ("src");
        var emailLink = document.getElementById('report');
        var range = document.createRange();
        // @ts-ignore
        range.selectNode(emailLink);
        // @ts-ignore
        window.getSelection().addRange(range);

        try {
            // Now that we've selected the anchor text, execute the copy command
            var successful = document.execCommand('copy');
            if (successful){
                set_copySuccess('Copied!')
                setTimeout(function () {
                    set_copySuccess('')
                }, 2000);
            }
        }
        finally {
            const selection = window.getSelection();
            // @ts-ignore
            selection.removeAllRanges();
        }
    }

    const handle_copy_2 = () => {
        const copyText = document.getElementById("report");
        if (copyText != null)
        {
            navigator.clipboard.writeText(copyText.innerText)
            set_copySuccess('Copied!')
            setTimeout(function () {
                set_copySuccess('')
            }, 2000);
        }
    }
    return (

        <div className={className}>
            <h1 className={`${className}__title`}>Her2 IHC / Dual Probe ISH Assay</h1>
            <div className={`${className}__Wrapper`}>
                <div className={'left_header'}>Specimen</div>
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
                <div>IHC Results</div>
                <div>
                    <ul className={'listHorizontal'}>
                        <li>
                            <label>
                                <input type="radio" value="0" checked={ihc === "0"} onChange={handle_ihc_Change}/>
                                <span>0</span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <input type="radio" value="1+" checked={ihc === "1+"} onChange={handle_ihc_Change}/>
                                <span>1+</span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <input type="radio" value="2+" checked={ihc === "2+"} onChange={handle_ihc_Change}/>
                                <span>2+</span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <input type="radio" value="3+" checked={ihc === "3+"} onChange={handle_ihc_Change}/>
                                <span>3+</span>
                            </label>
                        </li>
                    </ul>
                </div>

                <div>Number Nuclei Counted</div>
                <div>
                    <textarea className={`${className}__ShortTextarea`} name="num_nuclei" placeholder="Num nuclei counted" value={get_num_nuclei_value()} onChange={(e) => {handle_change(e.target.value)}}/>
                </div>

                <div>HER2 Counts</div>
                <div>
                    <textarea className={`${className}__ShortTextarea`} name="num_her2" placeholder="Num HER2 counted" value={get_num_her2_value()} onChange={(e) => {handle_her2_change(e.target.value)}}/>
                </div>

                <div>CEP17 Counts</div>
                <div>
                    <textarea className={`${className}__ShortTextarea`} name="num_cep17" placeholder="Num CEP17 counted" value={get_num_cep17_value()} onChange={(e) => {handle_cep17_change(e.target.value)}}/>
                </div>

                <div></div>
                <div>
                    <button className="btn btn-primary my-1" onClick={() => calc()}>Calculate</button>
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

                    <div>Number Nuclei Recounted</div>
                    <div>
                        <textarea className={`${className}__ShortTextarea`} name="num_recount_nuclei" placeholder="Num nuclei recounted" value={get_num_recount_nuclei_value()} onChange={(e) => {handle_recount_change(e.target.value)}}/>
                    </div>

                    <div>HER2 Recounted</div>
                    <div>
                        <textarea className={`${className}__ShortTextarea`} name="num_her2" placeholder="Num HER2 counted" value={get_num_recount_her2_value()} onChange={(e) => {handle_recount_her2_change(e.target.value)}}/>
                    </div>

                    <div>CEP17 Recounted</div>
                    <div>
                        <textarea className={`${className}__ShortTextarea`} name="num_cep17" placeholder="Num CEP17 counted" value={get_num_recount_cep17_value()} onChange={(e) => {handle_recount_cep17_change(e.target.value)}}/>
                    </div>

                    <div></div>
                    <div>
                        <button className="btn btn-primary my-1" onClick={() => recalc()}>Recalculate</button>
                    </div>

                    <div>
                            {recalculated &&
                            <div>
                                <span>Recount Ratio = {recount_ratio.toFixed(2)}</span>
                                <span>Result = {result}</span>
                            </div>}


                    </div>
                </div>}
            </div>
            <div>
                {calculated && <span>
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
                        <div className={'test_header'}>Her2, Breast Tumor, IHC/FISH</div>
                        <div className={'top_header'}>Result Summary</div>
                        <h3>{result}</h3>
                        <div className={'top_header'}>Interpretations</div>
                        <div className={'interpretation_header'}>{interpretation_header}</div>
                        <div>{interpretation_body}</div>
                        <div className={'references'}>
                            References:
                        </div>
                        <div>
                            <ol>
                                <li>Wolff, et al.  J Clin Oncol, 36(20)2105-2122, 2018</li>
                            </ol>
                        </div>
                        <div className={'top_header'}>Result</div>
                        <div className={'fish_iscn'}>
                            nuc ish(CEP17)x{(num_cep17/num_nuclei).toFixed(0)},(Her2)x{(num_her2/num_nuclei).toFixed(0)}[{num_nuclei}]
                        </div>
                        <div><span className={'left_header'}>HER2/CEP17 ratio:</span>{ratio.toFixed(2)}</div>
                        <div><span className={'left_header'}>Average HER2 signals per cell:</span>{(num_her2/num_nuclei).toFixed(1)}</div>
                        <div><span className={'left_header'}>Average CEP17 signals per cell:</span>{(num_cep17/num_nuclei).toFixed(1)}</div>
                        <div><span className={'left_header'}>HER2 IHC:</span>{ihc}</div>


                        <div className={'top_header'}>Specimen</div>
                        <div>{specimen}</div>

                        <div className={'top_header'}>Source</div>
                        <div>{source}</div>
                        <div className={'top_header'}>Tissue ID</div>
                        <div>{tissue_id}</div>

                        <div className={'top_header'}>Test Characteristics</div>
                        <div>The Agilent Dako HER2 IQFISH pharmDx is an FDA approved companion diagnostic test designed to quantitatively determine HER2 gene amplification in formalin-fixed, paraffin-embedded (FFPE) breast cancer tissue specimens and FFPE specimens from patients with metastatic gastric or gastroesophageal junction adenocarcinoma. Gene amplification is determined from the ratio between the number of signals from the hybridization of the HER2 gene probe (red signals) and the number of signals from the hybridization of the CEN-17 reference chromosome 17 probe (green signals).</div>


                        <div className={'top_header'}>Released By</div>
                        <div className={'signature'}>Carl Morrison, M.D.</div>
                        <div>
                            <span className={'left_header'}>Received:</span>
                            <span>02 Oct 2020</span>
                            <span className={'left_header2'}>Reported:</span>
                            <span>05 Oct 2020</span>
                        </div>
                    </div>
                    </div>
                }
            </div>
        </div>

  );
}

export default App;
