 // quotes array
 const quotes = [

    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        source: "Martin Luther King, Jr",
        citation: "Speech Delivered at the Lincoln Memorial, Washington D.C.",
        year: "28 August 1963",
        born:"Jan 15, 1929 ",
        death:"Apr 4, 1968",
        orginality:"American",
        profession:"minister",
        image:"url('images/martin_luther.jpg')",
        tag: "love",
    },
    
    {
        quote:'But I, being poor, have only my dreams. I have spread my dreams under your feet. Tread softly because you tread on my dreams',
        source:' W.B. Yeats',
        citation:'He Wishes for the Cloths of Heaven',
        year:'Published in The Wind among the Reeds, in 1899,',   
        born:"13 Jun 1865",
        death:"28 Jan 1939",
        orginality:"Irish",
        profession:"poet",
        image:"url('images/yeats.jpg')",
        tag: "dream",

    },

    {
        quote: "Dreamlike it was, and yet no dream, for there was no waking",
        source: "J.R.R. Tolkien",
        citation: "The Fellowship of The Ring",
        year: "Set in Middle-earth, by George Allen & Unwin, in 29 July 1954",
        born:"3 Jan 1892",
        death:"2 Sept 1973",
        orginality:"English",
        profession:"poet",
        image:"url('images/J._R._R._Tolkien.jpg')",
        tag: "dream",
    },

    {
        quote: "It's the possibility of having a dream come true that makes life interesting",
        source: "Paulo Coelho",
        citation: "The Alchemist",
        year: "Brazil in 1988",
        born:"24 Aug 1947",
        death:"--",
        orginality:"Brazilian ",
        profession:"lyricist",
        image:"url('images/Paulo-Coelho.jpg')",
        tag: "life",
    },

    {
        quote: "Love was the ache, the anticipation, the retreat, everything around it but the emotion itself",
        source: "Kiran Desai",
        citation: "The Inheritance of Loss",
        year: "Publisher Atlantic Monthly Press(US) Hamish Hamilton in 31 August 2006",
        born:"1971",
        death:"--",
        orginality:"Indian",
        profession:"Writer",
        image:"url('images/kiran_desai.jpg')",
        tag: "love",
    },


    {
        quote: "Let us always meet each other with smile, for the smile is the beginning of love",
        source: "Mother Teresa",
        citation: "Calcata",
        year: "1910",
        born:"26 Aug 1910",
        death:"5 Sept 1997",
        orginality:"Indian",
        profession:"nun",
        image:"url('images/mother-teresa.jpg')",
        tag: "love",
    },


    {
        quote: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal'",
        source: "Martin Luther King, Jr",
        citation: "Speech Delivered at the Lincoln Memorial, Washington D.C.",
        year: "28 August 1963",
        born:"Jan 15, 1929 ",
        death:"Apr 4, 1968",
        orginality:"American",
        profession:"minister",
        image:"url('images/martin_luther.jpg')",
        tag: "dream",
    },

    {
        quote: "We are all made of dreams, and our life stretches from sleep before birth to sleep after death",
        source: "William Shakespeare",
        citation: "As You Like It - Act 2, Scene- 7",
        year: "May 19th, 1819",
        born:"26 Apr 1564",
        death:"23 Apr 1616",
        orginality:"English",
        profession:"playwrite",
        image:"url('images/william-shakespeare.jpg')",
        tag: "life",
    },

    {
        quote: "Plato is my friend, Aristotle is my friend, but my greatest friend is the truth.",
        source: "Isaac Newton",
        citation: "About Life, God & Scientific Temperament",
        year: "At the age of 23",
        born:"25 Dec 1642",
        death:"20 Mar 1726",
        orginality:"English",
        profession:"mathematician",
        image:"url('images/isaac_newton.jpg')",
        tag: "friend",
    },

    {
        quote: "No Matter How many new friends you make you can get real comfort from old friends.",
        source: "Prophet Muhammad(pbuh)",
        citation: "Hadith 1",
        year: "Around 600 AD",
        born:" 570 AD",
        death:"8 June 632",
        orginality:"Arabian",
        profession:"prophet",
        image:"url('images/Al-Masjid_AL-Nabawi.jpg')",
        tag: "friend",
    },

    {
        quote: "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.",
        source: "Aristotle",
        citation: "Greece",
        year: "400 BC",
        born:"384 BC",
        death:"322 BCE",
        orginality:"Greek",
        profession:"philosopher",
        image:"url('images/Aristotle.jpg')",
        tag: "life",
    },

    {
        quote: "Love is a thing that is full of cares and fears",
        source: "Ovid",
        citation: "Roman Newspaper",
        year: "43 BC",
        born:"43 BC",
        death:"17/18 AD",
        orginality:"Roman",
        profession:"poet",
        image:"url('images/Ovid.jpg')",
        tag: "love",
    },

    {
        quote: "A real friend is one who walks in when the rest of the world walks out.",
        source: "Walter Winchell",
        citation: "Greenwood",
        year: "1966",
        born:"1897",
        death:"1972",
        orginality:"USA",
        profession:"journalist",
        image:"url('images/walter.jpg')",
        tag: "friend",
    },

];


// Random Background images Array
const bgUrls = [
{
    bgUrl:"url('images/life1.jpg')"
},

{
    bgUrl:"url('images/life2.jpg')"
},

{
    bgUrl:"url('images/attitude.jpg')"
},

{
    bgUrl:"url('images/friendship1.jpg')"
},

];




