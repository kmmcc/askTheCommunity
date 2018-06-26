const fs = require('fs')

const questionGenerator = () => {

  const bank1 = ['How', 'What', 'Where', 'When', 'Why']
  const bank2 = ['does', 'will', `won\'t`, 'doesn\'t', 'isn\'t', 'creates', 'jumps', 'applies', 'flips', 'joins', 'adopts', 'runs', 'salts', 'pairs', 'commences', 'tries', 'starts', 'spins', 'rolls', 'cleans']
  const bank3 = ['the butter', 'the food', 'the seating', 'the kitchen', 'the water', 'the fish', 'a sandwich', 'the pasta', 'the drinks', 'a spatula', 'vegetables', 'the silverware', 'a spork', 'the chicken', 'the salad', 'the food', 'the light', 'the bowls', 'the falafel', 'the rice', 'the lettuce', 'the bread', 'the sauce', 'the salt']
  const bank4 = ['taste', 'taste like', 'look', 'bake', 'marinate', 'simmer', 'smell', 'stir']

  let word1 = bank1[Math.floor(Math.random() * bank1.length)]
  let word2 = bank2[Math.floor(Math.random() * bank2.length)]
  let word3 = bank3[Math.floor(Math.random() * bank3.length)]
  let word4 = bank4[Math.floor(Math.random() * bank4.length)]

  let question = word1 + ' ' + word2 + ' ' + word3 + ' ' + word4 + '?'

  return question;

}

const createSQLQuestions = () => {
  let target = 10000000
  let counter = 0
  const stream = fs.createWriteStream('/Users/kylemccarty/Desktop/gitTest/askTheCommunity/database/seed_data/questions.txt')

  const questioner = () => { 
    let checker = true
    while (counter <= target && checker === true) {

      let userId = Math.floor(Math.random() * 100)
      let restaurantId = Math.floor(Math.random() * 1000)
      let text = questionGenerator()

      let parentId = null
      let helpful = Math.floor(Math.random() * 100)
      
      let monthTime = 2628000000
      let monthRandomizer = (monthTime * 3) * Math.random()

      let createdat = new Date(Date.now() + monthRandomizer) + ''
      let updatedat = createdat

      let sqlStatement = `${userId}, ${restaurantId}, ${text}, ${parentId}, ${helpful}, ${createdat}, ${updatedat} \n`

      checker = stream.write(sqlStatement)
      
      counter++
    }
      if (counter <= target) {
        stream.once('drain', questioner)
      }
  }
  questioner()
}

createSQLQuestions()

//INSERT INTO questions  (user_id, restaurant_id, text, parent_id, helpful, createdat, updatedat) VALUES (1, 1, 'I am Batman?', null, 6, current_timestamp, current_timestamp);