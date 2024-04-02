document.addEventListener('DOMContentLoaded', function() {

const characters = [
  {
    name: 'Albert Einstein',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/450px-Albert_Einstein_Head.jpg',
    answers: [
      { questionIndex: 0,  answer: 'yes' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'yes' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'yes' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
  name: 'Marie Curie',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/640px-Marie_Curie_c1920.jpg',
  answers: [
    { questionIndex: 0,  answer: 'no' },
    { questionIndex: 1,  answer: 'no' },
    { questionIndex: 2,  answer: 'no' },
    { questionIndex: 3,  answer: 'no' },
    { questionIndex: 4,  answer: 'no' },
    { questionIndex: 5,  answer: 'no' },
    { questionIndex: 6,  answer: 'no' },
    { questionIndex: 7,  answer: 'no' },
    { questionIndex: 8,  answer: 'no' },
    { questionIndex: 9,  answer: 'no' },
    { questionIndex: 10, answer: 'no' },
    { questionIndex: 11, answer: 'no' },
    { questionIndex: 12, answer: 'no' },
    { questionIndex: 13, answer: 'no' },
    { questionIndex: 14, answer: 'no' },
    { questionIndex: 15, answer: 'no' },
    { questionIndex: 16, answer: 'no' },
    { questionIndex: 17, answer: 'yes' },
    { questionIndex: 18, answer: 'no' },
    { questionIndex: 19, answer: 'no' },
    { questionIndex: 20, answer: 'no' },
    { questionIndex: 21, answer: 'yes' },
    { questionIndex: 22, answer: 'no' },
    { questionIndex: 23, answer: 'no' },
    { questionIndex: 24, answer: 'no' },
    { questionIndex: 25, answer: 'no' },
    { questionIndex: 26, answer: 'no' },
    { questionIndex: 27, answer: 'no' },
    { questionIndex: 28, answer: 'no' },
    { questionIndex: 29, answer: 'no' },
    { questionIndex: 30, answer: 'no' },
    { questionIndex: 31, answer: 'no' },
    { questionIndex: 32, answer: 'no' },
    { questionIndex: 33, answer: 'no' },
    { questionIndex: 34, answer: 'no' },
    { questionIndex: 35, answer: 'no' },
    { questionIndex: 36, answer: 'no' },
    { questionIndex: 37, answer: 'no' },
    { questionIndex: 38, answer: 'no' },
    { questionIndex: 39, answer: 'no' }
  ]
},

{
    name: 'Steve Jobs',
    image: 'ciao',
    answers: [
        { questionIndex: 0,  answer: 'no' },
        { questionIndex: 1,  answer: 'no' },
        { questionIndex: 2,  answer: 'yes' },
        { questionIndex: 3,  answer: 'no' },
        { questionIndex: 4,  answer: 'no' },
        { questionIndex: 5,  answer: 'no' },
        { questionIndex: 6,  answer: 'no' },
        { questionIndex: 7,  answer: 'no' },
        { questionIndex: 8,  answer: 'no' },
        { questionIndex: 9,  answer: 'no' },
        { questionIndex: 10, answer: 'no' },
        { questionIndex: 11, answer: 'no' },
        { questionIndex: 12, answer: 'no' },
        { questionIndex: 13, answer: 'no' },
        { questionIndex: 14, answer: 'no' },
        { questionIndex: 15, answer: 'no' },
        { questionIndex: 16, answer: 'no' },
        { questionIndex: 17, answer: 'no' },
        { questionIndex: 18, answer: 'no' },
        { questionIndex: 19, answer: 'no' },
        { questionIndex: 20, answer: 'no' },
        { questionIndex: 21, answer: 'no' },
        { questionIndex: 22, answer: 'yes' },
        { questionIndex: 23, answer: 'no' },
        { questionIndex: 24, answer: 'no' },
        { questionIndex: 25, answer: 'no' },
        { questionIndex: 26, answer: 'no' },
        { questionIndex: 27, answer: 'no' },
        { questionIndex: 28, answer: 'no' },
        { questionIndex: 29, answer: 'no' },
        { questionIndex: 30, answer: 'no' },
        { questionIndex: 31, answer: 'no' },
        { questionIndex: 32, answer: 'no' },
        { questionIndex: 33, answer: 'no' },
        { questionIndex: 34, answer: 'no' },
        { questionIndex: 35, answer: 'no' },
        { questionIndex: 36, answer: 'no' },
        { questionIndex: 37, answer: 'no' },
        { questionIndex: 38, answer: 'no' },
        { questionIndex: 39, answer: 'no' }
    ]
},


{
    name: 'Ada Lovelace',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'yes' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'yes' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Elon Musk',
    image: 'data:image/jpeg;base64,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',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'yes' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'yes' },
      { questionIndex: 25, answer: 'yes' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Bill Gates',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bill_Gates_at_the_MSC_summit_-_2023_%2852695822752%29_%28cropped%29.jpg/1200px-Bill_Gates_at_the_MSC_summit_-_2023_%2852695822752%29_%28cropped%29.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'yes' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'yes' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Jane Goodall',
    image: 'https://news.janegoodall.org/wp-content/uploads/2019/12/merlin_157327443_3fb44fa9-9947-42a4-a2ca-730ecedbb181-superJumbo.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'yes' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'yes' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Tim Berners-Lee',
    image: 'https://cdn.britannica.com/94/123894-050-53EC378E/Tim-Berners-Lee-2005.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'yes' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'yes' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Stephen Hawking',
    image: 'https://cdn.studenti.stbm.it/images/2017/03/30/stephen-hawking-orig.jpeg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'yes' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'yes' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Grace Hopper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'yes' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'yes' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Nikola Tesla',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Tesla_Sarony.jpg/800px-Tesla_Sarony.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'yes' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'yes' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Alan Turing',
    image: 'https://www.torinoscienza.it/sites/default/files/risorse/personaggi/im/alan_turing_pv.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'yes' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'yes' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Rosalind Franklin',
    image: 'https://www.storicang.it/medio/2021/07/20/rosalind-franklin-la-scienziata-che-scopri-la-struttura-del-dna_442acc64_800x1149.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'yes' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'yes' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Mark Zuckerberg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'yes' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'yes' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Shinya Yamanaka',
    image: 'https://www.nobelprize.org/images/yamanaka-15177-portrait-medium.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'yes' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'yes' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Katherine Johnson',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Katherine_Johnson_in_2008.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'yes' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'yes' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Jeff Bezos',
    image: 'https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'yes' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'yes' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Richard Feynman',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Richard_Feynman_1959.png/1200px-Richard_Feynman_1959.png',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'yes' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'yes' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Francesco Marzano',
    image: 'https://preview.redd.it/nuova-emote-del-marzone-v0-5das4cq84d3b1.jpg?auto=webp&s=3662b26bea8f85b5bfdfede4664dd24116ff67e6',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'yes' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'yes' },
      { questionIndex: 39, answer: 'no' }
    ]
  },
{
    name: 'Sundar Pichai',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_Pichai_%282023%29_cropped.jpg/800px-Sundar_Pichai_%282023%29_cropped.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'yes' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'yes' }
    ]
  },

{
    name: 'The_Real_Scu_',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_Pichai_%282023%29_cropped.jpg/800px-Sundar_Pichai_%282023%29_cropped.jpg',
    answers: [
      { questionIndex: 0,  answer: 'yes' },
      { questionIndex: 1,  answer: 'yes' },
      { questionIndex: 2,  answer: 'yes' },
      { questionIndex: 3,  answer: 'yes' },
      { questionIndex: 4,  answer: 'yes' },
      { questionIndex: 5,  answer: 'yes' },
      { questionIndex: 6,  answer: 'yes' },
      { questionIndex: 7,  answer: 'yes' },
      { questionIndex: 8,  answer: 'yes' },
      { questionIndex: 9,  answer: 'yes' },
      { questionIndex: 10, answer: 'yes' },
      { questionIndex: 11, answer: 'yes' },
      { questionIndex: 12, answer: 'yes' },
      { questionIndex: 13, answer: 'yes' },
      { questionIndex: 14, answer: 'yes' },
      { questionIndex: 15, answer: 'yes' },
      { questionIndex: 16, answer: 'yes' },
      { questionIndex: 17, answer: 'yes' },
      { questionIndex: 18, answer: 'yes' },
      { questionIndex: 19, answer: 'yes' },
      { questionIndex: 20, answer: 'yes' },
      { questionIndex: 21, answer: 'yes' },
      { questionIndex: 22, answer: 'yes' },
      { questionIndex: 23, answer: 'yes' },
      { questionIndex: 24, answer: 'yes' },
      { questionIndex: 25, answer: 'yes' },
      { questionIndex: 26, answer: 'yes' },
      { questionIndex: 27, answer: 'yes' },
      { questionIndex: 28, answer: 'yes' },
      { questionIndex: 29, answer: 'yes' },
      { questionIndex: 30, answer: 'yes' },
      { questionIndex: 31, answer: 'yes' },
      { questionIndex: 32, answer: 'yes' },
      { questionIndex: 33, answer: 'yes' },
      { questionIndex: 34, answer: 'yes' },
      { questionIndex: 35, answer: 'yes' },
      { questionIndex: 36, answer: 'yes' },
      { questionIndex: 37, answer: 'yes' },
      { questionIndex: 38, answer: 'yes' },
      { questionIndex: 39, answer: 'yes' }
    ]
  },

{
    name: 'Frederick08',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_Pichai_%282023%29_cropped.jpg/800px-Sundar_Pichai_%282023%29_cropped.jpg',
    answers: [
      { questionIndex: 0,  answer: 'no' },
      { questionIndex: 1,  answer: 'no' },
      { questionIndex: 2,  answer: 'no' },
      { questionIndex: 3,  answer: 'no' },
      { questionIndex: 4,  answer: 'no' },
      { questionIndex: 5,  answer: 'no' },
      { questionIndex: 6,  answer: 'no' },
      { questionIndex: 7,  answer: 'no' },
      { questionIndex: 8,  answer: 'no' },
      { questionIndex: 9,  answer: 'no' },
      { questionIndex: 10, answer: 'no' },
      { questionIndex: 11, answer: 'no' },
      { questionIndex: 12, answer: 'no' },
      { questionIndex: 13, answer: 'no' },
      { questionIndex: 14, answer: 'no' },
      { questionIndex: 15, answer: 'no' },
      { questionIndex: 16, answer: 'no' },
      { questionIndex: 17, answer: 'no' },
      { questionIndex: 18, answer: 'no' },
      { questionIndex: 19, answer: 'no' },
      { questionIndex: 20, answer: 'no' },
      { questionIndex: 21, answer: 'no' },
      { questionIndex: 22, answer: 'no' },
      { questionIndex: 23, answer: 'no' },
      { questionIndex: 24, answer: 'no' },
      { questionIndex: 25, answer: 'no' },
      { questionIndex: 26, answer: 'no' },
      { questionIndex: 27, answer: 'no' },
      { questionIndex: 28, answer: 'no' },
      { questionIndex: 29, answer: 'no' },
      { questionIndex: 30, answer: 'no' },
      { questionIndex: 31, answer: 'no' },
      { questionIndex: 32, answer: 'no' },
      { questionIndex: 33, answer: 'no' },
      { questionIndex: 34, answer: 'no' },
      { questionIndex: 35, answer: 'no' },
      { questionIndex: 36, answer: 'no' },
      { questionIndex: 37, answer: 'no' },
      { questionIndex: 38, answer: 'no' },
      { questionIndex: 39, answer: 'no' }
    ]
  }



  // Aggiungi altri personaggi con le loro risposte per ciascuna domanda
];

