import React from 'react'
import PropTypes from 'prop-types'
import { Box, Image, Stack, Flex, Grid, Heading, Spacer, VStack, useDisclosure, SlideFade } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import brandLogo from '../assets/brand-logo.svg';
function Navbar({ logoSrc, logoAlt, navBG, navHeader, children }) {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    // const handleToggle = () => (isOpen ? onClose() : onOpen());
    const [show, setShow] = React.useState(false)
    const toggleMenu = () => setShow(!show)
    return (
        <>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                mb={2}
                p={8}
                bg={navBG}
            >
                <Flex align="center">
                    <Image boxSize="50px" src={logoSrc} alt={logoAlt} />
                </Flex>
                <Box
                    display={{ base: "block", md: "none" }}
                    align="center"
                    justify="flex-end"
                    onClick={toggleMenu}
                >
                    {show ? <CloseIcon /> : <HamburgerIcon />}
                </Box>

                <Box
                    display={{ base: show ? "block" : "none", md: "block" }}
                    flexBasis={{ base: "100%", md: "auto" }}
                >


                    <Flex
                        align={["center", "center", "center", "center"]}
                        justify={["center", "space-between", "flex-end", "flex-end"]}
                        direction={["column", "row", "row", "row"]}
                        pt={[4, 4, 0, 0]}
                    >

                        {children}

                    </Flex>

                </Box>

            </Flex>
        </>
    )
}

Navbar.propTypes = {
    logoSrc: PropTypes.string,
    logoAlt: PropTypes.string,
    navBG: PropTypes.string,
}

Navbar.defaultProps = {
    logoSrc: "https://www.ncdot.gov/_layouts/15/NCDOT.RNR.Branding/assets/images/logos/NC-DOT-logo-full-2x.png",
    logoAlt: "logo",
    navBG: "transparent"
}
export default Navbar;