import React from "react";

interface Props {
    specimen: string;
    source: string;
    tissue_id: string;
}

const ReportFooter : React.FC<Props> = ({specimen,source,tissue_id}) => {
    const getPre = () => {
        var pre = `
Specimen:  ${specimen}
Source:  ${source}
Tissue ID:  ${tissue_id}

Test Characteristics:
The Agilent Dako HER2 IQFISH pharmDx is an FDA approved companion diagnostic test 
designed to quantitatively determine HER2 gene amplification in formalin-fixed, 
paraffin-embedded (FFPE) breast cancer tissue specimens. 
Gene amplification is determined from the ratio between the number of signals 
from the hybridization of the HER2 gene probe (red signals) and the number of signals 
from the hybridization of the CEN-17 reference chromosome 17 probe (green signals).
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

export default ReportFooter;

