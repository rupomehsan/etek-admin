 $pageLimit = request()->input('limit') ?? 10;
 $orderByColumn = request()->input('sort_by_col') ?? 'id';
 $orderByType = request()->input('sort_type') ?? 'ASC';
 $status = request()->input('status') ?? 'active';
 $fields = request()->input('fields') ?? "*";
 $start_date = request()->input('start_date');
 $end_date = request()->input('end_date');


 if ($start_date && $end_date && $end_date > $start_date) {

 $data->where('created_at', '>=', $start_date);
 $data->where('created_at', '<=', $end_date);
     }



     return entityResponse([
     ...$data->toArray(),
     "active_data_count" => self::$model::active()->count(),
     "inactive_data_count" => self::$model::inactive()->count(),
     ]);


     public function scopeActive($q)
     {
     return $q->where('status', 'active');
     }

     public function scopeInactive($q)
     {
     return $q->where('status', 'inactive');
     }


     if ($request->hasFile('image')) {
     $image = $request->file('image');
     $requestData['image'] = uploader($image, 'uploads/blogcategory');
     $name = pathinfo($requestData['image'], PATHINFO_FILENAME);
     $ext = pathinfo($requestData['image'], PATHINFO_EXTENSION);
     Storage::disk('etek')->putFileAs("uploads/blogcategory", $image, $name . '.' . $ext);
     }
