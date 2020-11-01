import React, {Fragment} from "react";

interface Props {
    num_nuclei: number;
    set_num_nuclei: (n:number) => void;
    num_her2: number;
    set_num_her2: (n:number) => void;
    num_cep17: number;
    set_num_cep17: (n:number) => void;
    reset: () => void;
}
const className = 'HER2';

const CountsInputPanel : React.FC<Props> = ({num_nuclei,set_num_nuclei,num_her2,set_num_her2,num_cep17,set_num_cep17,reset}) => {

    const get_num_nuclei_value = (): string => {
       return num_nuclei.toString()
    }
    const handle_num_nuclei_change = async (targetValue:string) => {
        set_num_nuclei(parseInt(targetValue))
        reset()
    }
    const get_num_her2_value = (): string => {
        return num_her2.toString()
    }

    const handle_her2_change = async (targetValue:string) => {
        set_num_her2(parseInt(targetValue))
        reset()
    }

    const get_num_cep17_value = (): string => {
        return num_cep17.toString()
    }

    const handle_cep17_change = async (targetValue:string) => {
        set_num_cep17(parseInt(targetValue))
        reset()
    }



    return (
        <Fragment>
            <div>Number Nuclei Counted</div>
            <div>
                <textarea className={`${className}__ShortTextarea`} name="num_nuclei" placeholder="Num nuclei counted" value={get_num_nuclei_value()} onChange={(e) => {handle_num_nuclei_change(e.target.value)}}/>
            </div>

            <div>HER2 Counts</div>
            <div>
                <textarea className={`${className}__ShortTextarea`} name="num_her2" placeholder="Num HER2 counted" value={get_num_her2_value()} onChange={(e) => {handle_her2_change(e.target.value)}}/>
            </div>

            <div>CEP17 Counts</div>
            <div>
                <textarea className={`${className}__ShortTextarea`} name="num_cep17" placeholder="Num CEP17 counted" value={get_num_cep17_value()} onChange={(e) => {handle_cep17_change(e.target.value)}}/>
            </div>

        </Fragment>
    )
}

export default CountsInputPanel;