import { Category } from '../ts/interfaces/category.d.type';
import { User } from '../ts/interfaces/user.d.type';
import { v4 as uuidv4 } from 'uuid';
import { USER_ROLE } from '../ts/enums/user_enum';
import {
  randomIntFromInterval,
  randomStringByCharsetAndLength,
} from '../common';
import HashStringHandler from '../utils/string.hash';

export const generateUser = async () => {
  const USER_ARRAY: User[] = [
    {
      id: uuidv4(),
      type: USER_ROLE.ADMIN,
      firstName: 'Tuan',
      lastName: 'Tran',
      address: 'HCM',
      email: 'tuantransn2001@gmail.com',
      phoneNumber: '0364977325',
      password: await HashStringHandler.hash('password', 10),
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU',
    },
  ];
  for (let index = 0; index < 49; index++) {
    const userType = index % 2 === 0 ? USER_ROLE.CUSTOMER : USER_ROLE.GUEST;
    const newUser: User = {
      id: uuidv4(),
      type: userType,
      firstName:
        userType + ' ' + randomStringByCharsetAndLength('alphabetic', 4, false),
      lastName:
        userType + ' ' + randomStringByCharsetAndLength('alphabetic', 4, false),
      address: `Số nhà ${randomIntFromInterval(
        1,
        100,
      )},địa chỉ: ${randomStringByCharsetAndLength(
        'alphabetic',
        10,
        false,
      )},Tp.HCM`,
      email: `${randomStringByCharsetAndLength(
        'alphabetic',
        4,
        false,
      )}@gmail.com`,
      phoneNumber: `0${randomStringByCharsetAndLength('numeric', 9, false)}`,
      password: await HashStringHandler.hash('password', 10),
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU',
    };

    USER_ARRAY.push(newUser);
  }
  return USER_ARRAY;
};

