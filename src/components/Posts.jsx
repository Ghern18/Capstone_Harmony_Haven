import Post from "./Post"
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container'


export const Posts = () => {

    const posts = [
        {
        "body": "Coping skill of the day is to be kind to yourself.",
        "id": "3",
        "timestamp": "2024-01-03T00:59:56Z",
        "user": {
            "email": "janejoe@gmail.com",
            "first_name": null,
            "id": "1",
            "last_name": "Joe",
            "username": "J23sde",
            "diagnoses": "depression",
          }     
        },
        {
        "body": "Feeling a bit down lately...", 
        "id": "4",
        "timestamp": "2024-02-03T00:09:56Z",
        "user": {
            "email": "ZackeJae@gmail.com",
            "first_name": null,
            "id": "2",
            "last_name": "Zack",
            "username": "Zoosiiu234",
            "diagnoses": "bipolar",
        }
    }, {
        "body": "I took new meds today! I feel so much better already.", 
        "id": "4",
        "timestamp": "2024-02-04T00:13:56Z",
        "user": {
            "email": "JackyNiso@gmail.com",
            "first_name": null,
            "id": "4",
            "last_name": "Stacy",
            "username": "JAyjsyu8878",
            "diagnoses": "bipolar",
        }
    }, {
        "body": "Anyone knows if their therapists specialize in EMDR? Asking for a friend <3", 
        "id": "5",
        "timestamp": "2024-02-03T00:09:56Z",
        "user": {
            "email": "ZackeJae@gmail.com",
            "first_name": null,
            "id": "2",
            "last_name": "Zack",
            "username": "Zoosiiu234",
            "diagnoses": "bipolar",
        }
    }, {
        "body": "Don't you hate it when the voices are extra loud, while you study?", 
        "id": "7",
        "timestamp": "2023-12-03T00:09:34Z",
        "user": {
            "email": "Sydsea234@gmail.com",
            "first_name": null,
            "id": "2",
            "last_name": "Chavs",
            "username": "Sicuy278",
            "diagnoses": "schizophrenia",
        }
    } 
]
    
  return (
    <Container>
        {posts.length > 0 ? posts.map((post) => {
            return <Post key={post.id} post= {post} />
            }) : <p> It's okay to not be okay. </p>
            }
            </Container>
  )
}
