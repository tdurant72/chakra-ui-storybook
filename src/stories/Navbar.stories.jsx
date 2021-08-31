import React from 'react';
import { Button } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import imageOne from '../assets/image-one.jpeg';
export default {
    title: 'Components/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => {
    return (
        <Navbar {...args}>
            <Button
                colorScheme="yellow"
                size="md"
                variant="link"
            >
                Team
                </Button>
            <Button
                colorScheme="yellow"
                size="md"
                variant="link"
            >
                Projects
                </Button>
            <Button
                colorScheme="secondary"
                size="md"
                onClick={() => window.open("https://github.com")}
            >
                Contact Us
                </Button>
        </Navbar>
    )
}

export const NavTransparent = Template.bind({});
NavTransparent.args = {
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Seal_of_North_Carolina.svg/1200px-Seal_of_North_Carolina.svg.png",
    logoAlt: "logo",
    navBG: "transparent"
};

export const NavColor = Template.bind({});
NavColor.args = {
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Seal_of_North_Carolina.svg/1200px-Seal_of_North_Carolina.svg.png",
    logoAlt: "logo",
    navBG: "primary.500"
};

