const slidesContainer = document.getElementById('slides-container');
const slide = document.querySelector('.slide');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');
script_done = 0;
clicked_to_start = 0;

whats_cap = document.getElementById('whats_caption');

slidesContainer.addEventListener('scroll', (event) => {
  console.log('scrolled');
});

new GreenAudioPlayer('.gap-example');

function slider_prev() {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  if (slidesContainer.scrollLeft < slideWidth) {
    whats_cap.innerHTML = 'Nana’s mother writes in the Armenian alphabet in Karabakh Armenian dialect: “Hello, did you take the exam?” And sends her a picture of the food coupons they got as there are food shortages during the blockade and everything is rationed.';
  } else if (slidesContainer.scrollLeft >= slideWidth * 1 && slidesContainer.scrollLeft < slideWidth * 2) {
    whats_cap.innerHTML =
      'Message of her father written with Cyrillic alphabet in a mix of Karabakh Armenian dialect and Russian: “My darling baby girl, today you have the honor of representing your school, an institution that gives you a ticket for a new life. I know you have a strong personality and disappointments should not take you down. It does not matter that we are not physically with you. You know that you are always in our hearts filled of love. Show us all the strength of your soul. We are proud of you my joy. May God be with us.”';
  } else if (slidesContainer.scrollLeft >= slideWidth * 2 && slidesContainer.scrollLeft < slideWidth * 3) {
    whats_cap.innerHTML = 'Photo of Nana studying without electricity during the blockade.';
  }
  //else if (slidesContainer.scrollLeft >= slideWidth * 3 && slidesContainer.scrollLeft < slideWidth * 4) {
  //  whats_cap.innerHTML = 'Nana’s mother sends her a text in Armenian:';
  //}
}

function slider_next() {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  if (slidesContainer.scrollLeft > slideWidth * 3) {
    whats_cap.innerHTML = 'Photo of Nana studying without electricity during the blockade.';
  } else if (slidesContainer.scrollLeft <= slideWidth * 3 && slidesContainer.scrollLeft > slideWidth * 2) {
    whats_cap.innerHTML =
      'Message of her father written with Cyrillic alphabet in a mix of Karabakh Armenian dialect and Russian: “My darling baby girl, today you have the honor of representing your school, an institution that gives you a ticket for a new life. I know you have a strong personality and disappointments should not take you down. It does not matter that we are not physically with you. You know that you are always in our hearts filled of love. Show us all the strength of your soul. We are proud of you my joy. May God be with us.”';
  } else if (slidesContainer.scrollLeft >= slideWidth * 2 && slidesContainer.scrollLeft > slideWidth) {
    whats_cap.innerHTML = 'Nana’s mother writes in the Armenian alphabet in Karabakh Armenian dialect: “Hello, did you take the exam?” And sends her a picture of the food coupons they got as there are food shortages during the blockade and everything is rationed.';
  } else {
    whats_cap.innerHTML = 'Nana sends a picture of her at her high school graduation to her family. Messages in English. Message of her father written with Cyrillic alphabet in Karabakh Armenian dialect: “my darling baby girl, it’s cold, be careful not to catch a cold”';
  }
}

new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next',
  },
});

var mood_board_el = document.getElementById('mood_board');
var board_img_list = [];
var chaos_img = [
  'images/chaos/Chaos1.png',
  'images/chaos/Chaos2.png',
  'images/chaos/Chaos3.png',
  'images/chaos/Chaos4.png',
  'images/chaos/Chaos5.png',
  'images/chaos/Chaos6.png',
  'images/chaos/Chaos7.png',
  'images/chaos/Chaos15.png',
  'images/chaos/Chaos16.png',
  'images/chaos/Chaos17.png',
  'images/chaos/Chaos18.png',
  'images/chaos/Chaos19.png',
  'images/chaos/Chaos20.png',
  'images/chaos/Chaos21.png',
];

