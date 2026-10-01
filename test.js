
function translateImageUrl(oldUrl) {
  if (!oldUrl) return '';

  const url = String(oldUrl)
    .replace(/^https:\/\/cdn\.jsdelivr\.net\//i, 'https://testingcf.jsdelivr.net/');

  if (url.includes('https://testingcf.jsdelivr.net/gh/')) {
    return url;
  }

  if (url.includes('https://chicken.parmacitieschools.org/')) {
    const filename = url.split('/').pop().split('?')[0];
    return `https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/${filename}`;
  }

  const filename = url.split('/').pop().split('?')[0];
  return filename
    ? `https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/${filename}`
    : '';
}

function logToClicky(gameName) {
  if (typeof clicky !== "undefined") {
    clicky.log(gameName, "game_click");
  }
}

function translateGameUrl(oldUrl) {
  if (!oldUrl) return '';
  
  
  if (oldUrl.includes('/gba/player.html?game=')) {
    const gameMatch = oldUrl.match(/player\.html\?game=([^&]+)/);
    if (gameMatch && gameMatch[1]) {
      const gameName = gameMatch[1];
      
      return `https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/gba/player.html?game=${gameName}`;
    }
  }
  
  
  if (oldUrl.includes('player.html?game=')) {
    const urlMatch = oldUrl.match(/player\.html\?game=(.+)/);
    if (urlMatch && urlMatch[1]) {
      const gameUrl = decodeURIComponent(urlMatch[1]);
      return extractGamePath(gameUrl);
    }
  }
  
  
  return extractGamePath(oldUrl);
}

function extractGamePath(fullUrl) {
 
  if (fullUrl.includes('https://testingcf.jsdelivr.net/gh/')) {
    return fullUrl;
  }
  
  
  let path = fullUrl;
  
  
  if (path.includes('https://chicken.parmacitieschools.org/')) {
    path = path.replace('https://chicken.parmacitieschools.org/', '');
  }
  
  
  path = path.replace(/\/$/, '');
  
  
  const parts = path.split('/');
  if (parts.length < 1) return '';
  
 
  if (parts.length === 1) {
    const gameName = parts[0];
    return `https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/waycrosspublicmedia/${gameName}.html`;
  }
  
  const urlPath = parts.slice(0, -1).join('/');
  const gameName = parts.pop();
  
  
  return `https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/${urlPath}/${gameName}.html`;
}


const games = [
   {
    id: 1,
    title: "Anti Terrorist Rush",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/anti-terrorist-rush.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/anti-terrorist-rush/",
    isNew: false
  },
  {
    id: 2,
    title: "Bad Ice Cream 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bad-ice-cream-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bad-ice-cream-2/",
    isNew: false
  },
  {
    id: 3,
    title: "Bad Ice Cream 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bad-ice-cream-3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bad-ice-cream-3/",
    isNew: false
  },
  {
    id: 4,
    title: "Bad Ice Cream",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bad-ice-cream.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bad-ice-cream/",
    isNew: false
  },
  {
    id: 6,
    title: "Cat Connection",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/catconnection.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/catconnection/",
    isNew: false
  },
  {
    id: 7,
    title: "Douchebag Workout 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/douchebag-workout-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/douchebag-workout-2/",
    isNew: false
  },
  {
    id: 8,
    title: "Froggys Battle",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/froggys-battle.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/froggys-battle/",
    isNew: false
  },
  {
    id: 9,
    title: "Gimme The Airpod",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gimme-the-airpod.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/gimme-the-airpod/",
    isNew: false
  },
  {
    id: 10,
    title: "an average day at the cat cafe",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/catcafe.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/catcafe/",
    isNew: false
  },
  {
    id: 11,
    title: "Helios",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/helios.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/helios/",
    isNew: false
  },
  {
    id: 12,
    title: "Matrix Rampage",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/matrixrampage.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/matrixrampage/",
    isNew: false
  },
  {
    id: 13,
    title: "SpongeBob SquarePants: Bubble Blast",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bubble-blast.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/bubble-blast/",
    isNew: false
  },
  {
    id: 14,
    title: "2048 Merge Run",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/2048-merge-run.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/2048-merge-run/",
    isNew: false
  },
  {
    id: 15,
    title: "Build a Big Army",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/build-a-big-army.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/build-a-big-army/",
    isNew: false
  },
  {
    id: 16,
    title: "1010 Deluxe",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/1010deluxe.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/schol/1010deluxe/",
    isNew: false
  },
  {
    id: 17,
    title: "3 Pandas",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/build-a-big-army.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/schol/3pandas/",
    isNew: false
  },
  {
    id: 18,
    title: "Hoop Royale",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/HoopRoyale-gh-pages.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/schol/HoopRoyale-gh-pages/",
    isNew: false
  },
  {
    id: 19,
    title: "Boxing Random",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/boxingrandom.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/schol/boxingrandom/",
    isNew: false
  },
  {
    id: 20,
    title: "Bubble Tower 3d",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bubbletower3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/schol/bubbletower3d/",
    isNew: false
  },
  {
    id: 21,
    title: "Build a Plane",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/build-a-plane.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/build-a-plane/",
    isNew: false
  },
  {
    id: 22,
    title: "Camouflage and Sniper",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/camouflage-and-sniper.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/camouflage-and-sniper/",
    isNew: false
  },
  {
    id: 23,
    title: "Car Survival 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/car-survival-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/car-survival-3d/",
    isNew: false
  },
  {
    id: 24,
    title: "City Defense",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/city-defense.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/city-defense/",
    isNew: false
  },
  {
    id: 25,
    title: "Clothing Shop 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/clothing-shop-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/clothing-shop-3d/",
    isNew: false
  },
  {
    id: 26,
    title: "Cool Cars Run 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cool-cars-run-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/cool-cars-run-3d/",
    isNew: false
  },
  {
    id: 27,
    title: "Crush Cars 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/crush-cars-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/crush-cars-3d/",
    isNew: false
  },
  {
    id: 28,
    title: "Scarlet Shift",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/scarletshift.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/schol/scarletshift/",
    isNew: false
  },
  {
    id: 29,
    title: "The Final Cat",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/finalcat.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/schol/finalcat/",
    isNew: false
  },
  {
    id: 30,
    title: "Renegade Rally",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/renegaderally.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/schol/renegaderally/",
    isNew: false
  },
  {
    id: 31,
    title: "Destroy the Car 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/destroy-the-car-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/destroy-the-car-3d/",
    isNew: false
  },
  {
    id: 32,
    title: "Wild Kratts: Archerfish Bug Rush",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/archerfish-bug-rush.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/archerfish-bug-rush/",
    isNew: false
  },
  {
    id: 33,
    title: "Wild Kratts: Creature Mobile",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/creature-mobile.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/creature-mobile/",
    isNew: false
  },
  {
    id: 34,
    title: "Bendy and the Ink Machine",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bendy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/vendors/bendy/",
    isNew: false
  },
  {
    id: 35,
    title: "Yandere Simulator",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/yandere-simulator.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/yandere-simulator/",
    isNew: false
  },
  {
    id: 36,
    title: "FNF: CN Lost Episodes",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cnlost.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/cnlost/",
    isNew: false
  },
  {
    id: 37,
    title: "FNF: Sweet Licorice",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/licorice.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/licorice/",
    isNew: false
  },
  {
    id: 38,
    title: "FNF: Porifera Atoll",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/porifera.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/porifera/",
    isNew: false
  },
  {
    id: 39,
    title: "FNF: Tails Gets Trolled",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tailstroll.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/tailstroll/",
    isNew: false
  },
  {
    id: 40,
    title: "FNF: ATROCITY 2025",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/atrocity.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/atrocity/",
    isNew: false
  },
  {
    id: 41,
    title: "FNF: Chev (V-Slice One Shot)",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/chev.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/chev/",
    isNew: false
  },
  {
    id: 42,
    title: "Wild Kratts: Monkey Mayhem",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/monkey-mayhem.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/monkey-mayhem/",
    isNew: false
  },
  {
    id: 43,
    title: "Wild Kratts: Amazin' Amazon Adventure",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/amazin-amazon-adventure.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/amazin-amazon-adventure/",
    isNew: false
  },
  {
    id: 44,
    title: "Super Mario Micro Land",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/super-mario-micro-land.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/super-mario-micro-land/",
    isNew: false
  },
  {
    id: 45,
    title: "Diamond Seeker",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/diamond-seeker.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/diamond-seeker/",
    isNew: false
  },
  {
    id: 46,
    title: "Draw Joust",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/draw-joust.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/draw-joust/",
    isNew: false
  },
  {
    id: 47,
    title: "Evolving Bombs 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/evolving-bombs-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/evolving-bombs-3d/",
    isNew: false
  },
  {
    id: 48,
    title: "Fire and Frost Master",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fire-and-frost-master.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/fire-and-frost-master/",
    isNew: false
  },
  {
    id: 49,
    title: "Fitness Empire",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fitness-empire.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/fitness-empire/",
    isNew: false
  },
  {
    id: 50,
    title: "SpongeBob SquarePants: Land Ho!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spongebob-landho.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/spongebob-landho/",
    isNew: false
  },
  {
    id: 51,
    title: "SpongeBob SquarePants: SpongeBob Run",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spongebob-run.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/spongebob-run/",
    isNew: false
  },
  {
    id: 52,
    title: "Mario Party Advance",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/marioparty.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=marioparty",
    isNew: false
  },
  {
    id: 53,
    title: "WarioWare, Inc.",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/wario_ware.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=wario_ware",
    isNew: false
  },
  {
    id: 54,
    title: "The Legend of Zelda: A Link to the Past",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/zelda_past.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=zelda_past",
    isNew: false
  },
  {
    id: 55,
    title: "Final Fantasy 1 & 2 Advance",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ff1and2.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=ff1and2",
    isNew: false
  },
  {
    id: 56,
    title: "Final Fantasy IV Advance (Sound Restoration Mod)",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ff4S.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=ff4S",
    isNew: false
  },
  {
    id: 57,
    title: "Final Fantasy VI Advance",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ff6.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=ff6",
    isNew: false
  },
  {
    id: 58,
    title: "Final Fantasy Tactics Advance",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/final_fantasy_tactics.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=final_fantasy_tactics",
    isNew: false
  },
  {
    id: 59,
    title: "Fire Emblem",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fire_emblem.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=fire_emblem",
    isNew: false
  },
  {
    id: 60,
    title: "Digimon Racing",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/digimon_racing.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=digimon_racing",
    isNew: false
  },
  {
    id: 61,
    title: "The Legend of Zelda: The Minish Cap",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/zelda_minish.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=zelda_minish",
    isNew: false
  },
  {
    id: 62,
    title: "Bomberman Max 2 - Blue Advance",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bomberman_max2blue.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=bomberman_max2blue",
    isNew: false
  },
  {
    id: 63,
    title: "Bomberman Tournament",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bomberman_tournament.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=bomberman_tournament",
    isNew: false
  },
  {
    id: 64,
    title: "Bubble Bobble: Old and New",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bubblebobble.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=bubblebobble",
    isNew: false
  },
  {
    id: 65,
    title: "F-Zero - GP Legend",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fzero_gp.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=fzero_gp",
    isNew: false
  },
  {
    id: 66,
    title: "F-Zero - Maximum Velocity",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fzero_max.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=fzero_max",
    isNew: false
  },
  {
    id: 67,
    title: "Game & Watch Gallery 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gamewatch4.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=gamewatch4",
    isNew: false
  },
  {
    id: 68,
    title: "Golden Sun",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/goldensun.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=goldensun",
    isNew: false
  },
  {
    id: 69,
    title: "Gunstar Super Heroes",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gunstar_super_heroes.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=gunstar_super_heroes",
    isNew: false
  },
  {
    id: 70,
    title: "Hamtaro - Ham-Ham Heartbreak",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hamtaro_heartbreak.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=hamtaro_heartbreak",
    isNew: false
  },
  {
    id: 71,
    title: "Iridion 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/iridion.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=iridion",
    isNew: false
  },
  {
    id: 72,
    title: "Kirby & The Amazing Mirror",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/kirbymirror.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=kirbymirror",
    isNew: false
  },
  {
    id: 73,
    title: "Kirby: Nightmare in Dream Land",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/kirbynightmare.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=kirbynightmare",
    isNew: false
  },
  {
    id: 74,
    title: "The Amazing World of Gumball: Disc Duel",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/discduel.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/discduel/",
    isNew: false
  },
  {
    id: 75,
    title: "The Amazing World of Gumball: Swing Out",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/swingout.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/swingout/",
    isNew: false
  },
  {
    id: 76,
    title: "The Amazing World of Gumball: Remote Fu",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/remotefu.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/remotefu/",
    isNew: false
  },
  {
    id: 77,
    title: "The Amazing World of Gumball: Snow Stoppers",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/snowstoppers.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/snowstoppers/",
    isNew: false
  },
  {
    id: 78,
    title: "The Amazing World of Gumball: Water Sons",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/watersons.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/watersons/",
    isNew: false
  },
  {
    id: 79,
    title: "SpongeBob SquarePants: Squidward's Sizzlin' Scare",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spongebob-sizzle.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/spongebob-sizzle/",
    isNew: false
  },
  {
    id: 80,
    title: "SpongeBob SquarePants: Sandy's Sponge Stacker",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spongebob-stacker.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/spongebob-stacker/",
    isNew: false
  },
  {
    id: 81,
    title: "SpongeBob SquarePants: Tasty Pastry Party",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spongebob-tasty.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/spongebob-tasty/",
    isNew: false
  },
  {
    id: 82,
    title: "SpongeBob SquarePants: The Kah-Ray-Tay Squid",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spongebob-thekahrahtaysquid.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/spongebob-thekahrahtaysquid/",
    isNew: false
  },
  {
    id: 83,
    title: "HACHAMECHA MARCHEN",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hachamecha.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/hachamecha/",
    isNew: false
  },
  {
    id: 84,
    title: "PortaBoy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/portaboy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/portaboy/",
    isNew: false
  },
  {
    id: 85,
    title: "Oshi Oshi Punch!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/oshi-oshi-punch.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/oshi-oshi-punch/",
    isNew: false
  },
  {
    id: 86,
    title: "Bad Monday Simulator",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bad-monday-simulator.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/bad-monday-simulator/",
    isNew: false
  },
  {
    id: 87,
    title: "Human Expenditure Program (BLOODMONEY! 2)",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/human-expenditure-program.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/human-expenditure-program/",
    isNew: false
  },
  {
    id: 88,
    title: "DOKI BOOM DASH!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/dokiboomdash.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/dokiboomdash/",
    isNew: false
  },
  {
    id: 89,
    title: "kana.exe",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/kanaexe.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/kanaexe/",
    isNew: false
  },
  {
    id: 90,
    title: "Neo Malta",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/neomalta.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/neomalta/",
    isNew: false
  },
  {
    id: 91,
    title: "let's hide the body!♡ (tee-hee~)",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hidethebody.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/hidethebody/",
    isNew: false
  },
  {
    id: 92,
    title: "SpongeBob SquarePants: WereSquirrel",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spongebob-weresquirrel.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/spongebob-weresquirrel/",
    isNew: false
  },
  {
    id: 93,
    title: "SpongeBob SquarePants: Krabby Katch",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/krabbykatch.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/krabbykatch/",
    isNew: false
  },
  {
    id: 94,
    title: "Flick Goal",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/flick-goal.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/flick-goal/",
    isNew: false
  },
  {
    id: 95,
    title: "Flip Master",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/flip-master.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/flip-master/",
    isNew: false
  },
  {
    id: 96,
    title: "Giant Wanted",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/giant-wanted.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/giant-wanted/",
    isNew: false
  },
  {
    id: 97,
    title: "Gun Clone",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gun-clone.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/gun-clone/",
    isNew: false
  },
  {
    id: 98,
    title: "Gun Runner",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gun-runner.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/gun-runner/",
    isNew: false
  },
  {
    id: 99,
    title: "High Heels",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/high-heels.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/high-heels/",
    isNew: false
  },
  {
    id: 100,
    title: "Kaji Run",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/kaji-run.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/kaji-run/",
    isNew: false
  },
  {
    id: 101,
    title: "Make a Superboat",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/make-a-superboat.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/make-a-superboat/",
    isNew: false
  },
  {
    id: 102,
    title: "Makeover Run",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/makeover-run.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/makeover-run/",
    isNew: false
  },
  {
    id: 103,
    title: "Mega Car Jumps",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/mega-car-jumps.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/mega-car-jumps/",
    isNew: false
  },
  {
    id: 104,
    title: "Money Rush",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/money-rush.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/money-rush/",
    isNew: false
  },
  {
    id: 105,
    title: "Monster Box 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/monster-box-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/monster-box-3d/",
    isNew: false
  },
  {
    id: 106,
    title: "Office Fight",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/office-fight.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/office-fight/",
    isNew: false
  },
  {
    id: 107,
    title: "Robot Invasion",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/robot-invasion.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/robot-invasion/",
    isNew: false
  },
  {
    id: 108,
    title: "Run Rich 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/run-rich-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/run-rich-3d/",
    isNew: false
  },
  {
    id: 109,
    title: "Save P Diddy From Prison",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/save-p-diddy-from-prison.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/save-p-diddy-from-prison/",
    isNew: false
  },
  {
    id: 110,
    title: "Seat Jam 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/seat-jam-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/seat-jam-3d/",
    isNew: false
  },
  {
    id: 111,
    title: "Shooting Master",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/shooting-master.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/shooting-master/",
    isNew: false
  },
  {
    id: 112,
    title: "Supermarket 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/supermarket-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/supermarket-3d/",
    isNew: false
  },
  {
    id: 113,
    title: "Survive to Victory",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/survive-to-victory.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/survive-to-victory/",
    isNew: false
  },
  {
    id: 114,
    title: "Telekinesis Attack",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/telekinesis-attack.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/telekinesis-attack/",
    isNew: false
  },
  {
    id: 115,
    title: "Telekinesis Car",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/telekinesis-car.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/telekinesis-car/",
    isNew: false
  },
  {
    id: 116,
    title: "Telekinesis Drive",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/telekinesis-drive.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/telekinesis-drive/",
    isNew: false
  },
  {
    id: 117,
    title: "Telekinesis",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/telekinesis.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/telekinesis/",
    isNew: false
  },
  {
    id: 118,
    title: "Triple Match 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/triple-match-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/triple-match-3d/",
    isNew: false
  },
  {
    id: 119,
    title: "Tug of War With Cars",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tug-of-war-with-cars.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/tug-of-war-with-cars/",
    isNew: false
  },
  {
    id: 120,
    title: "Twerk Race 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/twerk-race-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/twerk-race-3d/",
    isNew: false
  },
  {
    id: 121,
    title: "Twisted Rope 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/twisted-rope-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/twisted-rope-3d/",
    isNew: false
  },
  {
    id: 122,
    title: "Wall Crawler",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/wall-crawler.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/wall-crawler/",
    isNew: false
  },
  {
    id: 123,
    title: "War Regions",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/war-regions.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/war-regions/",
    isNew: false
  },
  {
    id: 124,
    title: "Weapon Craft Run",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/weapon-craft-run.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/weapon-craft-run/",
    isNew: false
  },
  {
    id: 125,
    title: "Weapon Upgrade Rush",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/weapon-upgrade-rush.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/weapon-upgrade-rush/",
    isNew: false
  },
  {
    id: 126,
    title: "Wheel Scale",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/wheel-scale.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/brainrot/wheel-scale/",
    isNew: false
  },
  {
    id: 127,
    title: "Class of '09: The Re-Up",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/re-up.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/gamepath/re-up/",
    isNew: false
  },
  {
    id: 128,
    title: "Pixel Cave",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pixel-cave.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/pixel-cave/",
    isNew: false
  },
  {
    id: 129,
    title: "Push The Square",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/push-the-square.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/push-the-square/",
    isNew: false
  },
  {
    id: 130,
    title: "Slope Ball",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/slope-ball.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/slope-ball/",
    isNew: false
  },
  {
    id: 131,
    title: "Slope 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/slope2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/slope2/",
    isNew: false
  },
  {
    id: 132,
    title: "Jelly Well",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/jelly-well.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/jellywell/",
    isNew: false
  },
  {
    id: 133,
    title: "SpongeBob SquarePants: Marble Bash",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/marble-bash.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/marble-bash/",
    isNew: false
  },
  {
    id: 134,
    title: "Sonic The Hedgehog 2: Community's Cut",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sonic2.jpg",
    url: "https://chicken.parmacitieschools.org/assets/sonic2/",
    isNew: false
  },
  {
    id: 135,
    title: "Sonic The Hedgehog 3: Angel Island Revisited",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sonic3.jpg",
    url: "https://chicken.parmacitieschools.org/assets/sonic3/sonic3air_web.html",
    isNew: false
  },
  {
    id: 136,
    title: "SpongeBob SquarePants: Monster Island",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spongebob-monster-island.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/spongebob-monster-island/",
    isNew: false
  },
  {
    id: 137,
    title: "SpongeBob SquarePants: Cardbored",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spongebob-squarepants-cardbored.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/assets/spongebob-squarepants-cardbored/",
    isNew: false
  },
  {
    id: 138,
    title: "Packabunchas",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/packabunchas.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/packabunchas/",
    isNew: false
  },
  {
    id: 139,
    title: "Papas Sushiria",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/papas-sushiria.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/papas-sushiria/",
    isNew: false
  },
  {
    id: 140,
    title: "Infernae",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/infernae.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/infernae/",
    isNew: false
  },
  {
    id: 141,
    title: "Kart Kingdom Racing",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/kartkingdom.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/kartkingdom/",
    isNew: false
  },
  {
    id: 142,
    title: "I woke up next to you again.",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/nextyou.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/nextyou/",
    isNew: false
  },
  {
    id: 143,
    title: "Pinball Mania",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pinballmania.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/pinballmania/",
    isNew: false
  },
  {
    id: 144,
    title: "Super Zombies Again",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/superzombie.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/superzombie/",
    isNew: false
  },
  {
    id: 145,
    title: "UNDERWHEELS",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/underwheels.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/underwheels/",
    isNew: false
  },
  {
    id: 146,
    title: "Squid Gun Fest",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/SquidGunFest.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/SquidGunFest/",
    isNew: false
  },
  {
    id: 147,
    title: "Space Company",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/space-company.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/space-company/",
    isNew: false
  },
  {
    id: 148,
    title: "Space Garden",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spacegarden.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/spacegarden/",
    isNew: false
  },
  {
    id: 149,
    title: "Stickman Epic Battle",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/stickman-epic-battle.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/stickman-epic-battle/",
    isNew: false
  },
  {
    id: 150,
    title: "Storm The House2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/stormthehouse2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/stormthehouse2/",
    isNew: false
  },
  {
    id: 151,
    title: "Tanuki Sunset",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tanuki-sunset.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/tanuki-sunset/",
    isNew: false
  },
  {
    id: 153,
    title: "Go! Go! K.O.!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gogoko.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/gogoko/",
    isNew: false
  },
  {
    id: 154,
    title: "groon groon, babey!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/groongroon.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/groongroon/",
    isNew: false
  },
  {
    id: 155,
    title: "RigBMX",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rigbmx.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/rigbmx/rigbmx-en-290817/",
    isNew: false
  },
  {
    id: 156,
    title: "RigBMX 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rigbmx2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/rigbmx2/",
    isNew: false
  },
  {
    id: 157,
    title: "Slither.io Online",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/slitherio.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/slitherio/",
    isNew: false
  },
  {
    id: 158,
    title: "The Race",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/therace.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/therace/",
    isNew: false
  },
  {
    id: 159,
    title: "Tricolor",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tricolor.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/tricolor/",
    isNew: false
  },
  {
    id: 160,
    title: "Jump Jousts",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/jumpjousts.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/jumpjousts/",
    isNew: false
  },
  {
    id: 161,
    title: "Jump Jousts 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/jumpjousts2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/jumpjousts2/",
    isNew: false
  },
  {
    id: 162,
    title: "Love Letters",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/love-letters.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/love-letters/",
    isNew: false
  },
  {
    id: 163,
    title: "Parking Lot Wars",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/parkinglotwars.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/parkinglotwars/",
    isNew: false
  },
  {
    id: 164,
    title: "Police Getaway",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/police.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/police/",
    isNew: false
  },
  {
    id: 165,
    title: "Go! Slimey Go!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/slimey.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/slimey/",
    isNew: false
  },
  {
    id: 166,
    title: "Your Turn To Die",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/yttd.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/yttd/",
    isNew: false
  },
  {
    id: 167,
    title: "FNF: Kick Kick Funk!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/kick.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/kick/",
    isNew: false
  },
  {
    id: 168,
    title: "Dont Drop The White Ball 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/dont-drop-the-white-ball-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/dont-drop-the-white-ball-2/",
    isNew: false
  },
  {
    id: 169,
    title: "Generic Fishing Game",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/generic-fishing-game.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/generic-fishing-game/",
    isNew: false
  },
  {
    id: 170,
    title: "Geometry Jump Sketchy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/geometry_jump_sketchy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/geometry_jump_sketchy/",
    isNew: false
  },
  {
    id: 171,
    title: "Icy's Purple Head",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/icys-purple-head.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/icys-purple-head/",
    isNew: false
  },
  {
    id: 172,
    title: "Interactive Buddy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/interactivebuddy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/interactivebuddy/",
    isNew: false
  },
  {
    id: 173,
    title: "Jimothy Piggerton",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/jimothy-piggerton.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/jimothy-piggerton/",
    isNew: false
  },
  {
    id: 175,
    title: "Swordfight",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/swordfight.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/swordfight/",
    isNew: false
  },
  {
    id: 176,
    title: "Dude Theft Auto",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/dudetheft.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/dudetheft/",
    isNew: false
  },
  {
    id: 177,
    title: "Labubu Clicker",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/labubu.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/labubu/",
    isNew: false
  },
  {
    id: 178,
    title: "Class of 09'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/class09.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/class-of-09/",
    isNew: false
  },
  {
    id: 179,
    title: "Ultrakill",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ultrakill.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/ultrakill/",
    isNew: false
  },
  {
    id: 180,
    title: "BLOODMONEY!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bmoney.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bmoney/",
    isNew: false
  },
  {
    id: 181,
    title: "Infinite Mario",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/infmar.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/infmar/",
    isNew: false
  },
  {
    id: 182,
    title: "Hextris",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hxtrs.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/hxtrs/",
    isNew: false
  },
  {
    id: 183,
    title: "Chiikawa Puzzle",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/chiipuz.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/chiipuz/",
    isNew: false
  },
  {
    id: 184,
    title: "Ovo 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ovo2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/ovo2/",
    isNew: false
  },
  {
    id: 185,
    title: "Bubble Pop Adventures",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bubblepopadventures.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bubblepopadventures/",
    isNew: false
  },
  {
    id: 186,
    title: "Head Soccer 2023",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/headsoccer2023.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/headsoccer2023/",
    isNew: false
  },
  {
    id: 187,
    title: "3D Bowling",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/3dbowling.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/3dbowling/",
    isNew: false
  },
  {
    id: 188,
    title: "Basket and Ball",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/basketandball.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/basketandball/",
    isNew: false
  },
  {
    id: 189,
    title: "Block the Pig",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/blockthepig.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/blockthepig/",
    isNew: false
  },
  {
    id: 190,
    title: "FNAF: Sister Location",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fnaf5.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/fnaf5/",
    isNew: false
  },
  {
    id: 191,
    title: "Neon Leap",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/neon-leap.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/neon-leap/",
    isNew: false
  },
  {
    id: 192,
    title: "Temple Run 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/temple-run-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/temple-run-2/",
    isNew: false
  },
  {
    id: 193,
    title: "Winter Clash 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/winter-clash-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/winter-clash-3d/",
    isNew: false
  },
  {
    id: 194,
    title: "Color Pencil Run",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/color-pencil-run.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/color-pencil-run/",
    isNew: false
  },
  {
    id: 195,
    title: "People Playground",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/peopleplayground.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/gamepath/people-playground/",
    isNew: false
  },
  {
    id: 196,
    title: "Yume Nikki",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/yumenikki.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/gamepath/yume-nikki/",
    isNew: false
  },
  {
    id: 197,
    title: "Pure CSS Stack",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/stck.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/stck/",
    isNew: false
  },
  {
    id: 198,
    title: "Phineas and Ferb Tetris",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pftet.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/bestgameevermadefrfrong/",
    isNew: false
  },
  {
    id: 199,
    title: "Doki Doki Literature Club",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ddlc.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/dokidokiliteratureclub.html",
    isNew: false
  },
  {
    id: 200,
    title: "Undertale",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/undertalereal.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/gamepath/undertale/",
    isNew: false
  },
  {
    id: 201,
    title: "Deltarune",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/deltarune.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/gamepath/deltarune/",
    isNew: false
  },
  {
    id: 202,
    title: "FNF: an FNF Bocchi the Rock! mod (DEMO)",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bocchi.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/bocchi/",
    isNew: false
  },
  {
    id: 203,
    title: "FNF: Weekend 1: Girlfriend Mix",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gfmixes.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/gfmix/",
    isNew: false
  },
  {
    id: 204,
    title: "Lacey's Flash Games",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/lacey.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/gamepath/lacysflashgames/",
    isNew: false
  },
  {
    id: 205,
    title: "Do NOT Take This Cat Home",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/dontcat.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/gamepath/donottakethiscathome/",
    isNew: false
  },
  {
    id: 206,
    title: "Papa louie",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/papalouie.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/papalouie/",
    isNew: false
  },
  {
    id: 207,
    title: "Papa louie 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/papalouie2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/papalouie2/",
    isNew: false
  },
  {
    id: 208,
    title: "Papa louie 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/papalouie3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/papalouie3/",
    isNew: false
  },
  {
    id: 209,
    title: "Quest For Bacon",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bacon.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bacon/",
    isNew: false
  },
  {
    id: 210,
    title: "Get To The Top Although There Is No Top BFDI",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gettotopbfdi.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/gettotopbfdi/",
    isNew: false
  },
  {
    id: 211,
    title: "Not So Special Stage",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/notsospecialstage.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/notsospecialstage/",
    isNew: false
  },
  {
    id: 212,
    title: "100ng",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/100ng.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/100ng/",
    isNew: false
  },
  {
    id: 213,
    title: "8Ball Billards Classic",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/8ball-billards-classic.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/8ball-billards-classic/",
    isNew: false
  },
  {
    id: 214,
    title: "Snake",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/google-snake.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/google-snake/",
    isNew: false
  },
  {
    id: 215,
    title: "Solitaire",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/google-solitaire.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/google-solitaire/",
    isNew: false
  },
  {
    id: 216,
    title: "Arcade Wizard",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/arcade-wizard.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/arcade-wizard/",
    isNew: false
  },
  {
    id: 217,
    title: "Black Hole Square",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/blackholesquare.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/blackholesquare/",
    isNew: false
  },
  {
    id: 218,
    title: "Black Knight",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/blackknight.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/blackknight/",
    isNew: false
  },
  {
    id: 219,
    title: "Bloons Tower Defense",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bloonstd.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bloonstd/",
    isNew: false
  },
  {
    id: 220,
    title: "Bloons Tower Defense 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bloonstd2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bloonstd2/",
    isNew: false
  },
  {
    id: 221,
    title: "Among Us",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/among-us.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/among-us/",
    isNew: false
  },
  {
    id: 222,
    title: "Ascii Space",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/asciispace.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/asciispace/",
    isNew: false
  },
  {
    id: 223,
    title: "Aspiring Artist",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/aspiring-artist.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/aspiring-artist/",
    isNew: false
  },
  {
    id: 224,
    title: "Cannon Basketball 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cannon-basketball-4.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/cannon-basketball-4/",
    isNew: false
  },
  {
    id: 225,
    title: "Crowd City 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/crowd-city-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/crowd-city-2/",
    isNew: false
  },
  {
    id: 226,
    title: "Defend The Tank",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/defend-the-tank.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/defend-the-tank/",
    isNew: false
  },
  {
    id: 227,
    title: "Doctor Acorn 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/doctor-acorn2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/doctor-acorn2/",
    isNew: false
  },
  {
    id: 228,
    title: "Double Wires",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/doublewires.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/doublewires/",
    isNew: false
  },
  {
    id: 229,
    title: "Dragon Vs Bricks",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/dragon-vs-bricks.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/dragon-vs-bricks/",
    isNew: false
  },
  {
    id: 230,
    title: "Grey Box Testing",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/greybox.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/greybox/",
    isNew: false
  },
  {
    id: 231,
    title: "Protektor",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/protektor.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/protektor/",
    isNew: false
  },
  {
    id: 232,
    title: "Rocking Sky Trip",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rocking-sky-trip.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/rocking-sky-trip/",
    isNew: false
  },
  {
    id: 233,
    title: "Smoking Barrels",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/smokingbarrels.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/smokingbarrels/",
    isNew: false
  },
  {
    id: 234,
    title: "Winter Falling Price",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/winter-falling-price.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/winter-falling-price/",
    isNew: false
  },
  {
    id: 235,
    title: "Battle For Gondor",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/battleforgondor.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/battleforgondor/",
    isNew: false
  },
  {
    id: 236,
    title: "Connect 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/connect3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/connect3/",
    isNew: false
  },
  {
    id: 237,
    title: "Craft Mine",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/craftmine.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/craftmine/",
    isNew: false
  },
  {
    id: 238,
    title: "Doge Mining Simulator",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/doge-mining-simulator.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/doge-mining-simulator/",
    isNew: false
  },
  {
    id: 239,
    title: "Flappy 2048",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/flappy-2048.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/flappy-2048/",
    isNew: false
  },
  {
    id: 240,
    title: "Flappy Defense",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/flappy-defense.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/flappy-defense/",
    isNew: false
  },
  {
    id: 241,
    title: "A Game Inside A Game",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/game-inside.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/game-inside/",
    isNew: false
  },
  {
    id: 242,
    title: "Evil Glitch",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/evil-glitch.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/evil-glitch/",
    isNew: false
  },
  {
    id: 243,
    title: "Hobo",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hobo.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/hobo/",
    isNew: false
  },
  {
    id: 244,
    title: "Hobo 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hobo2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/hobo2/",
    isNew: false
  },
  {
    id: 245,
    title: "Hobo 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hobo3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/hobo3/",
    isNew: false
  },
  {
    id: 246,
    title: "Hobo 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hobo4.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/hobo4/",
    isNew: false
  },
  {
    id: 247,
    title: "Hobo 5",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hobo5.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/hobo5/",
    isNew: false
  },
  {
    id: 248,
    title: "Hobo 6",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hobo6.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/hobo6/",
    isNew: false
  },
  {
    id: 249,
    title: "Hobo 7",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hobo7.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/hobo7/",
    isNew: false
  },
  {
    id: 250,
    title: "Rolling Forests",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rolling-forests.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/rolling-forests/",
    isNew: false
  },
  {
    id: 251,
    title: "Shards",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/shards.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/shards/",
    isNew: false
  },
  {
    id: 252,
    title: "Doge 2048",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/doge2048.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/doge2048/",
    isNew: false
  },
  {
    id: 253,
    title: "Make It Meme",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/makeitmeme.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/makeitmeme/",
    isNew: false
  },
  {
    id: 254,
    title: "Klocki",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/klocki.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/klocki/",
    isNew: false
  },
  {
    id: 255,
    title: "Poly Branch",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/polybranch.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/polybranch/",
    isNew: false
  },
  {
    id: 256,
    title: "Retro Haunt",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/retrohaunt.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/retrohaunt/",
    isNew: false
  },
  {
    id: 257,
    title: "Backrooms",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/backrooms.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/backrooms/",
    isNew: false
  },
  {
    id: 258,
    title: "Bounce Back",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bounceback.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bounceback/",
    isNew: false
  },
  {
    id: 259,
    title: "Color Switch 2 Challenges",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/color-switch-2-challenges.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/color-switch-2-challenges/",
    isNew: false
  },
  {
    id: 260,
    title: "Gun Spin",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gunspin.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/gunspin/",
    isNew: false
  },
  {
    id: 261,
    title: "Shift Flash",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/shift-flash.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/shift-flash/",
    isNew: false
  },
  {
    id: 262,
    title: "Shift Flash 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/shift-flash-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/shift-flash-2/",
    isNew: false
  },
  {
    id: 263,
    title: "Sort The Court",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sort-the-court.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/sort-the-court/",
    isNew: false
  },
  {
    id: 264,
    title: "Soundboard",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/soundboard.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/soundboard/",
    isNew: false
  },
  {
    id: 265,
    title: "Space Huggers",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spacehuggers.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/spacehuggers/",
    isNew: false
  },
  {
    id: 267,
    title: "Tiny Fragments",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tiny-fragments.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/tiny-fragments/",
    isNew: false
  },
  {
    id: 268,
    title: "Tough Growth",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tough-growth.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/tough-growth/",
    isNew: false
  },
  {
    id: 269,
    title: "Yoshi's Fabrication",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/yoshifabrication.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/yoshifabrication/",
    isNew: false
  },
  {
    id: 270,
    title: "You Are Bezos",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/you-are-bezos.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/you-are-bezos/",
    isNew: false
  },
  {
    id: 271,
    title: "Rolly Vortex",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rolly-vortex.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/rolly-vortex/",
    isNew: false
  },
  {
    id: 272,
    title: "The little Giant",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/the-little-giant.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/the-little-giant/",
    isNew: false
  },
  {
    id: 273,
    title: "Tiny Fishing",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tiny-fishing.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/tiny-fishing/",
    isNew: false
  },
  {
    id: 274,
    title: "Boxel Rebound",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/boxel-rebound.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/boxel-rebound/",
    isNew: false
  },
  {
    id: 275,
    title: "Canyon Defense",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/canyondefense.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/canyondefense/",
    isNew: false
  },
  {
    id: 276,
    title: "Captain Callisto",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/captaincallisto.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/captaincallisto/",
    isNew: false
  },
  {
    id: 277,
    title: "Duke Dashington Remastered",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/duke-dashington-remastered.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/duke-dashington-remastered/",
    isNew: false
  },
  {
    id: 278,
    title: "Gravity Soccer",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gravity-soccer.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/gravity-soccer/",
    isNew: false
  },
  {
    id: 279,
    title: "GrindCraft",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/grindcraft.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/grindcraft/",
    isNew: false
  },
  {
    id: 280,
    title: "Big Tower Tiny Square",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bigtowertinysquare.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bigtowertinysquare/",
    isNew: false
  },
  {
    id: 281,
    title: "Cupcake 2048",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cupcake2048.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/cupcake2048",
    isNew: false
  },
  {
    id: 282,
    title: "Gopher",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gopher.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/gopher/",
    isNew: false
  },
  {
    id: 283,
    title: "Kitchen Gun Game",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/kitchen-gun-game.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/kitchen-gun-game/",
    isNew: false
  },
  {
    id: 284,
    title: "Kitten Cannon",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/kittencannon.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/kittencannon/",
    isNew: false
  },
  {
    id: 285,
    title: "Basket Bros 2025",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/basket-bros-io.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/basket-bros-io/",
    isNew: false
  },
  {
    id: 286,
    title: "Basketball Legends 2020",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/basketball-legends-2020.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/basketball-legends-2020/",
    isNew: false
  },
  {
    id: 287,
    title: "Meme 2048",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/meme2048.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/meme2048",
    isNew: false
  },
  {
    id: 288,
    title: "Green",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/green.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/green/",
    isNew: false
  },
  {
    id: 289,
    title: "Hex Empire",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hexempire.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/hexempire/",
    isNew: false
  },
  {
    id: 290,
    title: "Minesweeper",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/minesweeper.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/minesweeper/",
    isNew: false
  },
  {
    id: 291,
    title: "Ultimate Custom Night",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/UCN-main.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/UCN/UCN-main",
    isNew: false
  },
  {
    id: 292,
    title: "Marvin Spectrum",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/marvinspectrum.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/marvinspectrum/",
    isNew: false
  },
  {
    id: 293,
    title: "Pandemic 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pandemic2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/pandemic2/",
    isNew: false
  },
  {
    id: 294,
    title: "Papas Freezeria",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/papas-freezeria.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/papas-freezeria",
    isNew: false
  },
  {
    id: 295,
    title: "Papas Hot Doggeria",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/papas-hot-doggeria.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/papas-hot-doggeria/",
    isNew: false
  },
  {
    id: 296,
    title: "Nitro Me Must Die",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/nitromemustdie.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/nitromemustdie/",
    isNew: false
  },
  {
    id: 297,
    title: "Golden Axe",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/goldenaxe.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/goldenaxe/",
    isNew: false
  },
  {
    id: 298,
    title: "Cubefield",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cubefield.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/cubefield/",
    isNew: false
  },
  {
    id: 299,
    title: "Cave Chaos",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cavechaos.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/cavechaos/",
    isNew: false
  },
  {
    id: 300,
    title: "Cactus McCoy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cactusmccoy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/cactusmccoy/",
    isNew: false
  },
  {
    id: 301,
    title: "Cactus McCoy 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cactusmccoy2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/cactusmccoy2/",
    isNew: false
  },
  {
    id: 302,
    title: "Control Craft 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/controlcraft2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/controlcraft2/",
    isNew: false
  },
  {
    id: 303,
    title: "Jetpack Joyride",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/jetpack.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/jetpack/",
    isNew: false
  },
  {
    id: 304,
    title: "Epic Battle Fantasy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/epicbattlefantasy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/epicbattlefantasy/",
    isNew: false
  },
  {
    id: 305,
    title: "Epic Battle Fantasy 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/epicbattlefantasy2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/epicbattlefantasy2/",
    isNew: false
  },
  {
    id: 306,
    title: "Epic Battle Fantasy 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/epicbattlefantasy3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/epicbattlefantasy3/",
    isNew: false
  },
  {
    id: 307,
    title: "Pickcrafter",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pickcrafter.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/pickcrafter/",
    isNew: false
  },
  {
    id: 308,
    title: "Townscaper",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/townscaper.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/townscaper/",
    isNew: false
  },
  {
    id: 309,
    title: "Watermelon Game",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/watermelongame.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/watermelongame/",
    isNew: false
  },
  {
    id: 310,
    title: "Wordle",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/wordle.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/wordle/",
    isNew: false
  },
  {
    id: 311,
    title: "Mariokart 64",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/mariokart64.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/mariokart64/",
    isNew: false
  },
  {
    id: 312,
    title: "Adventure Capitalist",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/adventure-capitalist.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/adventure-capitalist/",
    isNew: false
  },
  {
    id: 313,
    title: "Feed Me",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/feedme.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/feedme/",
    isNew: false
  },
  {
    id: 314,
    title: "Multitask",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/multitask.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/multitask/",
    isNew: false
  },
  {
    id: 315,
    title: "Oodle Gobs",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/oodlegobs.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/oodlegobs/",
    isNew: false
  },
  {
    id: 316,
    title: "Pako Highway",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pakohighway.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/pakohighway/",
    isNew: false
  },
  {
    id: 317,
    title: "Super Hero Drop",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/superherodrop.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/superherodrop/",
    isNew: false
  },
  {
    id: 318,
    title: "Water Works",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/waterworks.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/waterworks/",
    isNew: false
  },
  {
    id: 319,
    title: "Chime Clicker",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/chime.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/chime/",
    isNew: false
  },
  {
    id: 320,
    title: "60s Burger Run",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/60sburgerrun.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/60sburgerrun/",
    isNew: false
  },
  {
    id: 321,
    title: "FNF: Friday Night Funkin'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/0.6.0.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfspag/",
    isNew: false
  },
  {
    id: 322,
    title: "FNF: Friday Night Funkin' Girlfriend Mode",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gfmode.jpg",
    url: "player.html?game=https://reading.yoylefake.org/gfmode/",
    isNew: false
  },
  {
    id: 323,
    title: "FNF: Friday Night Funkin' Spooky Mix️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spooky.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/spooky/",
    isNew: false
  },
  {
    id: 324,
    title: "FNF: Friday Night Funkin' Child's Play Remake",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/child.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/child/",
    isNew: false
  },
  {
    id: 325,
    title: "FNF: Friday Night Funkin' HD",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fnfhd.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/fnfhd/",
    isNew: false
  },
  {
    id: 326,
    title: "FNF: Friday Night Funkin' RTX On",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rtx.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/rtx/",
    isNew: false
  },
  {
    id: 327,
    title: "FNF: Friday Night Funkin' Funkadelix",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/funkadelix.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/funkadelix/",
    isNew: false
  },
  {
    id: 328,
    title: "FNF: Friday Night Funkin' 3x3 Remixed",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/3x3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/3x3/",
    isNew: false
  },
  {
    id: 329,
    title: "FNF: Friday Night Funkin' B-Sides",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bsides.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/bsides/",
    isNew: false
  },
  {
    id: 330,
    title: "FNF: Friday Night Funkin' From The Top!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ftt.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/ftt/",
    isNew: false
  },
  {
    id: 331,
    title: "FNF: Get Digging - Fries vs. Needle",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/digging.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/digging/",
    isNew: false
  },
  {
    id: 332,
    title: "FNF: Let There Be Light",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ltbl.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/ltbl/",
    isNew: false
  },
  {
    id: 333,
    title: "FNF: FNF x Steven Universe Mod - Gem Jam",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gem.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/gem/",
    isNew: false
  },
  {
    id: 334,
    title: "FNF: Mistful Crimson Morning Reboot",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/mcm.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/mcm/",
    isNew: false
  },
  {
    id: 335,
    title: "FNF: Untitled Femtanyl Mod",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/femtanyl.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/femtanyl/",
    isNew: false
  },
  {
    id: 336,
    title: "FNF: SUPXR",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/supxr.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/supxr/",
    isNew: false
  },
  {
    id: 337,
    title: "FNF: Vs. Momo: Ubume",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ubume.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/ubume/",
    isNew: false
  },
  {
    id: 338,
    title: "FNF: Spookyboo!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spookyboo.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/spookyboo/",
    isNew: false
  },
  {
    id: 339,
    title: "FNF: Fancy Funking",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fancy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/fancy/",
    isNew: false
  },
  {
    id: 340,
    title: "FNF: Tetonic - Vs. Teto",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tetonic.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/tetonic/",
    isNew: false
  },
  {
    id: 341,
    title: "FNF: NONACCEPTANCE",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/nonacceptance.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/nonacceptance/",
    isNew: false
  },
  {
    id: 342,
    title: "FNF: Darkwing Funkin'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/darkwing.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/darkwing/",
    isNew: false
  },
  {
    id: 343,
    title: "FNF: Cool Pokemon Mod",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pokemon.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/pokemon/",
    isNew: false
  },
  {
    id: 344,
    title: "FNF: AKAGE",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/akage.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/akage/",
    isNew: false
  },
  {
    id: 345,
    title: "FNF: Tabi Revival",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tabi.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/tabi/",
    isNew: false
  },
  {
    id: 346,
    title: "FNF: Creepypasta JP",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/yokai.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/yokai/",
    isNew: false
  },
  {
    id: 347,
    title: "FNF: EVIL NOOB",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/noob.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/noob/",
    isNew: false
  },
  {
    id: 348,
    title: "FNF: Blueballed V2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/blueball.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/blueball/",
    isNew: false
  },
  {
    id: 349,
    title: "FNF: Friday Night Dashin'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/Dashin.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/Dashin/",
    isNew: false
  },
  {
    id: 350,
    title: "FNF: Plants Vs Rappers",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/plants.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/plants/",
    isNew: false
  },
  {
    id: 351,
    title: "FNF: Mokey",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/mokey.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/mokey/",
    isNew: false
  },
  {
    id: 352,
    title: "FNF: Pacman.exe",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/PACKILL.jpg",
    url: "player.html?game=https://scientific.yoylefake.org/PACKILL/",
    isNew: false
  },
  {
    id: 353,
    title: "FNF:Fake Jordans",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fakejs.jpg",
    url: "player.html?game=https://scientific.yoylefake.org/fakejs/",
    isNew: false
  },
  {
    id: 354,
    title: "FNF: Friday Night Funkin' Lovewrec'd",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/lovewrecd.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/lovewrecd/",
    isNew: false
  },
  {
    id: 355,
    title: "FNF: Friday Night Funkin' D-Sides",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/dsides.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/dsides",
    isNew: false
  },
  {
    id: 356,
    title: "FNF: Friday Night Funkin' Neo",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/neo.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/neo/",
    isNew: false
  },
  {
    id: 357,
    title: "FNF: Friday Night Funkin' Upside",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/upside.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/upside",
    isNew: false
  },
  {
    id: 358,
    title: "FNF: Friday Night Funkin' Beatstreets",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/beat.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/beat/",
    isNew: false
  },
  {
    id: 359,
    title: "FNF: Friday Night Funkin' But Bad",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/badfnf.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/badfnf/",
    isNew: false
  },
  {
    id: 360,
    title: "FNF: Friday Night Funkin' Gooey Mix",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gooey.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/gooey/",
    isNew: false
  },
  {
    id: 361,
    title: "FNF: Friday Night Funkin': Notice Me Senpai!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cloud.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/cloud/",
    isNew: false
  },
  {
    id: 362,
    title: "FNF: Friday Night Funkin' Deep-Sea Date",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/seadate.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/seadate/",
    isNew: false
  },
  {
    id: 363,
    title: "FNF: Friday Night Funkin' Hellbeats",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hell.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/hell",
    isNew: false
  },
  {
    id: 364,
    title: "FNF: Friday Night Funkin' Soft v1",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/soft.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/soft/",
    isNew: false
  },
  {
    id: 365,
    title: "Friday Night Funkin' Starcatcher",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/starcatcher.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/starcatcher",
    isNew: false
  },
  {
    id: 366,
    title: "Friday Night Funkin' Starlight Mayhem",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/strlight.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/strlight",
    isNew: false
  },
  {
    id: 367,
    title: "FNF: Friday Night Funkin' FT. The Ex",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ex.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/ex/",
    isNew: false
  },
  {
    id: 368,
    title: "FNF: Friday Night Funkin' Cheater",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cheater.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/cheater/",
    isNew: false
  },
  {
    id: 369,
    title: "FNF: Friday Night Funkin' Hotline 024",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hotline.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/hotline/",
    isNew: false
  },
  {
    id: 370,
    title: "FNF: Friday Night Funkin' CG5 Edition",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cg5.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/cg5/",
    isNew: false
  },
  {
    id: 371,
    title: "FNF: Friday Night Funkin' Baddies",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/baddies.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/baddies/",
    isNew: false
  },
  {
    id: 372,
    title: "FNF: Friday Night Funkin' Kero",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/Kero.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/Kero/",
    isNew: false
  },
  {
    id: 373,
    title: "FNF: Friday Night Funkin': Cyber Sensation",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cyber.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/cyber/",
    isNew: false
  },
  {
    id: 374,
    title: "FNF: Friday Night Funkin' Dusttale",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/dust.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/dust/",
    isNew: false
  },
  {
    id: 375,
    title: "FNF: Friday Night Funkin' Lullaby",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/lullaby.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/lullaby/",
    isNew: false
  },
  {
    id: 376,
    title: "FNF: Friday Night Fever",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fever.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/fever/",
    isNew: false
  },
  {
    id: 377,
    title: "FNF: Friday Night Fever: Skelly Story",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fevers.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fevers/",
    isNew: false
  },
  {
    id: 378,
    title: "FNF: FNF Weekly: Tweakmas",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tweakmas.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/tweakmas.html",
    isNew: false
  },
  {
    id: 379,
    title: "FNF: Holo Night Funkin'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/holo.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/holo/",
    isNew: false
  },
  {
    id: 380,
    title: "FNF: Viernes Night Funkin'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/viernes.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/viernes/",
    isNew: false
  },
  {
    id: 381,
    title: "FNF: Another Friday Night",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/another.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/another/",
    isNew: false
  },
  {
    id: 382,
    title: "FNF: Funkin' Aside",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/funkinaside.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/funkinaside/",
    isNew: false
  },
  {
    id: 383,
    title: "FNF: Lite Funkin'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/lite.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/lite/",
    isNew: false
  },
  {
    id: 384,
    title: "FNF: Arrow Funk",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/arrow.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/arrow/",
    isNew: false
  },
  {
    id: 385,
    title: "FNF: VS. Whitty",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/whitty.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/whitty",
    isNew: false
  },
  {
    id: 386,
    title: "FNF: VS. Whitty Erect",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/whittyerect.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whitty/",
    isNew: false
  },
  {
    id: 387,
    title: "FNF: VS. Claire",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/claire.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/claire/",
    isNew: false
  },
  {
    id: 388,
    title: "FNF: Pico Night Punkin",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/test.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/test/",
    isNew: false
  },
  {
    id: 389,
    title: "FNF: VS. Neo Whitty",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/neowhitty.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/neowhitty/",
    isNew: false
  },
  {
    id: 390,
    title: "FNF: VS. Agoti",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/agoti.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/agoti/",
    isNew: false
  },
  {
    id: 391,
    title: "FNF: VS. QT: Rewired",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/qtrewired.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/qtrewired/",
    isNew: false
  },
  {
    id: 392,
    title: "FNF: VS. Mami ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/mami.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/mami/",
    isNew: false
  },
  {
    id: 393,
    title: "FNF: VS. Virus R",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/virusr.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/virusr/",
    isNew: false
  },
  {
    id: 394,
    title: "FNF: VS. Pico",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pico.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/pico/",
    isNew: false
  },
  {
    id: 395,
    title: "FNF: VS. Carol",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/mami.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/mami/",
    isNew: false
  },
  {
    id: 396,
    title: "FNF: VS. Retrospecter️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/retro.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/retro/",
    isNew: false
  },
  {
    id: 397,
    title: "FNF: VS. Darwi V2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/darwi.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/darwi/",
    isNew: false
  },
  {
    id: 398,
    title: "FNF: VS. Agoti Mic'd Up Engine",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/agotitest.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/agotitest/",
    isNew: false
  },
  {
    id: 399,
    title: "FNF: VS.Peppino",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pizzatown.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/pizzatown/",
    isNew: false
  },
  {
    id: 400,
    title: "FNF: VS.Maddness Erect",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/trickyerect.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/trickyerect/",
    isNew: false
  },
  {
    id: 401,
    title: "FNF: Sunday Night Suicide V2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/smouse.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/smouse/",
    isNew: false
  },
  {
    id: 402,
    title: "FNF: VS.Black Betrayal",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/blackb.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/blackb/",
    isNew: false
  },
  {
    id: 403,
    title: "FNF: VS.Cheeky v3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cheeky.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/cheeky/",
    isNew: false
  },
  {
    id: 404,
    title: "FNF: VS.Trollge V2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/physics.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/physics/",
    isNew: false
  },
  {
    id: 405,
    title: "FNF: Doki Doki Bad Ending",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/badending.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/badending/",
    isNew: false
  },
  {
    id: 406,
    title: "FNF: CN Takeover",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cntakeover.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/cntakeover/",
    isNew: false
  },
  {
    id: 407,
    title: "FNF: VS. Impostor",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/impo.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/impo",
    isNew: false
  },
  {
    id: 408,
    title: "FNF: VS. Big Brother",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bigbro.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/bigbro",
    isNew: false
  },
  {
    id: 409,
    title: "FNF: VS. Camellia",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/camellia.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/camellia",
    isNew: false
  },
  {
    id: 410,
    title: "FNF: VS. Accelerant Hank, but all bullets",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hankgoeshard.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/hankgoeshard/",
    isNew: false
  },
  {
    id: 411,
    title: "FNF: VS. Annie",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/annie.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/annie/",
    isNew: false
  },
  {
    id: 412,
    title: "FNF: VS. Hatsune Miku",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/miku.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/miku",
    isNew: false
  },
  {
    id: 413,
    title: "FNF: VS. Chara",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/chara.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/chara",
    isNew: false
  },
  {
    id: 414,
    title: "FNF: VS. K.K. Slider",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/vskk.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/vskk",
    isNew: false
  },
  {
    id: 415,
    title: "FNF: VS. Super Idol",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/idol.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/idol",
    isNew: false
  },
  {
    id: 416,
    title: "FNF: VS. FNAF 3 ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/FNAF.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/FNAF/",
    isNew: false
  },
  {
    id: 417,
    title: "FNF: VS. Sky",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sky.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/sky/",
    isNew: false
  },
  {
    id: 418,
    title: "FNF: VS. 'FNF Kid'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/kid.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/kid/",
    isNew: false
  },
  {
    id: 419,
    title: "FNF: VS. Lime Green Imposter (Imposter v5 April Fools Week)",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/lime.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/lime/",
    isNew: false
  },
  {
    id: 420,
    title: "FNF: VS. Sonic.exe ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sonic.exe.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/sonic.exe/",
    isNew: false
  },
  {
    id: 421,
    title: "FNF: VS. Nero",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/nero.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/nero/",
    isNew: false
  },
  {
    id: 422,
    title: "FNF: VS. Ron  ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/Ron.3.0.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/Ron.3.0/",
    isNew: false
  },
  {
    id: 423,
    title: "FNF: VS. Rika",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rika.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/rika/",
    isNew: false
  },
  {
    id: 424,
    title: "FNF: VS. Speedrunner Mario",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/yas.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/yas/",
    isNew: false
  },
  {
    id: 425,
    title: "FNF: VS. King",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/king.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/king/",
    isNew: false
  },
  {
    id: 426,
    title: "FNF: VS. Hex",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hex.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/hex/",
    isNew: false
  },
  {
    id: 427,
    title: "FNF: VS. Slenderman",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/slenderman.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/slenderman/",
    isNew: false
  },
  {
    id: 428,
    title: "FNF: VS. Sunday",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sunday.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/sunday/",
    isNew: false
  },
  {
    id: 429,
    title: "FNF: VS. Corrupted Tankman",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cn.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/cn/",
    isNew: false
  },
  {
    id: 430,
    title: "FNF: VS. Shaggy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/shaggy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/shaggy/",
    isNew: false
  },
  {
    id: 431,
    title: "FNF: VS. Nonsense",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/nonsence.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/nonsence/",
    isNew: false
  },
  {
    id: 432,
    title: "FNF: VS. Spong",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spong.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/spong/",
    isNew: false
  },
  {
    id: 433,
    title: "FNF: VS. Timmy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pwrhr.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/pwrhr/",
    isNew: false
  },
  {
    id: 434,
    title: "FNF: VS. Tord",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tord.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/tord/",
    isNew: false
  },
  {
    id: 435,
    title: "FNF: VS. Tabi",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tabi.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/tabi/",
    isNew: false
  },
  {
    id: 436,
    title: "FNF: VS. QT",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/qt.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/qt/",
    isNew: false
  },
  {
    id: 437,
    title: "FNF: VS. Doxxie",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/doxxie.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/doxxie/",
    isNew: false
  },
  {
    id: 438,
    title: "FNF: VS. Zardy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/zardyupdate.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/zardyupdate/",
    isNew: false
  },
  {
    id: 439,
    title: "FNF: CORROSION",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/corrosion.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/corrosion/",
    isNew: false
  },
  {
    id: 440,
    title: "FNF: CORROSION V2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/corrosion.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/corrosion/",
    isNew: false
  },
  {
    id: 441,
    title: "FNF: Twiddlefinger",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/twiddlefinger.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/twiddlefinger/",
    isNew: false
  },
  {
    id: 442,
    title: "FNF: ANOTHERBROTHER",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/anotherbrother.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/anotherbrother/",
    isNew: false
  },
  {
    id: 443,
    title: "FNF: HORKGLORPGLOOP",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hork.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/hork/",
    isNew: false
  },
  {
    id: 444,
    title: "FNF: Konton Boogie ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/konton.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/konton/",
    isNew: false
  },
  {
    id: 445,
    title: "FNF: Bob and Bosip: The EX Update",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bob.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/bob",
    isNew: false
  },
  {
    id: 446,
    title: "FNF: Dave and Bambi Golden Apple ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/GoldenApple.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnfmods/GoldenApple/",
    isNew: false
  },
  {
    id: 447,
    title: "FNF: Nyaw Erect",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/nyaw.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/nyaw/",
    isNew: false
  },
  {
    id: 448,
    title: "FNF: VS. Tabi: Pico Mix",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tabip.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/tabip/",
    isNew: false
  },
  {
    id: 449,
    title: "FNF: Silly Funkin'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/silly.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/silly/",
    isNew: false
  },
  {
    id: 450,
    title: "FNF: Strident Crisis",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/strident.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/strident/",
    isNew: false
  },
  {
    id: 451,
    title: "FNF: Spookys Saturday Scare",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spookyscare.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/spookyscare/",
    isNew: false
  },
  {
    id: 452,
    title: "FNF: Scratch Cat",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/scratch.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/scratch/",
    isNew: false
  },
  {
    id: 453,
    title: "FNF: Aflac Remaster",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/aflac.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/aflac/",
    isNew: false
  },
  {
    id: 454,
    title: "FNF: Mario's Madness V2 ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/MM.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/MM/",
    isNew: false
  },
  {
    id: 455,
    title: "FNF: Voiid Chronicles ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/void.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/void/",
    isNew: false
  },
  {
    id: 456,
    title: "FNF: Yeah! - Internet Oneshot",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/yeah.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/yeah/",
    isNew: false
  },
  {
    id: 457,
    title: "FNF: Madness Incident: 0201A",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/madness.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/madness/",
    isNew: false
  },
  {
    id: 458,
    title: "FNF: Nusky",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/nusky.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/nusky/",
    isNew: false
  },
  {
    id: 459,
    title: "FNF: Grafitti Groovin'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/grafitti.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/grafitti/",
    isNew: false
  },
  {
    id: 460,
    title: "FNF: The Full-Ass Tricky Mod ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tricky.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/tricky",
    isNew: false
  },
  {
    id: 461,
    title: "FNF: 17Bucks",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/17bucks.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/17bucks/",
    isNew: false
  },
  {
    id: 462,
    title: "FNF: Indie Cross ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/indie.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/indie",
    isNew: false
  },
  {
    id: 463,
    title: "FNF: 2Hot: Freestyle",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/2hot.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/2hot/",
    isNew: false
  },
  {
    id: 464,
    title: "FNF: 2Hot: BF Mix",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/2hotbf.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/2hotbf/",
    isNew: false
  },
  {
    id: 465,
    title: "FNF: Spongebob's Classic Showdown",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spongebob.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/spongebob/",
    isNew: false
  },
  {
    id: 466,
    title: "FNF: Next Out of Robloxia",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/roadblocks.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/roadblocks/",
    isNew: false
  },
  {
    id: 467,
    title: "FNF: Hatsune Miku: Project Funkin'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/project.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/project/",
    isNew: false
  },
  {
    id: 468,
    title: "FNF: Bopcity",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bop.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/bop/",
    isNew: false
  },
  {
    id: 469,
    title: "FNF: Arcade Showdown",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/kapi.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/kapi/",
    isNew: false
  },
  {
    id: 470,
    title: "FNF: Beats and Treats",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/beatstreats.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/beatstreats/",
    isNew: false
  },
  {
    id: 471,
    title: "FNF: Pibby Corrupted ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pibby.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/pibby/",
    isNew: false
  },
  {
    id: 472,
    title: "FNF: Jeffy's Endless Aethos",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/aethos.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/aethos/",
    isNew: false
  },
  {
    id: 473,
    title: "FNF: Shucks v2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/shucks.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/shucks/",
    isNew: false
  },
  {
    id: 474,
    title: "FNF: Hazy River",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hazy.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/hazy/",
    isNew: false
  },
  {
    id: 475,
    title: "FNF: Twinsomnia",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/twin.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/twin/",
    isNew: false
  },
  {
    id: 476,
    title: "FNF: Breaking Point",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/jaiden.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/jaiden/",
    isNew: false
  },
  {
    id: 477,
    title: "FNF: Mid Fight Masses",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/mfm.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/mfm/",
    isNew: false
  },
  {
    id: 478,
    title: "FNF: Tales from the Treehouse",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tree.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/tree/",
    isNew: false
  },
  {
    id: 479,
    title: "FNF: Sideline Blitz",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sideline.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/sideline/",
    isNew: false
  },
  {
    id: 480,
    title: "FNF: The Date Week",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/date.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/date/",
    isNew: false
  },
  {
    id: 481,
    title: "FNF: Yeahman!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/yeahman.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/yeahman/",
    isNew: false
  },
  {
    id: 482,
    title: "FNF: Steven Universe Mini Mod Pack",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/steven.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/steven/",
    isNew: false
  },
  {
    id: 483,
    title: "FNF: Roastin' on a Cartoon Cartoon Friday",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/roastin.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/roastin/",
    isNew: false
  },
  {
    id: 484,
    title: "FNF: Beach Party",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/beach.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/beach/",
    isNew: false
  },
  {
    id: 485,
    title: "FNF: Chaos Nightmare",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/phantasm.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/phantasm/",
    isNew: false
  },
  {
    id: 486,
    title: "FNF: Sprunkin'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sprunki.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/sprunki/",
    isNew: false
  },
  {
    id: 487,
    title: "FNF: Funkin' for Hire",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hire.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/hire/",
    isNew: false
  },
  {
    id: 488,
    title: "FNF: Funkin' Peanuts",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/snoopy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/snoopy/",
    isNew: false
  },
  {
    id: 489,
    title: "FNF: Another Atrocity Fanmod",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/atrocity.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/atrocity/",
    isNew: false
  },
  {
    id: 490,
    title: "FNF: Mistful Crimson Morning",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/MCM.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/MCM/",
    isNew: false
  },
  {
    id: 491,
    title: "FNF: The X-Event",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/x-event.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/x-event/",
    isNew: false
  },
  {
    id: 492,
    title: "FNF: Starving Artist",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/starve.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/starve/",
    isNew: false
  },
  {
    id: 493,
    title: "FNF: Flavor Rave",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/flavor.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/flavor/",
    isNew: false
  },
  {
    id: 494,
    title: "FNF: RoFNF Funkin'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rofnf.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/rofnf/",
    isNew: false
  },
  {
    id: 495,
    title: "FNF: Baldi's Basics in Funkin'",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/baldi.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/baldi/",
    isNew: false
  },
  {
    id: 496,
    title: "FNF: Deb8",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/deb8.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/deb8/",
    isNew: false
  },
  {
    id: 497,
    title: "FNF: Killshot",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/killshot.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/killshot/",
    isNew: false
  },
  {
    id: 498,
    title: "FNF: 13th Night Funk Blood️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/funkblood.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/funkblood/",
    isNew: false
  },
  {
    id: 499,
    title: "FNF: Lobotomy Dash Funkin' ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/lobotomy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/lobotomy/",
    isNew: false
  },
  {
    id: 500,
    title: "FNF: Gamblecore",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gamblecore.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/gamblecore/",
    isNew: false
  },
  {
    id: 501,
    title: "FNF: Parkpass",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/parkpass.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/parkpass/",
    isNew: false
  },
  {
    id: 502,
    title: "FNF: OK K.O.! Let's Get Funky!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/K.O.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/K.O/",
    isNew: false
  },
  {
    id: 503,
    title: "FNF: Hell Allany",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/alany.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/alany/",
    isNew: false
  },
  {
    id: 504,
    title: "FNF: Darkness Takeover vs Pibby Family Guy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/darkness-takeover.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/darkness-takeover/",
    isNew: false
  },
  {
    id: 505,
    title: "FNF: SMW: Power Star Melody",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/smw.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/smw/",
    isNew: false
  },
  {
    id: 506,
    title: "FNF: COME OUT TO PLAY - Vs. MC-X",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/mc-x.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/mc-x/",
    isNew: false
  },
  {
    id: 507,
    title: "FNF: FNF Vs Bad Piggies (Ross V2)",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bad-pig.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/bad-pig/",
    isNew: false
  },
  {
    id: 508,
    title: "FNF: Funkin' In The Galaxy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/in-the-gal.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/in-the-gal/",
    isNew: false
  },
  {
    id: 509,
    title: "FNF: Funkin'Herobrine Reborn",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/herob.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/herob/",
    isNew: false
  },
  {
    id: 510,
    title: "FNF: Pibby Legacy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pibby-legacy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/pibby-legacy/",
    isNew: false
  },
  {
    id: 511,
    title: "FNF: Vs.Undertale",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/undertale.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/undertale/",
    isNew: false
  },
  {
    id: 512,
    title: "FNF: BFDI 26",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bdfi26.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/bdfi26/",
    isNew: false
  },
  {
    id: 513,
    title: "FNF: The Return Funkin' Whitty Demo",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/return.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/return/",
    isNew: false
  },
  {
    id: 514,
    title: "FNF: Bob's Onslaught",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bob.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/bob/",
    isNew: false
  },
  {
    id: 515,
    title: "FNF: SMB Funk Mix DX",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/funk-mix.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/funk-mix/",
    isNew: false
  },
  {
    id: 516,
    title: "FNF: SMB Funk Mix DX Game Over",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gameover.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/gameover/",
    isNew: false
  },
  {
    id: 517,
    title: "FNF: Salty's Sunday Night",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/salty.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/salty",
    isNew: false
  },
  {
    id: 518,
    title: "FNF: Fuckin Funkin' with Koi",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/koi.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/koi/",
    isNew: false
  },
  {
    id: 519,
    title: "FNF: Doki Doki Takeover Plus !",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/doki.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/doki/",
    isNew: false
  },
  {
    id: 520,
    title: "FNF: MiFunkSide",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/mifunkside.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/mifunkside/",
    isNew: false
  },
  {
    id: 521,
    title: "FNF: Cartoon Clash",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/clash.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/clash",
    isNew: false
  },
  {
    id: 522,
    title: "FNF: Silly Billy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/billy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/billy",
    isNew: false
  },
  {
    id: 523,
    title: "FNF: Secret Histories",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/secretSonic.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/secretSonic",
    isNew: false
  },
  {
    id: 524,
    title: "FNF: The Squidward Tricky Mod ️",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/squidtricky.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/squidtricky",
    isNew: false
  },
  {
    id: 525,
    title: "FNF: The Impossible Trio",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/IT.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/IT/",
    isNew: false
  },
  {
    id: 526,
    title: "FNF: Doubling Down",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/doubleingdown.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/doubleingdown/",
    isNew: false
  },
  {
    id: 527,
    title: "FNF: MOB MOD",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/mobmod.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/mobmod/",
    isNew: false
  },
  {
    id: 528,
    title: "FNF: Digitalizing 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/digi.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/digi/",
    isNew: false
  },
  {
    id: 529,
    title: "FNF: The Gacha Mod",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gacha.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/gacha",
    isNew: false
  },
  {
    id: 530,
    title: "FNF: Golf Minigame",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/golf.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/golf",
    isNew: false
  },
  {
    id: 531,
    title: "FNF: Funkin' for a BFDI",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bfdi.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/bfdi/",
    isNew: false
  },
  {
    id: 532,
    title: "FNF: Smoke Em' Out Struggle",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/garcello.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/garcello/",
    isNew: false
  },
  {
    id: 533,
    title: "FNF: Wii Funkin' REV-MIX",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/REV-MIX.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/REV-MIX/",
    isNew: false
  },
  {
    id: 534,
    title: "FNF: Wii Funkin' B-Sides",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/mattbside.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/mattbside/",
    isNew: false
  },
  {
    id: 535,
    title: "FNF: Wii Funkin' Wiik 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/matt3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/matt3/",
    isNew: false
  },
  {
    id: 536,
    title: "FNF: Krusty Karoling",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/krusty.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/krusty/",
    isNew: false
  },
  {
    id: 537,
    title: "FNF: Funk! Miss Nagatoro",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/funknaga.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/funknaga/",
    isNew: false
  },
  {
    id: 538,
    title: "FNF: Pibby Apocalypse",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pibby2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/maths/pibby2",
    isNew: false
  },
  {
    id: 539,
    title: "FNF: Corruption Invasion",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/invadion.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/player.html?game=https://chicken.parmacitieschools.org/fnfmods/invadion/",
    isNew: false
  },
  {
    id: 540,
    title: "Fancy Pants World 1 Remix",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fancypantsadventuresremix.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/fancypantsadventuresremix/",
    isNew: false
  },
  {
    id: 541,
    title: "Tunnel Rush",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tunnelrush.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/tunnelrush/",
    isNew: false
  },
  {
    id: 542,
    title: "3 line",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/3line.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/3line/",
    isNew: false
  },
  {
    id: 543,
    title: "Balloon Run",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/balloonrun.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/balloonrun/",
    isNew: false
  },
  {
    id: 544,
    title: "Big Red Button",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bigredbutton.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bigredbutton/",
    isNew: false
  },
  {
    id: 545,
    title: "Bike Champ",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bikechamp.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bikechamp/",
    isNew: false
  },
  {
    id: 546,
    title: "Bubble Spinner",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bubblespinner.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/bubblespinner/",
    isNew: false
  },
  {
    id: 547,
    title: "Canopy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/canopy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/canopy/",
    isNew: false
  },
  {
    id: 548,
    title: "Celeste (PICO 8)",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/celeste.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/celeste/",
    isNew: false
  },
  {
    id: 549,
    title: "Chisel",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/chisel.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/chisel/",
    isNew: false
  },
  {
    id: 550,
    title: "Chisel 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/chisel2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/chisel2/",
    isNew: false
  },
  {
    id: 551,
    title: "ABCya! Coin",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/coin.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/coin/",
    isNew: false
  },
  {
    id: 552,
    title: "Burger And Frights",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/burgerandfrights.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/burgerandfrights/",
    isNew: false
  },
  {
    id: 553,
    title: "Crash Bandicoot: The Wrath of Cortex",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/crash.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/crash/",
    isNew: false
  },
  {
    id: 554,
    title: "Geometry Dash Lite",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gdlite.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/gdlite/",
    isNew: false
  },
  {
    id: 555,
    title: "Geometry Dash (Fake)",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/geometrydash.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/geometrydash/",
    isNew: false
  },
  {
    id: 556,
    title: "Geometry Rash",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/geometryrash.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/geometryrash/",
    isNew: false
  },
  {
    id: 560,
    title: "Brave Explorers",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/brave-explorers.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/brave-explorers/",
    isNew: false
  },
  {
    id: 561,
    title: "Glass City",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/glass-city.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/glass-city/",
    isNew: false
  },
  {
    id: 562,
    title: "Go Ball",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/go-ball.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/go-ball/",
    isNew: false
  },
  {
    id: 563,
    title: "Push Your Luck",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/push-your-luck.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/push-your-luck/",
    isNew: false
  },
  {
    id: 564,
    title: "Scratch RPG By Jalen",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/scratchrpg.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/scratchrpg/",
    isNew: false
  },
  {
    id: 565,
    title: "Spelunky",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spelunky.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/spelunky/",
    isNew: false
  },
  {
    id: 566,
    title: "Swerve",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/swerve.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/swerve/",
    isNew: false
  },
  {
    id: 567,
    title: "Synesthesia",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/synesthesia.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/synesthesia/",
    isNew: false
  },
  {
    id: 568,
    title: "Tactical Assasin2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tacticalassasin2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/tacticalassasin2/",
    isNew: false
  },
  {
    id: 569,
    title: "Adrenaline Challenge",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/adrenalinechallenge.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/adrenalinechallenge/",
    isNew: false
  },
  {
    id: 570,
    title: "Back Country",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/backcountry.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/backcountry/",
    isNew: false
  },
  {
    id: 571,
    title: "Champion Archer",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/championarcher.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/championarcher/",
    isNew: false
  },
  {
    id: 572,
    title: "Endless War 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/endlesswar3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/endlesswar3/",
    isNew: false
  },
  {
    id: 573,
    title: "Finns Fantastic Food Machine",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/finns-fantastic-food-machine.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/finns-fantastic-food-machine/",
    isNew: false
  },
  {
    id: 574,
    title: "10 Minutes Till Dawn",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/10-minutes-till-dawn.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/10-minutes-till-dawn/",
    isNew: false
  },
  {
    id: 575,
    title: "2048",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/2048.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/2048/",
    isNew: false
  },
  {
    id: 576,
    title: "2d rocket league",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/2drocketleague.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/2drocketleague/",
    isNew: false
  },
  {
    id: 577,
    title: "A Dance Of Fire And Ice",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/adofai.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/adofai/",
    isNew: false
  },
  {
    id: 578,
    title: "a dark room",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/adarkroom.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/adarkroom/",
    isNew: false
  },
  {
    id: 579,
    title: "achievement unlocked",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/achievementunlocked.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/achievementunlocked/",
    isNew: false
  },
  {
    id: 580,
    title: "age of war",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ageofwar.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/ageofwar/",
    isNew: false
  },
  {
    id: 581,
    title: "Alien Hominid",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/alienhominid.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/alienhominid/",
    isNew: false
  },
  {
    id: 582,
    title: "Amazing Rope Police",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/amazing-rope-police.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/amazing-rope-police/",
    isNew: false
  },
  {
    id: 583,
    title: "Amorphous",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/amorphous.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/amorphous/",
    isNew: false
  },
  {
    id: 584,
    title: "Angry Birds",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/birds.jpg",
    url: "https://chicken.parmacitieschools.org/livediesmos/birds/",
    isNew: false
  },
  {
    id: 585,
    title: "Angry Birds Rio",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rio.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/rio/",
    isNew: false
  },
  {
    id: 586,
    title: "Angry Birds Space",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/abspace.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/abspace/",
    isNew: false
  },
  {
    id: 587,
    title: "Astray",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/astray.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/astray/",
    isNew: false
  },
  {
    id: 588,
    title: "Avalanche",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/avalanche.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/avalanche/",
    isNew: false
  },
  {
    id: 589,
    title: "Backflip Dive 3d",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/backflip-dive-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/backflip-dive-3d/",
    isNew: false
  },
  {
    id: 590,
    title: "Bad Time Simulator",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/badtimesimulator.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/badtimesimulator/",
    isNew: false
  },
  {
    id: 591,
    title: "Baldi's Basics",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/baldis-basics.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/baldis-basics/",
    isNew: false
  },
  {
    id: 592,
    title: "Basket Bros",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/basketbros.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/basketbros/",
    isNew: false
  },
  {
    id: 593,
    title: "Basket Random",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/basketrandom.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/basketrandom/",
    isNew: false
  },
  {
    id: 594,
    title: "Basketball Stars",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/basketball-stars.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/basketball-stars/",
    isNew: false
  },
  {
    id: 595,
    title: "BFDIA 5b",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bfdia.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/bfdia/",
    isNew: false
  },
  {
    id: 596,
    title: "Binding Of Isaac",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/binding-of-isaac.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/binding-of-isaac/",
    isNew: false
  },
  {
    id: 597,
    title: "Bit Planes",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bit-planes.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/bit-planes/",
    isNew: false
  },
  {
    id: 598,
    title: "Bitlife",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bitlife.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/bitlife/",
    isNew: false
  },
  {
    id: 599,
    title: "Block Blast",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/block.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/block/",
    isNew: false
  },
  {
    id: 600,
    title: "Blood Tournament",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bloodtournament.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/bloodtournament/",
    isNew: false
  },
  {
    id: 601,
    title: "Bloons",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bloons.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/bloons/",
    isNew: false
  },
  {
    id: 602,
    title: "Bob The Robber 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bobtherobber2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/bobtherobber2/",
    isNew: false
  },
  {
    id: 603,
    title: "Boxing Physics 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/boxingphysics2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/boxingphysics2/",
    isNew: false
  },
  {
    id: 604,
    title: "Breaking The Bank",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/breakingthebank.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/breakingthebank/",
    isNew: false
  },
  {
    id: 605,
    title: "Breaklock",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/breaklock.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/breaklock/",
    isNew: false
  },
  {
    id: 606,
    title: "Breakout",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/breakout.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/breakout/",
    isNew: false
  },
  {
    id: 607,
    title: "Candy Clicker By Jalen",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/candy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/candy/",
    isNew: false
  },
  {
    id: 608,
    title: "FNF: GUMMIBAR!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gummi.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/gummi/",
    isNew: false
  },
  {
    id: 609,
    title: "Champion Island",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/championisland.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/championisland/",
    isNew: false
  },
  {
    id: 610,
    title: "Chess",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/chess.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/chess/",
    isNew: false
  },
  {
    id: 611,
    title: "Choose Your Weapon",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/chooseyourweapon.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/chooseyourweapon/",
    isNew: false
  },
  {
    id: 612,
    title: "Choose Your Weapon 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/chooseyourweapon2.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/chooseyourweapon2/",
    isNew: false
  },
  {
    id: 613,
    title: "Choose Your Weapon 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/chooseyourweapon3.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/chooseyourweapon3/",
    isNew: false
  },
  {
    id: 614,
    title: "Chrome Dino",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/dino.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/dino/",
    isNew: false
  },
  {
    id: 615,
    title: "Clicker Heroes",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/clickerheroes.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/clickerheroes/",
    isNew: false
  },
  {
    id: 616,
    title: "Cluster Rush",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/cluster-rush.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/cluster-rush/",
    isNew: false
  },
  {
    id: 617,
    title: "Color Switch",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/colorswitch.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/colorswitch/",
    isNew: false
  },
  {
    id: 618,
    title: "Commodore Clicker",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/commodoreclicker.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/commodoreclicker/",
    isNew: false
  },
  {
    id: 619,
    title: "Cookie Clicker Classic",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/Cookie-Clicker-Classic-main.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/cookieclicker.html",
    isNew: false
  },
  {
    id: 620,
    title: "Cooking Mama",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/cookingmama.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/cookingmama.html",
    isNew: false
  },
  {
    id: 621,
    title: "Crazy Cars",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/CrazyCars.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/CrazyCars/",
    isNew: false
  },
  {
    id: 622,
    title: "Creative Kill Chamber",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/creativekillchamber.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/creativekillchamber/",
    isNew: false
  },
  {
    id: 623,
    title: "Crossy Road",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/crossy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/crossy/",
    isNew: false
  },
  {
    id: 624,
    title: "CSGO Clicker",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/csgoclicker.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/csgoclicker/",
    isNew: false
  },
  {
    id: 625,
    title: "Cut The Rope",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rope.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/rope/",
    isNew: false
  },
  {
    id: 627,
    title: "Death Run 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/death-run-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/death-run-3d/",
    isNew: false
  },
  {
    id: 628,
    title: "Dirt Racers",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/dirt.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/dirt/",
    isNew: false
  },
  {
    id: 629,
    title: "Doge Miner",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/DogeMiner.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/DogeMiner/",
    isNew: false
  },
  {
    id: 630,
    title: "Doodle Jump",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/doodlejump.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/doodlejump/",
    isNew: false
  },
  {
    id: 631,
    title: "DragonBall Devolution",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/dragonballdevolution.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/dragonballdevolution/",
    isNew: false
  },
  {
    id: 632,
    title: "Draw The Hill",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/draw-the-hill.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/draw-the-hill/",
    isNew: false
  },
  {
    id: 633,
    title: "Drift Boss",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/drift-boss.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/drift-boss/",
    isNew: false
  },
  {
    id: 634,
    title: "Drift Hunters",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/drifthunters.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/drifthunters/",
    isNew: false
  },
  {
    id: 635,
    title: "Duck life",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ducklife.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/ducklife/",
    isNew: false
  },
  {
    id: 636,
    title: "Duck life 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ducklife2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/ducklife2/",
    isNew: false
  },
  {
    id: 637,
    title: "Duck life 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ducklife3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/ducklife3/",
    isNew: false
  },
  {
    id: 638,
    title: "Duck life 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ducklife4.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/ducklife4/",
    isNew: false
  },
  {
    id: 639,
    title: "Duck life 5 Treasure Hunt",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/duck-life-treasurehunt.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/duck-life-treasurehunt/",
    isNew: false
  },
  {
    id: 640,
    title: "Dungeon Craft",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/dungeon-craft.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/dungeon-craft/",
    isNew: false
  },
  {
    id: 641,
    title: "Electricman 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/electricman2.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/electricman2/",
    isNew: false
  },
  {
    id: 642,
    title: "Escaping The Prison",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/escapingtheprison.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/escapingtheprison/",
    isNew: false
  },
  {
    id: 643,
    title: "Evolution",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/evolution.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/evolution/",
    isNew: false
  },
  {
    id: 644,
    title: "Factory Balls",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/factoryballs.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/factoryballs/",
    isNew: false
  },
  {
    id: 645,
    title: "Factory Balls Forever",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/factory-balls-forever.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/factory-balls-forever/",
    isNew: false
  },
  {
    id: 646,
    title: "Fancy Pants Adventures",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fancypantsadventures.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/fancypantsadventures/",
    isNew: false
  },
  {
    id: 647,
    title: "Fancy Pants Adventures 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fancypantsadventures2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/fancypantsadventures2/",
    isNew: false
  },
  {
    id: 648,
    title: "Fancy Pants Adventures 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fancypantsadvantures3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/fancypantsadvantures3/",
    isNew: false
  },
  {
    id: 649,
    title: "Fireboy and Watergirl",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fireboywatergirl.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/fireboywatergirl/",
    isNew: false
  },
  {
    id: 650,
    title: "Fireboy and Watergirl 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fireboywatergirl2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/fireboywatergirl2/",
    isNew: false
  },
  {
    id: 651,
    title: "Fireboy and Watergirl 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fireboywatergirl3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/fireboywatergirl3/",
    isNew: false
  },
  {
    id: 652,
    title: "Fireboy and Watergirl 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fireboywatergirl4.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/fireboywatergirl4/",
    isNew: false
  },
  {
    id: 653,
    title: "Flappy Bird",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/flappybird.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/flappybird/",
    isNew: false
  },
  {
    id: 654,
    title: "fleeing The Complex",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fleeingthecomplex.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/fleeingthecomplex/",
    isNew: false
  },
  {
    id: 655,
    title: "Flippy Fish",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/flippy-fish.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/flippy-fish/",
    isNew: false
  },
  {
    id: 656,
    title: "Floodrunner 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/floodrunner2.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/floodrunner2/",
    isNew: false
  },
  {
    id: 657,
    title: "Floodrunner 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/floodrunner3.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/floodrunner3/",
    isNew: false
  },
  {
    id: 658,
    title: "Fluidsim",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fluidsim.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/fluidsim/",
    isNew: false
  },
  {
    id: 660,
    title: "Free Rider 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/free-rider-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/free-rider-2/",
    isNew: false
  },
  {
    id: 661,
    title: "Frost Bite",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/frostbite.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/frostbite/",
    isNew: false
  },
  {
    id: 662,
    title: "Frost Bite 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/frostbite2.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/frostbite2/",
    isNew: false
  },
  {
    id: 663,
    title: "Fruit Ninja",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ninja.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/ninja/",
    isNew: false
  },
  {
    id: 664,
    title: "Funny Ball Game",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/funnyballgame.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/funnyballgame/",
    isNew: false
  },
  {
    id: 665,
    title: "Funny Mad Racing",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/funnymadracing.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/funnymadracing/",
    isNew: false
  },
  {
    id: 666,
    title: "Funny Shooter",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/funnyshooter.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/funnyshooter/",
    isNew: false
  },
  {
    id: 667,
    title: "Funny Shooter 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/funnyshooter2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/funnyshooter2/",
    isNew: false
  },
  {
    id: 668,
    title: "Game Maker",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gamemaker.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/gamemaker/",
    isNew: false
  },
  {
    id: 669,
    title: "Getaway Shootout",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/getaway-shootout.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/getaway-shootout/",
    isNew: false
  },
  {
    id: 670,
    title: "Gumball Splash Master",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/splash.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/splash/",
    isNew: false
  },
  {
    id: 671,
    title: "Gun Mayhem",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gunmayhem.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/gunmayhem/",
    isNew: false
  },
  {
    id: 672,
    title: "Gun Mayhem 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/gunmayhem2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/gunmayhem2/",
    isNew: false
  },
  {
    id: 673,
    title: "Hacker Type",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/hackertype.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/hackertype/",
    isNew: false
  },
  {
    id: 674,
    title: "Happy Hop",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/happy-hop.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/happy-hop/",
    isNew: false
  },
  {
    id: 675,
    title: "Happy Wheels",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/happywheels.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/happywheels/",
    isNew: false
  },
  {
    id: 676,
    title: "Helicopter",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/helicopter.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/helicopter/",
    isNew: false
  },
  {
    id: 677,
    title: "Helix Jump",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/helixjump.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/helixjump/",
    isNew: false
  },
  {
    id: 678,
    title: "House Of Hazards",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/house-of-hazards.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/house-of-hazards/",
    isNew: false
  },
  {
    id: 679,
    title: "Idle Breakout",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/idle-breakout.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/idle-breakout/",
    isNew: false
  },
  {
    id: 680,
    title: "Idle Shark",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/idle-shark.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/idle-shark/",
    isNew: false
  },
  {
    id: 681,
    title: "Infinite Craft",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/infinitecraft.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/infinitecraft/",
    isNew: false
  },
  {
    id: 682,
    title: "Jelly Truck",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/jelly-truck.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/jelly-truck/",
    isNew: false
  },
  {
    id: 683,
    title: "Just One Boss",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/just-one-boss.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/just-one-boss/",
    isNew: false
  },
  {
    id: 684,
    title: "Knife Hit",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/knifehit.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/knifehit/",
    isNew: false
  },
  {
    id: 685,
    title: "last Horizon",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/lasthorizon.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/lasthorizon/",
    isNew: false
  },
  {
    id: 686,
    title: "lazy Jump 3d",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/lazyjump3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/lazyjump3d/",
    isNew: false
  },
  {
    id: 687,
    title: "learn To Fly",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/learntofly.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/learntofly/",
    isNew: false
  },
  {
    id: 688,
    title: "learn To Fly 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/learntofly2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/learntofly2/",
    isNew: false
  },
  {
    id: 689,
    title: "learn to fly 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/learntofly3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/learntofly3/",
    isNew: false
  },
  {
    id: 690,
    title: "line rider",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/linerider.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/linerider/",
    isNew: false
  },
  {
    id: 691,
    title: "lows Adventures 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/lowsadventures2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/lowsadventures2/",
    isNew: false
  },
  {
    id: 692,
    title: "Mario and Luigi: Superstar Saga",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/player#superstar.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=superstar",
    isNew: false
  },
  {
    id: 693,
    title: "Mario Kart: Super Circuit",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/player#mariokart.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=mariokart",
    isNew: false
  },
  {
    id: 694,
    title: "Pokemon Emerald",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pokemonemerald.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player/#pokemonemerald",
    isNew: false
  },
  {
    id: 695,
    title: "Pokemon Green",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pokemongreen.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player/#pokemongreen",
    isNew: false
  },
  {
    id: 696,
    title: "Pokemon Red",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pokemonred.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player/#pokemonred",
    isNew: false
  },
  {
    id: 697,
    title: "Pokemon Sapphire",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pokemonsapphire.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player/#pokemonsapphire",
    isNew: false
  },
  {
    id: 698,
    title: "Microsoft surf",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/surf.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/surf/",
    isNew: false
  },
  {
    id: 699,
    title: "Minecraft 1.12.2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mc112.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mc112.html",
    isNew: false
  },
  {
    id: 700,
    title: "Minecraft 1.21.4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mc121.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mc121.html",
    isNew: false
  },
  {
    id: 701,
    title: "Monster Tracks",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/monstert.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/livediesmos/monstertracks.html",
    isNew: false
  },
  {
    id: 703,
    title: "Motox3m",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/motox3m.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/motox3m/",
    isNew: false
  },
  {
    id: 704,
    title: "Motox3m 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/moto-x3m-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/moto-x3m-2/",
    isNew: false
  },
  {
    id: 705,
    title: "Motox3m Pool Party",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/moto-x3m-pool-party.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/moto-x3m-pool-party/",
    isNew: false
  },
  {
    id: 706,
    title: "Motox3m Spooky",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/motox3m-spooky.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/motox3m-spooky/",
    isNew: false
  },
  {
    id: 707,
    title: "Mutilate A Doll 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/mad2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/mad2/",
    isNew: false
  },
  {
    id: 708,
    title: "myTeardrop",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/play.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/teardrop/play/",
    isNew: false
  },
  {
    id: 709,
    title: "Neon Rider",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/neonrider.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/neonrider/",
    isNew: false
  },
  {
    id: 710,
    title: "Offline Paradise",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/OfflineParadise.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/OfflineParadise/",
    isNew: false
  },
  {
    id: 711,
    title: "OMORI",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/omori.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/omori/",
    isNew: false
  },
  {
    id: 712,
    title: "One Screen Run",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/one-screen-run.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/one-screen-run/",
    isNew: false
  },
  {
    id: 713,
    title: "One Screen Run 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/one-screen-run-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/one-screen-run-2/",
    isNew: false
  },
  {
    id: 714,
    title: "Osu!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/osu.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/osu/",
    isNew: false
  },
  {
    id: 715,
    title: "Osu! Mania",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/osumania.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/osumania/",
    isNew: false
  },
  {
    id: 716,
    title: "ovo",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ovo.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/ovo/",
    isNew: false
  },
  {
    id: 717,
    title: "Papa's Burgeria",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/burger.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/papasburgeria/",
    isNew: false
  },
  {
    id: 718,
    title: "Papa's Pizzaria",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pizza.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/pizza/",
    isNew: false
  },
  {
    id: 719,
    title: "Papas Pancakeria",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/papas-pancakeria.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/papas-pancakeria/",
    isNew: false
  },
  {
    id: 720,
    title: "Papas Wingeria",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/papaswingeria.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/papaswingeria/",
    isNew: false
  },
  {
    id: 721,
    title: "Papery Planes",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/papery-planes.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/papery-planes/",
    isNew: false
  },
  {
    id: 722,
    title: "Pizza Tower",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pizza-tower.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/pizza-tower/",
    isNew: false
  },
  {
    id: 723,
    title: "Plants vs Zombies",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pvz.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/pvz/",
    isNew: false
  },
  {
    id: 724,
    title: "Pokemon: FireRed",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pokemonred.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=pokemonred",
    isNew: false
  },
  {
    id: 725,
    title: "Pokemon: LeafGreen",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/pokemongreen.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=pokemongreen",
    isNew: false
  },
  {
    id: 726,
    title: "Popcat Classic",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/popcat-classic.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/popcat-classic/",
    isNew: false
  },
  {
    id: 727,
    title: "Portal Flash",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/portalflash.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/portalflash/",
    isNew: false
  },
  {
    id: 728,
    title: "Red Ball 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/redball3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/redball3/",
    isNew: false
  },
  {
    id: 729,
    title: "Red Ball 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/redball4.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/redball4/",
    isNew: false
  },
  {
    id: 730,
    title: "Retro Bowl",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/retro-bowl.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/retro-bowl/",
    isNew: false
  },
  {
    id: 731,
    title: "Rise-Of Neon Square",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rise-of-neon-square.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/rise-of-neon-square/",
    isNew: false
  },
  {
    id: 732,
    title: "Ristar",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ristar.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/ristar/",
    isNew: false
  },
  {
    id: 733,
    title: "Rocket Soccer Derby",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rocketleague.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/rocketleague/",
    isNew: false
  },
  {
    id: 734,
    title: "Rooftop snipers",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rooftopsnipers.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/rooftopsnipers/",
    isNew: false
  },
  {
    id: 735,
    title: "Rooftop snipers 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rooftopsnipers2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/rooftopsnipers2/",
    isNew: false
  },
  {
    id: 736,
    title: "Run",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/run.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/run/",
    isNew: false
  },
  {
    id: 737,
    title: "Run 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/run2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/run2/",
    isNew: false
  },
  {
    id: 738,
    title: "Sand Game",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sand-game.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/sand-game/",
    isNew: false
  },
  {
    id: 739,
    title: "Sandboxels",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sandboxels.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/sandboxels/",
    isNew: false
  },
  {
    id: 740,
    title: "Short life 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/short-life-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/short-life-2/",
    isNew: false
  },
  {
    id: 741,
    title: "Short Ride",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/short-ride.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/short-ride/",
    isNew: false
  },
  {
    id: 742,
    title: "Sky Block",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/skyblock.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/skyblock/",
    isNew: false
  },
  {
    id: 743,
    title: "Slope",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/slope.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/slope/",
    isNew: false
  },
  {
    id: 744,
    title: "SM63",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sm63.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/sm63/",
    isNew: false
  },
  {
    id: 745,
    title: "Smash Karts",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/smashk.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/smashk/",
    isNew: false
  },
  {
    id: 746,
    title: "Snow Rider 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/rider.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/rider/",
    isNew: false
  },
  {
    id: 747,
    title: "Sonic Advance",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sonic_advance.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=sonic_advance",
    isNew: false
  },
  {
    id: 748,
    title: "Sonic Advance 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sonic_advance2.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=sonic_advance2",
    isNew: false
  },
  {
    id: 749,
    title: "Sonic Advance 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sonic_advance3.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=sonic_advance3",
    isNew: false
  },
  {
    id: 750,
    title: "Sonic the Hedgehog",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sonic.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/sonic/",
    isNew: false
  },
  {
    id: 751,
    title: "Space Invaders",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/spaceinvaders.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/spaceinvaders/",
    isNew: false
  },
  {
    id: 752,
    title: "Spongebob Fiery Tracks Of Fury",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/fist.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/fist/",
    isNew: false
  },
  {
    id: 753,
    title: "SpongeBob Patty Panic",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/panic.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/panic/",
    isNew: false
  },
  {
    id: 754,
    title: "Spongebob: Belly Bounce",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/bounce.jpg",
    url: "player.html?game=bounce/",
    isNew: false
  },
  {
    id: 755,
    title: "Stack Bump 3d",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/stack-bump-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/stack-bump-3d/",
    isNew: false
  },
  {
    id: 756,
    title: "Stealing The Diamond",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/stealingthediamond.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/stealingthediamond/",
    isNew: false
  },
  {
    id: 757,
    title: "Stickman Dismount",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/stickman-dismount.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/stickman-dismount/",
    isNew: false
  },
  {
    id: 758,
    title: "Stickman Hook",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/stickman-hook.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/stickman-hook/",
    isNew: false
  },
  {
    id: 759,
    title: "Stickman Survival",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/Stickman-Survival.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/Stickman-Survival/",
    isNew: false
  },
  {
    id: 760,
    title: "Subway Surfers",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/subway.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/subway/",
    isNew: false
  },
  {
    id: 761,
    title: "Super Brawl 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sb2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/sb2/",
    isNew: false
  },
  {
    id: 762,
    title: "Super Mario 64",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/sm64.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sm64.html",
    isNew: false
  },
  {
    id: 763,
    title: "Super Mario Advance",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/supermarioadvance.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=supermarioadvance",
    isNew: false
  },
  {
    id: 764,
    title: "Super Mario Advance 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/supermarioadvance2.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=supermarioadvance2",
    isNew: false
  },
  {
    id: 765,
    title: "Super Mario Advance 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/supermarioadvance3.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=supermarioadvance3",
    isNew: false
  },
  {
    id: 766,
    title: "Super Mario Advance 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/supermarioadvance4.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=supermarioadvance4",
    isNew: false
  },
  {
    id: 767,
    title: "Super Mario Flash",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/supermarioflash.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/supermarioflash/",
    isNew: false
  },
  {
    id: 768,
    title: "Super Mario Flash 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/supermarioflash2.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/supermarioflash2/",
    isNew: false
  },
  {
    id: 769,
    title: "Super Mario Maker",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/super-mario-maker-online.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/super-mario-maker-online/",
    isNew: false
  },
  {
    id: 770,
    title: "Super Meat Boy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/supermeatboy.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/supermeatboy/",
    isNew: false
  },
  {
    id: 771,
    title: "Super Puffer Fish 3d",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/super-puffer-fish-3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/super-puffer-fish-3d/",
    isNew: false
  },
  {
    id: 772,
    title: "Super Smash Flash",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ssf.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/ssf/",
    isNew: false
  },
  {
    id: 773,
    title: "Tank Trouble 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tank-trouble-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/tank-trouble-2/",
    isNew: false
  },
  {
    id: 774,
    title: "Tetris",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/tetris.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/tetris/",
    isNew: false
  },
  {
    id: 775,
    title: "The Backrooms",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/backrooms.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/backrooms/",
    isNew: false
  },
  {
    id: 776,
    title: "The Final Earth",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/the-final-earth.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/the-final-earth/",
    isNew: false
  },
  {
    id: 777,
    title: "The Final Earth 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/the-final-earth-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/the-final-earth-2/",
    isNew: false
  },
  {
    id: 778,
    title: "The Impossible Game",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/theimpossiblegame.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/theimpossiblegame/",
    isNew: false
  },
  {
    id: 779,
    title: "The Impossible Quiz",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/the-impossible-quiz.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/the-impossible-quiz/",
    isNew: false
  },
  {
    id: 780,
    title: "The Impossible Quiz 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/the-impossible-quiz-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/the-impossible-quiz-2/",
    isNew: false
  },
  {
    id: 781,
    title: "The Simpsons: Road Rage",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/simpsons.jpg",
    url: "https://chicken.parmacitieschools.org/gba/player.html?game=simpsons",
    isNew: false
  },
  {
    id: 782,
    title: "There is no game",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/there-is-no-game.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/there-is-no-game/",
    isNew: false
  },
  {
    id: 783,
    title: "This Is The Only Level",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/thisistheonlylevel.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/thisistheonlylevel/",
    isNew: false
  },
  {
    id: 784,
    title: "Traffic Jam 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/traffic3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/traffic3d/",
    isNew: false
  },
  {
    id: 785,
    title: "Twinshot",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/twinshot.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/twinshot/",
    isNew: false
  },
  {
    id: 786,
    title: "Twinshot 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/twinshot2.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/twinshot2/",
    isNew: false
  },
  {
    id: 787,
    title: "Ultimate Flash Sonic",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/ultimateflashsonic.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/ultimateflashsonic/",
    isNew: false
  },
  {
    id: 788,
    title: "Unfair Mario",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/unfairmario.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/whatver/unfairmario/",
    isNew: false
  },
  {
    id: 789,
    title: "Vex",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/vex.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/vex/",
    isNew: false
  },
  {
    id: 790,
    title: "Vex 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/vex2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/vex2/",
    isNew: false
  },
  {
    id: 791,
    title: "Vex 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/vex3.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/vex3/",
    isNew: false
  },
  {
    id: 792,
    title: "Vex 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/vex4.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/vex4/",
    isNew: false
  },
  {
    id: 793,
    title: "Vex 5",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/vex5.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/vex5/",
    isNew: false
  },
  {
    id: 794,
    title: "Vex 6",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/vex6.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/vex6/",
    isNew: false
  },
  {
    id: 795,
    title: "Vex 7",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/vex7.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/vex7/",
    isNew: false
  },
  {
    id: 796,
    title: "Wolf 3d",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/wolf3d.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/wolf3d/",
    isNew: false
  },
  {
    id: 797,
    title: "Worlds Hardest Game",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/worlds-hardest-game.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/worlds-hardest-game/",
    isNew: false
  },
  {
    id: 798,
    title: "Worlds Hardest Game 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/worlds-hardest-game-2.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/worlds-hardest-game-2/",
    isNew: false
  },
  {
    id: 799,
    title: "xx142-b2exe",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/xx142-b2exe.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/xx142-b2exe/",
    isNew: false
  },
  {
    id: 800,
    title: "Zombocalypse",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/zombocalypse.jpg",
    url: "player.html?game=https://chicken.parmacitieschools.org/livediesmos/zombocalypse/",
    isNew: false
  },
  {
    id: 801,
    title: "Zombotron",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/zombotron.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/zombotron/",
    isNew: false
  },
  {
    id: 802,
    title: "Zombotron 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/zombotron2.jpg",
    url: "https://chicken.parmacitieschools.org/whatver/zombotron2/",
    isNew: false
  },
{
    id: 803,
    title: "FNF: Heartbreak Havoc: Vs. Sky Redux",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/skyredux.png",
    url: "player.html?game=https://chicken.parmacitieschools.org/fnf/redux/",
    isNew: false
  },
    {
    id: 804,
    title: "1v1.lol",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/1v1lol.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/1v1lol.html",
    isNew: false
  },
    {
    id: 805,
    title: "Cave Story",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/cavestory.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/cavestory.html",
    isNew: false
  },
    {
    id: 806,
    title: "Peggle",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/Peggle.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/Peggle.html",
    isNew: false
  },
    {
    id: 807,
    title: "Cooking Mama 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/cookingmama2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/cookingmama2.html",
    isNew: false
  },
    {
    id: 808,
    title: "Cooking Mama 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/cookingmama3.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/cookingmama3.html",
    isNew: false
  },
    {
    id: 809,
    title: "Crazy Cattle 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/crazycattle3d.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/crazycattle3d.html",
    isNew: false
  },
    {
    id: 810,
    title: "Dan the Man",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/dantheman.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/dantheman.html",
    isNew: false
  },
  {
    id: 811,
    title: "DEAD PLATE",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/deadplate.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/deadplate.html",
    isNew: false
  },
  {
    id: 812,
    title: "Duck Life 8",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/ducklife8.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/ducklife8.html",
    isNew: false
  },
  {
    id: 813,
    title: "Endroll",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/endroll.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/endroll.html",
    isNew: false
  },
  {
    id: 814,
    title: "Gladihoppers",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gladihoppers.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gladihoppers.html",
    isNew: false
  },
  {
    id: 815,
    title: "Fancy Pants Adventure 4 Part 1",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fancypants4p1.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fancypants4p1.html",
    isNew: false
  },
    {
    id: 816,
    title: "Fancy Pants Adventure 4 Part 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fancypants4p2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fancypants4p2.html",
    isNew: false
  },
  {
    id: 817,
    title: "Get Yoked",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/getyoked.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/getyoked.html",
    isNew: false
  },
    {
    id: 818,
    title: "Going Balls",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/goingballs.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/goingballs.html",
    isNew: false
  },
    {
    id: 819,
    title: "Growden.io",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/growdenio.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/growdenio.html",
    isNew: false
  },
    {
    id: 820,
    title: "Gorilla Tag",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gtag.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gtag.html",
    isNew: false
  },
    {
    id: 821,
    title: "Milk Inside a Bag of Milk inside a Bag of Milk",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/milkinside.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/milkinside.html",
    isNew: false
  },
    {
    id: 822,
    title: "Celeste",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/celeste.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/celeste.html",
    isNew: false
  },
    {
    id: 823,
    title: "Mindwave",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mindwave.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mindwave.html",
    isNew: false
  },
    {
    id: 824,
    title: "Newgrounds Rumble",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/newgroundsrumble.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/newgroundsrumble.html",
    isNew: false
  },
    {
    id: 825,
    title: "Oneshot",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/oneshot.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/oneshot.html",
    isNew: false
  },
    {
    id: 826,
    title: "Papa's Pastaria",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papaspastaria.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papaspastaria.html",
    isNew: false
  },
    {
    id: 827,
    title: "Pico's School",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/picoschool.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/picoschool.html",
    isNew: false
  },
    {
    id: 828,
    title: "Madness Combat: Project Nexus",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/projectnexus.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/projectnexus.html",
    isNew: false
  },
{
    id: 829,
    title: "Plants vs. Zombies 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/pvz2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/pvz2.html",
    isNew: false
  },
   {
    id: 830,
    title: "Slime Rancher",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/slimerancher.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/slimerancher.html",
    isNew: false
  }, 
    {
    id: 831,
    title: "Steal Brainrot Online",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/stealbrainrot.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/stealbrainrot.html",
    isNew: true
  },
    {
    id: 832,
    title: "WebFishing",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/webfishing.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/webfishing.html",
    isNew: false
  },
    {
    id: 833,
    title: "BFDI Branches",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bfdibranches.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bfdibranches.html",
    isNew: false
  },
    {
    id: 834,
    title: "We Become What We Behold",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/behold.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/behold.html",
    isNew: false
},
{
    id: 837,
    title: "Slow Roads",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/slowroads.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/slowroads.html",
    isNew: false
},
{
    id: 838,
    title: "Phoenix Wright: Ace Attorney",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/aceattorney.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/aceattorney.html",
    isNew: false
},
{
    id: 839,
    title: "Phoenix Wright: Justice for All",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/phoenixjusticeforall.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/phoenixjusticeforall.html",
    isNew: false
},
{
    id: 840,
    title: "Phoenix Wright: Trials and Tribulations",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/phoenixtrials.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/phoenixtrials.html",
    isNew: false
},
{
    id: 841,
    title: "Mario & Luigi: Partners in Time",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/partnersintime.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/partnersintime.html",
    isNew: false
},
{
    id: 842,
    title: "Mario & Luigi: Bowser's Inside Story",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/insidestory.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/insidestory.html",
    isNew: false
},
{
    id: 843,
    title: "Super Mario Bros",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermariobros.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermariobros.html",
    isNew: false
},
{
    id: 844,
    title: "Super Mario Bros 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermariobros2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermariobros2.html",
    isNew: false
},
{
    id: 845,
    title: "Super Mario Bros 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermariobros3.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermariobros3.html",
    isNew: false
},
{
    id: 846,
    title: "Scooby-Doo! Mystery Mayhem",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/scoobydoogba.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/scoobydoogba.html",
    isNew: false
},
{
    id: 847,
    title: "The SpongeBob Squarepants Movie",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sbmoviegba.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sbmoviegba.html",
    isNew: false
},
{
    id: 848,
    title: "Subway Surfers Berlin",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/subwaysurfers.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/subwaysurfersberlin.html",
    isNew: false
},
{
    id: 849,
    title: "Subway Surfers London",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/subwaysurfers.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/subwaysurferslondon.html",
    isNew: false
},
{
    id: 850,
    title: "Subway Surfers Mexico",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/subwaysurfers.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/subwaysurfersmexico.html",
    isNew: false
},
{
    id: 851,
    title: "Subway Surfers Beijing",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/subwaysurfers.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/subwaysurfersbeijing.html",
    isNew: false
},
{
    id: 852,
    title: "Super Mario All-Stars",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermarioallstars.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermarioallstars.html",
    isNew: false
},
{
    id: 853,
    title: "Super Mario RPG",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermariorpg.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermariorpg.html",
    isNew: false
},
{
    id: 854,
    title: "Sonic Mega Mix",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicmegamix.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicmegamix.html",
    isNew: false
},
{
    id: 855,
    title: "Sonic Classic Heroes",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicclassicheroes.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicclassicheroes.html",
    isNew: false
},
{
    id: 856,
    title: "Sonic Spinball",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicspinball.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicspinball.html",
    isNew: false
},
{
    id: 857,
    title: "Super Punch-Out!!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/superpunchout.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/superpunchout.html",
    isNew: false
},
{
    id: 858,
    title: "Big Ice Tower Tiny Square",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bigicetowertinysquare.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bigicetowertinysquare.html",
    isNew: false
},
{
    id: 859,
    title: "Big Neon Tower Tiny Square",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bigneontowertinysquare.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bigneontowertinysquare.html",
    isNew: false
},
{
    id: 860,
    title: "Big Tower Tiny Square 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bigtowertinysquare2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bigtowertinysquare2.html",
    isNew: false
},
{
    id: 861,
    title: "FIFA 10",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fifa10.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fifa10.html",
    isNew: false
},
{
    id: 862,
    title: "FIFA 11",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fifa11.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fifa11.html",
    isNew: false
},
{
    id: 863,
    title: "Big City Battle",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bigcitybattle.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bigcitybattle.html",
    isNew: false
},
{
    id: 864,
    title: "Bergentruck 201X",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bergentruck201x.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bergentruck201x.html",
    isNew: false
},
{
    id: 865,
    title: "Puyo Pop Fever",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/puyopuyofever.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/puyopuyofever.html",
    isNew: false
},
{
    id: 866,
    title: "Goat Guardian",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/goatguardian.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/goatguardian.html",
    isNew: false
},
{
    id: 867,
    title: "Sprunki",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sprunki.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sprunki.html",
    isNew: false
},
{
    id: 868,
    title: "Sprunki Clicker",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sprunkiclicker.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sprunkiclicker.html",
    isNew: false
},
{
    id: 869,
    title: "You vs 100 Skibidi Toilets",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/youvs100skibidi.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/youvs100skibidi.html",
    isNew: false
},
{
    id: 870,
    title: "Whack the Creeps",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/whackthecreeps.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/whackthecreeps.html",
    isNew: false
},
{
    id: 871,
    title: "Whack Your Boss",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/whackyourboss.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/whackyourboss.html",
    isNew: false
},
{
    id: 872,
    title: "Whack Your Computer",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/whackyourcomputer.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/whackyourcomputer.html",
    isNew: false
},
{
    id: 873,
    title: "Whack Your Ex",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/whackyourex.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/whackyourex.html",
    isNew: false
},
{
    id: 874,
    title: "Housebroken Hero",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/housebrokenhero.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/housebrokenhero.html",
    isNew: false
},
    {
    id: 875,
    title: "Animal Crossing: Wild World",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/animalcrossingwildworld.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/animalcrossingwildworld.html",
    isNew: false
},
{
    id: 876,
    title: "Ant Buster",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/antbuster.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/antbuster.html",
    isNew: false
},
{
    id: 877,
    title: "The Amazing World of Gumball: Blindfooled",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/blindfooled.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/blindfooled.html",
    isNew: false
},
{
    id: 878,
    title: "SpongeBob Squarepants: Boo or Boom",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/booorboom.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/booorboom.html",
    isNew: false
},
{
    id: 879,
    title: "BuildNow.gg",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/buildnowgg.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/buildnowgg.html",
    isNew: false
},
{
    id: 880,
    title: "Capybara Clicker",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/capybaraclicker.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/capybaraclicker.html",
    isNew: false
},
{
    id: 882,
    title: "SpongeBob Squarepants: Delivery Dilemma",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/deliverydilemma.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/deliverydilemma.html",
    isNew: false
},
{
    id: 883,
    title: "Deltatraveler",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/deltatraveler.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/deltatraveler.html",
    isNew: false
},
{
    id: 884,
    title: "Donkey Kong Country",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/donkeykongcountry.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/donkeykongcountry.html",
    isNew: false
},
{
    id: 885,
    title: "Driven Wild",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/drivenwild.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/drivenwild.html",
    isNew: false
},
{
    id: 886,
    title: "FortZone Battle Royale",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fortzonebattleroyale.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fortzonebattleroyale.html",
    isNew: false
},
{
    id: 887,
    title: "Grand Action Simulator: New York",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/grandactionsimulatorny.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/grandactionsimulatorny.html",
    isNew: false
},
{
    id: 888,
    title: "GTA: Vice City",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gtavicecity.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gtavicecity.html",
    isNew: false
},
{
    id: 889,
    title: "Half-Life",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/halflife.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/halflife.html",
    isNew: false
},
{
    id: 890,
    title: "Nickelodeon: Hardest Game Ever",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/hardestgameever.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/hardestgameever.html",
    isNew: false
},
{
    id: 891,
    title: "Highway Racer",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/highwayracer.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/highwayracer.html",
    isNew: false
},
{
    id: 892,
    title: "Kitty Toy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/kittytoy.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/kittytoy.html",
    isNew: false
},
{
    id: 893,
    title: "Look Outside",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/lookoutside.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/lookoutside.html",
    isNew: false
},
{
    id: 894,
    title: "Mario Kart DS",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mariokartds.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mariokartds.html",
    isNew: false
},
{
    id: 895,
    title: "Mario Party DS",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mariopartyds.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mariopartyds.html",
    isNew: false
},
{
    id: 896,
    title: "Nintendogs: Labrador & Friends",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/nintendogslab.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/nintendogslab.html",
    isNew: false
},
{
    id: 897,
    title: "Pizza Tower: Scoutdigo",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/pizzatowerscoutdigo.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/pizzatowerscoutdigo.html",
    isNew: false
},
{
    id: 898,
    title: "SpongeBob Squarepants: Pyramid Peril",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/pyramidperil.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/pyramidperil.html",
    isNew: false
},
{
    id: 899,
    title: "Sandtris",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sandtris.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sandtris.html",
    isNew: false
},
{
    id: 900,
    title: "SpongeBob Squarepants: Sea Monster Smoosh",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/seamonstersmoosh.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/seamonstersmoosh.html",
    isNew: false
},
{
    id: 902,
    title: "Sonic CD",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/soniccd.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/soniccd.html",
    isNew: false
},
{
    id: 903,
    title: "Sonic Colors",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/soniccolors.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/soniccolors.html",
    isNew: false
},
{
    id: 904,
    title: "Sonic.exe",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicexe.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicexe.html",
    isNew: false
},
{
    id: 905,
    title: "Sonic Mania",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicmania.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicmania.html",
    isNew: false
},
{
    id: 906,
    title: "Sonic Rush",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicrush.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicrush.html",
    isNew: false
},
{
    id: 907,
    title: "Super Mario World",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermarioworld.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermarioworld.html",
    isNew: false
},
{
    id: 908,
    title: "Super Mario World 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermarioworld2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermarioworld2.html",
    isNew: false
},
{
    id: 909,
    title: "Super Princess Peach",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/superprincesspeach.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/superprincesspeach.html",
    isNew: false
},
{
    id: 910,
    title: "Traffic Rider",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/trafficrider.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/trafficrider.html",
    isNew: false
},
    {
    id: 911,
    title: "FNF: Sonic Dash And Spin",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicdashandspin.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/fnf/sonicdashandspin.html",
    isNew: false
},
        {
    id: 912,
    title: "FNF: CN Lost Episodes",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/fnf/cnlost.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/fnf/cnlost.html",
    isNew: false
},
        {
    id: 913,
    title: "Choose Your Weapon",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/whatver/chooseyourweapon.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/whatver/chooseyourweapon.html",
    isNew: false
},
        {
    id: 914,
    title: "Choose Your Weapon 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/whatver/chooseyourweapon2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/whatver/chooseyourweapon2.html",
    isNew: false
},
        {
    id: 915,
    title: "Choose Your Weapon 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/whatver/chooseyourweapon3.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/whatver/chooseyourweapon3.html",
    isNew: false
},
         {
    id: 916,
    title: "FNF: Vs. Jeffy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/images@main/jeffy.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/jeffy.html",
    isNew: false
             },
         {
    id: 917,
    title: "Wheely",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheel.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheely.html",
    isNew: false
             },
       {
    id: 918,
    title: "Wheely 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheel2.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheely2.html",
    isNew: false
             },
       {
    id: 919,
    title: "Wheely 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheel3.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheely3.html",
    isNew: false
             },
       {
    id: 920,
    title: "Wheely 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheel4.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheely4.html",
    isNew: false
             },
       {
    id: 921,
    title: "Wheely 5",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheel5.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheely5.html",
    isNew: false
             },
       {
    id: 922,
    title: "Wheely 6",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheel6.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheely6.html",
    isNew: false
             },
       {
    id: 923,
    title: "Wheely 7",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheel7.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheely7.html",
    isNew: false
             },
       {
    id: 924,
    title: "Wheely 8",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheel8.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wheely8.html",
    isNew: false
             },
         {
    id: 925,
    title: "Sonic Revert",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/revert.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicrevert.html",
    isNew: false
},
     {
    id: 926,
    title: "Drive Mad",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/drivemad.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/drivemad.html",
    isNew: false
},
     {
    id: 927,
    title: "Papers.io Mania",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papermania.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/paperiomania.html",
    isNew: false
},
     {
    id: 928,
    title: "Granny",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/granny.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/granny.html",
    isNew: false
},
  {
    id: 929,
    title: "FNAF",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fnaf.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/FNAF.html",
    isNew: false
},
  {
    id: 930,
    title: "FNAF 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fnaf2.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/FNAF2.html",
    isNew: false
},
  {
    id: 931,
    title: "FNAF 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fnaf3.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/FNAF3.html",
    isNew: false
},
  {
    id: 932,
    title: "FNAF 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fnaf4.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/FNAF4.html",
    isNew: false
},
{
    id: 933,
    title: "Parappa The Rapper",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/parappa.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/parappatherapper.html",
    isNew: false
},
{
    id: 934,
    title: "Omega Nugget Clicker",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/omega.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/omeganuggetclicker.html",
    isNew: false
},
{
    id: 935,
    title: "Room Clicker",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/room.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/roomclicker.html",
    isNew: false
},
{
    id: 936,
    title: "Minecraft Pocket Edition 0.6.1",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mcpe.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mcpe.html",
    isNew: false
},
     {
    id: 937,
    title: "FNF: CITYFUNK",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/cityfunk.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/cityfunk.html",
    isNew: false
},
             {
    id: 938,
    title: "FNF: Jeffy's Infinite Irida (SHUCKS DEMO)",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/irida.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/irida.html",
    isNew: false
},
{
    id: 939,
    title: "Antonblast",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/antonblast.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/antonblast.html",
    isNew: false
},
{
    id: 940,
    title: "Jumbo Mario",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/jumbomario.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/jumbomario.html",
    isNew: false
},
{
    id: 941,
    title: "Needy Streamer Overload",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/needystreameroverload.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/needystreameroverload.html",
    isNew: false
},
{
    id: 942,
    title: "Bart Blast",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bartblast.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bartblast.html",
    isNew: false
},
{
    id: 943,
    title: "Kirby ~ Soft and Wet",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/kirbysoftandwet.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/kirbysoftandwet.html",
    isNew: false
},
{
    id: 944,
    title: "Tetris",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/tetris.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/tetris.html",
    isNew: false
},
{
    id: 945,
    title: "Five Nights at Epstein's",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fivenightsatepsteins.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fivenightsatepsteins.html",
    isNew: false
},
{
    id: 946,
    title: "Survivor.io",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/survivorio.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/survivorio.html",
    isNew: false
},
{
    id: 947,
    title: "FNF: Vs. Rewrite: Round 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/rewriteround2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/rewriteround2.html",
    isNew: false
},
{
    id: 948,
    title: "In Stars and Time",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/instarsandtime.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/instarsandtime.html",
    isNew: false
},
{
    id: 949,
    title: "FNF: Vs. Impostor (2025): UPDOG",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/updog.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/updog.html",
    isNew: false
},
{
    id: 950,
    title: "FNF: Vs Mouse: Rookies Edition (Disk 1)",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mouse-rookies.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mouse-rookies.html",
    isNew: false
},
{
    id: 951,
    title: "FNF: Anemaniac – Bendy vs Ollie",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/anemaniac.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/anemaniac.html",
    isNew: false
},  
{
    id: 952,
    title: "FNF: Sky: REBORN",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/skyreborn.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/skyreborn.html",
    isNew: false
},  
{
    id: 953,
    title: "FNF: Funkin’ on the Heights!",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/funkinheights.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/funkinheights.html",
    isNew: false
}, 
{
    id: 954,
    title: "FNF: DOCAD: 2-shot Demo",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/docad.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/docad.html",
    isNew: false
},  
{
    id: 955,
    title: "FNF: Annoying Orange: The Amazing Grace V2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/rottensmoothie.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/rottensmoothie.html",
    isNew: false
},
{
    id: 956,
    title: "awesome calculator",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/awesomecalculator.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/awesomecalculator.html",
    isNew: false
},
    {
    id: 957,
    title: "Bloxorz",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloxorz.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloxorz.html",
    isNew: false
},
{
    id: 958,
    title: "Crazy Chicken 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/crazychicken3d.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/crazychicken3d.html",
    isNew: false
},
{
    id: 959,
    title: "Crazy Kitty 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/crazykitty3d.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/crazykitty3d.html",
    isNew: false
},
{
    id: 960,
    title: "Getting Over It with Bennett Foddy",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gettingoverit.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gettingoverit.html",
    isNew: false
},
{
    id: 961,
    title: "Hotline Miami",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/hotlinemiami.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/hotlinemiami.html",
    isNew: false
},
{
    id: 962,
    title: "Minecraft 1.5.2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mc152.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mc152.html",
    isNew: false
},
{
    id: 963,
    title: "Minecraft Alpha 1.2.6",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mcalpha126.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mcalpha126.html",
    isNew: false
},
{
    id: 964,
    title: "Minecraft Beta 1.3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mcbeta13.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/mcbeta13.html",
    isNew: false
},
{
    id: 966,
    title: "Tomb of the Mask",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/tombofthemask.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/tombofthemask.html",
    isNew: false
},
{
    id: 967,
    title: "Toss the Turtle",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/tosstheturtle.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/tosstheturtle.html",
    isNew: false
},
{
    id: 968,
    title: "Touhou: Luminous Strike",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/touhouluminousstrike.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/touhouluminousstrike.html",
    isNew: false
},
{
    id: 969,
    title: "Undertale: Last Breath",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/undertalelastbreath.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/undertalelastbreath.html",
    isNew: false
},
{
    id: 970,
    title: "Balatro",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/balatro.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/balatro.html",
    isNew: false
},
{
    id: 971,
    title: "A Random Bee Swarm Simulator Knockoff",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bee.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bee.html",
    isNew: false
},
{
    id: 972,
    title: "Baseball Bros",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/baseballbros.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/baseballbros.html",
    isNew: false
},
{
    id: 973,
    title: "Big Flappy Tower Tiny Square",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bigflappytowertinysquare.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bigflappytowertinysquare.html",
    isNew: false
},
{
    id: 974,
    title: "Bloons 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloons2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloons2.html",
    isNew: false
},
{
    id: 975,
    title: "Bloons Tower Defense 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonsTD3.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonsTD3.html",
    isNew: false
},
{
    id: 976,
    title: "Bloons Tower Defense 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonsTD4.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonsTD4.html",
    isNew: false
},
{
    id: 977,
    title: "Bloons Tower Defense 5",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonsTD5.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonsTD5.html",
    isNew: false
},
{
    id: 978,
    title: "Bloons Player Pack 1",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonspp1.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonspp1.html",
    isNew: false
},
{
    id: 979,
    title: "Bloons Player Pack 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonspp2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonspp2.html",
    isNew: false
},
{
    id: 980,
    title: "Bloons Player Pack 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonspp3.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonspp3.html",
    isNew: false
},
{
    id: 981,
    title: "Bloons Player Pack 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonspp4.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonspp4.html",
    isNew: false
},
{
    id: 982,
    title: "Bloons Player Pack 5",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonspp5.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonspp5.html",
    isNew: false
},
{
    id: 983,
    title: "Bowmasters",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bowmasters.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bowmasters.html",
    isNew: false
},
{
    id: 984,
    title: "Candy Crush",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/candycrush.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/candycrush.html",
    isNew: false
},
{
    id: 985,
    title: "Drift Cup Racing",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/driftcupracing.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/driftcupracing.html",
    isNew: false
},
{
    id: 986,
    title: "Jacksmith",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/jacksmith.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/jacksmith.html",
    isNew: false
},
{
    id: 987,
    title: "Jungle Bubble",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/junglebubble.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/junglebubble.html",
    isNew: false
},
{
    id: 988,
    title: "Memo Matcher",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/memomatcher.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/memomatcher.html",
    isNew: false
},
{
    id: 989,
    title: "Papa's Bakeria",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papasbakeria.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papasbakeria.html",
    isNew: false
},
{
    id: 990,
    title: "Papa's Cheeseria",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papascheeseria.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papascheeseria.html",
    isNew: false
},
{
    id: 991,
    title: "Papa's Donuteria",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papasdonuteria.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papasdonuteria.html",
    isNew: false
},
{
    id: 992,
    title: "Papa's Scooperia",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papasscooperia.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papasscooperia.html",
    isNew: false
},
{
    id: 993,
    title: "Papa's Taco Mia",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papastacomia.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/papastacomia.html",
    isNew: false
},
{
    id: 994,
    title: "Potatoman Seeks the Troof",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/potatomanseeksthetroof.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/potatomanseeksthetroof.html",
    isNew: false
},
{
    id: 995,
    title: "Riddle School",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddleschool.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddleschool.html",
    isNew: false
},
{
    id: 996,
    title: "Riddle School 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddleschool2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddleschool2.html",
    isNew: false
},
{
    id: 997,
    title: "Riddle School 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddleschool3.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddleschool3.html",
    isNew: false
},
{
    id: 998,
    title: "Riddle School 4",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddleschool4.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddleschool4.html",
    isNew: false
},
{
    id: 999,
    title: "Riddle School 5",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddleschool5.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddleschool5.html",
    isNew: false
},
{
    id: 1000,
    title: "Riddle Transfer",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddletransfer.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddletransfer.html",
    isNew: false
},
{
    id: 1001,
    title: "Riddle Transfer 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddletransfer2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/riddletransfer2.html",
    isNew: false
},
{
    id: 1002,
    title: "Solar Smash",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/solarsmash.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/solarsmash.html",
    isNew: false
},
      {
    id: 1003,
    title: "Awesome Tanks",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/awesometanks.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/awesometanks.html",
    isNew: false
},
{
    id: 1004,
    title: "Awesome Tanks 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/awesometanks2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/awesometanks2.html",
    isNew: false
},
    {
    id: 1005,
    title: "Among Rampage",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/amongrampage.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/amongrampage.html",
    isNew: false
},
{
    id: 1006,
    title: "Doom",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/doom.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/doom.html",
    isNew: false
},
{
    id: 1007,
    title: "Doom II",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/doom2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/doom2.html",
    isNew: false
},
{
    id: 1008,
    title: "Doom III",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/doom3.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/doom3.html",
    isNew: false
},
{
    id: 1009,
    title: "Dumb Ways to Die",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/dumbwaystodie.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/dumbwaystodie.html",
    isNew: false
},
{
    id: 1010,
    title: "Fallout",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fallout.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fallout.html",
    isNew: false
},
{
    id: 1011,
    title: "Kindergarten",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/kindergarten.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/kindergarten.html",
    isNew: false
},
{
    id: 1012,
    title: "Kindergarten 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/kindergarten2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/kindergarten2.html",
    isNew: false
},
{
    id: 1013,
    title: "Kindergarten 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/kindergarten3.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/kindergarten3.html",
    isNew: false
},
{
    id: 1014,
    title: "OFF",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/off.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/off.html",
    isNew: false
},
{
    id: 1015,
    title: "Touhou Mother",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/touhoumother.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/touhoumother.html",
    isNew: false
},
{
    id: 1016,
    title: "Trivia Crack",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/triviacrack.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/triviacrack.html",
    isNew: false
},
{
    id: 1017,
    title: "Gacha Life",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gachalife.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gachalife.html",
    isNew: false
},
{
    id: 1018,
    title: "Gachaverse",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gachaverse.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gachaverse.html",
    isNew: false
},
{
    id: 1019,
    title: "FNF: Vs Forsaken: DEMO",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/forsaken.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/forsaken.html",
    isNew: false
},
{
    id: 1020,
    title: "FNF: Throwback",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/throwback.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/throwback.html",
    isNew: false
},
{
    id: 1021,
    title: "Ace Attorney Investigations",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/aceattorneyinvestigations.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/aceattorneyinvestigations.html",
    isNew: false
},
{
    id: 1022,
    title: "Bloons Insanity Pack",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonsinsanitypack.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/bloonsinsanitypack.html",
    isNew: false
},
{
    id: 1023,
    title: "Dad n' Me",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/dadnme.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/dadnme.html",
    isNew: false
},
{
    id: 1024,
    title: "Gravity Duck",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gravityduck.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gravityduck.html",
    isNew: false
},
{
    id: 1025,
    title: "Gravity Duck 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gravityduck2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gravityduck2.html",
    isNew: false
},
{
    id: 1026,
    title: "Halloween Jam",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/halloweenjam.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/halloweenjam.html",
    isNew: false
},
{
    id: 1027,
    title: "NG's Finest",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/ngsfinest.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/ngsfinest.html",
    isNew: false
},
{
    id: 1028,
    title: "Nyan Cat Lost in Space",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/nyancatlostinspace.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/nyancatlostinspace.html",
    isNew: false
},
{
    id: 1029,
    title: "Patapon Beat Camp",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/pataponbeatcamp.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/pataponbeatcamp.html",
    isNew: false
},
{
    id: 1030,
    title: "Pet Zombie",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/petzombie.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/petzombie.html",
    isNew: false
},
{
    id: 1031,
    title: "Pico's School: Love Conquers All",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/picosschoolloveconquersall.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/picosschoolloveconquersall.html",
    isNew: false
},
{
    id: 1032,
    title: "Pocket Emo",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/pocketemo.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/pocketemo.html",
    isNew: false
},
{
    id: 1033,
    title: "Stick Figure Badminton",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/stickfigurebadminton.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/stickfigurebadminton.html",
    isNew: false
},
{
    id: 1034,
    title: "Stick Figure Badminton 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/stickfigurebadminton2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/stickfigurebadminton2.html",
    isNew: false
},
{
    id: 1035,
    title: "Stick Figure Badminton 3",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/stickfigurebadminton3.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/stickfigurebadminton3.html",
    isNew: false
},
{
    id: 1036,
    title: "Strike Force Kitty",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/strikeforcekitty.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/strikeforcekitty.html",
    isNew: false
},
{
    id: 1037,
    title: "Strike Force Kitty 2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/strikeforcekitty2.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/strikeforcekitty2.html",
    isNew: false
},
{
    id: 1038,
    title: "Strike Force Kitty Last Stand",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/strikeforcekittylaststand.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/strikeforcekittylaststand.html",
    isNew: false
},
{
    id: 1039,
    title: "Super Monkey Ball 1/2",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermonkeyball12.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/supermonkeyball12.html",
    isNew: false
},
{
    id: 1040,
    title: "SpongeBob SquarePants: Trail of the Snail",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/trailofthesnail.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/trailofthesnail.html",
    isNew: false
},
    {
    id: 1041,
    title: "Geometry Dash: Subzero",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gdsubzero.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/gdsubzero.html",
    isNew: false
},
{
    id: 1042,
    title: "Hill Climb Racing Lite",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/hillclimbracinglite.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/hillclimbracinglite.html",
    isNew: false
},
{
    id: 1043,
    title: "Huggy Wuggy Pixel Nights",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/huggywuggypixelnights.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/huggywuggypixelnights.html",
    isNew: false
},
{
    id: 1044,
    title: "RocketGoal.io",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/rocketgoalio.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/rocketgoalio.html",
    isNew: false
},
{
    id: 1045,
    title: "Stick With It",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/stickwithit.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/stickwithit.html",
    isNew: false
},
{
    id: 1046,
    title: "Wolfenstein 3D",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wolfenstein.png",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/wolfenstein.html",
    isNew: false
},
{
    id: 1047,
    title: "A Random Clicker By Jalen",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/arandomclicker.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/arandomclicker.html",
    isNew: false
},
{
    id: 1048,
    title: "Sonic Mania Plus",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicmaniaplus.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/sonicmaniaplus.html",
    isNew: true
},
{
    id: 1049,
    title: "FNF: Remnants",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fnfremnants.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/fnfremnants.html",
    isNew: true
},
{
    id: 1050,
    title: "Jelly Mario",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/jellymario.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/jellymario.html",
    isNew: true
},
{
    id: 1051,
    title: "School Boy Runaway",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/schoolboyrunaway.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/schoolboyrunaway.html",
    isNew: true
},
{
    id: 1052,
    title: "Epsteins Education And Learning",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/baldiepstein.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/baldiepstein.html",
    isNew: true
},
{
    id: 1053,
    title: "CaseOhs Education And Learning",
    image: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/baldicaseoh.jpg",
    url: "https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/HTMLFILES@main/2026uploads/baldicaseoh.html",
    isNew: true
},
];

const gamesGrid = document.getElementById('gamesGrid');
const favoritesContainer = document.getElementById('favoritesContainer');
const gameCount = document.getElementById('gameCount');
const searchBar = document.getElementById('searchBar');
const gameFilters = document.getElementById('gameFilters');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');


const gameOverlay = document.getElementById('gameOverlay');
const gameIframe = document.getElementById('gameIframe');
const iframeContainer = document.getElementById('gameIframeContainer');
const overlayGameTitle = document.getElementById('overlayGameTitle');
const closeOverlayBtn = document.getElementById('closeOverlayBtn');
const gameLoading = document.getElementById('gameLoading');
const gameError = document.getElementById('gameError');
const retryBtn = document.getElementById('retryBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const downloadGameBtn = document.getElementById('downloadGameBtn');
const cookieFileInput = document.getElementById('cookieFileInput');
const musicAudio = document.getElementById('musicAudio');
const musicFilePicker = document.getElementById('musicFilePicker');
const musicPlayPauseBtn = document.getElementById('musicPlayPauseBtn');
const musicPrevBtn = document.getElementById('musicPrevBtn');
const musicNextBtn = document.getElementById('musicNextBtn');
const musicLoopBtn = document.getElementById('musicLoopBtn');
const musicUploadBtn = document.getElementById('musicUploadBtn');
const musicProgress = document.getElementById('musicProgress');
const musicCurrentTime = document.getElementById('musicCurrentTime');
const musicDuration = document.getElementById('musicDuration');
const musicPitchSlider = document.getElementById('musicPitchSlider');   // this is the Speed slider now
const musicSpeedValue  = document.getElementById('musicSpeedValue');
const musicVolumeSlider = document.getElementById('musicVolumeSlider');
const musicVolumeValue  = document.getElementById('musicVolumeValue');
const diesmosMusicArtists = document.getElementById('diesmosMusicArtists');
const diesmosMusicTracks = document.getElementById('diesmosMusicTracks');
const diesmosMusicStatus = document.getElementById('diesmosMusicStatus');
const musicTrackLabel = document.getElementById('musicTrackLabel');
const musicArtistLabel = document.getElementById('musicArtistLabel');
const musicAlbumLabel = document.getElementById('musicAlbumLabel');
const musicDetailsLabel = document.getElementById('musicDetailsLabel');
const musicStatus = document.getElementById('musicStatus');



let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentFilter = 'all';
let searchQuery = '';
let currentGame = null;
let currentGameUrl = '';
let currentPage = 1;
const GAMES_PER_PAGE = 100;
let filteredGames = [];
let errorTimeout = null;
let lastError = null;
let iframeLoadTimeout = null;
let previousBlobUrl = null;
let overlayCloseTimeout = null;
let activeTiltCard = null;
let musicAudioContext = null;
let musicAnalyser = null;
let musicSourceNode = null;
let visualizerFrame = null;
let currentMusicUrl = null;
let currentMusicMeta = null;
let currentCoverUrl = null;
let musicPitch = Number(localStorage.getItem('diesmos.music.pitch') || 0);
let isSeeking = false;
let diesmosMusicCatalog = { artists: [] };
let diesmosSelectedArtist = null;
let diesmosMusicQueue = [];
let diesmosMusicQueueIndex = -1;
let currentDiesmosHostedTrack = null;


const FAVORITES_STORAGE_KEY = 'favorites';
const LEGACY_FAVORITES_STORAGE_KEY = 'diesmosFavorites';
const DEFAULT_CD_ART = 'https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/diesmosmusic@main/blankcd.png';

function getFavorites() {
  try {
    const primary = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || 'null');
    if (Array.isArray(primary)) return primary.map(Number).filter(Number.isFinite);
    const legacy = JSON.parse(localStorage.getItem(LEGACY_FAVORITES_STORAGE_KEY) || '[]');
    if (Array.isArray(legacy)) {
      const normalized = legacy.map(Number).filter(Number.isFinite);
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(normalized));
      return normalized;
    }
  } catch (error) {}
  return [];
}

