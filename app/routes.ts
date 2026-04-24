import { index, type RouteConfig, route } from '@react-router/dev/routes'

export default [
	index('routes/home/index.tsx'),
	route('letter/create', 'routes/create-letter/index.tsx'),
	route('letter/:id', 'routes/letters/$id.tsx'),
] satisfies RouteConfig
