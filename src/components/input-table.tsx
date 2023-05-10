import TableStyle from "../tailwind-styles/table-style";
import InputTableItem from "../types/InputTableItem";
import KValue from "../types/KValue";
import { TableRowStyle } from "../tailwind-styles/table-style";

interface LocalParams {
    values: InputTableItem[]
}

const InputTable = ({values}: LocalParams) => {
    const tbodies = values.map((item: InputTableItem, i: number) => {
        const okValues = item.okValues.map((okValue: KValue, j: number) => {
            const fieldName = j === 0 ? <td rowSpan={item.okValues.length + item.nokValues.length}><p>{item.fieldName}</p></td> : null
            const okValuesLabel = j === 0 ? <td rowSpan={item.okValues.length}><p>"okay" значення</p></td> : null
            return <tr className={TableRowStyle} key={okValue.value}>
                {fieldName}
                {okValuesLabel}
                <td><p>{okValue.value}</p></td>
                <td><p>{okValue.comment}</p></td>
            </tr>
        });
        const nokValues = item.nokValues.map((nokValue: KValue, j: number) => {
            const nokValuesLabel = j === 0 ? <td rowSpan={item.nokValues.length}><p>"not okay" значення</p></td> : null;
            return <tr className={TableRowStyle} key={nokValue.value}>
                {nokValuesLabel}
                <td><p>{nokValue.value}</p></td>
                <td><p>{nokValue.comment}</p></td>
            </tr>
        });
        return <tbody>
            {okValues}
            {nokValues}
        </tbody>
    });

    return <table className={TableStyle}>
        <thead>
            <tr className={TableRowStyle}>
                <th>Поле</th>
                <th colSpan={2}>Значення</th>
                <th>Коментар</th>
            </tr>
        </thead>
        {tbodies}
    </table>
}

export default InputTable;