function saveFavorites(nextFavorites) {
  const normalized=[...new Set((Array.isArray(nextFavorites)?nextFavorites:[]).map(Number).filter(Number.isFinite))];
  favorites=normalized;
  try { localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(normalized)); localStorage.removeItem(LEGACY_FAVORITES_STORAGE_KEY); } catch (error) {}
  renderHomeFavoriteRail();
  updateFavoriteCount();
}


document.addEventListener('DOMContentLoaded', () => {
  
  translateAllGameUrls();
  
  
  sortGamesAlphabetically();
  
  buildGameFilters();
  refreshGameViews();
  setupEventListeners();
  updateGreeting();
  createHearts();
  setupPagination();
  setupMusicPlayer();
setupMiniPlayer();
  initDiesmosHostedMusic();
  refreshGameViews();
  renderHomeRails();
  // Shortz init
  try { shortzAutoscrollEnabled = localStorage.getItem(SHORTZ_AUTOSCROLL_KEY) !== '0'; } catch (e) {}
  updateShortzAutoscrollButton();
  initShortzGestures();

  const shortzInput = document.getElementById('shortzInput');
  if (shortzInput) {
    shortzInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') { event.preventDefault(); searchShortz(); }
    });
  }
});

function openSiteInNewTab() {
  
  const newTab = window.open('about:blank', '_blank');
  if (!newTab) {
    alert('Popup blocked  Please allow popups for this site.');
    return;
  }

  
  const fullHtml = `
<!DOCTYPE html>
${document.documentElement.outerHTML}
  `;

  
  newTab.document.open();
  newTab.document.write(fullHtml);
  newTab.document.close();
}


