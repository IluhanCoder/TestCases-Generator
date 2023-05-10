import {useState, useEffect} from "react";
import ButtonStyle from "../tailwind-styles/button-style";
import TextInputStyle from "../tailwind-styles/text-input-style";
import KValue from "../types/KValue";
import LabelStyle from "../tailwind-styles/label-style";

interface LocalParams {
    value: KValue[],
    onChange: CallableFunction
}

const ArrayInput = ({value, onChange}: LocalParams) => {
    const [localItemValue, setLocalItemValue] = useState<string>("");
    const [localItemComment, setLocalItemComment] = useState<string>("");

    useEffect(() => {}, [value]);

    const handlePush = () => {
        const newValue: KValue = { value: localItemValue, comment: localItemComment };
        onChange([...value, newValue]);
        setLocalItemValue("");
        setLocalItemComment("");
    }

    const handleRemoving = (item: KValue) => {
        value.splice(value.indexOf(item), 1)
        onChange([...value]);
    }

    return <>
        <div className="flex flex-col">
            <div className="flex p-2 gap-2">
                <label className={LabelStyle}>Значення:</label><input className={TextInputStyle} type="text" value={localItemValue} onChange={e => setLocalItemValue(e.target.value)}/>
                <label className={LabelStyle}>Коментар:</label><input className={TextInputStyle} value={localItemComment} onChange={e => setLocalItemComment(e.target.value)}/>
                <button type="button" className={ButtonStyle} onClick={handlePush}>додати значення</button>
            </div>
            <div className="flex flex-col gap-2 py-4">
                {value.map((item: KValue) => {
                    if (item.value!.length > 0 && item.comment!.length > 0) return <div key={item.value} className="bg-gray-200 rounded grid grid-cols-3 gap-4 w-full p-3">
                        <div><label className="text-xl">{item.value}</label></div>
                        <div><label className="text-sm text-gray-600">{item.comment}</label></div>
                        <div className="flex justify-end pr-4"><button type="button" onClick={() => handleRemoving(item)}>X</button></div>
                    </div>
                })}
            </div>
        </div>
    </>
}

export default ArrayInput;