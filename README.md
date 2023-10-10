# latelier-technical-test
 
This is a REST api for L'Atelier using ExpressJS, Typescript and Jest.

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

1. Never try typescript in a project you need to do in under 1 hour
2. Follow Rule 1
3. Missing Lint
4. Missing handler (error + response)
5. Add more security (rate limiter in middleware, WAF/Shield, snyk, ...)
6. Logger Middleware
7. Swagger doc
8. Better api framework combo than Type + Express, like Bun + Elysia or just plain Nodejs + Hono
9. SSL of course
10. Create module of each index.ts file into package.json to avoid literal path with dots
11. Create CI/CD with Github Actions to auto build, package and deploy into AWS beanstalk
12. It is okay to miss a world cup rugby game to nailed an tech interview