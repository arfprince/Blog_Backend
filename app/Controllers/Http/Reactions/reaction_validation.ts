import vine from "@vinejs/vine";

export const CreateValidation = vine.compile(
    vine.object({
        user_id: vine.number(),
        type: vine.number().min(1).max(4),
        post_id: vine.number().optional(),
        comment_id: vine.number().optional(),
        reply_id: vine.number().optional()
    })
)

export const UpdateValidation = vine.compile(
    vine.object({
        reaction_id: vine.number(),
        type: vine.number().min(1).max(4)
    })
)