<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Validator;

//use Illuminate\Auth\Events\Validated;


class UserController extends Controller
{

    public function index(Request $request)
    {
        $limit = $request->query('limit');
        $skip = $request->query('skip');
        $user = $request->query("username");
        $dataFind = ["username" => $user];
        $listUser = User::where('name', 'LIKE', "%{$user}%")->limit($limit)->offset($skip)->get();
        return response()->json([
            'err' => 0,
            'data' => $listUser,
        ]);
    }

    public function getUserWithPagination(Request $request)
    {
        $limit = $request->query('limit');
        $skip = $request->query('skip');
        $user = $request->query("username");
        $dataFind = ["username" => $user];
        $items = User::where('users.name', 'LIKE', "%{$user}%")
//            ->select('users.id , department.id')
            ->join('department', 'users.department_id', '=', 'department.id')
            ->paginate($limit);
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
    public function detail(Request $request){
        try {
            $params = $request->all();
            $result = User::find($params)->first();
            return response()->json(
                [
                    "err" => 0,
                    "data" => $result
                ]
            );
        }catch (\Exception $exception){
            return response()->json(
                [
                    "err" => 1 ,
                    "message" => "A system error has occurred"
                ]
            );
        }
    }

    public function store(Request $request, $id)
    {
        try {
            // Lấy param trong body raw
            // $arrData = json_decode($request->getContent());
            $validator = Validator::make($request->all(), [
                'name' => 'required|unique:users|max:500'
            ]);
            if ($validator->fails()) {
                return response()->json(
                    [
                        "err" => 1,
                        "message" => "Tham số không hợp lệ"
                    ]
                );
            }
            User::where('id', $id)
                ->update($request->all());
            return response()->json(
                [
                    "err" => 0,
                    "message" => "update thành công "
                ]
            );
        } catch (\Exception $e) {
            return response()->json(
              [
                  "err" => 1,
                  "message" => $e->getMessage()
              ]
            );
            echo "message : " + $e->getMessage();
        }


    }

}
