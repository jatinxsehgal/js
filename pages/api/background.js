const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Kurukshetra University',
                degree: 'B.A Hons',
                detail: "Bachelor of Arts With Economics and computer.",
                year: '2020 - 2023'
            },
            {
                id: 1,
                title: 'Hartron Skill Center',
                degree: 'DWT',
                detail: "DWT - Diploma in Web Technology",
                year: '2021-20222'
            },
            {
                id: 2,
                title: 'S.A. Jain Sr Sec School',
                degree: '+12',
                year: '2020'
            },
            {
                id: 3,
                title: 'S.A. Jain Sr Sec School ',
                degree: '10th',
                year: '2018'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Imark Infotech Pvt Ltd.',
                role: 'Web Developer',
                desc: 'As a Web developer, I use Html ,Css ,Javascript,React,Next Js and Wordpress, Webflow Shopify, Php & MySql to build user interfaces for web applications.',
                location: 'Chandigarh'
            },
            {
                id: 1,
                title: 'IOS AND WEB TECHNOLOGY',
                role: 'Software Developer',
                desc: 'As a Software developer, I use React, Next & JavaScript and MySql to build user interfaces for web applications.',
                location: 'Chandigarh'
            },
            {
                id: 2,
                title: 'ALPHA SAKER TECHNOLOGIES',
                role: 'Wordpress Developer',
                desc: 'As an Wordpress Developer, I have created interactive websites in Wordpress with the help of many builders like Elementor, Divi,     Wpbakery , Gutenburg etc.',
                location: 'Chandigarh'
            },
            {
                id: 3,
                title: 'SHAMI INNOVATIONS AND TECNOLOGIES.',
                role: 'Wordpress & PHP Developer trannie ',
                desc: "I work there as a Wordpress & PHP developer, there I learned how to create websites With Wordpress and do CRUD'S operations in PHP, also I worked on Firebase",
                location: 'Noida'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
