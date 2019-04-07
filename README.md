### Dependency
python 3.5

### Setup Server
```
pip install -r requirements.txt
./manage.py migrate
./manage.py runserver
```

### Setup Client
```
cd static/client-app/
yarn
yarn start
```

### Output
http://localhost:5000/

or `yarn build` and http://localhost:8000/static/index.html

### Trying out the dynamic_rest package

Request: `http://127.0.0.1:8000/users?include[]=water_cans_delivered.*&include[]=water_cans_delivered.delivered_to.*`

Response:
```
{
    "customers": [
        {
            "phone": "9444385195",
            "name": null,
            "alias": "201",
            "id": 1,
            "address": null
        }
    ],
    "water_cans": [
        {
            "date": "2019-04-06",
            "cost": 35,
            "balance": 0,
            "id": 1,
            "delivered_to": 1,
            "deliverd_by": 4,
            "quantity": 1
        },
        {
            "date": "2019-04-06",
            "cost": 35,
            "balance": 0,
            "id": 2,
            "delivered_to": 1,
            "deliverd_by": 4,
            "quantity": 1
        }
    ],
    "users": [
        {
            "id": 1,
            "username": "",
            "first_name": "",
            "water_cans_delivered": []
        },
        {
            "id": 2,
            "username": "manoj",
            "first_name": "",
            "water_cans_delivered": []
        },
        {
            "id": 3,
            "username": "ajay",
            "first_name": "",
            "water_cans_delivered": []
        },
        {
            "id": 4,
            "username": "admin",
            "first_name": "",
            "water_cans_delivered": [
                1,
                2
            ]
        }
    ]
}
```