module.exports = {
	name: "2048",
	category: "games",
	code: `$djsEval[const { TwoZeroFourEight } = require('discord-gamecord');
	
	const Game = new TwoZeroFourEight({
	message: message,
	isSlashGame: false,
	embed: {
	  title: '2048',
	  color: '#00FFFF',
	},
	emojis: {
	  up: '⬆️',
	  down: '⬇️',
	  left: '⬅️',
	  right: '➡️',
	},
	timeoutTime: 60000,
	buttonStyle: 'SECONDARY',
	playerOnlyMessage: 'Only {player} can use these buttons.'
	});
	
	Game.startGame();
	]
	$cooldown[5s; Slow down! Don't spam the command! Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;2024;$authorID;$dateStamp];];1000]]:R>]`
}