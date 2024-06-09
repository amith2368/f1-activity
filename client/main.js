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
    <h1>Welcome to F1 Bleh!</h1>
    <iframe src="https://latifistreams.com/channel/raw?url=aHR0cHM6Ly9wb3A1Y2x1c3RlcmEwMGRlMDcxNzIzNzlhNjJkNjE4OS5oeXBwLnR2L1BMVFYvODg4ODg4ODgvMjI0LzMyMjEyMjc5MjcvMzIyMTIyNzkyNy5tcGQ/cnJzaXA9d2ViLmh5cHAudHY6NDQzJnpvbmVvZmZzZXQ9MCZzZXJ2aWNldHlwZT0xJmljcGlkPSZhY2NvdW50dHlwZT0xJmxpbWl0Zmx1eD0tMSZsaW1pdGR1cj0tMSZhY2NvdW50aW5mbz1VMHYyODFsb3ZaTUxXenF0WGpQdFl1T1h3UUNvSVFSazQ0OUolMkJCVUNjYXdnUVk0M1RnNWVMazYlMkJLSGtPQmJrVklxJTJGendENXhZQWU4ZEkzUGx0RVElMkJVcmN5bUhCSWh4NW9KUDRqdjJmUEswJTNEJTNBMjAyMzAyMDYxMDE3NDYlM0FVVEMlMkMxMDAzNjYzOTgzJTJDMTE1LjE2NC4xODcuMjAlMkMyMDIzMDIwNjEwMTc0NiUyQ3VybjpIdWF3ZWk6bGl2ZVRWOlhUVjU1NDU2MzM4JTJDMTAwMzY2Mzk4MyUyQy0xJTJDMCUyQzElMkMlMkMlMkMyJTJDNTkzJTJDJTJDJTJDMiUyQzEzNDMxMTclMkMwJTJDMjQ4NDEyJTJDNDc1NjI5NDMlMkMlMkMlMkMyJTJDMSUyQ0VORCZHdWFyZEVuY1R5cGU9MiZpdD1INHNJQUFBQUFBQUFBRFdPUVlfQ0lCU0VfdzFIQXBTcVBYQnlZMkppcW9sMXItWUJEMnhLaTBJMThkX2JydDI1dlpuNVhtWk1ZSERfbzRvTmM5cFZWc3ZTU0Y0NXJhV29EQ3ZFZEJRbFNwTHhVVWNsaUlFUTJzSFgwYzdZNzNsNzVZd3lLZ1NuWEpCbWZyY0w0SmRtX2V3MUpsWDhZMmRNcjlhZ3N0blJGMlFLM2lmME1MWnhvS2NBNzBzS1M0VmdzMHpqcTNXNXFwaWNKTlprbk4wR2NqY2w1QVo1R19zN0pMU0g2UDhBNVNCa0pIY3dIWGlzb1VjMVBFUDRjc2RrcHpVZndWdm52X1FBQUFBJnRlbmFudElkPTYwMDE=&amp;k1=OGU1Yzg4YzFhZDQxMWNlNGFhMWZjZDNlNjNmYTk0NDg=&amp;k2=ZmI0ZTZkM2MyYTQ0NGMzNzExNDc3NDM4YmNjMGI1ZmM=" allow="autoplay; encrypted-media" height="100%" width="100%" frameborder="0" scrolling="no" allowfullscreen=""></iframe>
  </div>
`;