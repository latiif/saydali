// from 08:00 PM to 12:00 AM
const firstShift = {
    "2023-11-01": ["صيدلية علاء طكو"],
    "2023-11-02": ["صيدلية العدنان", "صيدلية إيناس الحسين", "صيدلية الجامعة", "صيدلية نبض", "صيدلية نعمت عبد الواحد", "صيدلية المحمدي"],
    "2023-11-03": ["صيدلية منال أسعد", "صيدلية الولاء", "صيدلية اسلام سفلو", "صيدلية الزير", "صيدلية النحلة", "صيدلية آية الرحمن"],
    "2023-11-04": ["صيدلية أبو نقرة", "صيدلية مريم النعسان", "صيدلية الصناع"],
    "2023-11-05": ["صيدلية ولاء سيد يوسف", "صيدلية الاعتماد", "صيدلية النبهان", "صيدلية عبدالله", "صيدلية الجلاء", "صيدلية السعد"],
    "2023-11-06": ["صيدلية مصطفى حبوش", "صيدلية القصاص", "صيدلية عامر فاخورجي", "صيدلية البديوي"],
    "2023-11-07": ["صيدلية حسناء دويدري", "صيدلية البرج", "صيدلية أنس حبوش", "صيدلية المتنبي"],
    "2023-11-08": ["صيدلية يحيى نعمة", "صيدلية هبة غريب (محمد حاج قاسم سابقا)", "صيدلية ضياء كشايا", "صيدلية نقابة الأطباء", "صيدلية فراس غجر", "صيدلية العلا"],
    "2023-11-09": ["صيدلية اليمان", "صيدلية النورس", "صيدلية سارة شحادة", "صيدلية محمد حاج أسعد", "صيدلية العيسى"],
    "2023-11-10": ["صيدلية باسل غفير", "صيدلية الغدير", "صيدلية الصفا", "صيدلية مروة ياسين", "صيدلية نذير عتقي"],
    "2023-11-11": ["صيدلية الرازي", "الصيدلية المركزية", "صيدلية الحياة", "صيدلية العبيد"],
    "2023-11-12": ["صيدلية علاءالدين", "صيدلية الوجيه", "صيدلية علاء طكو", "صيدلية العاصي"],
    "2023-11-13": ["صيدلية رؤى قريطبي", "صيدلية نور الشلح", "صيدلية نهى العلوش", "صيدلية خالد اليماني"],
    "2023-11-14": ["صيدلية علي الشيخ أحمد", "صيدلية الجامعي", "صيدلية هنادي قوصرة", "صيدلية ياسر بذارة", "صيدلية الفرقان"],
    "2023-11-15": ["صيدلية القصاص", "صيدلية العالمية", "صيدلية المجمع الطبي", "صيدلية الشفاء"],
    "2023-11-16": ["صيدلية براء", "صيدلية عدنان هشوم", "صيدلية الأمين", "صيدلية طارق", "صيدلية الخلف", "صيدلية روضة كنش"],
    "2023-11-17": ["صيدلية الساعة", "صيدلية راما(المارتيني)", "صيدلية يزن يونس ذهب", "صيدلية الخنساء"],
    "2023-11-18": ["صيدلية عبدو صناع", "صيدلية البرهوم", "صيدلية الايمان", "صيدلية عز الدين"],
    "2023-11-19": ["صيدلية القصور", "صيدلية مرشان", "صيدلية الحكمة", "صيدلية لاما السعيد", "صيدلية الغيث", "صيدلية المعرة"],
    "2023-11-20": ["صيدلية جورية", "صيدلية نور سليمان عوض", "صيدلية محمد(عبد الجواد سابقا)", "صيدلية آلاء النمر"],
    "2023-11-21": ["صيدلية مريم السراقبي", "صيدلية هاجر السيد علي", "صيدلية سوسن السعيد", "صيدليةعبدالناصر", "صيدلية بتول الأحمد"],
    "2023-11-22": ["صيدلية ضحى", "صيدلية نسرين عيان", "صيدلية الوطني"],
    "2023-11-23": ["صيدلية رغد دحنون", "صيدلية العيادات", "صيدلية نور حمادة", "صيدلية فحيل", "صيدلية الأسرار", "صيدلية خلود شحود"],
    "2023-11-24": ["صيدلية بيت الدواء", "صيدلية أسماء", "صيدلية فاطمة راجي", "صيدلية عمر حبوش"],
    "2023-11-25": ["صيدلية لمى مرديخي", "صيدلية ريناد", "صيدلية بلال الزير(اسلام معدل سابقا)", "صيدلية نور الحياة", "صيدلية أحمد جنكي", "صيدلية التوليب"],
    "2023-11-26": ["صيدلية العدنان", "صيدلية إيناس الحسين", "صيدلية الجامعة", "صيدلية نبض", "صيدلية نعمت عبد الواحد", "صيدلية المحمدي"],
    "2023-11-27": ["صيدلية منال أسعد", "صيدلية الولاء", "صيدلية اسلام سفلو", "صيدلية الزير", "صيدلية النحلة", "صيدلية آية الرحمن"],
    "2023-11-28": ["صيدلية أبو نقرة", "صيدلية مريم النعسان", "صيدلية الصناع"],
    "2023-11-29": ["صيدلية ولاء سيد يوسف", "صيدلية الاعتماد", "صيدلية النبهان", "صيدلية عبدالله", "صيدلية الجلاء", "صيدلية السعد"],
    "2023-11-30": ["صيدلية مصطفى حبوش", "صيدلية محمد قصاص", "صيدلية عامر فاخورجي", "صيدلية البديوي"],

};

