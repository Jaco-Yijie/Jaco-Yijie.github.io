import { useLang } from './i18n'
import { getContent } from './content'

/** 组件里读文案的唯一入口 */
export const useContent = () => getContent(useLang().lang)
