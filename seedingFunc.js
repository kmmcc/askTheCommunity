const fs = require('fs')
const faker = require('faker');

//write something that makes tons of random data
//write it to a file
//copy that to sql

const questionGenerator = () => {

  const bank1 = ['Who', 'What', 'Where', 'When', 'Why']
  const bank2 = ['does', 'will', `won\'t`, 'doesn\'t', 'isn\'t', 'creates', 'jumps', 'applies', 'flips', 'joins', 'adopts', 'runs', 'salts', 'pairs', 'commences', 'tries', 'starts', 'spins', 'rolls', 'cleans']
  const bank3 = ['my friend', 'kick', 'the food', 'the seating', 'the kitchen', 'the cook', 'the dog', 'the cat', 'the mayor', 'bicycle', 'a spatula', 'the waiter', 'the silverware', 'a spork', 'the chicken', 'the salad', 'the food', 'the light', 'a guest', 'customers', 'his friend', 'her friend', 'the bread', 'the sauce', 'the salt']
  const bank4 = ['now', 'pretend', 'cook', 'sit', 'marinate', 'create', 'spend', 'split', 'fry', 'dice', 'boil', 'broil', 'simmer', 'bake', 'sit']

  let word1 = bank1[Math.floor(Math.random() * bank1.length)]
  let word2 = bank2[Math.floor(Math.random() * bank2.length)]
  let word3 = bank3[Math.floor(Math.random() * bank3.length)]
  let word4 = bank4[Math.floor(Math.random() * bank4.length)]

  let question = word1 + ' ' + word2 + ' ' + word3 + ' ' + word4 + '?'

  return question;

}

const createSQLQuestions = () => {
  
  let counter = 0
  const stream = fs.createWriteStream('/Users/kylemccarty/Desktop/gitTest/askTheCommunity/database/seed_data/questions.txt')

  while (counter <= 10) {
    //create user-id, restaurant_id, text, parent_id, helpful, createdat, updatedat
    let userId = Math.floor(Math.random() * 100)
    let restaurantId = Math.floor(Math.random() * 1000)
    let text = questionGenerator()

    let parentId = null
    let helpful = Math.floor(Math.random() * 100)
    
    let monthTime = 2628000000
    let monthRandomizer = (monthTime * 3) * Math.random()

    let createdat = new Date(Date.now() + monthRandomizer) + ''
    let updatedat = createdat

    let sqlStatement = `INSERT INTO questions (user_id, restaurant_id, text, parent_id, helpful, createdat, updatedat) VALUES (${userId}, ${restaurantId}, ${text}, ${parentId}, ${helpful}, ${createdat}, ${updatedat}) \n`

    stream.write(sqlStatement)

    counter++
    //use faker
    //use questionGenerator
    //fs write result to questions.txt
  }

}

createSQLQuestions()


//a function that invokes questionGenerator for each question
//uses faker for restaurant ID and user name
//serve lorem flickr pictures to s3
//
//FORMAT (postgres w/ sequelize) --- INSERT INTO questions  (user_id, restaurant_id, text, parent_id, helpful, createdat, updatedat) VALUES (1, 1, 'I am Batman?', null, 6, current_timestamp, current_timestamp);