// from 12:00 AM to 09:00 AM
const secondShift = {
    "2023-11-01": ["صيدلية بتول الأحمد"],
    "2023-11-02": ["صيدلية المتنبي"],
    "2023-11-03": ["صيدلية نور الحياة"],
    "2023-11-04": ["صيدلية البرهوم"],
    "2023-11-05": ["صيدلية محمد(عبد الجواد سابقا)"],
    "2023-11-06": ["صيدلية المحمدي"],
    "2023-11-07": ["صيدلية مرشان"],
    "2023-11-08": ["صيدلية الصفا"],
    "2023-11-09": ["صيدلية الوطني"],
    "2023-11-10": ["صيدلية علي الشيخ أحمد"],
    "2023-11-11": ["صيدلية مروة ياسين"],
    "2023-11-12": ["صيدلية أنس حبوش"],
    "2023-11-13": ["صيدلية بتول الأحمد"],
    "2023-11-14": ["صيدلية المتنبي"],
    "2023-11-15": ["صيدلية نور الحياة"],
    "2023-11-16": ["صيدلية البرهوم"],
    "2023-11-17": ["صيدلية محمد(عبد الجواد سابقا)"],
    "2023-11-18": ["صيدلية المحمدي"],
    "2023-11-19": ["صيدلية مرشان"],
    "2023-11-20": ["صيدلية الوطني"],
    "2023-11-21": ["صيدلية مروة ياسين"],
    "2023-11-22": ["صيدلية علي الشيخ أحمد"],
    "2023-11-23": ["صيدلية الصفا"],
    "2023-11-24": ["صيدلية أنس حبوش"],
    "2023-11-25": ["صيدلية بتول الأحمد"],
    "2023-11-26": ["صيدلية المتنبي"],
    "2023-11-27": ["صيدلية نور الحياة"],
    "2023-11-28": ["صيدلية البرهوم"],
    "2023-11-29": ["صيدلية محمد(عبد الجواد سابقا)"],
    "2023-11-30": ["صيدلية المحمدي"],



};

//  lunch-break shift
const thirdShift = {
    "2023-11-01": ["صيدلية سوسن السعيد"],
    "2023-11-02": ["صيدلية سوسن السعيد"],
    "2023-11-03": ["صيدلية رغد دحنون", "صيدلية حسناء دويدري", "صيدلية الساعة", "صيدلية قتيبة", "صيدلية نور الشلح", "صيدلية خلود شحود", "صيدلية سوسن السعيد", "صيدلية البرج", "صيدلية اليمان", "صيدلية عبدالله", "صيدلية روضة كنش", "صيدلية السعد", "صيدلية نهى علوش", "صيدلية بيت الدواء", "صيدلية محمد قصاص", "صيدلية العبيد", "صيدلية يزن يونس ذهب", "صيدلية آية الرحمن", "صيدلية القصور", "صيدلية لمى مرديخي", "صيدلية نور حمادة", "صيدلية أنس حبوش", "صيدلية يحيى نعمة", "صيدلية فراس غجر", "صيدلية علاءالدين", "صيدلية عز الدين", "صيدلية فحيل", "صيدلية ولاء سيد يوسف", "صيدلية فاطمة راجي", "صيدلية العيسى", "صيدلية نبض"],
    "2023-11-04": ["صيدلية سوسن السعيد"],
    "2023-11-05": ["صيدلية سوسن السعيد"],
    "2023-11-06": ["صيدلية سوسن السعيد"],
    "2023-11-07": ["صيدلية سوسن السعيد"],
    "2023-11-08": ["صيدلية سوسن السعيد"],
    "2023-11-09": ["صيدلية سوسن السعيد"],
    "2023-11-10": ["صيدلية راما(المارتيني)", "صيدلية براء", "صيدلية الوجيه", "صيدلية إيناس الحسين", "صيدلية ضياء كشايا", "صيدلية مصطفى حبوش", "صيدلية نذير عتقي", "صيدلية النورس", "صيدلية النحلة", "صيدلية الصفا", "صيدلية الأسرار", "صيدلية هنادي قوصرة", "صيدلية العالمية", "الصيدلية المركزية", "صيدلية سارة شحادة", "صيدلية عبدو صناع", "صيدلية الخنساء", "صيدلية بلال الزير(اسلام معدل سابقا)", "صيدلية علي الشيخ أحمد", "صيدلية الأمين", "صيدلية العاصي", "صيدلية العلا", "صيدلية باسل غفير", "صيدلية محمد حاج أسعد", "صيدلية آلاء النمر"],
    "2023-11-11": ["صيدلية سوسن السعيد"],
    "2023-11-12": ["صيدلية سوسن السعيد"],
    "2023-11-13": ["صيدلية سوسن السعيد"],
    "2023-11-14": ["صيدلية سوسن السعيد"],
    "2023-11-15": ["صيدلية سوسن السعيد"],
    "2023-11-16": ["صيدلية سوسن السعيد"],
    "2023-11-17": ["صيدلية الصناع", "صيدلية منال الأسعد", "صيدلية فرح دبل (الهبطة)", "صيدلية محمد(عبد الجواد سابقا)", "صيدلية ريناد", "صيدلية التوليب", "صيدلية القصاص", "صيدلية البديوي", "صيدلية نور سليمان عوض", "صيدلية أبو نقرة", "صيدلية الغيث", "صيدلية الحكمة", "صيدلية الجامعة", "صيدلية اليماني", "صيدلية بتول الأحمد", "صيدلية المعرة", "صيدلية لاما السعيد", "صيدلية العيادات", "صيدلية أسماء", "صيدلية نعمت عبد الواحد", "صيدلية نسرين عيان", "صيدلية الغدير", "صيدلية جورية", "صيدلية العدنان", "صيدلية عمر حبوش", "صيدلية نقابة الأطباء", "صيدلية المحمدي", "صيدلية مرشان"],
    "2023-11-18": ["صيدلية سوسن السعيد"],
    "2023-11-19": ["صيدلية سوسن السعيد"],
    "2023-11-20": ["صيدلية سوسن السعيد"],
    "2023-11-21": ["صيدلية سوسن السعيد"],
    "2023-11-22": ["صيدلية سوسن السعيد"],
    "2023-11-23": ["صيدلية سوسن السعيد"],
    "2023-11-24": ["صيدلية طارق ترك", "صيدلية هاجر السيد علي", "صيدلية مريم النعسان", "صيدلية الايمان", "صيدلية رؤى قريطبي", "صيدلية الشفاء", "صيدلية المتنبي", "صيدلية الولاء", "صيدلية نور الحياة", "صيدلية الحياة", "صيدلية الاعتماد", "صيدلية اسلام سفلو", "صيدلية عدنان هشوم", "صيدلية الخلف", "صيدلية هبة غريب (محمد حاج قاسم سابقا)", "صيدلية الوطني", "صيدليةعبدالناصر", "صيدلية مريم السراقبي", "صيدلية برهوم", "صيدلية علاء طكو", "صيدلية النبهان", "صيدلية أحمد جنكي", "صيدلية مروة ياسين", "صيدلية المجمع الطبي", "صيدلية الرازي", "صيدلية عامر فاخورجي", "صيدلية الزير", "صيدلية الجلاء"],
    "2023-11-25": ["صيدلية سوسن السعيد"],
    "2023-11-26": ["صيدلية سوسن السعيد"],
    "2023-11-27": ["صيدلية سوسن السعيد"],
    "2023-11-28": ["صيدلية سوسن السعيد"],
    "2023-11-29": ["صيدلية سوسن السعيد"],
    "2023-11-30": ["صيدلية سوسن السعيد"],

};


