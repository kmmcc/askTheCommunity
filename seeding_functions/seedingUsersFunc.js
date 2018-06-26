const fs = require('fs')
const faker = require('faker')

const stream = fs.createWriteStream('/Users/kylemccarty/Desktop/gitTest/askTheCommunity/database/seed_data/users.txt')

const userGenerator = () => {

  let target = 100000
  counter = 0

  while (counter <= target) {

    let username = faker.name.findName()
    let imageurl = faker.image.avatar()

    let user = `, ${username}, ${imageurl} \n`

    stream.write(user)

    counter ++
  }
}

userGenerator()