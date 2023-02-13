<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\publisher;
use App\Models\user;

class PublisherController extends Controller
{
    public function index()
    {
        $publishers = publisher::all();
        return response()->json($publishers);
    }
    public function create(Request $request)
    {
        $validateData = $request->validate([
            "pubName" => "required|max:255",
            "token" => "required|max:40",
        ]);
        $publishers = new publisher();
        $publishers->name = $validateData["pubName"];
        $user = user::where("token", $validateData["token"])->first();
        if($user != null){
            $publishers->save();
            return response()->json(["Status: " => "Insert Data Success"]);
        } else{
            return response()->json(["Status: " => "Insert Data Failed"]);

        }
    }

    public function update(Request $request)
    {
        $validateData = $request->validate([
            "pubName" => "required|max:255",
            "token" => "required|max:40",
        ]);
        $publishers = publisher::where("id", $request->pubId)->first();
        $publishers->name = $validateData["pubName"];
        $user = user::where("token", $validateData["token"])->first();
        if($user != null){
            $publishers->update();
            return response()->json(["Status: " => "Update Data Sukses"]);
        } else{
            return response()->json(["Status: " => "Update Data Failed"]);

        }
    }

    public function delete(Request $request)
    {
        $publishers = publisher::where("id", $request->pubId)->first();
        $publishers->delete();
        return response()->json(["Status: " => "Delete Data Sukses"]);
    }
}
