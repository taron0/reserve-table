export const validationForm = {
    name: /^[a-zA-Z ]{2,30}$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    phone: /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/,
    comments: /^[a-zA-Z ]{2,30}$/,
}