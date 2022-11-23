import { useState } from "react";
import DynamicInput from "./DynamicInput";

export default {
    title: 'DynamicInput',
    component: DynamicInput,
}

export const Default = () => {
    const [value, setValue] = useState();
    return (
        <DynamicInput placeholder='nome' type='text' value={value} setValue={e => setValue(e.target.value)} />
    )
}