import React from "react";

interface Props {
    ihc:string;
    num_cep17: number;
    num_her2: number;
    num_nuclei: number;
    ratio: number;
    num_recounted_cep17: number;
    num_recounted_her2: number;
    num_recounted_nuclei: number;
    recount_ratio: number;

}

const ReportRecountedResults : React.FC<Props> = ({ihc,num_cep17,num_her2, num_nuclei,ratio,num_recounted_cep17,num_recounted_her2,
    num_recounted_nuclei,recount_ratio}) => {

    const getPre = ():string => {
        var pre = `
Results:
    HER2 IHC: ${ihc}
    Initial count:
       nuc ish(CEP17)x${(num_cep17/num_nuclei).toFixed(0)},(Her2)x${(num_her2/num_nuclei).toFixed(0)}[${num_nuclei}]
       HER2/CEP17 ratio: ${ratio.toFixed(2)}
       Average HER2 signals per cell: ${(num_her2/num_nuclei).toFixed(2)}
       Average CEP17 signals per cell: ${(num_cep17/num_nuclei).toFixed(2)}
    Second count:
       nuc ish(CEP17)x${(num_recounted_cep17/num_recounted_nuclei).toFixed(0)},(Her2)x${(num_recounted_her2/num_recounted_nuclei).toFixed(0)}[${num_recounted_nuclei}]
       HER2/CEP17 ratio: ${recount_ratio.toFixed(2)}
       Average HER2 signals per cell: ${(num_recounted_her2/num_recounted_nuclei).toFixed(2)}
       Average CEP17 signals per cell: ${(num_recounted_cep17/num_recounted_nuclei).toFixed(2)}
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

export default ReportRecountedResults;

