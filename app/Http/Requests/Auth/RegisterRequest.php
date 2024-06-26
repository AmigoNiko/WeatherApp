<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name'      => 'required|string|max:255',
            'email'     => 'required|string|unique:users,email|email:rfc,dns',
            'password'  => 'required|string|min:6|confirmed',
            'phone_number'  => 'required|string|size:10',
            'terms'     => 'required|boolean'
        ];
    }

    protected function hashPassword()
    {
        $this->merge([
            'password' => Hash::make($this->input('password'))
        ]);
    }
}