function slugifyCategory(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function addCategory(set, value) {
  if (!value) return;
  const label = String(value).trim();
  if (label) set.add(label);
}

function inferGameCategories(game) {
  const title = String(game.title || '').trim().toLowerCase();
  const rawUrl = String(game.url || '').toLowerCase().replace(/\\/g, '/');
  const categories = new Set();
  const add = (label) => addCategory(categories, label);

  // Explicit collections always win.
  if (title.startsWith('fnf:') || /\/fnf\//.test(rawUrl)) add('FNF');
  if (/spongebob|squidward|sandy|krabby|bikini bottom/.test(title)) add('SpongeBob');

  const rules = [
    ['Racing', [/\bracing\b/, /rally/, /kart/, /drift/, /drag race/, /racer/, /underwheels/, /motocross/, /race car/, /street racer/, /longboard/]],
    ['Driving', [/\bcar\b/, /\bcars\b/, /truck/, /bus/, /taxi/, /parking/, /getaway/, /driving/, /wheel/, /motor/, /bmx/, /bike/, /motorcycle/]],
    ['Sports', [/\bsport/, /hoop/, /boxing/, /soccer/, /football/, /golf/, /basketball/, /baseball/, /bowling/, /tennis/, /skate/, /joust/, /wrestl/, /tug of war/, /flick goal/, /volley/, /hockey/]],
    ['Fighting', [/\bfight\b/, /fighting/, /brawl/, /duel/, /boxing/, /swordfight/, /joust/, /arena/, /combat/, /battle(?!.*royale)/]],
    ['Shooter', [/sniper/, /shoot/, /shooter/, /gun/, /rifle/, /weapon/, /bullet/, /soldier/, /fps\b/, /terrorist rush/, /war regions/]],
    ['Tower Defense', [/tower defense/, /castle defense/, /kingdom defense/, /defense tower/, /defence/]],
    ['Strategy', [/\bstrategy\b/, /army/, /tactics/, /war regions/, /kingdom/, /empire/, /conquest/, /commander/, /defend/, /civilization/, /territory/]],
    ['Puzzle', [/2048/, /1010/, /puzzle/, /match/, /hextris/, /packabunchas/, /jelly well/, /sudoku/, /mahjong/, /bubble/, /push the square/, /tricolor/, /seat jam/, /triple match/, /connect/, /block blast/, /brain/, /logic/, /nonogram/]],
    ['Platformer', [/platform/, /slope\b/, /jump/, /runner/, /run 3/, /wall crawler/, /purple head/, /temple run/, /micro land/, /sonic/, /mario/, /kirby/, /doodle jump/, /geometry dash/]],
    ['Endless Runner', [/\brun\b/, /runner/, /run 3/, /slope/, /high heels/, /makeover run/, /money rush/, /kaji run/, /run rich/]],
    ['Rhythm', [/rhythm/, /music game/, /dance/, /beat/, /karaoke/, /guitar/, /piano/, /drum/]],
    ['Horror', [/bendy/, /yandere/, /bloodmoney/, /doki/, /fnaf/, /five nights/, /scare/, /horror/, /creepy/, /haunt/, /hide the body/, /your turn to die/, /squid gun fest/, /monster/]],
    ['Adventure', [/adventure/, /quest/, /escape/, /journey/, /story/, /explore/, /legend/, /zelda/, /digimon/, /fishing/, /love letters/, /i woke up next to you/, /point and click/]],
    ['Visual Novel', [/class of '09/, /re-up/, /visual novel/, /interactive fiction/, /choose your own/, /dating sim/, /love letters/, /your turn to die/, /doki/]],
    ['RPG', [/\brpg\b/, /final fantasy/, /fire emblem/, /golden sun/, /digimon/, /zelda/, /pokemon/, /adventure quest/, /turn-based/, /dungeon/, /hero/, /role.?playing/]],
    ['Simulation', [/simulator/, /simulation/, /tycoon/, /company/, /workout/, /supermarket/, /office fight/, /life simulator/, /management/, /business/, /farm/, /restaurant/, /city builder/]],
    ['Management', [/tycoon/, /management/, /company/, /business/, /shop/, /store/, /restaurant/, /supermarket/, /empire/, /factory/]],
    ['Idle & Clicker', [/idle/, /clicker/, /incremental/, /money rush/, /labubu clicker/, /cookie/]],
    ['Arcade', [/arcade/, /pinball/, /flappy/, /dash/, /slither/, /interactive buddy/, /tap/, /quick/, /score attack/, /microgame/, /mania/, /geometry jump/, /game & watch/]],
    ['Pinball', [/pinball/]],
    ['Card & Board', [/cards?\b/, /solitaire/, /poker/, /blackjack/, /uno\b/, /chess/, /checkers/, /mahjong/, /backgammon/, /domino/, /board/]],
    ['Word & Typing', [/word/, /typing/, /hangman/, /anagram/, /crossword/, /spelling/, /vocabulary/, /letters/, /language/]],
    ['Music', [/music/, /song/, /dj/, /rhythm/, /dance/, /beat/]],
    ['Survival', [/survival/, /survive/, /zombie/, /last stand/, /apocalypse/, /waves/, /storm the house/, /island survival/]],
    ['Stealth', [/stealth/, /spy/, /assassin/, /yandere/, /sneak/, /infiltrat/]],
    ['Casual', [/merge/, /makeover/, /tasty pastry/, /labubu/, /color/, /tricolor/, /dress/, /fashion/, /bubble tower/, /clothing/, /generic fishing/]],
    ['Multiplayer', [/\.io\b/, /multiplayer/, /2 player/, /two player/, /co-?op/, /versus/, /battle royale/, /online/]],
    ['Maze', [/maze/, /labyrinth/, /escape room/, /pac-man/, /find the/]],
    ['Physics', [/physics/, /ragdoll/, /fling/, /rope/, /gravity/, /draw joust/, /world's hardest game/, /bridge builder/]],
    ['Cooking', [/cook/, /kitchen/, /restaurant/, /sushiria/, /pastry/, /food/, /pizza/, /burger/, /bake/]],
    ['Dress-Up & Fashion', [/dress/, /fashion/, /clothing/, /makeover/, /outfit/, /stylist/, /high heels/]],
    ['Flying', [/plane/, /aircraft/, /pilot/, /jet/, /helicopter/, /flight/, /space/, /spaceship/]],
    ['Sandbox', [/sandbox/, /people playground/, /interactive buddy/, /world builder/, /physics playground/]],
    ['Open World', [/open world/, /dude theft auto/, /slither\.io/, /tanuki sunset/, /city/, /explore the world/]],
    ['Educational', [/^.*\b(education|educational|learning|math|mathematics|science|typing tutor|study|spelling|vocabulary|geography|history|multiplication|fractions|language lesson|classroom)\b.*$/]],
    ['Retro', [/\/gba\//, /game & watch/, /gamewatch/, /advance\b/, /classic/, /retro/, /8-bit/, /16-bit/]],
    ['Cartoons', [/gumball/, /wild kratts/, /bomberman/, /mario/, /sonic/, /kirby/, /digimon/, /fire emblem/, /zelda/, /cartoon network/, /adventure time/, /spongebob/]],
    ['Indie', [/class of '09/, /tanuki sunset/, /slither\.io/, /yandere simulator/, /doki doki/, /bendy and the ink machine/, /people playground/, /undertale/, /deltarune/, /omori/, /celeste/, /pizza tower/, /ultrakill/, /hotline miami/, /fnaf/]]
  ];

  // Deliberately avoid generic words such as "school", "quiz", "battle", or "learning" as standalone evidence.
  // They often describe the setting or a minigame rather than the game's genre.
  for (const [label, patterns] of rules) {
    if (patterns.some(pattern => pattern.test(title) || pattern.test(rawUrl))) add(label);
  }

  // Source-specific genre hints, used only when title signals are weak.
  if (/\/gba\//.test(rawUrl)) add('Retro');
  if (/\/fnf\//.test(rawUrl)) { add('Rhythm'); add('Indie'); }
  if (/\/vendors\/bendy\//.test(rawUrl)) { add('Horror'); add('Adventure'); }
  if (/\/assets\/(archerfish|creature-mobile|monkey-mayhem|amazin-amazon)/.test(rawUrl)) add('Cartoons');

  // Remove incidental Educational tagging unless the title has strong, explicit educational wording.
  if (categories.has('Educational')) {
    const clearlyEducational = /education|educational|learning|math|mathematics|science|typing tutor|study|spelling|vocabulary|geography|history|multiplication|fractions|language lesson|classroom/.test(title);
    if (!clearlyEducational) categories.delete('Educational');
  }

  // Every game gets a useful broad bucket, never "Other".
  if (categories.size === 0) add(/\/gba\//.test(rawUrl) ? 'Retro' : 'Arcade');
  return Array.from(categories);
}
function translateAllGameUrls() {
  games.forEach(game => {
    game.translatedImage = translateImageUrl(game.image);
    game.translatedUrl = translateGameUrl(game.url);
    game.categories = inferGameCategories(game);
    game.categorySlugs = game.categories.map(slugifyCategory);
  });
}

function buildGameFilters(){
  if(!gameFilters)return;
  const categoryMap=new Map();
  games.forEach(game=>(game.categories||[]).forEach(category=>categoryMap.set(category,(categoryMap.get(category)||0)+1)));
  const preferredOrder=['Action','Adventure','Arcade','Platformer','Puzzle','Racing','Driving','Sports','Shooter','Fighting','Strategy','Tower Defense','Simulation','Management','RPG','Visual Novel','Horror','Survival','Stealth','Rhythm','Music','Multiplayer','Sandbox','Open World','Endless Runner','Idle & Clicker','Maze','Physics','Cooking','Dress-Up & Fashion','Flying','Card & Board','Word & Typing','Retro','Classic Web','Cartoons','Indie','Educational','SpongeBob','FNF'];
  const alwaysShow=new Set(['FNF','SpongeBob','Indie','Retro','Educational','Visual Novel','Sandbox','Open World']);
  const categories=Array.from(categoryMap.entries()).filter(([label,count])=>count>=4||alwaysShow.has(label)).sort((a,b)=>{const ai=preferredOrder.indexOf(a[0]),bi=preferredOrder.indexOf(b[0]);return(ai===-1?999:ai)-(bi===-1?999:bi)||a[0].localeCompare(b[0]);});
  gameFilters.innerHTML='';
  categories.forEach(([label,count])=>{const button=document.createElement('button');button.type='button';button.className=`filter-btn game-filter-btn${currentFilter===`category:${slugifyCategory(label)}`?' active':''}`;button.dataset.filter=`category:${slugifyCategory(label)}`;button.textContent=`${label} · ${count}`;gameFilters.appendChild(button);});
  const allButton=document.getElementById('allGamesFilter'),newButton=document.getElementById('newGamesFilter');
  if(allButton)allButton.classList.toggle('active',currentFilter==='all');
  if(newButton)newButton.classList.toggle('active',currentFilter==='new');
}


const RECENT_GAMES_KEY = 'diesmos.recentGames';
const RECENT_GAMES_LIMIT = 12;

function getRecentGameIds() {
  try {
    const value = JSON.parse(localStorage.getItem(RECENT_GAMES_KEY) || '[]');
    return Array.isArray(value) ? value.map(Number).filter(Number.isFinite) : [];
  } catch (error) {
    return [];
  }
}

function saveRecentGame(gameId) {
  const ids = getRecentGameIds().filter(id => id !== Number(gameId));
  ids.unshift(Number(gameId));
  try {
    localStorage.setItem(RECENT_GAMES_KEY, JSON.stringify(ids.slice(0, RECENT_GAMES_LIMIT)));
  } catch (error) {}
}

function getGameById(gameId) {
  return games.find(game => Number(game.id) === Number(gameId));
}

function createHomeGameCard(game, metaText = '') {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'game-rail-card';
  button.dataset.gameId = String(game.id);
  button.setAttribute('aria-label', `Play ${game.title}`);

  const img = document.createElement('img');
  img.className = 'game-image game-rail-image';
  img.src = game.translatedImage || game.image || '';
  img.alt = '';
  img.loading = 'lazy';
  img.decoding = 'async';
  img.onerror = () => {
    img.onerror = null;
    img.src = 'https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/whatver@main/wip.jpg';
  };

  const info = document.createElement('span');
  info.className = 'game-rail-info';
  const title = document.createElement('span');
  title.className = 'game-rail-title';
  title.textContent = game.title;
  const meta = document.createElement('span');
  meta.className = 'game-rail-meta';
  meta.textContent = metaText || (game.categories || []).slice(0, 2).join(' · ') || 'Game';
  info.append(title, meta);

  if (game.isNew) {
    const badge = document.createElement('span');
    badge.className = 'game-rail-new';
    badge.textContent = 'NEW';
    button.appendChild(badge);
  }
  button.append(img, info);
  button.addEventListener('click', () => openGame(Number(game.id)));
  return button;
}

function renderHomeFavoriteRail() {
  const rail = document.getElementById('homeFavoritesRail');
  const empty = document.getElementById('homeFavoritesEmpty');
  const count = document.getElementById('favoriteRailCount');
  if (!rail) return;
  const favGames = getFavorites().map(getGameById).filter(Boolean);
  rail.innerHTML = '';
  favGames.forEach(game => rail.appendChild(createHomeGameCard(game, 'Favorite')));
  if (empty) empty.hidden = favGames.length > 0;
  if (count) count.textContent = `${favGames.length} saved`;
}

function renderHomeRails() {
  const recentRail = document.getElementById('recentGamesRail');
  const recentEmpty = document.getElementById('recentGamesEmpty');
  const randomRail = document.getElementById('randomGamesRail');
  const homeGameCount = document.getElementById('homeGameCount');
  if (!recentRail || !randomRail) return;
  recentRail.innerHTML = '';
  getRecentGameIds().map(getGameById).filter(Boolean).forEach(game => recentRail.appendChild(createHomeGameCard(game, 'Recently played')));
  const recentCount = getRecentGameIds().length;
  if (recentEmpty) recentEmpty.hidden = recentCount > 0;
  if (homeGameCount) homeGameCount.textContent = String(games.length);
  renderHomeFavoriteRail();
  refreshHomeRecommendations();
}

function refreshHomeRecommendations() {
  const rail = document.getElementById('randomGamesRail');
  if (!rail || !games.length) return;
  const recent = new Set(getRecentGameIds());
  const favoritesSet = new Set(getFavorites());
  const pool = games.filter(game => !recent.has(Number(game.id)) && !favoritesSet.has(Number(game.id)));
  const source = pool.length >= 10 ? pool : games;
  const shuffled = source.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  rail.innerHTML = '';
  shuffled.slice(0, 14).forEach(game => rail.appendChild(createHomeGameCard(game, 'Random pick')));
}

function sortGamesAlphabetically() {
  games.sort((a, b) => a.title.localeCompare(b.title));
}

function gameMatchesFilter(game) {
  if (currentFilter === 'all') return true;
  if (currentFilter === 'new') return Boolean(game.isNew);

  if (currentFilter.startsWith('category:')) {
    const categorySlug = currentFilter.slice('category:'.length);
    return (game.categorySlugs || []).includes(categorySlug);
  }

  return true;
}

function filterAndSortGames() {
  const query = searchQuery.trim().toLowerCase();

  filteredGames = games.filter(game => {
    const matchesFilter = gameMatchesFilter(game);
    const haystack = [
      game.title,
      ...(game.categories || [])
    ].join(' ').toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    return matchesFilter && matchesSearch;
  });

  currentPage = 1;
}

function refreshGameViews(options = {}) {
  const { preservePage = false } = options;
  const previousPage = currentPage;

  favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  buildGameFilters();
  filterAndSortGames();

  if (preservePage) {
    currentPage = Math.min(previousPage, Math.max(getTotalPages(), 1));
  }

  renderGames();
  updateGameCount();
  renderFavorites();
}


function getGamesForCurrentPage() {
  const startIndex = (currentPage - 1) * GAMES_PER_PAGE;
  const endIndex = startIndex + GAMES_PER_PAGE;
  return filteredGames.slice(startIndex, endIndex);
}


function getTotalPages() {
  return Math.ceil(filteredGames.length / GAMES_PER_PAGE);
}

function createPaginationControls(extraClass = '') {
  const paginationContainer = document.createElement('div');
  paginationContainer.className = `pagination ${extraClass}`.trim();

  const prevBtn = document.createElement('button');
  prevBtn.className = 'filter-btn';
  prevBtn.innerHTML = '&larr; Previous';
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderGames();
      updatePagination();
    }
  });

  const nextBtn = document.createElement('button');
  nextBtn.className = 'filter-btn';
  nextBtn.innerHTML = 'Next &rarr;';
  nextBtn.addEventListener('click', () => {
    if (currentPage < getTotalPages()) {
      currentPage++;
      renderGames();
      updatePagination();
    }
  });

  const pageInfo = document.createElement('span');
  pageInfo.className = 'page-info';

  paginationContainer.appendChild(prevBtn);
  paginationContainer.appendChild(pageInfo);
  paginationContainer.appendChild(nextBtn);

  return { container: paginationContainer, prevBtn, nextBtn, pageInfo };
}


function setupPagination() {
  const topHost = document.getElementById('topPagination');
  const topControls = createPaginationControls('pagination-top');
  const bottomControls = createPaginationControls();

  if (topHost) {
    topHost.innerHTML = '';
    topHost.appendChild(topControls.container);
  }

  gamesGrid.parentNode.appendChild(bottomControls.container);
  /*
  const prevBtn = document.createElement('button');
  prevBtn.className = 'filter-btn';
  prevBtn.innerHTML = '← Previous';
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderGames();
      updatePagination();
    }
  });
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'filter-btn';
  nextBtn.innerHTML = 'Next →';
  nextBtn.addEventListener('click', () => {
    if (currentPage < getTotalPages()) {
      currentPage++;
      renderGames();
      updatePagination();
    }
  });
  
  const pageInfo = document.createElement('span');
  pageInfo.className = 'page-info';
  pageInfo.style.cssText = `
    color: var(--valentine-pink);
    font-weight: 500;
    min-width: 150px;
    text-align: center;
  `;
  
  paginationContainer.appendChild(prevBtn);
  paginationContainer.appendChild(pageInfo);
  paginationContainer.appendChild(nextBtn);
  */

  window.paginationElements = {
    groups: [topControls, bottomControls]
  };
  
  updatePagination();
}


function updatePagination() {
  if (!window.paginationElements) return;
  const totalPages = getTotalPages();

  window.paginationElements.groups.forEach(({ prevBtn, nextBtn, pageInfo, container }) => {
    pageInfo.textContent = `Page ${currentPage} of ${totalPages || 1}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
    nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
    container.style.display = 'flex';
  });
}


function renderGames() {
  if (!gamesGrid) return;
  gamesGrid.innerHTML = '';

  const pageGames = getGamesForCurrentPage();

  if (pageGames.length === 0) {
    gamesGrid.innerHTML = `
      <div class="empty-games" role="status">
        <strong>No games found</strong>
        <span>Try another search or category.</span>
      </div>
    `;
    updatePagination();
    return;
  }

  const fragment = document.createDocumentFragment();

  pageGames.forEach(game => {
    const gameCard = document.createElement('article');
    gameCard.className = `game-card${game.isNew ? ' new' : ''}`;
    gameCard.dataset.gameId = game.id;

    const categories = (game.categories || []).slice(0, 3)
      .map(category => `<span class="game-tag">${category}</span>`)
      .join('');

    gameCard.innerHTML = `
      <div class="game-card-visual">
        <div class="game-image-wrap">
          ${game.isNew ? '<span class="new-badge">NEW</span>' : ''}
          <img src="${game.translatedImage || game.image}"
               alt="${game.title.replace(/"/g, '&quot;')}"
               class="game-image"
               loading="lazy"
               decoding="async"
               onerror="this.onerror=null;this.src='https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/whatver@main/wip.jpg';">
        </div>
        <div class="game-info">
          <div class="game-title" data-game-id="${game.id}" title="${game.title.replace(/"/g, '&quot;')}">${game.title}</div>
          <div class="game-actions">
            <button type="button" class="favorite-btn ${favorites.includes(game.id) ? 'favorited' : ''}" data-id="${game.id}" aria-label="${favorites.includes(game.id) ? 'Remove from favorites' : 'Add to favorites'}">
              ${favorites.includes(game.id) ? '♥' : '♡'}
            </button>
          </div>
        </div>
        ${categories ? `<div class="game-tags">${categories}</div>` : ''}
      </div>
    `;
    fragment.appendChild(gameCard);
  });

  gamesGrid.appendChild(fragment);
  updatePagination();
}

function updateGameCount() {
  const totalFilteredGames = filteredGames.length;
  const totalGames = games.length;
  const newGames = games.filter(game => game.isNew).length;

  let countText = `Showing ${totalFilteredGames} of ${totalGames} games`;

  if (currentFilter === 'new') {
    countText = `New games: ${newGames}`;
  } else if (currentFilter.startsWith('category:')) {
    const label = games
      .flatMap(game => game.categories || [])
      .find(category => slugifyCategory(category) === currentFilter.slice('category:'.length));
    if (label) countText = `${label}: ${totalFilteredGames}`;
  }

  if (searchQuery.trim()) countText += ` · Search: "${searchQuery.trim()}"`;

  if (totalFilteredGames > GAMES_PER_PAGE) {
    countText += ` · Page ${currentPage} of ${getTotalPages()}`;
  }

  if (gameCount) gameCount.textContent = countText;
}

function setupEventListeners() {
  const allGamesFilter = document.getElementById('allGamesFilter');
  const newGamesFilter = document.getElementById('newGamesFilter');

  [
    [allGamesFilter, 'all'],
    [newGamesFilter, 'new']
  ].forEach(([button, filter]) => {
    if (!button) return;
    button.addEventListener('click', () => {
      currentFilter = filter;
      refreshGameViews();
    });
  });

  const categoryToggleBtn=document.getElementById('categoryToggleBtn');
  const categoryShelf=document.getElementById('categoryShelf');
  const categoryCloseBtn=document.getElementById('categoryCloseBtn');
  const setCategoryShelfOpen=(open)=>{if(!categoryShelf||!categoryToggleBtn)return;categoryShelf.hidden=!open;categoryToggleBtn.setAttribute('aria-expanded',open?'true':'false');const mark=categoryToggleBtn.querySelector('span');if(mark)mark.textContent=open?'−':'＋';};
  if(categoryToggleBtn)categoryToggleBtn.addEventListener('click',()=>setCategoryShelfOpen(Boolean(categoryShelf&&categoryShelf.hidden)));
  if(categoryCloseBtn)categoryCloseBtn.addEventListener('click',()=>setCategoryShelfOpen(false));
  if(gameFilters){
    gameFilters.addEventListener('click',(event)=>{
      const button=event.target.closest('.game-filter-btn');if(!button)return;
      gameFilters.querySelectorAll('.game-filter-btn').forEach(btn=>btn.classList.remove('active'));button.classList.add('active');
      currentFilter=button.dataset.filter||'all';setCategoryShelfOpen(false);refreshGameViews();
    });
  }

  
  if (searchBar) searchBar.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    refreshGameViews();
  });

  
  if (mobileMenuBtn && navLinks) mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.favorite-btn');
    if (btn) {
      toggleFavorite(parseInt(btn.dataset.id));
      return;
    }

    const card = e.target.closest('.game-card');
    if (card) {
      const gameId = card.getAttribute('data-game-id');
      if (gameId) openGame(parseInt(gameId));
    }
  });

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('pointerenter', (e) => {
      const card = e.target.closest('.game-card');
      if (card) activeTiltCard = card;
    }, true);

    document.addEventListener('pointerleave', (e) => {
      const card = e.target.closest('.game-card');
      if (!card) return;
      resetCardTilt(card);
      if (activeTiltCard === card) activeTiltCard = null;
    }, true);
  }

  if (closeOverlayBtn) closeOverlayBtn.addEventListener('click', closeGameOverlay);
  if (retryBtn) retryBtn.addEventListener('click', retryGameLoad);
  if (downloadGameBtn) downloadGameBtn.addEventListener('click', downloadGame);

  
  if (fullscreenBtn && iframeContainer) {
    fullscreenBtn.addEventListener('click', () => {
      toggleFullscreen(iframeContainer);
    });
  }

  
  document.addEventListener('keydown', (e) => {
    const shortzPage = document.getElementById('shortz');
    if (e.key === 'Escape' && gameOverlay) {
      if (gameOverlay.classList.contains('active')) {
        closeGameOverlay();
        e.preventDefault();
        return;
      }
    }
    if (shortzPage && shortzPage.classList.contains('active')) {
      if (e.key === 'ArrowDown') { e.preventDefault(); nextShort(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); prevShort(); }
    }
  });

 
  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.addEventListener('mozfullscreenchange', handleFullscreenChange);
  document.addEventListener('MSFullscreenChange', handleFullscreenChange);

  
  if (gameIframe) {
    gameIframe.addEventListener('load', handleIframeLoad);
    gameIframe.addEventListener('error', handleIframeError);
  }

  if (cookieFileInput) {
    cookieFileInput.addEventListener('change', handleCookieUpload);
  }

  window.addEventListener('storage', (event) => {
    if (event.key === FAVORITES_STORAGE_KEY || event.key === LEGACY_FAVORITES_STORAGE_KEY) {
      favorites = getFavorites();
      refreshGameViews({ preservePage: true });
      renderHomeRails();
    }
  });

  window.addEventListener('focus', () => {
    refreshGameViews({ preservePage: true });
  });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      refreshGameViews({ preservePage: true });
    }
  });

  return;
}
/*

     
      if (gameUrl.includes('/gba/player.html')) {
        const urlObj = new URL(gameUrl, window.location.origin);
        const gameParam = urlObj.searchParams.get('game');
        
        if (gameParam) {
          console.log(`Injecting game parameter for GBA: ${gameParam}`);
          
          const injectScript = `
            <script>
              (function() {
                window.getGameFromURL = function() {
                  return "${gameParam}";
                };
                
                const url = new URL(window.location);
                url.searchParams.set('game', "${gameParam}");
                window.history.replaceState({}, '', url);
                logToClicky(game.title);
                window.location.href = translateGameUrl(game.url);
                
                sessionStorage.setItem('gba_current_game', "${gameParam}");
                
                console.log('[GBA INJECTOR] Game parameter injected:', "${gameParam}");
              })();
            </script>
          `;
          
          const headIndex = htmlContent.indexOf('<head>');
          if (headIndex !== -1) {
            const insertPos = headIndex + 6;
            htmlContent = htmlContent.slice(0, insertPos) + injectScript + htmlContent.slice(insertPos);
          } else {
            htmlContent = injectScript + htmlContent;
          }
          
          const onloadIndex = htmlContent.indexOf('window.onload = function()');
          if (onloadIndex !== -1) {
            const onloadEnd = htmlContent.indexOf('}', onloadIndex);
            const newOnload = `
              window.onload = function() {
                registerDefaultSettings();
                registerIodineHandler();
                calculateTiming();
                registerBlitterHandler();
                registerAudioHandler();
                registerSaveHandlers();
                registerGUIEvents();
                registerGUISettings();
                
                var gameID = "${gameParam}";
                var gameName = games[gameID];
                
                if (gameID && gameName) {
                  console.log(\`[FORCE LOAD] Game: \${gameName} [\${gameID}]\`);
                  document.title = \`\${gameName} on GBA Online\`;
                  
                  var t = document.createElement("p");
                  t.innerHTML = "Loaded \\"" + gameName + "\\"";
                  t.id = "loadedGameMsg";
                  document.body.appendChild(t);
                  
                  setTimeout(function () {
                    $("#loadedGameMsg").fadeOut();
                    setTimeout(function () {
                      $("#loadedGameMsg").remove();
                    }, 3000);
                  }, 3000);
                  
                  downloadBIOS();
                } else {
                  console.log("Game not found:", "${gameParam}");
                  document.title = defaultTitle;
                }
              };
            `;
            htmlContent = htmlContent.slice(0, onloadIndex) + newOnload + htmlContent.slice(onloadEnd + 1);
          }
        }
      }

      
      if (htmlContent.includes('Package size exceeded the configured limit') ||
          htmlContent.includes('Try https://github.com/') ||
          htmlContent.includes('50 MB file size limit')) {
        hideLoading();
        gameIframe.src = 'about:blank';
        showError(
          'We hit our limit sorry. ',
          'The game HTML file does not exist or exceeds GitHub\'s 50 MB file limit.'
        );
        lastError = 'github_50mb_limit';
        return false;
      }

      
      if (!htmlContent.includes('<html') &&
          !htmlContent.includes('<!DOCTYPE') &&
          htmlContent.length < 100) {
        hideLoading();
        gameIframe.src = 'about:blank';
        showError(
          'Um we cant find that. ',
          'The server returned content that doesn\'t look like valid HTML.'
        );
        lastError = 'invalid_html';
        return false;
      }

      
      if (htmlContent.includes('requestPointerLock') || htmlContent.includes('pointerlock')) {
        const pointerLockHelper = `
          <script>
            
            (function() {
              
              document.addEventListener('click', function() {
                
                console.log('Pointer lock helper active');
              });
              
              
              const originalRequest = Element.prototype.requestPointerLock;
              Element.prototype.requestPointerLock = function() {
                console.log('Pointer lock requested');
                try {
                  originalRequest.call(this);
                } catch (e) {
                  console.error('Pointer lock failed:', e);
                }
              };
              
              
              document.addEventListener('pointerlockchange', function() {
                console.log('Pointer lock state changed:', !!document.pointerLockElement);
              });
              
              document.addEventListener('pointerlockerror', function(e) {
                console.error('Pointer lock error:', e);
              });
            })();
          </script>
        `;
        
        
        const headEnd = htmlContent.indexOf('</head>');
        if (headEnd !== -1) {
          htmlContent = htmlContent.slice(0, headEnd) + pointerLockHelper + htmlContent.slice(headEnd);
        } else {
          const bodyStart = htmlContent.indexOf('<body');
          if (bodyStart !== -1) {
            const bodyEnd = htmlContent.indexOf('>', bodyStart) + 1;
            htmlContent = htmlContent.slice(0, bodyEnd) + pointerLockHelper + htmlContent.slice(bodyEnd);
          } else {
            htmlContent = pointerLockHelper + htmlContent;
          }
        }
      }

      
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const blobUrl = URL.createObjectURL(blob);
      
      
      gameIframe.setAttribute('allow', 'pointer-lock; fullscreen; autoplay');
      gameIframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock allow-downloads allow-modals');
      
      
      gameIframe.src = blobUrl;
      
     
      if (window.previousBlobUrl) {
        URL.revokeObjectURL(window.previousBlobUrl);
      }
      window.previousBlobUrl = blobUrl;
      
      
      lastError = null;
      return true;

    } catch (fetchError) {
      clearTimeout(timeoutId);
      hideLoading();
      gameIframe.src = 'about:blank';
      showError(
        'Our fetch got rejected. ',
        `Fetch failed or was blocked. Reason: ${fetchError.message}`
      );
      lastError = 'fetch_error';
      return false;
    }

  } catch (fatalError) {
    hideLoading();
    gameIframe.src = 'about:blank';
    showError(
      'Oh no this is not right. ',
      `A fatal error occurred while preparing the game. Details: ${fatalError.message}`
    );
    lastError = 'fatal_error';
    return false;
  }
}

*/
async function loadGameInIframe(gameUrl, gameTitle = 'this game') {
  if (!gameIframe) return false;

  try {
    currentGameUrl = gameUrl;
    currentGame = currentGame || null;
    hideError();
    showLoading();
    clearIframeLoadTimeout();
    gameIframe.src = 'about:blank';
    gameIframe.removeAttribute('srcdoc');
    iframeLoadTimeout = window.setTimeout(() => {
      hideLoading();
      showError(
        `Still trying to open ${gameTitle}.`,
        'The game took too long to load in the iframe. It may block embedding or just be slow.'
      );
      lastError = 'iframe_timeout';
    }, 12000);

    const response = await fetch(gameUrl);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    if (!html.trim()) {
      throw new Error('The game response was empty.');
    }

    const blob = new Blob([html], { type: 'text/html' });
    const blobUrl = URL.createObjectURL(blob);

    if (previousBlobUrl) {
      URL.revokeObjectURL(previousBlobUrl);
    }

    previousBlobUrl = blobUrl;
    gameIframe.src = blobUrl;
    lastError = null;
    return true;
  } catch (error) {
    clearIframeLoadTimeout();
    hideLoading();
    gameIframe.src = 'about:blank';
    showError(`Could not open ${gameTitle}.`, error.message);
    lastError = 'fatal_error';
    return false;
  }
}

function handleIframeLoad() {
  clearIframeLoadTimeout();
  hideLoading();
  hideError();
}

function handleIframeError() {
  clearIframeLoadTimeout();
  hideLoading();
  showError('The game did not load.', currentGameUrl || 'Unknown game URL');
  lastError = 'iframe_error';
}

function clearIframeLoadTimeout() {
  if (iframeLoadTimeout) {
    clearTimeout(iframeLoadTimeout);
    iframeLoadTimeout = null;
  }
}

function toggleFullscreen(element) {
  if (!element) return;

  const isFullscreen = document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement;

  if (!isFullscreen) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    return;
  }

  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function handleFullscreenChange() {
  if (!fullscreenBtn) return;

  const isFullscreen = document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement;

  fullscreenBtn.textContent = isFullscreen ? 'Exit Fullscreen' : 'Fullscreen';
}

function resetCardTilt(card) {
  if (!card) return;

  const visual = card.querySelector('.game-card-visual');
  const image = card.querySelector('.game-image');
  if (visual) {
    visual.style.setProperty('--card-rotate-x', '0deg');
    visual.style.setProperty('--card-rotate-y', '0deg');
  }

  if (image) {
    image.style.setProperty('--image-rotate-x', '0deg');
    image.style.setProperty('--image-rotate-y', '0deg');
  }
}

function showPage(page) {
  const shortzPage = document.getElementById('shortz');
  if (shortzPage && shortzPage.classList.contains('active') && page !== 'shortz') {
    unloadShortz();
    fadeMusicForShortzExit();
  }
  document.querySelectorAll('.page').forEach((pageEl) => pageEl.classList.remove('active'));
  document.querySelectorAll('[data-page-link]').forEach((link) => link.classList.toggle('active', link.dataset.pageLink === page));
  const target = document.getElementById(page);
  if (target) target.classList.add('active');
  if (page === 'shortz' && !shortzHasLoaded) loadShortEmbed();
}
function showLoading() {
  if (!gameLoading) return;
  gameLoading.classList.add('active');
  gameLoading.innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 2rem; margin-bottom: 1rem;"></div>
      <div>Getting your game ready...</div>
      <small>This might take a moment! ⏳</small>
      <div style="margin-top: 1rem; font-size: 0.8rem; color: #ff66b2;">
        If it takes too long, try the Retry button!
      </div>
    </div>
  `;
}

function hideLoading() {
  if (!gameLoading) return;
  gameLoading.classList.remove('active');
}


function showError(userMessage, technicalReason = 'Unknown error') {
  if (!gameError) return;
  gameError.innerHTML = `
    <div style="text-align:center;">
      <div style="font-size:2rem;margin-bottom:0.5rem;"></div>

      <div style="margin-bottom:0.75rem;">
        ${userMessage}
      </div>

      <details style="
        margin-top:0.5rem;
        text-align:left;
        background:rgba(0,0,0,0.4);
        padding:0.75rem;
        border-radius:6px;
        font-size:0.85rem;
      ">
        <summary style="cursor:pointer;color:#ff9ad5;">
          Advanced details
        </summary>

        <div style="margin-top:0.5rem;line-height:1.4;">
          <strong>Possible reason:</strong><br>
          ${technicalReason}<br><br>

          <strong>Game URL:</strong><br>
          <code style="word-break:break-all;">
            ${currentGameUrl || 'Unknown'}
          </code><br><br>

          <strong>Load method:</strong><br>
          Blob / iframe hybrid loader
        </div>
      </details>
    </div>
  `;

  gameError.classList.add('active');
}


function hideError() {
  if (!gameError) return;
  gameError.classList.remove('active');
  if (errorTimeout) {
    clearTimeout(errorTimeout);
    errorTimeout = null;
  }
}


function retryGameLoad() {
  if (currentGame && currentGameUrl) {
    hideError();
    loadGameInIframe(currentGameUrl, currentGame.title || 'this game');
  }
}


function openGame(gameId) {
  const game = games.find(g => g.id === gameId);
  if (!game) return;
  logToClicky(game.title);
  
  if (overlayCloseTimeout) {
    clearTimeout(overlayCloseTimeout);
    overlayCloseTimeout = null;
  }

  currentGame = game;
  saveRecentGame(game.id);
  renderHomeRails();
  overlayGameTitle.textContent = `Playing: ${game.title} `;
  
  
  gameOverlay.classList.remove('closing');
  gameOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  
  const gameUrl = game.translatedUrl || game.url;
  
  loadGameInIframe(gameUrl, game.title);
}


function closeGameOverlay() {
  if (!gameOverlay || !gameOverlay.classList.contains('active')) return;

  gameOverlay.classList.add('closing');
  gameOverlay.classList.remove('active');

  clearIframeLoadTimeout();

  if (overlayCloseTimeout) {
    clearTimeout(overlayCloseTimeout);
  }

  overlayCloseTimeout = window.setTimeout(() => {
    hideLoading();
    hideError();
    gameIframe.src = 'about:blank';

    if (previousBlobUrl) {
      URL.revokeObjectURL(previousBlobUrl);
      previousBlobUrl = null;
    }

    currentGame = null;
    currentGameUrl = '';
    lastError = null;
    document.body.style.overflow = '';
    gameOverlay.classList.remove('closing');
    overlayCloseTimeout = null;
  }, 220);

  if (document.fullscreenElement || 
      document.webkitFullscreenElement || 
      document.mozFullScreenElement || 
      document.msFullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}


function downloadGame() {
  if (!currentGame) {
    alert('No game loaded to download! ');
    return;
  }
  
  try {
    
    const gameUrl = currentGame.translatedUrl || currentGame.url;
    
    
    fetch(gameUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.text();
      })
      .then(gameHtml => {
        
        if (!gameHtml.includes('<html') && !gameHtml.includes('<!DOCTYPE')) {
          throw new Error('Not valid HTML');
        }
        
        
        let modifiedHtml = gameHtml;
        
       
        const bodyStart = modifiedHtml.indexOf('<body');
        if (bodyStart !== -1) {
          const bodyEnd = modifiedHtml.indexOf('>', bodyStart) + 1;
          const watermark = `
            <div style="
              position: fixed;
              top: 10px;
              left: 10px;
              background: rgba(0,0,0,0.7);
              color: white;
              padding: 8px 12px;
              border-radius: 5px;
              font-family: Arial, sans-serif;
              font-size: 12px;
              z-index: 9999;
              border: 1px solid rgba(255,102,178,0.5);
            ">
              ${currentGame.title} - Downloaded from Diesmos 
            </div>
          `;
          modifiedHtml = modifiedHtml.slice(0, bodyEnd) + watermark + modifiedHtml.slice(bodyEnd);
        } else {
         
          modifiedHtml += `
            <div style="
              position: fixed;
              top: 10px;
              left: 10px;
              background: rgba(0,0,0,0.7);
              color: white;
              padding: 8px 12px;
              border-radius: 5px;
              font-family: Arial, sans-serif;
              font-size: 12px;
              z-index: 9999;
              border: 1px solid rgba(255,102,178,0.5);
            ">
              ${currentGame.title} - Downloaded from Diesmos 
            </div>
          `;
        }
        
        
        const blob = new Blob([modifiedHtml], { type: 'text/html' });
        
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        
        const cleanTitle = currentGame.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const filename = `diesmos_${cleanTitle}.html`;
        
        a.href = url;
        a.download = filename;
        
        
        document.body.appendChild(a);
        a.click();
        
        
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 100);
        
      })
      .catch(error => {
        
        const fallbackHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>${currentGame.title}</title>
              <style>
                html, body {
                  margin: 0;
                  padding: 0;
                  width: 100%;
                  height: 100%;
                  overflow: hidden;
                  background: #000;
                }
                iframe {
                  width: 100%;
                  height: 100%;
                  border: none;
                }
                .game-info {
                  position: fixed;
                  top: 10px;
                  left: 10px;
                  background: rgba(0,0,0,0.7);
                  color: white;
                  padding: 10px;
                  border-radius: 5px;
                  font-family: Arial, sans-serif;
                  font-size: 12px;
                  z-index: 1000;
                  border: 1px solid rgba(255,102,178,0.5);
                }
              </style>
            </head>
            <body>
              <div class="game-info">
                ${currentGame.title} - Downloaded from Diesmos 
              </div>
              <iframe src="${gameUrl}" allowfullscreen></iframe>
            </body>
          </html>
        `;
        
        const blob = new Blob([fallbackHtml], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        const cleanTitle = currentGame.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const filename = `diesmos_${cleanTitle}.html`;
        
        a.href = url;
        a.download = filename;
        
        document.body.appendChild(a);
        a.click();
        
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 100);
      });
    
  } catch (error) {
    alert('Oops! Could not download the game \nTry loading it first, then download!');
  }
}


function toggleFavorite(gameId){
  const id=Number(gameId);const next=getFavorites();const index=next.indexOf(id);const game=games.find(g=>Number(g.id)===id);
  if(index===-1){next.push(id);if(game)logToClicky(`${game.title} favorite_add`);}else{next.splice(index,1);if(game)logToClicky(`${game.title} favorite_remove`);}
  saveFavorites(next);refreshGameViews({preservePage:true});renderHomeRails();
}


function renderFavorites() {
  renderHomeFavoriteRail();
  updateFavoriteCount();
}

function openSuggestions() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSfqTJRoaUQJ3YgpZALPIE85umsW12IBXtv6BaI9Y0fdB_XqzQ/viewform?fbzx=492301836448601508&pli=1",
    "_blank"
  );
}

function setupMusicPlayer() {
  if (!musicAudio) return;

  // Hosted audio is consumed by Web Audio for the visualizer, so request CORS
  // before any source is assigned. This prevents cross-origin tracks from
  // becoming silent when connected to MediaElementSource.
  musicAudio.crossOrigin = 'anonymous';
  musicAudio.loop = false;

  
  // If a cover URL 404s or fails to decode, fall back to blankcd.png instead
  // of showing a broken image. Guard with a flag so we don't loop on failure.
  document.querySelectorAll('.album-art').forEach((image) => {
    image.addEventListener('error', () => {
      if (image.dataset.fallbackApplied === 'true') return;
      image.dataset.fallbackApplied = 'true';
      image.src = DEFAULT_CD_ART;
    });
  });

  if (musicUploadBtn) musicUploadBtn.addEventListener('click', () => {
    if (musicFilePicker) { musicFilePicker.value = ''; musicFilePicker.click(); }
  });
  if (musicFilePicker) musicFilePicker.addEventListener('change', handleMusicFileSelect);

  if (musicPlayPauseBtn) musicPlayPauseBtn.addEventListener('click', async () => {
    if (!musicAudio.src) {
      musicFilePicker?.click();
      return;
    }
    if (musicAudio.paused) {
      try { await startMusicPlayback(); }
      catch (error) { musicStatus && (musicStatus.textContent = 'Could not start playback.'); }
    } else {
      musicAudio.pause();
    }
  });

  if (musicLoopBtn) musicLoopBtn.addEventListener('click', () => {
    musicAudio.loop = !musicAudio.loop;
    updateMusicUi();
  });

  const syncEffects = () => {
    const pitch = Number(musicPitchSlider?.value ?? musicPitch ?? 0);
    musicPitch = Math.max(-12, Math.min(12, pitch));
    localStorage.setItem('diesmos.music.pitch', String(musicPitch));
    const effectiveSpeed = Math.pow(2, musicPitch / 12);
    if (musicSpeedValue) musicSpeedValue.textContent = `${effectiveSpeed.toFixed(2)}×`;
    musicAudio.playbackRate = effectiveSpeed;
    if ('preservesPitch' in musicAudio) musicAudio.preservesPitch = false;
    else if ('mozPreservesPitch' in musicAudio) musicAudio.mozPreservesPitch = false;
    else if ('webkitPreservesPitch' in musicAudio) musicAudio.webkitPreservesPitch = false;
  };

  const syncVolume = () => {
    const v = Number(musicVolumeSlider?.value ?? 100);
    const normalized = Math.max(0, Math.min(100, v)) / 100;
    musicAudio.volume = normalized;
    if (musicVolumeValue) musicVolumeValue.textContent = `${Math.round(normalized * 100)}%`;
  };

  if (musicPitchSlider) {
    musicPitchSlider.value = String(musicPitch);
    musicPitchSlider.addEventListener('input', syncEffects);
  }
  if (musicVolumeSlider) {
    musicVolumeSlider.addEventListener('input', syncVolume);
  }
  syncEffects();
  syncVolume();

  // ---- Progress / seek bar ----
  const updateProgressUi = () => {
    if (!musicProgress) return;
    const duration = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;
    const current = Number.isFinite(musicAudio.currentTime) ? musicAudio.currentTime : 0;
    if (!isSeeking) {
      musicProgress.value = duration > 0 ? String(Math.round((current / duration) * 1000)) : '0';
    }
    if (musicCurrentTime) musicCurrentTime.textContent = formatClock(current);
    if (musicDuration) musicDuration.textContent = formatClock(duration);
  };

  if (musicProgress) {
    musicProgress.addEventListener('input', () => {
      isSeeking = true;
      const duration = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;
      const ratio = Number(musicProgress.value) / 1000;
      if (musicCurrentTime) musicCurrentTime.textContent = formatClock(ratio * duration);
    });
    const commitSeek = () => {
      const duration = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;
      if (duration > 0) {
        const ratio = Number(musicProgress.value) / 1000;
        musicAudio.currentTime = ratio * duration;
      }
      isSeeking = false;
      updateProgressUi();
    };
    musicProgress.addEventListener('change', commitSeek);
    musicProgress.addEventListener('pointerup', commitSeek);
    musicProgress.addEventListener('keyup', commitSeek);
  }
  musicAudio.addEventListener('timeupdate', updateProgressUi);
  musicAudio.addEventListener('loadedmetadata', updateProgressUi);
  musicAudio.addEventListener('durationchange', updateProgressUi);
  musicAudio.addEventListener('seeked', updateProgressUi);
  musicAudio.addEventListener('ended', updateProgressUi);
  updateProgressUi();

  // ---- Skip buttons ----
  const playPreviousTrack = () => {
    // Restart current track if we're more than 3s in (standard media behaviour).
    if (Number.isFinite(musicAudio.currentTime) && musicAudio.currentTime > 3) {
      musicAudio.currentTime = 0;
      return;
    }
    if (diesmosMusicQueue.length && diesmosMusicQueueIndex > 0) {
      diesmosMusicQueueIndex -= 1;
      playDiesmosHostedTrack(diesmosMusicQueue[diesmosMusicQueueIndex], true);
    } else {
      musicAudio.currentTime = 0;
    }
  };
  const playNextTrack = () => {
    if (diesmosMusicQueue.length && diesmosMusicQueueIndex >= 0 && diesmosMusicQueueIndex < diesmosMusicQueue.length - 1) {
      diesmosMusicQueueIndex += 1;
      playDiesmosHostedTrack(diesmosMusicQueue[diesmosMusicQueueIndex], true);
    }
  };
  if (musicPrevBtn) musicPrevBtn.addEventListener('click', playPreviousTrack);
  if (musicNextBtn) musicNextBtn.addEventListener('click', playNextTrack);

  musicAudio.addEventListener('play', async () => {
    await ensureVisualizerGraph();
    updateMusicUi();
    startVisualizer();
  });
  musicAudio.addEventListener('pause', updateMusicUi);
  musicAudio.addEventListener('loadedmetadata', updateMusicUi);
  musicAudio.addEventListener('ended', () => {
    updateMusicUi();
    if (diesmosMusicQueue.length && diesmosMusicQueueIndex >= 0 && diesmosMusicQueueIndex < diesmosMusicQueue.length - 1) {
      diesmosMusicQueueIndex += 1;
      playDiesmosHostedTrack(diesmosMusicQueue[diesmosMusicQueueIndex], false);
    }
  });
  updateMusicUi();
  drawVisualizerFrame();
initBottomVisualizer();
}

async function handleMusicFileSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file || !musicAudio) return;
  diesmosMusicQueue = [];
  diesmosMusicQueueIndex = -1;
  currentDiesmosHostedTrack = null;
  if (currentMusicUrl) URL.revokeObjectURL(currentMusicUrl);
  if (currentCoverUrl) { URL.revokeObjectURL(currentCoverUrl); currentCoverUrl = null; }
  currentMusicUrl = URL.createObjectURL(file);
  musicAudio.src = currentMusicUrl;
  currentMusicMeta = await extractAudioMetadata(file);
  applyMusicMetadata(currentMusicMeta);
  updateMusicUi();
  await startMusicPlayback();
}

