# node-lokalise-api

Simple [NodeJS](https://nodejs.org/en/) wrapper around [Lokalise](https://lokalise.co) service.

<!-- badge -->
[![npm license](https://img.shields.io/npm/l/node-lokalise-api.svg)](https://www.npmjs.com/package/node-lokalise-api)
[![travis status](https://img.shields.io/travis/tormozz48/node-lokalise-api.svg)](https://travis-ci.org/tormozz48/node-lokalise-api)
[![Coverage Status](https://coveralls.io/repos/github/tormozz48/node-lokalise-api/badge.svg?branch=master)](https://coveralls.io/github/tormozz48/node-lokalise-api?branch=master)
[![David](https://david-dm.org/tormozz48/node-lokalise-api/status.svg)](https://david-dm.org/tormozz48/node-lokalise-api)
[![David](https://david-dm.org/tormozz48/node-lokalise-api/dev-status.svg)](https://david-dm.org/tormozz48/node-lokalise-api?type=dev)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<br/>
[![NPM](https://nodei.co/npm/node-lokalise-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-lokalise-api/)
<!-- endbadge -->

Localise API documentation can be found [here](https://lokalise.co/api2docs/node/#resource-getting-started)

Detail package documentation can be found [here](https://tormozz48.github.io/node-lokalise-api/)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Install](#install)
- [Usage](#usage)
- [API](#api)
  - [Comments](#comments)
    - [List project comments](#list-project-comments)
    - [List key comments](#list-key-comments)
    - [Create comments](#create-comments)
    - [Retrieve a comment](#retrieve-a-comment)
    - [Delete a comment](#delete-a-comment)
  - [Contributors](#contributors)
    - [List all contributors](#list-all-contributors)
    - [Create contributors](#create-contributors)
    - [Retrieve a contributor](#retrieve-a-contributor)
    - [Update a contributor](#update-a-contributor)
    - [Delete a contributor](#delete-a-contributor)
  - [Files](#files)
    - [List all files](#list-all-files)
    - [Upload a file](#upload-a-file)
    - [Download files](#download-files)
  - [Keys](#keys)
    - [List all keys](#list-all-keys)
    - [Create keys](#create-keys)
    - [Retrieve a key](#retrieve-a-key)
    - [Update a key](#update-a-key)
    - [Bulk update](#bulk-update)
    - [Delete multiple keys](#delete-multiple-keys)
    - [Delete a key](#delete-a-key)
  - [Languages](#languages)
    - [List system languages](#list-system-languages)
    - [List project languages](#list-project-languages)
    - [Create languages](#create-languages)
    - [Retrieve a language](#retrieve-a-language)
    - [Update a language](#update-a-language)
    - [Delete a language](#delete-a-language)
  - [Projects](#projects)
    - [List all projects](#list-all-projects)
    - [Create a project](#create-a-project)
    - [Retrieve a project](#retrieve-a-project)
    - [Update a project](#update-a-project)
    - [Empty a project](#empty-a-project)
    - [Delete a project](#delete-a-project)
  - [Screenshots](#screenshots)
    - [List all screenshots](#list-all-screenshots)
    - [Create screenshots](#create-screenshots)
    - [Retrieve a screenshot](#retrieve-a-screenshot)
    - [Update a screenshot](#update-a-screenshot)
    - [Delete a screenshot](#delete-a-screenshot)
  - [Snapshots](#snapshots)
    - [List all snapshots](#list-all-snapshots)
    - [Create a snapshot](#create-a-snapshot)
    - [Restore a snapshot](#restore-a-snapshot)
    - [Delete a snapshot](#delete-a-snapshot)
  - [Tasks](#tasks)
    - [List all tasks](#list-all-tasks)
    - [Create a task](#create-a-task)
    - [Retrieve a task](#retrieve-a-task)
    - [Update a task](#update-a-task)
    - [Delete a task](#delete-a-task)
  - [Team Users](#team-users)
    - [List all team users](#list-all-team-users)
    - [Retrieve a team user](#retrieve-a-team-user)
    - [Update a team user](#update-a-team-user)
    - [Delete a team user](#delete-a-team-user)
  - [Teams](#teams)
    - [List all teams](#list-all-teams)
  - [Translations](#translations)
    - [List all translations](#list-all-translations)
    - [Retrieve a translation](#retrieve-a-translation)
    - [Update a translation](#update-a-translation)
- [Development](#development)
- [License](#license)
- [Support](#support)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

Install package as yet another npm library with command:
```bash
npm install node-lokalise-api
```

Also you can use another package manager, for example [yarn](https://yarnpkg.com/lang/en/):
```bash
yarn add node-lokalise-api
```

## Usage

Include in your module:
```js
const {LokaliseAPI} = require('node-lokalise-api');

const api = new LokaliseAPI({
    token: '<your-lokalise-api-token>'
});

// get comments for your project
const result = await api.comments.list('<project id>', null, {page: 1, limit: 100});
```

Avaiable options are:

* `token` - access token for Lokalize
* `timeout` - maximum allowed time for request in millieconds. (10000 by default)
* `retry` - number of allowed retry attempts for failed requests. (2 by default)
* `baseUrl` - base url for Lokalize API endpoints. By default it is https://api.lokalise.co/api2.

## API

### Comments

#### List project comments
[Documentation](https://lokalise.co/api2docs/node/#transition-list-project-comments-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.comments.list('<project id>', null, {page: 1, limit: 100});
```

#### List key comments
[Documentation](https://lokalise.co/api2docs/node/#transition-list-key-comments-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.comments.list('<project id>', '<key id>', {page: 1, limit: 100});
```

#### Create comments
[Documentation](https://lokalise.co/api2docs/node/#transition-create-comments-post)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.comments.create('<project id>', '<key id>', {
    comments: [
        {comment: 'This is a test.'},
        {comment: 'Adding multiple comments.'}
    ]
});
```

#### Retrieve a comment
[Documentation](https://lokalise.co/api2docs/node/#transition-retrieve-a-comment-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.comments.get('<project id>', '<key id>', '<comment id>');
```

#### Delete a comment
[Documentation](https://lokalise.co/api2docs/node/#transition-retrieve-a-comment-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.comments.delete('<project id>', '<key id>', '<comment id>');
```

### Contributors

#### List all contributors
[Documentation](https://lokalise.co/api2docs/node/#transition-list-all-contributors-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.contributors.list('<project id>', {page: 1, limit: 100});
```

#### Create contributors
[Documentation](https://lokalise.co/api2docs/node/#transition-create-contributors-post)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.contributors.create('<project id>', {
    contributors: [
        {
            email: 'translator@mycompany.com',
            fullname: 'Mr. Translator',
            is_admin: false,
            is_reviewer: true,
            languages: [
                {
                    lang_iso: en,
                    is_writable: false
                },
                {
                    lang_iso: ru,
                    is_writable: true
                }
            ],
            admin_rights: [
                'keys', 'languages'
            ]
        }
    ]
});
```

#### Retrieve a contributor
[Documentation](https://lokalise.co/api2docs/node/#transition-retrieve-a-contributor-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.contributors.get('<project id>', '<contributor id>');
```

#### Update a contributor
[Documentation](https://lokalise.co/api2docs/node/#transition-update-a-contributor-put)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.contributors.update('<project id>', '<contributor id>', {
    is_admin: true
});
```

#### Delete a contributor
[Documentation](https://lokalise.co/api2docs/node/#transition-delete-a-contributor-delete)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.contributors.delete('<project id>', '<contributor id>');
```

### Files

#### List all files
[Documentation](https://lokalise.co/api2docs/node/#transition-list-all-files-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.files.list('<project id>', {page: 1, limit: 100});
```

#### Upload a file
[Documentation](https://lokalise.co/api2docs/node/#transition-upload-a-file-post)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.files.upload('<project id>', {
    filename: 'index.json',
    data: 'D94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGL.....',
    lang_iso: 'en',
    tags: [
        'index', 'admin', 'v2.0'
    ],
    convert_placeholders: true
});
```

#### Download files
[Documentation](https://lokalise.co/api2docs/node/#transition-download-files-post)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.files.download('<project id>', {
    format: 'json',
    original_filenames: true
});
```

### Keys

#### List all keys
[Documentation](https://lokalise.co/api2docs/node/#transition-list-all-keys-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.keys.list('<project id>', {page: 1, limit: 100});
```

#### Create keys
[Documentation](https://lokalise.co/api2docs/node/#transition-create-keys-post)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.keys.create('<project id>', {
    keys: [
        {
            key_name: 'index.welcome',
            description: 'Index app welcome',
            platforms: ['web'],
            translations: [
                {
                    language_iso: 'en',
                    translation: 'Welcome'
                }
            ]
        }
    ]
});
```

#### Retrieve a key
[Documentation](https://lokalise.co/api2docs/node/#transition-retrieve-a-key-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.keys.get('<project id>', '<key id>');
```

#### Update a key
[Documentation](https://lokalise.co/api2docs/node/#transition-update-a-key-put)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.keys.update('<project id>', '<key id>', {
    platforms: ['web', 'other'],
    description: 'Index app welcome'
});
```

#### Bulk update
[Documentation](https://lokalise.co/api2docs/node/#transition-bulk-update-put)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.keys.updateMany('<project id>', {
    keys: [
        {
            key_id: 331223,
            key_name: 'index.welcome',
            description: 'Index app welcome',
            platforms: ['web']
        },
        {
            key_id: 331224,
            key_name: 'index.hello',
            description: 'Index greetings',
            platforms: ['web']
        }
    ]
});
```

#### Delete multiple keys
[Documentation](https://lokalise.co/api2docs/node/#transition-delete-multiple-keys-delete)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.keys.deleteMany('<project id>', {
    keys: [12345, 12346]
});
```

#### Delete a key
[Documentation](https://lokalise.co/api2docs/node/#transition-delete-a-key-delete)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.keys.delete('<project id>', '<key id>');
```

### Languages

#### List system languages
[Documentation](https://lokalise.co/api2docs/node/#transition-list-system-languages-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.languages.list(null, {page: 1, limit: 100});
```

#### List project languages
[Documentation](https://lokalise.co/api2docs/node/#transition-list-project-languages-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.languages.list('<project id>', {page: 1, limit: 100});
```

#### Create languages
[Documentation](https://lokalise.co/api2docs/node/#transition-create-languages-post)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.languages.create('<project id>', {
    languages: [
        {lang_iso: 'en'},
        {lang_iso: 'ru'}
    ]
});
```

#### Retrieve a language
[Documentation](https://lokalise.co/api2docs/node/#transition-retrieve-a-language-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.languages.get('<project id>', '<language id>');
```

#### Update a language
[Documentation](https://lokalise.co/api2docs/node/#transition-update-a-language-put)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.languages.update('<project id>', '<language id>', {
    lang_iso: 'en-US',
    plural_forms: [
        'one', 'zero', 'few', 'other'
    ]
});
```

#### Delete a language
[Documentation](https://lokalise.co/api2docs/node/#transition-delete-a-language-delete)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.languages.delete('<project id>', '<language id>');
```

### Projects

#### List all projects
[Documentation](https://lokalise.co/api2docs/node/#transition-list-all-projects-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.projects.list({page: 1, limit: 100});
```

#### Create a project
[Documentation](https://lokalise.co/api2docs/node/#transition-create-a-project-post)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.projects.create({
    name: 'TheApp Project',
    description: 'iOS + Android strings of TheApp. https://theapp.com'
});
```

#### Retrieve a project
[Documentation](https://lokalise.co/api2docs/node/#transition-retrieve-a-project-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.projects.get('<project id>');
```

#### Update a project
[Documentation](https://lokalise.co/api2docs/node/#transition-update-a-project-put)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.projects.update('<project id>', {
    name: 'TheZapp Project',
    description: 'iOS + Android strings of TheZapp. https://thezapp.com'
});
```

#### Empty a project
[Documentation](https://lokalise.co/api2docs/node/#transition-empty-a-project-put)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.projects.empty('<project id>');
```

#### Delete a project
[Documentation](https://lokalise.co/api2docs/node/#transition-delete-a-project-delete)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.projects.delete('<project id>');
```

### Screenshots

#### List all screenshots
[Documentation](https://lokalise.co/api2docs/node/#transition-list-all-screenshots-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.screenshots.list('<project id>', {page: 1, limit: 100});
```

#### Create screenshots
[Documentation](https://lokalise.co/api2docs/node/#transition-create-screenshots-post)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.screenshots.create('<project id>', {
    screenshots: [
        {
            data: 'data:image/jpeg;base64,D94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGL',
            ocr: false,
            key_ids: [
                1132290, 1132292, 1132293
            ],
            tags: [
                'onboarding'
            ]
        }
    ]
});
```

#### Retrieve a screenshot
[Documentation](https://lokalise.co/api2docs/node/#transition-retrieve-a-screenshot-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.screenshots.get('<project id>', '<screenshot id>');
```

#### Update a screenshot
[Documentation](https://lokalise.co/api2docs/node/#transition-update-a-screenshot-put)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.screenshots.update('<project id>', '<screenshot id>', {
    key_ids: [
        1132290, 1132292
    ],
    tags: [
        'main'
    ]
});
```

#### Delete a screenshot
[Documentation](https://lokalise.co/api2docs/node/#transition-delete-a-screenshot-delete)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.screenshots.delete('abcde.12345', 567);
```

### Snapshots

#### List all snapshots
[Documentation](https://lokalise.co/api2docs/node/#transition-list-all-snapshots-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.snapshots.list('<project id>', {page: 1, limit: 100});
```

#### Create a snapshot
[Documentation](https://lokalise.co/api2docs/node/#transition-create-a-snapshot-post)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.snapshots.create('<project id>', {
    title: 'API snapshot'
});
```

#### Restore a snapshot
[Documentation](https://lokalise.co/api2docs/node/#transition-restore-a-snapshot-post)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.snapshots.restore('<project id>', '<snapshot id>');
```

#### Delete a snapshot
[Documentation](https://lokalise.co/api2docs/node/#transition-delete-a-snapshot-delete)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.snapshots.delete('<project id>', '<snapshot id>');
```

### Tasks

#### List all tasks
[Documentation](https://lokalise.co/api2docs/node/#transition-list-all-tasks-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.tasks.list('<project id>', {page: 1, limit: 100});
```

#### Create a task
[Documentation](https://lokalise.co/api2docs/node/#transition-create-a-task-post)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.tasks.create('<project id>', {
    title: 'Voicemail messages',
    description: 'Need your help with some voicemail message translation. Thanks!',
    due_date: '2018-12-31 12:00:00 (Etc\/UTC)',
    keys: [11212, 11241, 11245],
    languages: [
        {
            language_iso: 'fi',
            users: [421]
        },
        {
            language_iso: 'ru',
            users: [422]
        }
    ],
    auto_close_languages: true,
    auto_close_task: true
});
```

#### Retrieve a task
[Documentation](https://lokalise.co/api2docs/node/#transition-retrieve-a-task-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.tasks.get('<project id>', '<task id>');
```

#### Update a task
[Documentation](https://lokalise.co/api2docs/node/#transition-update-a-task-put)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.tasks.update('<project id>', '<task id>', {
    due_date: '2019-12-31 12:00:00 (Etc\/UTC)',
    auto_close_languages: false,
    auto_close_task: false
});
```

#### Delete a task
[Documentation](https://lokalise.co/api2docs/node/#transition-delete-a-task-delete)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.tasks.delete('<project id>', '<task id>');
```

### Team Users

#### List all team users
[Documentation](https://lokalise.co/api2docs/node/#transition-list-all-team-users-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.teamUsers.list('<team id>', {page: 1, limit: 100});
```

#### Retrieve a team user
[Documentation](https://lokalise.co/api2docs/node/#transition-retrieve-a-team-user-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.teamUsers.get('<team id>', '<user id>');
```

#### Update a team user
[Documentation](https://lokalise.co/api2docs/node/#transition-update-a-team-user-put)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.teamUsers.update('<team id>', '<user id>', {
     role: 'admin'
});
```

#### Delete a team user
[Documentation](https://lokalise.co/api2docs/node/#transition-delete-a-team-user-delete)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.teamUsers.delete('<team id>', '<user id>');
```

### Teams

#### List all teams
[Documentation](https://lokalise.co/api2docs/node/#transition-list-all-teams-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.teams.list({page: 1, limit: 100});
```

### Translations

#### List all translations
[Documentation](https://lokalise.co/api2docs/node/#transition-list-all-translations-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.translations.list('<project id>', {page: 1, limit: 100});
```

#### Retrieve a translation
[Documentation](https://lokalise.co/api2docs/node/#transition-retrieve-a-translation-get)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.translations.get('<project id>', '<translation id>');
```

#### Update a translation
[Documentation](https://lokalise.co/api2docs/node/#transition-update-a-translation-put)
```js
const {LokaliseAPI} = require('node-lokalise-api');
const api = new LokaliseAPI({token: '<your-lokalise-api-token>'});

const result = await api.translations.update('<project id>', '<translation id>', {
    translation: 'Quick brown fox jumps over the lazy dog.',
    is_fuzzy: false,
    is_reviewed: true
});
```

## Development

Clone repository or its fork to local filesystem
```bash
git clone https://github.com/tormozz48/node-lokalise-api.git
```

Install npm dependencies:
```bash
npm install
```

Here are some suitable commands that can be used during development:

* `npm run build` - compile [typescript](https://www.typescriptlang.org/index.html) files
* `npm run docs` - create documentation based on jsdocs
* `npm run lint` - run [tslint](https://palantir.github.io/tslint/) verification tool
* `npm run test` - run tests with [mocha](https://mochajs.org)
* `npm run cover` - calculate code test coverage with [istanbul](https://github.com/gotwarlost/istanbul)
* `npm run watch` - launch watcher for compile source files during development

## License

Apache-2.0

## Support

Bugs, PRs, comments, suggestions welcomed!

