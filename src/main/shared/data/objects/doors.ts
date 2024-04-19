import * as alt from 'alt-shared';

export type Door = {
    /**
     * Unique identifier for this door.
     *
     * @type {string}
     *
     */
    uid: string;

    /**
     * A description of this doors location.
     *
     * @type {string}
     *
     */
    description?: string;

    /**
     * Current position of the door.
     *
     * @type {alt.IVector3}
     *
     */
    pos: alt.IVector3;

    /**
     * The door hash of the door.
     *
     * @type {number}
     *
     */
    model: number;

    /**
     * Should this door be locked?
     *
     * @type {boolean}
     *
     */
    isUnlocked: boolean;
};

export const Doors: Array<Door> = [
    {
        uid: '0',
        description: 'Pacific Standard Bank Main Right Door',
        isUnlocked: true,
        model: 110411286,
        pos: { x: 232.6054, y: 214.1584, z: 106.4049 },
    },
    {
        uid: '1',
        description: 'Pacific Standard Bank Main Left Door',
        isUnlocked: true,
        model: 110411286,
        pos: { x: 231.5123, y: 216.5177, z: 106.4049 },
    },
    {
        uid: '2',
        description: 'Pacific Standard Bank Back Right Door',
        isUnlocked: true,
        model: 110411286,
        pos: { x: 260.6432, y: 203.2052, z: 106.4049 },
    },
    {
        uid: '3',
        description: 'Pacific Standard Bank Back Left Door',
        isUnlocked: true,
        model: 110411286,
        pos: { x: 258.2022, y: 204.1005, z: 106.4049 },
    },
    {
        uid: '4',
        description: 'Pacific Standard Bank Door To Upstair',
        isUnlocked: true,
        model: 1956494919,
        pos: { x: 237.7704, y: 227.87, z: 106.426 },
    },
    {
        uid: '5',
        description: 'Pacific Standard Bank Upstair Door ',
        isUnlocked: true,
        model: 1956494919,
        pos: { x: 236.5488, y: 228.3147, z: 110.4328 },
    },
    {
        uid: '6',
        description: 'Pacific Standard Bank Back To Hall Right Door',
        isUnlocked: true,
        model: 110411286,
        pos: { x: 259.9831, y: 215.2468, z: 106.4049 },
    },
    {
        uid: '7',
        description: 'Pacific Standard Bank Back To Hall Left Door',
        isUnlocked: true,
        model: 110411286,
        pos: { x: 259.0879, y: 212.8062, z: 106.4049 },
    },
    {
        uid: '8',
        description: 'Pacific Standard Bank Upstair Door To Offices',
        isUnlocked: true,
        model: 1956494919,
        pos: { x: 256.6172, y: 206.1522, z: 110.4328 },
    },
    {
        uid: '9',
        description: 'Pacific Standard Bank Big Office Door',
        isUnlocked: true,
        model: 964838196,
        pos: { x: 260.8579, y: 210.4453, z: 110.4328 },
    },
    {
        uid: '10',
        description: 'Pacific Standard Bank Small Office Door ',
        isUnlocked: true,
        model: 964838196,
        pos: { x: 262.5366, y: 215.0576, z: 110.4328 },
    },
    {
        uid: '100',
        description: 'Discount Store South Enter Right Door',
        isUnlocked: false,
        model: -1148826190,
        pos: { x: 82.38156, y: -1390.476, z: 29.52609 },
    },
    {
        uid: '101',
        description: 'Discount Store South Enter Left Door',
        isUnlocked: false,
        model: 868499217,
        pos: { x: 82.38156, y: -1390.752, z: 29.52609 },
    },
    {
        uid: '110',
        description: 'Los Santos Customs Popular Street Door',
        isUnlocked: false,
        model: 270330101,
        pos: { x: 723.116, y: -1088.831, z: 23.23201 },
    },
    {
        uid: '111',
        description: 'Los Santos Customs Carcer Way Door',
        isUnlocked: false,
        model: -550347177,
        pos: { x: -356.0905, y: -134.7714, z: 40.01295 },
    },
    {
        uid: '112',
        description: 'Los Santos Customs Greenwich Parkway Door',
        isUnlocked: false,
        model: -550347177,
        pos: { x: -1145.898, y: -1991.144, z: 14.18357 },
    },
    {
        uid: '113',
        description: 'Los Santos Customs Route 68 Right Garage Door',
        isUnlocked: false,
        model: -822900180,
        pos: { x: 1174.656, y: 2644.159, z: 40.50673 },
    },
    {
        uid: '114',
        description: 'Los Santos Customs Route 68 Left Garage Door',
        isUnlocked: false,
        model: -822900180,
        pos: { x: 1182.307, y: 2644.166, z: 40.50784 },
    },
    {
        uid: '115',
        description: 'Los Santos Customs Route 68 Office Door',
        isUnlocked: true,
        model: 1335311341,
        pos: { x: 1187.202, y: 2644.95, z: 38.55176 },
    },
    {
        uid: '116',
        description: 'Los Santos Customs Route 68 Interior Door',
        isUnlocked: true,
        model: 1544229216,
        pos: { x: 1182.646, y: 2641.182, z: 39.31031 },
    },
    {
        uid: '117',
        description: "Beeker's Garage Paleto Bay Right Garage Door",
        isUnlocked: false,
        model: -822900180,
        pos: { x: 114.3135, y: 6623.233, z: 32.67305 },
    },
    {
        uid: '118',
        description: "Beeker's Garage Paleto Bay Left Garage Door",
        isUnlocked: false,
        model: -822900180,
        pos: { x: 108.8502, y: 6617.877, z: 32.67305 },
    },
    {
        uid: '119',
        description: "Beeker's Garage Paleto Bay Office Door",
        isUnlocked: true,
        model: 1335311341,
        pos: { x: 105.1518, y: 6614.655, z: 32.58521 },
    },
    {
        uid: '120',
        description: "Beeker's Garage Paleto Bay Interior Door",
        isUnlocked: true,
        model: 1544229216,
        pos: { x: 105.7772, y: 6620.532, z: 33.34266 },
    },
    {
        uid: '121',
        description: 'Ammu Nation Vespucci Boulevard Right Door',
        isUnlocked: true,
        model: -8873588,
        pos: { x: 842.7685, y: -1024.539, z: 28.34478 },
    },
    {
        uid: '122',
        description: 'Ammu Nation Vespucci Boulevard Left Door',
        isUnlocked: true,
        model: 97297972,
        pos: { x: 845.3694, y: -1024.539, z: 28.34478 },
    },
    {
        uid: '123',
        description: 'Ammu Nation Lindsay Circus Right Door',
        isUnlocked: true,
        model: -8873588,
        pos: { x: -662.6415, y: -944.3256, z: 21.97915 },
    },
    {
        uid: '124',
        description: 'Ammu Nation Lindsay Circus Left Door',
        isUnlocked: true,
        model: 97297972,
        pos: { x: -665.2424, y: -944.3256, z: 21.97915 },
    },
    {
        uid: '125',
        description: 'Ammu Nation Popular Street Right Door',
        isUnlocked: true,
        model: -8873588,
        pos: { x: 810.5769, y: -2148.27, z: 29.76892 },
    },
    {
        uid: '126',
        description: 'Ammu Nation Popular Street Left Door',
        isUnlocked: true,
        model: 97297972,
        pos: { x: 813.1779, y: -2148.27, z: 29.76892 },
    },
    {
        uid: '127',
        description: 'Ammu Nation Popular Street Shooting Range Door',
        isUnlocked: false,
        model: 452874391,
        pos: { x: 827.5342, y: -2160.493, z: 29.76884 },
    },
    {
        uid: '128',
        description: "Ammu Nation Adam's Apple Boulevard Right Door",
        isUnlocked: false,
        model: -8873588,
        pos: { x: 18.572, y: -1115.495, z: 29.94694 },
    },
    {
        uid: '129',
        description: "Ammu Nation Adam's Apple Boulevard Left Door",
        isUnlocked: false,
        model: 97297972,
        pos: { x: 16.12787, y: -1114.606, z: 29.94694 },
    },
    {
        uid: '130',
        description: "Ammu Nation Adam's Apple Boulevard Shooting Range Door",
        isUnlocked: true,
        model: 452874391,
        pos: { x: 6.81789, y: -1098.209, z: 29.94685 },
    },
    {
        uid: '131',
        description: 'Ammu Nation Vinewood Plaza Right Door',
        isUnlocked: false,
        model: -8873588,
        pos: { x: 243.8379, y: -46.52324, z: 70.09098 },
    },
    {
        uid: '132',
        description: 'Ammu Nation Vinewood Plaza Left Door',
        isUnlocked: false,
        model: 97297972,
        pos: { x: 244.7275, y: -44.07911, z: 70.09098 },
    },
    {
        uid: '150',
        description: 'Ponsonbys Portola Drive Right Door',
        isUnlocked: false,
        model: -1922281023,
        pos: { x: -715.6154, y: -157.2561, z: 37.67493 },
    },
    {
        uid: '151',
        description: 'Ponsonbys Portola Drive Left Door',
        isUnlocked: false,
        model: -1922281023,
        pos: { x: -716.6755, y: -155.42, z: 37.67493 },
    },
    {
        uid: '152',
        description: 'Ponsonbys Cougar Avenue Right Door',
        isUnlocked: false,
        model: -1922281023,
        pos: { x: -1456.201, y: -233.3682, z: 50.05648 },
    },
    {
        uid: '153',
        description: 'Ponsonbys Cougar Avenue Left Door',
        isUnlocked: false,
        model: -1922281023,
        pos: { x: -1454.782, y: -231.7927, z: 50.05649 },
    },
    {
        uid: '154',
        description: 'Ponsonbys Rockford Plaza Right Door',
        isUnlocked: false,
        model: -1922281023,
        pos: { x: -156.439, y: -304.4294, z: 39.99308 },
    },
    {
        uid: '155',
        description: 'Ponsonbys Rockford Plaza Left Door',
        isUnlocked: false,
        model: -1922281023,
        pos: { x: -157.1293, y: -306.4341, z: 39.99308 },
    },
    {
        uid: '156',
        description: 'Sub Urban Prosperity Street Promenade Door',
        isUnlocked: false,
        model: 1780022985,
        pos: { x: -1201.435, y: -776.8566, z: 17.99184 },
    },
    {
        uid: '157',
        description: 'Sub Urban Hawick Avenue Door',
        isUnlocked: false,
        model: 1780022985,
        pos: { x: 127.8201, y: -211.8274, z: 55.22751 },
    },
    {
        uid: '158',
        description: 'Sub Urban Route 68 Door',
        isUnlocked: false,
        model: 1780022985,
        pos: { x: 617.2458, y: 2751.022, z: 42.75777 },
    },
    {
        uid: '159',
        description: 'Sub Urban Chumash Plaza Door',
        isUnlocked: false,
        model: 1780022985,
        pos: { x: -3167.75, y: 1055.536, z: 21.53288 },
    },
    {
        uid: '160',
        description: "Rob's Liquor Route 1 Main Enter Door",
        isUnlocked: true,
        model: -1212951353,
        pos: { x: -2973.535, y: 390.1414, z: 15.18735 },
    },
    {
        uid: '161',
        description: "Rob's Liquor Route 1 Personnal Door",
        isUnlocked: true,
        model: 1173348778,
        pos: { x: -2965.648, y: 386.7928, z: 15.18735 },
    },
    {
        uid: '162',
        description: "Rob's Liquor Route 1 Back Door",
        isUnlocked: true,
        model: 1173348778,
        pos: { x: -2961.749, y: 390.2573, z: 15.19322 },
    },
    {
        uid: '163',
        description: "Rob's Liquor Prosperity Street Main Enter Door",
        isUnlocked: true,
        model: -1212951353,
        pos: { x: -1490.411, y: -383.8453, z: 40.30745 },
    },
    {
        uid: '164',
        description: "Rob's Liquor Prosperity Street Personnal Door",
        isUnlocked: true,
        model: 1173348778,
        pos: { x: -1482.679, y: -380.153, z: 40.30745 },
    },
    {
        uid: '165',
        description: "Rob's Liquor Prosperity Street Back Door",
        isUnlocked: true,
        model: 1173348778,
        pos: { x: -1482.693, y: -374.9365, z: 40.31332 },
    },
    {
        uid: '166',
        description: "Rob's Liquor San Andreas Avenue Main Enter Door",
        isUnlocked: true,
        model: -1212951353,
        pos: { x: -1226.894, y: -903.1218, z: 12.47039 },
    },
    {
        uid: '167',
        description: "Rob's Liquor San Andreas Avenue Personnal Door",
        isUnlocked: true,
        model: 1173348778,
        pos: { x: -1224.755, y: -911.4182, z: 12.47039 },
    },
    {
        uid: '168',
        description: "Rob's Liquor San Andreas Avenue Back Door",
        isUnlocked: true,
        model: 1173348778,
        pos: { x: -1219.633, y: -912.406, z: 12.47626 },
    },
    {
        uid: '169',
        description: "Rob's Liquor El Rancho Boulevard Main Enter Door",
        isUnlocked: true,
        model: -1212951353,
        pos: { x: 1141.038, y: -980.3225, z: 46.55986 },
    },
    {
        uid: '170',
        description: "Rob's Liquor El Rancho Boulevard Personnal Door",
        isUnlocked: true,
        model: 1173348778,
        pos: { x: 1132.645, y: -978.6059, z: 46.55986 },
    },
    {
        uid: '171',
        description: "Rob's Liquor El Rancho Boulevard Back Door",
        isUnlocked: true,
        model: 1173348778,
        pos: { x: 1129.51, y: -982.7756, z: 46.56573 },
    },
    {
        uid: '180',
        description: 'Bob Mulét Barber Shop Right Door',
        isUnlocked: false,
        model: 145369505,
        pos: { x: -822.4442, y: -188.3924, z: 37.81895 },
    },
    {
        uid: '181',
        description: 'Bob Mulét Barber Shop Left Door',
        isUnlocked: false,
        model: -1663512092,
        pos: { x: -823.2001, y: -187.0831, z: 37.81895 },
    },
    {
        uid: '182',
        description: 'Hair on Hawick Barber Shop Door',
        isUnlocked: false,
        model: -1844444717,
        pos: { x: -29.86917, y: -148.1571, z: 57.22648 },
    },
    {
        uid: '183',
        description: "O'Sheas Barber Shop Door",
        isUnlocked: false,
        model: -1844444717,
        pos: { x: 1932.952, y: 3725.154, z: 32.9944 },
    },
    {
        uid: '190',
        description: 'Premium Deluxe Motorsport Parking Right Door',
        isUnlocked: false,
        model: 1417577297,
        pos: { x: -37.33113, y: -1108.873, z: 26.7198 },
    },
    {
        uid: '191',
        description: 'Premium Deluxe Motorsport Parking Left Door',
        isUnlocked: false,
        model: 2059227086,
        pos: { x: -39.13366, y: -1108.218, z: 26.7198 },
    },
    {
        uid: '192',
        description: 'Premium Deluxe Motorsport Main Right Door',
        isUnlocked: false,
        model: 1417577297,
        pos: { x: -60.54582, y: -1094.749, z: 26.88872 },
    },
    {
        uid: '193',
        description: 'Premium Deluxe Motorsport Main Left Door',
        isUnlocked: false,
        model: 2059227086,
        pos: { x: -59.89302, y: -1092.952, z: 26.88362 },
    },
    {
        uid: '194',
        description: 'Premium Deluxe Motorsport Right Office Door',
        isUnlocked: true,
        model: -2051651622,
        pos: { x: -33.80989, y: -1107.579, z: 26.57225 },
    },
    {
        uid: '195',
        description: 'Premium Deluxe Motorsport Left Office Door',
        isUnlocked: true,
        model: -2051651622,
        pos: { x: -31.72353, y: -1101.847, z: 26.57225 },
    },
    {
        uid: '300',
        description: 'Franklin House Enter Door',
        isUnlocked: true,
        model: 520341586,
        pos: { x: -14.86892, y: -1441.182, z: 31.19323 },
    },
    {
        uid: '301',
        description: 'Franklin House Garage Door',
        isUnlocked: true,
        model: 703855057,
        pos: { x: -25.2784, y: -1431.061, z: 30.83955 },
    },
    {
        uid: '500',
        description: 'Vanilla Unicorn Main Enter Door',
        isUnlocked: true,
        model: -1116041313,
        pos: { x: 127.9552, y: -1298.503, z: 29.41962 },
    },
    {
        uid: '501',
        description: 'Vanilla Unicorn Back Enter Door',
        isUnlocked: true,
        model: 668467214,
        pos: { x: 96.09197, y: -1284.854, z: 29.43878 },
    },
    {
        uid: '502',
        description: 'Vanilla Unicorn Office Door',
        isUnlocked: true,
        model: -626684119,
        pos: { x: 99.08321, y: -1293.701, z: 29.41868 },
    },
    {
        uid: '503',
        description: 'Vanilla Unicorn Dress Door',
        isUnlocked: true,
        model: -495720969,
        pos: { x: 113.9822, y: -1297.43, z: 29.41868 },
    },
    {
        uid: '504',
        description: 'Vanilla Unicorn Private Rooms Door',
        isUnlocked: true,
        model: -1881825907,
        pos: { x: 116.0046, y: -1294.692, z: 29.41947 },
    },
    {
        uid: '510',
        description: 'Bolingbroke Penitentiary Main Enter First Door',
        isUnlocked: false,
        model: 741314661,
        pos: { x: 1844.998, y: 2597.482, z: 44.63626 },
    },
    {
        uid: '511',
        description: 'Bolingbroke Penitentiary Main Enter Second Door',
        isUnlocked: false,
        model: 741314661,
        pos: { x: 1818.543, y: 2597.482, z: 44.60749 },
    },
    {
        uid: '512',
        description: 'Bolingbroke Penitentiary Main Enter Third Door',
        isUnlocked: false,
        model: 741314661,
        pos: { x: 1806.939, y: 2616.975, z: 44.60093 },
    },
    {
        uid: '1000',
        description: 'Mission Row Police Station Main Enter Right Door',
        isUnlocked: true,
        model: 320433149,
        pos: { x: 434.7479, y: -983.2151, z: 30.83926 },
    },
    {
        uid: '1001',
        description: 'Mission Row Police Station Main Enter Left Door',
        isUnlocked: true,
        model: -1215222675,
        pos: { x: 434.7479, y: -980.6184, z: 30.83926 },
    },
    {
        uid: '1002',
        description: 'Mission Row Police Station Back Enter Right Door',
        isUnlocked: true,
        model: -2023754432,
        pos: { x: 469.9679, y: -1014.452, z: 26.53623 },
    },
    {
        uid: '1003',
        description: 'Mission Row Police Station Back Enter Left Door',
        isUnlocked: true,
        model: -2023754432,
        pos: { x: 467.3716, y: -1014.452, z: 26.53623 },
    },
    {
        uid: '1004',
        description: 'Mission Row Police Station Back To Cells Door',
        isUnlocked: true,
        model: -1033001619,
        pos: { x: 463.4782, y: -1003.538, z: 25.00599 },
    },
    {
        uid: '1005',
        description: 'Mission Row Police Station Cell Door 1',
        isUnlocked: true,
        model: 631614199,
        pos: { x: 461.8065, y: -994.4086, z: 25.06443 },
    },
    {
        uid: '1006',
        description: 'Mission Row Police Station Cell Door 2',
        isUnlocked: true,
        model: 631614199,
        pos: { x: 461.8065, y: -997.6583, z: 25.06443 },
    },
    {
        uid: '1007',
        description: 'Mission Row Police Station Cell Door 3',
        isUnlocked: true,
        model: 631614199,
        pos: { x: 461.8065, y: -1001.302, z: 25.06443 },
    },
    {
        uid: '1008',
        description: 'Mission Row Police Station Door To Cells Door',
        isUnlocked: true,
        model: 631614199,
        pos: { x: 464.5701, y: -992.6641, z: 25.06443 },
    },
    {
        uid: '1009',
        description: "Mission Row Police Station Captan's Office Door",
        isUnlocked: true,
        model: -1320876379,
        pos: { x: 446.5728, y: -980.0106, z: 30.8393 },
    },
    {
        uid: '1010',
        description: 'Mission Row Police Station Armory Double Door Right',
        isUnlocked: true,
        model: 185711165,
        pos: { x: 450.1041, y: -984.0915, z: 30.8393 },
    },
    {
        uid: '1011',
        description: 'Mission Row Police Station Armory Double Door Left',
        isUnlocked: true,
        model: 185711165,
        pos: { x: 450.1041, y: -981.4915, z: 30.8393 },
    },
    {
        uid: '1012',
        description: 'Mission Row Police Station Armory Secure Door',
        isUnlocked: true,
        model: 749848321,
        pos: { x: 453.0793, y: -983.1895, z: 30.83926 },
    },
    {
        uid: '1013',
        description: 'Mission Row Police Station Locker Rooms Door',
        isUnlocked: true,
        model: 1557126584,
        pos: { x: 450.1041, y: -985.7384, z: 30.8393 },
    },
    {
        uid: '1014',
        description: 'Mission Row Police Station Locker Room 1 Door',
        isUnlocked: true,
        model: -2023754432,
        pos: { x: 452.6248, y: -987.3626, z: 30.8393 },
    },
    {
        uid: '1015',
        description: 'Mission Row Police Station Roof Access Door',
        isUnlocked: true,
        model: 749848321,
        pos: { x: 461.2865, y: -985.3206, z: 30.83926 },
    },
    {
        uid: '1016',
        description: 'Mission Row Police Station Roof Door',
        isUnlocked: true,
        model: -340230128,
        pos: { x: 464.3613, y: -984.678, z: 43.83443 },
    },
    {
        uid: '1017',
        description: 'Mission Row Police Station Cell And Briefing Right Door',
        isUnlocked: true,
        model: 185711165,
        pos: { x: 443.4078, y: -989.4454, z: 30.8393 },
    },
    {
        uid: '1018',
        description: 'Mission Row Police Station Cell And Briefing Left Door',
        isUnlocked: true,
        model: 185711165,
        pos: { x: 446.0079, y: -989.4454, z: 30.8393 },
    },
    {
        uid: '1019',
        description: 'Mission Row Police Station Briefing Right Door',
        isUnlocked: true,
        model: -131296141,
        pos: { x: 443.0298, y: -991.941, z: 30.8393 },
    },
    {
        uid: '1020',
        description: 'Mission Row Police Station Briefing Left Door',
        isUnlocked: true,
        model: -131296141,
        pos: { x: 443.0298, y: -994.5412, z: 30.8393 },
    },
    {
        uid: '1021',
        description: 'Mission Row Police Station Back Gate Door',
        isUnlocked: true,
        model: -1603817716,
        pos: { x: 488.8923, y: -1011.67, z: 27.14583 },
    },
];