import { Button } from '@chakra-ui/react'
import React from 'react'

interface IClick {
    title: string;
    click: () => {}
}

export const GenericButton = ({click, title} : IClick) => (
    <Button onClick={click}>
        {title}
    </Button>
)

export default GenericButton