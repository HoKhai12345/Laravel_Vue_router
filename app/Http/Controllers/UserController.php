<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

//use Illuminate\Auth\Events\Validated;


class UserController extends Controller
{

    public function index(Request $request){
        $limit = $request->query('limit');
        $skip = $request->query('skip');
        $user = $request->query("username");
        $dataFind = ["username"=>$user];
        $listUser = User::where('name', 'LIKE', "%{$user}%")->limit($limit)->offset($skip)->get();
        return response()->json([
            'err' => 0,
            'data' => $listUser,
        ]);
    }
    public function getUserWithPagination(Request $request){
        $limit = $request->query('limit');
        $skip = $request->query('skip');
        $user = $request->query("username");
        $dataFind = ["username"=>$user];
        $items = User::where('name', 'LIKE', "%{$user}%")->paginate($limit);
//        $items = User::latest()->paginate(4);
        $response = [
            'pagination' => [
                'total' => $items->total(),
                'per_page' => $items->perPage(),
                'current_page' => $items->currentPage(),
                'last_page' => $items->lastPage(),
                'from' => $items->firstItem(),
                'to' => $items->lastItem()
            ],
            'data' => $items
        ];

        return response()->json($response);

    }

}
