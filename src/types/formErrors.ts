interface FormErrors {
    name?: string;
    age?: string;
    email?: string;
    password?: string;
    repeatPassword?: string;
    gender?: string;
    image?: File | string;
    terms?: string;
    country?: string;
    textarea?: string;
}

export default FormErrors;