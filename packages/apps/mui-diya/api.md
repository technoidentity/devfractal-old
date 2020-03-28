# Cargos API Design

_Base URL_: /api/v1/

## Pagination for data list(query params):

- page? - optional, starts from 1
- per_page?: optional , starts from 1. We can hard code or can configure default
  value

**Note**: Designed POST and PUT apis with no path or query params,everything
included in body for these methods

## Resource: Session

- POST -> /session
- DELETE -> /session

## Resource: Users

- GET -> /users
- GET -> /users/:id
- POST -> /users
- PUT -> /users
- DELETE -> /users/:id

## Resource: Vehicles

- GET -> /vehicles
- GET -> /vehicles/:id
- GET -> /vehicles/:id/profile (vehicle details about customers,route travelled, hours of service etc)
- POST -> /vehicles
- POST -> /vehicles/assign/clients (assign a vehicle to a client with driver and battery)
- PUT -> /vehicles
- DELETE -> /vehicles/:id

## Resource: Bank Details

- GET -> /bank_details
- GET -> /bank_details/:id
- POST -> /bank_details
- PUT -> /bank_details
- DELETE -> /bank_details/:id

## Resource: Clients

- GET -> /clients
- GET -> /clients/:id
- POST -> /clients
- PUT -> /clients
- DELETE -> /clients/:id

## Resource: Batteries

- GET -> /batteries
- GET -> /batteries/:id
- GET -> /batteries/:id/profile (details includes last usage, last charged station etc)
- POST -> /clients
- PUT -> /clients
- DELETE -> /clients/:id

## Resource: Areas(GeoFence)

- GET -> /areas
- GET -> /areas/:id
- POST -> /areas
- PUT -> /areas
- DELETE -> /areas/:id

## Resource: Drivers

- GET -> /drivers
- GET -> /drivers/:id
- GET -> /drivers/:id/profile (includes additional details like hours of service etc)
- POST -> /drivers
- PUT -> /drivers
- DELETE -> /drivers/:id
