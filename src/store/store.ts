import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WineData from '../data/WineData';
import BeerData from '../data/BeerData';

export const useStore = create(
  persist(
    (set, get) => ({
      WineList: WineData,
      BeerList: BeerData,
      CartPrice: 0,
      FavoriteList: [],
      CartList: [],
      OrderHistoryList: [],
      addToCart: (cartItem: any) =>
        set(
          produce(state => {
            let found = false;
            for (let i = 0; i < state.CartList.length; i++) {
              if (state.CartList[i].id == cartItem.id) {
                found = true;
                let size = false;
                for (let j = 0; j < state.CartList[i].prices.length; j++) {
                  if (
                    state.CartList[i].prices[j].size == cartItem.prices[0].size
                  ) {
                    size = true;
                    state.CartList[i].prices[j].quantity++;
                    break;
                  }
                }
                if (size == false) {
                  state.CartList[i].prices.push(cartItem.prices[0]);
                }
                state.CartList[i].prices.sort((a: any, b: any) => {
                  if (a.size > b.size) {
                    return -1;
                  }
                  if (a.size < b.size) {
                    return 1;
                  }
                  return 0;
                });
                break;
              }
            }
            if (found == false) {
              state.CartList.push(cartItem);
            }
          }),
        ),
      caculateCartPrice: () =>
        set(
          produce(state => {
            let totalPrice = 0;
            for (let i = 0; i < state.CartList.length; i++) {
              let tempprice = 0;
              for (let j = 0; j < state.CartList[i].prices.length; j++) {
                tempprice =
                  tempprice +
                  parseFloat(state.CartList[i].prices[j].price) *
                    state.CartList[i].prices[j].quantity;
              }
              state.CartList[i].ItemPrice = tempprice.toFixed(2).toString();
              totalPrice = totalPrice + tempprice;
            }
            state.CartPrice = totalPrice.toFixed(2).toString();
          }),
        ),
      addToFavoriteList: (type: string, id: string) =>
        set(
          produce(state => {
            if (type == 'Wine') {
              for (let i = 0; i < state.WineList.length; i++) {
                if (state.WineList[i].id == id) {
                  if (state.WineList[i].favourite == false) {
                    state.WineList[i].favourite = true;
                    state.FavoriteList.unshift(state.WineList[i]);
                  }
                  break;
                }
              }
            } else if (type == 'Beer') {
              for (let i = 0; i < state.BeerList.length; i++) {
                if (state.BeerList[i].id == id) {
                  if (state.BeerList[i].favourite == false) {
                    state.BeerList[i].favourite = true;
                    state.FavoriteList.unshift(state.BeerList[i]);
                  }
                  break;
                }
              }
            }
          }),
        ),
      deleteFromFavoriteList: (type: string, id: string) =>
        set(
          produce(state => {
            if (type == 'Wine') {
              for (let i = 0; i < state.WineList.length; i++) {
                if (state.WineList[i].id == id) {
                  if (state.WineList[i].favourite == true) {
                    state.WineList[i].favourite = false;
                  }
                  break;
                }
              }
            } else if (type == 'Beer') {
              for (let i = 0; i < state.BeerList.length; i++) {
                if (state.BeerList[i].id == id) {
                  if (state.BeerList[i].favourite == true) {
                    state.BeerList[i].favourite = false;
                  }
                  break;
                }
              }
            }
            let spliceIndex = -1;
            for (let i = 0; i < state.FavoriteList.length; i++) {
              if (state.FavoriteList[i].id == id) {
                spliceIndex = i;
                break;
              }
            }
            state.FavoriteList.splice(spliceIndex, 1);
          }),
        ),
      incrementCartItemQuantity: (id: string, size: string) =>
        set(
          produce(state => {
            for (let i = 0; i < state.CartList.length; i++)
              if (state.CartList[i].id == id) {
                for (let j = 0; state.CartList[i].prices.length; j++) {
                  if (state.CartList[i].prices[j].size == size) {
                    state.CartList[i].prices[j].quantity++;
                    break;
                  }
                }
              }
          }),
        ),
      decrementCartItemQuantity: (id: string, size: string) =>
        set(
          produce(state => {
            for (let i = 0; i < state.CartList.length; i++)
              if (state.CartList[i].id == id) {
                for (let j = 0; state.CartList[i].prices.length; j++) {
                  if (state.CartList[i].prices[j].size == size) {
                    if (state.CartList[i].prices.length > 1) {
                      if (state.CartList[i].prices[j].quantity > 1) {
                        state.CartList[i].prices[j].quantity--;
                      } else {
                        state.CartList[i].prices.splice(j, 1);
                      }
                    } else {
                      if (state.CartList[i].prices[j].quantity > 1) {
                        state.CartList[i].prices[j].quantity--;
                      } else {
                        state.CartList.splice(i, 1);
                      }
                    }
                    break;
                  }
                }
              }
          }),
        ),
      addToOrderHistoryListFromCart: () =>
        set(
          produce(state => {
            let temp = state.CartList.reduce(
              (accumulator: number, currentValue: any) =>
                accumulator + parseFloat(currentValue.ItemPrice),
              0,
            );
            if (state.OrderHistoryList.length > 0) {
              state.OrderHistoryList.unshift({
                OrderDate:
                  new Date().toDateString() +
                  ' ' +
                  new Date().toLocaleTimeString(),
                CartList: state.CartList,
                CartListPrice: temp.toFixed(2).toString(),
              });
            } else {
              state.OrderHistoryList.push({
                OrderDate:
                  new Date().toDateString() +
                  ' ' +
                  new Date().toLocaleTimeString(),
                CartList: state.CartList,
                CartListPrice: temp.toFixed(2).toString(),
              });
            }
            state.CartList = [];
          }),
        ),
    }),
    {
      name: 'alcoholic-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
