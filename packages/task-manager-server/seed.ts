import { MongoClient, InsertWriteOpResult } from 'mongodb'
import { db } from './src/index'

const seedData = async (
  db: (url?: Readonly<string>) => MongoClient,
  url?: Readonly<string>,
) => {
  const client = db(url)
  await client.connect()
  const database = client.db('mydatabase')
  const tasksRowCount = await database.collection('tasks').countDocuments()
  const usersRowCount = await database.collection('users').countDocuments()
  let tasks: null | InsertWriteOpResult = null
  let users: null | InsertWriteOpResult = null
  if (tasksRowCount === 0) {
    tasks = await database.collection('tasks').insertMany([
      {
        title: 'learn typeorm',
        description: 'better severside development',
        started: new Date(),
        completed: new Date(),
        scheduled: new Date(),
        deadline: new Date(),
      },
      {
        title: 'devfractal',
        description: 'make react simple',
        started: new Date(),
        completed: new Date(),
        scheduled: new Date(),
        deadline: new Date(),
      },
      {
        title: 'learn express-session',
        description: 'useful for basic authentication',
        started: new Date(),
        completed: new Date(),
        scheduled: new Date(),
        deadline: new Date(),
      },
    ])
  }

  if (usersRowCount === 0) {
    users = await database.collection('tasks').insertMany([
      {
        name: 'sravani',
        password: 'sravani@1',
        email: 'sravanidande@gmail.com',
      },
      {
        name: 'pervez',
        password: 'pervez@1',
        email: 'perveziqbal@gmail.com',
      },
      {
        name: 'techno',
        password: 'techno@1',
        email: 'technoidentity@gmail.com',
      },
    ])
  }

  if (tasks !== null) {
    if (tasksRowCount === 0) {
      await database.collection('tasks').insertOne({
        title: 'learn figma',
        description: 'user for web page designing',
        started: new Date(),
        completed: new Date(),
        scheduled: new Date(),
        deadline: new Date(),
      })
    }
  }
  if (users !== null) {
    if (usersRowCount === 0) {
      await database.collection('users').insertOne({
        name: 'iqbal',
        password: 'iqbal@1',
        email: 'iqbal@gmail.com',
      })
    }
  }
  await client.close()
}

seedData(db, process.env.DATABASE_URL)
  .then(() => {
    console.log('---------DONE SEEDING------')
    process.exit(0)
  })
  .catch(error => {
    console.log('error while seeding', error.message)
    process.exit(1)
  })

export default seedData
