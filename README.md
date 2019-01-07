# TS-React-Boiler

# Table of contents

1.  [Getting Started](#getting-started)
1.  [Development](#development)
1.  [Deployment](#deployment)

# Getting started

\*\* Add Instructions specific to getting the development environment started. E.g. asdf, node version, yarn, etc.

# Development

## App structure

### src

_Main sources folder_

#### config

_Contains files that configure certain parts of the application e.g. API, Redux Store_

#### components

_All components that are widely used between domains. Like buttons or other UI components_

#### constants

_Constants used across the entire project_

#### domains:

_Domains split the app up in *logical* folders. If a single file becomes to big or has multiple items in it, you can split it up into separate files/folders._

| Folder name(s) |                                                              |
| -------------- | ------------------------------------------------------------ |
| components     | Domain specific components                                   |
| pages          | Domain specific screens                                      |
| redux          | Redux files related to this domain: actions, reducers, types |

#### util

_All functions that can be re-used throughout the app._

## Code Format

Using TSLint recommended and TSLint

To test linting run `yarn lint`

## Testing

1.  In dev
    `yarn test`

# Deployment

We use `yarn build` to output the static site so that it is ready to go from a deployment perspective.