function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function () {
    if (copy.length < 1) {
      copy = array.slice(0);
    }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

window.onload = function () {
  for (var i = 0; i < mood_board_el.children.length; i++) {
    const obj = {};
    obj.el = mood_board_el.children[i];
    obj.tick = Math.floor(Math.random() * 40) + 65;
    board_img_list.push(obj);
  }
};

var chooser = randomNoRepeats(chaos_img);

var past_intro = 0;

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

captions = document.getElementById('captions');
var updateCaptions = function () {
  var activeSlide = document.querySelector('div.swiper-slide-active');
  var caption = activeSlide.dataset.caption;
  if (activeSlide.hasAttribute('data-caption')) {
    captions.innerHTML = caption;
  }
};

swiper.on('slideChangeTransitionEnd', function () {
  updateCaptions();
});

var script_index = 0;

var sound = new Howl({
  src: ['audio_files/astrig_intro.wav'],
  sprite: {
    track_01: [0, 5000],
    track_02: [5937, 10000],
    track_03: [15900, 19000],
    track_04: [36000, 18000],
    track_05: [54000, 7000],
    track_06: [61700, 22000],
    track_07: [85000, 16800],
    track_08: [101800, 14200],
    track_09: [116000, 19500],
    track_10: [136000, 17000],
  },
});

var ambience = new Howl({
  src: ['audio_files/background_noise.wav'],
});

sound_array = ['track_01', 'track_02', 'track_03', 'track_04', 'track_05', 'track_06', 'track_07', 'track_08', 'track_09', 'track_10', 'track_11', 'track_12'];

function stringSplitter(string) {
  str_array = string.split(/(\s+)/).filter(function (e) {
    return e.trim().length > 0;
  });
  return str_array;
}

empty_string = '[ Click to Start ] <p></p> ';

sec0 = 'What would you do if you only had several hours to flee a home you will never be able to return to?';

sec1 = `As a daughter of immigrants and a member
of a nation which has more people living in the diaspora <i></i>
than in its state, <span></span> the question of cultural heritage has
always tormented me.`;

sec2 = `The places where my family comes from do not exist anymore. <b></b> Or at least, not like they used to. <span></span>
I grew up witnessing our elders yearning for home <b></b> and hearing
stories about how they were persecuted and fled, <b></b> hanging
onto their keys until their very last breath, <b></b> dreaming of
going back to homes <b></b> which had been destroyed a long time ago. 
`;

sec3 = `Part of the Armenian heritage is a series of traumas
and pain <b></b> that carry on from one generation to another. <span></span> Historically, <span></span>
Armenians resided in Eastern Anatolia, <span></span> in regions that were once part
of the Ottoman Empire, <b></b> now modern Turkey. <span></span> <span></span> <b></b> Those who survived during the
genocide lost everything.`;

sec4 = `Everything, that is, except their identity <b></b> and heritage. <span></span> Through
the preservation of dialects, <b></b> dishes, <b></b> and stories.`;

sec5 = `This collective trauma affected me too. <span></span> Most of my life I rejected
parts of my identity, <span></span> I did not want <i></i> to carry the sadness or trauma of
my Armenian heritage. <b></b> So I worked as hard as I could to be as French as
I could, and only kept the positive aspects of my Armenian heritage
— my family, <b></b> the language, <b></b> music <b></b> and food. As if our collective trauma
did not shape all of it.`;

sec6 = `As an emerging journalist I found myself focusing on the
intersection between geopolitics, <b></b> territory, <b></b> marginality <b></b> and memory. <b></b>
I did not expect, however, <b></b> to see history repeat itself <b></b> through the
collective trauma of Armenians facing yet another mass exodus <b></b> and I
needed to document it.`;

sec7 = `In September 2023, <span></span> after several wars <b></b> and a
prolonged blockade, <span></span> the region of Nagorno-Karabakh <span></span> was emptied of all <b></b> 
its Armenian inhabitants. <span></span> <b></b> Much of the physical <span></span> cultural <span></span> heritage sites <b></b>
were destroyed.`;

sec8 = `Over the three year period reporting from Nagorno-Karabakh, <b></b>
there’s this one phrase <span></span> that kept repeating when 
I asked people how they dealt with the constant uncertainty, <b></b> how they lived
with the constant shadow of war and violence. They would always say: <br><br> 
Կարծես թե վաղը չկար <br><br> “like there’s no tomorrow”`;

sec9 = `This website tells the stories of people, <b></b> who just like my own
grandparents and great-grandparents <b></b> had left, <span></span> <b></b> holding keys to homes
they knew they would not be able to go back to.`;

script_array = [sec0, sec1, sec2, sec3, sec4, sec5, sec6, sec7, sec8, sec9];

var intro_text_el = document.getElementById('intro_text');
typeWriter = new Typewriter(intro_text_el, {
  loop: false,
  cursor: '|',
  delay: 190,
  deleteSpeed: 10,
});

stringArray = stringSplitter(empty_string);

for (var i = 0; i < stringArray.length; i++) {
  typeWriter.pasteString(stringArray[i] + ' ');
}

$(document.getElementById('intro_container')).mousemove(function (e) {
  var offset = $(this).offset().top;
  var this_height = $(this).height();
  var Y = e.pageY;
  var loc = Math.abs(offset - Y);
  if (loc < this_height - this_height / 6 && script_done == 0) {
    $(document.getElementById('intro_down_arrow')).fadeOut();
  } else {
    $(document.getElementById('intro_down_arrow')).fadeIn();
  }
});

menu_button = document.getElementById('menu_button');
typeWriter.start().callFunction(() => {
  document.getElementById('intro').style.cursor = 'pointer';
  //menu_button.setAttribute('data-src', 'documents/key_menu_white.json');
});

document.getElementById('intro').addEventListener('click', function (e) {
  //document.getElementById('button_elem').addEventListener('click', function (e) {
  //document.getElementById('intro').style.pointerEvents = 'none';

  if (document.getElementById('button_elem').style.display == 'block' || clicked_to_start == 0 || document.getElementById('button_elem').style.display == 'inline-block') {
    clicked_to_start = 1;
    vw = document.documentElement.clientWidth;
    thresh1 = vw * 0.2;
    thresh2 = vw * 0.8;
    if (event.clientX > thresh1 && event.clientX < thresh2) {
      sound.stop();
      document.getElementById('button_elem').style.display = 'none';
      typeWriter.deleteAll().callFunction(() => {
        //sound.play(sound_array[6]);
        sound.play(sound_array[script_index]);
        ambience.play();
        script_index++;
        document.getElementById('intro').style.cursor = 'default';
        //document.getElementById('intro').style.pointerEvents = 'none';
        document.getElementById('intro_text').style.textAlign = 'left';
      });

      // AFTER SCRIPT IS DONE
      if (script_index == script_array.length) {
        script_done = 1;
        script_index = 0;
        console.log('reached the end');
        //document.getElementsByTagName('body')[0].style = 'overflow: visible';
        //typeWriter.deleteAll().callFunction(() => {
        //  $('#intro_div').fadeOut(1200);
        //});
        $('#intro_text').fadeOut(1200);
        $('#button_elem').fadeOut(700);
        menu_list.style.visibility = 'visible';
        $('#intro_down_arrow').fadeIn(1200);
      } else {
        // Write Text

        if (script_index == 8) {
          console.log('pause');
          typeWriter.changeDelay(270);
        } else if (script_index == 1) {
          typeWriter.changeDelay(210);
        } else if (script_index == 2) {
          typeWriter.changeDelay(220);
        } else if (script_index == 3) {
          typeWriter.changeDelay(210);
        } else if (script_index == 4) {
          typeWriter.changeDelay(220);
        } else if (script_index == 5) {
          typeWriter.changeDelay(220);
        } else if (script_index == 6) {
          typeWriter.changeDelay(220);
        } else {
          typeWriter.changeDelay(190);
        }
        stringArray = stringSplitter(script_array[script_index]);
        for (var i = 0; i < stringArray.length; i++) {
          typeWriter.pasteString(stringArray[i] + ' ');
          if (stringArray[i] == '<br><br>' || stringArray[i] == '<span></span>') {
            typeWriter.pauseFor(370);
          }
          if (stringArray[i] == '<b></b>') {
            typeWriter.pauseFor(70);
          }
          if (stringArray[i] == '<i></i>') {
            typeWriter.pauseFor(20);
          }
        }
        typeWriter.start().callFunction(() => {
          document.getElementById('button_elem').style.display = 'block';
          //document.getElementById('intro').style.cursor = 'pointer';
          //menu_button.setAttribute('data-src', 'documents/key_menu_white.json');
          document.getElementById('intro').style.pointerEvents = 'auto';
        });
      }
    }
  }
});

menu_button_container = document.getElementById('menu_container');
menu_button = document.getElementById('menu_button');
menu_button_container.onmouseenter = function () {
  menu_list = document.getElementById('menu_list');
  menu_button.click();
  //if (menu_list.style.visibility === 'hidden') {
  menu_list.style.visibility = 'visible';
  //} else {
  //  menu_list.style.visibility = 'hidden';
  //}
};

menu_button_container.onmouseleave = function () {
  menu_list = document.getElementById('menu_list');
  menu_button.click();
  //if (menu_list.style.visibility === 'visible') {
  menu_list.style.visibility = 'hidden';
  //} else {
  //  menu_list.style.visibility = 'visible';
  //}
};

//menu_bu

var intro_height = $('#intro').height();
var title_height = $('.title').height();

// SCROLL INTERACTION
document.addEventListener('scroll', (event) => {
  vol = scale(scrollY, 0, intro_height, 1.0, 0.0);
  vol_norm = Math.min(Math.max(parseFloat(vol), 0.0), 1.0);

  vw = scale(scrollY, 0, 1000, 50.0, 5.0);
  vw_norm = Math.min(Math.max(parseFloat(vol), 5.0), 50.0);

  //if (scrollY > intro_height) {
  //  document.getElementById('menu_container').style.pointerEvents = 'auto';
  //  document.getElementById('menu_container').style.left = '90%';
  //  document.getElementById('menu_button').style.visibility = 'visible';
  //
  //  if (past_intro == 0) {
  //    //menu_button.click();
  //    past_intro = -1;
  //  }
  //}

  Howler.volume(vol_norm);

  // MOOD BOARD
  console.log(isInViewport(mood_board_el));
  if (isInViewport(mood_board_el)) {
    for (var i = 0; i < board_img_list.length; i++) {
      obj = board_img_list[i];
      obj.tick++;
      if (board_img_list[i].tick > 109) {
        obj.tick = 0;
        file = chooser();
        img = board_img_list[i].el.children[0];
        el = $(img);
        console.log(img);
        console.log(el);
        el.fadeOut('slow', function () {
          el.fadeIn('slow');
          img.src = file;
          rndTop = Math.floor(Math.random() * 60);
          rndLeft = Math.floor(Math.random() * 60);
          img.style.top = rndTop + '%';
          img.style.left = rndLeft + '%';
        });
      }
    }

    console.log(mood_board_el.children.length);
  }
});

// Mood board is in view
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight) && rect.right <= (window.innerWidth || html.clientWidth);
}

