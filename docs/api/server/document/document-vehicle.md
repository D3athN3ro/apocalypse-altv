# Vehicle

An character document is a set of data that is bound to the player until they disconnect.

It automatically saves data to the MongoDB database when any `set` function is used.

## Binding Data

You should bind character data after fetching call characters owned by an account.

```ts
import { useVehicle, useVehicleBinder } from '@Server/document/vehicle.js';

// ... some function
// Use database functions to fetch or create a vehicle
const someVehicleData = someDatabaseFetchOrCreateFunction();

// Bind vehicle data to the player after fetching
const document = useVehicleBinder(player).bind(someVehicleData);
```

## Getting Data

Data can be retrieved for the bound character like this.

```ts
import { useVehicle, useVehicleBinder } from '@Server/document/vehicle.js';

//... some function
const document = useVehicle(player);
const data = document.get();
console.log(data.email);
```

## Setting Data

Data can easily be appended or set in two different ways.

```ts
import { useVehicle, useVehicleBinder } from '@Server/document/vehicle.js';

const document = useVehicle(player);

type CustomVehicle = { whatever: string };

//...some function
// Single field
document.set('banned', true);

// Multi-field
document.setBulk({ name: 'John_Doe' });

// Custom-field
document.setBulk<CustomVehicle>({ whatever: 'hi' });
```