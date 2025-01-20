<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController; // Add the PageController import

// Route to the homepage
Route::get('/', [PageController::class, 'home'])->name('page.home');

// Route to the terms page
Route::get('/terms', [PageController::class, 'terms'])->name('page.terms');

// Route to the privacy page
Route::get('/privacy', [PageController::class, 'privacy'])->name('page.privacy');

Auth::routes(['verify' => true]);

// Route to the home page (after authentication)
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
