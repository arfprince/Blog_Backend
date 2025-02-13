import vine from "@vinejs/vine";

export const LoginVAlidation = vine.compile(
    vine.object({
        email: vine.string(),
        password: vine.string()
    })
)
export const CreateValidation = vine.compile(
    vine.object({
        username: vine.string(),
        email: vine.string(),
        password: vine.string()
    })
)