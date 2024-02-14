import Post from "./Post"
export const Posts = () => {

    const posts = [
        {
          "email": "janejoe@gmail.com",
          "body": "Coping skill of the day is  being kind to yourself.",
          "date": new Date("2019-07-31"),
          "first_name": null,
          "last_name": "Joe",
          "id": "1",
          "username": "J23sde",
          "diagnoses": "depression",
        },{
          "email": "allykat@gmail.com",
          "first_name": null,
          "last_name": "Joe",
          "id": "1",
          "username": "J23sde",
          "diagnoses": "depression",
        }
      ]
    
  return (
    <>
    {posts.length > 0 ? posts.map((post) => {
        return <Post key={post.id} post= {post} />
    }) : <p> It's okay to not be okay. </p>}
    </>
  )
}
