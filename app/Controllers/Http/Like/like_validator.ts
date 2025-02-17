import vine from "@vinejs/vine";

export const AddToLikeValidation = vine.compile(
    vine.object({
        blog_id: vine.number(),
        user_id: vine.number(),
    })
)

export const RemoveFromLikeValidation = vine.compile(
    vine.object({
        blog_id: vine.number(),
        user_id: vine.number()
    })
)

export const GetLikesByUserIdValidation = vine.compile(
    vine.object({
        user_id: vine.number(),
    })
)