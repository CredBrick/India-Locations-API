<center>
<h1>India Locations API</h1>
</center>

#### Note- DATA ADDED ONLY FOR UTTAR PRADESH

#### Port Number
```3000```

### Get State Names

```js
/api/districts/state?lang=en
```

#### Response
```json
{
    "states": [
        "Uttar Pradesh"
    ]
}
```


### Get District Names

```js
/api/districts/district_list/UttarPradesh?lang=en
```

#### Response
```json
{
    "data": {
        "state": "Uttar Pradesh",
        "districts": [
            {
                "district": "Agra",
                "tehsils": [
                    "Agra",
                    "Etmadpur",
                    "Kiraoli",
                    "Kheragarh",
                    "Fatehabad",
                    "Bah"
                ]
            },
            {
                "district": "Aligrah",
                "tehsils": [
                    "Atrauli",
                    "Iglas",
                    "Koil",
                    "Khair",
                    "Gabhana"
                ]
            },
            {
                "district": "Ambedkarnagar",
                "tehsils": [
                    "Akbarpur",
                    "Alapur",
                    "Jalalpur",
                    "Tanda",
                    "Bhiti",
                    ""
                ]
            },
            {
                "district": "Amethi",
                "tehsils": [
                    "Amethi",
                    "Gauriganj",
                    "Tiloi",
                    "Musafirkhana"
                ]
            },
            {
                "district": "Amroha",
                "tehsils": [
                    "Amroha",
                    "Dhanaura",
                    "Naugawan Sadat",
                    "Hasanpur"
                ]
            },
            {
                "district": "Auraya",
                "tehsils": [
                    "Ajitmal",
                    "Auraiya",
                    "Bidhuna"
                ]
            },
            {
                "district": "Ayodhya",
                "tehsils": [
                    "Bikapur",
                    "Milkipur",
                    "Rudauli",
                    "Faizabad",
                    "Sohwal"
                ]
            },
            .....
        ]
    }
}
```

### Get Tehsil Names from District Name

```js
/api/districts/district_list/UttarPradesh/Agra?lang=en
```

#### Response
```json
{
    "data": {
        "district": "Agra",
        "tehsils": [
            "Agra",
            "Etmadpur",
            "Kiraoli",
            "Kheragarh",
            "Fatehabad",
            "Bah"
        ]
    }
}
```