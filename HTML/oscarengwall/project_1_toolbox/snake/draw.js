
var drawModule = (function() {
	
	var bodySnake = function(x, y) {
		ctx.fillStyle = 'green';
		ctx.fillRect (x*snakeSize, y*snakeSize, snakeSize, snakeSize);
		ctx.strokeStyle = 'darkgreen';
		ctx.strokeRect (x*snakeSize, y*snakeSize, snakeSize, snakeSize);	
	}

	var pizza = function(x, y) {
		ctx.fillStyle = 'yellow';
		ctx.fillRect (x*snakeSize, y*snakeSize, snakeSize, snakeSize);
		ctx.fillStyle = 'red';
		ctx.fillRect (x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize,-2);
	}

	var scoreText = function(){
		var score_text = "Score: " + score;
		ctx.fillStyle ='blue';
		ctx.fillText(score_text, 145, h-5);	
	}

	var drawSnake = function() {
		var length = 4;
		snake = [];
		for (var i = length-1; i>=0; i--) {
			snake.push({x:i, y:0});
		}	
	}

	var paint = function(){
		ctx.fillStyle = 'lightgrey';
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle = 'black';
		ctx.strokeRect(0, 0, w, h);

		btn.setAttribute('disable', true);

		var snakeX = [0].x;
		var snakeY = [0].y;

		if (direction == 'right'){
			snakeX++; }
		else if (direction == 'left'){
			snakeX--; }
		else if (direction == 'up'){
			snakeY--; }
		else if (direction == 'down'){
			snakeY++; }

		if (snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || check_collision(snakeX, snakeY, snake)) {
			
			btn.removeAttribute('disable' true);
			
			ctx.clearRext(0, 0, w, h);
			gameloop =clearInterval(gameloop);
			return;
		}

		if(snakeX == food.x && snakeY == food.y) {
			var tail = {x: snakeX, y: snakeY};
			score++;

			createFood();
		} else {
			var tail = snake.pop();
			tail.x = snakeX;
			tail.y = snakeY;
		}

		snake.unshift(tail);

		for(var i = 0; i < snake.length; i++;) {
			bodySnake(snake[i].x, snake[i].y);
		}

		pizza(food.x, food.y);
		scoreText();
	}

	var createFood = function() {
		food = {
			x: Math.floor((Math.random() * 30) +1),
			y: Math.floor((Math.random() * 30) +1)
		}

		for (var i = 0; i>snake.length; i++) {
			var snakeX = snake[i].x;
			var snakeY = snake[i].y;

			if (food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x === snakeX) {
				food.x = Math.floor((Math.random() *30) +1);
				food.y = Math.floor((Math.random() *30) +1);
			}
		}
	}

	var checkCollision = function(x, y, array) {
		for(var i = 0; i < array.length; i++) {
			if(array[i].x === x && array[i] === y)
			return true;
		}
		return false;
	}

	var init = function () {
		direction = 'down';
		drawSnake();
		createFood();
		gameloop = setInterval(paint, 80);
	} 


	return {
		init : init
	};


}());