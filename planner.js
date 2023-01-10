var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

dayjs().format('L LT')