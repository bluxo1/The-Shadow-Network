import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create() {
    // --- Game state ---
    this.stats = { strength: 10, agility: 8, intelligence: 5 };
    this.bonds = { "Cha Hae-In": 0, "Woo Jin-Chul": 0 };
    this.shadowsExtracted = 0;
    this.gateRank = "E";

    // --- Player placeholder ---
    this.player = this.add.rectangle(400, 320, 40, 60, 0x6a3fd4);
    this.cursors = this.input.keyboard.createCursorKeys();

    // --- Stats HUD (top) ---
    this.statsText = this.add.text(20, 20,
      this.getStatsString(),
      { fontSize: '14px', color: '#b79bff', fontFamily: 'monospace' }
    );

    // --- Dialogue box (bottom) ---
    this.dialogueBg = this.add.rectangle(400, 540, 760, 100, 0x0a0a14).setStrokeStyle(1, 0x6a3fd4);
    this.dialogueText = this.add.text(30, 505, 'Press 1: Raid gate  |  2: Train with Cha Hae-In  |  3: Check Shadow Army',
      { fontSize: '13px', color: '#ffffff', wordWrap: { width: 720 } }
    );

    // --- Choice keys ---
    this.input.keyboard.on('keydown-ONE', () => this.raidGate());
    this.input.keyboard.on('keydown-TWO', () => this.trainWithCharacter());
    this.input.keyboard.on('keydown-THREE', () => this.checkShadowArmy());
  }

  getStatsString() {
    return `STR ${this.stats.strength}  AGI ${this.stats.agility}  INT ${this.stats.intelligence}   |   Gate: ${this.gateRank}-Rank   |   Shadows: ${this.shadowsExtracted}`;
  }

  updateStatsHUD() {
    this.statsText.setText(this.getStatsString());
  }

  raidGate() {
    this.stats.strength += 2;
    this.shadowsExtracted += 1;
    this.dialogueText.setText(`You cleared the ${this.gateRank}-Rank gate. Strength +2. A shadow was extracted!`);
    this.updateStatsHUD();
  }

  trainWithCharacter() {
    this.bonds["Cha Hae-In"] += 1;
    this.stats.agility += 1;
    this.dialogueText.setText(`Trained with Cha Hae-In. Bond: ${this.bonds["Cha Hae-In"]}. Agility +1.`);
    this.updateStatsHUD();
  }

  checkShadowArmy() {
    this.dialogueText.setText(`Shadow Army: ${this.shadowsExtracted} shadows extracted so far.`);
  }

  update() {
    const speed = 3;
    if (this.cursors.left.isDown) this.player.x -= speed;
    if (this.cursors.right.isDown) this.player.x += speed;
    if (this.cursors.up.isDown) this.player.y -= speed;
    if (this.cursors.down.isDown) this.player.y += speed;
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#07070c',
  parent: 'game',
  scene: MainScene
};

new Phaser.Game(config);