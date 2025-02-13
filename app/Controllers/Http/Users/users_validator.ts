import vine from "@vinejs/vine";

export const getUserByIdValidation = vine.compile(
    vine.object({
        user_id: vine.number()
    })
)

export const createUserValidation = vine.compile(
    vine.object({
        username: vine.string(),
        email: vine.string(),
        password: vine.string()
    })
)

export const updateUserValidation = vine.compile(
    vine.object({
        user_id: vine.number(),
        username: vine.string().optional(),
        email: vine.string().optional(),
        password: vine.string().optional(),
    })
)