module.exports = (shipit) => {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        test: {
            branch: 'test',
            workspace: '/home/v2/',
            deployTo: '/home/v2/',
            repositoryUrl: 'ssh://git@gitlab.90pixel.net:3795/yaziyorumpro-v2/demo.git',
            servers: 'root@206.189.61.230',
            ignores: ['node_modules'],
            keepReleases: 2,
            key: '~/.ssh/id_rsa',
            env: 'prod'
        },
    });
};