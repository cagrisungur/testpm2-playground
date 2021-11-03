module.exports = (shipit) => {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        test: {
            branch: 'main',
            workspace: '/home/v2/',
            deployTo: '/home/v2/',
            repositoryUrl: 'git@github.com:cagrisungur/testpm2-playground.git',
            servers: 'root@159.89.20.165',
            //ignores: ['node_modules'],
            keepReleases: 2,
            key: '~/.ssh/id_rsa',
            env: 'prod'
        },
    });
};