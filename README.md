# HacktivPress
Adalah aplikasi CRUD (Create Read Update Delete) artikel sederhana menggunakan framework "ExpressJS" sebagai aplikasi sisi server dan "VueJS" sebagai aplikasi sisi client.

## Fitur
- Register
- Login
- CRUD Artikel

## Instalasi
Server:
```sh
$ cd hacktivpress-2/server
$ npm install
$ npm run dev
```
Client:
```sh
$ cd hacktivpress-2/client
$ npm install
$ npm run dev
```

## Endpoints API
| Method | Endpoint | Deskripsi |
| ------ | -------- | --------- |
| POST | /register | Registrasi user |
| POST | /login | Login user |
| GET | /articles | Melihat semua artikel |
| POST | /articles | Membuat artikel baru |
| PUT | /articles/:id | Edit artikel berdasarkan ID |
| DELETE | /articles/:id | Menghapus artikel berdasarkan ID |
