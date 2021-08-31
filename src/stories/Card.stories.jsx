import React from 'react';

import Card from '../components/Card';
import imageOne from '../assets/image-one.jpeg';
export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Card {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
    cardBg: "gray.100",
    mainImage: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
    cardLink: "Projects page",
    linkColor: "primary",
    linkDest: "https://google.com",
    cardHeader: "Projects",
    cardHeaderColor: "gray.800",
    cardText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    cardTextColor: "gray.600",
    showAvatar: true,
    avatarTitle: "John Doe",
    avatarText: "Aug 30th 2021"
};

export const NoAvatar = Template.bind({});
NoAvatar.args = {
    cardBg: "gray.100",
    mainImage: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
    cardLink: "Projects page",
    linkColor: "primary",
    linkDest: "https://google.com",
    cardHeader: "Projects",
    cardHeaderColor: "gray.800",
    cardText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    cardTextColor: "gray.600",
};
export const Image = Template.bind({});
Image.args = {
    cardBg: "gray.100",
    mainImage: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
    cardLink: "Projects page",
    linkColor: "primary",
    linkDest: "https://google.com",
    cardHeader: "Projects",
    cardHeaderColor: "gray.800",
    cardText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    cardTextColor: "gray.600",
};
export const NoImage = Template.bind({});
NoImage.args = {
    cardBg: "gray.100",
    mainImage: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
    cardLink: "Projects page",
    linkColor: "primary",
    linkDest: "https://google.com",
    cardHeader: "Projects",
    cardHeaderColor: "gray.800",
    cardText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    cardTextColor: "gray.600",
    showMainImage: false
};

