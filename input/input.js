var user = {
    name: '',


    currentPreferences: { // would allow us to call using user.currentPreferences['color'][0-1] (see database.findBeersWithBoth() method)
        color: ['min', 'max'],
        abv: [],
        bitterness: []
    },

    previousPreferences: [], // could just hold all the previous preferences; current prefs are push on after each session

    /*local storage methods*/
    // submit: document.getElementById(),

    // prefHandler: function() {
    //     user.currentPreferences
    //     preferencesToLS('beer', this.currentPreferences);
    // },
    getPreviousPreferences: function() {
        return JSON.parse(localStorage.getItem('preferences'));
    },

    mergePreferences: function() {
        this.previousPreferences.push(this.currentPreferences);
    },
    preferencesToLS: function() {
        var str = JSON.stringify(this.currentPreferences);
        localStorage.setItem('preferences', str);
    }
}
// user.submit.addEventListener('click', prefHandler, true);

var beers = []; // array for beer objects
function Beer(style, color, abv, bitter, idNum) { // beer object constructor
    this.style = style; // string name eg 'IPL'
    this.idNum = idNum;
    this.color = color; // 2 element array with [min, max] values
    this.abv = abv; // 2 element array with [min, max] values
    this.bitterness = bitter; // 2 element array with [min, max] values
    // this.example = examples;

    beers.push(this);
}

Beer.prototype.isInRange = function(parameter, min, max) { // parameter(string), min & max(numbers)
    // is there a way to make this outside of the constuctor? 
    if (min <= this[parameter] && this[parameter] <= max) { // if the beer's value for the given property is 
        return true; // between the desired min and max values,
    } // return true, otherwise return false.
    return false;
};

function compileBeers() { // use Beer constructor to put beers and their properties into beer array
    // for(var i = 0; i < styles.length; i++) { // repeat for all styles
    //     beers[i] = new this.Beer(styles[i], idNums[i], colors[i], abvs[i], bitternesses[i], examples[i]);
    // }

    //                      name              color  abv  bitt  ID
    new Beer('Lite American Lager', '1', '2', '1', '01');
    new Beer('American Lager', ' 1', '3', '1', '02');
    new Beer('Cream Ale', '1', '3', '1', '03');
    new Beer('American Wheat Beer', '2', '3', '2', '04');
    new Beer('International Pale Lager', '1', '3', '2', '05');
    new Beer('International Amber Lager', '3', '3', '1', '06');
    new Beer('International Dark Lager', '4', '1', '3', '07');
    new Beer('Czech Pale Lager', '2', '2', '2', '08');
    new Beer('Czech Premium Pale Lager', '2', '2', '3', '09');
    new Beer('Czech Amber Lager', '3', '3', '2', '10');
    new Beer('Czech Dark Lager', '5', '3', '2', '11');
    new Beer('Munich Helles', '1', '3', '2', '12');
    new Beer('Festbier', '2', '4', '2', '13');
    new Beer('Hells Bock', '2', '4', '2', '14');
    new Beer('German Leichtbier', '1', '2', '2', '15');
    new Beer('Kolsch', '1', '3', '2', '16');
    new Beer('German Exportbier', '2', '3', '2', '17');
    new Beer('Gerna Pils', '1', '3', '2', '18');
    new Beer('Marzen', '3', '4', '2', '19');
    new Beer('Rauchbier', '3', '2', '3', '20');
    new Beer('DunkelsBock', '4', '4', '2', '21');
    new Beer(' Vienna Lager', '3', '3', '2', '22');
    new Beer('Altbier', '3', '3', '2', '23');
    new Beer('Munich Dunkel', '4', '3', '2', '24');
    new Beer('Schwarzbier', '5', '3', '2', '25');
    new Beer('Doppelbock', '3', '2', '5', '26');
    new Beer('Baltic Porter', '5', '5', '2', '27');
    new Beer('Weizen/Weissbier', '1', '3', '1', '28');
    new Beer('Dunkels Weissbier', '4', '3', '1', '29');
    new Beer('Weizenbock', '3', '4', '2', '30');
    new Beer('Ordinary Bitter', '2', '2', '2', '31');
    new Beer('Best Bitter', '3', '5', '2', '32');
    new Beer('Strong Bitter', '3', '3', '3', '33');
    new Beer('English Golden Ale', '1', '3', '2', '34');
    new Beer('Australian Sparkling Ale', '2', '3', '2', '35');
    new Beer('English IPA', '2', '4', '3', '36');
    new Beer('Dark Mild', '4', '2', '1', '37');
    new Beer('English Brown Ale', '3', '5', '2', '38');
    new Beer('English Brown Porter', '5', '3', '2', '39');
    new Beer('Scottish Light', '4', '2', '1', '40');
    new Beer('Scottish Heavy', '4', '2', '1', '41');
    new Beer('Scottish Export', '4', '3', '2', '42');
    new Beer('Irish Red Ale', '3', '3', '2', '43');
    new Beer('Irish Stout', '5', '3', '2', '44');
    new Beer('Irish Extra Stout', '5', '4', '3', '45');
    new Beer('Sweet Stout', '5', '3', '2', '46');
    new Beer('Oatmeal Stout', '5', '3', '2', '47');
    new Beer('Tropical Stout', '5', '5', '3', '48');
    new Beer('Foreign Extra Stout', '5', '4', '4', '49');
    new Beer('English Strong Ale', '3', '4', '3', '50');
    new Beer('Old Ale', '3', '4', '3', '51');
    new Beer('Wee Heavy', '4', '5', '2', '52');
    new Beer('English Barleywine', '3', '5', '3', '53');
    new Beer('Blond Ale', '1', '3', '2', '54');
    new Beer('American Pale Ale', '2', '3', '3', '55');
    new Beer('American Amber Ale', '3', '3', '2', '56');
    new Beer('California Common', '3', '3', '2', '57');
    new Beer('American Brown Ale', '5', '3', '2', '58');
    new Beer('American Porter', '5', '3', '2', '59');
    new Beer('American Stout', '5', '4', '4', '60');
    new Beer('Imperial Stout', '5', '5', '4', '61');
    new Beer('American IPA', '3', ' 4', '3', '62');
    new Beer('Double IPA', '3', '5', '5', '63');
    new Beer('American Strong Ale', '3', '5', '4', '64');
    new Beer('American Barleywine', '3', '5', '4', '65');
    new Beer('Weatwine', '3', '5', '3', '66');
    new Beer('Berliner Weisse', '1', '2', '1', '67');
    new Beer('Flanders Red Ale', '3', '3', '1', '68');
    new Beer('Oud Bruin', '4', '4', '2', '69');
    new Beer('Lambic', '2', '3', '1', '70');
    new Beer('Gueuze', '2', '4', '1', '71');
    new Beer('Fruit Lambic', '2', '4', '1', '72');
    new Beer('Witbier', '1', '3', '1', '73');
    new Beer('Belgian Pale Ale', '2', '3', '2', '74');
    new Beer('Biere de Garde', '3', '4', '2', '75');
    new Beer('Belgian Blond Ale', '2', '4', '2', '76');
    new Beer('Saisan (Standard)', '3', '4', '2', '77');
    new Beer('Belgian Golden Strong Ale', '2', '5', '2', '78');
    new Beer('Belgian Single', '1', '3', '2', '79');
    new Beer('Belgian Dubbel', '1', '4', '2', '80');
    new Beer('Belgian Tripel', '2', '5', '2', '81');
    new Beer('Belgian Dark Strong Ale', '4', '5', '2', '82');
}







