import { derived, readable } from 'svelte/store';

import type { ConnectCommand, GameReport } from '../shared/types';

const clientIdStorageKey = 'lesocki-client-id';

let socket: WebSocket;
export function send<T>(data: T) {
    if (socket) {
        console.log('SEND: ', data);
        socket.send(JSON.stringify(data));
    }
}

export const gameReport = readable<GameReport>(null, (set) => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.addEventListener('message', (event) => {
        const report = JSON.parse(event.data) as GameReport;
        console.log('Report: ', report);
        set(report);
        window.sessionStorage.setItem(clientIdStorageKey, report.myClientId);
    });

    socket.addEventListener('open', () => {
        send<ConnectCommand>({
            command: 'connect',
            clientId: window.sessionStorage.getItem(clientIdStorageKey) || null
        });
    });

    return function stop() {
        console.log('DISCONNECT');
        socket.close();
    };
});


export const me = derived(
    gameReport,
    $r => $r.myIndex >= 0 ? $r.players[$r.myIndex] : null
);
