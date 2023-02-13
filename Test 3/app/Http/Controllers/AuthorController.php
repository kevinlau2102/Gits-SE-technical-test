<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\author;
use App\Models\user;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = author::all();
        return response()->json($authors);
    }
    public function create(Request $request)
    {
        $validateData = $request->validate([
            "autName" => "required|max:255",
            "token" => "required|max:40",
        ]);
        $authors = new author();
        $authors->name = $validateData["autName"];
        $user = user::where("token", $validateData["token"])->first();
        if($user != null){
            $authors->save();
            return response()->json(["Status: " => "Insert Data Success"]);
        } else{
            return response()->json(["Status: " => "Insert Data Failed"]);

        }
    }

    public function update(Request $request)
    {
        $validateData = $request->validate([
            "autName" => "required|max:255",
            "token" => "required|max:40",
        ]);
        $authors = author::where("id", $request->autId)->first();
        $authors->name = $validateData["autName"];
        $user = user::where("token", $validateData["token"])->first();
        if($user != null){
            $authors->update();
            return response()->json(["Status: " => "Update Data Success"]);
        } else{
            return response()->json(["Status: " => "Update Data Failed"]);

        }
    }

    public function delete(Request $request)
    {
        $authors = author::where("id", $request->autId)->first();
        $authors->delete();
        return response()->json(["Status: " => "Delete Data Success"]);
    }
}
