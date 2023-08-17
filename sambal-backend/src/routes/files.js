const angularRoutePaths = [
    '/',
    '/recipes',
    '/recipe/id'
];

export const filesRoutes = angularRoutePaths.map(path => ({
    method: 'GET',
    path,
    handler: (req, h) => {
        return h.file('dist/sambal/index.html')
    }
}))

export const staticFilesRoute = {
    method: 'GET',
    path: '/{params*}',
    handler: {
        directory: {
            path: 'dist/sambal'
        }
    }
}
