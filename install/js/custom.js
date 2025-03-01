script_done = 0;
clicked_to_start = 0;

var past_intro = 0;

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

setTimeout(() => {
  $(document.getElementById('title')).fadeOut(6000);
  setTimeout(() => {
    continue_script();
  }, '7000');
}, '25000');

function continue_script() {
  console.log(script_index);
  script_delay = 1500;
  typeWriter.deleteAll().callFunction(() => {
    sound.play(sound_array[script_index]);
    ambience.play();
    document.getElementById('intro_text').style.textAlign = 'left';
  });

  // AFTER SCRIPT IS DONE
  if (script_index == script_array.length) {
    console.log('reached the end');
    sound.stop();
    clicked_to_start = 0;
    script_done = 0;
    script_index = 0;
    script_delay = script_delay + 2000;
  }
  if (script_index == script_array.length - 1) {
    script_delay = script_delay + 2000;
  }
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
  typeWriter
    .start()
    .callFunction(() => {
      script_index++;
      document.getElementById('button_elem').style.display = 'block';
      document.getElementById('intro').style.pointerEvents = 'auto';
      console.log(script_delay);
    })
    .pauseFor(1000)
    .deleteAll()
    .callFunction(() => {
      if (script_index == script_array.length) {
        $(document.getElementById('title')).fadeIn(6000);
        ambience.fade(1, 0, 5000);
        setTimeout(() => {
          $(document.getElementById('title')).fadeOut(10000);
          ambience.fade(0, 1, 8000);
          setTimeout(() => {
            continue_script();
          }, '12000');
        }, '40000');
      } else {
        setTimeout(() => {
          continue_script();
        }, script_delay);
      }
    });
  //}
}

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}