async function startMusicPlayback() {
  if (!musicAudio) return;
  await ensureVisualizerGraph();
  musicAudio.playbackRate = Math.pow(2, musicPitch / 12);
  await musicAudio.play();
  updateMusicUi();
}

function buildHostedMusicUrl(path) {
  const cleanPath = String(path || '').replace(/^\/+/, '').split('/').filter(Boolean);
  return 'https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/diesmosmusic@main/' + cleanPath.map(part => encodeURIComponent(decodeURIComponent(part))).join('/');
}

// The catalog generator stores title/artist/album reversed to dodge an old
// filename-scanning limitation. Reverse them back before display. URLs and
// paths are untouched because those are opaque hashes.
function reverseCatalogString(value) {
  if (typeof value !== 'string' || value.length === 0) return value || '';
  // Array.from splits on code points so emoji / astral chars survive the flip.
  return Array.from(value).reverse().join('');
}

function normalizeDiesmosMusicCatalog(raw) {
  if (!raw || !Array.isArray(raw.artists)) return { artists: [] };
  return { artists: raw.artists.map(artist => ({
    name: reverseCatalogString(artist.name),
    albums: (artist.albums || []).map(album => ({
      name: reverseCatalogString(album.name),
      coverArtUrl: album.coverArtUrl || '',
      songs: (album.songs || []).map(song => ({
        ...song,
        title: reverseCatalogString(song.title),
        artist: reverseCatalogString(song.artist),
        album: reverseCatalogString(song.album),
        // URL / path stay verbatim — they're hashes and reversing breaks them.
        url: song.url || buildHostedMusicUrl(song.path || '')
      }))
    }))
  })) };
}

