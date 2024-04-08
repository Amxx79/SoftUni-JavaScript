function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
    const menu = document.getElementById('posts');
    const title = document.getElementById('post-title');
    const comments = document.getElementById('post-comments');
    const postBody = document.getElementById('post-body');

    const getPostsButtonElement = document.getElementById('btnLoadPosts');
    const viewPostsButtonElement = document.getElementById('btnViewPost')

    getPostsButtonElement.addEventListener('click', async () => {

        while (menu.firstChild) {
            menu.removeChild(firstChild);
        }

        const posts = await fetch(`${postsUrl}`);
        const data = await posts.json();
        for (const post in data) {
            const newOption = document.createElement('option');
            newOption.value = data[post].id;
            newOption.textContent = data[post].title;
            menu.appendChild(newOption);
        }
    })

    viewPostsButtonElement.addEventListener('click', async () => {
        const selectedPost = menu.value;
        console.log(menu);

        const selectPostElement = await fetch(`${postsUrl}/${selectedPost}`);
        const parseDataSetTitle = selectPostElement.json();
        await parseDataSetTitle.then(parseData => {
            title.textContent = parseData.title;
        });

        const getBody = await fetch(`${postsUrl}/${selectedPost}`);
        const parseBody = await getBody.json();
        postBody.textContent = parseBody.body;

        const getAllComments = await fetch(`${commentsUrl}`);
        const parseDataComments = await getAllComments.json();
        console.log(parseDataComments);
        console.log(selectedPost);

        let allCurrentComments = Object.values(parseDataComments)
            .filter(com => com.postId === selectedPost);
        console.log(allCurrentComments);

        while (comments.firstChild) {
            comments.removeChild(comments.firstChild);
        }

        for (const comment of allCurrentComments) {
            const newComment = document.createElement('li');
            newComment.textContent = comment.text;
            comments.appendChild(newComment);
        }
    })
}

attachEvents();