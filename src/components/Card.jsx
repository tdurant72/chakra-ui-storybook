import React from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    Image,
    Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Card({ cardBg, mainImage, showMainImage, cardLink, linkColor, linkDest, cardHeader, cardHeaderColor, cardText, cardTextColor, avatar, showAvatar, avatarTitle, avatarTitleColor, avatarText, avatarTextColor }) {
    return (
        <Center color={cardBg}>
            <Box
                maxW={'320px'}
                w={'full'}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                {showMainImage ?
                    <Box
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}>
                        <Image
                            src={mainImage}
                            objectFit="cover"
                        />
                    </Box>
                    : null}
                <Stack>
                    <Heading
                        color={cardHeaderColor}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {cardHeader}
                    </Heading>
                    <Text color={cardTextColor}>
                        {cardText}
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    {showAvatar ?
                        <Avatar
                            src={avatar}
                            alt={'Author'}
                        />
                        : null}
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600} color={avatarTitleColor}>{avatarTitle}</Text>
                        <Text color={avatarTextColor}>{avatarText}</Text>
                    </Stack>
                </Stack>
                <Button
                    mt={2}
                    size="lg"
                    colorScheme={linkColor}
                    variant="link"
                    rightIcon={<ArrowForwardIcon />}
                    onClick={() => window.open(linkDest)}
                >
                    {cardLink}
                </Button>
            </Box>
        </Center>
    )
}

Card.propTypes = {
    cardBg: PropTypes.string,
    mainImage: PropTypes.string,
    cardLink: PropTypes.string,
    linkColor: PropTypes.string,
    linkDest: PropTypes.string,
    cardHeader: PropTypes.string,
    cardText: PropTypes.string,
    cardTextColor: PropTypes.string,
    avatar: PropTypes.string,
    avatarTitle: PropTypes.string,
    avatarTitleColor: PropTypes.string,
    avatarText: PropTypes.string,
    avatarTextColor: PropTypes.string,
    showMainImage: PropTypes.bool,
    showAvatar: PropTypes.bool,
}

Card.defaultProps = {
    cardBg: "lightGray",
    mainImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cardLink: "",
    linkColor: "primary",
    linkDest: "#",
    cardHeader: "",
    cardText: "",
    cardTextColor: "gray",
    avatar: "",
    avatarTitle: "",
    avatarTitleColor: "gray",
    avatarText: "",
    avatarTextColor: "gray",
    showMainImage: true,
    showAvatar: false
}
export default Card;


