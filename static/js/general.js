Highcharts.chart('container', {
    series: [{
        type: "treemap",
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        tooltip: {
            pointFormat: ' {point.text}'
        },
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: 'Y',
            name: 'Yoga',
            color: "#EC2500"
        }, {
            id: 'E',
            name: 'Energy',
            color: "#ECE100"
        }, {
            id: 'O',
            name: 'Other',
            color: '#EC9800'
        }, {
            id: 'N',
            name: 'Nature',
            color: '#000'
        }, {
            id: 'T',
            name: 'Therapy',
            color: '#FFF'
        },{
            name: 'Activated charcoal cleanse',
            parent: 'N',
            value: 1,
            text: 'Activated charcoal cleanses, also known as charcoal detoxes, are a pseudoscientific use of a proven medical intervention. Activated charcoal is available in powder, tablet and liquid form. Its proponents claim the use of activated charcoal on a regular basis will detoxify and cleanse the body as well as boost ones energy and brighten the skin. Such claims violate basic principles of chemistry and physiology. There is no medical evidence for any health benefits of cleanses or detoxes via activated charcoal or any other method. Charcoal, when ingested, will absorb vitamins and nutrients as well as prescription medications present in the gastrointestinal tract which can make it dangerous to use unless directed by a medical doctor.'
        }, {
            name: 'Acupressure',
            parent: 'O',
            value: 2,
            text: 'Acupressure  (Chinese -Tui na), is an alternative medicine technique often used in conjunction with acupuncture. It is based on the concept of life energy which flows through ""meridians"" in the body. In treatment, physical pressure is applied to acupuncture points or ashi trigger points with the aim of clearing blockages in these meridians. Pressure may be applied by hand, by elbow, or with various devices.'
        }, {
            name: 'Acupuncture',
            parent: 'O',
            value: 3,
            text: 'Acupuncture is a form of alternative medicine and a key component of traditional Chinese medicine (TCM) in which thin needles are inserted into the body. Acupuncture is a pseudoscience, the theories and practices of TCM are not based on scientific knowledge, and it has been characterized as quackery. There is a range of acupuncture variants which originated in different philosophies, and techniques vary depending on the country in which it is performed, but can be divided into two main foundational philosophical applications and approaches, the first being the modern standardized form called eight principal TCM and the second an older system that is based on the ancient Taoist Wuxing or better known as the five elements or phases in the West. Acupunture is most often used to attempt pain relief, though acupuncturists say that it can also be used for a wide range of other conditions. Acupuncture is generally used only in combination with other forms of treatment.'
        }, {
            name: 'Affirmative prayer',
            parent: 'O',
            value: 4,
            text: 'Affirmative prayer is a form of prayer or a metaphysical technique that is focused on a positive outcome rather than a negative situation. For instance, a person who is experiencing some form of illness would focus the prayer on the desired state of perfect health and affirm this desired intention ""as if already happened"" rather than identifying the illness and then asking God for help to eliminate it.'
        }, {
            name: 'Alexander Technique',
            parent: 'O',
            value: 5,
            text: 'The Alexander Technique, named after its creator Frederick Matthias Alexander, is a popular type of alternative therapy based on the idea that poor posture gives rise to a range of health problems.'
        }, {
            name: 'Alternative cancer treatments',
            parent: 'O',
            value: 6,
            text: 'Alternative cancer treatment describes any cancer treatment or practice that is not part of the conventional standard of cancer care. These include special diets and exercises, chemicals, herbs, devices, and manual procedures. Most alternative cancer treatments do not have high-quality evidence supporting their use.  Concerns have been raised about the safety of some of them. Some have even been found to be unsafe in certain settings.  Despite this, many untested and disproven treatments are used around the world. Promoting or marketing such treatments is illegal in most of the developed world.'
        }, {
            name: 'Animal-assisted therapy',
            parent: 'T',
            value: 7,
            text: 'Animal-assisted therapy is an alternative or complementary type of therapy that includes the use of animals in a treatment. It falls under the realm of Animal Assisted Intervention, which encompasses any intervention that includes an animal in a therapeutic context such as emotional support animals, service animals trained to assist with daily activities, and animal assisted activity. Animal-assisted therapy can be classified by the type of animal, the targeted population, and how the animal is incorporated into the therapeutic plan. The most commonly used types of animal-assisted therapy are canine-assisted therapy and equine-assisted therapy. The goal of animal-assisted therapy is to improve a patients social, emotional, or cognitive functioning and literature reviews state that animals can be useful for educational and motivational effectiveness for participants. Studies have documented the positive effects of the therapy as reported on subjective self-rating scales and on objective physiological measures such as blood pressure and hormone levels.'
        },{
            name: 'Anthroposophic medicine',
            parent: 'O',
            value: 8,
            text: 'Anthroposophic medicine (or anthroposophical medicine) is a form of alternative medicine. Devised in the 1920s by Rudolf Steiner (1861â€“1925) in conjunction with Ita Wegman (1876â€“1943), anthroposophical medicine is based on occult notions and draws on Steiners spiritual philosophy, which he called anthroposophy. Practitioners employ a variety of treatment techniques based upon anthroposophic precepts, including massage, exercise, counselling, and substances.'
        },{
            name: 'Apitherapy',
            parent: 'N',
            value: 9,
            text: 'Apitherapy is a branch of alternative medicine that uses honey bee products, including honey, pollen, propolis, royal jelly and bee venom. Proponents of apitherapy make claims for its health benefits which are unsupported by evidence-based medicine.'
        },{
            name: 'Applied kinesiology',
            parent: 'O',
            value: 10,
            text:'pplied kinesiology (AK) is a pseudoscience-based technique in alternative medicine claimed to be able to diagnose illness or choose treatment by testing muscles for strength and weakness'
        },{
            name: 'Aquatic therapy',
            parent: 'T',
            value: 11,
            text: 'Aquatic therapy refers to treatments and exercises performed in water for relaxation, fitness, physical rehabilitation, and other therapeutic benefit.  Typically a qualified aquatic therapist gives constant attendance to a person receiving treatment in a heated therapy pool.  Aquatic therapy techniques include Ai Chi, Aqua Running, Bad Ragaz Ring Method, Burdenko Method, Halliwick, Watsu, and other aquatic bodywork forms. Therapeutic applications include neurological disorders, spine pain, musculoskeletal pain, postoperative orthopedic rehabilitation, pediatric disabilities, and pressure ulcers.'
        },{
            name: 'Aromatherapy',
            parent: 'T',
            value: 12,
            text: 'Aromatherapy is  a pseudoscience based on the usage of aromatic materials, including essential oils, and other aroma compounds, with claims for improving psychological or physical well-being. It is offered as a complementary therapy or as a form of alternative medicine, the first meaning alongside standard treatments, the second instead of conventional, evidence-based treatments.'
        },{
            name: 'Art therapy',
            parent: 'T',
            value: 13,
            text: 'Art therapy (not to be confused with arts therapy, which includes other creative therapies such as drama therapy and music therapy) is a distinct discipline that incorporates creative methods of expression through visual art media.  Art therapy, as a creative arts therapy profession, originated in the fields of art and psychotherapy and may vary in definition.'
        },{
            name: 'Asahi Health',
            parent: 'Y',
            value: 14,
            text:'Asahi (or Asahi Health) is a Finnish health exercise based on the eastern traditions of Tai chi chuan, qigong, yiquan and yoga, with a western scientific viewpoint. Asahi is designed to suit everybody, regardless of physical condition or age. '
        },{
            name: 'Attachment therapy',
            parent: 'T',
            value: 15,
            text: '"Attachment therapy (also called ""the Evergreen model"", ""holding time"", ""rage-reduction"", ""compression therapy"", ""rebirthing"", ""corrective attachment therapy"" and Coercive Restraint Therapy) is a pseudoscientific child mental health intervention intended to treat attachment disorders. It is found primarily in the United States, and much of it is centered in about a dozen clinics in Evergreen, Colorado, where Foster Cline, one of the founders, established his clinic in the 1970s.'
        },{
            name: 'Auriculotherapy',
            parent: 'T',
            value: 16,
            text: 'Auriculotherapy (also auricular therapy, ear acupuncture, and auriculoacupuncture) is a form of alternative medicine based on the idea that the ear is a micro system, which reflects the entire body, represented on the auricle, the outer portion of the ear. Conditions affecting the physical, mental or emotional health of the patient are assumed to be treatable by stimulation of the surface of the ear exclusively. Similar mappings are used in many areas of the body, including the practices of reflexology and iridology. These mappings are not based on or supported by any medical or scientific evidence, and are therefore considered to be pseudoscience.'
        },{
            name: 'Autogenic training',
            parent: 'O',
            value: 17,
            text: 'Autogenic training is a desensitization-relaxation technique developed by the German psychiatrist Johannes Heinrich Schultz by which a psychophysiologically determined relaxation response is obtained. The technique was first published in 1932. Studying the self-reports of people immersed in a hypnotic state, J.H. Schultz noted that physiological changes are accompanied by certain feelings. Abb Faria and Ãmile CouÃ are the forerunners of Schultz. The technique involves repetitions of a set of visualisations that induce a state of relaxation and is based on passive concentration of bodily perceptions (e.g., heaviness and warmth of arms, legs), which are facilitated by self-suggestions. The technique is used to alleviate many stress-induced psychosomatic disorders.'
        },{
            name: 'Autosuggestion',
            parent: 'O',
            value: 18,
            text: 'Autosuggestion is a psychological technique related to the placebo effect, developed by apothecary Ã‰mile CouÃ© at the beginning of the 20th century. It is a form of self-induced suggestion in which individuals guide their own thoughts, feelings, or behavior. The technique is often used in self-hypnosis.'
        },{
            name: 'Ayurveda',
            parent: 'O',
            value: 19,
            text: 'an alternative medicine system with historical roots in the Indian subcontinent. The theory and practice of Ayurveda is pseudoscientific. The Indian Medical Association (IMA) characterises the practice of modern medicine by Ayurvedic practitioners as quackery. Ayurveda is heavily practiced in India and Nepal, where around 80% of the population report using it'
        },{
            name: 'Bach flower remedies',
            parent: 'N',
            value: 20,
            text: 'Bach flower remedies (BFRs) are solutions of brandy and water the water containing extreme dilutions of flower material developed by Edward Bach, an English homeopath, in the 1930s. Bach claimed that the dew found on flower petals retains the supposed healing properties of that plant. Systematic reviews of clinical trials of Bach flower solutions have found no efficacy beyond a placebo effect'
        },{
            name: 'Balneotherapy',
            parent: 'T',
            value: 21,
            text: 'Balneotherapy (Latin: balneum ""bath"") is a method of treating diseases by bathing, a traditional medicine technique usually practiced at spas. While it is considered distinct from hydrotherapy, there are some overlaps in practice and in underlying principles. Balneotherapy may involve hot or cold water, massage through moving water, relaxation, or stimulation. Many mineral waters at spas are rich in particular minerals such as silica, sulfur, selenium, and radium. Medicinal clays are also widely used, a practice known as fangotherapy.'
        },{
            name: 'Bates method',
            parent: 'T',
            value: 22,
            text: 'The Bates method is an ineffective and potentially dangerous alternative therapy aimed at improving eyesight. Eye-care physician William Horatio Bates (1860-1931) attributed nearly all sight problems to habitual ""strain"" of the eyes, and thus felt that relieving such ""strain"" would cure the problems.'
        },{
            name: 'Bibliotherapy',
            parent: 'T',
            value: 23,
            text: 'Bibliotherapy (also referred to as  ""book therapy"" poetry therapy or therapeutic storytelling) is a creative arts therapies modality that involves storytelling or the reading of specific texts with the purpose of healing. It uses an individuals relationship to the content of books and poetry and other written words as therapy. Bibliotherapy is often combined with writing therapy. It has been shown to be effective in the treatment of depression. A 3 year follow up study has suggested that the results are long-lasting.'
        },{
            name: 'Energy medicine',
            parent: 'O',
            value: 24,
            text: 'Energy medicine is a branch of alternative medicine based on a pseudo-scientific belief that healers can channel healing energy into a patient and effect positive results. Practitioners use a number of names including various synonyms for medicine (e.,g., energy healing) and sometimes use the word vibrational instead of or in concert with energy. In no case is any empirically measurable energy involved: the term refers instead to so-called subtle energy.'
        },{
            name: 'Blood irradiation therapy',
            parent: 'T',
            value: 25,
            text:'"Blood irradiation therapy is an alternative medical procedure in which the blood is exposed to low level light (often laser light) for therapeutic reasons. The practice was originally developed in the United States, but most recent research on it has been conducted in Germany (by UV lamps) and in Russia (in all variants). Low-level laser therapy has been tested for a wide range of conditions, but rigorous double-blinded studies have not yet been performed. Furthermore, it has been claimed that ultraviolet irradiation of blood kills bacteria by DNA damage and also activation of the immune system. Blood irradiation therapy is highly controversial, and has fallen from mainstream use since its heyday in the 1940s and 1950s.'
        },{
            name: 'Bodywork',
            parent: 'O',
            value: 26,
            text: 'In alternative medicine, bodywork is any therapeutic or personal development technique that involves working with the human body in a form involving manipulative therapy, breath work, or energy medicine. Bodywork techniques also aim to assess or improve posture, promote awareness of the ""bodymind connection"" which is an approach that sees the human body and mind as a single integrated unit, or to manipulate the electromagnetic field alleged to surround the human body and affect health.'
        },{
            name: 'Chelation therapy',
            parent: 'T',
            value: 27,
            text: 'Chelation therapy is a medical procedure that involves the administration of chelating agents to remove heavy metals from the body. Chelation therapy has a long history of use in clinical toxicology and remains in use for some very specific medical treatments, although it is administered under very careful medical supervision due to various inherent risks.'
        },{
            name: 'Chinese food therapy',
            parent: 'T',
            value: 28,
            text: 'Chinese food therapy also called nutrition therapy and dietary therapy) is a mode of dieting rooted in Chinese beliefs concerning the effects of food on the human organism, and centered on concepts such as eating in moderation. Its basic precepts are a mix of Taoist Wuxing theory and concepts drawn from the modern representation of traditional Chinese medicine.'
        },{
            name: 'Chinese herbology',
            parent: 'N',
            value: 29,
            text: 'Chinese herbology is the theory of traditional Chinese herbal therapy, which accounts for the majority of treatments in traditional Chinese medicine (TCM). A Nature editorial described TCM as ""fraught with pseudoscience"", and said that the most obvious reason why it has not delivered many cures is that the majority of its treatments have no logical mechanism of action.'
        },{
            name: 'Chinese martial arts',
            parent: 'O',
            value: 30,
            text: 'Chinese martial arts, often named under the umbrella terms kung fu (/ËˆkÊŠÅ‹ ËˆfuË/; Chinese: åŠŸå¤«; pinyin: gÅngfu; Cantonese Yale: gÅ«ng fÅ«), kuoshu (åœ‹è¡“; guÃ³shÃ¹) or wushu (æ­¦è¡“; wÇ”shÃ¹), are several hundred fighting styles that have developed over the centuries in China. These fighting styles are often classified according to common traits, identified as ""families"" of martial arts. Examples of such traits include Shaolinquan  (å°‘æž—æ‹³) physical exercises involving Five Animals (äº”å½¢) mimicry or training methods inspired by Old Chinese philosophies, religions and legends. Styles that focus on qi manipulation are called internal (å†…å®¶æ‹³; nÃ¨ijiÄquÃ¡n), while others that concentrate on improving muscle and cardiovascular fitness are called external (å¤–å®¶æ‹³; wÃ ijiÄquÃ¡n). Geographical association, as in northern (åŒ—æ‹³; bÄ›iquÃ¡n) and southern (å—æ‹³; nÃ¡nquÃ¡n), is another popular classification method.'
        }, {
            name: 'Traditional Chinese medicine',
            parent: 'N',
            value: 31,
            text: 'Traditional Chinese medicine (TCM) is a branch of traditional medicine in China. It has been described as ""fraught with pseudoscience"", and the majority of its treatments as having no logical mechanism of action.'
        }, {
            name: 'Pulse diagnosis',
            parent: 'N',
            value: 32,
            text: 'Pulse diagnosis is a diagnostic technique used in Ayurveda, traditional Chinese medicine, traditional Mongolian medicine, Siddha medicine, traditional Tibetan medicine, and Unani. Although it once showed many positive results, it no longer has scientific legitimacy, but research continues and is ill-defined in some derived text, and is subjective.'
        },{
            name: 'Chiropractic',
            parent: 'O',
            value: 33,
            text: 'Chiropractic is a pseudoscientific alternative medicine that is concerned with the diagnosis and treatment of mechanical disorders of the musculoskeletal system, especially the spine. Chiropractors, especially those in the fields early history, have proposed that such disorders affect general health via the nervous system. The main chiropractic treatment technique involves manual therapy, especially manipulation of the spine, other joints, and soft tissues, but may also include exercises and health and lifestyle counseling. Chiropractors are not physicians or medical doctors.'
        },{
            name: 'Chromotherapy',
            parent: 'T',
            value: 34,
            text: 'Chromotherapy, sometimes called color therapy, colorology or cromatherapy, is an alternative medicine method that is considered pseudoscience. Chromotherapists claim to be able to use light in the form of color to balance ""energy"" lacking from a persons body, whether it be on physical, emotional, spiritual, or mental levels.'
        },{
            name: 'Colorpuncture',
            parent: 'T',
            value: 35,
            text: 'Colorpuncture, cromopuncture, or color light acupuncture, is a pseudoscientific alternative medicine practice based on ""mystical or supernatural"" beliefs which asserts that colored lights can be used to stimulate acupuncture points to promote healing and better health. It is a form of chromotherapy or color therapy. There is no known anatomical or histological basis for the existence of acupuncture points or meridians, and there is no scientific support for the efficacy of colorpuncture.'
        },{
            name: 'Cinema therapy',
            parent: 'T',
            value: 36,
            text: 'Cinema therapy or movie therapy is a form of expressive therapy - like art, music and dance therapy - for medical and mental health issues. It is also used as a form of self-help. Cinema therapy was created and popularized by Dr. Gary Solomon, the first to write on using movies as therapy. The movement started to catch up again in 2019 with the featured documentary ""Calypsonians"" by director Anghelo Taylor, unlike the creation of Dr. Gary Solomon, Anghelo Taylor wrote the CinemaTherapy Manifesto, that starts with one simple principle ""In order for cinema therapy truly exist the filmmaker must have an internal search, question or problem to solve inside himself but that relates with the rest of humanity or with specific community. Once the filmmaker and his crew engage in the process of filmmaking, they start healing by the revelation and situations that happen along the process of making a film. In the end, the result of that process will be a medicine for all the viewers as human beings. But everything starts with the deep intention that the filmmaker has when making the film'
        },{
            name: 'Gua sha',
            parent: 'O',
            value: 37,
            text: 'ua sha,"Gua sha (Chinese: åˆ®ç—§) or kerokan, is part of traditional Chinese medicine (TCM) in which a tool is used to scrape peoples skin in order to produce light petechiae. Practitioners believe that gua sha releases unhealthy bodily matter from blood stasis within sore, tired, stiff or injured muscle areas to stimulate new oxygenated blood flow to the areas, thus promoting metabolic cell repair, regeneration, healing and recovery.'
        },{
            name: 'Medical uses of silver',
            parent: 'O',
            value: 38,
            text: 'The medical uses of silver include its use in wound dressings, creams, and as an antibiotic coating on medical devices. Wound dressings containing silver sulfadiazine or silver nanomaterials may be used to treat external infections. The limited evidence available shows that silver coatings on endotracheal breathing tubes may reduce the incidence of ventilator-associated pneumonia. There is tentative evidence that using silver-alloy indwelling catheters for short-term catheterizing will reduce the risk of catheter-acquired urinary tract infections.'
        },{
            name: 'Colon cleansing',
            parent: 'O',
            value: 39,
            text: 'Colon cleansing, also known as colon therapy, or colon hydrotherapy, or a colonic, or colonic irrigation encompasses a number of alternative medical therapies claimed to remove unspecified toxins from the colon and intestinal tract by removing supposed accumulations of feces. Colon cleansing in this context should not be confused with an enema which introduces fluid into the colon, often under mainstream medical supervision, for a limited number of purposes including severe constipation and medical imaging.'
        },{
            name: 'Enema',
            parent: 'O',
            value: 40,
            text: 'An enema, also known as a clyster, is an injection of fluid into the lower bowel by way of the rectum. Also, the word enema can refer to the liquid so injected, as well as to a device for administering such an injection.'
        },{
            name: 'Craniosacral therapy',
            parent: 'T',
            value: 41,
            text: 'Craniosacral therapy (CST)  is a form of bodywork or alternative therapy that uses gentle touch to palpate the synarthrodial joints of the cranium. It is based on fundamental misconceptions about the physiology of the human skull and is promoted as a cure-all for a variety of health conditions.'
        },{
            name: 'Creative visualization',
            parent: 'O',
            value: 42,
            text: 'Creative visualization is the cognitive process of purposefully generating visual mental imagery, with eyes open or closed, simulating or recreating visual perception, in order to maintain, inspect, and transform those images, consequently modifying their associated emotions or feelings, with intent to experience a subsequent beneficial physiological, psychological, or social effect, such as expediting the healing of wounds to the body, minimizing physical pain, alleviating psychological pain including anxiety, sadness, and low mood, improving self-esteem or self-confidence, and enhancing the capacity to cope when interacting with others.'
        },{
            name: 'Crystal healing',
            parent: 'O',
            value: 43,
            text: 'Crystal healing is a pseudoscientific alternative-medicine practice that uses semiprecious stones and crystals such as quartz, agate, amethyst or opals. Adherents of the practice claim that these have healing powers, but there is no scientific basis for this claim. Practitioners of crystal healing believe they can boost low energy, prevent bad energy, release blocked energy, and transform a bodys aura.'
        },{
            name: 'Cupping therapy',
            parent: 'T',
            value: 44,
            text: 'Cupping therapy is a form of alternative medicine in which a local suction is created on the skin with the application of heated cups. Its practice mainly occurs in Asia but also in Eastern Europe, the Middle East, and Latin America. Cupping has been characterized as a  pseudoscience and its practice as quackery.'
        },{
            name: 'Dance therapy',
            parent: 'T',
            value: 45,
            text: 'Dance/movement therapy (DMT) in USA/ Australia or dance movement psychotherapy (DMP) in the UK is the psychotherapeutic use of movement and dance to support intellectual, emotional, and motor functions of the body. As a modality of the creative arts therapies, DMT looks at the correlation between movement and emotion.'
        },{
            name: 'Detoxification',
            parent: 'O',
            value: 46,
            text: '"Detoxification (often shortened to detox and sometimes called body cleansing) is a type of alternative-medicine treatment which aims to rid the body of unspecified ""toxins""Â â€“ substances that proponents claim have accumulated in the body and have undesirable short-term or long-term effects on individual health. Activities commonly associated with detoxification include dieting, fasting, consuming exclusively or avoiding specific foods (such as fats, carbohydrates, fruits, vegetables, juices, herbs, or water), colon cleansing, chelation therapy, and the removal of dental fillings containing amalgam.'
        },{
            name: 'Dietary supplement',
            parent: 'O',
            value: 47,
            text: 'A dietary supplement is a manufactured product intended to supplement ones diet by taking a pill, capsule, tablet, powder or liquid. A supplement can provide nutrients either extracted from food sources or that are synthetic in order to increase the quantity of their consumption. The class of nutrient compounds includes vitamins, minerals, fiber, fatty acids and amino acids. Dietary supplements can also contain substances that have not been confirmed as being essential to life, but are marketed as having a beneficial biological effect, such as plant pigments or polyphenols. Animals can also be a source of supplement ingredients, such as collagen from chickens or fish for example. These are also sold individually and in combination, and may be combined with nutrient ingredients. In the United States and Canada, dietary supplements are considered a subset of foods, and are regulated accordingly. The European Commission has also established harmonized rules to help insure that food supplements are safe and properly labeled.'
        },{
            name: 'Ear candling',
            parent: 'O',
            value: 48,
            text: 'Ear candling, also called ear coning or thermal-auricular therapy, is a pseudoscientific alternative medicine practice claiming to improve general health and well-being by lighting one end of a hollow candle and placing the other end in the ear canal. Medical research has shown that the practice is both dangerous and ineffective and does not functionally remove earwax or toxicants, despite product design contributing to that impression.'
        },{
            name: 'Radionics',
            parent: 'O',
            value: 49,
            text: ' a form of alternative medicine that claims that disease can be diagnosed and treated by applying electromagnetic radiation (EMR), such as radio waves, to the body from an electrically powered device.  It is similar to magnet therapy, which also applies EMR to the body but uses a magnet that generates a static electromagnetic field.'
        },{
            name: 'Electrohomeopathy',
            parent: 'N',
            value: 50,
            text: 'Electrohomoeopathy (or Mattei cancer cure) is a derivative of homeopathy invented in the 19th century by Count Cesare Mattei. The name is derived from a combination of electro (referring to an electric bio-energy content supposedly extracted from plants and of therapeutic value, rather than electricity in its conventional sense) and homeopathy (referring to an alternative medicinal philosophy developed by Samuel Hahnemann in the 18th century). Electrohomeopathy has been defined as the combination of electrical devices and homeopathy.'
        }, {
            name: 'Equine-assisted therapy',
            parent: 'N',
            value: 51,
            text: 'Equine-assisted therapy (EAT) encompasses a range of treatments that involve activities with horses and other equines to promote human physical and mental health. The use of EAT has roots in antiquity, and EAT applies to physical health issues in modern form dates to the 1960s.  Modern use of horses for mental health treatment dates to the 1990s.  Systematic review of studies of EAT as applied to physical health date only to about 2007, and a lack of common terminology and standardization has caused problems with meta-analysis. Due to a lack of high-quality studies assessing the efficacy of equine-assisted therapies for mental health treatment, concerns have been raised that these therapies should not replace or divert resources from other evidence-based mental health therapies.'
        }]
    }],
    title: {
        text: 'General Healing Methods'
    }
});
