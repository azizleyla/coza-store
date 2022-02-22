import * as actionType from "./actionTypes";

export function getProducts() {
  return { type: actionType.GET_PRODUCTS };
}

export function updateFilters(e) {
  let name = e.target.name;
  let value = e.target.value;
  let checked = e.target.checked;
  let newV2 = [];
  if (name === "categoryQuery") {
    value = e.target.textContent;
  }

  if (name === "sizeQuery") {
    value = e.target.dataset.size;
    const obj = {
      id: 1,
      size: value,
    };
    checked = e.target.checked;
  }
  if (name === "priceQuery") {
    value = e.target.dataset.price;
    console.log(e.target.dataset.price);
  }

  return {
    type: actionType.UPDATE_FILTERS,
    payload: { name, value, checked },
  };
}

export function getSingleProduct(id) {
  return { type: actionType.GET_SINGLE_PRODUCT, payload: id };
}

export function addWishlist(id, title, img, price, like) {
  return {
    type: actionType.ADD_WISHLIST,
    payload: { id, title, img, price, like },
  };
}
export function removeItemFromWishList(id) {
  return {
    type: actionType.REMOVE_ITEM_FROM_WISHLIST,
    payload: id,
  };
}

export function showSidebar() {
  return { type: actionType.SHOW_SIDEBAR };
}
export function hideSidebar() {
  return { type: actionType.HIDE_SIDEBAR };
}

export function addToCart(singleProduct, amount, size) {
  return {
    type: actionType.ADD_TO_CART,
    payload: { singleProduct, amount, size },
  };
}
export function deleteCartItem(id) {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: id,
  };
}

export function increaseQuantity(id) {
  return {
    type: actionType.INCREASE_QUANTITY,
    payload: id,
  };
}
export function decreaseQuantity(id) {
  return {
    type: actionType.DECSREASE_QUANITY,
    payload: id,
  };
}
export function deleteAddtoFavorites(id) {
  return {
    type: actionType.DELETEA_ADD_FAVORTIES,
    payload: id,
  };
}

export const filterByCategories = (value) => {
  return {
    type: actionType.FILTER_BY_CATEGORIES,
    payload: value,
  };
};
