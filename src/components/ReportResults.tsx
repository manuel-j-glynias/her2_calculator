import React from "react";

interface Props {
    ihc:string;
    num_cep17: number;
    num_her2: number;
    num_nuclei: number;
    ratio: number;
}

const ReportResults : React.FC<Props> = ({ihc,num_cep17,num_her2, num_nuclei,ratio}) => {
    const getIHC_interpretation = ():string => {
        if (ihc==="3+"){
            return ' (POSITIVE)'
        }
        else if (ihc==='2+'){
            return ' (EQUIVOCAL)'
        }
        else {
            return ' (NEGATIVE)'
        }
    }
    const getPre = ():string => {
        var pre = `
Results:
    HER2 IHC: ${ihc} ${getIHC_interpretation()}
    nuc ish(CEP17)x${(num_cep17/num_nuclei).toFixed(0)},(Her2)x${(num_her2/num_nuclei).toFixed(0)}[${num_nuclei}]
    HER2/CEP17 ratio: ${ratio.toFixed(2)}
    Average HER2 signals per cell: ${(num_her2/num_nuclei).toFixed(2)}
    Average CEP17 signals per cell: ${(num_cep17/num_nuclei).toFixed(2)}`
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

export default ReportResults;

