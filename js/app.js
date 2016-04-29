(function () {
	var rubyGem = {
		name: "Ruby",
		price: "$372",
		source: "img/rubyring.jpg",
		description: "A ruby is a pink to blood-red colored gemstone, a variety of the mineral corundum (aluminium oxide). The red color is caused mainly by the presence of the element chromium. Its name comes from ruber, Latin for red. Other varieties of gem-quality corundum are called sapphires. Ruby is considered one of the four precious stones, together with sapphire, emerald and diamond."
	};
	var sapphireGem = {
	name: "Sapphire",
	price: "$562",
	source: "img/sapphirering.png",
	description: "Sapphire (Greek: σάπφειρος; sappheiros, 'blue stone', itself derived from Sanskrit 'ShaniPriya' which probably referred instead at the time to lapis lazuli) is a typically blue gemstone variety of the mineral corundum, an aluminium oxide (α-Al2O3). Trace amounts of elements such as iron, titanium, chromium, copper, or magnesium can give corundum respectively blue, yellow, purple, orange, or green color. Chromium impurities in corundum yield pink or red tint, the latter being called ruby."
	};
	var emeraldGem = {
		name: "Emerald",
		price: "$423",
		source: "img/emeraldring.jpg",
		description: "Emerald is a gemstone and a variety of the mineral beryl colored green by trace amounts of chromium and sometimes vanadium. Beryl has a hardness of 7.5–8 on the Mohs scale. Most emeralds are highly included, so their toughness (resistance to breakage) is classified as generally poor. It is a cyclosilicate."
	};



	var app = angular.module("gemStore", []);
	app.controller("GemController", function () {
		this.ruby = rubyGem;
		this.sapphire = sapphireGem;
		this.emerald = emeraldGem;
	});
})();