import alfy from 'alfy'
import dotenv from 'dotenv'
import { Client } from '@notionhq/client'
dotenv.config()

const text = alfy.input

const databaseId = process.env.DATABASE_ID
const token = process.env.TOKEN

const notion = new Client({ auth: token })

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: text,
              },
            },
          ],
        },
      },
    })
    console.log(response)
    console.log('Success! Entry added.')
  } catch (error) {
    console.error(error.body)
  }
}

addItem(text)
