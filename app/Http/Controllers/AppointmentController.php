<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $appointment = Appointment::all();
        return Inertia::render('Appointment/Index',['appointments' => $appointment]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Appointment/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'doctor_id' => ['required'],
            'user_id' => ['required'],
            'date' => ['required'],
            'observations' => ['required'],
            
        ])->validate();

        Appointment::create($request->all());

        return redirect()->route('marcar');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointment $appointment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        return Inertia::render('Appointment/Edit', ['appointments' => $appointment]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request, Appointment $appointment)
    {
        Validator::make($request->all(), [
            'doctor_id' => ['required'],
            'user_id' => ['required'],
            'date' => ['required'],
            'observations' => ['required'],
        ])->validate();

        Appointment::find($id)->update($request->all());
        return redirect()->route('appointments.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Appointment::find($id)->delete();
        return redirect()->route('appointments.index');
    }
}
