import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then(buffer => json(buffer)).then(data => {
      const obj = JSON.parse(data);
      return new GameSaving (obj.id, obj.created, obj.userInfo);
    }).catch(error => error);
  };
};
