import { useState } from "react";
import ApplyInput from "./ApplyInput";

export default {
    title: 'ApplyInput',
    component: ApplyInput,
}

export const Default = () => {
    const [value, setValue] = useState();
    return (
        <ApplyInput placeholder='senha' type='password' value={value} setValue={e => setValue(e.target.value)} />
    )
}