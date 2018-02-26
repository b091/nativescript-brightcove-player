import {Common} from './brightcove-player.common';
import {EventData} from 'tns-core-modules/data/observable';
import {CssProperty, Property} from 'tns-core-modules/ui/core/properties';
import {Style} from 'tns-core-modules/ui/styling/style';

export declare class BrightcovePlayer extends Common {

    // static field used from component-builder module to find events on controls.
    static tapEvent: string;

    // Defines the text property.
    text: string;

    // Overload 'on' method so that it provides intellisense for 'tap' event.
    on(event: 'tap', callback: (args: EventData) => void, thisArg?: any);

    // Needed when 'on' method is overriden.
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);

}

export const textProperty: Property<BrightcovePlayer, string>;
export const myOpacityProperty: CssProperty<Style, number>;