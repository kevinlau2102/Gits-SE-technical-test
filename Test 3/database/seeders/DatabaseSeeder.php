<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       DB::table("authors")->insert(["name"=>"Dummy Author 1"]);
       DB::table("authors")->insert(["name"=>"Dummy Author 2"]);
       DB::table("authors")->insert(["name"=>"Dummy Author 3"]);

       DB::table("publishers")->insert(["name"=>"Dummy Publisher 1"]);
       DB::table("publishers")->insert(["name"=>"Dummy Publisher 2"]);
       DB::table("publishers")->insert(["name"=>"Dummy Publisher 3"]);

       DB::table("books")->insert(["judul"=>"Dummy Book 1", "fk_publisher"=>1, "fk_author"=>1]);
       DB::table("books")->insert(["judul"=>"Dummy Book 2", "fk_publisher"=>3, "fk_author"=>2]);
       DB::table("books")->insert(["judul"=>"Dummy Book 3", "fk_publisher"=>2, "fk_author"=>3]);
       DB::table("books")->insert(["judul"=>"Dummy Book 3", "fk_publisher"=>1, "fk_author"=>1]);

       DB::table("users")->insert(["email"=>"user@gmail.com", "password"=>md5("12345")]);

    }
}
