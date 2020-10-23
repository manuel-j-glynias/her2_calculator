import React, {Fragment} from "react";

interface Props {
    ihc: string;
    handle_ihc_Change: (event:any) => void;
}

const IHCInputPanel : React.FC<Props> = ({ihc,handle_ihc_Change}) => {

    return (
        <Fragment>
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

        </Fragment>
    )
}

export default IHCInputPanel;
