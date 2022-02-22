import { products } from "../../utils/constants";
import * as actionType from "../actions/actionTypes";
// import { products } from "../../utils/constants";

const initialState = {
  products: products,
  singleProduct: {},
  favoriteProducts: localStorage.getItem("favoriteProducts")
    ? JSON.parse(localStorage.getItem("favoriteProducts"))
    : [],
  filters: {
    categoryQuery: "all",
    sizeQuery: [],
    priceQuery: "",
    checkedQuery: false,
  },
  isOpenSidebar: false,

  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  filteredProducts: products,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS:
      return state;
    case actionType.UPDATE_FILTERS:
      const { name, value, checked } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
          sizeQuery: [...state.filters.sizeQuery, value],
          checkedQuery: checked,
        },
      };
    case actionType.FILTER_PRODUCTS:
      const { products } = state;
      const { categoryQuery, sizeQuery, checkedQuery, priceQuery } =
        state.filters;
      console.log(categoryQuery);
      let tempProducts = [...products];

      if (categoryQuery !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === categoryQuery,
        );
      }

      if (checkedQuery) {
        tempProducts = tempProducts.filter((product) =>
          product.sizes.find((c) => sizeQuery.includes(c)),
        );
      } else {
        tempProducts = tempProducts.filter((product) =>
          product.sizes.find((c) => !sizeQuery.includes(c)),
        );
      }
      // if (priceQuery) {
      //   alert(priceQuery);
      // }
      return {
        ...state,
        filteredProducts: tempProducts,
      };
    case actionType.GET_SINGLE_PRODUCT:
      const selectedProduct = state.products.find(
        (item) => item.id === action.payload,
      );
      return {
        ...state,
        singleProduct: selectedProduct,
      };
    case actionType.ADD_WISHLIST:
      const likedFavorite2 = state.products.find(
        (item) => item.id === action.payload.id,
      );
      const likedFavorite = state.favoriteProducts.find(
        (item) =>
          item.id === action.payload.id + likedFavorite2.selectedSize,
      );

      likedFavorite2.like = !likedFavorite2.like;
      console.log(state.favoriteProducts);

      if (likedFavorite) {
        likedFavorite.like = !likedFavorite.like;
        return {
          ...state,
          products: [...state.products],
        };
      } else {
        const newObj = {
          id: action.payload.id + likedFavorite2.selectedSize,
          img: action.payload.img,
          title: action.payload.title,
          price: action.payload.price,
          like: true,
        };

        return {
          ...state,
          products: [...state.products],
          favoriteProducts: [...state.favoriteProducts, newObj],
        };
      }

    case actionType.REMOVE_ITEM_FROM_WISHLIST:
      const filteredWistlist = state.favoriteProducts.filter(
        (item) => item.id !== action.payload,
      );
      const likedFavorite3 = state.products.find(
        (item) => item.id + item.selectedSize === action.payload,
      );
      if (likedFavorite3) {
        likedFavorite3.like = false;
      }
      localStorage.setItem(
        "favoriteProducts",
        JSON.stringify(filteredWistlist),
      );
      return {
        ...state,
        favoriteProducts: [...filteredWistlist],
        products: [...state.products],
      };
    case actionType.SHOW_SIDEBAR:
      return {
        ...state,
        isOpenSidebar: true,
      };
    case actionType.HIDE_SIDEBAR:
      return {
        ...state,
        isOpenSidebar: false,
      };
    case actionType.ADD_TO_CART:
      const { singleProduct } = action.payload;
      const { amount, size } = action.payload;

      const { title, id, price, img, stock, quantity } = singleProduct;

      const product = state.cart.find((item) => item.id === id + size);

      if (product && product.selectedSize === size) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + size) {
            let newAmount = amount;
            let newQuantity = cartItem.quantity + 1;
            return {
              ...cartItem,
              amount: newAmount,
              quantity: newQuantity,
            };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newProduct = {
          id: id + size,
          title,
          img,
          amount,
          price,
          selectedSize: size,
          stock,
          quantity,
          size,
        };

        return {
          ...state,
          cart: [...state.cart, newProduct],
        };
      }
    case actionType.REMOVE_FROM_CART:
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    case actionType.CHOOSE_SIZE:
      // productItem.selectedSize = action.payload.s;

      return {
        ...state,
        products: state.products,
      };
    case actionType.INCREASE_QUANTITY:
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          let newQuantity = cartItem.quantity + 1;
          if (newQuantity > cartItem.stock) {
            newQuantity = cartItem.stock;
          }
          return {
            ...cartItem,
            quantity: newQuantity,
          };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    case actionType.DECSREASE_QUANITY:
      const tempCart2 = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          let newQuantity = cartItem.quantity - 1;
          if (newQuantity === 0) {
            newQuantity = 1;
          }
          return {
            ...cartItem,
            quantity: newQuantity,
          };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart2 };
    case actionType.DELETEA_ADD_FAVORTIES:
      const deleted = state.cart.find(
        (item) => item.id === action.payload,
      );

      const deleted3 = state.favoriteProducts.find(
        (item) => item.id === action.payload,
      );
      const deleted2 = state.products.find(
        (item) => item.id + deleted.selectedSize === action.payload,
      );

      deleted2.like = true;
      if (!deleted3) {
        deleted.like = true;
      }

      // deleted2.like = true;

      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload,
      );
      return {
        ...state,
        cart: updatedCart,
        products: state.products,
        favoriteProducts: [...state.favoriteProducts, deleted],
      };
    case actionType.FILTER_BY_CATEGORIES:
      const filteredProducts = state.products.filter(
        (item) => item.price <= Number(action.payload),
      );

      console.log(Number(action.payload));
      console.log(filteredProducts);

      return {
        ...state,
      };
    default:
      return state;
  }
};
