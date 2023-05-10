import combineArrays from "../helpers/combineArray";
import ListStyle from "../tailwind-styles/list-style";
import TableStyle, { TableRowStyle } from "../tailwind-styles/table-style";
import FieldTestValue from "../types/FieldTestValue";
import InputTableItem from "../types/InputTableItem";
import KValue from "../types/KValue";

interface LocalParams {
    data: InputTableItem[],
    isOkValues: boolean
}

const OutPutTable = ({data, isOkValues} : LocalParams) => {
    const combinedArray = combineArrays(data, isOkValues);
    
    const tables = combinedArray.map((item: FieldTestValue[]) => {
        return (
        <table className={TableStyle}>
            <thead>
                <tr className={TableRowStyle}>
                    <td>Дія</td>
                    <td>Очікуваний результат</td>
                </tr>
            </thead>
            <tbody>
                <tr className={TableRowStyle}>
                    <td>1. Відкриваємо форму додання продукту</td>
                    <td>
                        <ul className={ListStyle}>
                            <li>Форма відкрита</li>
                            <li>Усі поля пусті за замовчуванням</li>
                            <li>Кнопка "додати продукт" неактивна</li>
                        </ul>
                    </td>
                </tr>
                <tr className={TableRowStyle}>
                    <td>2. Заповнюємо поля форми:
                    <ul className={ListStyle}>
                        {
                            item.map((field: FieldTestValue) => {
                                return <li key={field.fieldName}>{field.fieldName} = {field.value}</li>
                            })
                        }
                    </ul>
                    </td>
                    <td>
                        <ul className={ListStyle}>
                            <li>поля заповнені</li>
                            <li>кнопка "додати товар" активна</li>
                        </ul> 
                    </td>
                </tr>
                <tr className={TableRowStyle}>
                    <td>3. Натискаємо кнопку "додати товар"</td>
                    <td>
                        { isOkValues &&
                        <ul className={ListStyle}>
                            <li>Повідомлення "товар успішно додано до бази"</li>
                            <li>Товар з'являється у таблиці товарів</li>
                        </ul> ||
                        <ul className={ListStyle}>
                            <li>Валідаціне повідомлення з усіма помилками, виводяться на екран</li>
                            <li>Товар НЕ з'явився у таблиці товарів</li>
                        </ul>
                        }
                    </td>
                </tr>
            </tbody>
            {}
        </table>
        )
    })
    
    return <div>
        {tables.map((table: JSX.Element, i: number) => {
            return <div key={i}>
                <div className="text-2xl flex justify-center pb-2 py-4">Тест-кейс {i + 1}</div>
                <div>
                    {table}
                </div>
            </div>
        })}
    </div>
}

export default OutPutTable;