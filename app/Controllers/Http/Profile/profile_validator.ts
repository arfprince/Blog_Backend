import vine from "@vinejs/vine";

export const BlogCreateVAlidation = vine.compile(
    vine.object({
        userId: vine.number(),
        username: vine.string(),
        status: vine.string().in(['public', 'private']),
        content: vine.string(),
        title: vine.string(),
        readTime: vine.number(),
        imageUrl: vine.string()
    })
) 