const questions = [
  {
    "text": "È uno dei più famosi fisici del XX secolo?" // Domanda 0
  },
  {
    "text": "È stata premiata con il Nobel per la chimica?" // Domanda 1
  },
  {
    "text": "È stato il co-fondatore di Apple?" // Domanda 2
  },
  {
    "text": "È considerata la prima programmatrice al mondo?" // Domanda 3
  },
  {
    "text": "È il fondatore di Tesla?" // Domanda 4
  },
  {
    "text": "È il co-fondatore di Microsoft?" // Domanda 5
  },
  {
    "text": "È una primatologa nota per il suo lavoro con scimpanzé?" // Domanda 6
  },
  {
    "text": "È l'inventore del World Wide Web?" // Domanda 7
  },
  {
    "text": "È stato un famoso cosmologo e fisico teorico?" // Domanda 8
  },
  {
    "text": "È stata una pioniera nella programmazione?" // Domanda 9
  },
  {
    "text": "È stato un inventore e ingegnere elettrico?" // Domanda 10
  },
  {
    "text": "È considerato il padre dell'informatica?" // Domanda 11
  },
  {
    "text": "È stata coinvolta nella scoperta della struttura del DNA?" // Domanda 12
  },
  {
    "text": "È il co-fondatore di Facebook?" // Domanda 13
  },
  {
    "text": "È un premio Nobel per la medicina?" // Domanda 14
  },
  {
    "text": "È stata una matematica alla NASA?" // Domanda 15
  },
  {
    "text": "È il fondatore di Amazon?" // Domanda 16
  },
  {
    "text": "È stato un premio Nobel per la fisica?" // Domanda 17
  },
  {
    "text": "È un famoso streamer di Twitch?" // Domanda 18
  },
  {
    "text": "È il CEO di Google?" // Domanda 19
  },
  {
    "text": "Ha sviluppato la teoria della relatività?" // Domanda 20
  },
  {
    "text": "Ha due premi Nobel?" // Domanda 21
  },
  {
    "text": "È stato il principale visionario di Apple?" // Domanda 22
  },
  {
    "text": "Ha lavorato con Charles Babbage?" // Domanda 23
  },
  {
    "text": "È coinvolto anche in progetti spaziali?" // Domanda 24
  },
  {
    "text": "È uno dei più ricchi al mondo?" // Domanda 25
  },
  {
    "text": "Ha vissuto a lungo con gli scimpanzé nel loro ambiente naturale?" // Domanda 26
  },
  {
    "text": "Ha creato il primo sito web?" // Domanda 27
  },
  {
    "text": "Ha scritto il libro 'Breve storia del tempo'?" // Domanda 28
  },
  {
    "text": "Ha coniato il termine 'debugging'?" // Domanda 29
  },
  {
    "text": "Ha lavorato su tecnologie di trasmissione wireless di energia?" // Domanda 30
  },
  {
    "text": "Ha contribuito alla decifrazione del codice Enigma durante la Seconda Guerra Mondiale?" // Domanda 31
  },
  {
    "text": "Le sue fotografie aiutarono nella scoperta della struttura a doppia elica del DNA?" // Domanda 32
  },
  {
    "text": "Ha creato Facebook durante il periodo universitario?" // Domanda 33
  },
  {
    "text": "Ha contribuito allo sviluppo delle cellule staminali indotte?" // Domanda 34
  },
  {
    "text": "Ha svolto un ruolo chiave nei calcoli per il primo volo orbitale umano?" // Domanda 35
  },
  {
    "text": "È anche il proprietario del Washington Post?" // Domanda 36
  },
  {
    "text": "È noto per il suo approccio unico e informale alla fisica?" // Domanda 37
  },
  {
    "text": "È barese?" // Domanda 38
  },
  {
    "text": "È stato coinvolto nello sviluppo di Android?" // Domanda 39
  }
];


