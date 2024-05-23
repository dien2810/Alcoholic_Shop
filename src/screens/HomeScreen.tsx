import {
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import WineCard from '../components/WineCard';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].ingredients] == undefined) {
      temp[data[i].ingredients] = 1;
    } else {
      temp[data[i].ingredients]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getWineList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let wineList = data.filter((item: any) => item.ingredients == category);
    return wineList;
  }
};
const HomeScreen = ({navigation}: any) => {
  const WineList = useStore((state: any) => state.WineList);
  const BeerList = useStore((state: any) => state.BeerList);
  const [categories, setCategories] = useState(
    getCategoriesFromData(WineList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoriesIndex, setCategoriesIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedWine, setSortedWine] = useState(
    getWineList(categoriesIndex.category, WineList),
  );
  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();
  const searchWine = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoriesIndex({index: 0, category: categories[0]});
      setSortedWine([
        ...WineList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };
  const resetSearchWine = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoriesIndex({index: 0, category: categories[0]});
    setSortedWine([...WineList]);
    setSearchText('');
  };
  const addToCart = useStore((state: any) => state.addToCart);
  const caculateCartPrice = useStore((state: any) => state.caculateCartPrice);
  const WineCardAddToCartHandler = ({
    id,
    index,
    name,
    alcohol,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      alcohol,
      imagelink_square,
      special_ingredient,
      type,
      prices,
    });
    caculateCartPrice();
    ToastAndroid.showWithGravity(
      name + ' is Added to Cart',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  // console.log('categories = ', categories);
  // console.log('sortedWine=', sortedWine.length);
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false} //chi xuat thanh cuon doc = false
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* App header */}
        <HeaderBar />
        <Text style={styles.ScreenTitle}>Find the best{'\n'}wine for you</Text>
        {/* Search Input */}
        <View style={styles.InputContainer}>
          <TouchableOpacity
            onPress={() => {
              searchWine(searchText);
            }}>
            <CustomIcon
              style={styles.InputIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Wine..."
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              searchWine(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}></TextInput>
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchWine();
              }}>
              <CustomIcon
                style={styles.InputIcon}
                name="close"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
        {/* Category Scroller */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}>
              <TouchableOpacity
                onPress={() => {
                  setCategoriesIndex({
                    index: index,
                    category: categories[index],
                  });
                  setSortedWine([
                    ...getWineList(categories[index], WineList),
                  ]);
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                }}
                style={styles.CategoryScrollViewItem}>
                <Text
                  style={[
                    styles.CategoryText,
                    categoriesIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoriesIndex.index == index ? (
                  <View style={styles.ActiveCategory}></View>
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        {/* Wine FlatList */}
        <FlatList
          ref={ListRef}
          horizontal
          ListEmptyComponent={
            <View style={styles.EmptyListContainer}>
              <Text style={styles.CategoryText}>No Wine Available</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedWine}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <WineCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  alcohol={item.alcohol}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={WineCardAddToCartHandler}></WineCard>
              </TouchableOpacity>
            );
          }}
        />
        {/* Beer FlatList*/}
        <Text style={styles.WineBeersTitle}>Beer</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeerList}
          contentContainerStyle={[
            styles.FlatListContainer,
            {marginBottom: tabBarHeight},
          ]}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <WineCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  alcohol={item.alcohol}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={WineCardAddToCartHandler}></WineCard>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  InputContainer: {
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    flexDirection: 'row',
    alignItems: 'center',
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  EmptyListContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.space_36 * 3,
  },
  WineBeersTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
});

export default HomeScreen;
