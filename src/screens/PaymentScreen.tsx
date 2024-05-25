import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import GradientBGIcon from '../components/GradientBGIcon';
import PaymentMethod from '../components/PaymentMethod';
import PaymentFooter from '../components/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../components/CustomIcon';
import {useStore} from '../store/store';
import PopUpAnimation from '../components/PopUpAnimation';
import {
  PlatformPay,
  StripeProvider,
  confirmPlatformPayPayment,
  usePlatformPay,
  useStripe,
} from '@stripe/stripe-react-native';

const PaymentList = [
  {
    name: 'Wallet',
    icon: 'icon',
    isIcon: true,
  },
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
];
const PaymentScreen = ({navigation, route}: any) => {
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const [showAnimation, setShowAnimation] = useState(false);
  const caculateCartPrice = useStore((state: any) => state.caculateCartPrice);
  const addToOrderHistoryListFromCart = useStore(
    (state: any) => state.addToOrderHistoryListFromCart,
  );
  const [name, setName] = useState('Dien');
  const stripe = useStripe();

  const subscribe = async () => {
    try {
      // sending request
      const response = await fetch('http://10.0.2.2:8080/pay', {
        method: 'POST',
        body: JSON.stringify({name, route}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Fetch passed!');
      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;

      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Merchant Name',
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);
      console.log('response ok!');
      const presentSheet = await stripe.presentPaymentSheet({clientSecret});
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      Alert.alert('Payment complete, thank you!');
      setShowAnimation(true);
      addToOrderHistoryListFromCart();
      caculateCartPrice();
      setTimeout(() => {
        setShowAnimation(false);
        navigation.navigate('History');
      }, 2000);
    } catch (err) {
      console.error(err);
      Alert.alert('Something went wrong, try again later!');
    }
  };
  const buttonPressHandler = () => {
    if (paymentMode == 'Google Pay') {
      subscribe();
    } else {
      setShowAnimation(true);
      addToOrderHistoryListFromCart();
      caculateCartPrice();
      setTimeout(() => {
        setShowAnimation(false);
        navigation.navigate('History');
      }, 2000);
    }
  };

  return (
    <StripeProvider publishableKey="pk_test_51PK6jnP24CzyDzW7X23OaQN4DyKbVrCDKE4UOYbhA5x5rY8auXcsCM9qqsKK0wZa0AMyM3Wc2DeLMcp2q50HukMA00aC8a8NTJ">
      <View style={styles.ScreenContainer}>
        <StatusBar backgroundColor={COLORS.primaryBlackHex} />
        {showAnimation ? (
          <PopUpAnimation
            style={styles.LottieAnimation}
            source={require('../lottie/successful.json')}
          />
        ) : (
          <></>
        )}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ScrollViewFlex}>
          <View style={styles.HeaderContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <Text style={styles.HeaderText}>Payment</Text>
            <View style={styles.EmptyView} />
          </View>
          <View style={styles.PaymentOptionsContainer}>
            <TouchableOpacity
              onPress={() => {
                setPaymentMode('Credit Card');
              }}>
              <View
                style={[
                  styles.CreditCardContainer,
                  {
                    borderColor:
                      paymentMode == 'Credit Card'
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryGreyHex,
                  },
                ]}>
                <Text style={styles.CreditCardTitle}>Credit Card</Text>
                <View style={styles.CreditCardBG}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                    style={styles.LinearGradientStyle}>
                    <View style={styles.CreditCardRow}>
                      <CustomIcon
                        name="chip"
                        size={FONTSIZE.size_20 * 2}
                        color={COLORS.primaryOrangeHex}
                      />
                      <CustomIcon
                        name="visa"
                        size={FONTSIZE.size_20 * 2}
                        color={COLORS.primaryWhiteHex}
                      />
                    </View>
                    <View style={styles.CreditCardNumberContainer}>
                      <Text style={styles.CreditCardNumber}>3879</Text>
                      <Text style={styles.CreditCardNumber}>1234</Text>
                      <Text style={styles.CreditCardNumber}>1234</Text>
                      <Text style={styles.CreditCardNumber}>1234</Text>
                    </View>
                    <View style={styles.CreditCardRow}>
                      <View style={styles.CreditCardNameContainer}>
                        <Text style={styles.CreditCardNameSubtitle}>
                          Card Holder Name
                        </Text>
                        <Text style={styles.CreditCardNameTitle}>
                          Nguyen An Tran Dien
                        </Text>
                      </View>
                      <View style={styles.CreditCarDateContainer}>
                        <Text style={styles.CreditCardNameSubtitle}>
                          Expiry Date
                        </Text>
                        <Text style={styles.CreditCardNameTitle}>05/22</Text>
                      </View>
                    </View>
                  </LinearGradient>
                </View>
              </View>
            </TouchableOpacity>
            {PaymentList.map((data: any) => (
              <TouchableOpacity
                key={data.name}
                onPress={() => {
                  setPaymentMode(data.name);
                }}>
                <PaymentMethod
                  paymentMode={paymentMode}
                  name={data.name}
                  icon={data.icon}
                  isIcon={data.isIcon}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <PaymentFooter
          buttonTitle={'Pay with ' + paymentMode}
          price={{price: route.params.amount, currency: '$'}}
          buttonPressHandler={buttonPressHandler}></PaymentFooter>
      </View>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  LottieAnimation: {
    flex: 1,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  HeaderContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  EmptyView: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  PaymentOptionsContainer: {
    padding: SPACING.space_15,
    gap: SPACING.space_15,
  },
  CreditCardContainer: {
    padding: SPACING.space_10,
    gap: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_15 * 2,
    borderWidth: 3,
  },
  CreditCardTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginLeft: SPACING.space_10,
  },
  CreditCardBG: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: BORDERRADIUS.radius_25,
  },
  LinearGradientStyle: {
    borderRadius: BORDERRADIUS.radius_25,
    gap: SPACING.space_36,
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_10,
  },
  CreditCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CreditCardNumberContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  CreditCardNumber: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
    letterSpacing: SPACING.space_4 + SPACING.space_2, //khoang cach giua cac chu cai trong <Text>
  },

  CreditCardNameSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  CreditCardNameTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CreditCardNameContainer: {
    alignItems: 'flex-start',
  },
  CreditCarDateContainer: {
    alignItems: 'flex-end',
  },
});

export default PaymentScreen;
function useStripePayment(): {isPaymentReady: any; presentGooglePay: any} {
  throw new Error('Function not implemented.');
}
