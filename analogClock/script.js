setInterval(() => {
	d = new Date();
	console.log(d);
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2;
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	if (hr < 10) {
		h.innerHTML = "0" + hr;
	} else {
		h.innerHTML = hr;
	}
	
	if (min < 10) {
		m.innerHTML = "0" + min;
	} else {
		m.innerHTML = min;
	}

	if (sec < 10) {
		s.innerHTML = "0" + sec;
	} else {
		s.innerHTML = sec
	}


	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
