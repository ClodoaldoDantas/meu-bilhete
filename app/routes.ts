import { index, type RouteConfig, route } from '@react-router/dev/routes'

export default [
	index('routes/home/index.tsx'),
	route('letters/:id', 'routes/letters/$id.tsx'),
] satisfies RouteConfig
