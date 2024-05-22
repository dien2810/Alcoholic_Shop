const BeerData = [
  {
    id: 'B1',
    name: '333',
    description: `333 Beer, a prominent Vietnamese beer, is celebrated for its rich history and distinctive taste. With an alcohol content of approximately 5.3%, 333 Beer offers a balanced flavor profile that appeals to a wide range of beer enthusiasts. It is brewed using high-quality ingredients, including selected malt, hops, and pure water, resulting in a refreshing and smooth drinking experience.`,
    alcohol: 'Alcohol Percentage: 5.3%',
    imagelink_square: require('../assets/wine_assets/333_beer/333_square.png'),
    imagelink_portrait: require('../assets/wine_assets/333_beer/333_portrait.png'),
    ingredients: 'Malt',
    special_ingredient: 'From VietNam',
    prices: [
      {size: '1can', price: '0.51', currency: '$'},
      {size: '1pack', price: '2.87', currency: '$'},
      {size: '1keg', price: '11.58', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Beer',
    index: 0,
  },
  {
    id: 'B2',
    name: 'Tiger',
    description: `Tiger Beer is an internationally acclaimed beer brand that originates from Singapore. Established in 1932, Tiger Beer has grown to become a global favorite, known for its high-quality brewing process and distinctive taste. With an alcohol content of approximately 5%, it offers a crisp and refreshing flavor that appeals to a wide audience.`,
    alcohol: 'Alcohol Percentage: 5%',
    imagelink_square: require('../assets/wine_assets/tiger_beer/tiger_square.png'),
    imagelink_portrait: require('../assets/wine_assets/tiger_beer/tiger_portrait.png'),
    ingredients: 'Malt',
    special_ingredient: 'From Singapore',
    prices: [
      {size: '1can', price: '0.67', currency: '$'},
      {size: '1pack', price: '3.89', currency: '$'},
      {size: '1keg', price: '14.92', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Beer',
    index: 1,
  },
  {
    id: 'B3',
    name: 'Saporo',
    description: `Sapporo Beer is a distinguished Japanese beer brand known for its exceptional quality and rich brewing heritage. Established in 1876, it is Japan's oldest beer brand and has become a symbol of premium beer craftsmanship. With an alcohol content typically around 5%, Sapporo Beer offers a well-balanced and smooth flavor that appeals to both casual drinkers and beer connoisseurs.`,
    alcohol: 'Alcohol Percentage: 5%',
    imagelink_square: require('../assets/wine_assets/saporo_beer/saporo_square.png'),
    imagelink_portrait: require('../assets/wine_assets/saporo_beer/saporo_portrait.png'),
    ingredients: 'Malt',
    special_ingredient: 'From Japan',
    prices: [
      {size: '1can', price: '0.73', currency: '$'},
      {size: '1pack', price: '4.12', currency: '$'},
      {size: '1keg', price: '15.90', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Beer',
    index: 2,
  },
  {
    id: 'B4',
    name: 'Heineken Silver',
    description: `Heineken Beer is an iconic Dutch lager that has earned worldwide acclaim for its exceptional quality and distinctive taste. Founded in 1864 by Gerard Adriaan Heineken in Amsterdam, Heineken has become one of the most recognized and beloved beer brands globally. With an alcohol content typically around 5%, Heineken Beer offers a smooth, refreshing flavor that appeals to a broad audience.`,
    alcohol: 'Alcohol Percentage: 5% ',
    imagelink_square: require('../assets/wine_assets/heineken_beer/heineken_square.png'),
    imagelink_portrait: require('../assets/wine_assets/heineken_beer/heineken_portrait.png'),
    ingredients: 'Hops',
    special_ingredient: 'From The Netherlands',
    prices: [
      {size: '1can', price: '0.69', currency: '$'},
      {size: '1pack', price: '4.71', currency: '$'},
      {size: '1keg', price: '18.06', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Beer',
    index: 3,
  },
];
export default BeerData;

// const BeansData = [
//   {
//     id: 'B1',
//     name: 'Robusta Beans',
//     description: `Robusta beans are larger and more rounded than the other bean varieties. These plants typically grow much larger than Arabica plants, measuring between 15 and 20 feet. Robusta beans are typically considered to be hardier because they can grow at lower altitudes and resist diseases. But recent research suggests that they don’t handle heat as well as was previously thought.`,
//     roasted: 'Medium Roasted',
//     imagelink_square: require('../assets/coffee_assets/robusta_coffee_beans/robusta_coffee_beans_square.png'),
//     imagelink_portrait: require('../assets/coffee_assets/robusta_coffee_beans/robusta_coffee_beans_portrait.png'),
//     ingredients: 'Africa',
//     special_ingredient: 'From Africa',
//     prices: [
//       {size: '250gm', price: '5.50', currency: '$'},
//       {size: '500gm', price: '10.50', currency: '$'},
//       {size: '1Kg', price: '18.50', currency: '$'},
//     ],
//     average_rating: 4.7,
//     ratings_count: '6,879',
//     favourite: false,
//     type: 'Bean',
//     index: 0,
//   },
//   {
//     id: 'B2',
//     name: 'Arabica Beans',
//     description: `Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! The name Arabica likely comes from the beans’ popularity in 7th-century Arabia (present-day Yemen).`,
//     roasted: 'Medium Roasted',
//     imagelink_square: require('../assets/coffee_assets/arabica_coffee_beans/arabica_coffee_beans_square.png'),
//     imagelink_portrait: require('../assets/coffee_assets/arabica_coffee_beans/arabica_coffee_beans_portrait.png'),
//     ingredients: 'Africa',
//     special_ingredient: 'From Africa',
//     prices: [
//       {size: '250gm', price: '5.50', currency: '$'},
//       {size: '500gm', price: '10.50', currency: '$'},
//       {size: '1Kg', price: '18.50', currency: '$'},
//     ],
//     average_rating: 4.7,
//     ratings_count: '6,879',
//     favourite: false,
//     type: 'Bean',
//     index: 1,
//   },
//   {
//     id: 'B3',
//     name: 'Liberica Beans',
//     description: `Native to central and western Africa – specifically Liberia, hence its name – Coffea liberica is prized for its piquant floral aroma and bold, smoky flavor profile. Growing from a much larger plant than Arabica or Robusta, most Liberica cherries tend to be irregular in shape and closer to Robusta in size and general appearance. It’s also tolerant of hot, humid climates and does well at low altitude. `,
//     roasted: 'Medium Roasted',
//     imagelink_square: require('../assets/coffee_assets/liberica_coffee_beans/liberica_coffee_beans_square.png'),
//     imagelink_portrait: require('../assets/coffee_assets/liberica_coffee_beans/liberica_coffee_beans_portrait.png'),
//     ingredients: 'Malaysia',
//     special_ingredient: 'From Malaysia',
//     prices: [
//       {size: '250gm', price: '5.50', currency: '$'},
//       {size: '500gm', price: '10.50', currency: '$'},
//       {size: '1Kg', price: '18.50', currency: '$'},
//     ],
//     average_rating: 4.7,
//     ratings_count: '6,879',
//     favourite: false,
//     type: 'Bean',
//     index: 2,
//   },
//   {
//     id: 'B4',
//     name: 'Excelsa Beans',
//     description: `Excelsa beans grow almost entirely in Southeast Asia, and they’re shaped somewhat like Liberica beans — elongated ovals. These beans grow on large 20 to 30-foot coffee plants at medium altitudes. In terms of flavor, Excelsa beans are pretty unique. They combine light roast traits like tart notes and fruity flavors with flavors that are more reminiscent of dark roasts.`,
//     roasted: 'Medium Roasted',
//     imagelink_square: require('../assets/coffee_assets/excelsa_coffee_beans/excelsa_coffee_beans_square.png'),
//     imagelink_portrait: require('../assets/coffee_assets/excelsa_coffee_beans/excelsa_coffee_beans_portrait.png'),
//     ingredients: 'Malaysia',
//     special_ingredient: 'From Malaysia',
//     prices: [
//       {size: '250gm', price: '5.50', currency: '$'},
//       {size: '500gm', price: '10.50', currency: '$'},
//       {size: '1Kg', price: '18.50', currency: '$'},
//     ],
//     average_rating: 4.7,
//     ratings_count: '6,879',
//     favourite: false,
//     type: 'Bean',
//     index: 3,
//   },
// ];
// export default BeansData;