const WineData = [
  {
    id: 'W1',
    name: 'Merlot',
    description: `This Merlot is rich and generous, showcasing beautiful blackberry and plum characters. The palate has the perfect depth, complexity and length of flavour.`,
    alcohol: 'Strength: 13.0%',
    imagelink_square: require('../assets/wine_assets/red_wine/square/red_wine_pic_1_square.png'),
    imagelink_portrait: require('../assets/wine_assets/red_wine/portrait/red_wine_pic_1_portrait.png'),
    ingredients: 'Red',
    special_ingredient: 'With Merlot',
    prices: [
      {size: '375 ml', price: '9.00', currency: '$'},
      {size: '500 ml', price: '12.00', currency: '$'},
      {size: '750 ml', price: '15.00', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '5,432',
    favourite: false,
    type: 'Wine',
    index: 0,
  },
  {
    id: 'W2',
    name: 'Shiraz',
    description: `This wonderful Shiraz is rich and generous, showcasing beautiful blackberry and plum characters. The palate has the perfect depth, complexity and length of flavour.`,
    alcohol: 'Strength: 14.5%',
    imagelink_square: require('../assets/wine_assets/red_wine/square/red_wine_pic_2_square.png'),
    imagelink_portrait: require('../assets/wine_assets/red_wine/portrait/red_wine_pic_2_portrait.png'),
    ingredients: 'Red',
    special_ingredient: 'With Shiraz',
    prices: [
      {size: '375 ml', price: '10.00', currency: '$'},
      {size: '500 ml', price: '13.50', currency: '$'},
      {size: '750 ml', price: '18.00', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '7,342',
    favourite: false,
    type: 'Wine',
    index: 1,
  },
  {
    id: 'W3',
    name: 'Pinot Noir',
    description: `This wonderful Pinot Noir is rich and generous, showcasing beautiful cherry and raspberry characters. The palate has the perfect depth, complexity and length of flavour.`,
    alcohol: 'Strength: 13.0%',
    imagelink_square: require('../assets/wine_assets/red_wine/square/red_wine_pic_3_square.png'),
    imagelink_portrait: require('../assets/wine_assets/red_wine/portrait/red_wine_pic_3_portrait.png'),
    ingredients: 'Red',
    special_ingredient: 'With Pinot Noir',
    prices: [
      {size: '375 ml', price: '12.00', currency: '$'},
      {size: '500 ml', price: '16.00', currency: '$'},
      {size: '750 ml', price: '22.00', currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '5,432',
    favourite: false,
    type: 'Wine',
    index: 2,
  },
  {
    id: 'W4',
    name: 'Malbec',
    description: `This wonderful Malbec is rich and generous, showcasing beautiful blackberry and plum characters. The palate has the perfect depth, complexity and length of flavour.`,
    alcohol: 'Strength: 14.0%',
    imagelink_square: require('../assets/wine_assets/red_wine/square/red_wine_pic_4_square.png'),
    imagelink_portrait: require('../assets/wine_assets/red_wine/portrait/red_wine_pic_4_portrait.png'),
    ingredients: 'Red',
    special_ingredient: 'With Malbec',
    prices: [
      {size: '375 ml', price: '11.00', currency: '$'},
      {size: '500 ml', price: '14.50', currency: '$'},
      {size: '750 ml', price: '19.00', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '8,123',
    favourite: false,
    type: 'Wine',
    index: 3,
  },
  {
    id: 'W5',
    name: 'Grenache',
    description: `This delightful Grenache is rich and generous, showcasing beautiful raspberry and strawberry characters. The palate has the perfect depth, complexity, and length of flavour.`,
    alcohol: 'Strength: 13.5%',
    imagelink_square: require('../assets/wine_assets/red_wine/square/red_wine_pic_5_square.png'),
    imagelink_portrait: require('../assets/wine_assets/red_wine/portrait/red_wine_pic_5_portrait.png'),
    ingredients: 'Red',
    special_ingredient: 'With Grenache',
    prices: [
      {size: '375 ml', price: '10.00', currency: '$'},
      {size: '500 ml', price: '13.00', currency: '$'},
      {size: '750 ml', price: '18.00', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '7,345',
    favourite: false,
    type: 'Wine',
    index: 4,
  },
  {
    id: 'W6',
    name: 'Chardonnay',
    description: `This exquisite Chardonnay is elegant and fresh, featuring delightful notes of apple, pear, and a hint of vanilla. The palate is well-balanced with a creamy texture and a long, satisfying finish.`,
    alcohol: 'Strength: 13.0%',
    imagelink_square: require('../assets/wine_assets/white_wine/square/white_wine_pic_1_square.png'),
    imagelink_portrait: require('../assets/wine_assets/white_wine/portrait/white_wine_pic_1_portrait.png'),
    ingredients: 'White',
    special_ingredient: 'With Chardonnay',
    prices: [
      {size: '375 ml', price: '8.00', currency: '$'},
      {size: '500 ml', price: '10.50', currency: '$'},
      {size: '750 ml', price: '14.00', currency: '$'},
    ],
    average_rating: 4.3,
    ratings_count: '5,678',
    favourite: false,
    type: 'Wine',
    index: 5,
  },
  {
    id: 'W7',
    name: 'Riesling',
    description: `This refreshing Riesling offers vibrant citrus and floral aromas with hints of lime and green apple. The palate is crisp and clean with a balanced acidity and a long, zesty finish.`,
    alcohol: 'Strength: 12.0%',
    imagelink_square: require('../assets/wine_assets/white_wine/square/white_wine_pic_2_square.png'),
    imagelink_portrait: require('../assets/wine_assets/white_wine/portrait/white_wine_pic_2_portrait.png'),
    ingredients: 'White',
    special_ingredient: 'With Riesling',
    prices: [
      {size: '375 ml', price: '10.00', currency: '$'},
      {size: '500 ml', price: '13.00', currency: '$'},
      {size: '750 ml', price: '18.00', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '4,932',
    favourite: false,
    type: 'Wine',
    index: 6,
  },
  {
    id: 'W8',
    name: 'Sémillon',
    description: `This delightful Sémillon is known for its complex and rich profile with notes of citrus, apple, and honey. The palate is smooth and creamy with a balanced acidity and a lingering finish.`,
    alcohol: 'Strength: 13.0%',
    imagelink_square: require('../assets/wine_assets/white_wine/square/white_wine_pic_3_square.png'),
    imagelink_portrait: require('../assets/wine_assets/white_wine/portrait/white_wine_pic_3_portrait.png'),
    ingredients: 'White',
    special_ingredient: 'With Sémillon',
    prices: [
      {size: '375 ml', price: '11.00', currency: '$'},
      {size: '500 ml', price: '14.50', currency: '$'},
      {size: '750 ml', price: '19.50', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '3,721',
    favourite: false,
    type: 'Wine',
    index: 7,
},
{
    id: 'W9',
    name: 'Viognier',
    description: `This exquisite Viognier boasts rich and aromatic notes of peach, apricot, and honeysuckle. The palate is full-bodied with a smooth texture and a long, elegant finish.`,
    alcohol: 'Strength: 14.0%',
    imagelink_square: require('../assets/wine_assets/white_wine/square/white_wine_pic_4_square.png'),
    imagelink_portrait: require('../assets/wine_assets/white_wine/portrait/white_wine_pic_4_portrait.png'),
    ingredients: 'White',
    special_ingredient: 'With Viognier',
    prices: [
      {size: '375 ml', price: '13.00', currency: '$'},
      {size: '500 ml', price: '16.50', currency: '$'},
      {size: '750 ml', price: '22.00', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '2,589',
    favourite: false,
    type: 'Wine',
    index: 8,
},
{
    id: 'W10',
    name: 'Albariño',
    description: `This vibrant Albariño offers refreshing aromas of citrus, green apple, and white peach. The palate is crisp and zesty with a clean, mineral finish.`,
    alcohol: 'Strength: 12.5%',
    imagelink_square: require('../assets/wine_assets/white_wine/square/white_wine_pic_5_square.png'),
    imagelink_portrait: require('../assets/wine_assets/white_wine/portrait/white_wine_pic_5_portrait.png'),
    ingredients: 'White',
    special_ingredient: 'With Albariño',
    prices: [
      {size: '375 ml', price: '11.00', currency: '$'},
      {size: '500 ml', price: '14.50', currency: '$'},
      {size: '750 ml', price: '19.00', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '3,102',
    favourite: false,
    type: 'Wine',
    index: 9,
},
{
    id: 'W11',
    name: 'Provence',
    description: `This elegant Provence Rosé boasts fresh aromas of red berries, citrus, and floral notes. The palate is light and crisp, with a refreshing finish that is perfect for any occasion.`,
    alcohol: 'Strength: 12.5%',
    imagelink_square: require('../assets/wine_assets/rose_wine/square/rose_wine_pic_1_square.png'),
    imagelink_portrait: require('../assets/wine_assets/rose_wine/portrait/rose_wine_pic_1_portrait.png'),
    ingredients: 'Rosé',
    special_ingredient: 'With Grenache',
    prices: [
      {size: '375 ml', price: '13.00', currency: '$'},
      {size: '500 ml', price: '17.00', currency: '$'},
      {size: '750 ml', price: '22.00', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '4,523',
    favourite: false,
    type: 'Wine',
    index: 10,
  },
{
    id: 'W12',
    name: 'Cinsault',
    description: `This delightful Cinsault Rosé offers fresh aromas of strawberry, raspberry, and floral notes. The palate is light and refreshing with a hint of minerality, making it perfect for warm weather enjoyment.`,
    alcohol: 'Strength: 12.0%',
    imagelink_square: require('../assets/wine_assets/rose_wine/square/rose_wine_pic_2_square.png'),
    imagelink_portrait: require('../assets/wine_assets/rose_wine/portrait/rose_wine_pic_2_portrait.png'),
    ingredients: 'Rosé',
    special_ingredient: 'With Cinsault grapes',
    prices: [
      {size: '375 ml', price: '10.00', currency: '$'},
      {size: '500 ml', price: '14.00', currency: '$'},
      {size: '750 ml', price: '18.00', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '3,789',
    favourite: false,
    type: 'Wine',
    index: 11,
  },
{
    id: 'W13',
    name: 'Pinot Noir',
    description: `Experience the elegance of Pinot Noir in a refreshing rosé form. This delightful rosé offers delicate aromas of strawberry, cherry, and rose petals. On the palate, you'll find bright acidity and a crisp finish.`,
    alcohol: 'Strength: 13.5%',
    imagelink_square: require('../assets/wine_assets/rose_wine/square/rose_wine_pic_3_square.png'),
    imagelink_portrait: require('../assets/wine_assets/rose_wine/portrait/rose_wine_pic_3_portrait.png'),
    ingredients: 'Rosé',
    special_ingredient: 'With Pinot Noir grapes',
    prices: [
      {size: '375 ml', price: '15.00', currency: '$'},
      {size: '500 ml', price: '20.00', currency: '$'},
      {size: '750 ml', price: '25.00', currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '5,432',
    favourite: false,
    type: 'Wine',
    index: 12,
  },
{
    id: 'W14',
    name: 'Rosato',
    description: `Rosato, a delightful Italian-style rosé, offers a vibrant and refreshing taste experience. With its beautiful pink hue, this wine boasts enticing aromas of strawberries, raspberries, and citrus fruits. On the palate, you'll enjoy a perfect balance of acidity and fruitiness, making it a versatile choice for any occasion.`,
    alcohol: 'Strength: 12%',
    imagelink_square: require('../assets/wine_assets/rose_wine/square/rose_wine_pic_4_square.png'),
    imagelink_portrait: require('../assets/wine_assets/rose_wine/portrait/rose_wine_pic_4_portrait.png'),
    ingredients: 'Rosé',
    special_ingredient: 'Italian-style rosé',
    prices: [
      {size: '375 ml', price: '10.00', currency: '$'},
      {size: '500 ml', price: '14.00', currency: '$'},
      {size: '750 ml', price: '18.00', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '4,789',
    favourite: false,
    type: 'Wine',
    index: 13,
  },
{
    id: 'W15',
    name: 'Moscato',
    description: `Moscato Rosé is a delightful fusion of two beloved wine styles, combining the sweetness and aromatic qualities of Moscato with the vibrant pink hue and refreshing acidity of a rosé. This wine offers a bouquet of floral aromas, with hints of rose petals and orange blossoms, complemented by flavors of ripe strawberries and raspberries. With its light, effervescent nature, Moscato Rosé is perfect for celebrating special moments or enjoying a leisurely afternoon.`,
    alcohol: 'Strength: 7.5%',
    imagelink_square: require('../assets/wine_assets/rose_wine/square/rose_wine_pic_5_square.png'),
    imagelink_portrait: require('../assets/wine_assets/rose_wine/portrait/rose_wine_pic_5_portrait.png'),
    ingredients: 'Rosé',
    special_ingredient: 'With Moscato grapes',
    prices: [
      {size: '375 ml', price: '8.00', currency: '$'},
      {size: '500 ml', price: '12.00', currency: '$'},
      {size: '750 ml', price: '16.00', currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '5,432',
    favourite: false,
    type: 'Wine',
    index: 14,
},
{
    id: 'W16',
    name: 'Champagne',
    description: `Champagne is the epitome of celebration and luxury, renowned for its effervescence, elegance, and complexity. Made exclusively in the Champagne region of France, this sparkling wine is crafted using traditional methods, including a secondary fermentation in the bottle, which creates its signature bubbles. Champagne typically exhibits notes of citrus, apple, pear, and brioche, with a crisp acidity and creamy texture. Whether toasting a special occasion or simply enjoying a refined aperitif, Champagne never fails to impress.`,
    alcohol: 'Strength: 12%',
    imagelink_square: require('../assets/wine_assets/sparkling_wine/square/sparkling_wine_pic_1_square.png'),
    imagelink_portrait: require('../assets/wine_assets/sparkling_wine/portrait/sparkling_wine_pic_1_portrait.png'),
    ingredients: 'Sparkling',
    special_ingredient: 'With Chardonnay',
    prices: [
      {size: '375 ml', price: '35.00', currency: '$'},
      {size: '750 ml', price: '60.00', currency: '$'},
      {size: '1.5 L', price: '120.00', currency: '$'},
    ],
    average_rating: 4.9,
    ratings_count: '7,891',
    favourite: false,
    type: 'Wine',
    index: 15,
  },
{
    id: 'W17',
    name: 'Cava',
    description: `Cava is a sparkling wine originating from Spain, renowned for its natural beauty and fresh flavor profile. Crafted from Macabeo, Parellada, and Xarel·lo grapes, Cava typically exhibits a pale yellow color and a range of flavors from refreshing fruits to the aromas of baked bread and flowers. Aged in the bottle using traditional methods, Cava produces fine and delicate bubbles, creating a lively and invigorating sparkling experience.`,
    alcohol: 'Strength: 11.5%',
    imagelink_square: require('../assets/wine_assets/sparkling_wine/square/sparkling_wine_pic_2_square.png'),
    imagelink_portrait: require('../assets/wine_assets/sparkling_wine/portrait/sparkling_wine_pic_2_portrait.png'),
    ingredients: 'Sparkling',
    special_ingredient: 'With Macabeo, Parellada',
    prices: [
      {size: '375 ml', price: '25.00', currency: '$'},
      {size: '750 ml', price: '40.00', currency: '$'},
      {size: '1.5 L', price: '80.00', currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '7,542',
    favourite: false,
    type: 'Wine',
    index: 16,
  },
{
    id: 'W18',
    name: 'Prosecco',
    description: `Prosecco is a delightful Italian sparkling wine known for its light and crisp taste, making it a popular choice for celebrations and everyday enjoyment alike. Crafted primarily from the Glera grape in the Veneto region of Italy, Prosecco is renowned for its fruity aromas, typically reminiscent of green apple, pear, and citrus fruits. With its refreshing acidity and effervescence, Prosecco is often enjoyed as an aperitif or paired with a variety of dishes, making it a versatile and beloved wine.`,
    alcohol: 'Strength: 11%',
    imagelink_square: require('../assets/wine_assets/sparkling_wine/square/sparkling_wine_pic_3_square.png'),
    imagelink_portrait: require('../assets/wine_assets/sparkling_wine/portrait/sparkling_wine_pic_3_portrait.png'),
    ingredients: 'Sparkling',
    special_ingredient: 'With Glera',
    prices: [
      {size: '375 ml', price: '20.00', currency: '$'},
      {size: '750 ml', price: '30.00', currency: '$'},
      {size: '1.5 L', price: '50.00', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '8,215',
    favourite: false,
    type: 'Wine',
    index: 17,
  },
{
    id: 'W19',
    name: 'Crémant',
    description: `Crémant is a French sparkling wine crafted using the traditional method, similar to Champagne, but produced outside the Champagne region. Made in various French wine regions such as Alsace, Burgundy, and the Loire Valley, Crémant offers a more affordable alternative to Champagne while still delivering exceptional quality and taste. Crémant typically exhibits a fine and persistent mousse, with aromas ranging from floral and fruity to toasty and nutty, depending on the grape varieties used. Whether enjoyed as an aperitif or paired with a meal, Crémant is a versatile and elegant sparkling wine suitable for any occasion.`,
    alcohol: 'Strength: 11.5%',
    imagelink_square: require('../assets/wine_assets/sparkling_wine/square/sparkling_wine_pic_4_square.png'),
    imagelink_portrait: require('../assets/wine_assets/sparkling_wine/portrait/sparkling_wine_pic_4_portrait.png'),
    ingredients: 'Sparkling',
    special_ingredient: 'With Various grape',
    prices: [
      {size: '375 ml', price: '25.00', currency: '$'},
      {size: '750 ml', price: '40.00', currency: '$'},
      {size: '1.5 L', price: '75.00', currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '6,534',
    favourite: false,
    type: 'Wine',
    index: 18,
  },
{
    id: 'W20',
    name: 'Asti Spumante',
    description: `Asti Spumante is a sweet and sparkling white wine hailing from the Piedmont region of Italy. Made primarily from the Moscato Bianco grape, Asti Spumante is renowned for its aromatic bouquet, featuring notes of peach, apricot, and orange blossom. Its delicate sweetness and lively bubbles make it a popular choice for celebrations and dessert pairings. With lower alcohol content compared to other sparkling wines, Asti Spumante is perfect for enjoying on warm summer days or as a refreshing aperitif.`,
    alcohol: 'Strength: 7-9%',
    imagelink_square: require('../assets/wine_assets/sparkling_wine/square/sparkling_wine_pic_5_square.png'),
    imagelink_portrait: require('../assets/wine_assets/sparkling_wine/portrait/sparkling_wine_pic_5_portrait.png'),
    ingredients: 'Sparkling',
    special_ingredient: 'With Moscato Bianco',
    prices: [
      {size: '375 ml', price: '15.00', currency: '$'},
      {size: '750 ml', price: '25.00', currency: '$'},
      {size: '1.5 L', price: '45.00', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '5,312',
    favourite: false,
    type: 'Wine',
    index: 19,
},















];
export default WineData;