const pharmacyAddress = {

    "صيدلية رنا": "موقع الصيدلية",
    "صيدلية اشرف": "موقع الصيدلية",
    "صيدلية القصاص": "موقع الصيدلية",
    "صيدلية عمر حبوش": "موقع الصيدلية",
    "صيدلية بيت الدواء": "موقع الصيدلية",
    "صيدلية نسرين عيان": "موقع الصيدلية",
    "صيدلية الفرقان": "موقع الصيدلية",
    "صيدلية العمالية": "موقع الصيدلية",
    "صيدلية خالد اليماني": "موقع الصيدلية",
    "صيدلية اليماني": "موقع الصيدلية",
    "صيدلية الزير": "موقع الصيدلية",
    "صيدلية حنان": "موقع الصيدلية",
    "صيدلية العالمية": "موقع الصيدلية",
    "الصيدلية المركزية": "موقع الصيدلية",
    "صيدلية البلسم": "موقع الصيدلية",
    "صيدلية ضياء كشايا": "موقع الصيدلية",
    "صيدلية الرازي": "موقع الصيدلية",
    "صيدلية الحسين": "موقع الصيدلية",
    "صيدلية علاء الدين": "موقع الصيدلية",
    "صيدلية ابن الهيثم": "موقع الصيدلية",
    "صيدلية الأمين": "موقع الصيدلية",
    "صيدلية الحكمة": "موقع الصيدلية",
    "صيدلية الجمال": "موقع الصيدلية",
    "صيدلية آية الرحمن": "موقع الصيدلية",
    "صيدلية رامي قصير ": "موقع الصيدلية",
    "صيدلية معاذ": "موقع الصيدلية",
    "صيدلية هبة غريب (محمد حاج قاسم سابقا)": "موقع الصيدلية",
    "صيدلية المحبة": "موقع الصيدلية",
    "صيدلية ابراهيم دالاتي": "موقع الصيدلية",
    "صيدلية سميع": "موقع الصيدلية",
    "صيدلية راما(المارتيني)": "موقع الصيدلية",
    "صيدلية علاء سيد عيسى ": "موقع الصيدلية",
    "صيدلية آية": "موقع الصيدلية",
    "صيدلية الوجيه": "موقع الصيدلية",
    "صيدلية ادلب الخضراء": "موقع الصيدلية",
    "صيدلية رحابي": "موقع الصيدلية",
    "صيدلية الكمال": "موقع الصيدلية",
    "صيدلية عامر فاخورجي": "موقع الصيدلية",
    "صيدلية بيان صابوني": "موقع الصيدلية",
    "صيدلية بكري علوش": "موقع الصيدلية",
    "صيدلية بلال الزير(اسلام معدل سابقا)": "موقع الصيدلية",
    "صيدلية الياسمين": "موقع الصيدلية",
    "صيدلية اربيع": "موقع الصيدلية",
    "صيدلية غجر": "موقع الصيدلية",
    "صيدلية محمد قطيع": "موقع الصيدلية",
    "صيدلية الشفاء": "موقع الصيدلية",
    "صيدلية سامر": "موقع الصيدلية",
    "صيدلية قتيبة": "موقع الصيدلية",
    "صيدلية الحجاز": "موقع الصيدلية",
    "صيدلية بلسم": "موقع الصيدلية",
    "صيدلية باسل مجد الدين غفير": "موقع الصيدلية",
    "صيدلية النحلة": "موقع الصيدلية",
    "صيدلية النبهان": "موقع الصيدلية",
    "صيدلية سوسن السعيد": "موقع الصيدلية",
    "صيدلية التوليب": "موقع الصيدلية",
    "صيدلية باسل غفير": "موقع الصيدلية",
    "صيدلية مصطفى حبوش": "موقع الصيدلية",
    "صيدلية المحراب": "موقع الصيدلية",
    "صيدلية الحسين ": "موقع الصيدلية",
    "صيدلية خلف": "موقع الصيدلية",
    "صيدلية الوجيه": "موقع الصيدلية",
    "صيدلية علاء السيد عيسى": "موقع الصيدلية",
    "صيدلية محمد قطيع": "موقع الصيدلية",
    "صيدلية رؤى قريطبي": "موقع الصيدلية",
    "صيدلية نذير عتقي": "موقع الصيدلية",
    "صيدلية النورس": "موقع الصيدلية",
    "صيدلية الصفا": "موقع الصيدلية",
    "صيدلية الأسرار": "موقع الصيدلية",
    "صيدلية الجدعان": "موقع الصيدلية",
    "صيدلية سارة شحادة": "موقع الصيدلية",
    "صيدلية عبدو صناع": "موقع الصيدلية",
    "صيدلية الخنساء": "موقع الصيدلية",
    "صيدلية علي الشيخ أحمد": "موقع الصيدلية",
    "صيدلية العاصي": "موقع الصيدلية",
    "صيدلية آلاء النمر": "موقع الصيدلية",
    "صيدلية نور سليمان عوض": "موقع الصيدلية",
    "صيدلية براء": "موقع الصيدلية",
    "صيدلية البديوي": "موقع الصيدلية",
    "صيدلية ياسر بذارة": "موقع الصيدلية",
    "صيدلية أبو نقرة": "موقع الصيدلية",
    "صيدلية الغيث": "موقع الصيدلية",
    "صيدلية الجامعة": "موقع الصيدلية",
    "صيدلية بتول العمر": "موقع الصيدلية",
    "صيدلية المعرة": "موقع الصيدلية",
    "صيدلية لاما السعيد": "موقع الصيدلية",
    "صيدلية العيادات": "موقع الصيدلية",
    "صيدلية أسماء": "موقع الصيدلية",
    "صيدلية نعمت عبد الواحد": "موقع الصيدلية",
    "صيدلية الغدير": "موقع الصيدلية",
    "صيدلية جورية": "موقع الصيدلية",
    "صيدلية العدنان": "موقع الصيدلية",
    "صيدلية ضحى": "موقع الصيدلية",
    "صيدلية نقابة الأطباء": "موقع الصيدلية",
    "صيدلية المحمدي": "موقع الصيدلية",
    "صيدلية الصناع": "موقع الصيدلية",
    "صيدلية منال الأسعد": "موقع الصيدلية",
    "صيدلية منال أسعد": "موقع الصيدلية",
    "صيدلية حسناء دويدري": "موقع الصيدلية",
    "صيدلية محمد(عبد الجواد سابقا)": "موقع الصيدلية",
    "صيدلية العيسى": "موقع الصيدلية",
    "صيدلية الولاء": "موقع الصيدلية",
    "صيدلية رغد دحنون": "موقع الصيدلية",
    "صيدلية الاعتماد": "موقع الصيدلية",
    "صيدلية اسلام سفلو": "موقع الصيدلية",
    "صيدلية عدنان هشوم": "موقع الصيدلية",
    "صيدلية الخلف": "موقع الصيدلية",
    "صيدلية الوطني": "موقع الصيدلية",
    "صيدليةعبدالناصر": "موقع الصيدلية",
    "صيدلية مرشان": "موقع الصيدلية",
    "صيدلية مريم السراقبي": "موقع الصيدلية",
    "صيدلية برهوم": "موقع الصيدلية",
    "صيدلية البرهوم": "موقع الصيدلية",
    "صيدلية علاء طكو": "موقع الصيدلية",
    "صيدلية النبهان": "موقع الصيدلية",
    "صيدلية أحمد جنكي": "موقع الصيدلية",
    "صيدلية مروة ياسين": "موقع الصيدلية",
    "صيدلية المجمع الطبي": "موقع الصيدلية",
    "صيدلية الزير": "موقع الصيدلية",
    "صيدلية الجلاء": "موقع الصيدلية",
    "صيدلية طارق ترك": "موقع الصيدلية",
    "صيدلية هاجر السيد علي": "موقع الصيدلية",
    "صيدلية مريم النعسان": "موقع الصيدلية",
    "صيدلية الايمان": "موقع الصيدلية",
    "صيدلية خلود شحود": "موقع الصيدلية",
    "صيدلية اسبرين": "موقع الصيدلية",
    "صيدلية إيبلا": "موقع الصيدلية",
    "صيدلية اليمان": "موقع الصيدلية",
    "صيدلية عبدالله": "موقع الصيدلية",
    "صيدلية روضة كنش": "موقع الصيدلية",
    "صيدلية السعد": "موقع الصيدلية",
    "صيدلية نهى العلوش": "موقع الصيدلية",
    "صيدلية نهى علوش": "موقع الصيدلية",
    "صيدلية يزن يونس ذهب": "موقع الصيدلية",
    "صيدلية القصور": "موقع الصيدلية",
    "صيدلية لمى مرديخي": "موقع الصيدلية",
    "صيدلية نور حمادة": "موقع الصيدلية",
    "صيدلية أنس حبوش": "موقع الصيدلية",
    "صيدلية يحيى نعمة": "موقع الصيدلية",
    "صيدلية التلاوي": "موقع الصيدلية",
    "صيدلية فراس غجر": "موقع الصيدلية",
    "صيدلية عز الدين": "موقع الصيدلية",
    "صيدلية فحيل": "موقع الصيدلية",
    "صيدلية ولاء سيد يوسف": "موقع الصيدلية",
    "صيدلية فاطمة راجي": "موقع الصيدلية",
    "صيدلية المشلح": "موقع الصيدلية",
    "صيدلية الجامعي": "موقع الصيدلية",
    "صيدلية محمد حاج أسعد": "موقع الصيدلية",
    "صيدلية إيناس الحسين": "موقع الصيدلية",
    "صيدلية بتول الأحمد": "موقع الصيدلية",
    "صيدلية هنادي قوصرة": "موقع الصيدلية",
    "صيدلية ريناد": "موقع الصيدلية",
    "صيدلية عبدالحميد العدل": "موقع الصيدلية",
    "صيدلية طارق": "موقع الصيدلية",
    "صيدلية نور الحياة": "موقع الصيدلية",
    "صيدلية نور الشلح": "موقع الصيدلية",
    "صيدلية الحياة": "موقع الصيدلية",
    "صيدلية العبيد": "موقع الصيدلية",
    "صيدلية علاءالدين": "موقع الصيدلية",
    "صيدلية نبض": "موقع الصيدلية",
    "صيدلية مها زعيتر": "موقع الصيدلية",
    "صيدلية فرح دبل (الهبطة)": "موقع الصيدلية",
    "صيدلية الحكم": "موقع الصيدلية",
    "صيدلية البرج": "موقع الصيدلية",
    "صيدلية الساعة": "موقع الصيدلية",
    "صيدلية العلا": "موقع الصيدلية",
    "صيدلية محمد قصاص": "موقع الصيدلية",
    "صيدلية المتنبي": "موقع الصيدلية",
    "صيدلية نور حمادة": "موقع الصيدلية",
}

