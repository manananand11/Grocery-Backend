# Grocery Store API

## Overview
This API provides endpoints for managing grocery items and orders in a grocery store.

## Endpoints

### Grocery Items
- **Create Grocery Item**
  - Endpoint: POST /grocery-items
  - Example Request Body:
    ```json
    {
      "name": "Apple",
      "price": 15,
      "quantity": 10,
      "description": "Fresh red apple"
    }
    ```
- **Get Grocery Item by ID**
  - Endpoint: GET /grocery-items/:id
  - Example Request: GET /grocery-items/1
- **Get All Grocery Items**
  - Endpoint: GET /grocery-items
  - Example Request: GET /grocery-items
- **Update Grocery Item**
  - Endpoint: PUT /grocery-items/:id
  - Example Request Body:
    ```json
    {
      "name": "Banana",
      "price": 75,
      "quantity": 20,
      "description": "Ripe yellow banana"
    }
    ```
  - Example Request: PUT /grocery-items/1
- **Delete Grocery Item**
  - Endpoint: DELETE /grocery-items/:id
  - Example Request: DELETE /grocery-items/1

### Orders
- **Create Order**
  - Endpoint: POST /orders
  - Example Request Body:
    ```json
    {
      "userId": 11,
      "items": [
        {
          "groceryItemId": 6, 
          "quantity": 3,
          "price": 10
        },
        {
          "groceryItemId": 12, 
          "quantity": 2,
          "price": 6
        }
      ]
    }
    ```

## Note
- For endpoints that require authentication as an admin, include a valid `userid` in the request headers.
- Replace `:id` in the endpoints with the actual ID of the resource.
