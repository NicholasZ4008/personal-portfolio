import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/index'

export default defineConfig({
  name: 'default',
  title: 'my_portfolio',

  projectId: 'v83ks8ba',
  dataset: 'production',  

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
