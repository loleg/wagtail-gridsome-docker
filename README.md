# Wagtail with Gridsome

A trimmed down, revised fork of [hyshka/wagtail-vue-talk](https://github.com/hyshka/wagtail-vue-talk),
this is a boilerplate project that demonstrates how to use [Wagtail CMS](https://github.com/wagtail)
with a [Vue.js](https://vuejs.org/) frontend based on [Gridsome](https://gridsome.org/),
a modern PWA engine with support for GraphQL and other data sources.

## Installation

After you follow the [Deployment](#Deployment) steps below, the Django server will run on port `8000`, while the
Node.js server compiling the Vue.js app will run on port `8080`.

To access the Wagtail admin go to http://localhost:8000/admin/ - and then
login with the superuser you created with the `createsuperuser` command. If the setup
succeeded, you should be able to edit the content of a default home page.

When you switch to the Gridsome frontend in http://localhost:8080 - you should
see the contents you have edited.

The frontend app is expecting a GraphQL API to be available at `localhost:8000/graphql`.
The regular Django API is available at `localhost:8000/api/v2/`.

## Deployment

Deployment with [Docker Compose](https://docs.docker.com/compose/install/) should be rather quick:

`make up`

If anything fails, you can go through the build steps defined in the [Makefile](Makefile):

```
# build image, start and enter container
make refresh

# initialize database (inside container)
django-admin.py migrate
django-admin.py createsuperuser

# start django server (inside container)
django-admin.py runserver 0.0.0.0:8000

# ..or use the handy aliases:
djm
djr

# enter frontend (Gridsome) container
make frontend

# start node server (inside container)
gridsome develop

# stop and remove containers
make clean
```
