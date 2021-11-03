module.exports = {
  apps : [{
    script: 'npm start',
    name: 'testpm2'
  }],

  deploy : {
    production : {
      user : 'root',
      host : '159.89.20.165',
      ref  : 'origin/main',
      repo : 'git@github.com:cagrisungur/testpm2-playground.git',
      path : '/home/testpm2',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
    }
  }
};
