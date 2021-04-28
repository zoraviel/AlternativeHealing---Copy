Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Gem '
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.text}'
    },
    plotOptions: {
        packedbubble: {
            minSize: '30%',
            maxSize: '120%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Amythest',
        data: [{
            name: 'Amythest',
            value: 626,
            text:'Amethyst is a purple variety of the mineral quartz. It occurs in all intensities of the color purple from a light pastel to a depth of royal splendor. Until the beginning of the 20th century it was quite rare and costly. When vast deposits were found in Brazil, amethyst became very accessible and affordable. Amethyst has always been linked to the thinking process, ensuring clarity of vision. It inspires creativity, courage and valor.Amethyst has been successfully synthesized in the lab, so buyers need to be sure their source is qualified to separate natural from lab grown material.'
        }]
    }, {
        name: 'Ruby',
        data: [{
            name: 'Ruby',
            value: 260,
            text:'Ruby is the red variety of the mineral corundum. When corundum occurs in any other color it is referred to as a sapphire. Rubies are mined primarily in Burma, Sri Lanka, Thailand, Cambodia, Vietnam, Kenya, Tanzania, Mozambique, Madagascar, India, Afghanistan and Tajikistan. More important than the gems locality of origin is the actual color and clarity of the stone. Rubies that are the most valuable will be pure red in color, without any modifying tones of violet, orange or brown and are transparent in clarity. A fine ruby is among the most expensive of any stone in the world.The brilliant red color of the ruby has given birth to a number of myths and legends. One is that rubies store vast quantities of heat and when placed in water, they will cause the water to boil. Obviously this is an exaggeration, but some swear if you hold a ruby in your left hand, youll feel bursts of heat. Ruby, none the less, is a powerful stone and has long been considered a magnet for prosperity, attracting abundance both materially and spiritually.'
        },

        ]
    }, {
        name: 'Agate',
        data: [{
            name: "Agate",
            value: 400,
            text: 'Agate is a variety of banded microcrystalline quartz, or chalcedony. There are countless varieties of agate usually named after their physical characteristics or location of origin. The layers of agate form as layers of chalcedony line a cavity (or vug) in a host rock. Since the 12th century, agate has been attributed with the power of improving one disposition as well as their eyesight. These beliefs still carry on today. One claim for agate was stated in The Book of Saxon Leechdoms written in 1864, where it was written that agate prevents harm from thunder, sorcery, demonic possession, poison and drunkenness.'

        }]
    },
     {
        name: 'Quartz',
        data: [{
            name: "Quartz",
            value: 350,
            text:'Quartz is a common variety of silicon dioxide that often crystallizes into well-formed hexagonal prisms. It occurs in many colors, including purple amethyst, yellow citrine, and a smoky variety, referred to as smoky quartz or cairngorm. Colorless, transparent quartz crystals represent the modern concept of ""crystal"" Crystal balls with a truly mystic significance are always made from quartz. Quartz crystals are among the earliest talismans. Examples of rock crystal objects date back to 75,000BC. Every culture on the planet has attributed magical powers to quartz crystals.The Japanese considered it ""the perfect jewel"", symbolizing patience and perseverance, the infinity of space and purity. Native Americans used quartz crystals as a hunting talisman and ""fed"" them with deer blood.'
        }]
    },
    {
        name: 'Diamond',
        data: [{
            name: "Diamond",
            value: 767,
            text:'Diamonds were viewed as talismanic by the ancient Hindus in India, which is where diamonds were first discovered. The most powerful stones were thought to be naturally occurring octahedrons of exceptional clarity which exhibited fire. These stones would bring the owner power, wealth, everlasting youth and good fortune. It was believed thatflawed or inclusive stones could have quite the opposite effect. During the 1st century AD, prominent Romans wore uncut diamonds set in rings also as talismans. For hundredsof years, it was believed diamonds had gender. As late as 1566, Francois Ruet described two diamonds as having offspring. The first diamond engagement ring was given to Mary of Burgundy by Maximillian in 1477, thus establishing the tradition.'
        }]
    },

    {
        name: 'Rock Crystal',
        data: [{
            name: "Rock Crystal",
            value: 266,
            text: 'Rock Crystal is the common name for colorless quartz. The material is abundant and has been used for centuries as a gem.   Quartz crystals are among the earliest talismans. Examples of rock crystal objects date back to 75,000BC. Every culture on the planet has attributed magical power to quartz crystals. The Ancient Greeks prized rock crystal and believed it to be water frozen by the gods to a state of perpetual solidity. They carved the material into seals and intaglios.  The Japanese considered it ""the perfect jewel"", symbolizing patience and perseverance, the infinity of space and purity. Native Americans used quartz crystals as a hunting talisman and ""fed"" them with deers blood.'

        },
        ]
    }, {
        name: 'Chrysoberyl',
        data: [{
            name: "Chrysoberyl",
            value: 267,
            text:'Chrysoberyl is a beryllium aluminum oxide, not at all related to the mineral beryl, which is a silicate. Chrysoberyl can occur in various shades of green, yellow, brown, red, and occasionally blue. The most valuable varieties of chrysoberyl are alexandrite, and cats eye. Cats eye was long admired in the orient for its chatoyant character, but it wasnt popular in the West until the late 1800s. The third and most common variety of chrysoberyl is a transparent greenish yellow stone. It was very popular in Victorian and Edwardian jewelry. Cats eye is believed to protect one from evil spirits or the evil eye. According to the Hindus, the stone would preserve your health and guard against poverty. In Asia, it was thought that if you pressed a cats eye between your own eyes it would enhance your foresight.'
        },
        ]
    },{
        name: 'Citrine',
        data: [{
            name: "Citrine",
            value: 333,
            text:'Citrine is a yellow or golden variety of quartz. Most citrine available today is heat-treated amethyst. When amethyst is heated to about 482.2 degrees Celsius, it alters to to a golden tone. Citrine has been credited with curing urinary tract infections, jaundice and kidney ailments. This is obviously a color association.'
        },
        ]
    },

     {
        name: 'Coral',

        data: [{
            name: "Coral",
            value: 407,
            text:'Coral is one of the few organic gems. It is the exoskeleton of colonial polyps. These are small animals that create their branching homes from calcium carbonate dissolved in sea water. The colors of gem coral range from a pale pink (angel-skin) to oranges and reds. Coral has been used throughout our history; it was pictured on a Summerian vase dated at 3000 BC It was traded between the Mediterranean and India at the time of the birth of Christ. Coral was introduced into Mesoamerica by the Spaniards. Native Americans used it extensively in jewelry. Coral was used in Roman times to protect children from danger. It is still worn in Italy today to protect from the evil eye.'


        }]
    }]
});
