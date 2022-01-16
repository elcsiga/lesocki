import type { Good } from "./types";

export const gameConfig = {
    numOfPlayers: {
        min: 2,
        max: 8,
    }
}

export const goods: Good[] = [
    { name: 'mézbogyó', type: 0, origin: 0 },
    { name: 'áfonya', type: 1, origin: 0 },
    { name: 'csicsóka', type: 2, origin: 0 },
    { name: 'alma', type: 0, origin: 1 },
    { name: 'eper', type: 1, origin: 1 },
    { name: 'krumpli', type: 2, origin: 1 },
    { name: 'kókusz', type: 0, origin: 2 },
    { name: 'kapribogyó', type: 1, origin: 2 },
    { name: 'földimogyoró', type: 2, origin: 2 }
]

export const types: string[] = ['fa', 'bokor', 'ágyás'];
export const origins: string[] = ['észak', 'közép', 'dél'];

export const colors: string[] = ['green', 'blue', 'orange', 'red', 'black', 'white', 'yellow', 'purple'];