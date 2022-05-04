import { Game } from './game';

  describe('Game', () => {
    let game: Game;
    beforeEach(()=>{
      game = new Game();
    });
    it('should create an instance', () => {
      expect(new Game()).toBeTruthy();
    });

// game.spec.ts
  test('gutter game', () => {
    rollMany(20, 0);
    expect(game.score).toBe(0);
  });

  test('all one', () => {
    rollMany(20, 1);
    expect(game.score).toBe(20);
  });

  // game.spec.ts
  test('perfect game', () => {
    rollMany(12, 10);
    expect(game.score).toBe(300);
  });

  test('test on one spare', () => {
    game.roll(5);
    game.roll(5); // spare
    game.roll(3);
    rollMany(17, 0);
    expect(game.score).toBe(16);
  });

  function rollMany(n: number, pins: number) {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  }
});