export const CATEGORY_ARRAY: Category[] = [
  {
    id: uuidv4(),
    subCategoryID: undefined,
    title: 'SOFAS & CHAIRS',
    subTitle: 'THE KEY TO COMFORT? START WITH AN EXCEPTIONAL SOFA.',
    description: [
      'Every living space is different, whether you want to lounge, entertain or curl up. With our range of sofas and chairs, you’re certain to find the right style for the heart of your home, from traditional designs to modern modulars.',
    ],
    img: 'https://www.lenleys.co.uk/wp-content/uploads/2022/03/Ralphie.webp',
    contents: [
      {
        title: 'SENSATIONAL STYLE',
        content: [
          'Our buyers literally search far and wide across the globe to find the best, high quality fashionable sofas that come from some of biggest and brightest names in design and manufacturing. Sink into designs from Orla Kiely, Collins & Hayes, Stressless, Parker Knoll, Himolla, ercol and many more.',
        ],
      },
      {
        title: `LET'S TRANSFORM YOUR SPACE`,
        subTitle: `At Lenleys Home we have a passion for high quality furniture that suits all tastes and fashions.`,
        content: [
          `Our ranges are available in numerous coloured fabrics and patterns, and we stock a beautiful array of both manual and electric recliner sofas, love seats, and chaise end combinations. Tempted to make a change.`,
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    subCategoryID: undefined,
    title: 'BEDS & BEDROOM',
    subTitle: 'TREAT YOURSELF TO A BETTER NIGHT’S SLEEP, FOREVER.',
    description: [
      `Don’t compromise when it comes to your comfort at night, and choose the right bed and bedroom furniture to turn a bedroom into your own personal sanctuary.`,
      `At Lenleys Home we have a beautiful, extensive selection of beds and bedroom furniture on display in our showrooms ranging from traditional style to modern contemporary designs. `,
    ],
    img: 'https://www.lenleys.co.uk/wp-content/uploads/2022/03/tch302-1024x576.jpg',
    contents: [
      {
        title: 'BEAUTIFUL BEDROOMS',
        content: [
          'We stock an eclectic and beautiful range of beds in all styles and sizes, including Vispring, Dunlopillo, Harrison Spinks, Hypnos, and ercol.',
          ,
          `Finish the look with bedside table, chests of drawers, dressing tables, wardrobes, storage chests and more, all in stunning matching styles. Need a mattress? We stock only the best in store.`,
        ],
      },
      {
        title: `LET'S TRANSFORM YOUR SPACE`,
        subTitle: `At Lenleys Home we have a passion for high quality furniture that suits all tastes and fashions.`,
        content: [
          `Our aim is to provide you with a range of home furnishing solutions that ensures you can realise your vision for your home. We are exceptionally proud of the reputation that we have built up over the years and we’re pleased to be well known for offering such a great range of beds and bedroom furniture in Kent.`,
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    subCategoryID: undefined,
    title: 'LIVING ROOM',
    subTitle: 'BRING YOUR LIVING ROOM TO LIFE.',
    description: [
      `Our range of living room furniture will allow you to build the perfect room to your exacting tastes with minimal fuss.`,
    ],
    img: 'https://www.lenleys.co.uk/wp-content/uploads/2022/06/Avignon-Dining-17.jpg',
    contents: [
      {
        title: 'LUXURIOUS LIVING',
        content: [
          `Whether you want a sleek minimalist look to your chill out zone, or want oodles of sumptuous colours, textures and shapes, we stock everything you need to make your house a home, with coffee tables, lamp tables, console tables, desks and bookcases.`,
        ],
      },
      {
        title: `LET'S TRANSFORM YOUR SPACE`,
        subTitle: `At Lenleys Home we have a passion for high quality furniture that suits all tastes and fashions.`,
        content: [
          `Start browsing and building, and don’t forget to ask for our expert advice….`,
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    subCategoryID: undefined,
    title: 'DINING ROOM',
    subTitle: 'IT’S TIME TO DINE OUT ON YOUR HOME’S NEW LOOK.',
    description: [
      `At Lenleys Home we have a fantastic selection of dining room furniture on offer in our showrooms ranging from traditional style to contemporary design.`,
    ],
    img: 'https://www.lenleys.co.uk/wp-content/uploads/2022/03/tch302-1024x576.jpg',
    contents: [
      {
        title: 'DIVINE DINING',
        content: [
          `We have a striking array of dining furniture, from some of the UK and Europe’s finest manufacturers, including Venjakob, Ercol, Habufa, ALF Italia, TCH, Cattelan Italia, Calligaris and many more. Like all of our furniture, our dining ranges can be bespoke to your needs, with many interchangeable options, finishes and sizes.`,
        ],
      },
      {
        title: `LET'S TRANSFORM YOUR SPACE`,
        subTitle: `At Lenleys Home we have a passion for high quality furniture that suits all tastes and fashions.`,
        content: [
          `Solid wood, sleek glass, marble top, hardened ceramic, traditional, contemporary, Scandinavian – the choice is yours at Lenleys.`,
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    subCategoryID: undefined,
    title: 'FLOORING',
    subTitle: 'INCREDIBLE FLOORING FOR ANY HOME',
    description: [
      `The flooring design studio at Lenleys Home is host to some of the most trusted brands in flooring.`,
    ],
    img: 'https://www.lenleys.co.uk/wp-content/uploads/2022/03/tch302-1024x576.jpg',
    contents: [
      {
        title: 'DIVINE DINING',
        content: [
          `We have a striking array of dining furniture, from some of the UK and Europe’s finest manufacturers, including Venjakob, Ercol, Habufa, ALF Italia, TCH, Cattelan Italia, Calligaris and many more. Like all of our furniture, our dining ranges can be bespoke to your needs, with many interchangeable options, finishes and sizes.`,
        ],
      },
      {
        title: `LET'S TRANSFORM YOUR SPACE`,
        subTitle: `At Lenleys Home we have a passion for high quality furniture that suits all tastes and fashions.`,
        content: [
          `Solid wood, sleek glass, marble top, hardened ceramic, traditional, contemporary, Scandinavian – the choice is yours at Lenleys.`,
        ],
      },
    ],
  },
];
