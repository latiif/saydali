// from 09:00 PM to 01:00 AM
const firstShift = {
    "2023-05-01": ["صيدلية سوسن السعيد"],
    "2023-05-02": ["صيدلية إيبلا"],
    "2023-05-03": ["صيدلية عمر"],
    "2023-05-04": ["صيدلية اليمان"],
    "2023-05-05": ["صيدلية عبدالله"],
    "2023-05-06": ["صيدلية روضة كنش"],
    "2023-05-07": ["صيدلية السعد"],
    "2023-05-08": ["صيدلية نهى علوش"],
    "2023-05-09": ["صيدلية بيت الدواء"],
    "2023-05-10": ["صيدلية القصاص"],
    "2023-05-11": ["صيدلية رنا"],
    "2023-05-12": ["صيدلية آية الرحمن"],
    "2023-05-13": ["صيدلية القصور"],
    "2023-05-14": ["صيدلية لمى مرديخي"],
    "2023-05-15": ["صيدلية نور حمادة", "صيدلية أنس حبوش"],
    "2023-05-16": ["صيدلية أنس حبوش"],
    "2023-05-17": ["صيدلية يحيى نعمة"],
    "2023-05-18": ["صيدلية التلاوي"],
    "2023-05-19": ["صيدلية فراس غجر"],
    "2023-05-20": ["صيدلية حسناء دويدري", "صيدلية الوطني", "صيدلية ضحى", "صيدلية نسرين"],
    "2023-05-21": ["صيدلية العدنان", "صيدلية إيناس", "صيدلية الجامعة", "صيدلية مرشان", "صيدلية نعمت عبد الواحد", "صيدلية المحمدي"],
    "2023-05-22": ["صيدلية لمى مرديخي", "صيدلية اسلام معدل", "صيدلية سامر", "صيدلية أحمد جنكي", "صيدلية التوليب"],
    "2023-05-23": ["صيدلية منال الأسعد", "صيدلية الولاء", "صيدلية الزير", "صيدلية النحلة", "صيدلية عمر", "صيدلية آية الرحمن"],
    "2023-05-24": ["صيدلية فاطمة راجي", "صيدلية عمر", "صيدلية بيت الدواء", "صيدلية أسماء"],
    "2023-05-25": ["صيدلية أنس حبوش", "صيدلية أبو نقرة", "صيدلية إيبلا", "صيدلية مريم النعسان",],
    "2023-05-26": ["صيدلية ولاء سيد يوسف", "صيدلية الاعتماد", "صيدلية النبهان", "صيدلية عبدالله", "صيدلية الجلاء", "صيدلية السعد"],
    "2023-05-27": ["صيدلية عامر فاخورجي", "صيدلية البديوي", "صيدلية مصطفى حبوش", "صيدلية القصاص"],
    "2023-05-28": ["صيدلية الجدعان", "صيدلية الغدير", "صيدلية الصفا", "صيدلية مروة ياسين", "صيدلية نذير عتقي", "صيدلية باسل غفير"],
    "2023-05-29": ["صيدلية النورس", "صيدلية سارة شحاذة", "صيدلية محمد حاج أسعد", "صيدلية ضياء كشايا", "صيدلية اليمان"],
    "2023-05-30": ["صيدلية التلاوي", "صيدلية رغد دحنون", "صيدلية الرازي", "الصيدلية المركزية"],
    "2023-05-31": ["صيدلية يحيى نعمة", "صيدلية محمد", "صيدلية نقابة الأطباء", "صيدلية غجر", "صيدلية فراس غجر", "صيدلية العيسى"],
};

