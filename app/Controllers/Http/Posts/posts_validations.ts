import vine from "@vinejs/vine";

export const DeleteValidation = vine.compile(
    vine.object({
        user_id: vine.number(),
        post_id: vine.number()
    })
) 
export const CreateValidation =  vine.compile(
    vine.object({
        user_id: vine.number(),
        content: vine.string()
    })
)

export const UpdateValidation = vine.compile(
    vine.object({
        user_id: vine.number(),
        post_id: vine.number(),
        content: vine.string()
    })
)