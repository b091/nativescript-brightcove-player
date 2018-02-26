import {Common} from './brightcove-player.common';

export class BrightcovePlayer extends Common {

    public get() {
        return NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
    }
}
