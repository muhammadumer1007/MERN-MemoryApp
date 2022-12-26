import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import Posts from './/Post/Posts'
import Spinner from './Spinner'

function PostContainer() {
    let { loader, posts } = useContext(GlobalContext)
    return (
        <>
            <h1>Posts</h1>
            <section className="postsContainer mt-4">
                {
                    !posts.length ?
                        <Spinner />
                        : (<div className="row">
                            {
                                posts.map((e) => {
                                    return (
                                        <Posts posts={e} key={e._id} />
                                    )
                                })
                            }
                        </div>)
                }

            </section>
        </>
    )
}

export default PostContainer