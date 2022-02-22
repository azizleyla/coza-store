import slide1 from "../images/slide-01.jpg";
import slide2 from "../images/slide-02.jpg";
import slide3 from "../images/slide-03.jpg";
import product1 from "../images/product1.jpg";
import product01 from "../images/product01.jpg";
import product02 from "../images/product02.jpg";

import product2 from "../images/product2.jpg";
import product2_1 from "../images/product2_1.jpg";
import product2_2 from "../images/product2_2.jpg";

import product3 from "../images/product3.jpg";
import product3_1 from "../images/product3_1.jpg";
import product3_2 from "../images/product3_2.jpg";

import product4 from "../images/product4.jpg";
import product4_1 from "../images/product4_1.jpg";
import product4_2 from "../images/product4_2.jpg";

import product5 from "../images/product5.jpg";
import product5_1 from "../images/product5_1.jpg";
import product5_2 from "../images/product5_2.jpg";

import product6 from "../images/product6.jpg";
import product6_1 from "../images/product6_1.jpg";
import product6_2 from "../images/product6_2.jpg";

import product7 from "../images/product7.jpg";
import product7_1 from "../images/product7_1.jpg";
import product7_2 from "../images/product7_2.jpg";

import product8 from "../images/product8.jpg";
import product8_1 from "../images/product8_1.jpg";
import product8_2 from "../images/product8_2.jpg";

import product9 from "../images/product9.jpg";
import product9_1 from "../images/product9_1.jpg";
import product9_2 from "../images/product9_2.jpg";

import product10 from "../images/product10.jpeg";
import product10_1 from "../images/product10_1.jpeg";
import product10_2 from "../images/product10_2.jpeg";

import product11 from "../images/product11.jpg";
import product11_1 from "../images/product11_1.jpg";
import product11_2 from "../images/product11_2.jpg";

import product12 from "../images/product12.jpg";
import product12_1 from "../images/product12_1.jpg";
import product12_2 from "../images/product12_2.jpg";

import product13 from "../images/product13.jpg";
import product13_1 from "../images/product13_1.jpg";
import product13_2 from "../images/product13_2.jpg";

import product14 from "../images/product14.jpg";
import product14_1 from "../images/product14_1.jpg";
import product14_2 from "../images/product14_2.jpg";

import product15 from "../images/product15.jpg";
import product15_1 from "../images/product15_1.jpg";

import product16 from "../images/product16.jpg";
import product16_1 from "../images/product16_1.jpg";
import product16_2 from "../images/product16_2.jpg";

import product17 from "../images/product17.jpg";

import zoom01 from "../images/zoom01.jpg";
import zoom02 from "../images/zoom02.jpg";
import zoom03 from "../images/zoom03.jpg";
import zoom04 from "../images/zoom04.jpg";
import zoom05 from "../images/zoom05.jpg";
import zoom06 from "../images/zoom06.jpg";
import zoom07 from "../images/zoom07.jpg";
import zoom08 from "../images/zoom08.jpg";
import zoom09 from "../images/zoom09.jpg";
import zoom10 from "../images/zoom10.jpg";
import zoom11 from "../images/zoom11.jpg";
import zoom12 from "../images/zoom12.jpg";
import zoom13 from "../images/zoom13.jpg";
import zoom14 from "../images/zoom14.jpg";
import zoom15 from "../images/zoom15.jpg";
import zoom16 from "../images/zoom16.jpg";
import zoom17 from "../images/zoom17.jpg";
import zoom18 from "../images/zoom18.jpg";
import zoom19 from "../images/zoom19.jpg";
import zoom20 from "../images/zoom20.jpg";
import zoom21 from "../images/zoom21.jpg";
import { t } from "i18next";
//navitems
export const getNavItems = (t) => {
  return [
    {
      id: 1,
      label: t("home"),
      path: "/",
    },
    {
      id: 2,
      label: t("shop"),
      path: "/shop",
    },
    {
      id: 3,
      label: t("features"),
      path: "/features",
    },
    {
      id: 4,
      label: t("blog"),
      path: "/blog",
    },

    {
      id: 5,
      label: t("about"),
      path: "/about",
    },
    {
      id: 6,
      label: t("contact"),
      path: "/contact",
    },
  ];
};
// export const navItems = [
//   {
//     id: 1,
//     label: "home",
//     path: "/",
//   },
//   {
//     id: 2,
//     label: "shop",
//     path: "/shop",
//   },
//   {
//     id: 3,
//     label: "features",
//     path: "/features",
//   },
//   {
//     id: 4,
//     label: "blog",
//     path: "/blog",
//   },

