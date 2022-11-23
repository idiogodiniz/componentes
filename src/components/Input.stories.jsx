import Input from "./Input";

export default {
    title: 'Input',
    component: Input,
}

export const Default = () => <Input placeholder="Default" />
export const Light = () => <Input mode='light' placeholder="Default"/>