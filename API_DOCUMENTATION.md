## Endpoint

List of available Endpoint

-   "POST /register"
-   "POST /login"
-   "GET /watchlist"
-   "GET /stock"
-   "POST /watchlist/:stock"
-   "DELETE /watchlist/delete/:id"

### POST /register

### Description

-   create new account

### Respon

_201 - Created_

-   Body

```json
{
  "id": Integer,
  "username": String,
  "email": String
}
```

_400 - Bad Request_

- Body

```json
{
    "message": String
}
```

### POST /login

### Description

-   login section

### Respon

_200 - OK_

-   Body

```json
{
  "access_token": String
}
```

_401 - Invalid Token_

- Body

```json
{
    "message": String
}
```

### GET /watchlist

### Description

-   get all data watchlist

### Respon

_200 - OK_

-   Body

```json
{
    "id": Integer,
    "UserId": Integer,
    "stock": String
}
```

### GET /stock

### Description

-   get all data stock

### Respon

_200 - OK_

-   Body

```json
{
  "data": [
      {
        "Id": 1,
        "Name": "Astra Agro Lestari Tbk.",
        "Code": "AALI",
        "StockSubSectorId": 2,
        "SubSectorName": "Plantation",
        "StockSectorId": 1,
        "SectorName": "AGRICULTURE",
        "NewSubIndustryId": 47,
        "NewSubIndustryName": "Perkebunan & Tanaman Pangan",
        "NewIndustryId": 22,
        "NewIndustryName": "Produk Makanan Pertanian",
        "NewSubSectorId": 8,
        "NewSubSectorName": "Makanan & Minuman",
        "NewSectorId": 4,
        "NewSectorName": "Barang Konsumen Primer",
        "Last": 12425,
        "PrevClosingPrice": 12625,
        "AdjustedClosingPrice": 12425,
        "AdjustedOpenPrice": 12625,
        "AdjustedHighPrice": 12800,
        "AdjustedLowPrice": 12325,
        "Volume": 2475100,
        "Frequency": 3600,
        "Value": 30958842500,
        "OneDay": -0.01584158,
        "OneWeek": -0.03118908,
        "OneMonth": 0.03541667,
        "ThreeMonth": 0.26463104,
        "SixMonth": 0.22113022,
        "OneYear": 0.30446194,
        "ThreeYear": 0.02053388,
        "FiveYear": -0.16047297,
        "TenYear": -0.43673784,
        "Mtd": -0.00996016,
        "Ytd": 0.30789474,
        "Per": 12.13081,
        "Pbr": 1.12957,
        "Capitalization": 23914252537525,
        "BetaOneYear": 1.12212403,
        "StdevOneYear": 0.34031165,
        "PerAnnualized": 12.13081,
        "PsrAnnualized": 0.98323,
        "PcfrAnnualized": 4.88533,
        "LastDate": "2022-04-20T00:00:00",
        "LastUpdate": "2022-04-20T00:00:00",
        "Roe": 0.0931155302542755
      }
  ]
}
```

### POST /watchlist/:stock"

### Description

-   Create watchlist stock

### Respon

_201 - Created_

-   Body

```json
{
  "id": Integer,
  "UserId": Integer,
  "stock": String
}
```

### DELETE /watchlist/delete/:id

### Description

-   Create 

### Respon

_200 - OK_

-   Body

```json
{
  "message": "success delete stock from watchlist"
}
```

### Global Error

### Respon

_500 - Internal Server Error_

-   Body

```json
{
    "message": String
}
```