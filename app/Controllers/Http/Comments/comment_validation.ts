import vine from "@vinejs/vine";

export const CreateValidation = vine.compile(
    vine.object({
        user_id: vine.number(),
        post_id: vine.number(),
        content: vine.string()
    })
)

export const UpdateValidation = vine.compile(
    vine.object({
        content: vine.string()
    })
)

export const PostIdVAlidation = vine.compile(
    vine.object({
        post_id: vine.number()
    })
)