import { Button } from '@chakra-ui/react'
import React from 'react'

interface IClick {
    children: string | JSX.Element | JSX.Element[];
    click: () => void | {}
}

export const GenericButton = ({click, children} : IClick) => (
    <Button onClick={click} size='sm' minWidth='35%' marginTop='5px' colorScheme='purple'>
        {children}
    </Button>
)

export default GenericButton