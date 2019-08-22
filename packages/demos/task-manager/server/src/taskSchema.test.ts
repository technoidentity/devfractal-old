import { addDays, subDays } from 'date-fns'
import { TaskModel } from './taskSchema'

const currentDate: Date = new Date()

describe.skip('taskSchema', () => {
  it('valid task object', () => {
    const task1 = new TaskModel({
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
    const task1 = new TaskModel({
      title: 'hfjs',
      description: 'react',
      dateInfo: {
        started: subDays(currentDate, 3),
        deadline: currentDate,
        completed: subDays(currentDate, 1),
        scheduled: subDays(currentDate, 4),
      },
    })

    expect(task1.validateSync().errors).toMatchInlineSnapshot(`
            Object {
              "dateInfo": [ValidatorError: started date should be equal to or greater than current date],
              "description": [ValidatorError: Path \`description\` (\`react\`) is shorter than the minimum allowed length (10).],
              "title": [ValidatorError: Path \`title\` (\`hfjs\`) is shorter than the minimum allowed length (5).],
            }
      `)
  })

  it('empty task object', () => {
    const task1 = new TaskModel({})

    expect(task1.validateSync().errors).toMatchInlineSnapshot(`
                            Object {
                              "dateInfo": [ValidatorError: Path \`dateInfo\` is required.],
                              "description": [ValidatorError: Path \`description\` is required.],
                              "title": [ValidatorError: Path \`title\` is required.],
                            }
              `)
  })

  it('empty dateInfo in task object', () => {
    const task1 = new TaskModel({
      title: 'devfractal',
      description: 'make react simple',
      dateInfo: {} as any,
    })

    expect(task1.validateSync().errors).toMatchInlineSnapshot(`
    Object {
      "dateInfo": [ValidationError: Validation failed: scheduled: Path \`scheduled\` is required., deadline: Path \`deadline\` is required.],
      "dateInfo.deadline": [ValidatorError: Path \`deadline\` is required.],
      "dateInfo.scheduled": [ValidatorError: Path \`scheduled\` is required.],
    }
  `)
  })
})
