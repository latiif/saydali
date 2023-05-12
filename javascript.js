// from 09:00 PM to 01:00 AM
const firstShift = {
    "2023-05-01": "صيدلية سوسن السعيد",
    "2023-05-02": "صيدلية إيبل",
    "2023-05-03": "صيدلية عمر",
    "2023-05-04": "صيدلية اليمان",
    "2023-05-05": "صيدلية عبدالله",
    "2023-05-06": "صيدلية روضة",
    "2023-05-07": "صيدلية السعد",
    "2023-05-08": "صيدلية نهى علوش",
    "2023-05-09": "صيدلية بيت الدواء",
    "2023-05-10": "صيدلية القصاص",
    "2023-05-11": "صيدلية رنا",
    "2023-05-12": "صيدلية آية الرحمن",
    "2023-05-13": "صيدلية القصور",
    "2023-05-14": "صيدلية لمى مرديخي",
    "2023-05-15": "صيدلية نور حمادة",
    "2023-05-16": "صيدلية أنس حبوش",
    "2023-05-17": "صيدلية يحيى نعمة",
    "2023-05-18": "صيدلية التلاوي",
    "2023-05-19": "صيدلية فراس غجر",
    "2023-05-20": "صيدلية علاء الدين",
    "2023-05-21": "صيدلية عز الدين",
    "2023-05-22": "صيدلية فحيل",
};

// from 01:00 AM to 09:00 PM
const secondShift = {
    "2023-05-01": "صيدلية سوسن السعيد",
    "2023-05-02": "صيدلية إيبل",
    "2023-05-03": "صيدلية عمر",
    "2023-05-04": "صيدلية اليمان",
    "2023-05-05": "صيدلية عبدالله",
    "2023-05-06": "صيدلية روضة",
    "2023-05-07": "صيدلية السعد",
    "2023-05-08": "صيدلية نهى علوش",
    "2023-05-09": "صيدلية بيت الدواء",
    "2023-05-10": "صيدلية القصاص",
    "2023-05-11": "صيدلية رنا",
    "2023-05-12": "صيدلية آية الرحمن",
    "2023-05-13": "صيدلية القصور",
    "2023-05-14": "صيدلية لمى مرديخي",
    "2023-05-15": "صيدلية نور حمادة",
    "2023-05-16": "صيدلية أنس حبوش",
    "2023-05-17": "صيدلية يحيى نعمة",
    "2023-05-18": "صيدلية التلاوي",
    "2023-05-19": "صيدلية فراس غجر",
    "2023-05-20": "صيدلية علاء الدين",
    "2023-05-21": "صيدلية عز الدين",
    "2023-05-22": "صيدلية فحيل",
};

// not used?
const thirdShift = {
    "2023-05-01": "صيدلية سوسن السعيد",
    "2023-05-02": "صيدلية إيبل",
    "2023-05-03": "صيدلية عمر",
    "2023-05-04": "صيدلية اليمان",
    "2023-05-05": "صيدلية عبدالله",
    "2023-05-06": "صيدلية روضة",
    "2023-05-07": "صيدلية السعد",
    "2023-05-08": "صيدلية نهى علوش",
    "2023-05-09": "صيدلية بيت الدواء",
    "2023-05-10": "صيدلية القصاص",
    "2023-05-11": "صيدلية رنا",
    "2023-05-12": "صيدلية آية الرحمن",
    "2023-05-13": "صيدلية القصور",
    "2023-05-14": "صيدلية لمى مرديخي",
    "2023-05-15": "صيدلية نور حمادة",
    "2023-05-16": "صيدلية أنس حبوش",
    "2023-05-17": "صيدلية يحيى نعمة",
    "2023-05-18": "صيدلية التلاوي",
    "2023-05-19": "صيدلية فراس غجر",
    "2023-05-20": "صيدلية علاء الدين",
    "2023-05-21": "صيدلية عز الدين",
    "2023-05-22": "صيدلية فحيل",
};


