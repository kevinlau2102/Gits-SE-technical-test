<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/login", [UserController::class, "userLogin"]);
Route::post("/logout", [UserController::class, "userLogout"]);

Route::get("/publisher/index", [PublisherController::class, "index"]);
Route::post("/publisher/create", [PublisherController::class, "create"]);
Route::post("/publisher/update", [PublisherController::class, "update"]);
Route::get("/publisher/delete", [PublisherController::class, "delete"]);

Route::get("/author/index", [AuthorController::class, "index"]);
Route::post("/author/create", [AuthorController::class, "create"]);
Route::post("/author/update", [AuthorController::class, "update"]);
Route::get("/author/delete", [AuthorController::class, "delete"]);

Route::get("/book/index", [BookController::class, "index"]);
Route::post("/book/create", [BookController::class, "create"]);
Route::post("/book/update", [BookController::class, "update"]);
Route::get("/book/delete", [BookController::class, "delete"]);