// Reference of essential elements
        const cartPage = document.querySelector('.quote-page');
           //all buttons
        const loadQuoteBtn = document.querySelector ('.footer-btn');
        const dreamBtn = document.querySelector('#dream');
        const lifeBtn = document.querySelector('#life');
        const friendBtn = document.querySelector('#friend');
        const loveBtn = document.querySelector('#love');
           // 
        const quoteShow = document.querySelector ('.quote');
        const source = document.querySelector ('.source');

// Reference of essential elements for biography
        const born = document.querySelector('#born');
        const death = document.querySelector ('#death');
        const orginality = document.querySelector ('#orginality');
        const profession = document.querySelector ('#profession');
        const image = document.querySelector ('#image');

        





// rdmBgImg function 
function getRdmBgImg (){
    rdmBgImg = bgUrls[Math.floor(Math.random() * bgUrls.length)];
    // console.log(rdmBgImg);
    cartPage.style.backgroundImage = rdmBgImg.bgUrl;

}
getRdmBgImg()



// getRandomQuote function
 function getRandomQuote () {

    const dreamQt = [];
    const lifeQt = [];
    const friendQt = [];
    const loveQt = [];


        for ( let item of quotes) {
            if (item.tag === 'dream' ) {
                dreamQt.push(item);
                // console.log(dreamQt); 
            } else if (item.tag === 'life' ) {
                lifeQt.push(item);
                // console.log(lifeQt); 
            } else if (item.tag === 'friend' ) {
                friendQt.push(item);
                // console.log(friendQt); 
           } else  {
                loveQt.push(item);
                // console.log(loveQt); 
            } 
}
       
        
 rdmdreamQt = dreamQt[Math.floor(Math.random() * dreamQt.length)];
        //  console.log(rdmdreamQt); 
 
 rdmlifeQt = lifeQt[Math.floor(Math.random() * lifeQt.length)];
        //  console.log(rdmlifeQt);  

 rdmfriendQt = friendQt[Math.floor(Math.random() * friendQt.length)];
        //  console.log(rdmfriendQt);  

 rdmloveQt = loveQt[Math.floor(Math.random() * loveQt.length)];
        //  console.log(rdmloveQt);  
   

 }
 getRandomQuote();


  

// printDreamQuote function   :::::::::::::::::::::::::::::::::::
  function printDreamQuote () {
  
    getRandomQuote();

    quoteShow.innerText = rdmdreamQt.quote ;
    
   
    
    source.innerHTML = `
    ${rdmdreamQt.source} <span class='citation'>${rdmdreamQt.citation}</span> <span class='year'>${rdmdreamQt.year}</span>
    `;
    born.innerText = rdmdreamQt.born;
    death.innerText = rdmdreamQt.death;
    orginality.innerText = rdmdreamQt.orginality;
    profession.innerText = rdmdreamQt.profession;
    image.style.backgroundImage = rdmdreamQt.image;
    
  
  };
  printDreamQuote();


  // printLifeQuote function :::::::::::::::::::::::::::::
  function printLifeQuote () {
  
    getRandomQuote();

    quoteShow.innerText = rdmlifeQt.quote ;
   
    
    source.innerHTML = `
    ${rdmlifeQt.source} <span class='citation'>${rdmlifeQt.citation}</span> <span class='year'>${rdmlifeQt.year}</span>
    `;
    born.innerText = rdmlifeQt.born;
    death.innerText = rdmlifeQt.death;
    orginality.innerText = rdmlifeQt.orginality;
    profession.innerText = rdmlifeQt.profession;
    image.style.backgroundImage = rdmlifeQt.image;
    
  
  };
  printLifeQuote();

 // printFriendQuote function :::::::::::::::::::::::::::::::::
    function printFriendQuote () {
  
        getRandomQuote();
    
        quoteShow.innerText = rdmfriendQt.quote ;
       
        
        source.innerHTML = `
        ${rdmfriendQt.source} <span class='citation'>${rdmfriendQt.citation}</span> <span class='year'>${rdmfriendQt.year}</span>
        `;
        born.innerText = rdmfriendQt.born;
        death.innerText = rdmfriendQt.death;
        orginality.innerText = rdmfriendQt.orginality;
        profession.innerText = rdmfriendQt.profession;
        image.style.backgroundImage = rdmfriendQt.image;
        
      
      };
      printFriendQuote();

 // printFriendQuote function  :::::::::::::::::::::::::::::::::
 function printLoveQuote () {
  
    getRandomQuote();

    quoteShow.innerText = rdmloveQt.quote ;
   
    
    source.innerHTML = `
    ${rdmloveQt.source} <span class='citation'>${rdmloveQt.citation}</span> <span class='year'>${rdmloveQt.year}</span>
    `;
    born.innerText = rdmloveQt.born;
    death.innerText = rdmloveQt.death;
    orginality.innerText = rdmloveQt.orginality;
    profession.innerText = rdmloveQt.profession;
    image.style.backgroundImage = rdmloveQt.image;
     
  };
  printLoveQuote();



// click eventListener for all buttons
loadQuoteBtn.addEventListener('click', function(event) {
    const clickedEl = event.target;
    // console.log(clickedEl);
    if( clickedEl === dreamBtn) {
        // console.log(clickedEl);
        getRdmBgImg();
        printDreamQuote();
    } else if( clickedEl === lifeBtn) {
        // console.log(clickedEl);
        getRdmBgImg();
        printLifeQuote();
    } else if( clickedEl === friendBtn) {
        // console.log(clickedEl);
        getRdmBgImg();
        printFriendQuote();
    } else {
        getRdmBgImg();
        printLoveQuote();
    }
})





