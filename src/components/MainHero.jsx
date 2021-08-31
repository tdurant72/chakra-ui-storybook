import React from 'react';
// import Fonts from '../Fonts/themeFonts';
import PropTypes from 'prop-types'
import { Box, Container, Heading, Text, Image, Button, Link } from "@chakra-ui/react";
export default function MainHero({ mainHeading, headerTxtContent, heroImageSrc, heroImageAlt, contentDirection, btnColor, btnText, btnDestination, showButton }) {
    return (
        <>
            <Box>
                <Container maxWidth="container.xl">
                    <Box
                        d={{ base: "column", md: "flex" }}
                        alignItems="center"
                        py="8"
                        flexDirection={contentDirection}>
                        <Box mx="6">
                            <Heading as="h1" fontSize={{ base: "xl", md: "4xl" }}>
                                <Box fontWeight="black">{mainHeading}</Box>
                            </Heading>
                            <Box mt="6" fontWeight="medium">
                                <Text fontSize={{ base: "md", md: "lg" }}>
                                    {headerTxtContent}
                                </Text>
                            </Box>
                            {showButton ?
                                <Button
                                    colorScheme={btnColor}
                                    size="md"
                                    mt="3"
                                    onClick={() => window.open(btnDestination)}
                                >
                                    {btnText}
                                </Button>
                                :
                                null}
                        </Box>
                        <Box w="100%" flexDirection="column" mt={{ base: "32px", md: "0px" }}>
                            <Image w="100" minW="300px" src={heroImageSrc} alt={heroImageAlt} />

                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
MainHero.propTypes = {
    contentDirection: PropTypes.string,
    mainHeading: PropTypes.string,
    headerTxtContent: PropTypes.string,
    heroImageSrc: PropTypes.string,
    btnColor: PropTypes.string,
    btnText: PropTypes.string,
    btnDestination: PropTypes.string,
    showButton: PropTypes.bool,
}
MainHero.defaultProps = {
    contentDirection: "row",
    mainHeading: "",
    headerTxtContent: "",
    heroImageSrc: "",
    heroImageAlt: "",
    btnColor: "primary",
    btnText: "Button",
    btnDestination: "#",
    showButton: false
}