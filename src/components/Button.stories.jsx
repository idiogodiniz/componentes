import Button from "./Button";

export default {
    title: 'Button',
    component: Button,
}

export const Default = () => <Button>Default</Button>
export const LongButton = () => <Button width='325px' height='52px'>Long Button</Button>