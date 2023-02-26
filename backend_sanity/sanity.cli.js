import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '', // <-- add your project id here
    dataset: 'production'
  }
})
