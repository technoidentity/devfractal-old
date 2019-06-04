import { addDays, subDays } from 'date-fns'
import { Task } from './taskSchema'

const currentDate: Date = new Date()

it('valid task object', () => {
  const task1 = new Task({
    title: 'devfractal',
    description: 'make react simple',
    dateInfo: {
      started: currentDate,
      deadline: addDays(currentDate, 15),
      completed: addDays(currentDate, 10),
      scheduled: addDays(currentDate, 4),
    },
  })

  expect(task1.validateSync()).toBeUndefined()
})

it('Invalid task object', () => {
  const task1 = new Task({
    title: 'hfjs',
    description: 'react',
    dateInfo: {
      started: subDays(currentDate, 3),
      deadline: currentDate,
      completed: subDays(currentDate, 1),
      scheduled: subDays(currentDate, 4),
    },
  })
  const error = task1.validateSync()
  console.log(error.errors)
  expect(task1.validateSync().errors).toMatchInlineSnapshot(`
    Object {
      "dateInfo": [ValidatorError: started date should be equal to or greater than current date],
      "description": [ValidatorError: Path \`description\` (\`react\`) is shorter than the minimum allowed length (10).],
      "title": [ValidatorError: Path \`title\` (\`hfjs\`) is shorter than the minimum allowed length (5).],
    }
  `)
})

it('empty task object', () => {
  const task1 = new Task({})

  expect(task1.validateSync().errors).toMatchInlineSnapshot(`
                    Object {
                      "dateInfo": [ValidatorError: Path \`dateInfo\` is required.],
                      "description": [ValidatorError: Path \`description\` is required.],
                      "title": [ValidatorError: Path \`title\` is required.],
                    }
          `)
})

it('empty dateInfo in task object', () => {
  const task1 = new Task({
    title: 'devfractal',
    description: 'make react simple',
    dateInfo: {},
  })

  expect(task1.validateSync().errors).toMatchInlineSnapshot(`
                        Object {
                          "dateInfo": [ValidationError: Validation failed: scheduled: Path \`scheduled\` is required., completed: Path \`completed\` is required., deadline: Path \`deadline\` is required., started: Path \`started\` is required.],
                          "dateInfo.completed": [ValidatorError: Path \`completed\` is required.],
                          "dateInfo.deadline": [ValidatorError: Path \`deadline\` is required.],
                          "dateInfo.scheduled": [ValidatorError: Path \`scheduled\` is required.],
                          "dateInfo.started": [ValidatorError: Path \`started\` is required.],
                        }
            `)
})
