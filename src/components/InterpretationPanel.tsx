import React, {useState,useEffect} from "react";

interface Props {
    ihc:string;
    num_cep17: number;
    num_her2: number;
    num_nuclei: number;
    ratio: number;
    result: string;
    group: number;
}

const InterpretationPanel : React.FC<Props> = ({ihc, num_cep17,num_her2,num_nuclei,ratio,result,group}) => {


    const [interpretation_header, set_interpretation_header] = useState('');
    const [interpretation_body, set_interpretation_body] = useState('');

    const add_ihc = () :string => {
        let body = ""
        if (group==1){
            body = ` \n\nIHC was performed on this sample per ASCO/CAP guidelines and was positive (${ihc}) (results reported separately).`
        }
        else if (group > 1 && group<5){
            if (ihc==="3+")
                body = `and a positive IHC, are interpreted as ISH positive (1).\n\nIHC was performed on this sample per ASCO/CAP guidelines and was positive (${ihc}) (results reported separately).`
            else if (ihc==="2+"){
                body = `require re-reviewing of IHC stained slide and counting 
an additional 20 cells in a separate part of the tumor.  The results are interpreted based on the 
second count.`
            }
            else {
                body = `and a negative IHC, are interpreted as ISH negative (1).\n\nIHC was performed on this sample per ASCO/CAP guidelines and was negative (${ihc}) (results reported separately).`
            }
        }
        if (group==5 && ihc==="3+"){
            body = `\n\nIHC was performed on this sample per ASCO/CAP guidelines and was positive (${ihc}) (results reported separately).`
        }
        return body;
    }

    const add_interpretation = () => {
        let header = `The initial evaluation demonstrated a HER2/centromere ratio of ${ratio.toFixed(2)} and an average HER2 
copy number per cell of ${(num_her2/num_nuclei).toFixed(2)}.
`
        let body = add_ihc()
        switch (group){
                case 1: {
                    header += "According to current ASCO/CAP guidelines for HER2 testing in breast cancer, ISH results \n" +
                        "indicating a HER2/centromere ratio greater than or equal to 2.0 and an average HER2 copy \n" +
                        "number >4.0 signals per cell are interpreted as ISH positive (Group 1) (1)"
                    break;
                }
                case 2: {
                    header += 'According to current ASCO/CAP guidelines for HER2 testing in breast cancer, ISH results\n' +
                        'indicating a HER2/centromere ratio greater than or equal to 2.0 but with an average HER2 copy \n' +
                        'number <4.0 signals per cell (Group 2) '
                     break;
                }
                case 3: {
                    header += 'According to current ASCO/CAP guidelines for HER2 testing in breast cancer, ISH results \n' +
                        'indicating a HER2/centromere ratio less than 2.0 but with an average HER2 copy ' + "\n" +
                        'number >6.0 signals per cell (Group 3) '
                    break;
                }
                case 4: {
                    header +=   "According to current ASCO/CAP guidelines for HER2 testing in breast cancer, ISH results \n" +
                                "indicating a HER2/centromere ratio less than 2.0 and an average HER2 copy \n" +
                                "number of at least 4.0 and <6.0 signals per cell (Group 4) "
                    break;
                }
                case 5: {
                    header += "According to current ASCO/CAP guidelines for HER2 testing in breast cancer, ISH results \n" +
                        "indicating a HER2/centromere ratio less than 2.0 and an average HER2 copy \n" +
                        "number <4.0 signals per cell are interpreted as ISH negative (Group 5) (1)"
                     break;
                }
            }
        set_interpretation_header(header)
        set_interpretation_body(body)
    }

      useEffect(add_interpretation,[group,result])

    const getPre = () => {
        var pre = `Her2, Breast Tumor, IHC/FISH

Result Summary:  ${result.toUpperCase()}

Interpretation:

${interpretation_header} ${interpretation_body}

References:
   1.  Wolff, et al.  J Clin Oncol, 36(20)2105-2122, 2018
`
        return pre
    }

    return (
         <div>
            <pre className={'pre'}>
            {getPre()}
            </pre>
         </div>
    )



}

export default InterpretationPanel;

