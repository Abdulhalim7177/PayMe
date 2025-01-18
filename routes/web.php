<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 'PageController@home')->name('page.home');

Route::get('/terms', 'PageController@terms')->name('page.terms
');
Route::get('/privacy', 'PageController@privacy')->name('page.
privacy');


Auth::routes(['verify' => true]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
