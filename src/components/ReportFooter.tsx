import React from "react";

interface Props {
    specimen: string;
    source: string;
    tissue_id: string;
}

const ReportFooter : React.FC<Props> = ({specimen,source,tissue_id}) => {

    return (
        <div>
            <div>Specimen:  {specimen}</div>
            <div>Source:  {source}</div>
            <div>Tissue ID:  {tissue_id}</div>
            <br/>
            <div>Test Characteristics:</div>
            <div>The Agilent Dako HER2 IQFISH pharmDx is an FDA approved companion diagnostic test designed to quantitatively determine HER2 gene amplification in formalin-fixed, paraffin-embedded (FFPE) breast cancer tissue specimens and FFPE specimens from patients with metastatic gastric or gastroesophageal junction adenocarcinoma. Gene amplification is determined from the ratio between the number of signals from the hybridization of the HER2 gene probe (red signals) and the number of signals from the hybridization of the CEN-17 reference chromosome 17 probe (green signals).</div>

        </div>
    )
}

export default ReportFooter;