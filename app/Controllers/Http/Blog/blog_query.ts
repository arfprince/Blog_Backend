import Blog from "#models/blogs";

export default class BlogQuery {

    public async getBlogByUserId(user_id: number){
        return await Blog.query().where('userId', user_id);
    }
    public async getBlogByBlogId(blog_id: number){
        return await Blog.query().where('id', blog_id);
    }
    public async deleteBlog(blog_id: number){
        return await Blog.query().delete().where('id', blog_id);
    }
    public async createBlog(payload: {userId: number, username: string, status: 'pubic' | 'private', content: string, title: string, readTime: number, imageUrl: string}){
        return await Blog.create(payload);
    }
    public async getBlogs(){
        return await Blog.query().where('status', 'public');
    }

    public async updateBlogStatus(blog_id: number, status: string){
        return await Blog.query().where('id', blog_id).update({status});
    }

    public async updateBlog(blog_id: number, title: string, content: string, imageUrl: string){
        return await Blog.query().where('id', blog_id).update({title,content,imageUrl});
    }

    public async getFavourites({ user_id }: { user_id: number }) {
        const blogs = await Blog.query()
            .preload('favourite', (query) => query.where('user_id', user_id)) 
            .whereIn('id', (qb) => qb.from('favourites').select('blog_id').where('user_id', user_id))

        return blogs;
    }
    public async getLikes({ user_id }: { user_id: number }) {
        const blogs = await Blog.query()
            .preload('like', (query) => query.where('user_id', user_id)) 
            .whereIn('id', (qb) => qb.from('likes').select('blog_id').where('user_id', user_id))
        return blogs;
    }
    public async updateLike(payload:{blog_id: number, like_count: number}){
        return await Blog.query().where('id', payload.blog_id).update({likeCount: payload.like_count});
    }


} 