var request = require('request');
const { Given, When, Then } = require('cucumber');
const assert = require('assert');

var saveJson;
 

When('I make an API call using callbacks',function(callback){
            request('https://restcountries.eu/rest/v2/name/colombia', (err,response, body) => {
                if (err) {
                    callback(err);
                } else {
                    country=JSON.parse(body);
                    callback();
                    }
                });
            });
	
 Then('the request was successfull in a json',function(callback){
        console.log(country);
        callback();
        return country;
    })