function moveLeft() {
  swiper.slidePrev();
  left_button = document.getElementById('left');
  right_button = document.getElementById('right');
  if (swiper.isBeginning) {
    left_button.children[0].src = 'images/arrow_left_muted.svg';
  } else {
    left_button.children[0].src = 'images/arrow_left.svg';
  }
  if (swiper.isEnd) {
    right_button.children[0].src = 'images/arrow_right_muted.svg';
  } else {
    right_button.children[0].src = 'images/arrow_right.svg';
  }
}

function moveRight() {
  swiper.slideNext();
  left_button = document.getElementById('left');
  right_button = document.getElementById('right');
  if (swiper.isBeginning) {
    left_button.children[0].src = 'images/arrow_left_muted.svg';
  } else {
    left_button.children[0].src = 'images/arrow_left.svg';
  }
  if (swiper.isEnd) {
    right_button.children[0].src = 'images/arrow_right_muted.svg';
  } else {
    right_button.children[0].src = 'images/arrow_right.svg';
  }
}

scroll_el = UIkit.scrollspy('#mood_board');

function sound_button() {
  console.log('Clicked on mute');
  img_src = document.getElementById('mute_button').getAttribute('src');
  console.log(img_src);
  if (img_src == 'images/sound_on.svg') {
    document.getElementById('mute_button').src = 'images/sound_off.svg';
    ambience.mute(true);
    sound.mute(true);
  } else {
    document.getElementById('mute_button').src = 'images/sound_on.svg';
    ambience.mute(false);
    sound.mute(false);
  }
}

