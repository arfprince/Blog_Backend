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

export const GetFavourites = vine.compile(
    vine.object({
        user_id: vine.number()
    })
)

export const GetLikes = vine.compile(
    vine.object({
        user_id: vine.number()
    })
)

export const UpdateLikeValidation = vine.compile(
    vine.object({
        blog_id: vine.number(),
        like_count: vine.number()
    })
)