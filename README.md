# latelier-technical-test

This is a REST api example using ExpressJS, Typescript and Jest.

[Project Instructions](https://tenisu.latelier.co/backend)

# Engines

```bash
engines {
  node: >=18.2.1
}
```

# Launch the project at LOCAL

```bash
npm i
npm run dev
```

# Launch test for project

```bash
npm run test
```

# Access local api

```bash
http://localhost:8080/api/v1/
http://localhost:8080/api/v1/players
http://localhost:8080/api/v1/player/52
http://localhost:8080/api/v1/stats
```

# Access to the Public API

```bash
http://latelier-technical-test.eu-west-3.elasticbeanstalk.com/api/v1/
http://latelier-technical-test.eu-west-3.elasticbeanstalk.com/api/v1/players
http://latelier-technical-test.eu-west-3.elasticbeanstalk.com/api/v1/player/52
http://latelier-technical-test.eu-west-3.elasticbeanstalk.com/api/v1/stats
```

# Need to do

1. AWS Beanstalk:
   remove config folder
   add Procfile to with command: web: node dist/server.js
2. Rework types from /statistics + /utils 
3. Logger ?
4. Prettier + Lint with husky / standard prehook git ?
5. Ci/Cd for beanstalk
