// This file should be in the same directory as sp13.htm
const seats = {
  normalSeats: [
    {
      type: "一般席",
      row: [1, 12],
      number: [1, 9],
      isOdd: true,
      perspectiveImage: "section_3.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [1, 12],
      number: [11, 33],
      isOdd: true,
      perspectiveImage: "section_2.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [13, 20],
      number: [1, 9],
      isOdd: true,
      perspectiveImage: "section_8.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [13, 20],
      number: [11, 33],
      isOdd: true,
      perspectiveImage: "section_7.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [1, 12],
      number: [2, 10],
      isOdd: false,
      perspectiveImage: "section_3.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [1, 12],
      number: [12, 34],
      isOdd: false,
      perspectiveImage: "section_4.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [13, 20],
      number: [2, 10],
      isOdd: false,
      perspectiveImage: "section_8.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [13, 20],
      number: [12, 34],
      isOdd: false,
      perspectiveImage: "section_9.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [21, 27],
      number: [1, 9],
      isOdd: true,
      perspectiveImage: "section_8.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "一般席",
      row: [21, 27],
      number: [11, 33],
      isOdd: true,
      perspectiveImage: "section_7.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "一般席",
      row: [28, 35],
      number: [1, 9],
      isOdd: true,
      perspectiveImage: "section_8.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "一般席",
      row: [28, 35],
      number: [11, 33],
      isOdd: true,
      perspectiveImage: "section_7.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "一般席",
      row: [21, 27],
      number: [2, 10],
      isOdd: false,
      perspectiveImage: "section_8.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [21, 27],
      number: [12, 34],
      isOdd: false,
      perspectiveImage: "section_9.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [28, 35],
      number: [2, 10],
      isOdd: false,
      perspectiveImage: "section_8.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [28, 35],
      number: [12, 34],
      isOdd: false,
      perspectiveImage: "section_9.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [36, 39],
      number: [1, 9],
      isOdd: true,
      perspectiveImage: "section_14.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_L",
    },
    {
      type: "一般席",
      row: [36, 39],
      number: [11, 33],
      isOdd: true,
      perspectiveImage: "section_13.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_L",
    },
    {
      type: "一般席",
      row: [36, 39],
      number: [2, 10],
      isOdd: false,
      perspectiveImage: "section_14.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_R",
    },
    {
      type: "一般席",
      row: [36, 39],
      number: [12, 34],
      isOdd: false,
      perspectiveImage: "section_15.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_R",
    },
    {
      type: "一般席",
      row: [40],
      number: [1, 9],
      isOdd: true,
      perspectiveImage: "section_14.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "一般席",
      row: [40],
      number: [2, 10],
      isOdd: false,
      perspectiveImage: "section_14.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_5F_R",
    },
    {
      type: "一般席",
      row: [40],
      number: [11, 33],
      isOdd: true,
      perspectiveImage: "section_13.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_L",
    },
    {
      type: "一般席",
      row: [40],
      number: [12, 34],
      isOdd: false,
      perspectiveImage: "section_15.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_R",
    },
    {
      type: "一般席",
      row: [41],
      number: [1, 9],
      isOdd: true,
      perspectiveImage: "section_14.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "一般席",
      row: [41],
      number: [11, 33],
      isOdd: true,
      perspectiveImage: "section_13.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_L",
    },
    {
      type: "一般席",
      row: [41],
      number: [2, 10],
      isOdd: false,
      perspectiveImage: "section_13.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
    {
      type: "一般席",
      row: [41],
      number: [12, 34],
      isOdd: false,
      perspectiveImage: "section_15.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_R",
    },
    {
      type: "一般席",
      row: [42, 51],
      number: [1, 9],
      isOdd: true,
      perspectiveImage: "section_22.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "一般席",
      row: [42, 51],
      number: [2, 10],
      isOdd: false,
      perspectiveImage: "section_22.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
    {
      type: "一般席",
      row: [42, 51],
      number: [11, 33],
      isOdd: true,
      perspectiveImage: "section_21.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "一般席",
      row: [42, 51],
      number: [12, 34],
      isOdd: false,
      perspectiveImage: "section_23.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
    {
      type: "一般席",
      row: [52, 53],
      number: [11, 33],
      isOdd: true,
      perspectiveImage: "section_21.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "一般席",
      row: [52, 53],
      number: [12, 34],
      isOdd: false,
      perspectiveImage: "section_23.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
    {
      type: "一般席",
      row: [54],
      number: [11, 29],
      isOdd: true,
      perspectiveImage: "section_21.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "一般席",
      row: [55],
      number: [11, 25],
      isOdd: true,
      perspectiveImage: "section_21.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "一般席",
      row: [54],
      number: [12, 30],
      isOdd: false,
      perspectiveImage: "section_23.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
    {
      type: "一般席",
      row: [55],
      number: [12, 26],
      isOdd: false,
      perspectiveImage: "section_23.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
    {
      type: "一般席",
      row: [4, 8],
      number: [35, 41],
      isOdd: true,
      perspectiveImage: "section_1.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [9],
      number: [35, 43],
      isOdd: true,
      perspectiveImage: "section_1.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [10],
      number: [35, 45],
      isOdd: true,
      perspectiveImage: "section_1.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [11],
      number: [35, 47],
      isOdd: true,
      perspectiveImage: "section_1.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [14],
      number: [35, 37],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [15],
      number: [35, 39],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [16],
      number: [35, 43],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [17, 18],
      number: [35, 45],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [19, 20],
      number: [35, 47],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [21],
      number: [35, 49],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [22],
      number: [35, 39],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "一般席",
      row: [22],
      number: [41, 53],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "一般席",
      row: [23],
      number: [35, 55],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "一般席",
      row: [24],
      number: [35, 53],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "一般席",
      row: [25],
      number: [35, 55],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "一般席",
      row: [26],
      number: [35, 53],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "一般席",
      row: [27],
      number: [35, 55],
      isOdd: true,
      perspectiveImage: "section_6.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "一般席",
      row: [28, 29],
      number: [35, 49],
      isOdd: true,
      perspectiveImage: "section_12.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "一般席",
      row: [30, 36],
      number: [35, 53],
      isOdd: true,
      perspectiveImage: "section_12.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "一般席",
      row: [37, 41],
      number: [35, 53],
      isOdd: true,
      perspectiveImage: "section_12.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_L",
    },
    {
      type: "一般席",
      row: [42, 43],
      number: [35, 49],
      isOdd: true,
      perspectiveImage: "section_20.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_L",
    },
    {
      type: "一般席",
      row: [44, 46],
      number: [35, 51],
      isOdd: true,
      perspectiveImage: "section_20.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_L",
    },
    {
      type: "一般席",
      row: [47, 53],
      number: [35, 55],
      isOdd: true,
      perspectiveImage: "section_20.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "一般席",
      row: [54],
      number: [31, 51],
      isOdd: true,
      perspectiveImage: "section_20.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "一般席",
      row: [4, 8],
      number: [36, 42],
      isOdd: false,
      perspectiveImage: "section_5.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [9],
      number: [36, 44],
      isOdd: false,
      perspectiveImage: "section_5.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [10],
      number: [36, 46],
      isOdd: false,
      perspectiveImage: "section_5.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [11],
      number: [36, 48],
      isOdd: false,
      perspectiveImage: "section_5.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [14],
      number: [36, 38],
      isOdd: false,
      perspectiveImage: "section_10.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [15],
      number: [36, 40],
      isOdd: false,
      perspectiveImage: "section_10.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [16],
      number: [36, 44],
      isOdd: false,
      perspectiveImage: "section_10.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [17, 18],
      number: [36, 46],
      isOdd: false,
      perspectiveImage: "section_10.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [19, 20],
      number: [36, 48],
      isOdd: false,
      perspectiveImage: "section_10.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "一般席",
      row: [21],
      number: [36, 50],
      isOdd: false,
      perspectiveImage: "section_10.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [22],
      number: [36, 54],
      isOdd: false,
      perspectiveImage: "section_10.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [23],
      number: [36, 56],
      isOdd: false,
      perspectiveImage: "section_10.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [24],
      number: [36, 54],
      isOdd: false,
      perspectiveImage: "section_10.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [25],
      number: [36, 56],
      isOdd: false,
      perspectiveImage: "section_10.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [26],
      number: [36, 54],
      isOdd: false,
      perspectiveImage: "section_10.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [27],
      number: [36, 56],
      isOdd: false,
      perspectiveImage: "section_10.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [28, 29],
      number: [36, 50],
      isOdd: false,
      perspectiveImage: "section_16.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [30, 36],
      number: [36, 54],
      isOdd: false,
      perspectiveImage: "section_16.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "一般席",
      row: [37, 41],
      number: [36, 54],
      isOdd: false,
      perspectiveImage: "section_16.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_R",
    },
    {
      type: "一般席",
      row: [42, 43],
      number: [36, 50],
      isOdd: false,
      perspectiveImage: "section_24.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_R",
    },
    {
      type: "一般席",
      row: [44, 46],
      number: [36, 52],
      isOdd: false,
      perspectiveImage: "section_24.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_R",
    },
    {
      type: "一般席",
      row: [47, 53],
      number: [36, 56],
      isOdd: false,
      perspectiveImage: "section_24.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
    {
      type: "一般席",
      row: [54],
      number: [32, 52],
      isOdd: false,
      perspectiveImage: "section_24.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
  ],
  reservedSeats: [
    {
      type: "包廂席",
      row: [1],
      number: [1, 5],
      isOdd: true,
      perspectiveImage: "section_11.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "包廂席",
      row: [2, 6],
      number: [1, 7],
      isOdd: true,
      perspectiveImage: "section_11.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "包廂席",
      row: [7, 9],
      number: [1, 3],
      isOdd: true,
      perspectiveImage: "section_11.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "包廂席",
      row: [10],
      number: [1, 7],
      isOdd: true,
      perspectiveImage: "section_11.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_L",
    },
    {
      type: "包廂席",
      row: [11, 18],
      number: [1, 7],
      isOdd: true,
      perspectiveImage: "section_18.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_L",
    },
    {
      type: "包廂席",
      row: [19],
      number: [1, 3],
      isOdd: true,
      perspectiveImage: "section_18.png",
      route: "由5F/6F入場",
      routeEnglish: "Admission from 5F/6F",
      routeImage: "_L_56F",
    },
    {
      type: "包廂席",
      row: [20, 21],
      number: [1, 7],
      isOdd: true,
      perspectiveImage: "section_19.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_L",
    },
    {
      type: "包廂席",
      row: [22, 27],
      number: [1, 11],
      isOdd: true,
      perspectiveImage: "section_19.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_L",
    },
    {
      type: "包廂席",
      row: [28, 30],
      number: [1, 11],
      isOdd: true,
      perspectiveImage: "section_19.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "包廂席",
      row: [1],
      number: [2, 6],
      isOdd: false,
      perspectiveImage: "section_17.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "包廂席",
      row: [2, 6],
      number: [2, 8],
      isOdd: false,
      perspectiveImage: "section_17.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "包廂席",
      row: [7, 9],
      number: [2, 4],
      isOdd: false,
      perspectiveImage: "section_17.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "包廂席",
      row: [10],
      number: [2, 8],
      isOdd: false,
      perspectiveImage: "section_17.png",
      route: "由4F入場",
      routeEnglish: "Admission from 4F",
      routeImage: "_4F_R",
    },
    {
      type: "包廂席",
      row: [11, 18],
      number: [2, 8],
      isOdd: false,
      perspectiveImage: "section_25.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_R",
    },
    {
      type: "包廂席",
      row: [19],
      number: [2, 4],
      isOdd: false,
      perspectiveImage: "section_25.png",
      route: "由5F/6F入場",
      routeEnglish: "Admission from 5F/6F",
      routeImage: "_R_56F",
    },
    {
      type: "包廂席",
      row: [20, 21],
      number: [2, 8],
      isOdd: false,
      perspectiveImage: "section_26.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_R",
    },
    {
      type: "包廂席",
      row: [22, 27],
      number: [2, 12],
      isOdd: false,
      perspectiveImage: "section_26.png",
      route: "由5F入場",
      routeEnglish: "Admission from 5F",
      routeImage: "_5F_R",
    },
    {
      type: "包廂席",
      row: [28, 30],
      number: [2, 12],
      isOdd: false,
      perspectiveImage: "section_26.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
    {
      type: "包廂席",
      row: [31, 34],
      number: [1, 11],
      isOdd: true,
      perspectiveImage: "section_29.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "包廂席",
      row: [31, 34],
      number: [13, 35],
      isOdd: true,
      perspectiveImage: "section_28.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "包廂席",
      row: [31, 34],
      number: [37, 47],
      isOdd: true,
      perspectiveImage: "section_27.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "包廂席",
      row: [35],
      number: [1, 11],
      isOdd: true,
      perspectiveImage: "section_29.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "包廂席",
      row: [35],
      number: [13, 29],
      isOdd: true,
      perspectiveImage: "section_28.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_L",
    },
    {
      type: "包廂席",
      row: [31, 34],
      number: [2, 12],
      isOdd: false,
      perspectiveImage: "section_29.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
    {
      type: "包廂席",
      row: [31, 34],
      number: [14, 36],
      isOdd: false,
      perspectiveImage: "section_30.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
    {
      type: "包廂席",
      row: [31, 34],
      number: [38, 48],
      isOdd: false,
      perspectiveImage: "section_31.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
    {
      type: "包廂席",
      row: [35],
      number: [1, 12],
      isOdd: false,
      perspectiveImage: "section_29.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
    {
      type: "包廂席",
      row: [35],
      number: [14, 30],
      isOdd: false,
      perspectiveImage: "section_30.png",
      route: "由6F入場",
      routeEnglish: "Admission from 6F",
      routeImage: "_6F_R",
    },
  ],
  vipSeats: [
    {
      type: "貴賓席",
      number: [2, 6],
      isOdd: false,
      perspectiveImage: "section_3.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "貴賓席",
      number: [8, 20],
      isOdd: false,
      perspectiveImage: "section_4.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "貴賓席",
      number: [1, 7],
      isOdd: true,
      perspectiveImage: "section_3.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "貴賓席",
      number: [9, 21],
      isOdd: true,
      perspectiveImage: "section_2.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
  ],
  wheelchairSeats: [
    {
      type: "輪椅席",
      number: [1, 13],
      isOdd: true,
      perspectiveImage: "section_1.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "輪椅席",
      number: [15],
      isOdd: true,
      perspectiveImage: "section_2.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_L",
    },
    {
      type: "輪椅席",
      number: [16],
      isOdd: false,
      perspectiveImage: "section_4.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
    {
      type: "輪椅席",
      number: [2, 14],
      isOdd: false,
      perspectiveImage: "section_5.png",
      route: "由3F入場",
      routeEnglish: "Admission from 3F",
      routeImage: "_3F_R",
    },
  ],
  normalSeatsMap: {
    1: [1, 34],
    2: [1, 34],
    3: [1, 34],
    4: [1, 42],
    5: [1, 42],
    6: [1, 42],
    7: [1, 42],
    8: [1, 42],
    9: [1, 44],
    10: [1, 46],
    11: [1, 48],
    12: [1, 34],
    13: [1, 34],
    14: [1, 38],
    15: [1, 40],
    16: [1, 44],
    17: [1, 46],
    18: [1, 46],
    19: [1, 48],
    20: [1, 48],
    21: [1, 50],
    22: [1, 54],
    23: [1, 56],
    24: [1, 54],
    25: [1, 56],
    26: [1, 54],
    27: [1, 56],
    28: [1, 50],
    29: [1, 50],
    30: [1, 54],
    31: [1, 54],
    32: [1, 54],
    33: [1, 54],
    34: [1, 54],
    35: [1, 54],
    36: [1, 54],
    37: [1, 54],
    38: [1, 54],
    39: [1, 54],
    40: [1, 54],
    41: [1, 54],
    42: [1, 50],
    43: [1, 50],
    44: [1, 52],
    45: [1, 52],
    46: [1, 52],
    47: [1, 56],
    48: [1, 56],
    49: [1, 56],
    50: [1, 56],
    51: [1, 56],
    52: [11, 56],
    53: [11, 56],
    54: [11, 52],
    55: [11, 26],
  },
  reservedSeatsMap: {
    1: [1, 6],
    2: [1, 8],
    3: [1, 8],
    4: [1, 8],
    5: [1, 8],
    6: [1, 8],
    7: [1, 4],
    8: [1, 4],
    9: [1, 4],
    10: [1, 8],
    11: [1, 8],
    12: [1, 8],
    13: [1, 8],
    14: [1, 8],
    15: [1, 8],
    16: [1, 8],
    17: [1, 8],
    18: [1, 8],
    19: [1, 4],
    20: [1, 8],
    21: [1, 8],
    22: [1, 12],
    23: [1, 12],
    24: [1, 12],
    25: [1, 12],
    26: [1, 12],
    27: [1, 12],
    28: [1, 12],
    29: [1, 12],
    30: [1, 12],
    31: [1, 48],
    32: [1, 48],
    33: [1, 48],
    34: [1, 48],
    35: [1, 30],
  },
};
