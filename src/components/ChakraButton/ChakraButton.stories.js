import React from "react";
import { Button } from "@chakra-ui/react";
import { text, boolean, number } from "@storybook/addon-knobs";

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

export const Log = () => <Button onClick={() => console.log('Log Button Clicked', process.env.STORYBOOK_THEME) } colorScheme={'blue'}  >Log</Button>

// Knobs Addon Story
export const Knobs = () => {
    const buttonNumber = number( 'Number', 10 );
    const title = text( 'Lable', 'Knobs Button' );
    const buttonTitle = text( 'title', `${title} ${ buttonNumber }` )
    const size = text( 'size', 'lg' )
    return (
        <Button 
            disabled={ boolean( 'disabled', false ) } 
            colorScheme={'purple'}
            size={size}
        > { buttonTitle }
        </Button>
    );
}