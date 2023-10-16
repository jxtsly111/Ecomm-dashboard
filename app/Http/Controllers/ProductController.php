<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //
    function addProduct(Request $request)
    {
        $product = new Product;
        $product-> name=$request->input('name');
        $product-> price=$request->input('price');
        $product-> description=$request->input('description');
        $product-> file_path=$request->file('file')->store('products');
        $product-> save();
        return $product;
    }

    function list(){
        return Product::all();
    }

    function delete($id){
        $result = Product::where('id',$id)->delete();
        if ($result) {
            return ["result"=>"product has been deleted"];
        }else{
            return ["result"=>"Operation failed"];
        }
    }

    
    function getProduct($id){
        return Product::find($id);
    }
    
    function search($key){
        return Product::where('name','Like',"%$key%")->get();
    }
}