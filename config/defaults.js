import path from 'path'

export const ROOT_PATH = path.normalize(path.join(__dirname, '..'))
export const SOURCE_PATH = path.join(ROOT_PATH, 'src')
export const BUILD_PATH = path.join(ROOT_PATH, 'dist')
export const TEMPLATES_PATH = path.join(ROOT_PATH, 'templates')
