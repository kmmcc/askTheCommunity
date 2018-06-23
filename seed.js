const fs = require(fs)

//write something that makes tons of random data
//write it to a file
//copy that to sql

const questionGenerator = () => {

  const bank1 = ['Who', 'What', 'Where', 'When', 'Why']
  const bank2 = ['does', 'will', `won\'t`, 'doesn\'t', 'isn\'t', 'creates', 'jumps', 'applies', 'flips', 'joins', 'adopts', 'runs', 'salts', 'pairs']
  const bank3 = ['my friend', 'kick', 'the food', 'the seating', 'the kitchen', 'the cook', 'her friend', 'his friend', 'the mayor', 'bicycle', 'a spatula', 'the waiter', 'the silverware', 'a spork', 'the chicken', 'the salad']
  const bank4 = ['now', 'pretend', 'cook', 'eat', 'sit', 'marinate', 'taste', 'create', 'spend', 'split', 'fry', 'dice', 'boil']

  let word1 = bank1[Math.floor(Math.random() * bank1.length)]
  let word2 = bank2[Math.floor(Math.random() * bank2.length)]
  let word3 = bank3[Math.floor(Math.random() * bank3.length)]
  let word4 = bank4[Math.floor(Math.random() * bank4.length)]

  let question = word1 + ' ' + word2 + ' ' + word3 + ' ' + word4 + '?'

  return question;

}