let userAnswers = [];
const totalQuestions = 40; // Numero totale di domande

const startButton = document.getElementById('startButton');
const gameContainer = document.getElementById('gameContainer');
const questionDiv = document.getElementById('question');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const resultDiv = document.querySelector('.result');
const characterName = document.getElementById('characterName');
const characterImage = document.getElementById('characterImage');
const resetButton = document.getElementById('resetButton');
const resultImage = document.getElementById('resultImage');

// Nascondi gli elementi all'inizio
gameContainer.classList.add('hidden');

resultDiv.classList.add('hidden');
resetButton.classList.add('hidden');

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);

function startGame() {
  startButton.style.display = 'none';
  gameContainer.classList.remove('hidden');

  // Mostra i pulsanti "Si" e "No" e l'immagine del personaggio
  const buttons = document.querySelector('.buttons');
  const characterImg = document.getElementById('characterImage');
  buttons.style.display = 'block';
  characterImg.style.display = 'block';

  showQuestion();
}


let currentQuestionIndex = 0;

function showQuestion() {
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
  characterImage.style.display = 'none';

  if (currentQuestionIndex < 40) {
    console.log("index della domanda");
    console.log(currentQuestionIndex);

    const currentQuestion = questions[currentQuestionIndex];
    questionDiv.textContent = currentQuestion.text;
    resetButton.style.display = 'none';
	
	console.log(questions[currentQuestionIndex]);

    yesButton.removeEventListener('click', handleYesClick); // Rimuovi gli event listeners precedenti
    noButton.removeEventListener('click', handleNoClick);

    setTimeout(() => {
      yesButton.style.display = 'inline-block';
      noButton.style.display = 'inline-block';
      yesButton.addEventListener('click', handleYesClick); // Aggiungi i nuovi event listeners
      noButton.addEventListener('click', handleNoClick);
      characterImage.style.display = 'none';
    }, 200);
  } else {
    calculateResult();
  }
}

