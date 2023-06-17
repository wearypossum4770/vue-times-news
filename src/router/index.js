import routes from '@/router/routes'
import { scrollBehavior } from '@/router/utils'
import pluginRouter from '@/router/plugin-router'
import unplugRouter from '@/router/unplugin-router'

/**
 * @param { object } param
 * @param { boolean } param.unplug - toggle on 'NextJS' like directory routing.
 * When true router array does not have to be passed. When false route array
 * must be passed.
 * @see {@link https://github.com/posva/unplugin-vue-router}
 * @returns
 */
const router = ({ unplug = false, ...args }) => {
  const options = { ...args, unplug, routes, scrollBehavior }
  if (unplug) return unplugRouter(options)
  else return pluginRouter(options)
}

export default router
