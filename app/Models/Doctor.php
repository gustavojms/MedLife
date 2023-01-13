<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'speciality_id',
        'name',
        'email',
        'password',
        'cpf',
        'phone',
    ];


    protected $hidden = [
        'password',
    ];


    /**
     * Get all of the appointments for the Doctor
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function appointments()
    {
        return $this->hasMany(Comment::class);
    }


    /**
     * Get the speciality associated with the Doctor
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function speciality()
    {
        return $this->hasOne(User::class);
    }
}
