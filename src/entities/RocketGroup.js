import Rocket from './Rocket.js';

class RocketGroup extends Phaser.Group {

  constructor() {
    this.max = 10;
    super(game)
  }

  create() {
    var rocket = new Rocket(game, 0, 0);
    this.add(rocket);
    return rocket;
  }

  get(x, y) {
    var rocket = this.getFirstDead() || this.create();
    rocket.reset(x, y, 200 + (10 * game.wave_num));
    return rocket;
  }

  updateForWave(wave) {
    this.max = Math.floor(10 + wave/2)
  }

  launch() {
    if (this.countLiving() < this.max) {
      var x = Phaser.Utils.chanceRoll(50) ? -20 : game.width+20;
      var y = Phaser.Utils.chanceRoll(50) ? -20 : game.height+20;

      this.get(x, y);
    }
  }

}
export default RocketGroup;