/*main object literal, holding beer object array, methods to sort, and methods to push to local storage*/
var database = {
    color_abv: [],
    color_bitterness: [],
    abv_bitterness: [],
    goodAll: [],

    findBeersWithin: function(parameter, min, max) { // finds all beers within the given parameters and returns their (styles or ids?) in an array
        var goodBeers = []; // I'm thinking the array should hold idNum or style for better processing
        for (var i = 0; i < beers.length; i++) { // When the final beers are 
            if (beers[i].isInRange(parameter, min, max)) {
                goodBeers.push(beers[i].idNum);
            }
        }
        return goodBeers;
    },

    findBeersWithinBoth: function(parameterA, parameterB) { // finds all beers that share two parameters and returns an array holding each beer object (or id num?)
        var goodBeersA,
            goodBeersB,
            goodBeersAB = [],

            goodBeersA = this.findBeersWithin(parameterA, user.currentPreferences[parameterA][0], user.currentPreferences[parameterA][1]);
        goodBeersB = this.findBeersWithin(parameterB, user.currentPreferences[parameterB][0], user.currentPreferences[parameterB][1]);

        for (var i = 0; i < goodBeersA.length; i++) {
            for (var j = 0; j < goodBeersB.length; j++) {
                if (goodBeersA[i] === goodBeersB[j]) {
                    goodBeersAB.push(goodBeersA[i]);
                }
            }
        }

        return goodBeersAB;


        var firstParam,
            secondParam;
        if (parameterA === 'color' || parameterB === 'color') {
            firstParam = 'color';
            if (parameterA === 'abv' || parameterB === 'abv') {
                secondParam = 'abv';
            } else {
                secondParam = 'bitterness';
            }
        } else {
            firstParam = 'abv';
            secondParam = 'bitterness';
        }
        database[firstParam + '_' + secondParam] = goodBeersAB;

        return goodBeersAB;
    },

    findBeersWithAll: function() {
        var bestBeers = [];
        for (var i = 0; i < this.color_abv.length; i++) {
            for (var j = 0; j < this.color_bitterness.length; j++) {
                if (this.color_abv[i] === this.color_bitterness[j]) {
                    bestBeers.push(this.color_abv[i]);
                }
            }
        }
        for (var i = 0; i < bestBeers.length; i++) {
            if (!this.abv_bitterness.includes(bestBeers[i])) {
                bestBeers.splice(i, 1);
            }
        }
        this.goodAll = bestBeers;
        return this.goodAll;

    }
}


function test() { // tests all current defined methods for database object
    user.name = 'Ned Stark',
        user.currentPreferences.abv = [2, 3];
    user.currentPreferences.bitterness = [1, 3];
    user.currentPreferences.color = [4, 5];


    compileBeers();

    console.log(database.beers);
    console.log('color + bitterness: ' + database.findBeersWithinBoth('color', 'bitterness')); // should return 1
    console.log('color + abv: ' + database.findBeersWithinBoth('color', 'abv')); // should return 0
    console.log('abv + bitterness: ' + database.findBeersWithinBoth('abv', 'bitterness')); // should return empty array


    console.log('color + abv + bitterness: ' + database.findBeersWithAll());

}

test();