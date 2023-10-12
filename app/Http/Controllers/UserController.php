<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    function register(Request $request)  {
        $highestId = DB::table('users')->max('id'); // Find the highest existing "id".
        $newId = $highestId + 1; // Generate a new, unique "id."

        $user = new User;
        $user->id = $newId; 
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();
        return $user;
    }

    function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password,$user->password)) {
            return ["error"=>"Email or password is not matched"];
        }
        return $user;
    }
}