// from 01:00 AM to 09:00 PM
const secondShift = {
    "2023-05-01": ["صيدلية سوسن السعيد"],
    "2023-05-02": ["صيدلية إيبلا"],
    "2023-05-03": ["صيدلية عمر"],
    "2023-05-04": ["صيدلية اليمان"],
    "2023-05-05": ["صيدلية عبدالله"],
    "2023-05-06": ["صيدلية روضة كنش"],
    "2023-05-07": ["صيدلية السعد"],
    "2023-05-08": ["صيدلية نهى علوش"],
    "2023-05-09": ["صيدلية بيت الدواء"],
    "2023-05-10": ["صيدلية القصاص"],
    "2023-05-11": ["صيدلية رنا"],
    "2023-05-12": ["صيدلية آية الرحمن"],
    "2023-05-13": ["صيدلية القصور"],
    "2023-05-14": ["صيدلية لمى مرديخي"],
    "2023-05-15": ["صيدلية نور حمادة"],
    "2023-05-16": ["صيدلية أنس حبوش"],
    "2023-05-17": ["صيدلية يحيى نعمة"],
    "2023-05-18": ["صيدلية التلاوي"],
    "2023-05-19": ["صيدلية فراس غجر"],
    "2023-05-20": ["صيدلية برهوم"],
    "2023-05-21": ["صيدلية عمر"],
    "2023-05-22": ["صيدلية مروة ياسين"],
    "2023-05-23": ["صيدلية السعد"],
    "2023-05-24": ["صيدلية محمد(عبد الجواد سابقا)"],
    "2023-05-25": ["صيدلية المحمدي"],
    "2023-05-26": ["صيدلية الوطني"],
    "2023-05-27": ["صيدلية الغدير"],
    "2023-05-28": ["صيدلية مرشان"],
    "2023-05-29": ["صيدلية بتول الأحمد"],
    "2023-05-30": ["صيدلية علي الشيخ أحمد"],
    "2023-05-31": ["صيدلية مريم النعسان"],
};

