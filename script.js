const markAll = document.querySelector('.mark-all');
const bars = document.querySelectorAll('.bar');
const paras = document.querySelectorAll('.para');
const contents = document.querySelectorAll('.content');
const pics = document.querySelectorAll('.pic');
const names = document.querySelectorAll('.name');
const posts = document.querySelectorAll('.post');
const times = document.querySelectorAll('.time');
const reds = document.querySelectorAll('.red');
const number = document.querySelector('.number');

markAll.addEventListener('click', () => {
	bars.forEach(bar => {
		if (bar.classList.contains('off')) {
			bar.classList.remove('off');
		} else {
			bar.classList.add('off');
		}
	});

	paras.forEach(para => {
		if (para.classList.contains('off')) {
			para.classList.remove('off');
		} else {
			para.classList.add('off');
		}
	});

	contents.forEach(content => {
		if (content.classList.contains('off')) {
			content.classList.remove('off');
		} else {
			content.classList.add('off');
		}
	});

	pics.forEach(pic => {
		if (pic.classList.contains('off')) {
			pic.classList.remove('off');
		} else {
			pic.classList.add('off');
		}
	});

	names.forEach(name => {
		if (name.classList.contains('off')) {
			name.classList.remove('off');
		} else {
			name.classList.add('off');
		}
	});

	posts.forEach(post => {
		if (post.classList.contains('off')) {
			post.classList.remove('off');
		} else {
			post.classList.add('off');
		}
	});

	times.forEach(time => {
		if (time.classList.contains('off')) {
			time.classList.remove('off');
		} else {
			time.classList.add('off');
		}
	});

	reds.forEach(red => {
		if (red.classList.contains('active')) {
			red.classList.remove('active');
		} else {
			red.classList.add('active');
		}
	});

	number.innerHTML = '0';
});
