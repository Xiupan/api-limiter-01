# API Limiter Research Project

### Notes
- So far, we can set limitations as little or as much as we want, per IP address
- Each request seems to accumulate regardless of which route it hits. Not great.
- We can customize the response sent to the front end in case of hitting rate limitation. You can send more than a string, we can send an Object or JSON.
- Got to adding passport services before stopping.
