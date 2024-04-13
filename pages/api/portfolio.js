const portfolio = [
    {
        id: 0,
        projectName: "Iifa Institute",
        url: "https://iifainstitute.in/",
        image: "projects/1.png",
        projectDetail: "IIFA - Best Fashion Designing  Institute in haryana. The Core Purpose of Indian Institute of Fashion Art is to provide professional services associated with education and training in the field of Design, Fashion, Textile and Business by International Standards, which are reviewed continuously for improvement to accomplish consistent customer satisfaction.",
        technologiesUsed: [
            {
                tech: "Wordpress"
            },
            {
                tech: "Php"
            },
            {
                tech: "Custom css"
            },
            {
                tech: "MySql Db"
            },
        ]
    },
    {
        id: 0,
        projectName: "Design Master School",
        url: "https://designmasterschool.com/",
        image: "projects/2.png",
        projectDetail: "DESIGN MASTER SCHOOL - Explore the most sought-after career options in design, fashion business, and interior design. Our curriculum is meticulously crafted to meet industry demands, providing students with the skills and knowledge needed to thrive in the competitive world of design. Design Master School boasts a rich tradition of international placements and is proudly affiliated with reputable certification bodies, including QRO Certification. Our students benefit from exposure to global design trends, preparing them for success on the international stage.  ",
        technologiesUsed: [
            {
                tech: "Wordpress"
            },
            {
                tech: "Php"
            },
            {
                tech: "Custom css"
            },
            {
                tech: "MySql Db"
            },
        ]
    },
    {
        id: 0,
        projectName: "Saint Anthony’s School",
        url: "https://www.saintanthonyschool.in/",
        image: "projects/3.png",
        projectDetail: "Saint Anthony’s School is one of the best day boarding schools in Haryana situated in Bahadurgarh. Focussing on holistic development of your child we foster academic, moral, social and physical development of young minds",
        technologiesUsed: [
            {
                tech: "Wordpress"
            },
            {
                tech: "Php"
            },
            {
                tech: "Custom css"
            },
            {
                tech: "MySql Db"
            },
        ]
    },
    
    
    {
        id: 1,
        projectName: "Ai",
        url: "https://iosandweb.net/ai/",
        image: "projects/4.png",
        projectDetail: "In this website It has a Ai functionalities it will contain Speech to text , Text to speech and Translation in any language functionalities ",
        technologiesUsed: [
            {
                tech: "React.JS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "Api"
            },
            {
                tech: "React Bootstrap"
            },
        ]
    },
    {
        id: 2,
        projectName: "Staking Website",
        url: "https://iosandweb.net/staking/",
        image: "projects/5.png",
        projectDetail: "Pera Wallet is the easiest and safest way to store, buy and swap on the Algorand blockchain. Discover & connect decentralized applications (dApps) on any device. It will allow to stake Buy token to user with perawallet connect",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "Perawallet"
            },
            {
                tech: "Algosdk"
            },
            {
                tech: "Firebase"
            },
        ]
    },
   
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
