"use strict"

require("dotenv").config();

const { Client } = require("pg");

let client = new Client()
client.connect()


console.log(process.env.PGHOST);

//creating database

const createdb = async () =>{ 
	
	try {
		const query = await client.query(
			`CREATE DATABASE visitorlog;`
        )
		console.log(query)
		await client.end()
	} catch(e) {
		console.log(e);
		await client.end()
	}
}
// createdb();

//creating the table

const createTable = async () =>{ 
	
	try {
		const query = await client.query(
			`CREATE TABLE IF NOT EXISTS 
				visitors(
                    visitorID SERIAL NOT NULL,
                    visitorName varchar(50),
                    visitorAge int,
                    dateOfVisit date,
                    timeOfVisit time,
                    nameOfAssistant varchar(50),
                    comments varchar,
                    PRIMARY KEY(visitorID));`
        )
		console.log(query)
		await client.end()
	} catch(e) {
		console.log(e);
		await client.end()
	}
}

//createTable()

//display content of table
const displayAll  = async() =>{
	let text, values, query;
	text = `select * From visitors`
	
	try {
		query = await client.query(text,values)
		console.log(query.rows)
		await client.end()
	} catch(e) {
		console.log(e);
		await client.end()
	}
}

// Insert the content
const addContent  = async() =>{
	let text, values, query;
	values = ['Kgaugelo', 27, '02/02/2020', '10:38', 'Portia', 'No comment']
	text = `INSERT INTO 
				visitors(
                    visitorName,
                    visitorAge,
                    dateOfVisit,
                    timeOfVisit,
                    nameOfAssistant,
                    comments) 
				VALUES($1,$2, $3, $4, $5, $6) 
				RETURNING *`
	
	
	try {
		query = await client.query(text,values)
		console.log(query.rows)
		await client.end()
	} catch(e) {
		console.log(e);
		await client.end()
	}
}
//addContent();

// delete visitor from list
const deleteContent  = async() =>{
	let text, values, query;
	text = `DELETE FROM visitors WHERE visitorID = 3`

	
	try {
		query = await client.query(text,values)
		console.log(query.rows)
		await client.end()
	} catch(e) {
		console.log(e);
		await client.end()
	}
}
//deleteContent();

// update visitor log

const updateContent  = async() =>{
	let text, values, query;
	text = ` Update visitors
   			 SET nameOfAssistant = 'Kgaugelo', comments = 'It is a nice building'
    		 WHERE visitorID = 1 `

	
	try {
		query = await client.query(text,values)
		console.log(query.rows)
		await client.end()
	} catch(e) {
		console.log(e);
		await client.end()
	}
}

//updateContent();

//display content of a single visitor
const displayOneContent  = async() =>{
	let text, values, query;
	text = `select * From visitors WHERE visitorID = 01`
	
	try {
		query = await client.query(text,values)
		console.log(query.rows)
		await client.end()
	} catch(e) {
		console.log(e);
		await client.end()
	}
}
//displayOneContent();

//delete all visitors
const deleteall  = async() =>{
	let text, values, query;
	text = `delete From visitors`
	
	try {
		query = await client.query(text,values)
		console.log(query.rows)
		await client.end()
	} catch(e) {
		console.log(e);
		await client.end()
	}
}

deleteall();

module.exports = {
	createdb,
	addContent,
	createTable,
	displayAll,
	updateContent,
	displayOneContent,
	deleteall

}