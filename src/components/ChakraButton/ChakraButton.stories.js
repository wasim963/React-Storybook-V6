import React from "react";
import { Button } from "@chakra-ui/react";

export default {
    title: 'Chakra/Button',
    component: Button
}

export const Success = () => <Button colorScheme={'blue'}>Success</Button>
export const Danger = () => <Button colorScheme={'red'} >Danger</Button>