async function loadDiesmosMusicCatalog() {
  // The catalog is generated directly inside the diesmosmusic repository and
  // loaded by <script src="https://testingcf.jsdelivr.net/gh/waycrosspublicmedia/diesmosmusic@85c1ae44bec2f39cac2856855397ec5a3b881df7/diesmos-music-catalog.js">.
  // Do not hit the GitHub API from the website: the generated catalog is the
  // single source of truth for the hosted music library.
  if (window.DIESMOS_MUSIC_CATALOG) {
    return normalizeDiesmosMusicCatalog(window.DIESMOS_MUSIC_CATALOG);
  }

  throw new Error('Diesmos Music catalog script did not load. Make sure diesmos-music-catalog.js exists in the diesmosmusic repository.');
}
async function initDiesmosHostedMusic() {
  if (!diesmosMusicArtists || !diesmosMusicTracks) return;
  try {
    diesmosMusicCatalog = await loadDiesmosMusicCatalog();
    if (diesmosMusicStatus) diesmosMusicStatus.textContent = `${diesmosMusicCatalog.artists.length} artists`;
    renderDiesmosMusicArtists();
    if (diesmosMusicCatalog.artists[0]) selectDiesmosArtist(diesmosMusicCatalog.artists[0].name);
  } catch (error) {
    if (diesmosMusicStatus) diesmosMusicStatus.textContent = 'Hosted library unavailable';
    diesmosMusicTracks.innerHTML = '<div class="music-track-empty">Run the catalog generator to bundle a local copy of the Diesmos Music library.</div>';
  }
}

