import { useState } from "react";
import PopoverSelect from "./PopoverSelect";

export default {
    title: 'PopoverSelect',
    component: PopoverSelect,
}

export const Default = () => {
    const [value, setValue] = useState();

    const list = [
        {
            item: 'Masculino',
            value: 'masculino'
        },
        {
            item: 'Feminino',
            value: 'feminino'
        },
        {
            item: 'Prefiro não dizer',
            value: 'null'
        }
    ]

    return (
        <PopoverSelect
            nullItem='Selecione um sexo'
            placeholder='sexo'
            type='text'
            value={value}
            setValue={e => setValue(e.target.value)}
        >
            <option selected disabled>Selecione um sexo</option>
            <option value='masculino'>Masculino</option>
            <option value='feminino'>Feminino</option>
            <option value='naodizer'>Prefiro não dizer</option>
        </PopoverSelect>
    )
}