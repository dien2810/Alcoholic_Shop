const WineData = [
  {
    id: 'W1',
    name: 'Merlot',
    description: `This Merlot is rich and generous, showcasing beautiful blackberry and plum characters. The palate has the perfect depth, complexity and length of flavour.`,
    alcohol: '13.0%',
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
    alcohol: '14.5%',
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
    alcohol: '13.0%',
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
];
export default WineData;
