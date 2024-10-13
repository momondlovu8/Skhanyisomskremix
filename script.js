// Sample data representing popular games (20 examples)
const apps = [
    {
        name: "Call of Duty: Mobile",
        description: "An action-packed multiplayer shooting game.",
        image: "cod-mobile.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter"
    },
    {
        name: "PUBG Mobile",
        description: "Battle Royale mobile game with millions of players.",
        image: "pubg-mobile.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.tencent.ig"
    },
    {
        name: "Minecraft",
        description: "A game about placing blocks and going on adventures.",
        image: "minecraft.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe"
    },
    {
        name: "Among Us",
        description: "A multiplayer game of teamwork and betrayal.",
        image: "among-us.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.innersloth.spacemafia"
    },
    {
        name: "Fortnite",
        description: "Battle against others to be the last one standing.",
        image: "fortnite.jpg",  // Add your image file
        downloadLink: "https://www.epicgames.com/store/en-US/p/fortnite"
    },
    {
        name: "Genshin Impact",
        description: "Open-world action RPG with a fantasy environment.",
        image: "genshin-impact.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact"
    },
    {
        name: "Clash of Clans",
        description: "Build your village and defend it against others.",
        image: "clash-of-clans.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans"
    },
    {
        name: "Candy Crush Saga",
        description: "Match candies and complete fun levels.",
        image: "candy-crush.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga"
    },
    {
        name: "Subway Surfers",
        description: "Endless running game where you dodge trains.",
        image: "subway-surfers.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf"
    },
    {
        name: "Roblox",
        description: "Create your own games and play with friends.",
        image: "roblox.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.roblox.client"
    },
    {
        name: "Brawl Stars",
        description: "Multiplayer online battle game.",
        image: "brawl-stars.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.brawlstars"
    },
    {
        name: "Temple Run 2",
        description: "Run for your life in this endless running game.",
        image: "temple-run-2.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.imangi.templerun2"
    },
    {
        name: "Angry Birds 2",
        description: "The sequel to the classic slingshot game.",
        image: "angry-birds-2.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.rovio.baba"
    },
    {
        name: "Asphalt 9: Legends",
        description: "High-speed racing game with stunning graphics.",
        image: "asphalt-9.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.Glo.asphalt9"
    },
    {
        name: "Need for Speed: Most Wanted",
        description: "Race and chase through the streets.",
        image: "nfs-most-wanted.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.ea.games.nfs13_row"
    },
    {
        name: "League of Legends: Wild Rift",
        description: "The mobile version of the popular MOBA game.",
        image: "lol-wild-rift.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift"
    },
    {
        name: "Doodle Jump",
        description: "Jump as high as you can on platforms.",
        image: "doodle-jump.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.lima.doodlejump"
    },
    {
        name: "8 Ball Pool",
        description: "Play billiards against real opponents.",
        image: "8-ball-pool.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.miniclip.eightballpool"
    },
    {
        name: "FIFA Soccer",
        description: "Compete in soccer matches around the world.",
        image: "fifa-soccer.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.ea.game.fifa14_row"
    },
    {
        name: "Harry Potter: Wizards Unite",
        description: "An augmented reality game set in the Harry Potter universe.",
        image: "hp-wizards-unite.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.nianticlabs.hpwu.android"
    },
    {
        name: "Words with Friends 2",
        description: "A fun word game to challenge your friends.",
        image: "words-with-friends.jpg",  // Add your image file
        downloadLink: "https://play.google.com/store/apps/details?id=com.zynga.words"
    },
    // Add more games up to 100+
];

// Function to generate app cards dynamically
function displayApps(filteredApps = apps) {
    const appList = document.getElementById('app-list');
    appList.innerHTML = ''; // Clear the previous content
    filteredApps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.classList.add('app-card');

        appCard.innerHTML = `
            <img src="${app.image}" alt="${app.name}">
            <h3>${app.name}</h3>
            <p>${app.description}</p>
            <a href="${app.downloadLink}" target="_blank">Download</a>
        `;

        appList.appendChild(appCard);
    });
}

// Call the function to display all apps
displayApps();