//  lunch-break shift
const thirdShift = {
    "2023-05-01": ["صيدلية سوسن السعيد"],
    "2023-05-02": ["صيدلية إيبلا"],
    "2023-05-03": ["صيدلية عمر"],
    "2023-05-04": ["صيدلية اليمان"],
    "2023-05-05": ["صيدلية عبدالله"],
    "2023-05-06": ["صيدلية روضة كنش"],
    "2023-05-07": ["صيدلية السعد"],
    "2023-05-08": ["صيدلية نهى علوش"],
    "2023-05-09": ["صيدلية بيت الدواء"],
    "2023-05-10": ["صيدلية القصاص"],
    "2023-05-11": ["صيدلية رنا"],
    "2023-05-12": ["صيدلية آية الرحمن"],
    "2023-05-13": ["صيدلية القصور"],
    "2023-05-14": ["صيدلية لمى مرديخي"],
    "2023-05-15": ["صيدلية نور حمادة"],
    "2023-05-16": ["صيدلية أنس حبوش"],
    "2023-05-17": ["صيدلية يحيى نعمة"],
    "2023-05-18": ["صيدلية التلاوي"],
    "2023-05-19": ["صيدلية فراس غجر"],
    "2023-05-20": ["صيدلية القصاص", "صيدلية البديوي", "صيدلية سامر", "صيدلية ياسر بذارة", "صيدلية أبو نقرة", "صيدلية الغيث", "صيدلية الحكمة", "صيدلية الجامعة", "صيدلية اليماني", "صيدلية بتول الأحمد", "صيدلية المعرة", "صيدلية لاما السعيد", "صيدلية هبة بدوية", "صيدلية أسماء", "صيدلية نعمت عبد الواحد", "صيدلية نسرين", "صيدلية الغدير", "صيدلية جورية", "صيدلية العدنان", "صيدلية عمر", "صيدلية ضحى", "صيدلية نقابة الأطباء", "صيدلية المحمدي", "صيدلية الصناع", "صيدلية منال الأسعد", "صيدلية حسناء دويدري", "صيدلية محمد(عبد الجواد سابقا)", "صيدلية التوليب"],
    "2023-05-21": ["صيدلية العيسى", "صيدلية الولاء", "صيدلية نور الحياة", "صيدلية رغد دحنون", "صيدلية الاعتماد", "صيدلية اسلام سفلو", "صيدلية عدنان هشوم", "صيدلية الخلف", "صيدلية محمد", "صيدلية الوطني", "صيدلية عبدالناصر", "صيدلية مرشان", "صيدلية مريم", "صيدلية برهوم", "صيدلية علاء طكو", "صيدلية النبهان", "صيدلية أحمد جنكي", "صيدلية مروة ياسين", "صيدلية المجمع الطبي", "صيدلية الرازي", "صيدلية عامر فاخورجي", "صيدلية الزير", "صيدلية الجلاء", "صيدلية طارق ترك", "صيدلية الوجيه", "صيدلية هاجر السيد علي", "صيدلية مريم النعسان", "صيدلية الايمان", "صيدلية الشفاء"],
    "2023-05-22": ["صيدلية خلود شحود", "صيدلية اسبرين", "صيدلية سوسن السعيد", "صيدلية إيبلا", "صيدلية عمر", "صيدلية اليمان", "صيدلية عبدالله", "صيدلية روضة كنش", "صيدلية السعد", "صيدلية نهى علوش", "صيدلية بيت الدواء", "صيدلية القصاص", "صيدلية يزن يونس ذهب", "صيدلية آية الرحمن", "صيدلية القصور", "صيدلية لمى مرديخي", "صيدلية نور حمادة", "صيدلية أنس حبوش", "صيدلية يحيى نعمة", "صيدلية التلاوي", "صيدلية فراس غجر", "صيدلية علاء الدين", "صيدلية عز الدين", "صيدلية فحيل", "صيدلية ولاء سيد يوسف", "صيدلية فاطمة راجي", "صيدلية قتيبة", "صيدلية رحابي", "صيدلية الجامعي"],
    "2023-05-23": ["صيدلية نذير عتقي", "صيدلية رؤى قريطبي", "صيدلية النورس", "صيدلية النحلة", "صيدلية الصفا", "صيدلية العالمية", "صيدلية الأسرار", "صيدلية هنادي قوصرة", "صيدلية الجدعان", "صيدلية العمالية", "الصيدلية المركزية", "صيدلية البلسم", "صيدلية سارة شحاذة", "صيدلية عبدو صناع", "صيدلية الخنساء", "صيدلية اسلام معدل", "صيدلية علي الشيخ أحمد", "صيدلية العاصي", "صيدلية الأمين", "صيدلية باسل غفير", "صيدلية محمد حاج أسعد", "صيدلية آلاء النمر", "صيدلية نور سليمان عوض", "صيدلية براء", "صيدلية إيناس", "صيدلية ضياء كشايا", "صيدلية مصطفى حبوش", "صيدلية المارتيني(راما)"],
    "2023-05-24": ["صيدلية القصاص", "صيدلية البديوي", "صيدلية سامر", "صيدلية ياسر بذارة", "صيدلية أبو نقرة", "صيدلية الغيث", "صيدلية الحكمة", "صيدلية الجامعة", "صيدلية اليماني", "صيدلية بتول الأحمد", "صيدلية المعرة", "صيدلية لاما السعيد", "صيدلية هبة بدوية", "صيدلية أسماء", "صيدلية نعمت عبد الواحد", "صيدلية نسرين", "صيدلية الغدير", "صيدلية جورية", "صيدلية العدنان", "صيدلية عمر", "صيدلية ضحى", "صيدلية نقابة الأطباء", "صيدلية المحمدي", "صيدلية الصناع", "صيدلية منال الأسعد", "صيدلية حسناء دويدري", "صيدلية محمد(عبد الجواد سابقا)", "صيدلية التوليب"],
    "2023-05-25": ["صيدلية العيسى", "صيدلية الولاء", "صيدلية نور الحياة", "صيدلية رغد دحنون", "صيدلية الاعتماد", "صيدلية اسلام سفلو", "صيدلية عدنان هشوم", "صيدلية الخلف", "صيدلية محمد", "صيدلية الوطني", "صيدلية عبدالناصر", "صيدلية مرشان", "صيدلية مريم", "صيدلية برهوم", "صيدلية علاء طكو", "صيدلية النبهان", "صيدلية أحمد جنكي", "صيدلية مروة ياسين", "صيدلية المجمع الطبي", "صيدلية الرازي", "صيدلية عامر فاخورجي", "صيدلية الزير", "صيدلية الجلاء", "صيدلية طارق ترك", "صيدلية الوجيه", "صيدلية هاجر السيد علي", "صيدلية مريم النعسان", "صيدلية الايمان", "صيدلية الشفاء"],
    "2023-05-26": ["صيدلية نذير عتقي", "صيدلية رؤى قريطبي", "صيدلية النورس", "صيدلية النحلة", "صيدلية الصفا", "صيدلية العالمية", "صيدلية الأسرار", "صيدلية هنادي قوصرة", "صيدلية الجدعان", "صيدلية العمالية", "الصيدلية المركزية", "صيدلية البلسم", "صيدلية سارة شحاذة", "صيدلية عبدو صناع", "صيدلية الخنساء", "صيدلية اسلام معدل", "صيدلية علي الشيخ أحمد", "صيدلية العاصي", "صيدلية الأمين", "صيدلية باسل غفير", "صيدلية محمد حاج أسعد", "صيدلية آلاء النمر", "صيدلية نور سليمان عوض", "صيدلية براء", "صيدلية إيناس", "صيدلية ضياء كشايا", "صيدلية مصطفى حبوش", "صيدلية المارتيني(راما)"],
    "2023-05-27": ["صيدلية خلود شحود", "صيدلية اسبرين", "صيدلية سوسن السعيد", "صيدلية إيبلا", "صيدلية عمر", "صيدلية اليمان", "صيدلية عبدالله", "صيدلية روضة كنش", "صيدلية السعد", "صيدلية نهى علوش", "صيدلية بيت الدواء", "صيدلية القصاص", "صيدلية يزن يونس ذهب", "صيدلية آية الرحمن", "صيدلية القصور", "صيدلية لمى مرديخي", "صيدلية نور حمادة", "صيدلية أنس حبوش", "صيدلية يحيى نعمة", "صيدلية التلاوي", "صيدلية فراس غجر", "صيدلية علاء الدين", "صيدلية عز الدين", "صيدلية فحيل", "صيدلية ولاء سيد يوسف", "صيدلية فاطمة راجي", "صيدلية قتيبة", "صيدلية رحابي", "صيدلية الجامعي"],
    "2023-05-28": ["صيدلية نذير عتقي", "صيدلية رؤى قريطبي", "صيدلية النورس", "صيدلية النحلة", "صيدلية الصفا", "صيدلية العالمية", "صيدلية الأسرار", "صيدلية هنادي قوصرة", "صيدلية الجدعان", "صيدلية العمالية", "الصيدلية المركزية", "صيدلية البلسم", "صيدلية سارة شحاذة", "صيدلية عبدو صناع", "صيدلية الخنساء", "صيدلية اسلام معدل", "صيدلية علي الشيخ أحمد", "صيدلية العاصي", "صيدلية الأمين", "صيدلية باسل غفير", "صيدلية محمد حاج أسعد", "صيدلية آلاء النمر", "صيدلية نور سليمان عوض", "صيدلية براء", "صيدلية إيناس", "صيدلية ضياء كشايا", "صيدلية مصطفى حبوش", "صيدلية المارتيني(راما)"],
    "2023-05-29": ["صيدلية القصاص", "صيدلية البديوي", "صيدلية سامر", "صيدلية ياسر بذارة", "صيدلية أبو نقرة", "صيدلية الغيث", "صيدلية الحكمة", "صيدلية الجامعة", "صيدلية اليماني", "صيدلية بتول الأحمد", "صيدلية المعرة", "صيدلية لاما السعيد", "صيدلية هبة بدوية", "صيدلية أسماء", "صيدلية نعمت عبد الواحد", "صيدلية نسرين", "صيدلية الغدير", "صيدلية جورية", "صيدلية العدنان", "صيدلية عمر", "صيدلية ضحى", "صيدلية نقابة الأطباء", "صيدلية المحمدي", "صيدلية الصناع", "صيدلية منال الأسعد", "صيدلية حسناء دويدري", "صيدلية محمد(عبد الجواد سابقا)", "صيدلية التوليب"],
    "2023-05-30": ["صيدلية العيسى", "صيدلية الولاء", "صيدلية نور الحياة", "صيدلية رغد دحنون", "صيدلية الاعتماد", "صيدلية اسلام سفلو", "صيدلية عدنان هشوم", "صيدلية الخلف", "صيدلية محمد", "صيدلية الوطني", "صيدلية عبدالناصر", "صيدلية مرشان", "صيدلية مريم", "صيدلية برهوم", "صيدلية علاء طكو", "صيدلية النبهان", "صيدلية أحمد جنكي", "صيدلية مروة ياسين", "صيدلية المجمع الطبي", "صيدلية الرازي", "صيدلية عامر فاخورجي", "صيدلية الزير", "صيدلية الجلاء", "صيدلية طارق ترك", "صيدلية الوجيه", "صيدلية هاجر السيد علي", "صيدلية مريم النعسان", "صيدلية الايمان", "صيدلية الشفاء"],
    "2023-05-31": ["صيدلية خلود شحود", "صيدلية اسبرين", "صيدلية سوسن السعيد", "صيدلية إيبلا", "صيدلية عمر", "صيدلية اليمان", "صيدلية عبدالله", "صيدلية روضة كنش", "صيدلية السعد", "صيدلية نهى علوش", "صيدلية بيت الدواء", "صيدلية القصاص", "صيدلية يزن يونس ذهب", "صيدلية آية الرحمن", "صيدلية القصور", "صيدلية لمى مرديخي", "صيدلية نور حمادة", "صيدلية أنس حبوش", "صيدلية يحيى نعمة", "صيدلية التلاوي", "صيدلية فراس غجر", "صيدلية علاء الدين", "صيدلية عز الدين", "صيدلية فحيل", "صيدلية ولاء سيد يوسف", "صيدلية فاطمة راجي", "صيدلية قتيبة", "صيدلية رحابي", "صيدلية الجامعي"],
};


