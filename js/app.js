(function () {
	/*var rubyGem = {
		name: "Ruby",
		price: "$372",
		source: "img/rubyring.jpg",
		description: "A ruby is a pink to blood-red colored gemstone, a variety of the mineral corundum (aluminium oxide). The red color is caused mainly by the presence of the element chromium. Its name comes from ruber, Latin for red. Other varieties of gem-quality corundum are called sapphires. Ruby is considered one of the four precious stones, together with sapphire, emerald and diamond."
	};
	var sapphireGem = {
		name: "Sapphire",
		price: "$562",
		source: "img/sapphirering.jpg",
		description: "Sapphire (Greek: σάπφειρος; sappheiros, 'blue stone', itself derived from Sanskrit 'ShaniPriya' which probably referred instead at the time to lapis lazuli) is a typically blue gemstone variety of the mineral corundum, an aluminium oxide (α-Al2O3). Trace amounts of elements such as iron, titanium, chromium, copper, or magnesium can give corundum respectively blue, yellow, purple, orange, or green color. Chromium impurities in corundum yield pink or red tint, the latter being called ruby.",
		canPurchase: true
	};
	var emeraldGem = {
		name: "Emerald",
		price: "$423",
		source: "img/emeraldring.jpg",
		description: "Emerald is a gemstone and a variety of the mineral beryl colored green by trace amounts of chromium and sometimes vanadium. Beryl has a hardness of 7.5–8 on the Mohs scale. Most emeralds are highly included, so their toughness (resistance to breakage) is classified as generally poor. It is a cyclosilicate.",
		canPurchase: false
	};*/

	var gems = [
		{
		name: "Ruby",
		price: "$5050",
		source: "img/rubyring.jpg",
		description: "A ruby is a pink to blood-red colored gemstone, a variety of the mineral corundum (aluminium oxide). The red color is caused mainly by the presence of the element chromium. Its name comes from ruber, Latin for red. Other varieties of gem-quality corundum are called sapphires. Ruby is considered one of the four precious stones, together with sapphire, emerald and diamond. Prices of rubies are primarily determined by color. The brightest and most valuable 'red' called blood-red or 'pigeon blood', commands a large premium over other rubies of similar quality.",
		canPurchase: true
		},
		{
		name: "Sapphire",
		price: "$4560",
		source: "img/sapphirering.jpg",
		description: "Sapphire (Greek: σάπφειρος; sappheiros, 'blue stone', itself derived from Sanskrit 'ShaniPriya' which probably referred instead at the time to lapis lazuli) is a typically blue gemstone variety of the mineral corundum, an aluminium oxide (α-Al2O3). Trace amounts of elements such as iron, titanium, chromium, copper, or magnesium can give corundum respectively blue, yellow, purple, orange, or green color. Chromium impurities in corundum yield pink or red tint, the latter being called ruby.",
		canPurchase: true
		},
		{
		name: "Emerald",
		price: "$4200",
		source: "img/emeraldring.jpg",
		description: "Emerald is a gemstone and a variety of the mineral beryl colored green by trace amounts of chromium and sometimes vanadium. Beryl has a hardness of 7.5–8 on the Mohs scale. Most emeralds are highly included, so their toughness (resistance to breakage) is classified as generally poor. It is a cyclosilicate. Before the 20th century, jewelers used the term water, as in 'a gem of the finest water', to express the combination of two qualities: color and clarity. A fine emerald must possess not only a pure verdant green hue as described below, but also a high degree of transparency to be considered a top gem",
		canPurchase: false
		},
		{
		name: "Diamond",
		price: "$8370",
		source: "img/diamondring.jpg",
		description: "In mineralogy, diamond (/ˈdaɪəmənd/ or /ˈdaɪmənd/; from the ancient Greek ἀδάμας – adámas 'unbreakable') is a metastable allotrope of carbon, where the carbon atoms are arranged in a variation of the face-centered cubic crystal structure called a diamond lattice. Diamond is less stable than graphite, but the conversion rate from diamond to graphite is negligible at standard conditions. Diamond is renowned as a material with superlative physical qualities, most of which originate from the strong covalent bonding between its atoms. In particular, diamond has the highest hardness and thermal conductivity of any bulk material. Those properties determine the major industrial application of diamond in cutting and polishing tools and the scientific applications in diamond knives and diamond anvil cells.",
		canPurchase: true
		},
		{
		name: "Amethyst",
		price: "$550",
		source: "img/amethystring.jpg",
		description: "Amethyst is a violet variety of quartz often used in jewelry. The name comes from the Ancient Greek ἀ a- ('not') and μέθυστος méthystos ('intoxicated'), a reference to the belief that the stone protected its owner from drunkenness. The ancient Greeks wore amethyst and made drinking vessels decorated with it in the belief that it would prevent intoxication. It is one of several forms of quartz. Amethyst is a semiprecious stone and is the traditional birthstone for February. Amethyst occurs in primary hues from a light pinkish violet to a deep purple. Amethyst may exhibit one or both secondary hues, red and blue. The best varieties of amethyst can be found in Siberia, Sri Lanka, Brazil and the far East. The ideal grade is called 'Deep Siberian' and has a primary purple hue of around 75–80%, with 15–20% blue and (depending on the light source) red secondary hues",
		canPurchase: true
		},
		{
		name: "Heliodor",
		price: "$423",
		source: "img/heliodorring.jpg",
		description: "Golden beryl can range in colors from pale yellow to a brilliant gold. Unlike emerald, golden beryl has very few flaws. The term 'golden beryl' is sometimes synonymous with heliodor (from Greek hēlios – ἥλιος 'sun' + dōron – δῶρον 'gift') but golden beryl refers to pure yellow or golden yellow shades, while heliodor refers to the greenish-yellow shades. The golden yellow color is attributed to Fe3+ ions.[8][9] Both golden beryl and heliodor are used as gems. Probably the largest cut golden beryl is the flawless 2054-carat stone on display in the Hall of Gems, Washington, D.C., United States.",
		canPurchase: false
		},
		{
		name: "Aquamarine",
		price: "$670",
		source: "img/aquamarinering.jpg",
		description: "Aquamarine (from Latin: aqua marina, 'water of the sea') is a blue or cyan variety of beryl. It occurs at most localities which yield ordinary beryl. The gem-gravel placer deposits of Sri Lanka contain aquamarine. Clear yellow beryl, such as that occurring in Brazil, is sometimes called aquamarine chrysolite.[citation needed] The deep blue version of aquamarine is called maxixe. Maxixe is commonly found in the country of Madagascar. Its color fades to white when exposed to sunlight or is subjected to heat treatment, though the color returns with irradiation. The pale blue color of aquamarine is attributed to Fe2+. Fe3+ ions produce golden-yellow color, and when both Fe2+ and Fe3+ are present, the color is a darker blue as in maxixe.",
		canPurchase: true
		},
		{
		name: "Morganite",
		price: "$510",
		source: "img/morganitering.jpg",
		description: "Morganite, also known as 'pink beryl', 'rose beryl', 'pink emerald', and 'cesian (or caesian) beryl', is a rare light pink to rose-colored gem-quality variety of beryl. Orange/yellow varieties of morganite can also be found, and color banding is common. It can be routinely heat treated to remove patches of yellow and is occasionally treated by irradiation to improve its color. The pink color of morganite is attributed to Mn2+ ions. Pink beryl of fine color and good sizes was first discovered on an island on the coast of Madagascar in 1910. It was also known, with other gemstone minerals, such as tourmaline and kunzite, at Pala, California. In December 1910, the New York Academy of Sciences named the pink variety of beryl 'morganite' after financier J. P. Morgan.",
		canPurchase: false
		},
		{
		name: "Garnet",
		price: "$220",
		source: "img/garnetring.jpg",
		description: "Garnets /ˈɡɑːrnət/ are a group of silicate minerals that have been used since the Bronze Age as gemstones and abrasives. All species of garnets possess similar physical properties and crystal forms, but differ in chemical composition. The different species are pyrope, almandine, spessartine, grossular (varieties of which are hessonite or cinnamon-stone and tsavorite), uvarovite and andradite. The garnets make up two solid solution series: pyrope-almandine-spessartine and uvarovite-grossular-andradite. Garnet species are found in many colors including red, orange, yellow, green, purple, brown, blue, black, pink, and colorless, with reddish shades most common.",
		canPurchase: false
		}
	];



	var app = angular.module("gemStore", []);
	app.controller("GemController", function () {
		this.gems = gems;
/*		this.ruby = rubyGem;
		this.sapphire = sapphireGem;
		this.emerald = emeraldGem;*/
	});
})();