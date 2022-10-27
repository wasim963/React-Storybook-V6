import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
    title: 'form/Button', /* Mandatory and should be unique */
    component: Button, /* optional */
    args: { /* optional, default Args */
        children: 'Button'
    },
    decorators: [ story => <Center>{ story() }</Center> ] // Local Decorator
}

// Version V5
export const Primary = () => <Button variant={ 'primary' } >Primary</Button>
export const Seconadry = () => <Button variant={ 'secondary' } >Seconadry</Button>
export const Success = () => <Button variant={ 'success' } >Success</Button>
export const Danger = () => <Button variant={ 'danger' } >Danger</Button>

// Args mechanism - Introduced in Version V6
const Template = args => <Button { ...args } />

export const PrimaryA = Template.bind({}); //bind the properties of Temnplate to PrimaryA
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary A'
}

// Args of one component can be impprted in another component
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Long Primary A'
}

export const SeconadryA = Template.bind({});
SeconadryA.args = {
    variant: 'secondary',
    // children: 'Secondary A'
}