key_grid = document.getElementById('key_grid');
portrait_div = document.getElementById('key_portrait_container');
portrait_img = document.getElementById('key_portrait');
portrait_img_lightbox = document.getElementById('key_portrait_lightbox');

function key_button_1() {
  key_button = document.getElementById('key_1');
  portrait_div.style.display = 'block';
  portrait_div.style.width = '48%';
  portrait_img.src = 'images/keys/AnnaHayryan.jpg';
  portrait_img_lightbox.href = 'images/keys/AnnaHayryan.jpg';

  setTimeout(() => {
    portrait_div.style.opacity = '1';
  }, '1000');

  for (var i = 0; i < key_grid.children.length; i++) {
    if (key_grid.children[i].className == 'key_button') {
      b = key_grid.children[i];
      b.style.border = '1px solid black';
    }
  }

  key_button.style.border = '1px solid white';
}

function key_button_2() {
  console.log('tets');
  key_button = document.getElementById('key_2');
  portrait_div.style.display = 'block';
  portrait_div.style.width = '48%';
  portrait_img.src = 'images/keys/AnnaShaburyan.jpg';
  portrait_img_lightbox.href = 'images/keys/AnnaShaburyan.jpg';
  setTimeout(() => {
    portrait_div.style.opacity = '1';
  }, '1000');

  for (var i = 0; i < key_grid.children.length; i++) {
    if (key_grid.children[i].className == 'key_button') {
      b = key_grid.children[i];
      b.style.border = '1px solid black';
    }
  }

  key_button.style.border = '1px solid white';
}