const pharmacyLocation = {

    "صيدلية رنا": "https://goo.gl/maps/Wi6N3Bag89sf6u1J9",
    "صيدلية اشرف": "https://goo.gl/maps/Wi6N3Bag89sf6u1J9",
    "صيدلية القصاص": "https://maps.app.goo.gl/H7qVtSoQ9vGPa5G18",
    "صيدلية عمر": "https://maps.google.com/?cid=13059863794002922223&entry=gps",
    "صيدلية بيت الدواء": "https://maps.app.goo.gl/UqSLK5txu1cL7d817",
    "صيدلية نسرين": "https://maps.app.goo.gl/87pLuTVtnVw2SvxC8",
    "صيدلية الفرقان": "https://maps.app.goo.gl/jKm5faeEeL4C6L1X9",
    "صيدلية العمالية": "https://maps.app.goo.gl/aS4FnX4GyS79VWvc6",
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
    "صيدلية محمد": "https://maps.app.goo.gl/LubRVVMziCWU5tCh7",
    "صيدلية المحبة": "https://maps.app.goo.gl/VfkHR4pP4AW627t58",
    "صيدلية ابراهيم دالاتي": "https://maps.app.goo.gl/tDNpYLwu9tZok2rn7",
    "صيدلية سميع": "https://maps.app.goo.gl/ucjboZPLH49PeGQc6",
    "صيدلية المارتيني(راما)": "https://maps.app.goo.gl/j5CM5vBberUv1UY66",
    "صيدلية علاء سيد عيسى ": "https://maps.app.goo.gl/yX627Dz1CXXXkkE47",
    "صيدلية آية": "https://maps.app.goo.gl/uyrzJTE5tdXVr7e86",
    "صيدلية الوجيه": "https://maps.app.goo.gl/eUCDAtMNQ8yzAwra9",
    "صيدلية ادلب الخضراء": "https://maps.app.goo.gl/VqpjfdTzXSyXwxUy8",
    "صيدلية رحابي": "https://maps.app.goo.gl/wctm7fqeuJFGXZzF9",
    "صيدلية الكمال": "https://maps.app.goo.gl/Wd63ZxHorUFoQJQi9",
    "صيدلية عامر فاخورجي": "https://maps.app.goo.gl/FLYVT7Bib1kLST8L8",
    "صيدلية بيان صابوني": "https://maps.app.goo.gl/oGqV3QGEq4iz3K2Z8",
    "صيدلية بكري علوش": "https://maps.app.goo.gl/kqGY1dvM3c4BX31x5",
    "صيدلية اسلام معدل": "https://maps.app.goo.gl/fj3EUqkndN1oqpPf9",
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
    "صيدلية سارة شحاذة": "https://maps.app.goo.gl/Cbtc1yQJsvqXJxLY6",
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
    "صيدلية هبة بدوية": "https://maps.app.goo.gl/qMy7xFzQL8zkzAsH9",
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
    "صيدلية حسناء دويدري": "https://maps.app.goo.gl/tXLJHEGo2nk8jkhk8",
    "صيدلية محمد(عبد الجواد سابقا)": "https://maps.app.goo.gl/GwiJYYRbrQCKKWPMA",
    "صيدلية العيسى": "https://maps.app.goo.gl/HdRv9T5HaV764bsz7",
    "صيدلية الولاء": "https://maps.app.goo.gl/9zQcxHuhYukAZQG88",
    "صيدلية نور الحياة": "https://maps.app.goo.gl/9zQcxHuhYukAZQG88",
    "صيدلية رغد دحنون": "https://maps.app.goo.gl/rStYsR6kvDvDJ3KJ8",
    "صيدلية الاعتماد": "https://maps.app.goo.gl/93TT8fGMKb6LnzAo8",
    "صيدلية اسلام سفلو": "https://maps.app.goo.gl/ATRu1KF4UUjvSvJu9",
    "صيدلية عدنان هشوم": "https://maps.app.goo.gl/Uaz7JvzCGrQtntPi6",
    "صيدلية الخلف": "https://maps.app.goo.gl/SNxGCWNQPbKkEATc8",
    "صيدلية الوطني": "https://maps.app.goo.gl/HLeUwSjr2F1jnTRs8",
    "صيدلية عبدالناصر": "https://maps.google.com/?q=Idlib%2C+Syria&ftid=0x1525086c1751d697:0x4140d06c8a10bca9&entry=gps",
    "صيدلية مرشان": "https://maps.app.goo.gl/xwZUQrkPFZzGojGC8",
    "صيدلية مريم": "https://maps.google.com/?q=Idlib%2C+Syria&ftid=0x1525081329107f03:0x5dad0fac6812f872&entry=gps",
    "صيدلية برهوم": "https://maps.app.goo.gl/t4oduWLzsU8bSHCP7",
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
    "صيدلية إيناس": "https://maps.google.com/?q=35.929168,36.628203&entry=gps",
    "صيدلية بتول الأحمد": "https://maps.google.com/?q=Idlib%2C+Syria&ftid=0x1525080bb117c185:0xf032ea18c7377951&entry=gps",
    "صيدلية هنادي قوصرة": "https://maps.google.com/?q=35.937679,36.632439&entry=gps",

}


$(document).ready(function () {
    const today = new Date(); // Get the current date

    $(`#date`).html(today.toLocaleDateString("ar-SY", { weekday: 'long' }) + " " + today.toLocaleDateString("ar-SY"))

    const shouldShowAfternoonShift = today.getHours() >= 9 && today.getHours() < 17;
    const shouldShowFridayShift = today.getHours() < 21 && today.getDay() === 5;
    const shouldShowFirstShift = today.getHours() >= 9 && today.getHours() < 21;
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
        const dicts = [firstShift, secondShift, thirdShift];
        // instead of doing this two times (possibly three)
        // we do it dynamically for each shift
        if (!shouldShowAfternoonShift) {
            $("#afternoon_shift").css("display", "none");
        } else {
            $(`#name_3`).html(generateTable(thirdShift[key]));
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

    }
});


const x = function () {
    return "1"
}

const generatePharmacyEntry = function (pharmacies) {
    return pharmacies.map(pharmacy => {
        return `<tr> <td>${pharmacy}</td> <td> <a target="_blank" href="${pharmacyLocation[pharmacy]}"  class="btn">افتح الموقع</a> </td>  </tr>`
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
            if (!(element in pharmacyLocation)) {
                set.add(element)
            }
        });
    }
    return set;
}
