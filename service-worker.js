if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,d)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let c={};const f=s=>a(s,r),n={module:{uri:r},exports:c,require:f};e[r]=Promise.all(i.map((s=>n[s]||f(s)))).then((s=>(d(...s),c)))}}define(["./workbox-6da860f9"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/icons/english.png",revision:"a985aa47407e317a6b01b9706a595913"},{url:"assets/icons/github.png",revision:"ef7a02b69836dc8b6a732a54c4200dcb"},{url:"assets/icons/rotate.png",revision:"5d647ca2c9be6315407245d78c39595b"},{url:"assets/icons/school.png",revision:"5919672156d92edd45c4531cd6cc5fb0"},{url:"assets/images/activities.jpg",revision:"7e0312f058165f9e43f00d0a675c2833"},{url:"assets/images/angry.jpg",revision:"de8b55fcb02311a5637bb2e33f1d648e"},{url:"assets/images/animals.jpg",revision:"71d66462d82dad0e66bbc6d15c87fb63"},{url:"assets/images/apple.jpg",revision:"6193eef40d8d19ec9b12a549750a5708"},{url:"assets/images/banana.jpg",revision:"bf16cdf881bfc216e50395d7d13d7611"},{url:"assets/images/blue.jpg",revision:"d6c75d21990557d4a585bb57985e60dc"},{url:"assets/images/body.jpg",revision:"2e93d20e90fbb6354363eedfc0745bd8"},{url:"assets/images/boots.jpg",revision:"711424eed1cccd3a94ab3d914a0521ac"},{url:"assets/images/carrot.jpg",revision:"c09738e00a3da9e3dc8248ec1a69b778"},{url:"assets/images/castle.jpg",revision:"22ed9cc022100d3f556a163cacc64163"},{url:"assets/images/cat.jpg",revision:"7070340f693a5044c87136fb25ec0844"},{url:"assets/images/chicken.jpg",revision:"be310694387d36a6b57d8223a0482336"},{url:"assets/images/clothes.jpg",revision:"e2b823f06fe3c4ed7dcf4da70d13d2cf"},{url:"assets/images/colors.jpg",revision:"491eebbea9c231bd7ebc32d414b5f345"},{url:"assets/images/cow.jpg",revision:"a4247f6498a7c6c58f82f4bb82d7ecec"},{url:"assets/images/cry.jpg",revision:"09bf9fe80f3ee499c4a8b6f0b05eb167"},{url:"assets/images/dog.jpg",revision:"c088a4e6fe8509657d7044727f3d597d"},{url:"assets/images/donkey.jpg",revision:"2e6966c3333c073bb27d151015cf287c"},{url:"assets/images/dragon.jpg",revision:"0b330c8f3acc72b8dcc4086145c275f4"},{url:"assets/images/dress.jpg",revision:"798d5ddddf764339dec2ca7b43fc6f4b"},{url:"assets/images/ear.jpg",revision:"3d42270f41d7f92c842f380c843e8c1f"},{url:"assets/images/eggs.jpg",revision:"b3bcb16e2d263ff31c706f26e3710cfe"},{url:"assets/images/elephant.jpg",revision:"c3f40df6f8fef4d86f4b782042d17823"},{url:"assets/images/emotions.jpg",revision:"a319f7ac1930cb6ca2a8595163f06209"},{url:"assets/images/eye.jpg",revision:"447759f80526b8736740778898442a09"},{url:"assets/images/fairy.jpg",revision:"b888bb0d5d87e35f54e00b71c11acb86"},{url:"assets/images/fairytales.jpg",revision:"731e00c697f47a8301a096671401cd66"},{url:"assets/images/finger.jpg",revision:"d3d9ae7b02c04bd56b691eb1a4ec1e71"},{url:"assets/images/food.jpg",revision:"07fa2398bc10735b36616649ecfc20bd"},{url:"assets/images/green.jpg",revision:"9f33dff3431ee0b4857c4a746fba18e5"},{url:"assets/images/hand.jpg",revision:"d75f234aeb5ab014d17f777ce8d16fd7"},{url:"assets/images/hat.jpg",revision:"ede669433ff23ff8d6913643529bfe8e"},{url:"assets/images/head.jpg",revision:"d75cc69a4e27cdc50512a9bf30630b40"},{url:"assets/images/jump.jpg",revision:"27254931049f89c30d21c67b46c07a2a"},{url:"assets/images/kidding.jpg",revision:"a3a3ba81758227ed2d7879fc94e62766"},{url:"assets/images/king.jpg",revision:"d747a478761ca3793981330844fcadf2"},{url:"assets/images/knight.jpg",revision:"65874371012517b6d87d2085e29fc0c2"},{url:"assets/images/leg.jpg",revision:"5ddee059414605d1a2ad252398d94103"},{url:"assets/images/lemon.jpg",revision:"3b7038d0203d62501bed99032047a324"},{url:"assets/images/lion.jpg",revision:"070a09c2ddaa54a10be6b81c839ba68d"},{url:"assets/images/listen.jpg",revision:"a7941fb9ae031b9f986ae49087353256"},{url:"assets/images/love.jpg",revision:"f637a51168f791caf4724731823efc3b"},{url:"assets/images/meat.jpg",revision:"4def21a7237e3965cb91563f4cd69295"},{url:"assets/images/mermaid.jpg",revision:"817c7655f46722cf31a470ccec796c91"},{url:"assets/images/mittens.jpg",revision:"3d8e0eeacf1b5de49158fba086794c9e"},{url:"assets/images/monkey.jpg",revision:"6865880bc3e69a8c46ca3bf229e37264"},{url:"assets/images/mouth.jpg",revision:"1c235b314406a4c795dd2e0f44f517ac"},{url:"assets/images/navy.jpg",revision:"03684ab6f8c881432cf45fa9beb7d5b9"},{url:"assets/images/nose.jpg",revision:"448be32a9c2f6859109fb069f6560f09"},{url:"assets/images/orange.jpg",revision:"9ae19d317325c06d717d3a4c42d08db6"},{url:"assets/images/pants.jpg",revision:"02a0a0ad6b1a5cc280d3b374f3b9e4b4"},{url:"assets/images/pink.jpg",revision:"b533c692c47a71ed499949b75d2b958c"},{url:"assets/images/play.jpg",revision:"e19c855d40959662d001e4e17c2962d0"},{url:"assets/images/princess.jpg",revision:"f95f580961cdb75ed38737129f502bcf"},{url:"assets/images/pumpkin.jpg",revision:"47af9618eba26bd62410394c45cafa96"},{url:"assets/images/read.jpg",revision:"5309d493509880ac30c1af89c92bfe1a"},{url:"assets/images/red.jpg",revision:"5d333dd672669894d9204f0bd8b0b588"},{url:"assets/images/ride.jpg",revision:"051f2dac966351377fd0a9345f93f09f"},{url:"assets/images/run.jpg",revision:"80dd44e231bebc1e4b72bcd32bf10103"},{url:"assets/images/sad.jpg",revision:"e75f3bf375939e20f9945820a27935fb"},{url:"assets/images/scared.jpg",revision:"defa03bf453f72b4438b789e1d8e9e68"},{url:"assets/images/shirt.jpg",revision:"fad4a00b30e5423356f098638ff7c558"},{url:"assets/images/sleep.jpg",revision:"223e9239875179040f4d3932ffcfac04"},{url:"assets/images/slippers.jpg",revision:"0dae46d914a795d5560059411b303e01"},{url:"assets/images/smile.jpg",revision:"c8904f74aadf7609222a7092b2e1069f"},{url:"assets/images/socks.jpg",revision:"794c416562c1ebde5933c6ec058e9ab9"},{url:"assets/images/squirrel.jpg",revision:"d8d6281c3ea41d043acff9cfcb262a55"},{url:"assets/images/surprized.jpg",revision:"2598d80fdf6a56352fb007805bb9129c"},{url:"assets/images/swim.jpg",revision:"dba7612637985e4d96e320614a73ccce"},{url:"assets/images/tomato.jpg",revision:"5d333dd672669894d9204f0bd8b0b588"},{url:"assets/images/tooth.jpg",revision:"e7f45f73ea13faad37a6486ce466a55e"},{url:"assets/images/violet.jpg",revision:"2d6a55a003c04f2ffbd6534d2dc0526f"},{url:"assets/images/witch.jpg",revision:"51d9a9b7599b9ff87e04503ad703c615"},{url:"assets/images/wizard.jpg",revision:"0d4669e132773d2283288d5c5fd72ea2"},{url:"assets/images/yellow.jpg",revision:"c86b81f2be9a57029b1b3b6af5d0c1e0"},{url:"assets/sounds/angry.mp3",revision:"656908b373287299118b87ae63665179"},{url:"assets/sounds/apple.mp3",revision:"86f5b5ec58786a0dda718f83e4cf57a2"},{url:"assets/sounds/banana.mp3",revision:"30b53b8fa4a32ac642a4f35f54b0de64"},{url:"assets/sounds/blue.mp3",revision:"cfc71091977cf0ff4d433590541be4ab"},{url:"assets/sounds/boots.mp3",revision:"01f435c3bbc79b548aee8f4b3bc9a2f6"},{url:"assets/sounds/carrot.mp3",revision:"8b5ae5c8f7fc0c8cd8822ed1ec3c77f3"},{url:"assets/sounds/castle.mp3",revision:"9c9bded353dc167cf1170331bf6a1ffe"},{url:"assets/sounds/cat.mp3",revision:"237ba4e25cd1b9ba81d74217941ddf1b"},{url:"assets/sounds/chicken.mp3",revision:"97182a8f1c5a72f5da89536801293d40"},{url:"assets/sounds/cow.mp3",revision:"c4029972d980f9f89a99906cd0bb501e"},{url:"assets/sounds/cry.mp3",revision:"c0b05195e85f181e83602ff709ed1c85"},{url:"assets/sounds/dog.mp3",revision:"dfdb62b1c87e9b4427884d0a497508b9"},{url:"assets/sounds/donkey.mp3",revision:"4e05dcfeb23893ac82cd02b56eb1755a"},{url:"assets/sounds/dragon.mp3",revision:"3b35fab9e6b8ca562649d2574d6f8672"},{url:"assets/sounds/dress.mp3",revision:"a08e94da5528001162378fceaef4195b"},{url:"assets/sounds/ear.mp3",revision:"8bde6b27618284a588d30800c5e5f27a"},{url:"assets/sounds/eggs.mp3",revision:"183aba39840f195b2375ac77b3383320"},{url:"assets/sounds/elephant.mp3",revision:"a28d8c873d6deb75e367119295635fed"},{url:"assets/sounds/eye.mp3",revision:"b03028beef028e64e20f042e89d5a1bf"},{url:"assets/sounds/fail.mp3",revision:"6783d86e383e3359c5895c27e4d465e0"},{url:"assets/sounds/fairy.mp3",revision:"d4460ce858ec1d4d28ecbdce4652ad31"},{url:"assets/sounds/finger.mp3",revision:"6c1b831bf2f5074e3bdadf92637da090"},{url:"assets/sounds/green.mp3",revision:"8fb449764d1d1fe3cf6d8766b5dd4500"},{url:"assets/sounds/hand.mp3",revision:"4ab6cf188374d3c76c22ccf9b24c1cdb"},{url:"assets/sounds/hat.mp3",revision:"19d8a49b8f023dfcd334eec2f3e91deb"},{url:"assets/sounds/head.mp3",revision:"504d2c8824c240f03706039c2766d944"},{url:"assets/sounds/jump.mp3",revision:"a430a6a6801f6e508bc951f07941c389"},{url:"assets/sounds/kidding.mp3",revision:"e070304fad5a6561964ac27dc0d5d7d2"},{url:"assets/sounds/king.mp3",revision:"e24e5ddab6c1f341a4fba347be60e4c0"},{url:"assets/sounds/knight.mp3",revision:"079a0717bbba92e915dd1c8b531a6b3d"},{url:"assets/sounds/leg.mp3",revision:"f3e89f45c714aba69973c99d9a1f8f82"},{url:"assets/sounds/lemon.mp3",revision:"52b8474e9214ceec3425e2bf4455720d"},{url:"assets/sounds/lion.mp3",revision:"bd6ad8add5c03c61d8e8e1a5c2914206"},{url:"assets/sounds/listen.mp3",revision:"7beb93a5978f38a57317ee3ff87036af"},{url:"assets/sounds/loss.mp3",revision:"9a6ebd59266412d4c124ef83f578c7cd"},{url:"assets/sounds/love.mp3",revision:"8e708c53455803780613d7671aafe68d"},{url:"assets/sounds/meat.mp3",revision:"c13fac3095878cf923cf9a4acbbf84b7"},{url:"assets/sounds/mermaid.mp3",revision:"4e0e0907929fe458f7eeb7344cc02f9b"},{url:"assets/sounds/mittens.mp3",revision:"25caa5f22f2d5f199dadfac667369992"},{url:"assets/sounds/mouth.mp3",revision:"69ff9c7b0181cc4f0479d6e5331e4724"},{url:"assets/sounds/navy.mp3",revision:"1aa332e238cb88f10216ca72f2a88d93"},{url:"assets/sounds/nose.mp3",revision:"4c7232fd414e1d0b9f04f3d8449d9cf5"},{url:"assets/sounds/orange.mp3",revision:"030aca2ee7913dd52196645c12e67f69"},{url:"assets/sounds/pants.mp3",revision:"ffe314d460e0da9843c3cd9820eeddf3"},{url:"assets/sounds/pink.mp3",revision:"3a1ead0fc93d402e7331f397e54212ed"},{url:"assets/sounds/play.mp3",revision:"dc29cebd0005a632166e1d42671ef389"},{url:"assets/sounds/princess.mp3",revision:"50151d009ea5cf20e4e16c6703acc666"},{url:"assets/sounds/pumpkin.mp3",revision:"5d51163ea5970c7af0aa6fe23012e589"},{url:"assets/sounds/read.mp3",revision:"4c1e9c41bccbc68b490daf70784803b7"},{url:"assets/sounds/red.mp3",revision:"0248f3be6f29acb7269e56ff5c0a44c8"},{url:"assets/sounds/ride.mp3",revision:"cbf9e083f8301ae986990400494c307d"},{url:"assets/sounds/run.mp3",revision:"4218af405be1665daf5f0f031738a2a7"},{url:"assets/sounds/sad.mp3",revision:"6f8e4b6290b5f6e803f30e9c041f5a4f"},{url:"assets/sounds/scared.mp3",revision:"5fb306b50ee35a049877781cdb7e5088"},{url:"assets/sounds/shirt.mp3",revision:"3aa43bc55be36fa3e1674e70de4419b4"},{url:"assets/sounds/sleep.mp3",revision:"4966cf6482e6ad2b7de8ab8de02f5f1a"},{url:"assets/sounds/slippers.mp3",revision:"ba5fcceeda38b7adb33f1ef9ea4acadb"},{url:"assets/sounds/smile.mp3",revision:"b2bca4bdb4543ba681747c1d344db177"},{url:"assets/sounds/socks.mp3",revision:"d900e3d83e352d0c9e28be48c4b83205"},{url:"assets/sounds/squirrel.mp3",revision:"2bc9d9e491320ef641cd3ae71591da99"},{url:"assets/sounds/success.mp3",revision:"4eb0e5d0ec6119778e1f4f1f03c87c35"},{url:"assets/sounds/surprized.mp3",revision:"cd6195c8690d172d3fd5b3691a309fdd"},{url:"assets/sounds/swim.mp3",revision:"7e2b927965aa80fb1353de2396b85c20"},{url:"assets/sounds/tomato.mp3",revision:"98f26c96928580cb301f12c71931a6e6"},{url:"assets/sounds/violet.mp3",revision:"6203dda7c750c5c069c356951d268e32"},{url:"assets/sounds/win.mp3",revision:"eeb523b18282df9877adaa7c6f90b60f"},{url:"assets/sounds/wizard.mp3",revision:"1d541d986a2c2ed1cf6e3f24321e816e"},{url:"assets/sounds/yellow.mp3",revision:"9a5bceb1680b831c170c8d81db1d8262"},{url:"assets/words.json",revision:"dfcdba7925c2a56fcfd58337af583e1f"},{url:"index.html",revision:"d059511fa7b64459b6aa12d94dd983da"},{url:"main.js",revision:"82fccf9eaadc0a49de8626f192c79496"},{url:"main.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{})}));
