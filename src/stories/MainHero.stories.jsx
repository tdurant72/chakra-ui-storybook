import React from 'react';

import MainHero from '../components/MainHero';
import imageOne from '../assets/image-one.jpeg';
export default {
    title: 'Components/MainHero',
    component: MainHero,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <MainHero {...args} />;

export const Row = Template.bind({});
Row.args = {
    contentDirection: "row",
    mainHeading: "There are so main things to do",
    headerTxtContent: "Despite rising traffic and freight travel in our state, the funds available to maintain our transportation system have not kept pace due to shrinking gas tax and federal revenues. Our investment needs are outgrowing our current funding, and this gap gets worse every year. That's why we're launching a new program — NCDOT Pathways. Through this program, we'll analyze new future-focused sources of funding for our transportation system that could better serve our communities for the next generation.",
    heroImageSrc: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_677,q_85,w_1280/v1/clients/raleigh/EX_Skyline_VisitNC_08_02_2019_02_Raleigh_skyline_b9e33ff4-fe60-491f-92bf-471708356d96.jpg",
    heroImageAlt: "skyline",
    btnColor: "primary",
    btnText: "Join Now",
    btnDestination: "#",
    showButton: false
};

export const RowReverse = Template.bind({});
RowReverse.args = {
    contentDirection: "row-reverse",
    mainHeading: "There are so main things to do",
    headerTxtContent: "Despite rising traffic and freight travel in our state, the funds available to maintain our transportation system have not kept pace due to shrinking gas tax and federal revenues. Our investment needs are outgrowing our current funding, and this gap gets worse every year. That's why we're launching a new program — NCDOT Pathways. Through this program, we'll analyze new future-focused sources of funding for our transportation system that could better serve our communities for the next generation.",
    heroImageSrc: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_677,q_85,w_1280/v1/clients/raleigh/EX_Skyline_VisitNC_08_02_2019_02_Raleigh_skyline_b9e33ff4-fe60-491f-92bf-471708356d96.jpg",
    heroImageAlt: "skyline",
    btnColor: "primary",
    btnText: "Join",
    btnDestination: "#",
    showButton: false
};
export const Button = Template.bind({});
Button.args = {
    contentDirection: "row",
    mainHeading: "There are so main things to do",
    headerTxtContent: "Despite rising traffic and freight travel in our state, the funds available to maintain our transportation system have not kept pace due to shrinking gas tax and federal revenues. Our investment needs are outgrowing our current funding, and this gap gets worse every year. That's why we're launching a new program — NCDOT Pathways. Through this program, we'll analyze new future-focused sources of funding for our transportation system that could better serve our communities for the next generation.",
    heroImageSrc: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_677,q_85,w_1280/v1/clients/raleigh/EX_Skyline_VisitNC_08_02_2019_02_Raleigh_skyline_b9e33ff4-fe60-491f-92bf-471708356d96.jpg",
    heroImageAlt: "skyline",
    btnColor: "primary",
    btnText: "Join Now",
    btnDestination: "https://github.com",
    showButton: true
};

export const NoButton = Template.bind({});
NoButton.args = {
    contentDirection: "row",
    mainHeading: "There are so main things to do",
    headerTxtContent: "Despite rising traffic and freight travel in our state, the funds available to maintain our transportation system have not kept pace due to shrinking gas tax and federal revenues. Our investment needs are outgrowing our current funding, and this gap gets worse every year. That's why we're launching a new program — NCDOT Pathways. Through this program, we'll analyze new future-focused sources of funding for our transportation system that could better serve our communities for the next generation.",
    heroImageSrc: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_677,q_85,w_1280/v1/clients/raleigh/EX_Skyline_VisitNC_08_02_2019_02_Raleigh_skyline_b9e33ff4-fe60-491f-92bf-471708356d96.jpg",
    heroImageAlt: "skyline",
    btnColor: "primary",
    btnText: "Join",
    btnDestination: "#",
    showButton: false
};


