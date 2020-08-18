const IMG = {
	'01d' : require('../img/01d.png'),
	'02d' : require('../img/03d.png'),
	'03d' : require('../img/03d.png'),
	'04d' : require('../img/04d.png'),
	'09d' : require('../img/09d.png'),
	'10d' : require('../img/10d.png'),
	'11d' : require('../img/11d.png'),
	'13d' : require('../img/13d.png'),

	'01n' : require('../img/01n.png'),
	'02n' : require('../img/02n.png'),
	'03n' : require('../img/03n.png'),
	'04n' : require('../img/04n.png'),
	'09n' : require('../img/09d.png'),
	'10n' : require('../img/10n.png'),
	'11n' : require('../img/11d.png'),
	'13n' : require('../img/13d.png'),

	main: {
		'01d' : require('../img/01d.png'),
		'02d' : require('../img/main03d.png'),
		'03d' : require('../img/main03d.png'),
		'04d' : require('../img/main04d.png'),
		'09d' : require('../img/09d.png'),
		'10d' : require('../img/10d.png'),
		'11d' : require('../img/11d.png'),
		'13d' : require('../img/13d.png'),

		'01n' : require('../img/01n.png'),
		'02n' : require('../img/02n.png'),
		'03n' : require('../img/03d.png'),
		'04n' : require('../img/04d.png'),
		'09n' : require('../img/09d.png'),
		'10n' : require('../img/10d.png'),
		'11n' : require('../img/11d.png'),
		'13n' : require('../img/13d.png'),
	}
}

export const setImg = (img, main = false) => {
	if (main) {
		return IMG.main.[img];
	} else {
		if (!IMG.[img]) {
			return require('../img/01d.png');
		}
		return IMG.[img]
	}
}