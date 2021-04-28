Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'General Plant Medication'
    },
    tooltip: {
        pointFormat: '{series.name}:  {point.text}'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>'
            }
        }
    },
    series: [{
        name: 'Common Names',
        colorByPoint: true,
        data: [{
            name: 'Acai',
            y: 6,
            sliced: true,
            selected: true,
            text: 'Ã acai, acai berry. The acai palm tree, native to tropical Central and South America, produces a deep purple fruit. The acai fruit has long been an important food source for indigenous peoples of the Amazon region. Acai products have become popular in the United States, where they have been promoted for weight-loss and anti-aging purposes.The Federal Trade Commission has taken action against companies that marketed acai weight-loss products in allegedly deceptive ways.Acai fruit pulp has been used experimentally as an oral contrast agent for magnetic resonance imaging (MRI) of the digestive tract.</a>'
        }, {
            name: 'Aloe Vera',
            y: 5,
            text:'Â aloe. Aloe is a cactus-like plant that grows in hot, dry climates. It is cultivated in subtropical regions around the world, including the southern border areas of Texas, New Mexico, Arizona, and California.Historically, aloe has been used for skin conditions and was thought to improve baldness and promote wound healing.Aloe is used topically (applied to the skin) and orally. Topical use of aloe is promoted for acne, lichen planus (a very itchy rash on the skin or in the mouth), oral submucous fibrosis, burning mouth syndrome, burns, and radiation-induced skin toxicity. Oral use of aloe is promoted for weight loss, diabetes, hepatitis, and inflammatory bowel disease (a group of conditions caused by gut inflammation that includes CrohnÃ¢Â€Â™s disease and ulcerative colitis).In 2002, the U.S. Food and Drug Administration issued a ruling that required manufacturers to remove aloe from over-the-counter laxative products because of a lack of safety data.'
        }, {
            name: 'Asian Ginseng',
            y: 5,
            text: 'Ã‚Â Asian ginseng, Chinese ginseng, Korean ginseng, red ginseng, white ginseng.Asian ginseng is native to the Far East, including China, Korea, and far-eastern Siberia. It has been used for health-related purposes in traditional Chinese medicine for thousands of years.Asian ginseng is one of several types of ginseng. The terms red ginseng and white ginseng refer to Asian ginseng roots prepared in two different ways.The part of the plant most frequently used for health purposes is the root.Asian ginseng taken orally is promoted for increasing resistance to environmental stress and as a general tonic to improve well-being. Asian ginseng is also promoted as a dietary supplement for a variety of other reasonsÃ¢Â€Â”to improve physical stamina, concentration, and memory; stimulate immune function; slow the aging process; and relieve various other health problems, such as respiratory and cardiovascular disorders, depression, anxiety, and menopausal hotÃ‚Â flashes. Topical use (applied to the skin) of Asian ginseng as part of a multi-ingredient preparation is promoted for premature ejaculation. Asian ginseng contains many substances; those thought to be most important are called ginsenosides (or panaxosides).'
        }, {
            name: 'Astragalus',
            y: 4.67,
            text: 'Ã‚Â astragale, astragale ÃƒÂ  feuilles de rÃƒÂ©glisse, beg kei, milk vetch Astragalus has been used for centuries in traditional Chinese medicine in combination with other herbs.Its root is used for health care purposes.Commonly combined with other herbs, astragalus has been promoted as a dietary supplement for many conditions, including upper respiratory infections, allergic rhinitis (hay fever), asthma, chronic fatigue syndrome, and chronic kidney disease, among others. ItÃ¢Â€Â™s also promoted to strengthen and regulate the immune system. Topical use (application to the skin) of astragalus is promoted for improving blood flow and speeding wound healing.'
        }, {
            name: 'Bilberry',
            y: 4.18,
            text: 'Â bilberry, European blueberry, whortleberry, huckleberry.The bilberry bush is native to northern areas of Europe and Asia, the northern United States, and Canada. Its dark berries resemble blueberries.Its name is derived from the Danish word bollebar, which means Ã¢Â€Âœdark berry. Bilberry has been used for medicinal purposes since the Middle Ages. The berries and leaves are the parts of the plant that are used. Historically, bilberry has been used for a variety of conditions, including diarrhea, inflammation of the mouth, urinary problems, and diabetes. ItÃ¢Â€Â™s also been used traditionally to prevent scurvy, due to its high vitamin C content. During World War II, British pilots ate bilberry jam, thinking it would improve their nightÃ‚Â vision.Today, bilberry is promoted as a dietary supplement for night vision, cataracts, varicose veins, and other conditions such as atherosclerosis (in which plaque builds up in arteries).'
        }, {
            name: 'Bitter Orange',
            y: 6,
            text:'Â bitter orange, Seville orange, sour orange, zhi shi.Native to eastern Africa, the Arabian Peninsula, Syria, and Southeast Asia, bitter orange now is grown throughout the Mediterranean region and elsewhere, including California and Florida. Bitter orange has been used in  traditional Chinese medicine for indigestion, nausea, and constipation. Today, various bitter orange products are promoted for heartburn, nasal congestion, weight loss, appetite stimulation or suppression, and athletic performance. Bitter orange is also applied to the skin for pain, bruises, fungal infections, and bedsores. Bitter orange is used in cooking and for adding flavor to beer and spirits. The fruit of bitter orange contains p-synephrine and other naturally occurring chemicals. p-Synephrine is structurally similar to ephedrine, the main component in the herb ephedra, but p-synephrine has different pharmacologic properties (how the component acts). The U.S. Food and Drug Administration banned the use of ephedra in dietary supplements because it raises blood pressure and is linked to heart attack and stroke. Bitter orange is commonly used as a substitute for ephedra in dietary supplements. The National Collegiate Athletic Association (NCAA) has placed Ã¢Â€Âœsynephrine (bitter orange) on its current list of banned drugs, listing it as a stimulant.'
        }, {
            name: 'Black Cohosh',
            y: 1.6,
            text: 'black cohosh, black snakeroot, macrotys, bugbane, bugwort, rattleroot, rattleweed Black cohosh, a member of the buttercup family, grows in North America. Native Americans traditionally used black cohosh for a variety of ailments and introduced it to European colonists. Currently, black cohosh is promoted as a dietary supplement for hot flashes and other menopausal symptoms. ItÃ¢Â€Â™s also been promoted for other conditions, including menstrual cramps and premenstrual syndrome, and to induceÃ‚Â labor. The part of the black cohosh plant used in herbal preparations is the root or rhizome (underground stem).'
        }, {
            name: 'Bromelain',
            y: 15,
            text: 'bromelain, pineapple enzyme, pineapple extract. Bromelain is a group of enzymes found in the fruit and stem of the pineapple plant. Pineapple is native to the Americas but is now grown throughout the world in tropical and subtropical regions. Historically, natives of Central and South America used pineapple for a variety of ailments, such as digestive disorders. Bromelain is promoted as a dietary supplement for reducing pain and swelling, especially of the nose and sinuses, gums, and other body parts after surgery or injury. It is also promoted for osteoarthritis, cancer, digestive problems, and muscle soreness. Topical bromelain is promoted for burns.'
        },{
            name: 'Butterbur',
            y: 12,
            text:'butterbur, petasites, purple butterbur. Butterbur is a shrub that grows in Europe and parts of Asia and North America. The name, butterbur, is attributed to the traditional use of its large leaves to wrap butter in warm weather.In the Middle Ages butterbur was used for plague and fever, and in the 17th century it was used to treat cough, asthma, and skin wounds. More recently, it has been promoted as a dietary supplement for urinary tract symptoms, stomach upset, headaches including migraines, allergic rhinitis (hay fever), and other conditions.'
        },{
            name: 'Cats Claw',
            y: 11,
            text: 'Cats claw is a woody vine that grows wild in the Amazon rainforest and other tropical areas of Central and South America. Its thorns resemble a cats claws.The two most common species area. tomentosaÃ‚Â andÃ‚Â U. guianensis. Most commercial preparations of cats claw contain tomentosa. Use of cats claw dates back 2,000 years. Indigenous people of South and Central America used it to ward off disease. Today, cats claw is promoted as a dietary supplement for a variety of health conditions, including viral infections (such as herpes, human papilloma virus, and HIV), Alzheimers disease, cancer, arthritis, diverticulitis, peptic ulcers, colitis, gastritis, hemorrhoids, parasites, and leaky bowel syndrome.'
        },{
            name: 'Chamomile',
            y: 5,
            text: 'chamomile, German chamomile. There are two types of chamomile: German chamomile and Roman chamomile. This fact sheet focuses on German chamomile. Chamomile was described in ancient medical writings and was an important medicinal herb in ancient Egypt, Greece, and Rome. Today, chamomile is promoted for sleeplessness, anxiety, and gastrointestinal conditions such as upset stomach, gas, and diarrhea. It is also used topically for skin conditions and for mouth sores resulting from cancer treatment.'
        },{
            name: 'Chasteberry',
            y: 7,
            text: 'chaste tree, vitex, monks pepper. The chasteberry plant, also called chaste tree, is native to the Mediterranean region and Asia.The name Ã¢Â€ÂœchasteberryÃ¢Â€Â may reflect the traditional belief that the plant promoted chastity. Monks in the Middle Ages reportedly used it to decrease sexual desire. In the past, chasteberry extracts were used to treat a variety of gynecological disorders and skin conditions. Today, chasteberry is promoted as a dietary supplement for symptoms of premenstrual syndrome, breast pain associated with the menstrual cycle, infertility, and other conditions.'
        },{
            name: 'Cinnamon',
            y: 6,
            text:'cinnamon bark, Ceylon cinnamon, cassia cinnamon. here are many types of cinnamon. Ceylon cinnamon (Cinnamomum verum), grown primarily in Sri Lanka, is known as true cinnamon. Cassia cinnamon (Cinnamomum aromaticum), grown in southeastern Asia, is the most common type sold in North America.Used as a spice for thousands of years, cinnamon comes from the bark of various species of cinnamon trees. The leaves, flowers, fruits, and roots of cinnamon trees have also been used in cooking and for medicinal purposes. There are differences in the chemical composition of cinnamon products produced from different species or parts of cinnamon trees.Cinnamon has a long history of use in traditional medicine in various parts of the world, including China, India, and Persia (Iran). Today, cinnamon is promoted as a dietary supplement for diabetes or for irritable bowel syndrome or other gastrointestinal problems, as well as otherÃ‚Â conditions. Cassia cinnamon is promoted for topical use (application to the skin) as an insect repellent.'
        },{
            name: 'Cranberry',
            y: 9,
            text:'American cranberry, bearberry. Cranberry is an evergreen shrub that grows in wet habitats in the Northeastern and North Central parts of the United States. Historically, cranberry fruits or leaves were used for bladder, stomach, and liver disorders, as well as diabetes, wounds, and other conditions. Today, cranberry is most commonly promoted for urinary tract infections (UTIs).'
        },{
            name: 'Dandelion',
            y: 4,
            text:'lions tooth, blowball. Dandelion is native to Europe but found throughout temperate regions in the Northern Hemisphere. The leaves, flowers, and root of the plant have traditionally been used in Mexican and other North American medicine.Today, dandelion is promoted as a tonic, as a diuretic, and for a variety of conditions, including infections and digestive symptoms. As a food, dandelion is used as a salad green and in soups, wine, and teas. The roasted root is used as a coffee substitute.'
        },{
            name: 'Echinacea',
            y: 6,
            text: 'purple coneflower, coneflower, American coneflower. There are nine known species of echinacea, all of which are native to North America. They were used by Native Americans of the Great Plains region as traditional medicines. Echinacea is promoted as a dietary supplement for the common cold and other infections, based on the idea that it might stimulate the immune system to more effectively fight infection. Echinacea preparations have been promoted for topical use (application to the skin) for wounds and skin problems.Several species of echinacea, most commonly Echinacea purpurea or Echinacea angustifolia, may be included in dietary supplements.'
        },{
            name: 'Elderberry',
            y: 4,
            text: 'European elder, black elder, elderberry, elder flower, sambucus. Elderberry is the dark purple berry of the European or black elder tree, which grows in the warmer parts of Europe, North America, Asia, and Northern Africa. Elderberry has been used in folk medicine to treat colds and flu. Elderberry is promoted as a dietary supplement for colds, flu, and other conditions. It has also been promoted for COVID-19 (the disease caused by the new coronavirus), but there is no good evidence to support its use.'
        },{
            name: 'Ephedra',
            y: 6,
            text: 'Chinese ephedra, ma huang. Ephedra is a low evergreen shrub with small scaly leaves. It has a long history of medicinal use in China and India to treat colds, fever, headaches, coughing, wheezing, and other conditions. The U.S. Food and Drug Administration (FDA) banned the sale of dietary supplements containing ephedrine alkaloids (stimulant compounds found in Ephedra sinica and some other plants) in the United States in 2004. Prior to the ban, ephedra was an ingredient in some dietary supplements promoted for weight loss, increased energy, and enhanced athletic performance.'
        },{
            name: 'European Mistletoe',
            y: 6,
            text: 'None. European mistletoe is a parasitic plant that grows on several types of common trees such as apple, oak, pine, and elm. European mistletoe is different from American mistletoe, the type of mistletoe that grows in the United States and is used as a holiday decoration. European mistletoe has been used for centuries in traditional medicine for a variety of conditions, including seizures, headaches, and menopause symptoms. Today, European mistletoe is promoted as a treatment for cancer. In Europe, European mistletoe extracts that are given by injection are sold as prescription drugs. European mistletoe may also be taken orally (by mouth) as a dietary supplement. The U.S. Food and Drug Administration has not approved the use of European mistletoe as a treatment for cancer or any other medical condition.'
        },{
            name: 'Evening Primrose Oil',
            y: 5,
            text: 'Evening primrose is a plant native to North and South America that also grows throughout Europe and parts of Asia. It has yellow flowers that open at sunset and close during the day. The oil from evening primrose seeds contains omega-6 fatty acids, including gamma-linolenic acid (GLA).Native Americans made poultices from the evening primrose plant for bruises and wounds and used its stem and leaf juices as topical remedies for skin inflammations. The leaves were taken orally for gastrointestinal complaints and sore throats. In the 17th century, evening primrose oil became a popular folk remedy in Europe, where it was known as Kings cure-all. Today, evening primrose oil dietary supplements are promoted for atopic dermatitis (a type of eczema), rheumatoid arthritis, premenstrual syndrome (PMS), breast pain, menopause symptoms, and other conditions. Evening primrose oil may also be included in products that are applied to the skin.'
        },{
            name: 'Fenugreek',
            y: 4,
            text: 'None. Fenugreek is a clover-like herb native to the Mediterranean region, southern Europe, and western Asia. Its seeds, which smell and taste like maple syrup, have been used in cooking and as medicine. Fenugreek is used as an ingredient in spice blends and a flavoring agent in foods, beverages, and tobacco. Fenugreek extracts are also used in soaps and cosmetics. In North Africa, Asia, and southern Europe, fenugreek was traditionally used for diabetes and to increase milk supply in women who were breastfeeding. Today, fenugreek is promoted as a dietary supplement for diabetes, menstrual cramps, and other conditions and to stimulate milk production during breastfeeding.'
        },{
            name: 'Feverfew',
            y: 5,
            text: 'bachelors buttons, featherfew. Feverfew is native to parts of western Asia and the Balkans, but it now grows throughout the world.Feverfew is promoted for fevers, headaches, and arthritis; topically (applied to the skin), its promoted for toothache and as an antiseptic and insecticide. Feverfew has been called medieval aspirin or aspirin of the 18th century.'

        },{
            name: 'Flaxseed and Flaxseed Oil',
            y: 4,
            text: 'Flaxseed has had a variety of health and industrial uses. Hippocrates wrote about flaxseed being a laxative; North American pioneers made flaxseed dressings for cuts and burns. Fiber from the plant is made into linen, and oil from its seeds is used in paints, among other products. Today, flaxseed and flaxseed oil are promoted for a variety of disorders that include stomach and intestinal complaints, such as constipation, diarrhea, and irritable bowel syndrome (IBS). Flaxseed and flaxseed oil are also promoted for heart and blood vessel disorders (for example, high levels of blood fats such as cholesterol and triglycerides), as well as diabetes and other conditions.'
        },{
            name: 'Garcinia Cambogia',
            y: 5,
            text: 'Malabar tamarind, brindle berry. Garcinia cambogia is native to India and Southeast Asia. The fruit pulp and rind have long been used in Asian countries as a condiment and food preservative. The rind contains a chemical called hydroxycitric acid (HCA), which has been studied for its effect on appetite. Garcinia cambogia supplements with HCA are marketed for weight loss. Garcinia cambogia has also been promoted for relief of joint pain and digestive symptoms and to improve athletic performance.'
        },{
            name: 'Garlic',
            y: 6,
            text: 'Garlic is the edible bulb from a plant in the lily family. It was traditionally used for health purposes by people in many parts of the world, including the Egyptians, Greeks, Romans, Chinese, and Japanese. Currently, garlic is most commonly promoted as a dietary supplement for conditions related to the heart and blood vessels, including high blood cholesterol and high blood pressure. Fresh garlic, garlic powder, and garlic oil are used to flavor foods. Garlic may be used topically (applied to the skin).'
        },{
            name: 'Ginger',
            y: 7,
            text: 'Native to parts of Asia, such as China, Japan, and India, ginger has a leafy stem and yellowish-green flowers. The spice comes from the rhizome (underground stem) of the plant. Ginger has been used for medicinal purposes in China for more than 2,500 years, and it has had a prominent role in Chinese, Indian, and Japanese medicine since the 1500s.'
        },{
            name: 'Ginkgo',
            y: 4,
            text: 'Ginkgo biloba, fossil tree, maidenhair tree, Japanese silver apricot, baiguo, yinhsing. Ginkgo, one of the oldest living tree species in the world, has a long history in traditional Chinese medicine. Members of the royal court were given ginkgo nuts for senility. Other historical uses for ginkgo were for asthma, bronchitis, and kidney and bladder disorders. Today, the extract from ginkgo leaves is promoted as a dietary supplement for many conditions, including anxiety, allergies, dementia, eye problems, peripheral artery disease (when buildup of plaque narrows the blood vessels that carry blood to the head, organs, and limbs), tinnitus, and other health problems.'
        },{
            name: 'Goldenseal',
            y: 4,
            text: 'yellow root. Goldenseal is a plant native to North America. Overharvesting and loss of habitat have decreased the availability of wild goldenseal, but the plant is now grown commercially in the United States, especially in the Blue Ridge Mountains. Historically, Native Americans used goldenseal for skin disorders, ulcers, fevers, and other conditions. European settlers adopted it as a medicinal plant, using it for a variety of conditions. Currently, goldenseal is promoted as a dietary supplement for colds and other respiratory tract infections, allergic rhinitis (hay fever), ulcers, and digestive upsets such as diarrhea and constipation. It is also used as a mouthwash for sore gums and as an eyewash for eye inflammation, and it is applied to the skin for rashes and other skin problems.'
        },{
            name: 'Grape Seed Extract',
            y: 5,
            text: 'Grape seed extract, which is made from the seeds of wine grapes, is promoted as a dietary supplement for various conditions, including venous insufficiency (when veins have problems sending blood from the legs back to the heart), promoting wound healing, and reducingÃ‚Â inflammation. Grape seed extract contains proanthocyanidins, which have been studied for a variety of health conditions.'
        },{
            name: 'Green Tea',
            y: 6,
            text:'Green, black, and oolong teas all come from the same plant,Ã‚Â Camellia sinensis, but are prepared using different methods. To produce green tea, leaves from the plant are steamed, pan fried, and dried. Tea has been used for medicinal purposes in China and Japan for thousands of years.Green tea as a beverage or dietary supplement is promoted for improving mental alertness, relieving digestive symptoms and headaches, and promoting weight loss. Green tea and its components, including epigallocatechin-3-gallate (EGCG), have been studied for their possible protective effects against heart disease andÃ‚Â cancer. The U.S. Food and Drug Administration (FDA) has approved a topical ointment, sinecatechins (brand name Veregen), which includes extracted components of green tea leaves and is used for the treatment of genital warts.'
        },{
            name: 'Hawthorn',
            y: 4,
            text: 'English hawthorn, oneseed hawthorn, harthorne, haw. Hawthorn is a flowering shrub or tree of the rose family. It grows in temperate regions throughout the world. Historically, hawthorn has been used for heart disease as well as for digestive and kidney problems. It is now promoted for these uses as well as forÃ‚Â anxiety, high or low blood pressure, and other conditions.'
        },{
            name: 'Hoodia ',
            y: 5,
            text:'Kalahari cactus, Xhoba. Hoodia is a cactus-like plant that grows in Africas Kalahari Desert. Historically, the San Bushmen are believed to have used hoodia to suppress appetite. Today, hoodia dietary supplements are promoted as appetite suppressants for weight loss.'
        },{
            name: 'Horse Chestnut',
            y: 5,
            text: 'buckeye, Spanish chestnut. Horse chestnut is a tree native to parts of southeastern Europe. Its fruits contain seeds that resemble sweet chestnuts but have a bitter taste. Historically, horse chestnut seed extract was used for joint pain, bladder and gastrointestinal problems, fever, leg cramps, and other conditions. Today, horse chestnut seed extract is promoted for chronic venous insufficiency (CVI; poor blood flow in the veins of the legs, which may lead to leg pain, swelling, itchiness, and other symptoms), irritable bowel syndrome, male infertility, and other conditions.'
        }, {
            name: 'Kava',
            y: 6,
            text: 'kava kava, ava pepper, ava root, kawa. Kava is native to the islands of the western Pacific and is a member of the pepper family. Pacific islanders have used kava for thousands of years as a medicine and for ritual purposes. Today, kava is promoted as a dietary supplement for anxiety, insomnia, and other conditions.'
        }]
    }]
});
