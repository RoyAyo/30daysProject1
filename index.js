const abouts = [
			"Lorem ipsum0 dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"Lorem ipsum1 dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"Lorem ipsum2 dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"Lorem ipsum3 dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			
];

const names = [
	"Eilene Oyakhilome","Roy Ayoola","Raji Mustapha","Tega Christopher","Eilene Oyakhilome<span class='leader'>(Team leader)</span>"
];

const images = [
	"images/IMG-20191119-WA0019.jpg",
	"images/20191022_001255.jpg",
	"images/IMG-20191119-WA0005.jpg",
	"images/‪+234 814 572 0875‬ 20180731_214340.jpg"
];

const alias = ["eilene","roy","raji","tega"];

const icons = Array.from(document.getElementsByClassName('icon'));

const iconName = document.getElementsByClassName('icon-name');

icons.forEach(icon => {
	icon.addEventListener("click",() => {
	const name = document.getElementsByClassName('name')[0];

	const about = document.getElementsByClassName('about')[0];
	
	const img = document.getElementById('im');

		switch (icon.title){
			case "eilene":
				img.style.backgroundImage = "url(" + images[0] + ")"; 
				img.title = icon.title;
				about.innerHTML = abouts[0];
				name.innerHTML = names[0];
				for (let i = 0; i < 3; i++) {
					icons[i].title = alias[i+1];
					icons[i].style.backgroundImage = "url(" + images[i+1] + ")";
					iconName[i].innerHTML = names[i+1];
				}

				break
			case "roy":
				img.style.backgroundImage = "url(" + images[1] + ")"; 
				img.title = icon.title;
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
				console.log("yeah")
				break
			case "raji":
				img.style.backgroundImage = "url(" + images[2] + ")"; 
				img.title = icon.title;
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
				console.log("yeah")
				break
			case "tega":
				img.style.backgroundImage = "url(" + images[3] + ")"; 
				img.title = icon.title;
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
				console.log("yeah")
				break
		}
	});
});