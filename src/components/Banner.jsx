import React from 'react'
import { Button, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import brandLogo from '../assets/brand-logo.svg';
import illustration from '../assets/illustration.svg';
import Navbar from './Navbar';
import MainHero from './MainHero'
import Gallery from './Gallery';
import GalleryItem from './GalleryItem';
import Card from './Card';
import imageOne from '../assets/image-one.jpeg';
import imageTwo from '../assets/image-two.jpeg';
import imageThree from '../assets/image-three.jpeg';
function Banner({ logo, children }) {
    return (
        <>
            <Navbar
                logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Seal_of_North_Carolina.svg/1200px-Seal_of_North_Carolina.svg.png"
                logoAlt="logo">
                <Button
                    colorScheme="primary"
                    size="md"
                    m={2}
                >
                    Work
                </Button>
                <Button
                    colorScheme="primary"
                    size="md"
                    m={2}
                >
                    Projects
                </Button>
                <Button
                    colorScheme="secondary"
                    size="md"
                    m={2}
                    onClick={() => window.open("https://github.com")}
                >
                    Contact Us
                </Button>
            </Navbar>
            <MainHero
                contentDirection="row"
                mainHeading="Transportation Funding"
                headerTxtContent="Despite rising traffic and freight travel in our state, the funds available to maintain our transportation system have not kept pace due to shrinking gas tax and federal revenues. Our investment needs are outgrowing our current funding, and this gap gets worse every year. That's why we're launching a new program — NCDOT Pathways. Through this program, we'll analyze new future-focused sources of funding for our transportation system that could better serve our communities for the next generation."
                heroImageSrc="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_677,q_85,w_1280/v1/clients/raleigh/EX_Skyline_VisitNC_08_02_2019_02_Raleigh_skyline_b9e33ff4-fe60-491f-92bf-471708356d96.jpg"
                heroImageAlt="sky"
                showButton={true}
                btnColor="secondary"
                btnText="Contact Us"
                btnDestination="https://github.com"
            />
            <Gallery minChldWidth="220px" itemSpacing="20px">
                <GalleryItem>
                    <Card
                        cardBg="gray.100"
                        mainImage={imageTwo}
                        cardLink="NC Tourism"
                        linkColor="primary"
                        linkDest="https://google.com"
                        cardHeader="Explore the outdoors"
                        cardHeaderColor="gray.800"
                        cardText="Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
                        cardTextColor="gray.600"
                    />
                </GalleryItem>
                <GalleryItem>
                    <Card
                        cardBg="gray.100"
                        mainImage={imageThree}
                        cardLink="What we do"
                        linkColor="primary"
                        linkDest="https://google.com"
                        cardHeader="Our work"
                        cardHeaderColor="gray.800"
                        cardText="Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
                        cardTextColor="gray.600"
                    />
                </GalleryItem>
                <GalleryItem>
                    <Card
                        cardBg="gray.100"
                        mainImage={imageOne}
                        cardLink="Sign Up!"
                        linkColor="primary"
                        linkDest="https://google.com"
                        cardHeader="Doing Business"
                        cardHeaderColor="gray.800"
                        cardText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
                        cardTextColor="gray.600"
                    />
                </GalleryItem>
                <GalleryItem>
                    <Card
                        cardBg="gray.100"
                        mainImage="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
                        cardLink="Report"
                        linkColor="primary"
                        linkDest="https://google.com"
                        cardHeader="How we are doing"
                        cardHeaderColor="gray.800"
                        cardText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
                        cardTextColor="gray.600"
                    />
                </GalleryItem>
            </Gallery>
        </>
    )
}

// Banner.propTypes = {
//     btn1Label: PropTypes.string,
//     btn2Label: PropTypes.string,
//     imgBoxSize: PropTypes.string,
//     btn1BG: PropTypes.string,
//     btn2BG: PropTypes.string,
//     btnSize: PropTypes.string,
//     btnVariant: PropTypes.string,
// }
// Banner.defaultProps = {
//     btn1Label: "Button",
//     btn2Label: "Button",
//     imgBoxSize: "90px",
//     btn1BG: "gray.600",
//     btn2BG: "gray.600",
//     btnSize: "sm",
//     btnVariant: "link",
// }

export default Banner

