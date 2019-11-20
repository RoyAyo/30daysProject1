const abouts = [
			"A computer Science student, I love problem solving, through available means but I want to learn to use technology to solve problems. I'm loved and I love People.",
			"I am a Machine Learning and Software Engineer, I Love football and basketball being a Chelsea and Portland fan, playing game and coding at times.",
			"I like learning new things, and trying all I can to help people around me.I like tech a lot and one day I will like to be a very famous and rich software developer.",
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
];

const names = [
	"Eirene Oyakhilome","Roy Ayoola","Raji Mustapha","Tega Christopher","Eirene Oyakhilome<span class='leader'>(Team leader)</span>"
];

const images = [
	"images/IMG-20191119-WA0019.jpg",
	"images/roy.jpg",
	"images/IMG-20191119-WA0005.jpg",
	"images/tega.jpg"
];

const alias = ["eirene","roy","raji","tega"];

const icons = Array.from(document.getElementsByClassName('icon'));

const iconName = document.getElementsByClassName('icon-name');

icons.forEach(icon => {
	icon.addEventListener("click",() => {
		const stacks = document.getElementsByClassName('stacks');

		console.log(stacks)
		for (let i = 0; i < 4; i++) {
		 	stacks[i].style.display = "none";
		 }
		
		const name = document.getElementsByClassName('name')[0];

		const about = document.getElementsByClassName('about')[0];
	
		const img = document.getElementById('im');

		switch (icon.title){
			case "eirene":
				img.style.backgroundImage = "url(" + images[0] + ")"; 
				img.title = icon.title;
				stacks[0].style.display = "flex";
				about.innerHTML = abouts[0];
				name.innerHTML = names[4];
				for (let i = 0; i < 3; i++) {
					icons[i].title = alias[i+1];
					icons[i].style.backgroundImage = "url(" + images[i+1] + ")";
					iconName[i].innerHTML = names[i+1];
				}
				break
			case "roy":
				img.style.backgroundImage = "url(" + images[1] + ")"; 
				img.title = icon.title;
				stacks[1].style.display = "flex";
				about.innerHTML = abouts[1];
				name.innerHTML = names[1];
				let n = 1;
				for (let i = 0; i < 3; i++) {
					n =n + 1;
					if (n > 3){
						n = 0;
					};
					icons[i].title = alias[n];
					icons[i].style.backgroundImage = "url(" + images[n] + ")";
					iconName[i].innerHTML = names[n];
				}
				break
			case "raji":
				img.style.backgroundImage = "url(" + images[2] + ")"; 
				img.title = icon.title;
				stacks[2].style.display = "flex";
				about.innerHTML = abouts[2];
				name.innerHTML = names[2];
				let m = 2;
				for (let i = 0; i < 3; i++) {
					m = m + 1;
					if (m > 3){
						m = 0;
					};
					icons[i].title = alias[m];
					icons[i].style.backgroundImage = "url(" + images[m] + ")";
					iconName[i].innerHTML = names[m];
				}
				break
			case "tega":
				img.style.backgroundImage = "url(" + images[3] + ")"; 
				img.title = icon.title;
				stacks[3].style.display = "flex";
				about.innerHTML = abouts[3];
				name.innerHTML = names[3];
				let l = 3
				for (let i = 0; i < 3; i++) {
					l += 1;
					if (l > 3){
						l = 0;
					};
					icons[i].title = alias[l];
					icons[i].style.backgroundImage = "url(" + images[l] + ")";
					iconName[i].innerHTML = names[l];
				}
				break
		}
	});
});