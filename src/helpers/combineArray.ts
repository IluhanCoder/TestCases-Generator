import InputTableItem from "../types/InputTableItem";
import KValue from "../types/KValue";
import FieldTestValue from "../types/FieldTestValue";

function combineArrays(data: InputTableItem[], isOkValues: boolean) {
    function combos(array: InputTableItem[], n = 0, result: FieldTestValue[][] = [], current: FieldTestValue[] = []){
        if(isOkValues) {
            if (n === data.length) result.push(current)
            else array[n].okValues.map((item: KValue) => combos(array, n+1, result, [...current, {fieldName: array[n].fieldName, value: item.value}]))
            return result
        }
        else {
            if (n === data.length) result.push(current)
            else array[n].nokValues.map((item: KValue) => combos(array, n+1, result, [...current, {fieldName: array[n].fieldName, value: item.value}]))
            return result
        }
    }
    return combos(data);
}

export default combineArrays;