function handleYesClick() {
  selectAnswer('yes');
  console.log("si");
}

function handleNoClick() {
  selectAnswer('no');
  console.log("no");
}

function selectAnswer(answer) {
  userAnswers[currentQuestionIndex] = answer;
  currentQuestionIndex++;
  showQuestion();
}




function calculateResult() {
  let scores = characters.map(character => ({ name: character.name, score: 0 }));

  for (let i = 0; i < totalQuestions; i++) {
    const userAnswer = userAnswers[i];
    for (let j = 0; j < characters.length; j++) {
      const character = characters[j];
      const characterAnswer = character.answers.find(ans => ans.questionIndex === i);
      if (characterAnswer && characterAnswer.answer === userAnswer) {
        scores[j].score++;
      }
    }
  }

  scores.sort((a, b) => b.score - a.score); // Ordina i punteggi in ordine decrescente

  const maxScore = scores[0].score;
  
  console.log("max score");
  console.log(maxScore);
  
  const highestScoringCharacters = scores.filter(character => character.score === maxScore);
  const randomIndex = Math.floor(Math.random() * highestScoringCharacters.length);
  const mostProbableCharacter = highestScoringCharacters[randomIndex];

  console.log("personaggio");
  console.log(mostProbableCharacter.name);
  
    console.log("personaggio completo");
  console.log(mostProbableCharacter);

  showResult(mostProbableCharacter);
}

function showResult(character) {
  resultDiv.classList.remove('hidden');
  const characterNameElement = document.getElementById('characterName');
  const characterImageElement = document.getElementById('characterImage');
  const questionElement = document.getElementById('question'); 

  characterNameElement.textContent = character.name;

  // Imposta l'immagine direttamente qui
  if (character.image) {
    characterImageElement.src = character.image;
    characterImageElement.style.display = 'block';
  } else {
    characterImageElement.style.display = 'none';
    console.log("Immagine non trovata per il personaggio:", character.name);
  }

  resetButton.style.display = 'inline-block';

  questionElement.textContent = `Il personaggio è: ${character.name}`; 
}



//controllo aggiornamento 1







function resetGame() {
  //Per ripristinare il gioco
  
  location.reload();
}

});
