<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [ 'category_id', 'name', 'description', 'image'];


    // Método FILTRO DE PESQUISA
    public function getResults($data, $total)
    {
        if(!isset($data['filter']) && !isset($data['name']) && !isset($data['description']))
            return $this->orderBy('id', 'DESC')->paginate($total);

        return $this->where(function ($query) use ($data){
                if(isset($data['filter'])){
                    $filter = $data['filter'];
                    $query->where('name', $filter);
                    $query->orWhere('description', 'LIKE', "%{$filter}%");
                }

                if(isset($data['name']))
                    $query->where('name', $data['name']);

                if(isset($data['description'])) {
                    $description = $data['description'];
                    $query->where('description', 'LIKE', "%{$description}%");
                }
            })
            ->orderBy('id', 'DESC')
            ->paginate($total);            
    }

    public function categoryProduct()
    {
        return $this->belongsTo(Category::class);
    }
}
