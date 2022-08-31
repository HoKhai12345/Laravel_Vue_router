<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});
Route::get('/',  [TaskController::class , 'index'])->name('index');
Route::post('/task', [TaskController::class , 'store'])->name('store.task');
Route::delete('/task/{task}',  [TaskController::class , 'delete'])->name('delete.task');

//Route::get('/', 'TaskController@index')->name('index');
//Route::post('/task', 'TaskController@store')->name('store.task');
//Route::delete('/task/{task}', 'TaskController@delete')->name('delete.task');

Route::view('/{any}', 'home')
    ->where('any', '.*');