function renderDiesmosMusicArtists() {
  diesmosMusicArtists.innerHTML = diesmosMusicCatalog.artists.map(artist => `<button type="button" class="music-artist-chip" data-music-artist="${escapeHtml(artist.name)}">${escapeHtml(artist.name)}</button>`).join('');
  diesmosMusicArtists.querySelectorAll('[data-music-artist]').forEach(btn => btn.addEventListener('click', () => selectDiesmosArtist(btn.dataset.musicArtist)));
}

function selectDiesmosArtist(name) {
  diesmosSelectedArtist = diesmosMusicCatalog.artists.find(a => a.name === name) || null;
  diesmosMusicArtists?.querySelectorAll('.music-artist-chip').forEach(btn => btn.classList.toggle('active', btn.dataset.musicArtist === name));
  if (!diesmosSelectedArtist || !diesmosMusicTracks) return;

  diesmosMusicTracks.innerHTML = `<div class="music-artist-view">
    <div class="music-artist-view-head"><strong>${escapeHtml(diesmosSelectedArtist.name)}</strong></div>
    ${diesmosSelectedArtist.albums.map((album, albumIndex) => `
      <details class="music-album" ${albumIndex === -1 ? 'open' : ''}>
        <summary class="music-album-summary">
          <span class="music-album-name">${escapeHtml(album.name)}</span>
          <span class="music-album-count">${album.songs.length} ${album.songs.length === 1 ? 'song' : 'songs'}</span>
        </summary>
        <div class="music-album-actions">
          <button type="button" class="music-track-play-all" data-play-album="${escapeHtml(album.name)}">Play album</button>
        </div>
        <div class="music-track-list music-album-track-list">
          ${album.songs.map((song, index) => `<div class="music-track-row"><div class="music-track-number">${song.track < 9999 ? String(song.track).padStart(2,'0') : String(index+1).padStart(2,'0')}</div><div class="music-track-main"><div class="music-track-title">${escapeHtml(song.title)}</div><div class="music-track-sub">${escapeHtml(album.name)}</div></div><div class="music-track-actions"><button type="button" class="music-track-play" data-play-song="${escapeHtml(song.path)}">Play</button></div></div>`).join('')}
        </div>
      </details>
    `).join('')}
  </div>`;

  // Albums intentionally start collapsed.
  diesmosMusicTracks.querySelectorAll('details.music-album').forEach(details => { details.open = false; });
  diesmosMusicTracks.querySelectorAll('[data-play-song]').forEach(btn => btn.addEventListener('click', async () => {
    const song = findDiesmosSong(btn.dataset.playSong);
    if (song) { diesmosMusicQueue = []; diesmosMusicQueueIndex = -1; await playDiesmosHostedTrack(song, true); }
  }));
  diesmosMusicTracks.querySelectorAll('[data-play-album]').forEach(btn => btn.addEventListener('click', async () => {
    const album = diesmosSelectedArtist.albums.find(a => a.name === btn.dataset.playAlbum);
    if (!album || !album.songs.length) return;
    diesmosMusicQueue = album.songs.slice();
    diesmosMusicQueueIndex = 0;
    await playDiesmosHostedTrack(diesmosMusicQueue[0], true);
  }));
}

