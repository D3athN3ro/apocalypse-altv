import * as alt from 'alt-client';
import { Events } from '../../shared/events/index.js';
import { useWebview } from '../webview/index.js';
import { useMessenger } from './messenger.js';

const webview = useWebview();
const messenger = useMessenger();
const validKeys: Map<number, boolean> = new Map();
const nextValidPresses: { [key: string]: number } = {};

function handleUpdate(keys: string[]) {
    validKeys.clear();

    for (let key of keys) {
        validKeys.set(parseInt(key), true);
    }
}

function handleKeyup(key: number) {
    if (!validKeys.has(key)) {
        return;
    }

    if (webview.isAnyPageOpen()) {
        return;
    }

    if (messenger.isChatFocused()) {
        return;
    }

    if (nextValidPresses[key] && Date.now() < nextValidPresses[key]) {
        return;
    }

    nextValidPresses[key] = Date.now() + 500;
    alt.emitServer(Events.systems.keybinds.invoke, key);
}

alt.onServer(Events.systems.keybinds.update, handleUpdate);
alt.on('keyup', handleKeyup);
