//Calculator//
function calcTotal(oForm) {
  var sum = 0;
  for (i = 0; i < oSels.length; i++) {
    sum += new Number(oSels[i].value);
  }
  document.getElementById('result').innerHTML = '$' + sum;
  return false;
}
window.onload = function () {
  oSels = document.getElementById('form1').getElementsByTagName('select');
  for (i = 0; i < oSels.length; i++) {
    oSels[i].onchange = function () {
      document.getElementById('result').innerHTML = '';
    };
  }
};

//Typewrite Effect//
// ScrollReveal().reveal('#w', { delay: 500 });
// ScrollReveal().reveal('#e', { delay: 700 });
// ScrollReveal().reveal('#l', { delay: 900 });
// ScrollReveal().reveal('#c', { delay: 1200 });
// ScrollReveal().reveal('#o', { delay: 1400 });
// ScrollReveal().reveal('#m', { delay: 1600 });
// ScrollReveal().reveal('#e2', { delay: 1800 });
// ScrollReveal().reveal('.blink', { delay: 2000 });

//Appear Effect//
// ScrollReveal().reveal('#show2', { delay: 2600 });
// ScrollReveal().reveal('#me', { delay: 3500 });
// ScrollReveal().reveal('#show4', { delay: 500 });
// ScrollReveal().reveal('#stitle', { delay: 1000 });
// ScrollReveal().reveal('#show5', { delay: 2000 });
// ScrollReveal().reveal('#show6', { delay: 2400 });
// ScrollReveal().reveal('#show7', { delay: 2800 });
// ScrollReveal().reveal('#show8', { delay: 3200 });
// ScrollReveal().reveal('#show9', { delay: 3600 });
// ScrollReveal().reveal('#quote', { delay: 4000 });

//
ScrollReveal().reveal('#dashtitle', { delay: 500 });
ScrollReveal().reveal('#dashes', { delay: 800 });
ScrollReveal().reveal('#simple', { delay: 800 });
ScrollReveal().reveal('#simple1', { delay: 200 });
ScrollReveal().reveal('#compvis', { delay: 600 });
// ScrollReveal().reveal('#service', { delay: 800 });
// ScrollReveal().reveal('#service1', { delay: 800 });
// ScrollReveal().reveal('#service2', { delay: 800 });
// ScrollReveal().reveal('#simple2', { delay: 800 });
ScrollReveal().reveal('.downArrow', { delay: 800 });
ScrollReveal().reveal('#simple4', { delay: 800 });
ScrollReveal().reveal('#nodez', { delay: 1000 });
// ScrollReveal().reveal('#viewbutton', { delay: 800 });
ScrollReveal().reveal('#simpleparagraph', { delay: 1200 });
ScrollReveal().reveal('#wheel', { delay: 1800 });
ScrollReveal().reveal('#visitors1', { delay: 800 });
ScrollReveal().reveal('#visitorline', { delay: 900 });
ScrollReveal().reveal('#visitors2', { delay: 1000 });


//*******************INDEX*************************//
ScrollReveal().reveal('#service_column1', { delay: 1000 });
ScrollReveal().reveal('#service_column2', { delay: 1250 });
ScrollReveal().reveal('#service_column3', { delay: 1500 });
ScrollReveal().reveal('#workflow', { delay: 1000 });
ScrollReveal().reveal('#service', { delay: 1000 });
ScrollReveal().reveal('#service_content', { delay: 1000 });
ScrollReveal().reveal('#you_ready', { delay: 500 });

//*******************DESIGNS*************************//
ScrollReveal().reveal('#design_header2', { delay: 1000 });
ScrollReveal().reveal('#images_1', { delay: 750 });
ScrollReveal().reveal('#images_2', { delay: 750 });
ScrollReveal().reveal('#images_3', { delay: 750 });
ScrollReveal().reveal('#images_4', { delay: 750 });
ScrollReveal().reveal('#images_5', { delay: 750 });
ScrollReveal().reveal('#images_6', { delay: 750 });
ScrollReveal().reveal('#designsteps1', { delay: 750 });
ScrollReveal().reveal('#designsteps2', { delay: 750 });
ScrollReveal().reveal('#designstep3', { delay: 750 });
ScrollReveal().reveal('#design_image', { delay: 750 });
ScrollReveal().reveal('#develop_image', { delay: 750 });
ScrollReveal().reveal('#deploy_image', { delay: 750 });
ScrollReveal().reveal('#section-logo', { delay: 750 });




//Button Reveal//
// ScrollReveal().reveal('#me', { delay: 500 });
ScrollReveal().reveal('.typewriter', { delay: 0 });
// ScrollReveal().reveal('#codebtnmain', { delay: 3800 });
//TEST//

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
var fallRate = 3;
var maxRaindropHeight = 6;
var maxRaindropWidth = 1;
var maxRaindropZDepth = 5;
var momentumGain = 0.05;
var zdepthMomentumModifier = 0.45;