function findDiesmosSong(path) {
  for (const artist of diesmosMusicCatalog.artists) for (const album of artist.albums) for (const song of album.songs) if (song.path === path) return song;
  return null;
}
async function fetchEmbeddedCoverArt(url) {
  if (!url) return null;
  try {
    // ID3v2 is at the start of the file. 1 MB covers essentially all real-world
    // APIC frames; the server will return a 206 Partial Content response.
    const response = await fetch(url, { headers: { Range: 'bytes=0-1048575' } });
    if (!response.ok && response.status !== 206) return null;

    const buffer = await response.arrayBuffer();
    const bytes = new Uint8Array(buffer);

    if (bytes.length < 10 || readAscii(bytes, 0, 3) !== 'ID3') return null;

    const versionMajor = bytes[3];
    const tagSize = readSyncSafeInteger(bytes, 6);
    const tagEnd = Math.min(bytes.length, 10 + tagSize);
    let offset = 10;

    while (offset + 10 <= tagEnd) {
      const frameId = readAscii(bytes, offset, 4);
      if (!frameId.trim() || frameId === '\u0000\u0000\u0000\u0000') break;

      const frameSize = versionMajor === 4
        ? readSyncSafeInteger(bytes, offset + 4)
        : readBigEndianInteger(bytes, offset + 4, 4);

      if (!frameSize || offset + 10 + frameSize > tagEnd) break;

      if (frameId === 'APIC') {
        const frameData = bytes.slice(offset + 10, offset + 10 + frameSize);
        const picture = parseApicFrame(frameData);
        if (picture) {
          const blob = new Blob([picture.data], { type: picture.mime });
          return URL.createObjectURL(blob);
        }
      }

      offset += 10 + frameSize;
    }
  } catch (error) {
    console.warn('Could not read embedded cover art from stream:', error);
  }
  return null;
}
async function playDiesmosHostedTrack(song, autoPlay = true) {
  if (!song || !musicAudio) return;
  if (currentMusicUrl) { URL.revokeObjectURL(currentMusicUrl); currentMusicUrl = null; }
  if (currentCoverUrl) { URL.revokeObjectURL(currentCoverUrl); currentCoverUrl = null; }
  currentDiesmosHostedTrack = song;

  // 1. Prefer a cover already provided by the catalog.
  const artist = diesmosMusicCatalog.artists.find(a => a.name === song.artist);
  const album = artist?.albums.find(a => a.name === song.album);
  const catalogCover = song.coverArtUrl || album?.coverArtUrl || '';

  currentMusicMeta = {
    title: song.title,
    artist: song.artist || '',
    album: song.album || '',
    fileType: 'MP3',
    fileSize: '',
    durationText: '',
    coverArtUrl: catalogCover
  };

  // Hosted catalog tracks should start from the beginning and never inherit a
  // previous looping state.
  musicAudio.pause();
  musicAudio.loop = false;
  musicAudio.currentTime = 0;
  const streamUrl = song.url || buildHostedMusicUrl(song.path || '');
  musicAudio.src = streamUrl;
  musicAudio.load();
  applyMusicMetadata(currentMusicMeta);
  updateMusicUi();

  if (autoPlay !== false) {
    try {
      await startMusicPlayback();
    } catch (error) {
      console.error('Diesmos Music playback failed:', error, musicAudio.src);
      if (musicStatus) musicStatus.textContent = 'Could not play this hosted track.';
      updateMusicUi();
    }
  }

  // 2. If the catalog has no cover, try the file's own ID3 tag in the background.
  //    This never blocks playback; if it fails, blankcd.png stays visible.
  if (!catalogCover && streamUrl) {
    fetchEmbeddedCoverArt(streamUrl).then((embeddedUrl) => {
      if (!embeddedUrl) return;

      // A different track may have started while we were fetching.
      if (currentDiesmosHostedTrack !== song) {
        URL.revokeObjectURL(embeddedUrl);
        return;
      }

      if (currentCoverUrl) URL.revokeObjectURL(currentCoverUrl);
      currentCoverUrl = embeddedUrl;
      currentMusicMeta.coverArtUrl = embeddedUrl;
      applyMusicMetadata(currentMusicMeta);
    });
  }
}

async function ensureVisualizerGraph() {
  if (!musicAudio) return;

  if (!musicAudioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      musicStatus.textContent = 'Visualizer not supported in this browser.';
      return;
    }

    musicAudioContext = new AudioContextClass();
    musicAnalyser = musicAudioContext.createAnalyser();
    musicAnalyser.fftSize = 128;
    musicAnalyser.smoothingTimeConstant = 0.82;
    musicSourceNode = musicAudioContext.createMediaElementSource(musicAudio);
    musicSourceNode.connect(musicAnalyser);
    musicAnalyser.connect(musicAudioContext.destination);
  }

  if (musicAudioContext.state === 'suspended') {
    await musicAudioContext.resume();
  }
}

function updateMusicUi() {
  if (!musicAudio || !musicPlayPauseBtn || !musicStatus) return;

  const isPlaying = !musicAudio.paused && !musicAudio.ended && Boolean(musicAudio.src);
  const musicPlayerCard = document.getElementById('musicPlayerCard');
  const musicNowLabel = document.getElementById('musicNowLabel');
  if (musicPlayerCard) musicPlayerCard.classList.toggle('is-playing', isPlaying);
  if (musicNowLabel) musicNowLabel.textContent = isPlaying ? 'PLAYING' : (musicAudio.src ? 'PAUSED' : 'READY');
  const topState = document.getElementById('musicNowLabelTop');
  if (topState) topState.textContent = isPlaying ? 'PLAYING' : (musicAudio.src ? 'PAUSED' : 'READY');

  musicPlayPauseBtn.textContent = musicAudio.paused ? 'Play' : 'Pause';
  if (musicLoopBtn) {
    musicLoopBtn.textContent = musicAudio.loop ? 'Loop On' : 'Loop Off';
    musicLoopBtn.classList.toggle('active', musicAudio.loop);
  }

  if (!currentMusicMeta) {
    applyMusicMetadata(null);
  } else {
    applyMusicMetadata(currentMusicMeta);
  }

  if (!musicAudio.src) {
    musicStatus.textContent = 'Choose a song to start the visualizer.';
  } else if (musicAudio.paused) {
    musicStatus.textContent = 'Paused.';
  } else {
    musicStatus.textContent = 'Now playing.';
  }

  updateVisualizerVisibility();
syncMiniPlayer();
}

function startVisualizer() {
  if (visualizerFrame) return;
  visualizerFrame = requestAnimationFrame(drawVisualizerFrame);
}

function updateVisualizerVisibility() {
  if (!musicAudio) return;
  const playing = !musicAudio.paused && !musicAudio.ended && Boolean(musicAudio.src);

  document.querySelectorAll('.cd-disc, .floating-music-disc').forEach((disc) => {
    disc.classList.toggle('playing', playing);
    disc.classList.toggle('spinning', playing);
  });

  const bottomViz = document.getElementById('bottomVisualizer');
  if (bottomViz) bottomViz.classList.toggle('active', playing);

  const flashEl = document.getElementById('beatFlash');
  if (flashEl && !playing) flashEl.style.opacity = '0';

  syncMiniPlayer();
}
function drawVisualizerFrame(timestamp) {
  if (bottomVizCtx) drawBottomVisualizer(timestamp || performance.now());
  visualizerFrame = requestAnimationFrame(drawVisualizerFrame);
}

function applyMusicMetadata(meta) {
  const fallbackMeta = meta || getEmptyMusicMetadata();
  const art = fallbackMeta.coverArtUrl || DEFAULT_CD_ART;
  document.querySelectorAll('.album-art').forEach((image) => {
    // A fresh cover means the previous failure (if any) no longer applies.
    image.dataset.fallbackApplied = 'false';
    image.src = art;
    image.classList.add('active');
  });
  document.querySelectorAll('.cd-disc').forEach((disc) => disc.classList.toggle('has-art', Boolean(art)));
  const durationText = Number.isFinite(musicAudio.duration) ? formatDuration(musicAudio.duration) : fallbackMeta.durationText;
  const detailsParts = [fallbackMeta.fileType, fallbackMeta.fileSize, durationText].filter(Boolean);

  if (musicTrackLabel) {
    musicTrackLabel.textContent = fallbackMeta.title || 'No track loaded';
  }

  if (musicArtistLabel) {
    musicArtistLabel.textContent = fallbackMeta.artist || 'Unknown';
  }

  if (musicAlbumLabel) {
    musicAlbumLabel.textContent = fallbackMeta.album || 'Unknown';
  }

  if (musicDetailsLabel) {
    musicDetailsLabel.textContent = detailsParts.length ? detailsParts.join(' - ') : 'No file loaded';
  }
}

function getEmptyMusicMetadata() {
  return {
    title: '',
    artist: '',
    album: '',
    fileType: '',
    fileSize: '',
    durationText: '',
    coverArtUrl: ''
  };
}

async function extractAudioMetadata(file) {
  const fallback = buildFallbackMusicMetadata(file);

  try {
    if (file.type === 'audio/mpeg' || /\.mp3$/i.test(file.name)) {
      const id3Meta = await parseId3Metadata(file);
      return { ...fallback, ...id3Meta };
    }
  } catch (error) {
    console.warn('Could not read audio metadata:', error);
  }

  return fallback;
}

function buildFallbackMusicMetadata(file) {
  const baseName = file.name.replace(/\.[^.]+$/, '');
  const parts = baseName.split(/\s+-\s+/);
  const artist = parts.length > 1 ? parts.shift().trim() : '';
  const title = parts.length > 0 ? parts.join(' - ').trim() : baseName;

  return {
    title: title || 'Unknown Track',
    artist,
    album: '',
    fileType: (file.type || 'audio file').replace(/^audio\//i, '').toUpperCase(),
    fileSize: formatFileSize(file.size),
    durationText: '',
    coverArtUrl: ''
  };
}

async function parseId3Metadata(file) {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  if (bytes.length < 10 || readAscii(bytes, 0, 3) !== 'ID3') {
    return {};
  }

  const versionMajor = bytes[3];
  const tagSize = readSyncSafeInteger(bytes, 6);
  const metadata = {};
  let offset = 10;
  const tagEnd = Math.min(bytes.length, 10 + tagSize);

  while (offset + 10 <= tagEnd) {
    const frameId = readAscii(bytes, offset, 4);
    if (!frameId.trim() || frameId === '\u0000\u0000\u0000\u0000') {
      break;
    }

    const frameSize = versionMajor === 4
      ? readSyncSafeInteger(bytes, offset + 4)
      : readBigEndianInteger(bytes, offset + 4, 4);

    if (!frameSize || offset + 10 + frameSize > tagEnd) {
      break;
    }

    const frameData = bytes.slice(offset + 10, offset + 10 + frameSize);

    if (frameId === 'APIC' && !metadata.coverArtUrl) {
      const picture = parseApicFrame(frameData);
      if (picture) {
        const blob = new Blob([picture.data], { type: picture.mime });
        metadata.coverArtUrl = URL.createObjectURL(blob);
      }
    }

    const decoded = decodeId3TextFrame(frameData);

    if (decoded) {
      if (frameId === 'TIT2') metadata.title = decoded;
      if (frameId === 'TPE1') metadata.artist = decoded;
      if (frameId === 'TALB') metadata.album = decoded;
    }

    offset += 10 + frameSize;
  }

  return metadata;
}

function parseApicFrame(frameData) {
  if (!frameData || frameData.length < 10) return null;
  const encoding = frameData[0];
  let offset = 1;
  let mimeEnd = offset;
  while (mimeEnd < frameData.length && frameData[mimeEnd] !== 0) mimeEnd++;
  let mime = readAscii(frameData, offset, mimeEnd - offset);
  offset = mimeEnd + 1;
  if (offset >= frameData.length) return null;
  offset += 1; // picture type

  // Description terminator depends on text encoding.
  let imageStart = offset;
  if (encoding === 1 || encoding === 2) {
    while (imageStart + 1 < frameData.length) {
      if (frameData[imageStart] === 0 && frameData[imageStart + 1] === 0) { imageStart += 2; break; }
      imageStart += 2;
    }
  } else {
    while (imageStart < frameData.length && frameData[imageStart] !== 0) imageStart++;
    imageStart += 1;
  }
  if (imageStart >= frameData.length) return null;
  if (!mime || mime === 'image/jpg') mime = 'image/jpeg';
  return { mime, data: frameData.slice(imageStart) };
}

function decodeId3TextFrame(frameData) {
  if (!frameData || frameData.length < 2) return '';

  const encoding = frameData[0];
  const content = frameData.slice(1);

  try {
    if (encoding === 0) {
      return new TextDecoder('iso-8859-1').decode(content).replace(/\u0000/g, '').trim();
    }

    if (encoding === 1 || encoding === 2) {
      const textBytes = content.length % 2 === 0 ? content : content.slice(0, -1);
      return new TextDecoder('utf-16').decode(textBytes).replace(/\u0000/g, '').trim();
    }

    if (encoding === 3) {
      return new TextDecoder('utf-8').decode(content).replace(/\u0000/g, '').trim();
    }
  } catch (error) {
    return '';
  }

  return '';
}

function readAscii(bytes, start, length) {
  let value = '';
  for (let i = 0; i < length; i++) {
    value += String.fromCharCode(bytes[start + i] || 0);
  }
  return value;
}

function readSyncSafeInteger(bytes, start) {
  return ((bytes[start] & 0x7f) << 21) |
         ((bytes[start + 1] & 0x7f) << 14) |
         ((bytes[start + 2] & 0x7f) << 7) |
         (bytes[start + 3] & 0x7f);
}

function readBigEndianInteger(bytes, start, length) {
  let value = 0;
  for (let i = 0; i < length; i++) {
    value = (value << 8) | (bytes[start + i] || 0);
  }
  return value;
}

function formatFileSize(size) {
  if (!Number.isFinite(size) || size <= 0) return '';
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = size;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex++;
  }

  const decimals = unitIndex === 0 ? 0 : 1;
  return `${value.toFixed(decimals)} ${units[unitIndex]}`;
}
function formatClock(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const total = Math.floor(seconds);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}
/* ------------------------------------------------------------------ *
 *  Mini player (floating CD)
 * ------------------------------------------------------------------ */

