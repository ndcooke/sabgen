function charGen() {
    var race;
    var background;
    var str;
    var dex;
    var con;
    var int;
    var wis;
    var cha;
    var hp = 0;
    var sp;
    var weapon = "club";
    var trinket;
    var luckyCharm;

    var r = roll(20);
    if (r <= 8) {
        race = "Human";
        hp = 0.5;
    } else if (r <= 18) {
        var nh = roll(20);
        if (nh <= 2) {
            race = "Hill Dwarf";
            hp = 1;
        } else if (nh <= 4) { 
            race = "Mountain Dwarf";
            hp = 1;
        } else if (nh <= 6) { 
            race = "High Elf";
        } else if (nh <= 8) { 
            race = "Wood Elf";
        } else if (nh <= 9) { 
            race = "Half-Elf";
        } else if (nh <= 10) { 
            race = "Half-Orc";
            hp = 0.5;
        } else if (nh <= 12) { 
            race = "Lightfoot Halfling";
        } else if (nh <= 14) { 
            race = "Stout Halfling";
            hp = 0.5;
        } else if (nh <= 16) { 
            race = "Forest Gnome";
        } else if (nh <= 18) { 
            race = "Rock Gnome";
            hp = 0.5;
        } else if (nh <= 19) { 
            race = "Tiefling";
        } else if (nh <= 20) { 
            race = "Dragonborn";
        }
    } else if (r <= 20) {
        var vh = roll(20);
        if (vh <= 2) {
            race = "Aasimar";
        } else if (vh <= 5) {
            race = "Firbolg";
        } else if (vh <= 8) {
            race = "Goliath";
        } else if (vh <= 9) {
            race = "Kenku";
        } else if (vh <= 13) {
            race = "Lizardfolk";
            hp = 1;
        } else if (vh <= 18) {
            race = "Tabaxi";
        } else if (vh <= 20) {
            race = "Triton";
            hp = 0.5;
        }
    }

    var br = roll(20);
    if (br <= 1) {
        background = "Acolyte";
    } else if (br <= 2) {
        background = "Charlatan";
        weapon = "dagger";
    } else if (br <= 4) {
        background = "Criminal";
        weapon = "dagger";
    } else if (br <= 7) {
        background = "Entertainer";
    } else if (br <= 10) {
        background = "Folk Hero";
        weapon = "light crossbow";
    } else if (br <= 13) {
        background = "Guild Artisan";
    } else if (br <= 14) {
        background = "Hermit";
    } else if (br <= 15) {
        background = "Noble";
        weapon = "shortsword";
    } else if (br <= 16) {
        background = "Outlander";
        weapon = "quarterstaff";
    } else if (br <= 17) {
        background = "Sage";
        weapon = "dagger";
    } else if (br <= 18) {
        pr = roll(3);
        if (pr == 1) {
            background = "Pirate";
        } else {
            background = "Sailor";
        }
        weapon = "dagger";
    } else if (br <= 19) {
        background = "Soldier";
        weapon = "longsword";
    } else if (br <= 20) {
        background = "Urchin";
        weapon = "sling";
    }

    str = roll3d6();
    dex = roll3d6();
    con = roll3d6();
    int = roll3d6();
    wis = roll3d6();
    cha = roll3d6();

    hp += ((con - 10) / 2) + roll(4);
    hp = Math.max(1,Math.trunc(hp));
    sp = roll(4);
	trinket = getTrinket();


    var out = `<br>${race} ${background}, STR ${str}, DEX ${dex}, CON ${con}, INT ${int}, WIS ${wis}, CHA ${cha}, HP ${hp}, Inv: ${sp} sp, ${weapon}, ${trinket}`;
	if (background == "Pirate") {
		luckyCharm = getTrinket();
        out += `, ${luckyCharm} (lucky charm)`;
	}
    document.getElementById('char').innerHTML += out;
}


function roll(size) {
    var x = Math.max(1, Math.floor(rando() * (size + 1)));
    console.log(`1d${size}=${x}`);
    return x;
}

function roll3d6() {
    var x = roll(6) + roll(6) + roll(6);
    return x;
}

function getTrinket() {
    var x = Math.floor(rando() * trinkets.length);
    return trinkets[x];
}


