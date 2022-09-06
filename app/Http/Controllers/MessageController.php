<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Message;
use App\Http\Controllers\Controller;
class MessageController extends Controller
{
    public function create(Request $request){
        $data=$request->all();
//        dd($data);
        $message = new Message();
        $message->mess = $data['mess'];
        $message->save();
        return response()->json($data);
    }
    public  function index(Message $messages){

        $data = $messages->all();
     \Log::info($data);
        return response()->json($data);

    }
}