const pharmacyLocation = {
    "صيدلية رنا": "https://goo.gl/maps/Wi6N3Bag89sf6u1J9",
    "صيدلية اشرف": "https://goo.gl/maps/Wi6N3Bag89sf6u1J9",
    "صيدلية القصاص": "https://maps.app.goo.gl/H7qVtSoQ9vGPa5G18",
    "صيدلية عمر حبوش": "https://maps.google.com/?cid=13059863794002922223&entry=gps",
    "صيدلية بيت الدواء": "https://maps.app.goo.gl/UqSLK5txu1cL7d817",
    "صيدلية نسرين عيان": "https://maps.app.goo.gl/87pLuTVtnVw2SvxC8",
    "صيدلية الفرقان": "https://maps.app.goo.gl/jKm5faeEeL4C6L1X9",
    "صيدلية العمالية": "https://maps.app.goo.gl/aS4FnX4GyS79VWvc6",
    "صيدلية خالد اليماني": "https://maps.app.goo.gl/i9FuaWuJcV56x3EMA",
    "صيدلية اليماني": "https://maps.app.goo.gl/i9FuaWuJcV56x3EMA",
    "صيدلية الزير": "https://maps.app.goo.gl/NXrhVUvJh9mKhkMY9",
    "صيدلية حنان": "https://maps.app.goo.gl/6reo56AwS5YyQ1Dr5",
    "صيدلية العالمية": "https://maps.app.goo.gl/aS4FnX4GyS79VWvc6",
    "الصيدلية المركزية": "https://maps.app.goo.gl/aknL8WXbTL2HCJRs9",
    "صيدلية البلسم": "https://maps.app.goo.gl/prwVu8cb5EM2UuGL9",
    "صيدلية ضياء كشايا": "https://maps.app.goo.gl/KMnQXGGJYnjD7pyf7",
    "صيدلية الرازي": "https://maps.app.goo.gl/fxbPDkRsT7f2VzmX7",
    "صيدلية الحسين": "https://maps.app.goo.gl/kcouQhfCE74DiSoW6",
    "صيدلية علاء الدين": "https://maps.app.goo.gl/jkDXA4wfkKqk2Jyd6",
    "صيدلية ابن الهيثم": "https://maps.app.goo.gl/oPWLA7K7BFfGnC1M7",
    "صيدلية الأمين": "https://maps.app.goo.gl/RWHGnm7EAZVhSEzU9",
    "صيدلية الحكمة": "https://maps.app.goo.gl/mDdDZQFDjdwgYRVk9",
    "صيدلية الجمال": "https://maps.app.goo.gl/jsz654yBKtwoeXnL9",
    "صيدلية آية الرحمن": "https://maps.app.goo.gl/NJDNBFhtaegBToBr9",
    "صيدلية رامي قصير ": "https://maps.app.goo.gl/uz5fAmPrj1KUZvDu9",
    "صيدلية معاذ": "https://maps.app.goo.gl/WNifxaHaQFxBApHa9",
    "صيدلية هبة غريب (محمد حاج قاسم سابقا)": "https://maps.app.goo.gl/LubRVVMziCWU5tCh7",
    "صيدلية المحبة": "https://maps.app.goo.gl/VfkHR4pP4AW627t58",
    "صيدلية ابراهيم دالاتي": "https://maps.app.goo.gl/tDNpYLwu9tZok2rn7",
    "صيدلية سميع": "https://maps.app.goo.gl/ucjboZPLH49PeGQc6",
    "صيدلية راما(المارتيني)": "https://maps.app.goo.gl/j5CM5vBberUv1UY66",
    "صيدلية علاء سيد عيسى ": "https://maps.app.goo.gl/yX627Dz1CXXXkkE47",
    "صيدلية آية": "https://maps.app.goo.gl/uyrzJTE5tdXVr7e86",
    "صيدلية الوجيه": "https://maps.app.goo.gl/eUCDAtMNQ8yzAwra9",
    "صيدلية ادلب الخضراء": "https://maps.app.goo.gl/VqpjfdTzXSyXwxUy8",
    "صيدلية رحابي": "https://maps.app.goo.gl/wctm7fqeuJFGXZzF9",
    "صيدلية الكمال": "https://maps.app.goo.gl/Wd63ZxHorUFoQJQi9",
    "صيدلية عامر فاخورجي": "https://maps.app.goo.gl/FLYVT7Bib1kLST8L8",
    "صيدلية بيان صابوني": "https://maps.app.goo.gl/oGqV3QGEq4iz3K2Z8",
    "صيدلية بكري علوش": "https://maps.app.goo.gl/kqGY1dvM3c4BX31x5",
    "صيدلية بلال الزير(اسلام معدل سابقا)": "https://maps.app.goo.gl/fj3EUqkndN1oqpPf9",
    "صيدلية الياسمين": "https://maps.app.goo.gl/PohzK1DyYsJ9mEhX8",
    "صيدلية اربيع": "https://maps.app.goo.gl/1H4JzRaj64qd98fB9",
    "صيدلية غجر": "https://maps.app.goo.gl/uGVqZfseWYuhBGFBA",
    "صيدلية محمد قطيع": "https://maps.app.goo.gl/Pe1AE6TSSdgBWAcb9",
    "صيدلية الشفاء": "https://maps.app.goo.gl/47cHfQ9SEcDEhwi2A",
    "صيدلية سامر": "https://maps.google.com/?cid=2638121331469010609&entry=gps",
    "صيدلية قتيبة": "https://maps.app.goo.gl/uhCYnGRQUyEdsrxs7",
    "صيدلية الحجاز": "https://maps.app.goo.gl/qNvzUQpSsw1ziTjp9",
    "صيدلية بلسم": "https://maps.app.goo.gl/prwVu8cb5EM2UuGL9",
    "صيدلية باسل مجد الدين غفير": "https://maps.app.goo.gl/KVMV5xa9DVDYQFLM7",
    "صيدلية النحلة": "https://maps.app.goo.gl/5nm6C7LxNm1MuE4dA",
    "صيدلية النبهان": "https://maps.app.goo.gl/6MZaEVtcjH9RzRDD9",
    "صيدلية سوسن السعيد": "https://maps.app.goo.gl/Xu16CUoBh2B2PXyT9",
    "صيدلية التوليب": "https://maps.app.goo.gl/rnTEXNz12xF2zhP68",
    "صيدلية باسل غفير": "https://maps.app.goo.gl/KVMV5xa9DVDYQFLM7",
    "صيدلية مصطفى حبوش": "https://maps.google.com/?cid=3623487170029951494&entry=gps",
    "صيدلية المحراب": "https://maps.app.goo.gl/5iGypG4oXi5X6xKQ8",
    "صيدلية الحسين ": "https://maps.app.goo.gl/kcouQhfCE74DiSoW6",
    "صيدلية خلف": "https://maps.app.goo.gl/9rgtrrtJLhBPhces8",
    "صيدلية الوجيه": "https://maps.app.goo.gl/eUCDAtMNQ8yzAwra9",
    "صيدلية علاء السيد عيسى": "https://maps.google.com/?cid=9977824329168437519&entry=gps",
    "صيدلية محمد قطيع": "https://maps.app.goo.gl/Pe1AE6TSSdgBWAcb9",
    "صيدلية رؤى قريطبي": "https://www.google.com/maps/place/WJHH%2BCR4,+Idleb,+Syria/@35.9286432,36.6297203,144m/data=!3m1!1e3!4m15!1m8!3m7!1s0x152508664354cbdf:0xc44836a7b49c636f!2sIdlib,+Syria!3b1!8m2!3d35.9310271!4d36.6417777!16zL20vMDdsNTdk!3m5!1s0x1525080b1f48756b:0x38659f7e8bff0020!8m2!3d35.9285295!4d36.6295717!16s%2Fg%2F11kxj014vc",
    "صيدلية نذير عتقي": "https://maps.app.goo.gl/FSxdodJ7UUw2UUtx6",
    "صيدلية النورس": "https://maps.app.goo.gl/C6giWAGrAA4DHYki7",
    "صيدلية الصفا": "https://maps.app.goo.gl/W4YDpumotkypbYJ27",
    "صيدلية الأسرار": "https://maps.app.goo.gl/v4N2P11PVPCQUQHu9",
    "صيدلية الجدعان": "https://maps.app.goo.gl/v4N2P11PVPCQUQHu9",
    "صيدلية سارة شحادة": "https://maps.app.goo.gl/Cbtc1yQJsvqXJxLY6",
    "صيدلية عبدو صناع": "https://maps.app.goo.gl/Cbtc1yQJsvqXJxLY6",
    "صيدلية الخنساء": "https://maps.app.goo.gl/oYA5oYiNSW6CSpwf7",
    "صيدلية علي الشيخ أحمد": "https://maps.app.goo.gl/rA8ctSu8dWozDLqL7",
    "صيدلية العاصي": "https://maps.app.goo.gl/rBjM3eEAMj3Rj8W29",
    "صيدلية آلاء النمر": "https://maps.app.goo.gl/2S2xRM84dMuHtn796",
    "صيدلية نور سليمان عوض": "https://maps.app.goo.gl/D69bC6dSqrWFMi3SA",
    "صيدلية براء": "https://maps.app.goo.gl/DXMuRKWs7zXPHUS78",
    "صيدلية البديوي": "https://maps.google.com/?q=35.926495,36.634998&entry=gps",
    "صيدلية ياسر بذارة": "https://maps.app.goo.gl/fRYEvc3n9ERnwkRZ6",
    "صيدلية أبو نقرة": "https://maps.app.goo.gl/5bAuZeZdJCFgRJQi8",
    "صيدلية الغيث": "https://maps.app.goo.gl/RcE2J1vpDDGniwtg8",
    "صيدلية الجامعة": "https://maps.app.goo.gl/ATkALpqoBKKtRBeF6",
    "صيدلية بتول العمر": "https://maps.app.goo.gl/AUMFbj16aRhMzo288",
    "صيدلية المعرة": "https://maps.app.goo.gl/WXL9UrJAcfSb4oma9",
    "صيدلية لاما السعيد": "https://maps.google.com/?q=35.932906,36.640378&entry=gps",
    "صيدلية العيادات": "https://maps.app.goo.gl/qMy7xFzQL8zkzAsH9",
    "صيدلية أسماء": "https://maps.google.com/?q=35.931653,36.630215&entry=gps",
    "صيدلية نعمت عبد الواحد": "https://maps.app.goo.gl/mp1FzeSd8GMUBoJN8",
    "صيدلية الغدير": "https://maps.google.com/?q=Idlib%2C+Syria&ftid=0x1525080a74caea25:0x31dd5a162bff4345&entry=gps",
    "صيدلية جورية": "https://maps.app.goo.gl/ZYLJnaRhF5bHHrsr6",
    "صيدلية العدنان": "https://maps.app.goo.gl/yogWAQ5gwv2vGSmh9",
    "صيدلية ضحى": "https://maps.app.goo.gl/Sr1w32mb6crieoKBA",
    "صيدلية نقابة الأطباء": "https://maps.google.com/?q=35.921186,36.637520&entry=gps",
    "صيدلية المحمدي": "https://maps.google.com/?q=35.931837,36.627410&entry=gps",
    "صيدلية الصناع": "https://maps.app.goo.gl/8h78DTttge57bdhC7",
    "صيدلية منال الأسعد": "https://maps.app.goo.gl/jt9kmVeMmJpGivbo7",
    "صيدلية منال أسعد": "https://maps.app.goo.gl/jt9kmVeMmJpGivbo7",
    "صيدلية حسناء دويدري": "https://maps.app.goo.gl/eQxwRnKPPFSckwy99",
    "صيدلية محمد(عبد الجواد سابقا)": "https://maps.app.goo.gl/GwiJYYRbrQCKKWPMA",
    "صيدلية العيسى": "https://maps.app.goo.gl/HdRv9T5HaV764bsz7",
    "صيدلية الولاء": "https://maps.app.goo.gl/9zQcxHuhYukAZQG88",
    "صيدلية رغد دحنون": "https://maps.app.goo.gl/rStYsR6kvDvDJ3KJ8",
    "صيدلية الاعتماد": "https://maps.app.goo.gl/93TT8fGMKb6LnzAo8",
    "صيدلية اسلام سفلو": "https://maps.app.goo.gl/ATRu1KF4UUjvSvJu9",
    "صيدلية عدنان هشوم": "https://maps.app.goo.gl/Uaz7JvzCGrQtntPi6",
    "صيدلية الخلف": "https://maps.app.goo.gl/SNxGCWNQPbKkEATc8",
    "صيدلية الوطني": "https://maps.app.goo.gl/HLeUwSjr2F1jnTRs8",
    "صيدليةعبدالناصر": "https://maps.google.com/?q=Idlib%2C+Syria&ftid=0x1525086c1751d697:0x4140d06c8a10bca9&entry=gps",
    "صيدلية مرشان": "https://maps.app.goo.gl/xwZUQrkPFZzGojGC8",
    "صيدلية مريم السراقبي": "https://maps.google.com/?q=Idlib%2C+Syria&ftid=0x1525081329107f03:0x5dad0fac6812f872&entry=gps",
    "صيدلية برهوم": "https://maps.app.goo.gl/t4oduWLzsU8bSHCP7",
    "صيدلية البرهوم": "https://maps.app.goo.gl/t4oduWLzsU8bSHCP7",
    "صيدلية علاء طكو": "https://maps.app.goo.gl/tXLJHEGo2nk8jkhk8",
    "صيدلية النبهان": "https://maps.app.goo.gl/UnznTXujX5sE4PUv6",
    "صيدلية أحمد جنكي": "https://maps.app.goo.gl/x4MJeaVVZz3K8VDH9",
    "صيدلية مروة ياسين": "https://maps.app.goo.gl/wAEisRguFbu4Whqs5",
    "صيدلية المجمع الطبي": "https://maps.app.goo.gl/gbWbncSr4VzMsHDCA",
    "صيدلية الزير": "https://maps.app.goo.gl/gXpvLi5FCojY5iw7A",
    "صيدلية الجلاء": "https://maps.google.com/?q=Idlib%2C+Syria&ftid=0x152507e154f3d981:0x3e816bc947aafbbd&entry=gps",
    "صيدلية طارق ترك": "https://maps.app.goo.gl/zYMCxTDBrLuAARUz5",
    "صيدلية هاجر السيد علي": "https://maps.google.com/?q=35.933637,36.628267&entry=gps",
    "صيدلية مريم النعسان": "https://maps.app.goo.gl/PJMnVvzLDWKzASbMA",
    "صيدلية الايمان": "https://maps.app.goo.gl/qahf3eaf26nYWhrr8",
    "صيدلية خلود شحود": "https://maps.app.goo.gl/mp1FzeSd8GMUBoJN8",
    "صيدلية اسبرين": "https://maps.app.goo.gl/jzyAKZLXD96Tpr9s5",
    "صيدلية إيبلا": "https://maps.app.goo.gl/2T9yZtdSAiMcJEJSA",
    "صيدلية اليمان": "https://maps.app.goo.gl/7S2zT3MYnY4hcKa78",
    "صيدلية عبدالله": "https://maps.app.goo.gl/7dAu4J1JtwynE1K39",
    "صيدلية روضة كنش": "https://maps.app.goo.gl/5KEt8j3TMErFRwXi8",
    "صيدلية السعد": "https://maps.app.goo.gl/2Pxc8xLYTXQeFFpK6",
    "صيدلية نهى العلوش": "https://maps.app.goo.gl/btL6NBs8keiScjtG8",
    "صيدلية نهى علوش": "https://maps.app.goo.gl/btL6NBs8keiScjtG8",
    "صيدلية يزن يونس ذهب": "https://maps.app.goo.gl/kGbYz57cNYmm75jX6",
    "صيدلية القصور": "https://maps.app.goo.gl/G9UFqmDY5bpvjXTd8",
    "صيدلية لمى مرديخي": "https://maps.app.goo.gl/Zfi7akmX1F1jsxmJA",
    "صيدلية نور حمادة": "https://maps.app.goo.gl/tMtgR773VF5JxJUC6",
    "صيدلية أنس حبوش": "https://maps.app.goo.gl/dR5GB3Ynyb9VmzHn9",
    "صيدلية يحيى نعمة": "https://maps.app.goo.gl/rCpDu7gdKQnkYDNAA",
    "صيدلية التلاوي": "https://maps.app.goo.gl/vL7cjG7mPFzoLEV8A",
    "صيدلية فراس غجر": "https://maps.app.goo.gl/3bpDSSdZiGkHsH59A",
    "صيدلية عز الدين": "https://maps.app.goo.gl/3bpDSSdZiGkHsH59A",
    "صيدلية فحيل": "https://maps.app.goo.gl/w13xV9KRdjGCCmaQ6",
    "صيدلية ولاء سيد يوسف": "https://maps.google.com/?q=35.928475,36.625606&entry=gps",
    "صيدلية فاطمة راجي": "https://maps.app.goo.gl/mrqsN5zC2X8Smmru7",
    "صيدلية المشلح": "https://maps.app.goo.gl/wctm7fqeuJFGXZzF9",
    "صيدلية الجامعي": "https://maps.app.goo.gl/AUMFbj16aRhMzo288",
    "صيدلية محمد حاج أسعد": "https://maps.app.goo.gl/fG8shzoY8mknMvEw8",
    "صيدلية إيناس الحسين": "https://maps.google.com/?q=35.929168,36.628203&entry=gps",
    "صيدلية بتول الأحمد": "https://maps.google.com/?q=Idlib%2C+Syria&ftid=0x1525080bb117c185:0xf032ea18c7377951&entry=gps",
    "صيدلية هنادي قوصرة": "https://maps.google.com/?q=35.937679,36.632439&entry=gps",
    "صيدلية ريناد": "https://maps.app.goo.gl/Gh6mUEuBPHyZ6dV26",
    "صيدلية عبدالحميد العدل": "https://maps.app.goo.gl/VeMJEhQyh2XNp4L99",
    "صيدلية طارق": "https://maps.app.goo.gl/PWjdHbLUyGL3ZAcM9",
    "صيدلية نور الحياة": "https://maps.app.goo.gl/sXa5aPk7mvmzxsqz5",
    "صيدلية نور الشلح": "https://maps.app.goo.gl/XS2D934PZ52FHoaL8",
    "صيدلية الحياة": "https://maps.app.goo.gl/xGEGXUg1uYMW957Z8",
    "صيدلية العبيد": "https://maps.google.com/?q=35.932693,36.630574&entry=gps",
    "صيدلية علاءالدين": "https://maps.app.goo.gl/t4oduWLzsU8bSHCP7",
    "صيدلية نبض": "https://maps.app.goo.gl/TBJbHMJDQQj38uRc8",
    "صيدلية مها زعيتر": "https://maps.app.goo.gl/jYxLzWy8urU5Qv2YA",
    "صيدلية فرح دبل (الهبطة)": "https://maps.app.goo.gl/Qg7ay5Yxq4rkpJxr5",
    "صيدلية الحكم": "https://maps.app.goo.gl/Tn66D1GRjPunKFAH7",
    "صيدلية البرج": "https://maps.app.goo.gl/JJfYCLA7PQdG1TAg6",
    "صيدلية الساعة": "https://maps.app.goo.gl/FiambePA9yQDF2AS6",
    "صيدلية العلا": "https://maps.app.goo.gl/fAw43rHh4Ln2VCK68",
    "صيدلية محمد قصاص": "https://maps.app.goo.gl/dcWofebYuCc6XZAS9",
    "صيدلية المتنبي": "https://maps.app.goo.gl/U3b6E5ignhbCRJ486",
    "صيدلية نور حمادة": "https://maps.app.goo.gl/ecjfe2zzHmorURGo7",
}


