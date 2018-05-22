MAX_HEALTH = 20;

class Player {
  playTurn(warrior) {
    if (!warrior.feel().isEmpty()) {
      warrior.attack();
    } else if (warrior.health() < MAX_HEALTH) {
      warrior.rest();
    } else {
      warrior.walk();
    }
  }
}
