<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\user;

class UserController extends Controller
{
    public function userLogin(Request $request){
        $email = $request->userEmail;
        $pass = $request->userPass;
        $modelUser = user::where("email", $email)->where("password", md5($pass))->first();
        $token = "";
        if($modelUser != null){
            $token = Str::random(25);
            $modelUser->token = $token;
            $modelUser->update();

            return response()->json(["token" => $token]);
        }else{
            return response()->json(["token" => "failed to login"]);
        }

    }

    public function userLogout(Request $request){
        $user =  user::where("email", $request->userEmail)->first();
        $user->token = "";
        $user->update();
    }
}