var canvas = document.getElementsByTagName('canvas')[0];
var canvasHeight = canvas.offsetHeight;
var canvasWidth = canvas.offsetWidth;
var container = document.getElementsByClassName('container')[0];
var ctx = canvas.getContext('2d');
var raindrops = [];
var windSpeed = 0;

function resize() {
  canvasHeight = container.offsetHeight;
  canvasWidth = container.offsetWidth;

  canvas.height = canvasHeight;
  canvas.width = canvasWidth;
}

function update() {
  windSpeed = Math.sin(new Date() / 1000) + 1;

  for (var i = 0; i < raindrops.length; i++) {
    raindrops[i].update();
  }

  draw();
  setTimeout(update, 16);
}

function draw() {
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  for (var i = 0; i < raindrops.length; i++) {
    raindrops[i].render();
  }
}
var Raindrop = (function () {
  function Raindrop() {
    _classCallCheck(this, Raindrop);
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * -canvasHeight;
    this.z = Math.floor(Math.random() * maxRaindropZDepth);

    this.color = 'rgb(186,85,211)';
    this.height =
      (Math.random() * maxRaindropHeight + 2) * (this.z / maxRaindropZDepth);
    this.momentum = fallRate * (this.z * zdepthMomentumModifier);
    this.width =
      (Math.random() * maxRaindropWidth + 1) * (this.z / maxRaindropZDepth);
  }
  _createClass(Raindrop, [
    {
      key: 'render',
      value: function render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    },
    {
      key: 'update',
      value: function update() {
        this.momentum += momentumGain;

        this.y += this.momentum;
        this.x += windSpeed;

        if (this.y >= canvasHeight) {
          this.x = Math.random() * canvasWidth;
          this.y = Math.random() * -canvasHeight;

          this.momentum = fallRate * (this.z * zdepthMomentumModifier);
        }
      }
    }
  ]);
  return Raindrop;
})();

(function () {
  document.addEventListener('resize', resize);
  resize();

  for (var i = 0; i < 1000; i++) {
    raindrops.push(new Raindrop());
  }

  update();
})();

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('demo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



// window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/<APIKEY>"));

// var Web3 = require("web3")

// MetaMask Check//
window.addEventListener('load', function () {
  if (typeof web3 !== 'undefined') {
    console.log('web3 is enabled')
    if (web3.currentProvider.isMetaMask === true) {
      // console.log('MetaMask is active')
      document.getElementById("buttoncheck").src = "/img/greenbtn.png";
    } else {
      console.log('MetaMask is not available')
    }
  } else {
    // console.log('web3 is not found')
    $('.material-icons').css("color", "red");
  }
})

// //MetaMask Check//
// window.addEventListener('load', function () {
//   // Checking if Web3 has been injected by the browser (MetaMask)
//   if (typeof web3 !== 'undefined') {
//     // Use Mist/MetaMask's provider
//     web3js = new Web3(web3.currentProvider);
//   } else {
//     document.getElementById('cancel').innerHTML = console.log(
//       'No web3? You should consider trying MetaMask!'
//     );
//     // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
//     web3js = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//   }

//   // Now you can start your app & access web3 freely:
//   startApp();
// });

//ETH Mainnet Check//
var web3 = new Web3(
  Web3.givenProvider ||
  new Web3.providers.WebsocketProvider('Web3.givenProvider')
);


// //ETH Object => Web3 constructor//
// import Web3 from 'web3'
// export function setProvider() => {
//   if (window.ethereum) {
//     const ethereum = window.ethereum
//     const web3Provider = new Web3(ethereum)

//     /* make web3Provider available to your entire app now */
//   }
// }

$("#htmlinput").on("input", function () {
  $("#list").html($(this).val());
});

$("#frontendinput").on("input", function () {
  $("#frontendlist").html($(this).val());
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


// var version = web3.version.api;
// console.log(version);


// web3 has to be injected/present
if (web3js) {
  if (web3js.eth.accounts.length) {
    // if not locked, get account
    // const account = web3js.eth.accounts[0];
    console.log('hiii')
    // updates UI, state, pull data
  } else {
    console.log('hiii')
    // locked. update UI. Ask user to unlock.
  }
}

// web3.eth.getBlock(48, function (error, result) {
//   if (!error)
//     console.log(JSON.stringify(result));
//   else
//     console.error(error);
// })

// var balance = web3.eth.getBalance("0x3e541655faab8A3FB0FFf32FE7Bd4440f32322d3");
// console.log(balance); // instanceof BigNumber
// console.log(balance.toString(10)); // '1000000000000'
// console.log(balance.toNumber()); // 1000000000000

// if (!web3.isConnected()) {
//   console.log('hhh')
//   // show some dialog to ask the user to start a node
// } else {
//   console.log('aaa')
//   // start web3 filters, calls, etc

// }


// var listening = web3.net.listening;
// console.log(listening); 

// window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/<APIKEY>"));


testbutton.onclick = function changePic() {
  document.getElementById('pictest').src = "/img/golz.png"
}