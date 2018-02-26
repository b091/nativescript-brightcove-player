import { Observable } from 'tns-core-modules/data/observable';
import { BrightcovePlayer } from 'nativescript-brightcove-player';

export class HelloWorldModel extends Observable {
  public message: string;
  private brightcovePlayer: BrightcovePlayer;

  constructor() {
    super();

    this.brightcovePlayer = new BrightcovePlayer();
    this.message = this.brightcovePlayer.message;
  }
}
