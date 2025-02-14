import vine from "@vinejs/vine";


export const addToFavouriteValidate = vine.compile(
    vine.object({
        blog_id: vine.number(),
        user_id: vine.number(),
    })
)


export const removeFromFavouriteValidate = vine.compile(
    vine.object({
        blog_id: vine.number(),
        user_id: vine.number(),
    })
)
export const getFavouritesByUserIdValidate = vine.compile(
    vine.object({
        user_id: vine.number(),
    })
)