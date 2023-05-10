import {useState} from "react";
import InputTableItem from "../types/InputTableItem";
import ArrayInput from "./array-input";
import ButtonStyle from "../tailwind-styles/button-style";
import TextInputStyle from "../tailwind-styles/text-input-style";
import KValue from "../types/KValue";
import LabelStyle from "../tailwind-styles/label-style";

interface LocalParams {
    inputState: [InputTableItem[], React.Dispatch<React.SetStateAction<InputTableItem[]>>]
}

const InputForm = ({inputState}: LocalParams) => {
    const [items, setItems] = inputState;

    const [okValues, setOkValues] = useState<KValue[]>([]);
    const [nokValues, setNokValues] = useState<KValue[]>([]);
    const [fieldName, setFieldName] = useState<string>("");

    const handleSubmit = () => {
        if(okValues.length > 0 || nokValues.length > 0 && fieldName.length > 0) {
            const newItem: InputTableItem = { 
                fieldName,
                okValues,
                nokValues
            };
            setItems([...items, newItem]);
            setOkValues([]);
            setNokValues([]);
            setFieldName("");
        }
    }
    
    return <form className="flex flex-col pb-6">
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <div className="flex justify-center w-full">
                    <div className="flex flex-col justify-center h-full">
                        <div className="flex justify-center"><label className="text-2xl p-2">Поле:</label></div>
                        <input type="text" className={TextInputStyle} value={fieldName} onChange={e => setFieldName(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col h-full p-4">
                    <div className="flex flex-col gap-2 drop-shadow shadow-xl rounded border p-6">
                        <div className="flex justify-center"><label className="text-2xl">"ОКAY" значення:</label></div>
                        <ArrayInput value={okValues} onChange={(newValue: KValue[]) => setOkValues([...newValue])}/>
                    </div>
                </div>
                <div className="flex flex-col h-full p-4">
                    <div className="flex flex-col gap-2 drop-shadow shadow-xl rounded border p-6">
                        <div className="flex justify-center"><label className="text-2xl">"NOT ОКAY" значення:</label></div>
                        <ArrayInput value={nokValues} onChange={(newValue: KValue[]) => setNokValues(newValue)}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <button type="button" className={ButtonStyle} onClick={handleSubmit}>додати запис</button>
        </div>
    </form>
}

export default InputForm;