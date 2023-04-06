const bins = document.querySelectorAll('.bin');
const results = document.getElementById('results');

function throwBall() {
	const ball = document.createElement('div');
	ball.classList.add('ball');
	const binIndex = Math.floor(Math.random() * bins.length);
	bins[binIndex].appendChild(ball);
	setTimeout(() => {
		const ballsInBins = [];
		bins.forEach((bin, index) => {
			const balls = bin.querySelectorAll('.ball');
			ballsInBins.push(balls.length);
			balls.forEach(ball => bin.removeChild(ball));
		});
		results.innerHTML = `Balls in bins: ${ballsInBins.join(', ')}`;
	}, 1000);
}
