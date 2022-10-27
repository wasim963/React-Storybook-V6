import React from "react";
import { Button } from "@chakra-ui/react";

export default {
    title: 'Chakra/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' }
        // onMouseOver: { action: 'hovered' }
    }
}

const Template = ( args ) => <Button {...args} />

export const Success = Template.bind({});
Success.args ={
    colorScheme: 'green',
    children: 'Success'
}

export const Danger = Template.bind({});
Danger.args ={
    colorScheme: 'red',
    children: 'Danger'
}

// export const Log = Template.bind({});
// Log.args = {
//     colorScheme: 'blue',
//     children: 'Log'
// }
// Log.argTypes = {
//     // onClick: { action: 'Button Clicked' }
//     onClick: { action: () => console.log( 'Log Button Clicked Args' ) }
// }

export const Log = () => <Button onClick={() => console.log('Log Button Clicked') } colorScheme={'blue'}  >Log</Button>

