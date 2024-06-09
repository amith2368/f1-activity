// Import the SDK
import { DiscordSDK } from "@discord/embedded-app-sdk";

import "./style.css";
import rocketLogo from '/rocket.png';

// Instantiate the SDK
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
});

async function setupDiscordSdk() {
  await discordSdk.ready();
}

document.querySelector('#app').innerHTML = `
  <div>
    // <img src="${rocketLogo}" class="logo" alt="Discord" />
    <h1>Welcome to F1 Bleh 1.1!</h1>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/andlVbJShko?si=DuoNHqdBh_aFUQ3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
`;