//   {
//     id: 5,
//     label: "about",
//     path: "/about",
//   },
//   {
//     id: 6,
//     label: "contact",
//     path: "/contact",
//   },
// ];

export const sliders = (t) => {
  return [
    {
      img: slide1,
      title: t("women_collection"),
      subtitle: t("new_season"),
    },
    {
      img: slide2,
      title: t("men_collection"),
      subtitle: t("new_arrivial"),
    },
    {
      img: slide3,
      title: t("men_new_season"),
      subtitle: t("jackets_coats"),
    },
  ];
};
//products
export const products = [
  {
    id: 1,
    img: product1,
    images: [product1, product01, product02],
    title: "Espirit Ruffle Shirt",
    description: "95%Cotton,5%Spandex",
    price: 16.64,
    sizes: ["L", "M"],
    colors: [product1, zoom01, zoom02],
    quantity: 1,
    stock: 5,
    category: "women",
    like: false,
    selectedSize: "L",
  },
  {
    id: 2,
    img: product2,
    images: [product2, product2_1, product2_2],
    title: "Herschel Sweater",
    description: "Black Turtleneck Knitwear Sweater",
    price: 35.31,
    sizes: ["S", "L", "M"],
    colors: [product2, zoom03, zoom04],
    quantity: 1,
    stock: 7,
    category: "women",
    like: false,
    selectedSize: "S",
  },
  {
    id: 3,
    img: product3,
    images: [product3, product3_1, product3_2],
    title: "Polo Neck Knitwear Sweater Black",
    description:
      "Product features dynamic fit plain polo collar 10% wool 90% acrylic long sleeve model",
    price: 25.5,
    sizes: ["XS", "XL", "M"],
    colors: [product3, zoom05, zoom06],
    quantity: 1,
    stock: 8,
    category: "men",
    like: false,
    selectedSize: "XS",
  },
  {
    id: 4,
    img: product4,
    images: [product4, product4_1, product4_2],
    title: "Women's Lace-Up Black Boots & Bootie",
    description: "thick sole 4 cm heel is full mold.",
    price: 75.0,
    sizes: ["38", "39", "40"],
    colors: [product4_1, zoom07],
    quantity: 1,
    stock: 3,
    category: "shoes",
    like: false,
    selectedSize: "38",
  },
  {
    id: 5,
    img: product5,
    images: [product5, product5_1, product5_2],
    title: " Women's Water Green Clamshell Baguette Bag",
    description:
      "Green Women's Molded Baguette Bag with Lid Size: Mini Width: 28 Cm Length: 13 Cm Width: 6.",
    price: 34.75,
    sizes: ["S", "XXL"],
    colors: [zoom12, zoom13, zoom14],
    quantity: 1,
    stock: 4,
    category: "bags",
    like: false,
    selectedSize: "S",
  },
  {
    id: 17,
    img: product17,
    images: [product17],
    title: "Ferrucci Fc.11397m.01 Women's Wristwatch",
    description: "Ferrucci brand wrist watch",
    price: 29.64,
    sizes: ["36mm"],
    colors: [],
    quantity: 1,
    stock: 1,
    category: "watches",
    like: false,
    selectedSize: "36mm",
  },
  {
    id: 6,
    img: product6,
    images: [product6, product6_1, product6_2],
    title: "Double Sided Faux Wool Coat",
    description:
      "Long, double-sided faux leather biker jacket with zip fastening, front pockets, faux wool collar and ankles.",
    price: 93.22,
    sizes: ["XL"],
    colors: [],
    quantity: 1,
    stock: 3,
    category: "men",
    like: false,
    selectedSize: "XL",
  },
  {
    id: 7,
    img: product7,
    images: [product7, product7_1, product7_2],
    title: "Front Pocket Faux Wool Thin Jacket",
    description:
      "Slim faux wool jacket with long sleeves, contrast button fastening, front patch pockets.",
    price: 52.66,
    sizes: ["S", "M", "XL", "XXL"],
    colors: [product7, zoom08],
    quantity: 1,
    stock: 5,
    category: "women",
    like: false,
    selectedSize: "S",
  },
  {
    id: 8,
    img: product8,
    images: [product8, product8_1, product8_2],
    title: "Women's Crinkle Body Bag Cross Chest",
    description:
      "More than 100 stocks were offered to be sold at the campaign price.",
    price: 18.96,
    sizes: ["XL", "XXL"],
    colors: [],
    quantity: 1,
    stock: 5,
    category: "bags",
    like: false,
    selectedSize: "XL",
  },

  {
    id: 9,
    img: product9,
    images: [product9, product9_1, product9_2],
    title: "Male Blue Collar Short Sleeve Half Pop",
    description:
      " Model dimensions: Height: 1.75 kilos: 72 Model size: M Fabric content: 98%",
    price: 75.0,
    sizes: ["S", "M", "XXL"],
    colors: [product9, zoom15, zoom16, zoom17],
    quantity: 1,
    stock: 2,
    category: "men",
    like: false,
    selectedSize: "36",
  },
  {
    id: 14,
    img: product14,
    images: [product14, product14_1, product14_2],
    title: "Pro Latest Generation Side Button",
    description: "his product will be sent by NIRVANA AVM .",
    price: 54.79,
    sizes: ["XS", "S", "M"],
    colors: [],
    quantity: 1,
    stock: 8,
    category: "watches",
    like: false,
    selectedSize: "XS",
  },
  {
    id: 10,
    img: product10,
    images: [product10, product10_1, product10_2],
    title: "Defacto Crew Collar Relax Fit Velvet Sweater",
    description:
      "With its stylish half turtleneck model and relax fit comfortable pattern, it is a must have in the wardrobe of style fashion lovers, with its soft velvet texture, you can easily use it with maxi skirts, mini skirts, high-waisted jeans, blazer jackets, woven trousers, jeans and leggings.",
    price: 25.85,
    sizes: ["S", "M", "XL", "XXL"],
    colors: [product10, zoom09, zoom10, zoom11],
    quantity: 1,
    stock: 3,
    category: "women",
    like: false,
    selectedSize: "S",
  },
  {
    id: 11,
    img: product11,
    images: [product11, product11_1, product11_2],
    title:
      "Cool mans New Season Oversize Pattern Winter Cotton Genuine Lumberjack Fabric Shirt",
    description: "56% Wool 44% Polyester",
    price: 63.16,
    sizes: ["S", "M", "XL", "XXL"],
    colors: [],
    quantity: 1,
    stock: 5,
    category: "men",
    like: false,
    selectedSize: "S",
  },
  {
    id: 12,
    img: product12,
    images: [product12, product12_1, product12_2],
    title: "Women's Black Chain Detail Baguette",
    description: "Width:24 cm, height:14 cm, width:5 cm",
    price: 63.15,
    sizes: ["S", "M"],
    colors: [product12, zoom18, zoom19],
    quantity: 1,
    stock: 5,
    category: "bags",
    like: false,
    selectedSize: "S",
  },
  {
    id: 13,
    img: product13,
    images: [product13, product13_1, product13_2],
    title: "Mill Black Skin Women's Boots ",
    description: "This product will be sent by FASHION MILL .",
    price: 18.49,
    sizes: ["36", "39", "40"],
    colors: [product13, zoom20, zoom21],
    quantity: 1,
    stock: 3,
    category: "shoes",
    like: false,
    selectedSize: "36",
  },

  {
    id: 15,
    img: product15,
    images: [product15, product15_1],
    title: "Women's Wristwatch FC 0220",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    price: 86.85,
    sizes: ["XS", "S", "M"],
    colors: [],
    quantity: 1,
    stock: 8,
    category: "watches",
    like: false,
    selectedSize: "XS",
  },
  {
    id: 16,
    img: product16,
    images: [product16, product16_1, product16_2],
    title: "Women's 3-Color Sports Shoes ",
    description:
      "Women's 3-color sneakers - Try4000c, white / red / navy color, 36, 37, 38, 39, 40 size options, material : Vegan leather, sole length : 3,5 cm, inner lining : Textile material, sole material :",
    price: 29.64,
    sizes: ["36", "38", "39"],
    colors: [],
    quantity: 1,
    stock: 3,
    category: "shoes",
    like: false,
    selectedSize: "36",
  },
];
