## Frontend

- Frontend user takes some action
- Frontend sends action to backend and responds with visuals in the frontend (only responds to the action, not any results of the action)
- Frontend will return any validation response from the backend to the user
- Frontend will listen to backend actions and the propoagte those changes

## Backend

- Backend will receive the text from a websocket
- Backend will use factory to create the action from the body
  - Action will use information about user (from session) and from body (gameid, src, target) to generate the appropraite action
- Backend will call the action execute() method and get a response from the relevant service. This will be the response the client sends to the server. This can be if the command was valid or not.
- Backend action will initiate the user/room/game actions that impact the state.
- Sessions will be subscribed to games/rooms/other events and then receive the events.
