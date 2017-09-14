# README

![Build Status](https://codeship.com/projects/f173cda0-5853-0135-c031-321271638885/status?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/cartwrightforeman/retra/badge.svg?branch=master)](https://coveralls.io/github/cartwrightforeman/retra?branch=master)
![Code Climate](https://codeclimate.com/github/cartwrightforeman/retra.png)

## [Retra](https://retra-spec.herokuapp.com)
Retra allows for agile teams to have retrospective meetings about their week. After signing in with Github users will be able to create their own unique meetings which can be organized using drag and drop. Each meeting has 5 sections: Happy, Meh, Sad, Action and Discussion. Users can create posts on a section which can then be edited, deleted or voted on. Posts are organized by votes so that teams can easily decide which topics warrant further discussion.

Retra uses React and React Router for the majority of the front-end. Ruby on Rails completes the front-end and acts as the backend as well. PostgreSQL is used for the database. User authentication is handled via the Github Omniauth ruby gem.

Retra was developed as part of the Breakable Toy weeks at Launch Academy.

### Technologies
* Ruby on Rails
* PostgreSQL
* React.js
* React Router 3
* Jasmine & Enzyme
* Foundation & SASS

### Local Setup
* `git clone https://github.com/cartwrightforeman/retra.git`
* `cd retra`
* `bundle`
* `npm install`
* `rake db:create && rake db:migrate`
* `rails s`
* In another tab, `npm start`
* Navigate to `localhost:3000`
#### Tests
In order to run the test suite, run `rake` to run the backend tests. Run `karma start` and navigate to `localhost:9876` to run the frontend tests.
