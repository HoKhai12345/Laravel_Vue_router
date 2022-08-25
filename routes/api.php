<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
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



Route::post('/register',[AuthController::class,'register']);
Route::post('/login', [AuthController::class, 'login']);

// Lấy ra list user
Route::get("/users/list" , [UserController::class , 'index']);
Route::get("/users/listPagination" , [UserController::class , 'getUserWithPagination']);
