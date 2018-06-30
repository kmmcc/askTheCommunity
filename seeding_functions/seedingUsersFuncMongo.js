const fs = require('fs')
const faker = require('faker')

const stream = fs.createWriteStream('/Users/kylemccarty/Desktop/gitTest/askTheCommunity/database/db_mongo/seed_data/mongousers.csv')

const mongoUserGenerator = () => {

  let target = 100000
  let id = 1
  counter = 0

  while (counter <= target) {

    let username = faker.name.findName()
    let imageurl = faker.image.avatar()

    let user = `${id}, ${username}, ${imageurl} \n`

    stream.write(user)

    counter ++
    id ++
  }
}

mongoUserGenerator()