const pharmacyLocation = {

    "صيدلية رنا": "https://goo.gl/maps/Wi6N3Bag89sf6u1J9",
    "صيدلية اشرف": "https://goo.gl/maps/Wi6N3Bag89sf6u1J9",
    "صيدلية القصاص": "https://maps.app.goo.gl/H7qVtSoQ9vGPa5G18",
    "صيدلية عمر": "https://maps.google.com/?cid=13059863794002922223&entry=gps",
    "صيدلية بيت الدواء": "https://maps.app.goo.gl/UqSLK5txu1cL7d817",
    "صيدلية نسرين": "https://maps.app.goo.gl/87pLuTVtnVw2SvxC8",
    "صيدلية الفرقان": "https://maps.app.goo.gl/jKm5faeEeL4C6L1X9",
    "الصيدلية العمالية": "https://maps.app.goo.gl/aS4FnX4GyS79VWvc6",
    "صيدلية اليماني": "https://maps.app.goo.gl/i9FuaWuJcV56x3EMA",
    "صيدلية الزير": "https://maps.app.goo.gl/NXrhVUvJh9mKhkMY9",
    "صيدلية حنان": "https://maps.app.goo.gl/6reo56AwS5YyQ1Dr5",
    "الصيدلية العالمية": "https://maps.app.goo.gl/aS4FnX4GyS79VWvc6",
    "الصيدلية المركزية": "https://maps.app.goo.gl/aknL8WXbTL2HCJRs9",
    "صيدلية بلسم": "https://maps.app.goo.gl/prwVu8cb5EM2UuGL9",
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
    "صيدليةادلب الخضراء": "https://maps.app.goo.gl/VqpjfdTzXSyXwxUy8",
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
    "صيدلية سوسن": "https://maps.app.goo.gl/Xu16CUoBh2B2PXyT9",
    "صيدلية التوليب": "https://maps.app.goo.gl/rnTEXNz12xF2zhP68",
    "صيدلية باسل غفير ": "https://maps.app.goo.gl/KVMV5xa9DVDYQFLM7",
    "صيدلية مصطفى حبوش ": "https://maps.google.com/?cid=3623487170029951494&entry=gps",
    "صيدلية المحراب ": "https://maps.app.goo.gl/5iGypG4oXi5X6xKQ8",
    "صيدلية الحسين ": "https://maps.app.goo.gl/kcouQhfCE74DiSoW6",
    "صيدلية خلف ": "https://maps.app.goo.gl/9rgtrrtJLhBPhces8",
    "صيدلية سامر ": "https://maps.app.goo.gl/nj4XvHyaW5DB2jy27",
    "صيدلية الوجيه": "https://maps.app.goo.gl/eUCDAtMNQ8yzAwra9",
    "صيدلية علاء السيد عيسى": "https://maps.google.com/?cid=9977824329168437519&entry=gps",
    "صيدلية محمد قطيع": "https://maps.app.goo.gl/Pe1AE6TSSdgBWAcb9",
    "صيدلية رؤى قريطبي": "https://www.google.com/maps/place/WJHH%2BCR4,+Idleb,+Syria/@35.9286432,36.6297203,144m/data=!3m1!1e3!4m15!1m8!3m7!1s0x152508664354cbdf:0xc44836a7b49c636f!2sIdlib,+Syria!3b1!8m2!3d35.9310271!4d36.6417777!16zL20vMDdsNTdk!3m5!1s0x1525080b1f48756b:0x38659f7e8bff0020!8m2!3d35.9285295!4d36.6295717!16s%2Fg%2F11kxj014vc",

}


$(document).ready(function () {
    const today = new Date(); // Get the current date

    // Subtract 9 hours from the current time
    const hoursToSubtract = 9;
    today.setTime(today.getTime() - hoursToSubtract * 60 * 60 * 1000);

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const key = `${year}-${month}-${day}`; // Create the date string in "year-month-day" format


    const dicts = [firstShift, secondShift, thirdShift];
    // instead of doing this two times (possibly three)
    // we do it dynamically for each shift
    for (let i = 0; i < 2; i++) {
        // Get the button element by its ID
        var myButton = $(`#open_in_maps_${i + 1}`);

        // Update the contents of the div with ID "name"
        $(`#name_${i + 1}`).html(`<b>${dicts[i][key]}</b>`);

        // Update the contents of the button
        $(`#open_in_maps_${i + 1}`).html(`افتح موقع ${dicts[i][key]} في خرائط جوجل`);
        // Add click event handler to the button
        myButton.click(function () {
            // Define the URL of the link you want to open
            var linkUrl = pharmacyLocation[dicts[i][key]];

            if (!linkUrl == "") {
                // Open the link in a new window
                window.open(linkUrl, '_blank');
            }
        });
    }
});
