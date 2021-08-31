import React from 'react'
import { Container, SimpleGrid } from "@chakra-ui/react";
export default function Gallery({ minChldWidth, itemSpacing, children }) {
    return (
        <>
            <Container maxW="container.xl" mt="10">
                <SimpleGrid
                    minChildWidth={minChldWidth}
                    spacing={itemSpacing}
                >
                    {children}
                </SimpleGrid>
            </Container>

        </>
    )
}
