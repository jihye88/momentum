const quotes = [
  {
    quote: 'It is kind of fun to do the impossible.',
    author: 'Walt Disney',
  },
  {
    quote:
      'I’ve failed over and over and over again in my life and that is why I succeed.',
    author: 'Michael Jordan',
  },
  {
    quote:
      'But I know, somehow, that only when it is dark enough can you see the stars.',
    author: 'Martin Luther King, Jr',
  },
  {
    quote: 'Grind Hard, Shine Hard.',
    author: 'Dwayne Johnson',
  },
  {
    quote:
      'I didn’t get there by wishing for it or hoping for it, but by working for it.',
    author: 'Estée Lauder',
  },
  {
    quote:
      'Success is walking from failure to failure with no loss of enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    quote: 'It is kind of fun to do the impossible.',
    author: 'Walt Disney',
  },
  {
    quote: 'Yesterday you said tomorrow. Just do it.',
    author: 'Nike',
  },
  {
    quote: 'Anyone who has never made a mistake has never tried anything new.',
    author: 'Albert Einstein',
  },
  {
    quote: 'life is not fair get used to it.',
    author: 'Walt Disney',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
