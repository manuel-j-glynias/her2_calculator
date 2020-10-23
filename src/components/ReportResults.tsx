import React from "react";

interface Props {
    ihc:string;
    num_cep17: number;
    num_her2: number;
    num_nuclei: number;
    ratio: number;
}

const ReportResults : React.FC<Props> = ({ihc,num_cep17,num_her2, num_nuclei,ratio}) => {

    return (
        <div>
            <div>Results:</div>
            <div>&nbsp;&nbsp;&nbsp;<span >HER2 IHC:&nbsp;</span>{ihc}</div>
            <div>&nbsp;&nbsp;&nbsp;nuc ish(CEP17)x{(num_cep17/num_nuclei).toFixed(0)},(Her2)x{(num_her2/num_nuclei).toFixed(0)}[{num_nuclei}]</div>
            <div>&nbsp;&nbsp;&nbsp;<span >HER2/CEP17 ratio:&nbsp;</span>{ratio.toFixed(2)}</div>
            <div>&nbsp;&nbsp;&nbsp;<span >Average HER2 signals per cell:&nbsp;</span>{(num_her2/num_nuclei).toFixed(1)}</div>
            <div>&nbsp;&nbsp;&nbsp;<span >Average CEP17 signals per cell:&nbsp;</span>{(num_cep17/num_nuclei).toFixed(1)}</div>
            <br/>
        </div>
    )
}

export default ReportResults;