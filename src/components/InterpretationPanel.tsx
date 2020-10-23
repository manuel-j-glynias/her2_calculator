import React, {useState,useEffect} from "react";

interface Props {
    result: string;
    group: number;
}

const InterpretationPanel : React.FC<Props> = ({result,group}) => {

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

    const positive_result = 'Positive'
    const negative_result = 'Negative'


    const [interpretation_header, set_interpretation_header] = useState('');
    const [interpretation_body, set_interpretation_body] = useState('');

    const add_interpretation = () => {
        console.log('group',group)
        console.log('result',result)
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
                else if (result===negative_result){
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
    useEffect(add_interpretation,[group,result])
    return (
         <div>

             <div>Her2, Breast Tumor, IHC/FISH</div>
            <br/>
            <div>Result Summary:  {result.toUpperCase()}</div>
            <br/>
            <div>Interpretation:</div>
            <div>{interpretation_header}</div>
             <br/>
            <div>{interpretation_body}</div>
             <br/>
            <div>
                References:
            </div>
            <div>
                <ol>
                    <li>Wolff, et al.  J Clin Oncol, 36(20)2105-2122, 2018</li>
                </ol>
            </div>
            <br/>

        </div>
    )



}

export default InterpretationPanel;