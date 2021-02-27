// for functions that does not intract with Vue data or DOM, write it out of Vue instance
function getRandomValue(min, max) {
	// get random value in range
	return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
			winner: null,
			logMessages: [],
		};
	},
	computed: {
		//styles for monster and player health
		monsterBarStyles() {
			if (this.monsterHealth <= 0) {
				return { width: "0%" };
			}
			return { width: this.monsterHealth + "%" };
		},
		playerBarStyles() {
			if (this.playerHealth <= 0) {
				return { width: "0%" };
			}
			return { width: this.playerHealth + "%" };
		},
		// when round is not dividable by 3 is false - for letting use special attack
		mayUseSpecialAttack() {
			return this.currentRound % 3 !== 0;
		},
	},
	watch: {
		// watch monster and player health to see player or monster or both death!
		monsterHealth(value) {
			if (value <= 0 && this.playerHealth <= 0) {
				// a draw!
				this.winner = "draw";
			} else if (value <= 0) {
				// player win
				this.winner = "player";
			}
		},
		playerHealth(value) {
			if (value <= 0 && this.monsterHealth <= 0) {
				// a draw!
				this.winner = "draw";
			} else if (value <= 0) {
				// monster win
				this.winner = "monster";
			}
		},
	},
	methods: {
		startGame() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.currentRound = 0;
			this.winner = null;
			this.logMessages = [];
		},
		// player attacks monster using this func. after that, monster attacks the player
		attackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(5, 12);
			this.monsterHealth -= attackValue;
			this.addlogMessage("player", "attack", attackValue);
			this.attackPlayer();
		},
		// monster attacks player using this func
		attackPlayer() {
			const attackValue = getRandomValue(8, 15);
			this.playerHealth -= attackValue;
			this.addlogMessage("monster", "attack", attackValue);
		},
		// to attack monster harder
		specialAttackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(10, 25);
			this.monsterHealth -= attackValue;
			this.addlogMessage("player", "special-attack", attackValue);
			this.attackPlayer();
		},
		// player can heal himself and monster attacks player after that!
		healPlayer() {
			this.currentRound++;
			const healValue = getRandomValue(8, 20);
			if (this.playerHealth + healValue > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += healValue;
			}
			this.addlogMessage("player", "heal", healValue);
			this.attackPlayer();
		},
		// player suicide to start a new game
		surrender() {
			this.winner = "monster";
		},
		//each action adds a log to logmessages array
		addlogMessage(who, what, value) {
			// add to start of the array by unshift()
			this.logMessages.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value,
			});
		},
	},
});

app.mount("#game");