let miniSeeking = false;

function syncMiniPlayer() {
  if (!musicAudio) return;
  const titleEl  = document.getElementById('miniTrackLabel');
  const artistEl = document.getElementById('miniArtistLabel');
  const playBtn  = document.getElementById('miniPlayPauseBtn');

  if (titleEl)  titleEl.textContent  = (currentMusicMeta && currentMusicMeta.title)  || 'No track loaded';
  if (artistEl) artistEl.textContent = (currentMusicMeta && currentMusicMeta.artist) || 'Unknown';
  if (playBtn)  playBtn.textContent  = musicAudio.paused ? 'Play' : 'Pause';

  // Cover art — reuse whatever the big player already resolves.
  const art = document.getElementById('floatingAlbumArt');
  if (art) {
    const cover = (currentMusicMeta && currentMusicMeta.coverArtUrl) || DEFAULT_CD_ART;
    if (art.getAttribute('src') !== cover) art.setAttribute('src', cover);
    art.classList.add('active');
  }
}

function updateMiniProgress() {
  if (!musicAudio) return;
  const bar = document.getElementById('miniProgress');
  const cur = document.getElementById('miniCurrentTime');
  const dur = document.getElementById('miniDuration');
  const buf = document.getElementById('miniBuffer');

  const duration = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;
  const current  = Number.isFinite(musicAudio.currentTime) ? musicAudio.currentTime : 0;

  if (bar && !miniSeeking) {
    bar.value = duration > 0 ? String(Math.round((current / duration) * 1000)) : '0';
  }
  if (cur) cur.textContent = formatClock(current);
  if (dur) dur.textContent = formatClock(duration);

  if (buf) {
    if (duration > 0 && musicAudio.buffered && musicAudio.buffered.length) {
      const end = musicAudio.buffered.end(musicAudio.buffered.length - 1);
      buf.style.width = `${Math.min(100, (end / duration) * 100)}%`;
    } else {
      buf.style.width = '0%';
    }
  }
}

function setupMiniPlayer() {
  const disc = document.getElementById('floatingMusicDisc');
  const panel = document.getElementById('miniPlayer');
  if (!disc || !panel) return;

  const setOpen = (open) => {
    panel.classList.toggle('active', open);
    panel.setAttribute('aria-hidden', open ? 'false' : 'true');
    disc.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  disc.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(!panel.classList.contains('active'));
  });

  // Click anywhere outside closes the panel.
  document.addEventListener('click', (event) => {
    if (!panel.classList.contains('active')) return;
    if (panel.contains(event.target) || disc.contains(event.target)) return;
    setOpen(false);
  });

  const expand = document.getElementById('miniExpandBtn');
  if (expand) expand.addEventListener('click', () => { setOpen(false); openMusicTab(); });

  const playBtn = document.getElementById('miniPlayPauseBtn');
  if (playBtn) playBtn.addEventListener('click', async () => {
    if (!musicAudio.src) { musicFilePicker && musicFilePicker.click(); return; }
    if (musicAudio.paused) {
      try { await startMusicPlayback(); } catch (e) {}
    } else {
      musicAudio.pause();
    }
  });

  const prevBtn = document.getElementById('miniPrevBtn');
  if (prevBtn) prevBtn.addEventListener('click', () => {
    if (musicAudio.currentTime > 3) { musicAudio.currentTime = 0; return; }
    if (diesmosMusicQueue.length && diesmosMusicQueueIndex > 0) {
      diesmosMusicQueueIndex -= 1;
      playDiesmosHostedTrack(diesmosMusicQueue[diesmosMusicQueueIndex], true);
    } else {
      musicAudio.currentTime = 0;
    }
  });

  const nextBtn = document.getElementById('miniNextBtn');
  if (nextBtn) nextBtn.addEventListener('click', () => {
    if (diesmosMusicQueue.length && diesmosMusicQueueIndex >= 0 && diesmosMusicQueueIndex < diesmosMusicQueue.length - 1) {
      diesmosMusicQueueIndex += 1;
      playDiesmosHostedTrack(diesmosMusicQueue[diesmosMusicQueueIndex], true);
    }
  });

  const bar = document.getElementById('miniProgress');
  if (bar) {
    bar.addEventListener('input', () => {
      miniSeeking = true;
      const duration = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;
      const ratio = Number(bar.value) / 1000;
      const cur = document.getElementById('miniCurrentTime');
      if (cur) cur.textContent = formatClock(ratio * duration);
    });
    const commit = () => {
      const duration = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;
      if (duration > 0) musicAudio.currentTime = (Number(bar.value) / 1000) * duration;
      miniSeeking = false;
      updateMiniProgress();
    };
    bar.addEventListener('change', commit);
    bar.addEventListener('pointerup', commit);
    bar.addEventListener('keyup', commit);
  }

  musicAudio.addEventListener('timeupdate', updateMiniProgress);
  musicAudio.addEventListener('progress', updateMiniProgress);
  musicAudio.addEventListener('loadedmetadata', updateMiniProgress);
  musicAudio.addEventListener('durationchange', updateMiniProgress);
  musicAudio.addEventListener('seeked', updateMiniProgress);
  musicAudio.addEventListener('ended', updateMiniProgress);

  updateMiniProgress();
  syncMiniPlayer();
}
function formatDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '';
  const totalSeconds = Math.round(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
}

function exportCookies() {
  const payload = {
    exportedAt: new Date().toISOString(),
    cookies: document.cookie,
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]')
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'diesmos-cookies.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function importCookies() {
  if (!cookieFileInput) return;
  cookieFileInput.value = '';
  cookieFileInput.click();
}

function handleCookieUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);

      if (typeof payload.cookies === 'string' && payload.cookies.trim()) {
        payload.cookies.split(';').forEach(cookiePart => {
          const cookie = cookiePart.trim();
          if (cookie) {
            document.cookie = `${cookie}; path=/`;
          }
        });
      }

      if (Array.isArray(payload.favorites)) {
        localStorage.setItem('favorites', JSON.stringify(payload.favorites));
        favorites = payload.favorites;
        refreshGameViews({ preservePage: true });
      }

      alert('Cookies imported.');
    } catch (error) {
      alert(`Could not import cookies: ${error.message}`);
    }
  };

  reader.readAsText(file);
}


function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = 'Have an awesome day! ';
  if (hour < 12) greeting = 'Good morning! ';
  else if (hour < 18) greeting = 'Good afternoon! ';
  else greeting = 'Good evening! ';
  const greetingElement = document.getElementById('greeting');
  if (greetingElement) {
    greetingElement.textContent = greeting;
  }
}


function createHearts() {
  const heartsContainer = document.getElementById('hearts');
  if (!heartsContainer) return;

  const hearts = ['', '', '', '', '', '', '', ''];
  
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDelay = `${Math.random() * 20}s`;
    heart.style.animationDuration = `${15 + Math.random() * 10}s`;
    heart.style.fontSize = `${1 + Math.random() * 2}rem`;
    heartsContainer.appendChild(heart);
  }
}/* ------------------------------------------------------------------ *
 *  Bottom audio visualizer + beat flash
 * ------------------------------------------------------------------ */

let bottomVizCanvas = null;
let bottomVizCtx = null;

let beatBaseline = 0.28;   // slow-moving average of overall loudness
let beatFlash = 0;         // 0..1, drives the full-screen pulse
let beatCooldown = 0;      // frames left before another beat can trigger

function initBottomVisualizer() {
  bottomVizCanvas = document.getElementById('bottomVisualizer');
  if (bottomVizCanvas) bottomVizCtx = bottomVizCanvas.getContext('2d');
  resizeBottomVisualizer();
  window.addEventListener('resize', resizeBottomVisualizer, { passive: true });
  if (!visualizerFrame) startVisualizer();   // reuse the existing RAF loop
}

function resizeBottomVisualizer() {
  if (!bottomVizCanvas) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const rect = bottomVizCanvas.getBoundingClientRect();
  bottomVizCanvas.width  = Math.max(1, Math.floor((rect.width  || window.innerWidth) * ratio));
  bottomVizCanvas.height = Math.max(1, Math.floor((rect.height || 140) * ratio));
}

function musicIsPlaying() {
  return Boolean(musicAudio && musicAudio.src && !musicAudio.paused && !musicAudio.ended);
}

function sampleAudioEnergy() {
  if (!musicAnalyser) return 0;
  const data = new Uint8Array(musicAnalyser.frequencyBinCount);
  musicAnalyser.getByteFrequencyData(data);
  let sum = 0;
  for (let i = 0; i < data.length; i++) sum += data[i];
  return sum / (data.length * 255);
}

let instantEnergy = 0;
let avgEnergy = 0.08;


function detectBeat(energy) {
  instantEnergy = energy;

  // Slow-moving baseline of "how loud is this track right now".
  avgEnergy = avgEnergy * 0.94 + energy * 0.06;

  // Peak = instant jumped meaningfully above the rolling average.
  if (beatCooldown > 0) {
    beatCooldown--;
  } else if (instantEnergy > avgEnergy * 1.18 && instantEnergy > 0.12) {
    beatFlash = Math.min(1, beatFlash + 0.8);
    beatCooldown = 5;
  }

  beatFlash *= 0.88;
  if (beatFlash < 0.004) beatFlash = 0;

  const flashEl = document.getElementById('beatFlash');
  if (flashEl) flashEl.style.opacity = beatFlash.toFixed(3);
}

/* Bottom-of-viewport mirrored audio bars. */
function drawBottomVisualizer(timestamp) {
  if (!bottomVizCtx || !bottomVizCanvas) return;
  const ctx = bottomVizCtx;
  const W = bottomVizCanvas.width;
  const H = bottomVizCanvas.height;
  if (!W || !H) return;

  ctx.clearRect(0, 0, W, H);
  if (!musicIsPlaying()) {
    const flashEl = document.getElementById('beatFlash');
    if (flashEl) flashEl.style.opacity = '0';
    beatFlash = 0;
    return;
  }

  const t = timestamp * 0.001;
  const barCount = 96;
  const barW = W / barCount;

  let data = null;
  if (musicAnalyser) {
    data = new Uint8Array(musicAnalyser.frequencyBinCount);
    musicAnalyser.getByteFrequencyData(data);
  }

  // Beat detection runs once per frame, not once per bar.
  detectBeat(sampleAudioEnergy());

  for (let i = 0; i < barCount; i++) {
    const half = barCount / 2;
    const distanceFromCenter = Math.abs(i - half) / half;
    const mirror = 1 - distanceFromCenter * 0.55;

    let value;
    if (data && data.length) {
      const src = Math.floor(Math.pow(i / barCount, 1.4) * data.length);
      value = (data[src] / 255) * mirror;
    } else {
      value = (Math.sin(i * 0.35 + t * 3) * 0.5 + 0.5) * 0.6 * mirror;
    }
    const wobble = (Math.sin(i * 0.8 + t * 4) * 0.5 + 0.5) * 0.08;
    value = Math.max(0, Math.min(1, value + wobble));

    const barH = Math.max(4, value * H * 0.9);
    const x = i * barW;
    const y = H - barH;

    const grad = ctx.createLinearGradient(0, y, 0, H);
    grad.addColorStop(0, `hsla(${108 + value * 45}, 88%, ${58 + value * 22}%, 0.95)`);
    grad.addColorStop(0.6, `hsla(${115 + value * 45}, 78%, 48%, 0.85)`);
    grad.addColorStop(1, `hsla(${122 + value * 45}, 70%, 32%, 0.35)`);
    ctx.fillStyle = grad;

    const r = Math.min(barW * 0.45, 3);
    ctx.beginPath();
    ctx.moveTo(x + 1, H);
    ctx.lineTo(x + 1, y + r);
    ctx.quadraticCurveTo(x + 1, y, x + 1 + r, y);
    ctx.lineTo(x + barW - 1 - r, y);
    ctx.quadraticCurveTo(x + barW - 1, y, x + barW - 1, y + r);
    ctx.lineTo(x + barW - 1, H);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = `hsla(${110 + value * 45}, 95%, 88%, ${0.35 + value * 0.6})`;
    ctx.fillRect(x + 1, y, Math.max(1, barW - 2), 2);
  }

  const glow = ctx.createLinearGradient(0, H - 40, 0, H);
  glow.addColorStop(0, 'rgba(109, 209, 127, 0)');
  glow.addColorStop(1, 'rgba(109, 209, 127, 0.35)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, H - 40, W, 40);
}
/* ================================================================== *
 *  SHORTZ — YouTube Shorts viewer
 * ================================================================== */

const SHORTZ_API_HOSTS = [
  'https://invidious.f5.si',
  'https://inv.nadeko.net',
  'https://invidious.nerdvpn.de',
  'https://inv.thepixora.com',
  'https://yt.chocolatemoo53.com',
  'https://yewtu.be'
];
const SHORTZ_INSTANCE_DIRECTORY = 'https://api.invidious.io/instances.json?sort_by=health';
const SHORTZ_AUTOSCROLL_KEY = 'diesmos.shortz.autoscroll';
const SHORTZ_DEFAULT_DURATION_MS = 30000;
const SHORTZ_SWIPE_THRESHOLD = 50;
const SHORTZ_PREFETCH_THRESHOLD = 5;

const shortzFailedHosts = new Set();
let shortzApiHosts = null;
let shortzResults = [{ videoId: 'YiEcmWi4pNI', title: 'Featured short', author: 'YouTube', viewCount: 0 }];
let shortzIndex = 0;
let shortzHasLoaded = false;
let shortzSearchAvailable = true;
let shortzAutoscrollEnabled = true;
let shortzAutoscrollTimer = null;
let shortzTransitionDirection = 'next';
let shortzQuery = '';
let shortzNextPage = 2;
let shortzLoadingMore = false;
let shortzHasMore = true;

function makeShortzEmbedUrl(videoId) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&controls=0`;
}

function makeShortzWatchUrl(videoId) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function unloadShortz() {
  const frame = document.getElementById('shortzFrame');
  clearShortzAutoscrollTimer();
  resetShortzProgress();
  if (frame) frame.src = 'about:blank';
  shortzHasLoaded = false;
}

function fadeMusicForShortzExit() {
  const audio = document.getElementById('musicAudio');
  const slider = document.getElementById('musicVolumeSlider');
  const value = document.getElementById('musicVolumeValue');
  if (!audio || audio.paused || audio.volume <= 0) return;
  const startingVolume = audio.volume;
  const startedAt = performance.now();
  const fade = (now) => {
    const progress = Math.min(1, (now - startedAt) / 1200);
    audio.volume = startingVolume * (1 - progress);
    if (slider) slider.value = String(Math.round(audio.volume * 100));
    if (value) value.textContent = `${Math.round(audio.volume * 100)}%`;
    if (progress < 1) requestAnimationFrame(fade);
  };
  requestAnimationFrame(fade);
}

function buildShortSubtitle(shortData, index, total) {
  const pieces = [];
  if (shortData.author) pieces.push(shortData.author);
  if (Number.isFinite(shortData.viewCount) && shortData.viewCount > 0)
    pieces.push(`${shortData.viewCount.toLocaleString()} views`);
  const totalLabel = shortzHasMore ? `${Math.max(total, 1)}+` : String(Math.max(total, 1));
  pieces.push(`Short ${index + 1} of ${totalLabel}`);
  return pieces.join(' - ');
}

function refreshShortzStatus() {
  const status = document.getElementById('shortzStatus');
  const shortData = shortzResults[shortzIndex];
  if (status && shortData) status.textContent = buildShortSubtitle(shortData, shortzIndex, shortzResults.length);
}

function mapShortzSearchItem(item) {
  return {
    videoId: item.videoId,
    title: item.title || 'Untitled short',
    author: item.author || '',
    viewCount: typeof item.viewCount === 'number' ? item.viewCount : 0,
    lengthSeconds: typeof item.lengthSeconds === 'number' ? item.lengthSeconds : 0
  };
}

function loadShortEmbed(result) {
  const frame = document.getElementById('shortzFrame');
  const status = document.getElementById('shortzStatus');
  const title = document.getElementById('shortzTitle');
  if (!frame || !status || !title) return;
  shortzHasLoaded = true;

  const shortData = result || shortzResults[shortzIndex];
  if (!shortData || !shortData.videoId) {
    title.textContent = 'Nothing loaded';
    status.textContent = 'No short is ready yet.';
    resetShortzProgress();
    updateShortzNavButtons();
    clearShortzAutoscrollTimer();
    return;
  }

  const wrap = document.getElementById('shortzFrameWrap');
  if (wrap) {
    wrap.classList.remove('shortz-slide-next', 'shortz-slide-previous');
    void wrap.offsetWidth;
    wrap.classList.add(shortzTransitionDirection === 'previous' ? 'shortz-slide-previous' : 'shortz-slide-next');
  }
  frame.style.display = 'block';
  frame.src = makeShortzEmbedUrl(shortData.videoId);

  title.textContent = shortData.title || 'Untitled short';
  status.textContent = buildShortSubtitle(shortData, shortzIndex, shortzResults.length);
  const likeButton = document.getElementById('shortzLikeBtn');
  const likeCount = document.getElementById('shortzLikeCount');
  if (likeButton) likeButton.classList.remove('liked');
  if (likeCount) likeCount.textContent = 'Like';
  updateShortzNavButtons();
  clearShortzAutoscrollTimer();
  startShortzProgress(shortData);
  scheduleShortzAutoscroll();
}

async function searchShortz() {
  const input = document.getElementById('shortzInput');
  const status = document.getElementById('shortzStatus');
  const title = document.getElementById('shortzTitle');
  if (!input || !status || !title) return;

  const query = input.value.trim();
  if (!query) { status.textContent = 'Type something to search for shorts.'; return; }

  title.textContent = 'Searching...';
  status.textContent = 'Looking for shorts...';

  try {
    shortzQuery = query;
    shortzNextPage = 2;
    shortzHasMore = true;
    shortzLoadingMore = false;
    const results = await fetchShortzResults(query);
    if (!results.length) { title.textContent = 'No shorts found'; status.textContent = 'Try a different search.'; return; }

    shortzResults = results;
    shortzIndex = 0;
    shortzSearchAvailable = true;
    loadShortEmbed();
    prefetchShortzPages();
  } catch (error) {
    shortzSearchAvailable = false;
    shortzQuery = '';
    shortzHasMore = false;
    shortzResults = [{ videoId: 'YiEcmWi4pNI', title: 'Featured video', author: 'YouTube', viewCount: 0 }];
    shortzIndex = 0;
    title.textContent = 'Search unavailable';
    status.textContent = 'Search hosts are down right now. The player still works with the featured video.';
    loadShortEmbed();
  }
}

async function fetchShortzResults(query) { return fetchShortzPage(query, 1); }

async function fetchShortzPage(query, page) {
  const searchQuery = encodeURIComponent(`type:video duration:short ${query}`);
  const candidateHosts = await getShortzApiHosts();
  const availableHosts = candidateHosts.filter((host) => !shortzFailedHosts.has(host));
  const hostsToTry = availableHosts.length ? availableHosts : candidateHosts;

  for (const host of hostsToTry) {
    try {
      const response = await fetch(`${host}/api/v1/search?q=${searchQuery}&page=${page}`, { headers: { Accept: 'application/json' } });
      if (!response.ok) { shortzFailedHosts.add(host); continue; }
      return mapShortzResults(await response.json());
    } catch (error) { shortzFailedHosts.add(host); }
  }
  throw new Error('No short search hosts available');
}

async function getShortzApiHosts() {
  if (shortzApiHosts) return shortzApiHosts;
  try {
    const response = await fetch(SHORTZ_INSTANCE_DIRECTORY, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Instance directory unavailable');
    const instances = await response.json();
    const discoveredHosts = (Array.isArray(instances) ? instances : [])
      .filter((instance) => Array.isArray(instance) && instance[1] && instance[1].api && instance[1].cors && instance[1].type === 'https')
      .map((instance) => `https://${instance[0]}`);
    shortzApiHosts = [...new Set([...discoveredHosts, ...SHORTZ_API_HOSTS])];
  } catch (error) { shortzApiHosts = SHORTZ_API_HOSTS; }
  return shortzApiHosts;
}

function mapShortzResults(data) {
  return (Array.isArray(data) ? data : [])
    .filter((item) => item && (item.type === 'video' || item.type === 'shortVideo' || item.videoId))
    .filter((item) => !item.lengthSeconds || item.lengthSeconds <= 180)
    .map(mapShortzSearchItem)
    .filter((item) => item.videoId);
}

async function loadMoreShortz() {
  if (!shortzQuery || shortzLoadingMore || !shortzHasMore || !shortzSearchAvailable) return false;
  shortzLoadingMore = true;
  try {
    const page = shortzNextPage;
    const newItems = await fetchShortzPage(shortzQuery, page);
    shortzNextPage = page + 1;

    if (!newItems.length) { shortzHasMore = false; updateShortzNavButtons(); refreshShortzStatus(); return false; }

    const seen = new Set(shortzResults.map((item) => item.videoId));
    const unique = newItems.filter((item) => item.videoId && !seen.has(item.videoId));

    if (!unique.length) {
      if (page >= 25) { shortzHasMore = false; updateShortzNavButtons(); refreshShortzStatus(); return false; }
      shortzLoadingMore = false;
      return loadMoreShortz();
    }

    shortzResults = shortzResults.concat(unique);
    updateShortzNavButtons();
    refreshShortzStatus();
    return true;
  } catch (error) {
    shortzHasMore = false; updateShortzNavButtons(); refreshShortzStatus(); return false;
  } finally { shortzLoadingMore = false; }
}

function maybeLoadMoreShortz() {
  if (!shortzQuery || !shortzHasMore || shortzLoadingMore) return;
  if (shortzIndex >= shortzResults.length - SHORTZ_PREFETCH_THRESHOLD) loadMoreShortz();
}

async function prefetchShortzPages() {
  while (shortzHasMore && shortzResults.length < 50) {
    const loaded = await loadMoreShortz();
    if (!loaded) break;
  }
}

async function nextShort() {
  if (!shortzResults.length) return;
  shortzTransitionDirection = 'next';

  if (shortzIndex < shortzResults.length - 1) {
    shortzIndex += 1; loadShortEmbed(); maybeLoadMoreShortz(); return;
  }

  if (!shortzHasMore) {
    if (shortzResults.length > 1) { shortzIndex = 0; loadShortEmbed(); }
    return;
  }

  clearShortzAutoscrollTimer();
  const status = document.getElementById('shortzStatus');
  if (status) status.textContent = 'Loading more shorts...';

  const loaded = await loadMoreShortz();
  if (loaded && shortzIndex < shortzResults.length - 1) {
    shortzIndex += 1; loadShortEmbed(); maybeLoadMoreShortz();
  } else if (!loaded && shortzResults.length > 1) {
    shortzIndex = 0; loadShortEmbed();
  } else { refreshShortzStatus(); }
}

function prevShort() {
  if (shortzIndex <= 0) return;
  shortzTransitionDirection = 'previous';
  shortzIndex -= 1;
  loadShortEmbed();
}

function updateShortzNavButtons() {
  const nextBtn = document.getElementById('shortzNextBtn');
  const prevBtn = document.getElementById('shortzPrevBtn');
  const atStart = shortzIndex <= 0;
  const atEnd = shortzIndex >= shortzResults.length - 1;
  if (prevBtn) prevBtn.disabled = atStart || !shortzResults.length;
  if (nextBtn) nextBtn.disabled = !shortzResults.length || (atEnd && !shortzHasMore && shortzResults.length <= 1);
}

function updateShortzAutoscrollButton() {
  const btn = document.getElementById('shortzAutoscrollBtn');
  if (!btn) return;
  btn.classList.toggle('active', shortzAutoscrollEnabled);
  btn.textContent = shortzAutoscrollEnabled ? 'Endless On' : 'Endless Off';
  btn.setAttribute('aria-pressed', shortzAutoscrollEnabled ? 'true' : 'false');
}

function clearShortzAutoscrollTimer() {
  if (shortzAutoscrollTimer) { clearTimeout(shortzAutoscrollTimer); shortzAutoscrollTimer = null; }
}

function getShortzDurationMs(shortData) {
  if (shortData && shortData.lengthSeconds > 0) return Math.min(shortData.lengthSeconds * 1000, 180000);
  return SHORTZ_DEFAULT_DURATION_MS;
}

function resetShortzProgress() {
  const bar = document.getElementById('shortzProgressBar');
  if (!bar) return;
  bar.style.transition = 'none';
  bar.style.width = '0';
}

function startShortzProgress(shortData) {
  const bar = document.getElementById('shortzProgressBar');
  if (!bar) return;
  resetShortzProgress();
  window.requestAnimationFrame(() => {
    bar.style.transition = `width ${getShortzDurationMs(shortData)}ms linear`;
    bar.style.width = '100%';
  });
}

function scheduleShortzAutoscroll() {
  if (!shortzAutoscrollEnabled || !shortzResults.length) return;
  const shortData = shortzResults[shortzIndex];
  shortzAutoscrollTimer = window.setTimeout(() => { shortzAutoscrollTimer = null; nextShort(); }, getShortzDurationMs(shortData));
}

function toggleShortzAutoscroll() {
  shortzAutoscrollEnabled = !shortzAutoscrollEnabled;
  try { localStorage.setItem(SHORTZ_AUTOSCROLL_KEY, shortzAutoscrollEnabled ? '1' : '0'); } catch (e) {}
  updateShortzAutoscrollButton();
  clearShortzAutoscrollTimer();
  scheduleShortzAutoscroll();
}

function initShortzGestures() {
  const wrap = document.getElementById('shortzFrameWrap');
  const layer = document.getElementById('shortzSwipeLayer');
  const shortzPage = document.getElementById('shortz');
  if (!wrap || !layer || !shortzPage) return;

  let touchStartY = null;
  let pointerStartY = null;
  let wheelLocked = false;

  const handleSwipe = (deltaY) => {
    const page = document.getElementById('shortz');
    if (!page || !page.classList.contains('active')) return;
    if (Math.abs(deltaY) < SHORTZ_SWIPE_THRESHOLD) return;
    if (deltaY < 0) nextShort(); else prevShort();
  };

  shortzPage.addEventListener('touchstart', (event) => {
    if (event.target.closest('button, input, label')) return;
    touchStartY = event.changedTouches[0].clientY;
  }, { passive: true });

  shortzPage.addEventListener('touchend', (event) => {
    if (event.target.closest('button, input, label')) return;
    if (touchStartY === null) return;
    handleSwipe(event.changedTouches[0].clientY - touchStartY);
    touchStartY = null;
  }, { passive: true });

  layer.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch') return;
    pointerStartY = event.clientY;
  });
  layer.addEventListener('pointerup', (event) => {
    if (event.pointerType === 'touch') return;
    if (pointerStartY === null) return;
    handleSwipe(event.clientY - pointerStartY);
    pointerStartY = null;
  });

  wrap.addEventListener('wheel', (event) => {
    const page = document.getElementById('shortz');
    if (!page || !page.classList.contains('active')) return;
    if (wheelLocked || Math.abs(event.deltaY) < 20) return;
    event.preventDefault();
    wheelLocked = true;
    if (event.deltaY > 0) nextShort(); else prevShort();
    window.setTimeout(() => { wheelLocked = false; }, 400);
  }, { passive: false });
}

function openCurrentShort() {
  const shortData = shortzResults[shortzIndex];
  if (shortData && shortData.videoId) window.open(makeShortzWatchUrl(shortData.videoId), '_blank', 'noopener');
}

function toggleShortzLike() {
  const button = document.getElementById('shortzLikeBtn');
  const label = document.getElementById('shortzLikeCount');
  if (!button || !label) return;
  const liked = button.classList.toggle('liked');
  label.textContent = liked ? 'Liked' : 'Like';
  button.setAttribute('aria-pressed', liked ? 'true' : 'false');
}

async function shareCurrentShort() {
  const shortData = shortzResults[shortzIndex];
  if (!shortData || !shortData.videoId) return;
  const url = makeShortzWatchUrl(shortData.videoId);
  try {
    if (navigator.share) await navigator.share({ title: shortData.title || 'Shortz', url });
    else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      const status = document.getElementById('shortzStatus');
      if (status) status.textContent = 'Link copied to your clipboard.';
    } else window.open(url, '_blank', 'noopener');
  } catch (e) {}
}
function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
