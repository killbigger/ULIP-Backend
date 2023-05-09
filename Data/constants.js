    // const hubs = [
    //     // Ahmedabad
    //     [0, 950, 700, 1170, 1450, 1480, 1850, 1880, 2250, 1660, 1700, 1920, 2060, 2140, 1450, 910, 1040, 1270, 1230, 1010, 1560, 1910, 1790, 1580],
      
    //     // Bengaluru
    //     [950, 0, 350, 750, 1100, 950, 1300, 1520, 1700, 570, 2300, 850, 660, 490, 510, 1300, 1150, 1300, 840, 990, 2030, 2230, 1350, 670],
      
    //     // Chennai
    //     [700, 350, 0, 400, 750, 600, 950, 1170, 1350, 280, 1900, 550, 470, 330, 350, 1000, 850, 1030, 670, 810, 1820, 2020, 1140, 460],
      
    //     // Delhi
    //     [1170, 750, 400, 0, 450, 350, 750, 970, 1150, 360, 1420, 280, 630, 580, 690, 740, 630, 400, 160, 320, 1180, 1530, 1300, 430],
      
    //     // Kolkata
    //     [1450, 1100, 750, 450, 0, 800, 800, 890, 680, 870, 1270, 360, 930, 880, 990, 270, 160, 780, 590, 690, 1160, 1510, 1670, 750],
      
    //     // Hyderabad
    //     [1480, 950, 600, 350, 800, 0, 360, 580, 760, 300, 1320, 290, 480, 430, 540, 680, 550, 200, 230, 370, 1030, 1330, 1050, 540],
      
    //     // Mumbai
    //     [1850, 1300, 950, 750, 800, 360, 0, 310, 340, 1020, 1080, 640, 470, 460, 920, 1000, 850, 360, 570, 520, 880, 1240, 1210, 830],
      
    //     // Jaipur
    //     [1880, 1520, 1170, 970, 890, 580, 310, 0, 420, 1070, 980, 870, 620, 720, 1160, 1060, 910, 620, 740, 730, 850, 1200, 1440, 900],
    //     // Pune
    //     [1590, 570, 320, 360, 870, 300, 1020, 1070, 0, 1380, 1660, 640, 280, 240, 930, 670, 510, 760, 560, 760, 1170, 1520, 1550, 480],
    //     // Lucknow
    //     [1590, 570, 320, 360, 870, 300, 1020, 1070, 1380, 0, 1660, 640, 280, 240, 930, 670, 510, 760, 560, 760, 1170, 1520, 1550, 480],

    //     // Bhopal
    //     [1700, 2300, 1900, 1420, 1270, 1320, 1080, 980, 1510, 1660, 0, 1050, 1530, 1580, 1670, 1700, 1570, 980, 1180, 1040, 820, 420, 740, 1470],
      
    //     // Patna
    //     [1920, 850, 550, 280, 360, 290, 640, 870, 960, 640, 1050, 0, 440, 400, 710, 470, 250, 710, 590, 760, 1190, 1540, 1600, 690],
      
    //     // Raipur
    //     [2060, 660, 470, 630, 930, 480, 470, 620, 1130, 280, 1530, 440, 0, 140, 900, 950, 800, 1100, 840, 1000, 1340, 1680, 1220, 400],
      
    //     // Ranchi
    //     [2140, 490, 330, 580, 880, 430, 460, 720, 1190, 240, 1580, 400, 140, 0, 780, 690, 590, 940, 780, 950, 1370, 1710, 1540, 610],
      
    //     // Agartala
    //     [1450, 510, 350, 690, 990, 540, 920, 1160, 930, 930, 1670, 710, 900, 780, 0, 750, 600, 1250, 1070, 1250, 2020, 2370, 2230, 1110],
      
    //     // Dehradun
    //     [910, 1300, 1000, 740, 270, 680, 1000, 1060, 670, 670, 1700, 470, 950, 690, 750, 0, 250, 820, 650, 770, 1180, 1530, 1410, 600],
      
    //     // Gandhinagar
    //     [1040, 1150, 850, 630, 160, 550, 850, 910, 400, 510, 1570, 250, 800, 590, 600, 250, 0, 750, 490, 600, 1010, 1360, 1330, 720],
      
    //     // Dispur
    //     [940, 1430, 1110, 400, 1080, 260, 470, 730, 270, 560, 1200, 250, 840, 780, 1070, 650, 410, 0, 480, 670, 1090, 1440, 1380, 860],

    //     // Bhubaneswar
    //     [2010, 100, 480, 810, 1110, 660, 400, 530, 1040, 760, 590, 710, 840, 780, 1070, 650, 410, 480, 0, 280, 710, 1060, 880, 620],

    //     // Chandigarh
    //     [1030, 1310, 910, 490, 310, 390, 670, 710, 430, 1170, 1180, 760, 1000, 950, 1250, 770, 600, 670, 280, 0, 420, 770, 660, 460],

    //     // Jaipur
    //     [980, 1120, 820, 400, 690, 170, 480, 540, 150, 1040, 820, 1190, 1340, 950, 2020, 1180, 1010, 1090, 710, 420, 0, 350, 560, 1010],

    //     // Chennai
    //     [2070, 1430, 1200, 870, 1160, 870, 1260, 1410, 1460, 820, 420, 1540, 1680, 1370, 2370, 1530, 1360, 1440, 1060, 770, 350, 0, 490, 1610],

    //     // Hyderabad
    //     [1820, 1570, 1280, 840, 660, 710, 1070, 1160, 1020, 1440, 740, 1600, 1220, 1540, 2230, 1410, 1330, 1380, 880, 660, 560, 490, 0, 1090],

    //    // Shillong
    //     [1820, 2040, 1870, 1660, 2210, 1530, 2370, 1980, 1460, 2240, 2600, 1660, 2120, 2420, 2660, 1660, 1640, 2030, 2950, 2300, 2390, 3100, 2950, 0]

    // ];


    // const hubMap = {
    //     "ahmedabad": 0,
    //     "bengaluru": 1,
    //     "chennai": 2,
    //     "delhi": 3,

    //     "kolkata": 4,
    //     "hyderabad": 5,
    //     "mumbai": 6,
    //     "jaipur": 7,
    //     "pune":8,
    //     "lucknow": 9,
    //     "bhopal": 10,
    //     "patna": 11,
    //     "raipur": 12,

    //     "ranchi": 13,
    //     "agartala": 14,
    //     "dehradun": 15,
    //     "gandhinagar": 16,

    //     "dispur": 17,
    //     "bhubaneswar": 18,
    //     "chandigarh": 19,
    //     "jaipur": 20,

    //     "chennai": 21,
    //     "hyderabad": 22,
    //     "shillong": 23,

    //   };

    const hubs = [
        // Delhi
        [0, 1150, 1750, 2160, 1350, 1530, 1430, 940, 680, 865],
      
        // Mumbai
        [1150, 0, 1140, 1365, 1265, 1270, 1610, 1610, 980, 1180],
      
        // Bengaluru
        [1750, 1140, 0, 350, 1600, 1260, 2150, 1980, 1050, 770],
      
        // Chennai
        [2160, 1365, 350, 0, 1760, 617, 2180, 1560, 2200, 1190],
      
        // Hyderabad
        [1350, 1265, 1600, 1760, 0, 563, 560, 515, 710, 1040],
      
        // Kolkata
        [1530, 1270, 1260, 617, 563, 0, 1970, 1650, 2050, 1750],
      
        // Pune
        [1430, 1610, 2150, 2180, 560, 1970, 0, 759, 120, 1010],
      
        // Ahmedabad
        [940, 1610, 1980, 1560, 515, 1650, 759, 0, 670, 1180],
      
        // Jaipur
        [680, 980, 1050, 2200, 710, 2050, 120, 670, 0, 945],
      
        // Kochi
        [865, 1180, 770, 1190, 1040, 1750, 1010, 1180, 945, 0]
      ];
    const hubMap = {
    'delhi':0,
    'mumbai': 1,
    'bengaluru': 2,
    'chennai': 3,
    'hyderabad': 4,
    'kolkata': 5,
    'pune':6,
    'ahmedabad': 7,
    'jaipur': 8,
    'kochi': 9
    };

      module.exports = {hubs,hubMap}