var trinkets=[
    `a mummified goblin hand`,
    `a piece of crystal that faintly glows in the moonlight`,
    `a gold coin minted in an unknown land`,
    `a diary written in a language you don’t know`,
    `a brass ring that never tarnishes`,
    `an old chess piece made from glass`,
    `a pair of knucklebone dice, each with a skull symbol on the side that would normally show six pips`,
    `a small idol depicting a nightmarish creature that gives you unsettling dreams when you sleep near it`,
    `a rope necklace from which dangles four mummified elf fingers`,
    `the deed for a parcel of land in a realm unknown to you`,
    `a 1-ounce block made from an unknown material`,
    `a small cloth doll skewered with needles`,
    `a tooth from an unknown beast`,
    `an enormous scale, perhaps from a dragon`,
    `a bright green feather`,
    `an old divination card bearing your likeness`,
    `a glass orb filled with moving smoke`,
    `a 1-pound egg with a bright red shell`,
    `a pipe that blows bubbles`,
    `a glass jar containing a weird bit of flesh floating in pickling fluid`,
    `a tiny gnome-crafted music box that plays a song you dimly remember from your childhood`,
    `a small wooden statuette of a smug halfling`,
    `a brass orb etched with strange runes`,
    `a multicolored stone disk`,
    `a tiny silver icon of a raven`,
    `a bag containing forty-seven humanoid teeth, one of which is rotten`,
    `a shard of obsidian that always feels warm to the touch`,
    `a dragon's bony talon hanging from a plain leather necklace`,
    `a pair of old socks`,
    `a blank book whose pages refuse to hold ink, chalk, graphite, or any other substance or marking`,
    `a silver badge in the shape of a five-pointed star`,
    `a knife that belonged to a relative`,
    `a glass vial filled with nail clippings`,
    `a rectangular metal device with two tiny metal cups on one end that throws sparks when wet`,
    `a white, sequined glove sized for a human`,
    `a vest with one hundred tiny pockets`,
    `a small, weightless stone block`,
    `a tiny sketch portrait of a goblin`,
    `an empty glass vial that smells of perfume when opened`,
    `a gemstone that looks like a lump of coal when examined by anyone but you`,
    `a scrap of cloth from an old banner`,
    `a rank insignia from a lost legionnaire`,
    `a tiny silver bell without a clapper`,
    `a mechanical canary inside a gnome-crafted lamp`,
    `a tiny chest carved to look like it has numerous feet on the bottom`,
    `a dead sprite inside a clear glass bottle`,
    `a metal can that has no opening but sounds as if it is filled with liquid, sand, spiders, or broken glass (your choice)`,
    `a glass orb filled with water, in which swims a clockwork goldfish`,
    `a silver spoon with an M engraved on the handle`,
    `a whistle made from gold-colored wood`,
    `a dead scarab beetle the size of your hand`,
    `two toy soldiers, one with a missing head`,
    `a small box filled with different-sized buttons`,
    `a candle that can't be lit`,
    `a tiny cage with no door`,
    `an old key`,
    `an indecipherable treasure map`,
    `a hilt from a broken sword`,
    `a rabbit’s foot`,
    `a glass eye`,
    `a cameo carved in the likeness of a hideous person`,
    `a silver skull the size of a coin`,
    `an alabaster mask`,
    `a pyramid of sticky black incense that smells very bad`,
    `a nightcap that, when worn, gives you pleasant dreams`,
    `a single caltrop made from bone`,
    `a gold monocle frame without the lens`,
    `a 1-inch cube, each side painted a different color`,
    `a crystal knob from a door`,
    `a small packet filled with pink dust`,
    `a fragment of a beautiful song, written as musical notes on two pieces of parchment`,
    `a silver teardrop earring made from a real teardrop`,
    `the shell of an egg painted with scenes of human misery in disturbing detail`,
    `a fan that, when unfolded, shows a sleeping cat`,
    `a set of bone pipes`,
    `a four-leaf clover pressed inside a book discussing manners and etiquette`,
    `a sheet of parchment upon which is drawn a complex mechanical contraption`,
    `an ornate scabbard that fits no blade you have found so far`,
    `an invitation to a party where a murder happened`,
    `a bronze pentacle with an etching of a rat's head in its center`,
    `a purple handkerchief embroidered with the name of a powerful archmage`,
    `half of a floorplan for a temple, castle, or some other structure`,
    `a bit of folded cloth that, when unfolded, turns into a stylish cap`,
    `a receipt of deposit at a bank in a far-flung city`,
    `a diary with seven missing pages`,
    `an empty silver snuffbox bearing an inscription on the surface that says "dreams"`,
    `an iron holy symbol devoted to an unknown god`,
    `a book that tells the story of a legendary hero's rise and fall, with the last chapter missing`,
    `a vial of dragon blood`,
    `an ancient arrow of elven design`,
    `a needle that never bends`,
    `an ornate brooch of dwarven design`,
    `an empty wine bottle bearing a pretty label that says, "The Wizard of Wines Winery, Red Dragon Crush, 331422-W"`,
    `a mosaic tile with a multicolored, glazed surface`,
    `a petrified mouse`,
    `a black pirate flag adorned with a dragon's skull and crossbones`,
    `a tiny mechanical crab or spider that moves about when it’s not being observed`,
    `a glass jar containing lard with a label that reads, "Griffon Grease"`,
    `a wooden box with a ceramic bottom that holds a living worm with a head on each end of its body`,
    `a metal urn containing the ashes of a hero`,
    `a small round coin with a hole in it made of a strange black metal`,
    `a tiny doll depicting a blonde, blue eyes child, when placed down it's eyes appear to follow people`,
    `a piece of cloth that absorbs any material staining it, becoming fully clean over the course of an hour`,
    `a facsimilé of a human skull made from interwoven oak twigs`,
    `a small charm made out of seashells strung onto a piece of leather thonging`,
    `a whistle made from the shell of a large mollusc`,
    `a piece of stone that changes colour based on the mood of it's owner`,
    `the preserved skull of a corvid`,
    `a hessian sack full of bird feathers in the most fantastic colours imaginable`,
    `metal rank insignia from an ancient kingdom or war`,
    `a silver thimble engraved with the image of a rose`,
    `a reel of thread that never frays`,
    `a metal tankard with the sign of a hammer and the initials T. E. engraved on it`,
    `a set of bamboo windchimes`,
    `three primitive, flint arrowheads`,
    `an ivory comb that when used changes a person's hair colour`,
    `a wax seal stamp with the design of a crown on it`,
    `a stick of bright green sealing wax that smells like rosemary`,
    `a bundle of fragrant smelling herbs that, when burnt, release a relaxing aroma`,
    `a rough map that shows the local area but occasionally changes to show an unfamiliar continent`,
    `a strange idol of blackened glass that sometimes glows with an inner blue light`,
    `a flint and tinder that causes any fires light with it to be purple in colour`,
    `a list of people's names, it gets to four people and then the fifth is smudged and crossed through`,
    `a set of tarot cards depicting each figure on the cards as a skeleton`,
    `a wizened, shrunken head`,
    `a small tin containing fish eggs`,
    `a small violin that is missing all but one of it's strings, remarkably when played it sounds as though the other strings are present`,
    `a wolf-skin fur cloak that sometimes causes the wearer to growl under his breath`,
    `an amulet depicting the Orc god Gruumsh, anyone who wears it finds themselves compelled to keep one of their eyes closed`,
    `a parchment showing the constellations in the night sky`,
    `a crystal ball, when looked into the person sees themselves reflected but looking 10 years younger`,
    `a horseshoe that never becomes worn or needs replacing`,
    `a tankard that is capable of changing a drink poured into another drink of similar potency (ale into stout for instance)`,
    `a goin coin that always comes up heads when flipped`,
    `a set of bone dice that emit an eerie cackling when rolled`,
    `a club made out of a twisted ogres thigh bone`,
    `a small, wooden toy horse`,
    `a crystal that refracts the light strangely and has an odd dark deposit at it's centre`,
    `a religious icon that once belonged to an ancestor`,
    `a small empty book wrapped in a red velvet covering, embroidered with a the sign of an open hand`,
    `a clothes brush that can clean a set of clothes just by touching it`,
    `a twisting brass horn that produces a haunting melody when blow`,
    `a map of a fictional city, anyone who sleeps near the map dreams of exploring a fantastic city`,
    `a single rose, the colour of blood that never seems to wither or require water`,
    `a metal chisel that never goes blunt`,
    `a set of childs wooden building blocks, when left on their own unobserved they occasional spell out words`,
    `three triangular platiunum coins bearing the marks of an unknown kingdom`,
    `a pearl necklace, when there is an eclipse the pearls change from white to a black colour`,
    `a small handkerchief that is capable of absorbing and holding four pints of fluid, it can be wrung out at any time to release the fluid`,
    `a tin of purple powder, when the powder comes into contact with blood it glows for ten minutes`,
    `a fake moustache, when worn it adheres to the wearer and has to be shaved off`,
    `a set of comfortable house sleepers that keep the wearers feet at an ideal temperature`,
    `a set of toy metal soldiers, each immaculately modelled to depict the livery of some forgotten nation`,
    `the fire-blackened claw of some great beast`,
    `a small stuffed vole`,
    `the playbook from a performance where many of the audience died in a suspicious fire`,
    `the script for a never-published play about an author going mad, the writing gets noticably less neat and more frantic, eventually stopped before the final page`,
    `a roll of old, bandage that has been inked with strange pictograms`,
    `a small glass jar containing a vibrant blue dye that stains the skin for many days`,
    `a tin whistle on a chain, there is a single goose feather attached to the chain`,
    `a small pillow stuffed with soft feathers`,
    `a bedroll that seems to change it's colouration slightly to match the environment`,
    `a leather pouch containing irregular iron nails, some of them bent out of shape as though used`,
    `the pickled tentacle of an illithid`,
    `a glass jar that appears to contain boiled cabbage, vinegar and several spices`,
    `a tapestry depicting a mythological scene`,
    `a set of spectacles that give everything an amber hue when worn`,
    `a red woolen cap that appears to be stained with blood`,
    `a set of leather riding gloves with the initials J. M. branded onto them`,
    `a bone knife and fork`,
    `an ivory plague mask, the beak stuffed with fragrant poseys`,
    `an oddly shaped, small stuffed toy depicting a goblin, sometimes it seems to wink at the owner`,
    `a quill with a small ink reserve carved into it`,
    `a small glass orb containing sea water, it grows murky when their will be a storm at sea`,
    `a lantern that glows black, making previously lit places dark`,
    `an artificial nose made of copper that has a leather thong attached to it`,
    `a wide cap made from the preserved remains of a Flumph`,
    `a woolen scarf that is knitted with the words of an ancient elven prayer`,
    `a lock of white drow hair`,
    `a pamphlet for Irytor's World of the Spectacular, the phrase 'closing down' has been scrawled on it in faded ink`,
    `a sloughed off piece of snakeskin that has words written on it in a strange language`,
    `an apparently empty green glass bottle that is sealed with red wax`,
    `a locket containing a picture of young halfling couple`,
    `the stuffed and preserved head of a gnoll`,
    `a small pot containing yellow ink, when used it is barely readable but becomes progressively darker as time passes until eventually it is black`,
    `a series of fortune-tellers ivory tiles with letters from the common alphabet inked onto them`,
    `a preserved eyeball with a label attached saying 'Eye of Lich.'`,
    `a small set of pruning shears`,
    `a glass jar containing a harmless clear gel, the jar is labelled in dwarvish as 'Gelatinous Cube – Deceased.'`,
    `a piece of black stained parchment that pertains to be a map of the Underdark`,
    `a brooch made of elven silver that seems to flow to fit the contours of the wearer`,
    `a small leather pouch of pebbles that rattles audibly whenever there is an avalanche or significant other geological movement about to occur in the area`,
    `a halfling sized set of breeches`,
    `a wooden dresser with a secret compartment`,
    `a metal branding iron showing the design of a dragon's wing`,
    `a blunt carving knife with the word 'toothpick' in the language of giants carved into the handle`,
    `a sack of Owlbear feathers`,
    `a walking cane topped with a metal sculpture of a hydra`,
    `a belt made from the preserved tentacle of a Displacer Beast`,
    `an ash divining rod that twitches when water is close`
]
