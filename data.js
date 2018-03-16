import moment from 'moment';

// Hardcode days for the sake of simplicity
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const movies = [
  {
    title: 'Nuevo Raices',
    poster: 'https://images.almundo.com/201/18000000/17040000/17034200/17034190/565a4192_b.jpg',
    genre: 'Hotel',
    days,
    times,
  },
  {
    title: 'Marcopolo',
    poster: 'https://images.almundo.com/201/5000000/4050000/4041500/4041467/4041467_16_b.jpg',
    genre: 'Suite',
    days,
    times,
  },
  {
    title: 'Complejo',
    poster: 'https://images.almundo.com/201/5000000/4020000/4011700/4011688/4011688_8_b.jpg',
    genre: 'Turismo',
    days,
    times,
  },
  {
    title: 'Crucero',
    poster: 'https://images.almundo.com/201/5000000/4920000/4916900/4916830/4916830_46_b.jpg',
    genre: 'Hotel',
    days,
    times,
  },
  {
    title: 'Grand',
    poster: 'https://images.almundo.com/201/9000000/8800000/8795900/8795860/8795860_3_b.jpg',
    genre: 'Hotel',
    days,
    times,
  },
  {
    title: 'Pueblito',
    poster: 'https://images.almundo.com/201/11000000/10590000/10582800/10582774/10582774_6_b.jpg',
    genre: 'Hotel',
    days,
    times,
  },
  {
    title: 'Falls',
    poster: 'https://images.almundo.com/201/17000000/16830000/16828100/16828044/9ffd4048_b.jpg',
    genre: 'Hotel',
    days,
    times,
  },
  {
    title: 'Eagle',
    poster: 'https://images.almundo.com/201/4000000/3290000/3281500/3281425/3281425_89_b.jpg',
    genre: 'Hotel',
    days,
    times,
  },
  {
    title: 'Yvy',
    poster: 'https://images.almundo.com/201/7000000/6920000/6915200/6915158/6915158_4_b.jpg',
    genre: 'Selva',
    days,
    times,
  },
  {
    title: 'Green Room',
    poster: 'https://images.almundo.com/201/11000000/10990000/10985300/10985263/10985263_16_b.jpg',
    genre: 'Hotel',
    days,
    times,
  },
  {
    title: 'Tropical',
    poster: 'http://aff.bstatic.com/images/hotel/max500/950/95013560.jpg',
    genre: 'Hotel',
    days,
    times,
  },
  {
    title: 'longe',
    poster: 'https://images.almundo.com/201/5000000/4150000/4140600/4140549/4140549_19_b.jpg',
    genre: 'Selva',
    days,
    times,
  },
  {
    title: 'Carmen',
    poster: 'https://images.almundo.com/201/2000000/1600000/1593100/1593099/1593099_128_b.jpg',
    genre: 'Hotel',
    days,
    times,
  },
  {
    title: 'Sing Street',
    poster: 'https://images.almundo.com/201/4000000/3470000/3469400/3469387/3469387_71_b.jpg',
    genre: 'Cabana',
    days,
    times,
  },
  {
    title: 'Chaman',
    poster: 'http://aff.bstatic.com/images/hotel/max500/951/95129234.jpg',
    genre: 'Posada',
    days,
    times,
  },
  {
    title: 'Sing Street',
    poster: 'https://images.almundo.com/201/4000000/3470000/3469400/3469387/3469387_71_b.jpg',
    genre: 'Cabana',
    days,
    times,
  },
  {
    title: 'Marcopolo',
    poster: 'https://images.almundo.com/201/5000000/4050000/4041500/4041467/4041467_16_b.jpg',
    genre: 'Suite',
    days,
    times,
  },
  {
    title: 'Cantera',
    poster: 'https://images.almundo.com/201/4000000/3030000/3021000/3020960/3020960_179_b.jpg',
    genre: 'Selva',
    days,
    times,
  },
];
