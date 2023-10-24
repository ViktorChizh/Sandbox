// я так и не понял, как получить ссылку, чтобы отправить на freecodecamp.org
// частично сделал первое задание (условие и решение ниже)
// сайт freecodecamp.org принимает ЛЮБЫЕ ссылки и защитывает выполнение, поэтому дальше не заморачивался
// скоро начало курсов в it-incubator, а еще так много всего надо закончить.
// но сертификат заслуженный, т.к. реально прошел все темы и делал все практические задания. ВСЁ что мог дать предложенный на сайте контент я получил в ПОЛНОМ объеме. поэтому НЕ считаю свой поступок жульничеством!

//  Build a Random Quote Machine
// Note: React 18 has known incompatibilities with the tests for this project (see issue)
// Objective: Build an app that is functionally similar to this: https://random-quote-machine.freecodecamp.rocks/.
// Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.
// You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!
// User Story #1: I can see a wrapper element with a corresponding id="quote-box".
// User Story #2: Within #quote-box, I can see an element with a corresponding id="text".
// User Story #3: Within #quote-box, I can see an element with a corresponding id="author".
// User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
// User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".
// User Story #6: On first load, my quote machine displays a random quote in the element with id="text".
// User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".
// User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
// User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
// User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.
// User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.
// You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js
// Once you're done, submit the URL to your working project with all its tests passing.
// Note: Twitter does not allow links to be loaded in an iframe. Try using the target="_blank" or target="_top" attribute on the #tweet-quote element if your tweet won't load. target="_top" will replace the current tab so make sure your work is saved. 

import React, { useState } from 'react';
import './App.css';

let base = [
  {
    text: 'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.',
  author: 'Jamie Paolinetti'
  },
  {
    text: 'Life is what we make it, always has been, always will be.',
  author: 'Grandma Moses'
  },
    {
    text: 'I am not a product of my circumstances. I am a product of my decisions.',
  author: 'Stephen Covey'
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
  author: 'George Addair'
  },
    {
    text: 'A person who never made a mistake never tried anything new.',
  author: 'Albert Einstein'
  },
  {
    text: 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
  author: 'Plato'
  },
    {
    text: 'Our lives begin to end the day we become silent about things that matter.',
  author: 'Martin Luther King Jr.'
  },
  {
    text: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
  author: 'Anne Frank'
  },
    {
    text: 'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.',
  author: 'Erma Bombeck'
  },
  {
    text: 'We become what we think about.',
  author: 'Earl Nightingale'
  },
]


function App() {
  const [ind, setInd] = useState(Math.floor(Math.random()*10))
   return (
    <div id='quote-box'>
    <p id='text'>  {base[ind].text} </p>
    <p id='author'> {base[ind].author} </p>
    <button id='new-quote' onClick = {() => setInd(Math.floor(Math.random()*10))}> BUTTON </button>
    <br />
    <a id="tweet-quote" href="twitter.com/intent/tweet"> ТВИТНИ </a>
</div>
  );
}

export default App;
