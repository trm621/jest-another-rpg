const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
const Enemy = require('../lib/Enemy');

jest.mock('../lib/Player');
jest.mock('../lib/Potion');

test('checks to see if an enemy object is made', () => {
    const enemy = new Enemy();

    expect(enemy.name).toEqual(expect.any(String));
    expect(enemy.weapon).toEqual(expect.any(String));
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
});

test("gets enemy's health value", () => {
    const enemy = new Enemy(expect.any(String));

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test("checks if enemy is alive or not", () => {
    const enemy = new Enemy();

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;

    expect(enemy.isAlive()).toBeFalsy()
});

test("subtracts from enemy's health", () => {
    const enemy = new Enemy();
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(99999);

    expect(enemy.health).toBe(0);
});

test("gets enemy's attack value", () => {
    const enemy = new Enemy();
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test ("gets a description of the enemy", () => {
    const enemy = new Enemy;

    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
})
