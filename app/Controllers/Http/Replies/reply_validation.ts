import vine from "@vinejs/vine";

export const CreateValidation = vine.compile(
    vine.object({
        comment_id: vine.number(),
        user_id: vine.number(),
        content: vine.string()
    })
)

export const UpdateValidation = vine.compile(
    vine.object({
        user_id: vine.number(),
        reply_id: vine.number(),
        content: vine.string()
    })
)