function key_button_3() {
  console.log('tets');
  key_button = document.getElementById('key_3');
  portrait_div.style.display = 'block';
  portrait_div.style.width = '48%';
  portrait_img.src = 'images/keys/ArmineShadyan.jpg';
  portrait_img_lightbox.href = 'images/keys/ArmineShadyan.jpg';
  setTimeout(() => {
    portrait_div.style.opacity = '1';
  }, '1000');

  for (var i = 0; i < key_grid.children.length; i++) {
    if (key_grid.children[i].className == 'key_button') {
      b = key_grid.children[i];
      b.style.border = '1px solid black';
    }
  }

  key_button.style.border = '1px solid white';
}

function key_button_4() {
  console.log('tets');
  key_button = document.getElementById('key_4');
  portrait_div.style.display = 'block';
  portrait_div.style.width = '48%';
  portrait_img.src = 'images/keys/GemmaAvanesyan.jpg';
  portrait_img_lightbox.href = 'images/keys/GemmaAvanesyan.jpg';
  setTimeout(() => {
    portrait_div.style.opacity = '1';
  }, '1000');

  for (var i = 0; i < key_grid.children.length; i++) {
    if (key_grid.children[i].className == 'key_button') {
      b = key_grid.children[i];
      b.style.border = '1px solid black';
    }
  }

  key_button.style.border = '1px solid white';
}

function key_button_5() {
  console.log('tets');
  key_button = document.getElementById('key_5');
  portrait_div.style.display = 'block';
  portrait_div.style.width = '48%';
  portrait_img.src = 'images/keys/LiraPetrosyan.jpg';
  portrait_img_lightbox.href = 'images/keys/LiraPetrosyan.jpg';
  setTimeout(() => {
    portrait_div.style.opacity = '1';
  }, '1000');

  for (var i = 0; i < key_grid.children.length; i++) {
    if (key_grid.children[i].className == 'key_button') {
      b = key_grid.children[i];
      b.style.border = '1px solid black';
    }
  }

  key_button.style.border = '1px solid white';
}

function key_button_6() {
  console.log('tets');
  key_button = document.getElementById('key_6');
  portrait_div.style.display = 'block';
  //portrait_div.style.visibility = 'visible';
  portrait_div.style.width = '48%';
  portrait_img.src = 'images/keys/MarinaAhanoryan.jpg';
  portrait_img_lightbox.href = 'images/keys/MarinaAhanoryan.jpg';
  setTimeout(() => {
    portrait_div.style.opacity = '1';
  }, '1000');

  for (var i = 0; i < key_grid.children.length; i++) {
    if (key_grid.children[i].className == 'key_button') {
      b = key_grid.children[i];
      b.style.border = '1px solid black';
    }
  }

  key_button.style.border = '1px solid white';
}

function key_button_7() {
  console.log('tets');
  key_button = document.getElementById('key_7');
  portrait_div.style.display = 'block';
  portrait_div.style.width = '48%';
  portrait_img.src = 'images/keys/NairaandAnnaShaburyan.jpg';
  portrait_img_lightbox.href = 'images/keys/NairaandAnnaShaburyan.jpg';
  setTimeout(() => {
    portrait_div.style.opacity = '1';
  }, '1000');

  for (var i = 0; i < key_grid.children.length; i++) {
    if (key_grid.children[i].className == 'key_button') {
      b = key_grid.children[i];
      b.style.border = '1px solid black';
    }
  }

  key_button.style.border = '1px solid white';
}

function replay_Intro() {
  console.log('replaying intro');
  script_index = 0;
  if (script_done) {
    script_done = 0;
    $('#intro_text').fadeIn(1200);
    $('#button_elem').fadeIn(700);
    stringArray = stringSplitter(script_array[script_index]);
    for (var i = 0; i < stringArray.length; i++) {
      typeWriter.pasteString(stringArray[i] + ' ');
    }
    typeWriter.start();
  } else {
    sound.stop();
    //$('#button_elem').fadeOut(200);
    clicked_to_start = 0;
    script_done = 0;
    stringArray = stringSplitter(empty_string);
    typeWriter.deleteAll().start();
    //for (var i = 0; i < stringArray.length; i++) {
    //  typeWriter.pasteString(stringArray[i] + ' ');
    //  document.getElementById('button_elem').style.display = 'none';
    //}
    //document.getElementById('intro_text').style.textAlign = 'center';
    //typeWriter.start();
  }
  //typeWriter.start();
  //$('#button_elem').fadeOut(700);
}