$(document).ready(function () {
    const today = new Date(); // Get the current date

    $(`#date`).html(today.toLocaleDateString("ar-SY", { weekday: 'long' }) + " " + today.toLocaleDateString("ar-SY"))

    const shouldShowFridayShift = today.getHours() < 21 && today.getDay() === 5;
    const shouldShowFirstShift = [0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].includes(today.getHours())
    const shouldShowSecondShift = true; //today.getHours() < 9;

    // Subtract 9 hours from the current time
    const hoursToSubtract = 9;
    today.setTime(today.getTime() - hoursToSubtract * 60 * 60 * 1000);

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const key = `${year}-${month}-${day}`; // Create the date string in "year-month-day" format


    // If it's Friday!
    if (today.getDay() === 5) {
        $("#afternoon_shift").css("display", "none");
        if (!shouldShowFridayShift) {
            $("#friday_shift").css("display", "none");
        } else {
            const fridayPharmacies = thirdShift[key];
            $(`#name_friday`).html(generateTable(fridayPharmacies));
        }
        if (!shouldShowFirstShift) {
            $("#first_shift").css("display", "none");
        } else {
            $(`#name_1`).html(generateTable(firstShift[key]));
        }
        if (!shouldShowSecondShift) {
            $("#second_shift").css("display", "none");
        } else {
            $(`#name_2`).html(generateTable(secondShift[key]));
        }
    } else {
        $("#friday_shift").css("display", "none");
        $("#afternoon_shift").css("display", "none");
        // instead of doing this two times (possibly three)
        // we do it dynamically for each shift
        if (!shouldShowFirstShift) {
            $("#first_shift").css("display", "none");
        } else {
            $(`#name_1`).html(generateTable(firstShift[key]));
        }
        if (!shouldShowSecondShift) {
            $("#second_shift").css("display", "none");
        } else {
            $(`#name_2`).html(generateTable(secondShift[key]));
        }

    }
});


const generatePharmacyEntry = function (pharmacies) {
    return pharmacies.map(pharmacy => {
        return `<tr> <td>${pharmacy}</td> <td> <a target="_blank" href="${pharmacyLocation[pharmacy]}"  class="btn">${pharmacyAddress[pharmacy]}</a> </td>  </tr>`
    }).join("")
}

const generateTable = function (pharmacies) {
    return `<table>
    <thead>
    ${generatePharmacyEntry(pharmacies)}
    </thead >
    </table > `
}

const verify = function (shiftsTable) {
    const set = new Set();
    for (const [_, value] of Object.entries(shiftsTable)) {
        value.forEach(element => {
            if (!(element in pharmacyLocation || element in pharmacyAddress)) {
                set.add(element)
            }
        });
    }
    return set;
}
