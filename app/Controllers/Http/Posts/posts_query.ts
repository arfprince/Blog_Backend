import Post from "#models/post";

export default class PostQuery{
    public async getPost(){ 
        return await Post.query();
    }
    public async createPost(payload: {user_id: number, content: string}){
        return await Post.create(payload);
    }
    public async getPostById(post_id: number){
        return await Post.query().where('post_id', post_id).first();
    }
    public async deletePost(post_id: number){
        return await Post.query().where('post_id', post_id).delete();
    }

    public async updatePost(post_id: number, payload: {content: string}){
        return await Post.query().where('post_id', post_id).update(payload);
    }

    public async postsWithEverything() {
        const posts = await Post.query()
          .select('post_id','user_id', 'content')
          .preload('user', (userQuery) => {
            userQuery.select('username');
          })
          .withCount('reactions')
          .withCount('comments')
          .groupBy('post_id')
      
        return posts;
      }

}